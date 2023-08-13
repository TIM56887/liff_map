<template>
  <div class="row shadow-lg p-3 mb-5 bg-body-tertiary rounded align-items-center">
    <div class="col-2"><img :src="user.pfpic" alt="pic"></div>
    <div class="col-3 fs-3 fw-semibold">{{ user.name }}</div>
    <div class="col-4 fs-5">{{ user.statusMessage }}</div>
    <div class="col-3">
        <button type="button" class="btn btn-success" @click="finder">location</button>
    </div>
  </div>
</template>

<script>
export default {
    props:['user'],
    methods:{
        finder(){
            this.$router.push({
                path: '/map',
                query: this.user
            });
        }
    }
}
</script>

<style scoped>
    img {
        width: 100%;
        border-radius: 100%;
    }
</style>