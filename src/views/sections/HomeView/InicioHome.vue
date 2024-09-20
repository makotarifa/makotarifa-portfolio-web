<script setup lang="ts">
import Button from "primevue/button";
import { downloadCV } from "@/api/apiCalls";

</script>
<template>
    <section id="start">
        <div class="main-content">
            <div class="left-main">
                <section>
                    <h3>Desarrollador Full Stack</h3>
                    <h1>Ángel <span class="highlight">"Mako"</span> Morando</h1>
                    <p>Tecnologías web y móvil.</p>
                </section>
                <section class="social-buttons">
                    <Button as="a" link href="https://www.linkedin.com/in/%C3%A1ngel-j-morando-gallego-bb1a4923a/"
                            target="_blank" rel="noopener" label="LinkedIn" icon="pi pi-linkedin" iconPos="left"
                            size="small" />
                    <Button as="a" link href="https://github.com/makotarifa" target="_blank" rel="noopener"
                            label="GitHub" icon="pi pi-github" iconPos="left" size="small" />
                </section>
            </div>
            <div class="img-controller right-main">
                <img src="@/assets/images/developer.jpg" alt="Software Developer" />
            </div>
        </div>
        <div class="download-cv">
            <Button label="Descargar CV" icon="pi pi-download" iconPos="left" @click="downloadCV"  />
        </div>
    </section>
</template>

<style scoped>
#start {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh
}

a {
    text-decoration: none;
}

.main-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    height: 100%;

    > div:last-child {
        flex-grow: 1;
        padding: 0 1rem;
    }

    > div:first-child {
        flex-grow: 20;
    }

}

.img-controller {
    width: 30%;
    min-width: 300px;
    max-width: 550px;
}

.right-main img {
    border-radius: 50%;
}

h3 {
    color: var(--sunset-yellow);
    font-size: 1.5rem;
}

h1 {
    font-size: 3rem;
    color: var(--main-text-color);
    display: inline-block;

    .highlight {
        font-weight: inherit;
        background: linear-gradient(to right, var(--main-gradient-text-color), var(--main-gradient-text-color-2));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
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

.download-cv {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
}

@media (max-width: 730px) {
    .main-content {
        flex-direction: column;
        align-items: center;
    }

    .img-controller {
        margin: 1.5rem 0;
    }

    .left-main {
        order: 2;
    }

    .right-main {
        order: 1;
    }
}
</style>