<template>
    <div class="grid">
      <div v-for="plante in allPlants" class = "divUnePlante" v-on:click="openModal('myModalShow',plante.id)">
        <p>{{ plante.nom }}</p>
        <p style="color: grey; font-size: 12px;">Numéro de plante : {{ plante.id }}</p>
        <br/>
        <span style="padding: 5px; background-color: #5EB563; border-radius: 10px; color: white; font-size: 12px;">Voir les conseils</span>
        <img :src = "plante.image" class = "imgPlant">
      </div>
    </div>
  <div id="myModalShow" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <span class="close" v-on:click="closeModal('myModalShow')">&times;</span>
                <p>Détail de {{ plant.nom }}</p>
            </div>
            <div class="modal-body">
              <img :src="plant.image" class = "modalImage">
              <div class = "infoPlant">
                <p style="font-size: 25px; font-weight: 600;">Nom commun : {{ plant.nom }}</p>
                <p style="font-size: 18px; font-weight: 400;">Nom scientifique : {{ plant.nomScientifique }}</p><br>
                <p style="margin-top: 100px; font-size: 17px;">Voir les conseils pour cette plante : </p><br/>
                <div class="lesConseils">
                  <template v-for="unConseil in conseils">
                    <template v-if="unConseil.idPlante == idPlant">
                      <div class="unConseil">
                        <img :src="unConseil.image" style="float: right; border-radius: 12px;" class="imgObj">
                        <p style="font-size: 14px;">Intitulé :</p>
                        <input type="text" v-model="unConseil.titre" disabled>
                        <br>
                        <p style="font-size: 14px;">Description :</p>
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
              <label for="titreConseil">Titre :</label><br>
              <input type="text" class="titreConseil" id="titreConseil" placeholder="Titre"><br>
              <label for="descriptionConseil">Description :</label><br>
              <textarea cols=15 class="descriptionConseil" id="descriptionConseil" placeholder="Description"></textarea><br>
              <div class="fileContainer">
                  <label for="imageConseil" class="label-file">Ajoutez une photo</label>
                  <input type="file" name="titre" class="input-file" id="imageConseil" placeholder="Le nom de mes plantes" accept="image/jpeg, image/png" @change="addImage">
                  <div class="imageContainer">
                      <img src="" class="affichage-image" id="affichage-image">
                  </div>
              </div>
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
        .get(apiURL+"plante/"+this.idPlant+"/", config)
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
        .get(apiURL+"conseil/", config)
        .then(function(response) {
            self.conseils = response.data;
        })
        .catch(function(error) {
            console.log(error);
        });
    },
    addImage() {
      console.log('test')
      let imgInp = document.getElementById('imageConseil')
      const [file] = imgInp.files
      if (file) {
        document.getElementById('affichage-image').src = URL.createObjectURL(file)
      }
    },

    addConseil() {
      console.log(document.getElementById('imageConseil').files[0])
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

.fileContainer {
        width: 90%;
        height: 40px;
        display: flex;
        justify-content: flex-start;
        align-self: flex-start;
        align-items: flex-start;
    }

    .imageContainer {
        width: 300px;
        height: 40px;
        border-radius: 0px 5px 5px 0px;
        background-color: #f4f4f4;
        display: flex;
        align-items: center;
    }

    .input-file {
        display: none;
    }

    .affichage-image {
        height: 40px;
        align-self: flex-start;
        margin-left: 5%;
        max-height: 70px;
    }

    .label-file {
        cursor: pointer;
        color: #fff;
        font-weight: bold;
        height: 35px;
        width: 150px;
        background-color: #5EB563;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px 0px 0px 5px;
    }
.imgObj{
  width: 10%;
  height: 10%;
  max-width: 10%;
  max-height: 10%;
}

.iconButton{
  font-size: 300%;
  font-weight:200;
}

.unConseil{
  padding: 20px;
  margin-bottom: 1%;
  background-color: #f4f4f4;
  border-radius: 15px;
}

.lesConseils{
  padding: 1%;
}

.modalImage{
  width: 10%;
  height: 10%;
  max-width: 10%;
  max-height: 180px;
  float: right;
  border-radius: 15px;
}

.imgPlant{
  margin-top: 5%;
  width: 50%;
  height: 50%;
  max-width: 50%;
  max-height: 50%;
  text-align: center;
}

.grid {
    width: 100vw;
    height: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 15px;
    overflow-y: scroll;
    justify-content: center;
    margin-top: 100px;
}

.divUnePlante {
    width: 250px;
    height: 140px;
    background-color: #f4f4f4;
    border-radius: 15px;
    justify-self: center;
    cursor: pointer;
    transition: all 0.3S ease-in-out;
    padding: 15px;
}

.imgPlant {
    width: 100px;
    max-height: 100px;
    border-radius: 10px;
    float: right;
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

textarea {
        all: unset;
        width: 85%;
        height: 100px;
        background-color: #f4f4f4;
        border-radius: 5px;
        padding: 10px;
        font-size: 12px;
        font-family: 'Inter', sans-serif;
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

input[type='text']{
      all: unset;
      width:85%;
      background-color: #f4f4f4;
      border-radius: 5px;
      padding: 10px;
      font-size: 12px;
      font-family: 'Inter', sans-serif;
  }

  label {
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        padding-bottom: 5px;
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

input[type="button"]{
  all: unset;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  height: 35px;
  width: 150px;
  background-color: #5EB563;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px 0px 0px 5px;
  float: right;
}

.addConsButton{
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  height: 35px;
  width: 150px;
  background-color: #5EB563;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px 0px 0px 5px;
  float: right;
}
</style>
