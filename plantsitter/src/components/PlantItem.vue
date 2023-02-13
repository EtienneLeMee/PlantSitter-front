<template>
    <div class="card" v-on:click="openModal">
        <img class="img" :src="img">
        <div style="padding-left: 20px; display: flex; flex-direction: column; align-items: stretch;">
            <div class="horizontal-wrapper" style="margin-block:2.5px">
                <p class="title">{{title}}</p>
                <p class="date">{{date}}</p>
            </div>
            
            <p class="user" style="margin-block:2.5px">{{user}}</p>
            <p class="desc" style="margin-block:2.5px"><l>{{desc}}</l></p>
            <p class="voir" style="color: #5EB563; cursor: pointer;" v-if="user != 'Votre demande n\'a pas encore été acceptée par un utilisateur.'"><b>Voir la conversation</b></p>
        </div>
    </div>




    <div id="myModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <span class="close" v-on:click="closeModal()">&times;</span>
                <p>Conversation avec {{user}} :</p>
            </div>
            <div class="modal-body">
                <div class="conversation">
                    <div class="envoiMessage">
                        <div class="fileContainer">
                            <label for="file" class="label-file"><img class="file-image" src="../assets/icons/attach.png"></label>
                            <input type="file" name="titre" class="input-file" id="file" placeholder="Le nom de mes plantes" accept="image/jpeg, image/png" @change="addImage">
                            <div class="imageContainer">
                                <img src="" class="affichage-image" id="affichage-image">
                            </div>
                        </div>
                        <input type="text" name="newMessage" id="newMessage" placeholder="Écrivez un nouveau message">
                        <img v-on:click='sendMessage' class="send-image" src="../assets/icons/send.png">
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
    import axios from 'axios';
    const apiURL = "http://127.0.0.1:8000/apit/message/";
    const config = {};
  export default {
    name: 'PlantItem',
    props: {
      title: String,
      date: String,
      user: String,
      title: String,
      desc: String,
      img: String,
      idPublication: String,
    },
    data() {
        return {
            messages: null,
        };
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
    methods: {
        sendMessage(event) {
            let formData = new FormData();
            var d = new Date();
            var currentTime = d.toLocaleTimeString();
            var todayDate = new Date().toISOString().slice(0, 10);
            formData.append('image', document.getElementById('file').files[0], 'test.png');
            formData.append('date',  todayDate);
            formData.append('heure',  currentTime);
            formData.append('description',  document.getElementById('newMessage').value);
            formData.append('idUtilisateur', 2);
            formData.append('idPublication', this.idPublication);
            const api = axios.create({
                headers: {
                'Content-Type': 'multipart/form-data'
                }
            })
            api.post("http://127.0.0.1:8000/apit/message/", formData)
                .then(response => this.requestResult = response.data.id);
        },
        addImage(event) {
            let imgInp = document.getElementById('file')
            const [file] = imgInp.files
            if (file) {
                document.getElementById('affichage-image').src = URL.createObjectURL(file)
            }
        },
        fetchDataAsync: async function () {
            try {
                const responseChar = await axios.get(
                    apiURL,
                    config
                );
                this.messages = responseChar.data;
                console.log(responseChar.data)
                console.log(this.messages.target)
            } catch (error) {
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
  width: 60vw;
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
    .conversation {
        background-color: transparent;
        width: 100%;
        height: 65vh;
        display: flex;
    }
    input[type='text']{
        all: unset;
        width: 70%;
        background-color: #fff;
        border-radius: 20px;
        padding: 10px;
        font-size: 12px;
        font-family: 'Inter', sans-serif;
        border: #888 1px solid;
    }
    input::placeholder {
        color: #888;
        font-family: 'Inter', sans-serif;
    }
    .envoiMessage {
        align-self: flex-end;
        width: 100%;
        background-color: transparent;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .send-image {
        height: 30px;
        filter: invert(70%) sepia(12%) saturate(1657%) hue-rotate(73deg) brightness(87%) contrast(90%);
        cursor: pointer;
    }
    .label-file {
        cursor: pointer;
        color: #fff;
        font-weight: bold;
        height: 35px;
        width: 50px;
        background-color: #5EB563;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px 0px 0px 5px;
    }
    .fileContainer {
        width: 130px;
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
    .file-image {
        height: 30px;
    }
    .affichage-image {
        height: 40px;
        align-self: flex-start;
        margin-left: 5%;
        max-height: 70px;
    }
  </style>