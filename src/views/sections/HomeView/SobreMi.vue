<script setup lang="ts">
</script>

<template>
    <section id="about-me">
        <div>
            <h2>Sobre Mi</h2>
            <div class="content">
                <article>
                    <p>Amante de la informática desde pequeño, me dedicaba a trastear con los ordenadores de mi casa y a
                        investigar cómo funcionaban las cosas. Con el tiempo, me gradué como tecnico de Sistema
                        Microinformáticos y Redes, pero decidí
                        seguir estudiando hasta graduarme en la FP Superior de Desarrollo de Aplicaciones
                        Multiplataformas. Actualmente me dedico al desarrollo de software tanto web como móvil.</p>
                </article>
                <div class="setup-image">
                    <div class="img-controller main-image">
                        <div class="setup-text">
                            <p>¡Mi setup!</p>
                            <div class="img-controller">
                                <img src="@/assets/images/icons/doodle-arrow.svg"
                                     alt="Flecha que apunta hacia la imagen de la zona de trabajo.">
                            </div>
                        </div>
                        <img src="@/assets/images/setup.jpg" alt="Setup personal donde hago mis proyectos.">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
#about-me {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    > div {
        margin: 0 auto;
        padding: 1rem 2rem;
        width: 100%;

        .content {
            display: flex;
            justify-content: center;


            article, .setup-image {
                width: 100%;
            }

            article {
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 1rem;
            }

            .setup-image {
                transition: transform 0.4s;
                min-width: 500px;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;

                .setup-text {
                    position: absolute;
                    top: -15%;
                    left: 3%;
                    font-family: "Indie Flower", 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
                    display: flex;

                    p {
                        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
                        rotate: -15deg;
                        font-size: 2rem;
                    }

                    .img-controller {
                        margin: 2.5rem 0 0 0;
                        width: 70px;
                        filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.8));

                        img {
                            rotate: 70deg;
                            filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
                        }
                    }
                }

                .main-image {
                    position: relative;
                    padding: 2rem;
                }

                .main-image img {
                    border-radius: 0.5rem;
                }


            }

            .setup-image:hover {
                transform: scale(1.05);
            }

        }

    }


    h2 {
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.2rem;
    }

}

@media (max-width: 950px) {
    #about-me {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;

        > div {
            margin: 0 auto;
            padding: 1rem 2rem;
            width: 100%;

            .content {
                display: flex;
                justify-content: center;
                flex-direction: column;


                article, .setup-image {
                    width: 100%;
                }

                article {
                    order: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    gap: 1rem;
                }

                .setup-image {
                    transition: transform 0.4s;
                    min-width: 0;
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .setup-text {
                        position: absolute;
                        top: -8%;
                        left: 70%;
                        display: flex;

                        p {
                            text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
                            rotate: -15deg;
                            font-size: 4vw;
                            min-width: 140px;
                        }

                        .img-controller {
                            margin: 2.5rem 0 0 -2.5rem;
                            min-width: 25px;
                            max-width: 70px;
                            width: 8vw;
                            filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.8));

                            img {
                                rotate: 140deg;
                                filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
                            }
                        }
                    }

                    .main-image {
                        position: relative;
                        padding: 2rem;
                    }

                    .main-image img {
                        border-radius: 0.5rem;
                    }


                }

                .setup-image:hover {
                    transform: scale(1.05);
                }

            }

        }
    }


}
</style>