<template>
    <div id="map" ></div>
  </template>
  
  <script>
  import L from 'leaflet';
  
  export default {
    
    mounted() {
      this.initMap();
      
    },
    computed:{
      currentUser() {
        return this.$store.getters.currentUserdata;
    }
    },
    methods: {
      initMap() {
        
        
        if (Object.keys(this.$route.query).length === 0) {
          const map = L.map('map').setView([this.currentUser.Latitude, this.currentUser.Longitude], 15);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map);
          var marker = L.marker([this.currentUser.Latitude, this.currentUser.Longitude]).addTo(map);
          marker.bindPopup(`<img style="display:block; width: 80px; border-radius:80px; margin: 0 auto" src='${this.currentUser.pfpic}'/><br><b>Hello world! ${this.currentUser.name} is here</b>.`).openPopup();
        }else{
          
          const Latitude = parseFloat(this.$route.query.Latitude);
          const Longitude = parseFloat(this.$route.query.Longitude);
          const name  = this.$route.query.name;
          const pfpic  = this.$route.query.pfpic;
          const map = L.map('map').setView([Latitude, Longitude], 15);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map);
          var marker = L.marker([Latitude, Longitude]).addTo(map);
          marker.bindPopup(`<img style="display:block; width: 80px; border-radius:80px; margin: 0 auto" src='${pfpic}'/><br><b>Hello world! ${name} is here</b>.`).openPopup();
        }    
      }
    }
  }
  </script>
  
  <style scoped>
      #map {
        width: 100%;
        height: 93vh;
      }
  </style>
  