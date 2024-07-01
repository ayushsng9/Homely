mapboxgl.accessToken = mapboxToken;
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/streets-v12', // style URL
  center: foundHome.geometry.coordinates, // starting position [lng, lat]
  zoom: 8, // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker({color:'red'})
    .setLngLat(foundHome.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({offset:25})
            .setHTML(
                `<h4>${foundHome.title}</h4> <h6>${foundHome.location}</h6>`
            )
    )
    .addTo(map)