let x = document.getElementById("lat");
let latitude = document.getElementById("latitude");

let longitude = document.getElementById("longitude");
let y = document.getElementById("long");

latitude.addEventListener('click', getLocationLat);
longitude.addEventListener('click', getLocationLong);


function getLocationLat() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            x.innerHTML = "Latitude: " + position.coords.latitude;
        });
    }
}

function getLocationLong() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            y.innerHTML = "Longitude: " + position.coords.longitude;
        });
    }
}



let copy = document.getElementById("copier");
copy.addEventListener('click', copyText);

function copyText() {
    navigator.clipboard.writeText(document.getElementById("textecopie").value).then(function() {
        console.log("texte copié !");
    });
}

let paste = document.getElementById("coller");
paste.addEventListener('click', pasteText);

function pasteText() {
    navigator.clipboard.readText().then(
        document.getElementById("textecolle").innerHTML = "oui",
        console.log("collé"),);
}