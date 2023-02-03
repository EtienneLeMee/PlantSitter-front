<template>
    <div class="card">
        <img class="img" :src="img">
        <div style="padding-left: 20px; display: flex; flex-direction: column; align-items: stretch;">
            <div class="horizontal-wrapper" style="margin-block:2.5px">
                <p class="title">{{title}}</p>
                <p class="date">{{date}}</p>
            </div>
            
            <p class="user" style="margin-block:2.5px">{{user}}</p>
            <p class="desc" style="margin-block:2.5px"><l>{{desc}}</l></p>
            <div class="horizontal-wrapper" style="margin-block:2.5px">
                <div class="button-box">
                    <img class="button-icon" src="../assets/icons/phone.png">
                    <p class="tel">{{phone}}</p>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PlantItem',
    props: {
      title: String,
      date: String,
      user: String,
      title: String,
      desc: String,
      img: String,
      phone: String
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
    }

    .button-icon{
        width: 20px;
        margin-right: 10px;
    }

    .img{
        width: 170px;
        height: 200px;
        object-fit: cover;
        
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }
    
    .background {
        height: 100vh;
        justify-self: flex-start;
        position: absolute;
        left: 0;
        z-index: 2;
    }

    .horizontal-wrapper {
        display: flex;
        align-items: center;
        flex-direction: row;
    }

    .card {
        display: flex;
        align-items: center;
        flex-direction: row;
        background-color: #FCFCFC;
        border-radius: 20px;
        box-shadow: 2px 4px 2px 0px rgba(0,0,0,0.20);
        transition: all .2s ease-in-out; 
    }

    .card:hover { 
    transform: scale(1.05); 
    }

    .date {
        font-size: 16px;
        font-weight: 500;
        text-align: left;
        color: #5EB563;
    }

    .user {
        font-size: 16px;
        font-weight: 400;
        text-align: left;
    }

    .title {
        font-size: 20px;
        font-weight: 500;
        text-align: left;
        margin-right: 20px;
        left: 0;
    }

    .desc {
        font-size: 16px;
        font-weight: 300;
        width: 400px;
        text-align: left;
        font-weight: 300;
    }


  </style>
  