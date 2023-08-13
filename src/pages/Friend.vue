<template>
  <div class="container-xxl page">
    <div class="row content-box justify-content-center">
        <div class="col-11 col-md-7">
            <h1 class="fw-bold">Friends list</h1>
            <FriendItem v-for="user in user" :key="user.userId" :user="user"/>
        </div>
    </div>
  </div>
</template>

<script>
import FriendItem from '../components/FriendItem.vue';
import { mapState } from 'vuex';
export default {
    components:{
        FriendItem
    },
    computed: {
        ...mapState([
        'user' 
        ])
  }
    
}
</script>

<style scoped>
    .page{
        height: 93vh;
    }
    .content-box {
        height: 100%;
        margin-top: 10px;
    }
    h1 {
        margin-bottom: 15px;
    }
</style>