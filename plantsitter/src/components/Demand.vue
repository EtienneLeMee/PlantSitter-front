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
                <div class="label-container">
                    <label for="file" class="label-file">Ajoutez une photo</label>
                    <label class="label-plantes" v-on:click="openModal">Choisissez vos plantes</label>
                </div>
               
                <input type="file" name="titre" class="input-file" id="file" placeholder="Le nom de mes plantes" accept="image/jpeg, image/png" @change="addImage">
                <img src="" class="affichage-image" id="affichage-image">
                
                <a href="#characters"><button class="check">Voir les plantes !</button></a>
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
        plantesSelected: []
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
                console.log(responseChar.data)
            } catch (error) {
                console.log(error);
            }
        },
        addPublication: function () {
            const publication = {
                dateDebut: "2023-02-02", 
                dateFin: "2023-02-03",
                titre: "Test insert",
                description: "Description insert",
            };
            axios.post("http://127.0.0.1:8000/apit/publication/", publication)
                .then(response => this.articleId = response.data.id);
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
    }

    .text {
        width: 500px;
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 20px;
        background-color: white;
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
        background-color: #FCFCFC;
        border-radius: 5px;
        padding: 10px;
        font-size: 12px;
        font-family: 'Inter', sans-serif;
    }

    input[type='time']{
        all: unset;
        background-color: #FCFCFC;
        border-radius: 5px;
        padding: 9px;
        font-size: 12px;
        font-family: 'Inter', sans-serif;
        margin-left: 20px;
    }

    textarea {
        all: unset;
        width: 90%;
        height: 100px;
        background-color: #FCFCFC;
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
        width: 90%;
        background-color: #FCFCFC;
        border-radius: 5px;
        padding: 10px;
        font-size: 12px;
        font-family: 'Inter', sans-serif;
    }

    input::placeholder {
        color: #D9D9D9;
        font-family: 'Inter', sans-serif;
    }

    .check {
        all: unset;
        margin-top: 30px;
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
        justify-self: flex-end;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
    }

    .check:hover {
        transform: translateY(-5px);
    } 

    .label-file {
        cursor: pointer;
        color: #5EB563;
        font-weight: bold;
        margin-left: 0;
    }
    .label-file:hover {
        color: #5EB563;
    }

    .input-file {
        display: none;
    }

    .affichage-image {
        width: 70px;
        align-self: flex-start;
        margin-left: 5%;
        max-height: 70px;
        position: absolute;
        margin-top: 380px;
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
    background-color: #f0f0f0;
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
  