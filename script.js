mapboxgl.accessToken = 'pk.eyJ1IjoibmFuYXVpIiwiYSI6ImNsa2pyNXk3dTBrejIzZm9hdG00bHp0ZTAifQ.7Vdub5yB9zfbQUwzJnLNeQ'

const map = new mapboxgl.Map({
container: 'map', // container ID
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style:'mapbox://styles/nanaui/clkju9ouz006201qkawcognv7', // style URL
center: [-39, -15], // starting position [lng, lat]
zoom: 8, // starting zoom
});



