<template>
  <div>
    <h1>請先登入</h1>
    
    <button type="button" class="btn btn-primary" @click="login">登入</button>
  </div>

</template>

<script>
export default {
    methods:{
        login(){
            liff.init({liffId: import.meta.env.VITE_LIFF_ID})
        .then(() => {
            liff.login()
        })
        }
    }
}
</script>

<style>

</style>