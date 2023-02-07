<template>
    <div class="home">
      <Account/>
    </div>
    <div class="nav">
      <Nav/>
    </div>
    
    <title>Hogwarts Wiki</title>
  </template>
  
  <script>
  // @ is an alias to /src
  import Account from '@/components/Account.vue'
  import Nav from '@/components/Nav.vue'
  import AccountBlock from '@/components/AccountBlock.vue'
  
  export default {
    name: 'AccountView',
    components: {
      Account,
      Nav,
      AccountBlock
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
  
    .home {
      position: absolute;
    }
  
  
  </style>
  