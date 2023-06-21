<template>
  <div class="listOfPlants">
    <template v-for="plante in allPlants">
      <div class = "divUnePlante" v-on:click="openModal('myModalShow',plante.id)">
        <img :src = "plante.image" class = "imgPlant">
        <input type="text" v-model="plante.id" disabled>
        <input type="text" v-model="plante.nom" disabled>
      </div>
    </template>
  </div>
  <div id="myModalShow" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <span class="close" v-on:click="closeModal('myModalShow')">&times;</span>
                <p>Choisissez vos plantes :</p>
            </div>
            <div class="modal-body">
              <img :src="plant.image" class = "modalImage">
              <div class = "infoPlant">
                <h1>{{ plant.nom }}</h1>
                <h3>{{ plant.nomScientifique }}</h3><br>
                <h2>Les Conseils</h2>
                <div class="lesConseils">
                  <template v-for="unConseil in conseils">
                    <template v-if="unConseil.idPlante == idPlant">
                      <div class="unConseil">
                        <img :src="unConseil.image" class="imgObj">
                        <h3>Intitulé :</h3>
                        <input type="text" v-model="unConseil.titre" disabled>
                        <br>
                        <h3>Description :</h3>
                        <input type="text" v-model="unConseil.description" disabled>
                      </div>
                    </template>
                  </template>
                </div>
              </div>
              <button class="addConsButton" @click="closeModal('myModalShow'); openModal('myModalInsert',idPlant)">
                <p class="iconButton">+</p>
              </button>
            </div>
        </div>
    </div>
    <div id="myModalInsert" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <span class="close" v-on:click="closeModal('myModalInsert')">&times;</span>
                <p>Ajouter un commentaire :</p>
            </div>
            <div class="modal-body">
              <h3>Titre :</h3>
              <input type="text" class="titreConseil" id="titreConseil">
              <h3>Description :</h3>
              <input type="text" class="descriptionConseil" id="descriptionConseil">
              <h3>Images :</h3>
              <input type="file" class="imageConseil" id="imageConseil">
              <img id="affichage-image">
              <input type="button" class="addConsButton" value="Valider" @click="addConseil(); closeModal('myModalInsert')">
            </div>
        </div>
    </div>
</template>

<script>
const apiURL = "http://127.0.0.1:8000/apit/";
const config = {};

import axios from 'axios'

export default {
  name: 'ListPlants',
  data() {
    return {
      allPlants: [],
      idPlant: null,
      plant: [],
      conseils: []
    };  
  },

  created: function() {
      this.fetchPlants();
  },

  methods: {
    fetchPlants: function() {
      const self = this;
      axios
        .get(apiURL+"plante/", config)
        .then(function(response) {
            self.allPlants = response.data;
        })
        .catch(function(error) {
            console.log(error);
        });
    },

    fetchOnePlant: function() {
      const self = this;
      axios
        .get(apiURL+"plante/"+this.idPlant, config)
        .then(function(response) {
            self.plant = response.data;
        })
        .catch(function(error) {
            console.log(error);
        });
    },

    fetchAllConseils: function() {
      const self = this;
      axios
        .get(apiURL+"conseil", config)
        .then(function(response) {
            self.conseils = response.data;
        })
        .catch(function(error) {
            console.log(error);
        });
    },

    addImage() {
      let imgInp = document.getElementById('imageConseil')
      const [file] = imgInp.files
      if (file) {
        document.getElementById('affichage-image').src = URL.createObjectURL(file)
      }
    },

    addConseil() {
      const self = this
      let formData = new FormData();
      formData.append('titre', document.getElementById('titreConseil').value);
      formData.append('description',  document.getElementById('descriptionConseil').value);
      formData.append('image',  document.getElementById('imageConseil').files[0], 'test.png');
      formData.append('idPlante',  self.idPlant);
      const api = axios.create({
        headers: {
        'Content-Type': 'multipart/form-data'
        }
      })
      api.post("http://127.0.0.1:8000/apit/conseil/", formData)
        .then(response => self.requestResult = response.data.id)
        document.getElementById('titreConseil').value = ''
        document.getElementById('descriptionConseil').value = ''
        document.getElementById('imageConseil').value = ''
    },

    openModal(idModal, plant) {
      const self = this
      self.idPlant = plant
      this.fetchOnePlant()
      this.fetchAllConseils()
      var modal = document.getElementById(idModal);
      modal.style.display = "block";
    },
    closeModal(idModal) {
      var modal = document.getElementById(idModal);
      modal.style.display = "none";
    },
    closeModalOutside(idModal,event) {
      var modal = document.getElementById(idModal);
    },
  },

  mounted() {
    document.addEventListener('click', this.closeModalOutside);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.closeModalOutside);
  },
}
</script>

<style>
.imgObj{
  width: 10%;
  height: 10%;
  max-width: 10%;
  max-height: 10%;
}

.iconButton{
  font-size: 300%;
}

.addConsButton{
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 1%;
  height:0;
  padding-bottom: 3%;
  border-radius: 50%;
  border:3px solid gray;
  overflow:hidden; 
  background: white; 
  box-shadow: 0 0 3px gray;
  float: right;
  padding: 20px 23px;
	position: relative;
	overflow: hidden;
}

.addConsButton:before{
  content: "";
	position: absolute;
	background-color: rgba(0,0,0,.1);
	width: 10%;
	height: 15%;
	border-radius: 50%;
	z-index: 1;
	top: 35%;
	left: 45%;
	-webkit-transform: scale(0);
	transform: scale(0);
}

.addConsButton:hover::before{
  -webkit-transform: scale(12);
	transform: scale(12);
	-webkit-transition: border-radius .5s .5s,-webkit-transform .5s;
	transition: border-radius .5s .5s,-webkit-transform .5s;
	transition: transform .5s,border-radius .5s .5s;
	transition: transform .5s,border-radius .5s .5s,-webkit-transform .5s;
}

.addConsButton:hover::after{
  content: "";
	position: absolute;
	z-index: 2;
	left: 50%;
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
}

.unConseil{
  border: solid;
  padding: 1%;
  margin-bottom: 1%;
}

.lesConseils{
  padding: 1%;
  border: solid;
}

.modalImage{
  width: 10%;
  height: 10%;
  max-width: 10%;
  max-height: 10%;
}
.listOfPlants{
  display: grid;
  grid-template-columns: repeat(3,1fr);
}

.imgPlant{
  margin-top: 20%;
  width: 50%;
  height: 50%;
  max-width: 50%;
  max-height: 50%;
  text-align: center;
}

.divUnePlante{
  cursor: pointer;
  border: solid;
  border-radius: 10%;
  grid-row-gap: 10%; 
  margin: 10%;

}

.modal {
  display: none; 
  position: fixed;
  z-index: 5; 
  padding-top: 100px; 
  left: 0;
  top: 0;
  width: 100%;
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
}


.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  /*box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);*/
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
  border-radius: 20px;
}


@-webkit-keyframes animatetop {
  from {top:-300px; opacity:0} 
  to {top:0; opacity:1}
}

@keyframes animatetop {
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
}

.close {
  color: white;
  float: right;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}

.modal-header {
  padding: 5px 16px;
  background-color: #5EB563;
  color: white;
  border-radius: 20px 20px 0px 0px;
}

.modal-header p {
    font-family: 'Inter', sans-serif;
}

.modal-body {
    padding: 2px 16px;
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>
