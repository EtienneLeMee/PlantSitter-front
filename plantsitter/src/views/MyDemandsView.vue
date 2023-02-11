<template>
    <div class="MyDemands">
      <MyDemands/>
    </div>
    <div class="nav">
      <Nav/>
    </div>
    
    <title>Hogwarts Wiki</title>
  </template>
  
  <script>
  // @ is an alias to /src
  import MyDemands from '@/components/MyDemands.vue'
  import Nav from '@/components/Nav.vue'
  import PlantItem from '@/components/PlantItem.vue'
  
  export default {
    name: 'AccountView',
    components: {
      MyDemands,
      Nav,
      PlantItem
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
  
    .MyDemands {
      position: absolute;
    }
  
  
  </style>
  