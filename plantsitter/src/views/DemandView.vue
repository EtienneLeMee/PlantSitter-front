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
  
  export default {
    name: 'DemandView',
    components: {
      Home,
      Nav,
      Demand
    },
    title:'Hog'
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
  