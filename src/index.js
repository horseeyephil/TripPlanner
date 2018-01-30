const buildmarker = require('./marker.js')

console.log("Does this work???")



const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoiaG9yc2VleWVwaGlsIiwiYSI6ImNqZDF3ZHptaTI0OHkyeG4ydTM2cWdhNmIifQ.vvmBOCZBWKb3rKghrQwVlw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


const first = document.getElementById('first-marker')

new mapboxgl.Marker(first).setLngLat([-74.009151, 40.705086]).addTo(map)

//