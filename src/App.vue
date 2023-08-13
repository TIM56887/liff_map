<template>
  <div>
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import liff from "@line/liff";
import Home from "./components/Home.vue";
import NavBar from './components/NavBar.vue';
import store from "./store";
export default {
  data(){
    return{
      userData:{}
    }
  },
  components:{
    Home,
    NavBar

  },
  mounted() {
    liff.init({liffId: import.meta.env.VITE_LIFF_ID})
      .then(() => {

        if (!liff.isLoggedIn()){
          // liff.login();
        }
            
            
            
            liff.getProfile().then((profile) => {
              
              navigator.geolocation.getCurrentPosition(
                (position)=>{
                    this.userData =  {
                        userId : profile.userId,
                        name:profile.displayName,
                        pfpic:profile.pictureUrl,
                        statusMessage:profile.statusMessage,
                        Latitude:position.coords.latitude,
                        Longitude:position.coords.longitude
                    }
                    store.dispatch('addUserData',this.userData)
                    
                }
            )
              
            }).catch((err) => {
              console.log("error", err);
            });
            
            
      })
          
      .catch((e) => {
        this.message = "LIFF init failed.";
        this.error = `${e}`;
      });
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
