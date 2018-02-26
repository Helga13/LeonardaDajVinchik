if (document.getElementById('map')) {
	//console.log('Map exist');
	$(function () {})
	var styles = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#a5d6f0"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#a5d6f0"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#a5d6f0"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#a5d6f0"
            },
            {
                "lightness": 17
            }
        ]
    }
];
	var markers = [];

	function initMap() {
		var myOptions = {
			zoom: 16
			, center: new google.maps.LatLng(53.9125824, 27.557836)
//			, disableDefaultUI: true
			, scrollwheel: false
			, mapTypeControl: false
			, streetViewControl: false
//			, navigationControl: true
			, zoomControlOptions: {
				style: google.maps.ZoomControlStyle.SMALL
				, position: google.maps.ControlPosition.LEFT_TOP
			}
			, mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'tehgrayz']
			}
            , fullscreenControlOptions: {
              position: google.maps.ControlPosition.LEFT_BOTTOM
            }
		};
		var map = new google.maps.Map(document.getElementById('map'), myOptions);
		var mapType = new google.maps.StyledMapType(styles, {
			name: "Grayscale"
		});
		map.mapTypes.set('tehgrayz', mapType);
		map.setMapTypeId('tehgrayz');
		setMarkers(map);
	}
	var beaches = [];
	$('.maps').each(function (index) {
		var cur_coords = [];
		cur_coords[0] = $(this).data('longitude');
		cur_coords[1] = $(this).data('latitude');
		beaches[index] = cur_coords;
	});
	var contentString = beaches[1];

	function setMarkers(map) {
		var image = {
			url: 'img/icons/icon_location.png'
			, size: new google.maps.Size(24, 35)
			, origin: new google.maps.Point(0, 0)
			, anchor: new google.maps.Point(12, 35)
		};
		var markersBounds = new google.maps.LatLngBounds();
		for (var i = 0; i < beaches.length; i++) {
			var beach = beaches[i];
			var markerPosition = new google.maps.LatLng(beach[0], beach[1]);
			var marker = new google.maps.Marker({
				position: markerPosition
				, map: map
				, icon: image
			});
		}
	};
	initMap();
}