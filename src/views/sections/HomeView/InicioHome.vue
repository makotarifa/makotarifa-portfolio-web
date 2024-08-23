<script setup lang="ts">
import Button from "primevue/button";
</script>

<template>
    <section id="main-section">
        <div class="main-content">
            <div class="left-main">
                <section>
                    <h3>Full Stack Developer</h3>
                    <h1>Ángel "Mako" Morando</h1>
                    <p>Desarrollador de Software en tecnologías web y móviles.</p>
                </section>
                <section class="social-buttons">
                    <Button label="LinkedIn" icon="pi pi-linkedin" iconPos="left" size="small"/>
                    <Button label="GitHub" icon="pi pi-github" iconPos="left" size="small"/>
                </section>
            </div>
            <div class="img-controller right-main">
                <img src="../../../assets/images/developer.jpg" alt="Software Developer" />
            </div>
        </div>
        <div class="download-cv">
            <Button label="Descargar CV" icon="pi pi-download" iconPos="left" />
        </div>
    </section>
</template>

<style scoped>
#main-section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
}

.main-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
}

.main-content div {
    padding: 0 1rem;
}

.img-controller {
    width: 25%;
    min-width: 300px;
    max-width: 450px;
}

.right-main img {
    padding: 2rem;
    border-radius: 50%;
}

h3 {
    color: #555555;
    font-size: 1.5rem;
}

h1 {
    color: #aeff53;
    font-size: 3rem;
}

p {
    color: #555555;
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
</style>