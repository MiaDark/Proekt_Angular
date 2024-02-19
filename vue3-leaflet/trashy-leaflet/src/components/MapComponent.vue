<template>
  <div>
    <nav-bar></nav-bar>
    <div id="map"></div>
  </div>
</template>

<script setup lang="ts">
import NavBar from './NavBarComponent.vue';
import { ref, onMounted } from 'vue';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Define a type alias for coordinates
type Coordinates = [number, number];

const createMap = (zoom: number, center: L.LatLngExpression) => {
  return L.map('map').setView(center, zoom);
};

const map = ref<L.Map | null>(null);

onMounted(() => {
  if (!map.value) {
    map.value = createMap(13, [42.003, 21.436] as L.LatLngExpression);
  }

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map.value!);

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latlng = [position.coords.latitude, position.coords.longitude] as Coordinates;

        const circleMarker: L.CircleMarker = L.circleMarker(latlng, {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 1,
          radius: 8,
        })
          .addTo(map.value!)
          .bindPopup('Your current location: ');

        // Add bounce effect using CSS animation
        circleMarker.getElement().style.animation = 'bounce 2s infinite';

        map.value!.panTo(latlng);
      },
      (error) => {
        console.error('Error getting location:', error.message);
      }
    );
  } else {
    console.error('Geolocation is not supported by the browser!');
  }
  const dumpsterLocations = [
    { lat: 42.002441, lng: 21.417243, name: 'Dumpster 1' },
      { lat: 41.995124, lng: 21.414344, name: 'Dumpster 2' },
      { lat: 42.001583, lng: 21.413458, name: 'Dumpster 3' },
      { lat: 42.001028, lng: 21.411649, name: 'Dumpster 4' },
      { lat: 42.005238, lng: 21.410259, name: 'Dumpster 5' },
      { lat: 41.9912222, lng: 21.4290000, name: 'Dumpster 6' },
      { lat: 42.005653, lng: 21.417839, name: 'Dumpster 7' },
      { lat: 42.003647, lng: 21.417472, name: 'Dumpster 8' },
      { lat: 41.9912222, lng: 21.4290000, name: 'Dumpster 9' },
     { lat: 42.003659, lng: 21.416397, name: 'Dumpster 10' },
     { lat: 42.003250, lng: 21.421074, name: 'Dumpster 11' },
     { lat: 41.9912222, lng: 21.4290000, name: 'Dumpster 12' },
     { lat: 41.986350, lng: 21.447005, name: 'Dumpster 13' },
     { lat: 42.004517, lng: 21.433929, name: 'Dumpster 14' },
     { lat: 41.999609, lng: 21.451700, name: 'Dumpster 15' },
     { lat: 41.988182, lng: 21.461848, name: 'Dumpster 16' },
     { lat: 41.986720, lng: 21.472802, name: 'Dumpster 17' },
     { lat: 41.991095, lng: 21.438728, name: 'Dumpster 18' },
     { lat: 41.984406, lng: 21.447261, name: 'Dumpster 19' },
     { lat: 41.985553, lng: 21.446257, name: 'Dumpster 20' }
    ];
  
    dumpsterLocations.forEach((location) => {
      const dumpsterLocation: L.LatLngExpression = [location.lat, location.lng];
  
      const dumpsterIcon = L.icon({
        iconUrl: '../src/dumpster.png',
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15],
      });
  
      const dumpsterMarker = L.marker(dumpsterLocation, { icon: dumpsterIcon })
        .addTo(map.value!)
        .bindPopup(location.name);
    });
});
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#map {
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  z-index: 1;
}

/* Define bounce animation */
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
</style>
