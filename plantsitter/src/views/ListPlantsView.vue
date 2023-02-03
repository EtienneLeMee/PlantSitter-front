<template>
  <div class="nav">
    <Nav/>
  </div>
  <div class="plants">
    <ListPlants/>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'
import Nav from '@/components/Nav.vue'
import ListPlants from '@/components/ListPlants.vue'

export default {
  name: 'PlantsView',
  components: {
    Home,
    Nav,
    ListPlants
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