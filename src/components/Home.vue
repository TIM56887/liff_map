<template>
    <div>
        <h1 class="text-primary">THE Map</h1>
        <p v-if="message" class="fs-4">{{ message }} {{ profile }}</p>
        
        <img class="w-25 rounded-5" :src="pfimg" alt="profilepic">
        <p v-if="error">
        <code>{{ error }}</code>
        </p>
  </div>
</template>

<script>
import liff from "@line/liff";

export default {
  data() {
    return {
      message: "",
      error: "",
      profile:"",
      pfimg:""
    };
  },
  mounted() {
    liff.init({liffId: import.meta.env.VITE_LIFF_ID})
      .then(() => {
            this.message = "Welcome,";
            if (!liff.isLoggedIn()) {
              liff.login();
            }
            liff.getProfile().then((profile) => {
              this.profile = profile.displayName;
              this.pfimg = profile.pictureUrl
            })
            
      .catch((err) => {
              console.log("error", err);
            });
      })
          
      .catch((e) => {
        this.message = "LIFF init failed.";
        this.error = `${e}`;
      });
    
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