<template>
    <div class="wrapper">
        <!--<img alt="Background Image" class="background" id="background" src="../assets/background.png">-->
        <div class="hero-wrapper">
            <div class="content">
                <!--<p class="subtitle">Faites garder vos plantes !</p>-->

                <ul class="list-plantitem">
                    <li v-for="item in items" :key="item.message">
                        <div class="plantitem" v-if="item.idCreateur != item.loginID">
                            <PlantItem :title="item.title" :date="item.date" :user="item.user" :desc="item.desc" :img="item.img" :idPublication="item.idPublication" :isModal="item.isModal"/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
  </template>
  
  <script>
  import PlantItem from '@/components/PlantItem.vue'

  const idUser = 2
  
  const apiURL = "http://127.0.0.1:8000/apit/publication";
  const config = {};
  
  import axios from 'axios'

  export default {
    name: 'Demands',
    components: {
        PlantItem
    },
    created: function() {
        this.fetchPlants();
    },
    data () {
        return{
            parentMessage: 'Parent',
            items: []
        ,}
    },
    methods: {
      fetchPlants: function() {
        const self = this;
        axios
            .get(apiURL, config)
            .then(function(response) {
                response.data.forEach(publication => {
                    console.log(response.data)
                    self.items.push({
                        idAccepteur: publication.idAccepteur,
                        idCreateur: publication.idCreateur,
                        loginID: localStorage.getItem('loginID'),
                        title: publication.titre,
                        date: publication.dateDebut.split("-").reverse().join("/") + ' ' + publication.heureDebut.substring(0,5) + ' - ' + publication.dateFin.split("-").reverse().join("/") + ' ' + publication.heureFin.substring(0,5),
                        user: publication.nomAccepteur,
                        desc: publication.description,
                        img: publication.image,
                        idPublication : publication.id,
                        isModal: true,
                    })
                });
            })
            .catch(function(error) {
                console.log(error);
            });
            
      },
    },
    props: {
      msg: String
    }
  }
  </script>
  
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap%27');

  a {
    all: unset;
  }
    .wrapper {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-content: center;
    }

    .hero-wrapper {
        display: flex;
        width:80%;
        min-width: 500px;
        max-width: 2000px;
        height: 100vh;
        background-color: white;
        left: 0;
        margin-top: 50px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }


    .list-plantitem {
        list-style: none;
        width: 100%;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: left;
    }

    .plantitem {
        margin-block: 20px;
    }
    
    .background {
        height: 100vh;
        justify-self: flex-start;
        position: absolute;
        left: 0;
        z-index: 2;
    }


    .content {
        width: 100%;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
    }

    .subtitle {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        text-align: left;
    }

    .title {
        font-family: 'Inter', sans-serif;
        font-size: 20px;
        width: fit-content;
        height: fit-content;
        text-align: left;
        left: 0;
        margin-block: 15px;
    }

    .desc {
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        width: 400px;
        text-align: left;
    }

    .check {
        all: unset;
        margin-top: 30px;
        width: 200px;
        height: 60px;
        text-align: center;
        border: 1px solid black;
        font-size: 12px;
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }

    .check:hover {
        background-color: black;
        color: white;
    } 

  </style>
  