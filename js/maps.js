var map
var newYork = {lat: 40.7128, lng: -74.0060};

function initMap() {
  map = new google.maps.Map(document.getElementById('map-area'), {
    center: newYork,
    zoom: 11
  });

  var marker = new google.maps.Marker({position: newYork, map: map, title: 'New York, NY'});

  var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">New York, New York</h1>'+
    '<div id="bodyContent">'+
    '<p><b>New York</b>' + ' comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.</p>'+
    '</div>'+ '</div>';



    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
      });

}
