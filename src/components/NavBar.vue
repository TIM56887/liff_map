<template>
  <nav class="nav bg-body-tertiary">
        
        <router-link class="nav-link fs-2 text-secondary-emphasis" active-class="active" to="/home">THE MAP</router-link>
        <div>
        <ul class="nav me-auto mb-2 mb-lg-0 align-items-center h-100 ">
            <li class="nav-item fs-5">
                <router-link class="nav-link link1 text-secondary-emphasis" active-class="active" to="/home">Home</router-link>
            </li>
            <li class="nav-item fs-5">
                <router-link class="nav-link link1 text-secondary-emphasis" active-class="active" to="/map">Map</router-link>
            </li>
            
        </ul>
        </div>
        
    </nav>
    
</template>

<script>
export default {
    mounted(){

    }
}
</script>

<style>
    .link1{
        display: inline-block;
        height: 100%;
    }
</style>