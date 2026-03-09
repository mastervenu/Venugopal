let map

function initMap(){

map = new google.maps.Map(document.getElementById("map"),{

center:{lat:11.0168,lng:76.9558},
zoom:12

})

}

function getLocation(){

navigator.geolocation.getCurrentPosition(function(position){

let lat = position.coords.latitude
let lon = position.coords.longitude

document.getElementById("location").value = lat + "," + lon

map.setCenter({lat:lat,lng:lon})

new google.maps.Marker({

position:{lat:lat,lng:lon},
map:map

})

})

}

function submitRequest(){

let data = {

name:document.getElementById("name").value,
vehicle:document.getElementById("vehicle").value,
service:document.getElementById("service").value,
problem:document.getElementById("problem").value,
location:document.getElementById("location").value

}

fetch("http://localhost:3000/request",{

method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(data)

})

.then(res=>res.text())
.then(data=>alert(data))

}