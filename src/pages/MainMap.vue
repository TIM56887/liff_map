<template>
    <div id="map" style="width: 100%; height: 100vh;"></div>
  </template>
  
  <script>
  import L from 'leaflet';
  
  export default {
    data(){
      return{
        user:this.$store.state.user[0]
      }
    },
    mounted() {
      this.initMap();
    },
    methods: {
      initMap() {
        const map = L.map('map').setView([this.user.Latitude, this.user.Longitude], 15);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        var marker = L.marker([this.user.Latitude, this.user.Longitude]).addTo(map);
        marker.bindPopup(`<img style="display:block; width: 80px; border-radius:80px; margin: 0 auto" src='${this.user.pfpic}'/><br><b>Hello world! ${this.user.name} is here</b>.`).openPopup();
      }
    }
  }
  </script>
  
  <style scoped>

  </style>
  