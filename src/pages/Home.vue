<template>
    <div>
        <h1 class="text-primary">THE Map</h1>
        <p v-if="message" class="fs-4">{{ message }} {{ name }}</p>
        
        <img class="w-25 rounded-5" :src="pfimg" alt="profilepic">
        <p v-if="error">
        <code>{{ error }}</code>
        </p>
  </div>
</template>

<script>
import liff from "@line/liff";
import store from "../store";

export default {
  data() {
    return {
      message: "",
      error: "",
      name:"",
      pfimg:"",
      userId:"",
      userData:{}
    };
  },
  mounted() {
    // liff.init({liffId: import.meta.env.VITE_LIFF_ID})
    //   .then(() => {
    //         this.message = "Welcome,";
            
    //         liff.getProfile().then((profile) => {
    //           this.name = profile.displayName;
    //           this.pfimg = profile.pictureUrl
    //           this.userId = profile.userId
    //           navigator.geolocation.getCurrentPosition(
    //             (position)=>{
    //                 this.userData =  {
    //                     userId : profile.userId,
    //                     name:profile.displayName,
    //                     pfpic:profile.pictureUrl,
    //                     Latitude:position.coords.latitude,
    //                     Longitude:position.coords.longitude
    //                 }
    //                 store.dispatch('addUserData',this.userData)
    //                 console.log(this.$store.state.user)
    //             }
    //         )
              
    //         }).catch((err) => {
    //           console.log("error", err);
    //         });
            
            
    //   })
          
    //   .catch((e) => {
    //     this.message = "LIFF init failed.";
    //     this.error = `${e}`;
    //   });
    
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>