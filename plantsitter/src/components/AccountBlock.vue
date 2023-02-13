<template>
    <div class="card">

            <div class="horizontal-wrapper" style="justify-content: space-between;">
                <p class="title">Mon Profile</p>
                <!--<img class="button-icon" src="../assets/icons/editer.png">-->

                <button class="button-box" v-on:click="redirect_to_login"><img class="button-icon" src="../assets/icons/editer.png" /></button>
            </div>
            <div class="horizontal-wrapper" style="justify-content: space-between; padding-right: 100px; margin-top: 30px; width: 90%;">
                <img class="img" :src="img" style="margin-block:2.5px">
                <p class="user" style="margin-block:2.5px">{{user}}</p>
                <p class="phone" style="margin-block:2.5px">{{phone}}</p>
                <p class="adresse" style="margin-block:2.5px">{{adresse}}</p>
            </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AccountBlock',
    props: {
      user: String,
      img: String,
      phone: String,
      adresse: String,
    }
  }


  </script>

  
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  a {
    all: unset;
  }
    .wrapper {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: left;
        align-content: center;
    }

    .button-box{
        display: flex;
        flex-direction: row;
        margin-block: 10px;
        background-color: rgba(0,0,0,0);
        border: 0px solid rgba(0,0,0,0);
        color: rgba(0,0,0,0);

    }

    .button-icon{
        width: 25px;
    }

    .background {
        height: 100vh;
        justify-self: flex-start;
        position: absolute;
        left: 0;
        z-index: 2;
    }

    .horizontal-wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: row;
        margin-block:2.5px;
    }

    .card {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: #FCFCFC;
        padding: 20px;
        border-radius: 20px;
        box-shadow: 2px 4px 2px 0px rgba(0,0,0,0.20);
    }


    .img{
        width: 120px;
        height: 120px;
        object-fit: cover;
        border-radius: 120px;
    }

    .title {
        font-size: 20px;
        font-weight: 600;
        text-align: left;
    }
    
    .user {
        font-size: 20px;
        font-weight: 600;
        text-align: left;
    }

    .phone {
        font-size: 20px;
        font-weight: 500;
        text-align: left;
    }

    .adresse {
        font-size: 20px;
        font-weight: 500;
        text-align: left;
    }



  </style>
  