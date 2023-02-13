<template>
    <div class="card" v-on:click="openModal">
                </div>
            </div>
        </div>
    </div>
    <!-- The Modal -->
    <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
            <div class="modal-header">
                <span class="close" v-on:click="closeModal()">&times;</span>
                <p>{{ title }}</p>
            </div>
            <div class="modal-body">
                <div class="grid">
                    <img class="img-modal" :src="img" />
                    <div
                        style="
                            padding-left: 20px;
                            display: flex;
                            flex-direction: column;
                            align-items: stretch;
                        "
                    >
                        <div
                            class="horizontal-wrapper"
                            style="margin-block: 2.5px"
                        >
                            <p class="title">{{ title }}</p>
                            <p class="date">{{ date }}</p>
                        </div>

                        <p class="user" style="margin-block: 2.5px">
                            {{ user }}
                        </p>
                        <p class="desc" style="margin-block: 2.5px">
                            <l>{{ desc }}</l>
                        </p>
                        <div
                            class="horizontal-wrapper"
                            style="margin-block: 2.5px"
                        >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PlantItem",
    props: {
        title: String,
        date: String,
        user: String,
        title: String,
        desc: String,
        img: String,
        phone: String,
    },
    methods: {
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
};
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

.button-box {
    display: flex;
    flex-direction: row;
    margin-block: 10px;
}

.button-icon {
    width: 20px;
    margin-right: 10px;
}

.img {
    width: 170px;
    height: 200px;
    object-fit: cover;

    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

.img-modal {
    width: 300px;
    height: 350px;
    object-fit: cover;

    border-radius: 10px;
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
    background-color: #fcfcfc;
    border-radius: 20px;
    box-shadow: 2px 4px 2px 0px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
}

.card:hover {
    transform: scale(1.05);
}

.date {
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    color: #5eb563;
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
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
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
    from {
        top: -300px;
        opacity: 0;
    }
    to {
        top: 0;
        opacity: 1;
    }
}

@keyframes animatetop {
    from {
        top: -300px;
        opacity: 0;
    }
    to {
        top: 0;
        opacity: 1;
    }
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
    background-color: #5eb563;
    color: white;
    border-radius: 20px 20px 0px 0px;
}

.modal-header p {
    font-family: "Inter", sans-serif;
}

.modal-body {
    padding: 2px 16px;
    margin-top: 10px;
    margin-bottom: 10px;
}
