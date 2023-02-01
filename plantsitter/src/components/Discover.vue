<template>
    <div class="home-page">
        <div class="map" id="map"></div>
        <div class="hero-container">
            <table > <!--v-for="publication in publications"-->
                <tr>
                    <td>
                        <div
                            id="{publication.id}"
                            class="container-tableau"
                            onclick="selectMarker(this.id);"
                        >
                            <div class="tableau-cercle">
                                1<!--{{ publication.id }}-->
                            </div>
                            <div class="tableau-photo">
                                <img src="../assets/background.png"/><!--{{ publication.photo }}-->
                            </div>
                            <div class="tableau-titre">
                                Plant de rose 5L<!--{{ publication.titre }}-->
                            </div>
                            <div class="tableau-date">
                                30/01/2023<!--{{ publication.dateDebut }}-->
                                 -
                                31/01/2023<!--{{ publication.dateFin }}-->
                            </div>
                            <div class="tableau-client">
                                Alain Chabat<!--{{ publication.idCreateur }}-->
                            </div>
                            <div class="tableau-description">
                                Je recherche quelqu’un susebtible de pouvoir garder mes plantes 1 soir du 30 au 31<!--{{ publication.description }}-->
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


.home-page {
    width: 100vw;
    height: 100vh;
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

.hero-container {
    position: absolute;
    height: 472px;
    right: 0;
    bottom: 0;
    margin-right: 12vw;
    margin-bottom: 12vh;
    overflow: auto;
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

.tableau-client {
    color: #383b4b;
    font-family: "Poppins";
    font-weight: 400;
    font-size: 14px;
    margin-top: 70px;
    margin-left: 10px;
    position: absolute;
    text-transform: uppercase;
}

.tableau-date {
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
