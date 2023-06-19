<template>
    <div class="demand">
      <Demand/>
    </div>
    <div class="nav">
      <Nav/>
    </div>
    
    <title>Hogwarts Wiki</title>
  </template>
  
  <script>
  // @ is an alias to /src
  import Home from '@/components/Home.vue'
  import Nav from '@/components/Nav.vue'
  import Demand from '@/components/Demand.vue'
import router from '../router';
  
  export default {
    name: 'DecoView',
    components: {
      Home,
      Nav,
      Demand
    },
    title:'Hog',
    mounted(){
      localStorage.clear();
      router.push('/')
    }
  }
  </script>
  
  <style>
    nav {
      position: absolute;
      z-index: 3;
      right: 0;
      margin-right: 40px;
    }
  
    .demand {
      position: absolute;
    }
  
  
  </style>
  