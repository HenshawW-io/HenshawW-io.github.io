var mymap = L.map('mapid', {
    fullscreenControl: true
});
var options = {
    key: geocoder_api_key,
    limit: 10
};

var control = L.Control.openCageSearch(options).addTo(mymap);
/* MAPBOX TILE LAYER
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    accessToken: mapbox_access_token,
}).addTo(mymap);
*/

// comment out for question 2
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
}).addTo(mymap);

//    exercise for question 2
//    L.tileLayer('https://c.tile.opentopomap.org/3/1/2.png', {
//     }).addTo(mymap);

// add a marker

// var marker = L.marker([51.5, -0.09]).addTo(mymap);
/*
// add a circle
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500,
}).addTo(mymap);

// add a polygon
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

var polyline = L.polyline([
    [51.506, -0.08],
    [51.502, -0.06],
    [51.507, -0.047],
], {color: 'red'}).addTo(mymap);

// add popup windows for each object
marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();
circle.bindPopup('I am a circle.');
polygon.bindPopup('I am a polygon.');

// change the zoom on click for each object
marker.on('click', function(e) {
    mymap.setView(e.latlng, 14);
});

circle.on('click', function (e) {
    mymap.setView(e.latlng, 13);
});

polygon.on('click', function (e) {
    mymap.setView(e.latlng, 13);
});

var ZoomViewer = L.Control.extend({
    onAdd: function() {
        var gauge = L.DomUtil.create('div');
        gauge.style.width = '200px';
        gauge.style.background = 'rgba(255, 255, 255, 0.5)';
        gauge.style.textAlign = 'left';
        mymap.on('zoomstart zoom zoomend', function(ev) {
            gauge.innerHTML = 'Zoom level: ' + mymap.getZoom();
        })
        return gauge;
    }
});

(new ZoomViewer).addTo(mymap);
*/
const sevenWondersCoords = [
    { lat: 27.175194891694197, lng: 78.0421502442268 },
    { lat: 40.432087343135194, lng: 116.5703856268431 },
    { lat: 30.33502820708055, lng: 35.48191601884472 },
    { lat: -22.951708516162586, lng: -43.21049793101007 },
    { lat: -13.162921804841492, lng: -72.54495217350143 },
    { lat: 24.73044926589293, lng: -89.34602784437998 },
    { lat: 41.89037790223586, lng: 12.492241626880435 }
];

const sevenWondersNames = [
    'Taj Mahal',
    'Great Wall of China',
    'Petra',
    'Christ the Redeemer',
    'Machu Picchu',
    'Chichen Itza',
    'Colosseum'
];

