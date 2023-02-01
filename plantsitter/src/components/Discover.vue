<template>
    <div class="home-page">
        <img src="images/decouvrir-background.jpg" class="home-img" />
        <a href="home.html"><img src="images/logo.png" class="home-logo" /></a>
        <div class="home-nav">
            <ul>
                <li>
                    <a href="home.html"><b>00</b> ACCUEIL</a>
                </li>
                <li>
                    <a class="active" href="/space/destination.html"
                        ><b>01</b> DECOUVRIR</a
                    >
                </li>
                <li>
                    <a href="profil.html"><b>02</b> MON PROFIL</a>
                </li>
                <li>
                    <a href="jeu.html"><b>03</b> FARMER KART</a>
                </li>
            </ul>
        </div>
        <div class="home-nav-line"></div>
        <div class="map" id="map"></div>
        <div class="hero-container">
            <table>
                <tr>
                    <td>
                        <div
                            id="1"
                            class="container-tableau"
                            onclick="selectMarker(this.id);"
                        >
                            <div id="1-cercle" class="tableau-cercle">1</div>
                            <div id="1-title" class="tableau-titre">
                                L'Agronaute | Pépinière, ferme urbaine,
                                événements
                            </div>
                            <div class="tableau-adresse1">
                                Ancien MiN, Rue du Sénégal
                            </div>
                            <div class="tableau-adresse2">44200 Nantes</div>
                            <div class="tableau-horaire">
                                Lundi : 10:00 - 16:00
                                <br />Mardi : 10:00 - 16:00 <br />Mercredi :
                                10:00 - 16:00 <br />Jeudi : 10:00 - 16:00
                                <br />Vendredi : 10:00 - 19:00 <br />Samedi :
                                09:00 - 19:00 <br />Dimanche : Fermé
                            </div>
                            <div class="tableau-service">
                                SERVICES :<br />
                                - Bières<br />
                                - Graines<br />
                                - Soirées
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            id="2"
                            class="container-tableau"
                            onclick="selectMarker(this.id);"
                        >
                            <div id="2-cercle" class="tableau-cercle">2</div>
                            <div id="2-title" class="tableau-titre">
                                Ferme France
                            </div>
                            <div class="tableau-adresse1">
                                16 Bd Gabriel Guist'Hau
                            </div>
                            <div class="tableau-adresse2">44000 Nantes</div>
                            <div class="tableau-horaire">
                                Lundi : 10:00 - 16:00
                                <br />Mardi : 10:00 - 16:00 <br />Mercredi :
                                10:00 - 16:00 <br />Jeudi : 10:00 - 16:00
                                <br />Vendredi : 10:00 - 19:00 <br />Samedi :
                                09:00 - 19:00 <br />Dimanche : Fermé
                            </div>
                            <div class="tableau-service">
                                SERVICES :<br />
                                - Bières<br />
                                - Graines<br />
                                - Soirées
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            id="3"
                            class="container-tableau"
                            onclick="selectMarker(this.id);"
                        >
                            <div id="3-cercle" class="tableau-cercle">3</div>
                            <div id="3-title" class="tableau-titre">
                                Ferme du Bois des Anses
                            </div>
                            <div class="tableau-adresse1">
                                Chem. du Bois des Anses
                            </div>
                            <div class="tableau-adresse2">44300 Nantes</div>
                            <div class="tableau-horaire">
                                Lundi : 10:00 - 16:00
                                <br />Mardi : 10:00 - 16:00 <br />Mercredi :
                                10:00 - 16:00 <br />Jeudi : 10:00 - 16:00
                                <br />Vendredi : 10:00 - 19:00 <br />Samedi :
                                09:00 - 19:00 <br />Dimanche : Fermé
                            </div>
                            <div class="tableau-service">
                                SERVICES :<br />
                                - Bières<br />
                                - Graines<br />
                                - Soirées
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            id="4"
                            class="container-tableau"
                            onclick="selectMarker(this.id);"
                        >
                            <div id="4-cercle" class="tableau-cercle">4</div>
                            <div id="4-title" class="tableau-titre">
                                La Cle Des Champs
                            </div>
                            <div class="tableau-adresse1">
                                Chem. de la Ranjonnière
                            </div>
                            <div class="tableau-adresse2">44340 Bouguenais</div>
                            <div class="tableau-horaire">
                                Lundi : 10:00 - 16:00
                                <br />Mardi : 10:00 - 16:00 <br />Mercredi :
                                10:00 - 16:00 <br />Jeudi : 10:00 - 16:00
                                <br />Vendredi : 10:00 - 19:00 <br />Samedi :
                                09:00 - 19:00 <br />Dimanche : Fermé
                            </div>
                            <div class="tableau-service">
                                SERVICES :<br />
                                - Bières<br />
                                - Graines<br />
                                - Soirées
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            id="5"
                            class="container-tableau"
                            onclick="selectMarker(this.id);"
                        >
                            <div id="5-cercle" class="tableau-cercle">5</div>
                            <div id="5-title" class="tableau-titre">
                                Ferme de la Chasseloire
                            </div>
                            <div class="tableau-adresse1">
                                Rue de l'Ouchetien
                            </div>
                            <div class="tableau-adresse2">
                                44800 Saint-Herblain
                            </div>
                            <div class="tableau-horaire">
                                Lundi : 10:00 - 16:00
                                <br />Mardi : 10:00 - 16:00 <br />Mercredi :
                                10:00 - 16:00 <br />Jeudi : 10:00 - 16:00
                                <br />Vendredi : 10:00 - 19:00 <br />Samedi :
                                09:00 - 19:00 <br />Dimanche : Fermé
                            </div>
                            <div class="tableau-service">
                                SERVICES :<br />
                                - Bières<br />
                                - Graines<br />
                                - Soirées
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    
</template>

