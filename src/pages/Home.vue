<template>
    <div class="content">
        <h1 class="text-primary fw-bold">{{ message }},{{ currentUser.name }} !</h1>
        <br>
        
        <img class="w-25  profilePc" :src="currentUser.pfpic" alt="profilepic">
        <p v-if="error">
        <code>{{ error }}</code>
        </p>
  </div>
</template>

<script>
import liff from "@line/liff";
import store from "../store";
import { mapState } from 'vuex';
export default {
  data() {
    return {
      message:"Welcome",
      error:"",   
    };
  },
  computed: {
    ...mapState([
      'user' ,
      'currentUserId'
    ]),
    currentUser() {
      return this.$store.getters.currentUserdata;
    }
  },
  mounted() {
    
    console.log(this.currentUser)
  }
};
</script>

<style>
      .content {
        height: 93vh;
        padding-top: 50px;
      }
      .profilePc{
          animation: morph 8s ease-in-out infinite;
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          transition: all 2s ease-in-out;
          border: 3px solid black;
            }
      @keyframes morph {
            0% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                }

            50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
                }

            100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                }
        }      
        
</style>