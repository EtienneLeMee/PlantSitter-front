<template>
  <div class="discover">
    <Discover/>
  </div>
  <div class="nav">
    <Nav/>
  </div>
  
  <title>Hogwarts Wiki</title>
</template>

<script>
// @ is an alias to /src
import Discover from '@/components/Discover.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'DiscoverView',
  components: {
    Discover,
    Nav
  },
  title:'Dis'
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
