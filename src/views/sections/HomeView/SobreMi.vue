<script setup lang="ts">

</script>

<template>
    <section id="sobre-mi">
        <div>
            <h2>Sobre Mi</h2>
            <div class="center">
                <div class="img-controller main-image">
                    <img src="@/assets/images/bichodurmiendo.webp" alt="Foto de Ángel">
                </div>
            </div>
            <article>
                <p>Amante de la informática desde pequeño, me dedicaba a trastear con los ordenadores de mi casa y a
                    investigar cómo funcionaban las cosas. Con el tiempo, me gradué como tecnico de Sistema Microinformáticos y Redes, pero decidí
                    seguir estudiando y me gradué en la FP Superior de Desarrollo de Aplicaciones Multiplataformas. Actualmente me dedico al desarrollo de software tanto web como móvil.</p>
            </article>
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
        width: 30%;
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