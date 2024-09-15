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
            <main-section  />
            <experiencia-home v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="animate-duration-1000 animate-ease-in-out" />
            <sobre-mi v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="animate-duration-1000 animate-ease-in-out" />
            <proyectos v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="animate-duration-1000 animate-ease-in-out" />
            <contacto-home v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="animate-duration-1000 animate-ease-in-out" />
        </div>
    </main>
</template>

<style scoped>
main {
    background: radial-gradient(circle, rgb(22, 43, 156) 0%, rgb(0, 6, 19) 70%) fixed;
    background-size: cover;
}

.home-view {
    margin: 0 auto;
    max-width: 1200px;
}

.home-view > section {
    min-height: 100vh;
}

</style>