<!--script type="text/javascript" src="../map.js"></script-->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bellefair&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

body {
    margin: 0;
}

.home-page {
    width: 100vw;
    height: 100vh;
}

.home-img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    z-index: -1;
}

.home-logo {
    position: absolute;
    margin-left: 55px;
    margin-top: 64px;
    cursor: pointer;
    width: 130px;
}

.home-nav {
    position: absolute;
    margin-top: 40px;
    right: 0;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    padding-left: 7vw;
    padding-right: 10vw;
    background: rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(10px);
    box-sizing: border-box;
}

li {
    float: left;
}

li a {
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 60px;
    letter-spacing: 2.7px;
    color: #ffffff;
    display: block;
    color: white;
    text-align: center;
    /*padding: 14px 16px;*/
    padding: 14px 14px;
    padding-left: 20px;
    padding-right: 20px;
    text-decoration: none;
    box-sizing: border-box;
}

li:hover {
    box-shadow: inset 0px 0 0 hsl(172, 67%, 45%), inset 0 -3px 0 #696969,
        inset 0px 0 0 hsl(172, 67%, 45%), inset 0 0px 0 hsl(172, 67%, 45%);
}

.active {
    box-shadow: inset 0px 0 0 #ef920f, inset 0 -3px 0 #ef920f,
        inset 0px 0 0 #ef920f, inset 0 0px 0 #ef920f;
}

.home-nav-line {
    position: absolute;
    width: 470px;
    height: 1px;
    background: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.25;
    margin-top: 85px;
    right: 0;
    margin-right: 800px;
}

.map {
    position: absolute;
    width: 500px;
    height: 500px;
    margin-top: 22vh;
    margin-left: 12vw;
    background-color: white;
    border: solid 10px #ef920f;
}

.destination-01 {
    position: absolute;
    height: 34px;
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 4.725px;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.25;
}

.destination-pick {
    position: absolute;
    height: 34px;
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 4.725px;
    text-transform: uppercase;
    color: #ffffff;
    margin-left: 54px;
}

.planete {
    position: absolute;
    width: 445px;
    height: 445px;
    bottom: 0;
    margin-left: 16vw;
    margin-bottom: 10vh;
}

.hero-container {
    position: absolute;
    height: 472px;
    right: 0;
    bottom: 0;
    margin-right: 12vw;
    margin-bottom: 12vh;
    overflow: auto;
}

.hero-nav-moon {
    position: absolute;
    height: 41px;
    width: 41px;
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    color: #ffffff;
    box-sizing: border-box;
    border-bottom: solid 3px white;
    cursor: pointer;
}

.hero-nav-moon-hover {
    position: absolute;
    height: 41px;
    width: 41px;
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    color: #ffffff;
    box-sizing: border-box;
    cursor: pointer;
}

