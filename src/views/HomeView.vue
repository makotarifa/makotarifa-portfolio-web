<script setup lang="ts">
import MainSection from "@/views/sections/HomeView/InicioHome.vue";
import SobreMi from "@/views/sections/HomeView/SobreMi.vue";
import Proyectos from "@/views/sections/HomeView/ProyectosHome.vue";
import ExperienciaHome from "@/views/sections/HomeView/ExperienciaHome.vue";

</script>

<template>
    <main>
        <div class="home-view">
            <main-section />
            <experiencia-home />
            <sobre-mi />
            <proyectos />
        </div>
    </main>
</template>

<style scoped>
main {
    background: radial-gradient(circle, rgb(22, 43, 156) 0%, rgb(0, 6, 19) 70%);
}

.home-view{
    margin: 0 auto;
    max-width: 1200px;
}
</style>
