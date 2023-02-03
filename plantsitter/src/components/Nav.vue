<template>
    <nav>
        <img style="height:20px; margin-block:20px;" src="../assets/logotxt.png">
        
        <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#discover">Découvrir</a></li>
            <li><a href="#demande">Créer une demande</a></li>
            <li><a href="#plants">Plantes</a></li>
            <li><a href="#account">Mon compte</a></li>
        </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Nav',
    props: {
      msg: String
    }
  }


  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
nav{
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-around;
  align-items: center;
}
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    color: #5EB563;
    font-weight: 500;
    text-align: center;
    padding: 14px 25px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
  }

  li a:hover:not(.active) {
    text-decoration: underline;
  }

  li a.active {
    color: black;
    border-bottom: 2px solid black;
  }
  </style>
  