const contentString = [
    // Taj Mahal
    '<div id="content">' +
    '<img class="picture" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Taj-Mahal.jpg/1024px-Taj-Mahal.jpg" width="50%" height="50%">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Taj Mahal</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Taj Mahal</b>, also referred to as <b>Crown of the Palace</b>, is an " +
    "ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. " +
    "It was commissioned in 1632 by the Mughal emperor Shah Jahan " +
    "(reigned from 1628 to 1658) to house the tomb of his favourite wife, Mumtaz Mahal; " +
    "it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of " +
    "a 17-hectare (42-acre) complex, which includes a mosque and a guest house, " +
    "and is set in formal gardens bounded on three sides by a crenellated wall.</p>" +
    '<p>Attribution: Taj Mahal,<ahref = "https://en.wikipedia.org/wiki/Taj_Mahal">' +
    " https://en.wikipedia.org/wiki/Taj_Mahal</a>" +
    ".</p>" +
    "</div>" +
    "</div>",
    // Great Wall 
    '<div id="content">' +
    '<img class="picture" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/20090529_Great_Wall_8185.jpg/1024px-20090529_Great_Wall_8185.jpg" width="50%" height="50%">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">The Great Wall of China</h1>' +
    '<div id="bodyContent">' +
    "<p><b>The Great Wall of China</b> is a series of fortifications that were built " +
    "across the historical northern borders of ancient Chinese states and Imperial China as protection against various  " +
    "nomadic groups from the Eurasian Steppe.</p>" +
    '<p>Attribution: Great Wall of China,<ahref = "https://en.wikipedia.org/wiki/Great_Wall_of_China">' +
    " https://en.wikipedia.org/wiki/Great_Wall_of_China </a>" +
    ".</p>" +
    "</div>" +
    "</div>",
    // Petra
    '<div id="content">' +
    '<img class="picture" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/View_of_Petra.jpg/1024px-View_of_Petra.jpg" width="50%" height="50%">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Petra</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Petra</b>, originally known to its inhabitants as Raqmu or Raqēmō, " +
    "is a historic and archaeological city in southern Jordan. It is adjacent to the mountain of Jabal Al - Madbah, " +
    "in a basin surrounded by mountains forming the eastern flank of the Arabah valley running from the Dead Sea to the Gulf of Aqaba.</p>" +
    '<p>Attribution: Petra,<ahref = "https://en.wikipedia.org/wiki/Petra">' +
    " https://en.wikipedia.org/wiki/Petra </a>" +
    ".</p>" +
    "</div>" +
    "</div>",
    // Christ the Redeemer
    '<div id="content">' +
    '<img class="picture" src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Aerial_view_of_the_Statue_of_Christ_the_Redeemer.jpg" width="50%" height="50%">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Christ the Redeemer</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Christ the Redeemer</b> is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, " +
    "created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, " +
    "in collaboration with French engineer Albert Caquot. Romanian sculptor Gheorghe Leonida fashioned the face.</p>" +
    '<p>Attribution: Christ the Redeemer,<ahref = "https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)">' +
    " https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue) </a>" +
    ".</p>" +
    "</div>" +
    "</div>",
    // Machu Picchu
    '<div id="content">' +
    '<img class="picture" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/1024px-Machu_Picchu%2C_Peru.jpg" width="50%" height="50%">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Machu Picchu</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Machu Picchu</b> is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru " +
    "on a 2,430-meter mountain ridge. It is located in the Machupicchu District within Urubamba Province " +
    "above the Sacred Valley, which is 80 kilometers northwest of Cuzco.</p>" +
    '<p>Attribution: Machu Picchu,<ahref = "https://en.wikipedia.org/wiki/Machu_Picchu">' +
    " https://en.wikipedia.org/wiki/Machu_Picchu </a>" +
    ".</p>" +
    "</div>" +
    "</div>",
    // Chichen Itza
    '<div id="content">' +
    '<img class="picture" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Chichen_Itza_3.jpg/1024px-Chichen_Itza_3.jpg" width="50%" height="50%">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Chichen Itza</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Chichen Itza</b> was a large pre-Columbian city built by the Maya people of the Terminal Classic period. " +
    "The archeological site is located in Tinúm Municipality, Yucatán State, Mexico. Chichen Itza was a major focal " +
    "point in the Northern Maya Lowlands from the Late Classic through the Terminal Classic and into the early portion " +
    "of the Postclassic period.</p>" +
    '<p>Attribution: Chichen Itza,<ahref = "https://en.wikipedia.org/wiki/Chichen_Itza">' +
    " https://en.wikipedia.org/wiki/Chichen_Itza </a>" +
    ".</p>" +
    "</div>" +
    "</div>",
    // Colosseum
    '<div id="content">' +
    '<img class="picture" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1024px-Colosseo_2020.jpg" width="50%" height="50%">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Colosseum</h1>' +
    '<div id="bodyContent">' +
    "<p><b>The Colosseum</b> is an oval amphitheatre in the centre of the city of Rome, Italy, " +
    "just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and " +
    "is still the largest standing amphitheatre in the world today, despite its age.</p>" +
    '<p>Attribution: Colosseum,<ahref = "https://en.wikipedia.org/wiki/Great_Wall_of_China">' +
    " https://en.wikipedia.org/wiki/Colosseum </a>" +
    ".</p>" +
    "</div>" +
    "</div>"
];

var symbols = [
    "../Lab5_Submission/mapiconscollection-markers/tweet.png",
    "../Lab5_Submission/mapiconscollection-markers/usfootball.png",
    "../Lab5_Submission/mapiconscollection-markers/cheese.png",
    "../Lab5_Submission/mapiconscollection-markers/fruits.png",
    "../Lab5_Submission/mapiconscollection-markers/recycle.png",
    "../Lab5_Submission/mapiconscollection-markers/stop.png",
    "../Lab5_Submission/mapiconscollection-markers/symbol_dollar.png"
];

var myRepeatingMarkers = L.gridLayer.repeatedMarkers().addTo(mymap);

for (var i = 0; i < contentString.length; i++) {
    var myIcon = L.icon({iconUrl: symbols[i]});
    var marker = L.marker(
        sevenWondersCoords[i],
        {icon: myIcon}
        ).bindPopup(contentString[i]);
    myRepeatingMarkers.addMarker(marker);
}
mymap.setView([0, 0], 1);

L.control.mousePosition().addTo(mymap);