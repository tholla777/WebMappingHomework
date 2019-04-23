// Store our API endpoint inside queryUrl
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
  // Once we get a response, send the data.features object to the createFeatures function
  createFeatures(data.features);
});


// Define a markerSize function that will give each city a different radius based on its earthquake size
function markerSize(sig) {
  return sig ;
}



function createFeatures(earthquakeData) {

  // Define a function we want to run once for each feature in the features array
  // Give each feature a popup describing the place and time of the earthquake
  function onEachFeature(feature, layer) {
    layer.bindPopup("<h3>" + feature.properties.place +
      "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
  }

  // Create a GeoJSON layer containing the features array on the earthquakeData object
  // Run the onEachFeature function once for each piece of data in the array
  var earthquakes = L.geoJSON(earthquakeData, {
    onEachFeature: onEachFeature
  });

  // Sending our earthquakes layer to the createMap function
  createMap(earthquakes);
}



// Each city object contains the city's name, location and population
var earthquakes = new L.LayerGroup();


function createMap(earthquakes) {

  // Define streetmap
  var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  });

  // Define a baseMaps object to hold our base layers
  //var baseMaps = {
  //  "Street Map": streetmap
  //};

  // Create overlay object to hold our overlay layer
  //var overlayMaps = {
  //  Earthquakes: earthquakes
  //};

  // Create our map, giving it the streetmap and earthquakes layers to display on load
  var myMap = L.map("map", {
    center: [
      37.09, -95.71
    ],
    zoom: 5,
    layers: [streetmap, earthquakes]
  });

streetmap.addTo (myMap);
D3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson");
function MapQuake(MapRadius){
  return {
    opacity: 0.5,
    fillOpacity: 0.75,
    color: "orange",
    fillColor: GetColor(MapRadius.properties.MagSize) ,
    radius: GetRadius(MapRadius.properties.MagSize),
  }
}
function GetRadius(MagSize){
  if(magnitude===0{
    return 1;
    
  
  }
  return magnitude*4;)
}

L.geoJSON(earthquakeData,{
  pointToLayer: function(MapRadius, LatLon){
    return L.circlemaker(LatLon);

  },
  style: MapQuake,function onEachFeature(feature, layer) {
    layer.bindPopup("<h3>" + feature.properties.place +
      "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
  }
}).addTo(earthquakes);
earthquakes.addTo(myMap)
}
function GetColor(MagSize){
  switch(true){
    case MagSize >5:
      return "red";

    case MagSize >4:
      return "orange";
    
    case MagSize >3:
      return "tangerine";
      
    case MagSize >2:
      return "orange";

    case MagSize >1:
      return "lime";

    default:
      return "green";
  }

}
  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
}

//add legend
//barLegend = 
//add details to legend (colors and numbers)
//var colors to create the colors
//addToMap
//Loop through the intervals to create 

// Loop through the earthquakes array and create one marker for each sig object
//for (var i = 0; i < earthquakes.length; i++) {
//  L.circle(earthquakes[i].location, {
//    fillOpacity: 0.75,
//    color: "white",
//    fillColor: "purple",
    // Setting our circle's radius equal to the output of our markerSize function
    // This will make our marker's size proportionate to its population
//    radius: markerSize(earthquakes[i].sig)
//  }).bindPopup("<h1>" + earthquakes[i].sig + "</h1> <hr> <h3>Sig: " + "</h3>").addTo(myMap);
//}


// Loop through the cities array and create one marker for each city object
//for (var i = 0; i < cities.length; i++) {
 // L.circle(cities[i].location, {
//    fillOpacity: 0.75,
//    color: "white",
//    fillColor: "purple",
    // Setting our circle's radius equal to the output of our markerSize function
    // This will make our marker's size proportionate to its population
//    radius: markerSize(cities[i].population)
//  }).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>Population: " + cities[i].population + "</h3>").addTo(myMap);
//}
