<script setup lang="ts">
import MainSection from "@/views/sections/HomeView/InicioHome.vue";
import SobreMi from "@/views/sections/HomeView/SobreMi.vue";
import Proyectos from "@/views/sections/HomeView/ProyectosHome.vue";
import ExperienciaHome from "@/views/sections/HomeView/ExperienciaHome.vue";
import ContactoHome from "@/views/sections/HomeView/ContactoHome.vue";

</script>

<template>
    <main>
        <div class="home-view">
            <main-section />
            <experiencia-home />
            <sobre-mi />
            <proyectos />
            <contacto-home />
        </div>
    </main>
</template>

<style scoped>
.home-view {
    margin: 0 auto;
}

.home-view > section:first-child{
    padding: 0 8vw;
}

.home-view > section {
    padding: 3rem 8vw;
}

.home-view > section:nth-child(2n-1) {
    background-color: var(--section-color-1);
}

.home-view > section:nth-child(2n) {
    background-color: var(--section-color-2);
}

@media screen and (max-width: 768px) {
    .home-view > section {
        padding: 3rem 2rem;
    }
}
</style>