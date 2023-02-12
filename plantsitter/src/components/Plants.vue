<template>
    <div class="listOfPlants">
      <template v-for="plante in allPlants">
        <input type="text" v-model="plante.nom">
      </template>
    </div>
  </template>
  
  <script>
  const apiURL = "http://127.0.0.1:8000/apit/plante/";
  const config = {};
  
  import axios from 'axios'
  
  export default {
    name: 'ListPlants',
    data() {
      return {
        allPlants: [],
      };  
    },
  
    created: function() {
        this.fetchPlants();
    },
  
    methods: {
      fetchPlants: function() {
        const self = this;
        axios
            .get(apiURL, config)
            .then(function(response) {
                self.allPlants = response.data;
            })
            .catch(function(error) {
                console.log(error);
            });
      },
    },
  }
  </script>
  