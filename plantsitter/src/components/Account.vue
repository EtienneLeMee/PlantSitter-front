
<template>
    <div class="wrapper">
        <!--<img alt="Background Image" class="background" id="background" src="../assets/background.png">-->
        <div class="hero-wrapper">
            <div class="content">
                <!--<p class="subtitle">Faites garder vos plantes !</p>-->
                
                <AccountBlock  :user="item.user" :img="item.img" :phone="item.phone" :adresse="item.adresse"/>

                
                <p class="title"><b>Mes demandes en cours</b></p>

                <ul class="list-plantitem">
                    <li v-for="item in requests" :key="item.message">
                        <div class="plantitem">
                            <PlantItem :title="item.title" :date="item.date" :user="item.user" :desc="item.desc" :img="item.img" :phone="item.phone"/>
                        </div>
                    </li>
                </ul>
                
                <!--<ul class="list-plantitem">
                    <li v-for="item in items" :key="item.message">
                        <div class="plantitem">
                            <PlantItem :title="item.title" :date="item.date" :user="item.user" :desc="item.desc" :img="item.img" :phone="item.phone"/>
                        </div>
                    </li>
                </ul>-->
                
                
                <!--<p class="desc">Suivez nos conseils d'entretien, laissez vos plantes à des passionnés durant vos vacances, ayez des nouvelles régulières !
                </p>
                <a href="#characters"><button class="check">Voir les plantes !</button></a>-->
            </div>
        </div>
    </div>
    
  </template>
  
  <script>
  import AccountBlock from '@/components/AccountBlock.vue'
  import PlantItem from '@/components/PlantItem.vue'
  
  /*methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }*/


  export default {
    name: 'Account',
    components: {
    AccountBlock,
    PlantItem
  },
    data () {
    return{
        parentMessage: 'Parent',
        item:
        { user:'Alain Chabat', img:'https://cdn.pixabay.com/photo/2023/01/24/13/23/viet-nam-7741017_960_720.jpg',phone:'0663987568',adresse:'12 rue de la paix, Sautron 44880'},
        requests: [
        { title: 'Plant de rose 5L', date: '30/01/2023 19:50 - 31/01/2023 22:00', user:'Alain Chabat', desc: 'Je recherche quelqu’un susebtible de pouvoir garder mes plantes 1 soir du 30 au 31', img:'https://cdn.pixabay.com/photo/2013/08/22/19/18/flowers-174817_960_720.jpg',phone:'0663987568'},
        { title: 'Agapanthe 6mois', date: '03/02/2023 10:00 - 07/02/2023 10:00', user:'Francis Ngannou', desc: 'Je pars en week-end j’aurais besoin de quelqu’un pour arroser ma plante', img:'https://cdn.pixabay.com/photo/2019/06/17/08/24/pastel-4279379_960_720.jpg',phone:'0789645236'},
        ]
    
        } 
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
        margin-top: 80px;
        min-width: 500px;
        max-width: 2000px;
        height: 100vh;
        background-color: white;
        left: 0;
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
        padding-right: 20px;
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
  