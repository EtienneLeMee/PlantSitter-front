var x = document.getElementById("demo");
navigator.geolocation.getCurrentPosition(showPosition);
var positionIcon = L.icon({
    iconUrl: 'images/position-icon.png',
    iconSize:     [80, 80], // size of the icon
    iconAnchor:   [40, 40], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});

var agriIcon = L.icon({
    iconUrl: 'images/google-pin.png',
    iconSize:     [30, 40], // size of the icon
    iconAnchor:   [15,45], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});

var RedIcon = L.icon({
    iconUrl: 'images/marker-icon-2x.png',
    shadowUrl: 'images/marker-shadow.png',
    iconAnchor: [13, 41],
    popupAnchor: [0, -35]
});

var BlueIcon = L.icon({
    iconUrl: 'images/marker-icon-2x-blue.png',
    shadowUrl: 'images/marker-shadow.png',
    iconAnchor: [13, 41],
    popupAnchor: [0, -35]
});
listeMakers = []
listePopup = []

function showPosition(position) {
    map.panTo(new L.LatLng(position.coords.latitude, position.coords.longitude));
    var marker = L.marker([position.coords.latitude, position.coords.longitude], {icon: positionIcon}).addTo(map);
    var marker2 = L.marker([47.21655123913887, -1.5653157228743377],{title:'2'}).addTo(map).on('click', markerOnClick);
    marker2.bindPopup("<b>Ferme France</b><br><br>16 Bd Gabriel Guist'Hau<br>44000 Nantes")
    var marker4 = L.marker([47.16895814373512, -1.5984463686934567],{title:'4'}).addTo(map).on('click', markerOnClick);
    marker4.bindPopup("<b>La Cle Des Champs</b><br><br>Chem. de la Ranjonnière<br>44340 Bouguenais")
    var marker3 = L.marker([47.24499338216167, -1.4897847167248046],{title:'3'}).addTo(map).on('click', markerOnClick);
    marker3.bindPopup("<b>Ferme du Bois des Anses</b><br><br>Chem. du Bois des Anses<br>44300 Nantes")
    var marker1 = L.marker([47.20089474559414, -1.5577486624647083],{title:'1'}).addTo(map).on('click', markerOnClick);
    marker1.bindPopup("<b>L'Agronaute | Pépinière, ferme urbaine, événements</b><br><br>Ancien MiN, Rue du Sénégal<br>44200 Nantes")
    var marker5 = L.marker([47.22494559009846, -1.6607594487052966],{title:'5'}).addTo(map).on('click', markerOnClick);
    var popup5 = marker5.bindPopup("<b>Ferme de la Chasseloire</b><br><br>Rue de l'Ouchetien<br>44800 Saint-Herblain")
    listeMakers.push(marker1)
    listeMakers.push(marker2)
    listeMakers.push(marker3)
    listeMakers.push(marker4)
    listeMakers.push(marker5)
}

var map = L.map('map').setView([51.505, -0.09], 11);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


function selectMarker(e){
    listeMakers.forEach(element => {
        element.setIcon(BlueIcon);
        element.closePopup();
        
    });
    listeMakers[e-1].openPopup();
    listeMakers[e-1].setIcon(RedIcon);
    for(var j=1; j<6;j++){
        document.getElementById(j).style.backgroundColor = 'white';
        document.getElementById(j.toString()+"-cercle").style.backgroundColor = '#EF920F';
        document.getElementById(j.toString()+"-cercle").style.color = 'black';
        document.getElementById(j.toString()+"-title").style.color = '#EF920F';
        document.getElementById(j).style.height = '120px';
    }
    document.getElementById(e).style.backgroundColor = '#EF920F';
    document.getElementById(e+"-cercle").style.backgroundColor = 'white';
    document.getElementById(e+"-cercle").style.color = '#EF920F';
    document.getElementById(e+"-title").style.color = 'white';
    document.getElementById(e).style.height = '260px';
}

function markerOnClick(e){
    listeMakers.forEach(element => {
        element.setIcon(BlueIcon);
        element.closePopup();
        
    });
    for(var j=1; j<6;j++){
        document.getElementById(j).style.backgroundColor = 'white';
        document.getElementById(j.toString()+"-cercle").style.backgroundColor = '#EF920F';
        document.getElementById(j.toString()+"-cercle").style.color = 'black';
        document.getElementById(j.toString()+"-title").style.color = '#EF920F';
        document.getElementById(j).style.height = '120px';
    }
    e.target.setIcon(RedIcon)
    document.getElementById(this.options.title).style.backgroundColor = '#EF920F';
    document.getElementById(this.options.title+"-cercle").style.backgroundColor = 'white';
    document.getElementById(this.options.title+"-cercle").style.color = '#EF920F';
    document.getElementById(this.options.title+"-title").style.color = 'white';
    document.getElementById(this.options.title).style.height = '260px';
}


