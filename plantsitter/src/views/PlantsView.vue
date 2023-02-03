<template>
    <div class="plants">
      <Plants/>
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
  import Plants from '@/components/Plants.vue'
  
  export default {
    name: 'PlantsView',
    components: {
      Home,
      Nav,
      Plants
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
  
    .plants {
      position: absolute;
    }
  
  
  </style>
  