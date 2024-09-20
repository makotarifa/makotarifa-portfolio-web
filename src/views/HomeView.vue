<script setup lang="ts">
import { vIntersectionObserver } from "@vueuse/components";
import MainSection from "@/views/sections/HomeView/InicioHome.vue";
import SobreMi from "@/views/sections/HomeView/SobreMi.vue";
import Proyectos from "@/views/sections/HomeView/ProyectosHome.vue";
import ExperienciaHome from "@/views/sections/HomeView/ExperienciaHome.vue";
import ContactoHome from "@/views/sections/HomeView/ContactoHome.vue";
import { useVisibilityStore } from "@/stores/visibility";

const visibilityStore = useVisibilityStore();

const onIntersectionObserver = (key: string) => ([{ isIntersecting }]: IntersectionObserverEntry[]) => {
    visibilityStore.setVisibility(key, isIntersecting);
};

const getVisibility = (key: string) => {
    const item = visibilityStore.visibility.find(v => v.key === key);
    return item ? item.value : false;
};

</script>

<template>
    <main>
        <div class="home-view">
            <main-section
                class="ms-350-delay"
                v-intersection-observer="onIntersectionObserver('isVisibleMain')"
                :class="{ 'animate__animated animate__fadeIn': getVisibility('isVisibleMain'), 'animate__animated animate__fadeOut': !getVisibility('isVisibleMain') }" />
            <experiencia-home
                class="ms-350-delay"
                v-intersection-observer="onIntersectionObserver('isVisibleExperiencia')"
                :class="{ 'animate__animated animate__fadeIn': getVisibility('isVisibleExperiencia'), 'animate__animated animate__fadeOut': !getVisibility('isVisibleExperiencia') }" />
            <sobre-mi
                class="ms-350-delay"
                v-intersection-observer="onIntersectionObserver('isVisibleSobreMi')"
                :class="{ 'animate__animated animate__fadeIn': getVisibility('isVisibleSobreMi'), 'animate__animated animate__fadeOut': !getVisibility('isVisibleSobreMi') }" />
            <proyectos
                class="ms-350-delay"
                v-intersection-observer="onIntersectionObserver('isVisibleProyectos')"
                :class="{ 'animate__animated animate__fadeIn': getVisibility('isVisibleProyectos'), 'animate__animated animate__fadeOut': !getVisibility('isVisibleProyectos') }" />
            <contacto-home
                class="ms-350-delay"
                v-intersection-observer="onIntersectionObserver('isVisibleContacto')"
                :class="{ 'animate__animated animate__fadeIn': getVisibility('isVisibleContacto'), 'animate__animated animate__fadeOut': !getVisibility('isVisibleContacto') }" />
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

.ms-350-delay{
    -webkit-animation-delay: 350ms;
    animation-delay: 350ms;
}
</style>