<script setup lang="ts">
</script>

<template>
    <section id="about-me">
        <div>
            <h2>Sobre Mi</h2>
            <div class="content">
                <article>
                    <p><i>Desde una edad temprana</i>, he sido un apasionado de la informática, dedicando tiempo a explorar y comprender el funcionamiento de los ordenadores.</p>
                    <p>A los 20 años, obtuve la titulación de <b>Técnico en Sistemas Microinformáticos y Redes</b>, lo que me permitió adquirir una sólida base técnica.</p>
                    <p>Motivado por el deseo de aumentar mis conocimientos y habilidades, decidí continuar mi formación y me gradué en la <b>Formación Profesional Superior en Desarrollo de Aplicaciones Multiplataformas</b>.</p>
                    <p>En la actualidad, me especializo en el desarrollo de software para entornos web y móviles, aplicando tecnologías como <b>Vue</b> y <b>Spring Boot</b>.</p>
                    <p>Estoy comprometido con el <i>aprendizaje continuo</i> y la mejora de mis competencias, lo que me permite abordar desafíos complejos y contribuir eficazmente a proyectos innovadores.</p>
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

    b {
        font-weight: 600;
    }

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