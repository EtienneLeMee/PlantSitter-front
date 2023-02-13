<template>
    <div class="wrapper">
        <div class="background-wrapper">
            <img alt="Background Image" class="background" id="background" src="../assets/botanist-illustration.png">
        </div>
        <div class="hero-wrapper">
            <div class="text">
                <label for="titre">Titre de votre demande :</label>
                <input type="text" name="titre" class="titre" id="titre" placeholder="Le nom de mes plantes">
                <br>
                <label for="description">Description :</label>
                <textarea name="description" class="description" id="description" placeholder="Description" cols="15"></textarea>
                <br>
                <label for="titre">Date et heure de début :</label>
                <div class="dateHeure">
                    <input type="date" name="dateDebut" class="dateDebut" id="dateDebut" placeholder="Date de début">
                    <input type="time" name="heureDebut" class="heureDebut" id="heureDebut" placeholder="Heure de début">
                </div>
                <br>
                <label for="titre">Date et heure de fin :</label>
                <div class="dateHeure">
                    <input type="date" name="dateFin" class="dateFin" id="dateFin" placeholder="Date de fin">
                    <input type="time" name="heureFin" class="heureFin" id="heureFin" placeholder="Heure de fin">
                </div>
                <br>
                <div class="fileContainer">
                    <label for="file" class="label-file">Ajoutez une photo</label>
                    <input type="file" name="titre" class="input-file" id="file" placeholder="Le nom de mes plantes" accept="image/jpeg, image/png" @change="addImage">
                    <div class="imageContainer">
                        <img src="" class="affichage-image" id="affichage-image">
                    </div>
                </div>
                <br>
                <div class="fileContainer">
                    <label class="label-file" v-on:click="openModal">Choisissez vos plantes</label>
                    <div class="imageContainer">
                        <p class="nbPlantes" v-if="plantesSelected.length > 0">{{ plantesSelected.length }} plantes sélectionnées</p>
                    </div>
                </div>
                <br>
                <div class="check-container">
                    <button class="check" v-on:click="addPublication">Créer ma demande</button>
                    <p class="disable" id="disable">Veuillez remplir tous les champs !</p>
                </div>               
            </div>
        </div>
    </div>




    <!-- The Modal -->
    <div id="myModal" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
        <div class="modal-header">
            <span class="close" v-on:click="closeModal()">&times;</span>
            <p>Choisissez vos plantes :</p>
        </div>
        <div class="modal-body">
            <div class="grid">
                <div class="plante-container" v-for="plante in plantes" v-bind:id="plante.id" v-on:click="addPlante(plante.id)">
                    <img class="plante-image" :src="plante.image">
                    <p v-bind:id="plante.id + 'text'">{{plante.nom}}</p>
                </div>
            </div>
        </div>
    </div>

    </div>
  </template>
  
  <script>
    import axios from 'axios';
    const apiURL = "http://127.0.0.1:8000/apit/plante/";
    const config = {};

  export default {
    name: 'Demand',
    props: {
      msg: String
    },
    data() {
        return {
        plantes: null,
        plantesSelected: [],
        requestResult: null,
        };
    },
    methods: {
        fetchDataAsync: async function () {
            try {
                const responseChar = await axios.get(
                    apiURL,
                    config
                );
                this.plantes = responseChar.data;
            } catch (error) {

            }
        },
        addPublication: function () {
            if(document.getElementById('description').value == '' || document.getElementById('titre').value == '' || document.getElementById('heureDebut').value == '' || document.getElementById('heureFin').value == '' || document.getElementById('dateDebut').value == '' || document.getElementById('dateFin').value == '' || this.plantesSelected.length == 0 || document.getElementById('file').value == ''){
                document.getElementById('disable').style.display = 'block'
            } else {
                document.getElementById('disable').style.display = 'none'
                let formData = new FormData();
                formData.append('image', document.getElementById('file').files[0], 'test.png');
                formData.append('dateDebut',  document.getElementById('dateDebut').value);
                formData.append('dateFin',  document.getElementById('dateFin').value);
                formData.append('titre',  document.getElementById('titre').value);
                formData.append('description',  document.getElementById('description').value);
                formData.append('heureDebut',  document.getElementById('heureDebut').value);
                formData.append('heureFin',  document.getElementById('heureFin').value);
                formData.append('plante',  this.plantesSelected);
                formData.append('idCreateur', 2);
                formData.append('idAccepteur', 3);
                const api = axios.create({
                    headers: {
                    'Content-Type': 'multipart/form-data'
                    }
                })
                api.post("http://127.0.0.1:8000/apit/publication/", formData)
                    .then(response => this.requestResult = response.data.id);
                document.location.href='http://localhost:5173/#/demands'; 
            }
        },
        addPlante(element) {
            //Si la plante a déjà été sélectionnée
            if(this.plantesSelected.includes(element) == true){
                this.plantesSelected.pop(element)
                document.getElementById(element).style.backgroundColor = '#f0f0f0'
                document.getElementById(element+'text').style.color = '#000'
            //Sinon
            } else {
                this.plantesSelected.push(element)
                document.getElementById(element).style.backgroundColor = '#5EB563'
                document.getElementById(element+'text').style.color = '#fff'
            }
            
        },
        addImage(event) {
            let imgInp = document.getElementById('file')

            const [file] = imgInp.files
            if (file) {
                document.getElementById('affichage-image').src = URL.createObjectURL(file)
            }
        },
        openModal(event) {
            var modal = document.getElementById("myModal");
            modal.style.display = "block";
        },
        closeModal(event) {
            var modal = document.getElementById("myModal");
            modal.style.display = "none";
        },
        closeModalOutside(event) {
            var modal = document.getElementById("myModal");
            if (event.target == modal) {
                modal.style.display = "none";
            }
        },
    },
    created: function () {
        this.fetchDataAsync();
    },
    mounted() {
            document.addEventListener('click', this.closeModalOutside);
        },
    beforeDestroy() {
        document.removeEventListener('click', this.closeModalOutside);
    },
  }


  
  </script>
  
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

  a {
    all: unset;
    align-self: flex-end;
    margin-right: 20px;
    margin-bottom: 20px;
  }

    .wrapper {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-content: center;
    }

    .background-wrapper{
        width: 45vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
    }
    
    .background {
        width: 500px;
        z-index: 2;
    }

    .hero-wrapper {
        width: 55vw;
        height: 100vh;
        background-color: #ceffd0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: #f4f4f4;
    }

    .text {
        width: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 20px;
        background-color: white;
        padding: 30px 0px 30px 0px;
    }

    .subtitle {
        font-size: 16px;
        text-align: right;
    }

    .title {
        font-size: 50px;
        align-self: center;
        width: 500px;
        text-align: right;
        margin: 15px;
        
    }

    label {
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        padding-bottom: 5px;
        align-self: flex-start;
        margin-left: 5%;
    }

    input[type='file']{
        align-self: flex-start;
        margin-left: 5%;
    }

    .dateHeure {
        width: 90%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }

    input[type='date']{
        all: unset;
        background-color: #f4f4f4;
        border-radius: 5px;
        padding: 10px;
        font-size: 12px;
        font-family: 'Inter', sans-serif;
    }

    input[type='time']{
        all: unset;
        background-color: #f4f4f4;
        border-radius: 5px;
        padding: 9px;
        font-size: 12px;
        font-family: 'Inter', sans-serif;
        margin-left: 20px;
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

    textarea::placeholder {
        color: #D9D9D9;
        font-family: 'Inter', sans-serif;
    }

    input[type='text']{
        all: unset;
        width: 85%;
        background-color: #f4f4f4;
        border-radius: 5px;
        padding: 10px;
        font-size: 12px;
        font-family: 'Inter', sans-serif;
    }

    input::placeholder {
        color: #D9D9D9;
        font-family: 'Inter', sans-serif;
    }

    .check-container {
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .check {
        all: unset;
        text-align: center;
        border: 1px solid #5EB563;
        color: #fff;
        border-radius: 10px;
        font-size: 12px;
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        padding: 10px;
        background-color: #5EB563;
        font-family: 'Inter', sans-serif;
        font-weight: 600;

    }

    .disable {
        padding: 10px;
        background-color: darkred;
        font-size: 12px;
        color: white;
        align-self: flex-start;
        display: none;
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

    .fileContainer {
        width: 90%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: flex-start;
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

    .nbPlantes {
        font-size: 12px;
        margin-left: 10px;
    }

    .affichage-image {
        height: 40px;
        align-self: flex-start;
        margin-left: 5%;
        max-height: 70px;
    }

    .label-plantes {
        cursor: pointer;
        color: #5EB563;
        font-weight: bold;
    }

    .label-container {
        background-color: white;
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
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

.grid {
    width: 100%;
    height: 500px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-row-gap: 15px;
    overflow-y: scroll;
    justify-content: center;
}

.plante-container {
    width: 190px;
    height: 90px;
    background-color: #f4f4f4;
    border-radius: 15px;
    justify-self: center;
    cursor: pointer;
    transition: all 0.3S ease-in-out;
    padding: 15px;
}

.plante-image {
    width: 50px;
    max-height: 80px;
    border-radius: 10px;
    float: right;
}

.plante-container p {
    font-family: 'Inter', sans-serif;
}



  </style>
  