.hero-nav-moon-hover:hover {
    border-bottom: solid 3px #696969;
}

.hero-nav-mars {
    position: absolute;
    height: 41px;
    width: 41px;
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    color: #ffffff;
    cursor: pointer;
    margin-left: 75px;
    box-sizing: border-box;
    border-bottom: solid 3px white;
}

.hero-nav-mars-hover {
    position: absolute;
    height: 41px;
    width: 41px;
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    color: #ffffff;
    cursor: pointer;
    margin-left: 75px;
    box-sizing: border-box;
}

.hero-nav-mars-hover:hover {
    border-bottom: solid 3px #696969;
}

.hero-nav-europa {
    position: absolute;
    height: 41px;
    width: 56px;
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    color: #ffffff;
    margin-left: 147.5px;
    cursor: pointer;
    box-sizing: border-box;
    border-bottom: solid 3px white;
}

.hero-nav-europa-hover {
    position: absolute;
    height: 41px;
    width: 56px;
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    color: #ffffff;
    margin-left: 147.5px;
    cursor: pointer;
    box-sizing: border-box;
}

.hero-nav-europa-hover:hover {
    border-bottom: solid 3px #696969;
}

.hero-nav-titan {
    position: absolute;
    height: 42px;
    width: 42px;
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    color: #ffffff;
    margin-left: 239.5px;
    cursor: pointer;
    box-sizing: border-box;
    border-bottom: solid 3px white;
}

.hero-nav-titan-hover {
    position: absolute;
    height: 42px;
    width: 42px;
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    color: #ffffff;
    margin-left: 239.5px;
    cursor: pointer;
    box-sizing: border-box;
}

.hero-nav-titan-hover:hover {
    border-bottom: solid 3px #696969;
}

.hero-title {
    position: absolute;
    height: 115px;
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 100px;
    line-height: 115px;
    color: #ffffff;
    margin-top: 71px;
}

.hero-desc {
    position: absolute;
    height: 128px;
    font-family: "Barlow";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #d0d6f9;
    margin-top: 200px;
}

.hero-line {
    position: absolute;
    width: 444px;
    height: 1px;
    margin-top: 382px;
    background: #383b4b;
}

.hero-template {
    position: absolute;
    width: 143px;
    height: 61px;
}

.hero-template-first {
    position: absolute;
    height: 17px;
    width: 180px;
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 2.3625px;
    text-transform: uppercase;
    color: #d0d6f9;
}

.hero-template-second {
    width: 180px;
    position: absolute;
    height: 32px;
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 32px;
    text-transform: uppercase;
    color: #ffffff;
    margin-top: 29px;
}

.hero-template[id="distance"] {
    margin-top: 440px;
}

.hero-template[id="travel"] {
    margin-top: 440px;
    margin-left: 222.5px;
}

.container-tableau {
    width: 450px;
    height: 120px;
    background-color: rgba(255, 255, 255, 0.9);
    border-bottom: solid 2px #ef920f;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    position: relative;
}

.tableau-cercle {
    width: 40px;
    height: 40px;
    background-color: #ef920f;
    border-radius: 45%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-left: 10px;
    margin-top: 10px;
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
}

.tableau-titre {
    color: #ef920f;
    font-family: "Poppins";
    font-weight: 600;
    font-size: 18px;
    margin-top: 15px;
    margin-left: 70px;
    position: absolute;
    text-transform: uppercase;
}

.tableau-adresse1 {
    color: #383b4b;
    font-family: "Poppins";
    font-weight: 400;
    font-size: 14px;
    margin-top: 70px;
    margin-left: 10px;
    position: absolute;
    text-transform: uppercase;
}

.tableau-adresse2 {
    color: #383b4b;
    font-family: "Poppins";
    font-weight: 400;
    font-size: 14px;
    margin-top: 90px;
    margin-left: 10px;
    position: absolute;
    text-transform: uppercase;
}

.tableau-horaire {
    color: white;
    font-family: "Poppins";
    font-weight: 400;
    font-size: 12px;
    position: absolute;
    margin-top: 120px;
    margin-left: 10px;
}

.tableau-service {
    color: #82b479;
    font-family: "Poppins";
    font-weight: 400;
    font-size: 14px;
    position: absolute;
    margin-top: 120px;
    margin-left: 200px;
    background-color: white;
    width: 200px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}
</style>
