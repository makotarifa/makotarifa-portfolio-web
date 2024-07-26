<script setup lang="ts">
import MtButton from "@/components/MtButton.vue";

</script>
<template>
    <section id="main-section">
        <div class="main-content">
            <div class="left-main">
                <section>
                    <h3>Software Developer</h3>
                    <h1>Ángel "Mako" Morando</h1>
                    <p>Desarrollador de Software en tecnologías web y móviles.</p>
                </section>
                <section class="social-buttons">
                    <mt-button text="LinkedIn" url="placeholder" icon="images/icons/linkedin.svg" />
                    <mt-button text="GitHub" url="placeholder" icon="images/icons/linkedin.svg" />
                </section>
            </div>
            <div class="img-controller right-main">
                <img src="../../../assets/images/developer.jpg" alt="Software Developer" />
            </div>
        </div>
        <div class="download-cv">
            <mt-button text="Descargar CV" url="placeholder" icon="images/icons/download.svg" size="small" />
        </div>
    </section>

</template>
<style scoped>
#main-section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 90vh;
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

.main-content .img-controller {
    width: 25%;
    min-width: 300px;
    max-width: 450px;
}

.right-main img {
    padding: 2rem;
}

.main-content img {
    border-radius: 50%;
}

.main-content h3 {
    color: #555555;
    font-size: 1.5rem;
}

.main-content h1 {
    color: #aeff53;
    font-size: 3rem;
}

.main-content p {
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
