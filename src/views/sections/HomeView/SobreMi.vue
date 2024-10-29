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
                        <img src="@/assets/images/about.webp" alt="Setup personal donde hago mis proyectos.">
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

    > div {
        margin: 0 auto;
        padding: 1rem 0;
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

</style>