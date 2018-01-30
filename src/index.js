
const mapboxgl = require("mapbox-gl");
const markerTools = require('./marker.js')

console.log("Does this work???")



mapboxgl.accessToken = "pk.eyJ1IjoiaG9yc2VleWVwaGlsIiwiYSI6ImNqZDF3ZHptaTI0OHkyeG4ydTM2cWdhNmIifQ.vvmBOCZBWKb3rKghrQwVlw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


const first = document.getElementById('first-marker')




function Place(name,coord,type){
    this.name = name;
    this.coord = coord;
    this.type = type;
}

const newMuseum = new Place("New Museum", [-73.99289, 40.722338], "attraction")
const tenementMuseum = new Place("Tenement Museum", [-73.989308, 40.741895], "attraction")
const highlineHotel = new Place("Highline Hotel", [-74.004998, 40.745991], "hotel")
const chelseaHotel = new Place("Chelsea Hotel", [-73.996937, 40.744484], "hotel")



function createNewAttraction(attractionObj){
    console.log('Got ', attractionObj)
    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.innerHTML = attractionObj.name;
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundColor = "white";
    markerDomEl.className = attractionObj.type;
    //markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
    console.log( "LOOK HERE!!", markerTools.buildmarker(markerDomEl, attractionObj.coord))
    markerTools.buildmarker(markerDomEl, attractionObj.coord).addTo(map)
}


markerTools.buildmarker(first,[-74.009151, 40.705086]).addTo(map)


const ourPlaces = [newMuseum, tenementMuseum]
const ourHotels = [highlineHotel, chelseaHotel]

document.getElementById("Museum Button").onmouseover = function(){
    const hotels = document.getElementsByClassName("hotel")
    console.log('These are hotels', hotels)
    Array.prototype.forEach.call(hotels, (idx)=>{
        if(idx) idx.className += 'hidden'
    })
    ourPlaces.forEach(idx=>{
        createNewAttraction(idx)
    })
}


document.getElementById("Hotel Button").onmouseover = function(){

    ourHotels.forEach(idx=>{
        createNewAttraction(idx)
    })
}

document





//markerTools.createNewAttraction(newMuseum);



//new mapboxgl.Marker(first).setLngLat([-74.009151, 40.705086]).addTo(map)
//-> same as
//buildmarker()



module.exports = {
    map: map
}