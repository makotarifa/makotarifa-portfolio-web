<script setup lang="ts">
import Button from "primevue/button";
import { downloadCV } from "@/api/apiCalls";

const greeting = new Intl.DateTimeFormat().resolvedOptions().locale;
const greetings: { [key: string]: { text: string, emoji: string } } = {
    'en': { text: 'Hello!', emoji: '👋' },
    'es': { text: '¡Hola!', emoji: '✨' },
    'fr': { text: 'Bonjour', emoji: '🌟' },
    'de': { text: 'Hallo', emoji: '🌈' },
    'it': { text: 'Ciao', emoji: '🎨' },
    'ja': { text: 'こんにちは', emoji: '🎭' },
    'zh': { text: '你好', emoji: '🌺' },
};

const defaultGreeting = { text: 'Hello', emoji: '👋' };
const currentGreeting = greetings[greeting.split('-')[0]] || defaultGreeting;

</script>
<template>
    <section id="start">
        <div class="main-content">
            <div class="left-main">
                <section class="texts">
                    <div class="greeting">
                        <span class="greeting-text">{{ currentGreeting.text }}</span>
                        <span class="greeting-emoji">{{ currentGreeting.emoji }}</span>
                    </div>
                    <h3>Soy Ángel <span class="highlight">"Mako"</span> Morando</h3>
                    <h1>Desarrollador en tecnologias web y móvil.</h1>
                </section>
                <section class="social-buttons">
                    <Button label="Descargar CV" icon="pi pi-download" iconPos="left" @click="downloadCV" />
                    <Button as="a" href="https://www.linkedin.com/in/%C3%A1ngel-j-morando-gallego-bb1a4923a/"
                            target="_blank" rel="noopener" label="LinkedIn" icon="pi pi-linkedin" iconPos="left" />
                    <Button as="a" href="https://github.com/makotarifa" target="_blank" rel="noopener"
                            label="GitHub" icon="pi pi-github" iconPos="left" />
                </section>
            </div>
            <div class="img-controller right-main">
                <img src="@/assets/images/sparks.webp" alt="Software Developer" />
            </div>
        </div>

    </section>
</template>

<style scoped>
@keyframes wave {
    0% { transform: rotate(0deg); }
    10% { transform: rotate(14deg); }
    20% { transform: rotate(-8deg); }
    30% { transform: rotate(14deg); }
    40% { transform: rotate(-4deg); }
    50% { transform: rotate(10deg); }
    60% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
}

#start {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
}

.greeting {
    background-color: var(--section-color-2);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    color: var(--main-text-color);
    font-size: 2rem;
    margin-bottom: 1rem;
    width: fit-content;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}

.greeting-text {
    font-weight: 900;
}

.greeting-emoji {
    display: inline-block;
    animation: wave 2s infinite;
    transform-origin: 70% 70%;
}


a {
    text-decoration: none;
}

.left-main {
    padding: 0 0 2rem 0;
}

.left-main .texts {
    display: flex;
    flex-direction: column;
}

.main-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 100%;

    > div {
        flex-grow: 1;
    }

}

.img-controller {
    width: 100%;
    min-width: 300px;
    max-width: 800px;
}

.right-main img {
}

h1, h3 {
    font-family: 'Eczar', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    color: #353535;
    display: inline-block;

    .highlight {
        font-weight: inherit;
        color: var(--main-text-color);
    }
}

p {
    font-size: 1.25rem;
}

.social-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    padding: 1.5rem 0;
    gap: 1rem;
}

.social-buttons .p-button {
    padding: 1rem;
    border: 0.2rem solid rgb(31 41 55);
    border-radius: 1rem;
    color: rgb(31 41 55);
    background-color: transparent;
}

.social-buttons .p-button:first-child {
    color: #fff;
    background-color: rgb(31 41 55);
    text-decoration: none;
}

.social-buttons .p-button:hover {
    background-color: rgb(31 41 55);
    color: #fff;
    border: 0.2rem solid rgb(31 41 55);
}

.social-buttons .p-button:first-child:hover {
    color: var(--main-text-color);
    border: 0.2rem solid rgb(31 41 55);
    background-color: transparent;
}


.social-buttons .p-button-label{
    font-weight: 900;

}

h1 {
    font-size: 4vw; /* Ajusta el tamaño del h1 según el ancho de la pantalla */
    line-height: 1.2;
    letter-spacing: 0.2px;
}

h3 {
    font-size: 3vw; /* Ajusta el tamaño del h3 según el ancho de la pantalla */
}

.greeting {
    font-size: 2vw; /* Ajusta el tamaño del texto de greeting según el ancho de la pantalla */
}

@media (max-width: 1400px){
    .social-buttons .p-button {
        padding: 0.5rem;
    }
}

@media (max-width: 1100px) {
    .main-content {
        flex-direction: column;
        align-items: center;
    }

    h1 {
        font-size: 6vw; /* Ajusta el tamaño del h1 para pantallas más pequeñas */
    }

    h3 {
        font-size: 4.5vw; /* Ajusta el tamaño del h3 para pantallas más pequeñas */
    }

    .greeting {
        font-size: 3vw; /* Ajusta el tamaño del texto de greeting para pantallas más pequeñas */
    }

    .social-buttons .p-button {
        padding: 0.8rem;
        border-radius: 0.8rem;
    }
}

@media (max-width: 730px) {

    h1 {
        font-size: 8vw; /* Ajusta el tamaño del h1 para pantallas más pequeñas */
    }

    h3 {
        font-size: 6vw; /* Ajusta el tamaño del h3 para pantallas más pequeñas */
    }

    .social-buttons .p-button {
        padding: 0.6rem;
        border-radius: 0.6rem;
    }


}
</style>