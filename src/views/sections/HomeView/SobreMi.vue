<script setup lang="ts">

</script>

<template>
    <section id="sobre-mi">
        <div>
            <h2>Sobre Mi</h2>
            <div class="center">
                <div class="img-controller main-image">
                    <img src="../../../assets/images/developer.jpg" alt="Foto de Ángel">
                </div>
            </div>
            <p>¡Hola! Soy Ángel y soy un desarrollador web. Me encanta programar y crear aplicaciones web. Soy un apasionado de la tecnología y me encanta aprender cosas nuevas. Me encanta trabajar con JavaScript, Vue.js, Node.js, MongoDB, y otras tecnologías web. ¡Gracias por visitar mi sitio web!</p>
        </div>
    </section>
</template>

<style scoped>
    #sobre-mi {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }

    #sobre-mi div {
        padding: 1rem 2rem;
        max-width: 1100px;
    }

    #sobre-mi h2 {
        margin-bottom: 1rem;
    }

    #sobre-mi p {
        font-size: 1.2rem;
    }

    .main-image {
        width: 20%;
        min-width: 250px;
        max-width: 450px;
        transition: transform 0.4s;
    }

    .main-image:hover {
        transform: scale(1.2);
    }



    .main-image img {
        border-radius: 50%;
    }

    .center {
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>