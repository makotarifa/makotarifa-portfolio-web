<script setup lang="ts">
import MainSection from "@/views/sections/HomeView/InicioHome.vue";
import SobreMi from "@/views/sections/HomeView/SobreMi.vue";
import Proyectos from "@/views/sections/HomeView/ProyectosHome.vue";

</script>

<template>
    <main class="home-view">
        <main-section />
        <sobre-mi />
        <proyectos />
    </main>
</template>

<style scoped>
.home-view{
    margin: 0 auto;
    max-width: 1200px;
}
</style>
