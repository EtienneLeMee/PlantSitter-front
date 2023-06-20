<template>
    
    <div class="container">
    <h2 class="login-title">Plant Sitter</h2>

    <form class="login-form">
      <div>
        <label for="email">Identifiant</label>
        <input
               id="identifiant"
               type="text"
               placeholder="me@example.com"
               name="text"
               required
               />
      </div>

      <div>
        <label for="password">Mot de passe</label>
        <input
               id="mdp"
               type="password"
               placeholder="password"
               name="password"
               required
               />
      </div>

      <button class="btn btn--form" type="submit" value="Log in" v-on:click="login">
        Se connecter
      </button>
    </form>
</div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Home from '@/components/Home.vue'
  import Nav from '@/components/Nav.vue'
  import Demand from '@/components/Demand.vue'
import router from '../router'
import axios from 'axios';
  export default {
    name: 'LoginView',
    components: {
      Home,
      Nav,
      Demand
    },
    title:'Hog',
    methods: {
        login() {
            console.log('test');
            let id = document.getElementById('identifiant').value;
            let mdp = document.getElementById('mdp').value;
            console.log(id);
            console.log(mdp);
            let formData = new FormData();
            formData.append('id', id);
            formData.append('mdp', mdp);
            const api = axios.create({
                headers: {
                'Content-Type': 'multipart/form-data'
                }
            })
            let responseStatus = null;
            try {
                api.post("http://127.0.0.1:8000/apit/utilisateur/", formData)
                .then(response =>  {if(response.status == 201){
                    console.log(response)
                    localStorage.setItem('isLoggedIn', true)
                    localStorage.setItem('loginID', response.data)
                    router.push('/')
                }});
            } finally {
                console.log(responseStatus)
            }
            
            
            localStorage.setItem('isLoggedIn', true)
        },
    },
  }
  </script>
  
  <style scoped>
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


body {
  font-family: sans-serif;
  line-height: 1.4;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.container {
  width: 400px;
  margin: auto;
  padding: 36px 48px 48px 48px;
  background-color: #f2efee;

  border-radius: 11px;
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15);
}

.login-title {
  padding: 15px;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
}

.login-form {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 16px;
}

.login-form label {
  display: block;
  margin-bottom: 8px;
}

.login-form input {
  width: 100%;
  padding: 1.2rem;
  border-radius: 9px;
  border: none;
}

.login-form input:focus {
  outline: none;
  box-shadow: 0 0 0 4px rgba(253, 242, 233, 0.5);
}

.btn--form {
  background-color: #5EB563;
  color: #fdf2e9;
  align-self: end;
  padding: 8px;
}

.btn,
.btn:link,
.btn:visited {
  display: inline-block;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  border-radius: 9px;
  border: none;

  cursor: pointer;
  font-family: inherit;

  transition: all 0.3s;
}

button {
  outline: 1px solid #5EB563;
}

.btn--form:hover {
  background-color: #fdf2e9;
  color: #5EB563;
}

  
  
  </style>
  