<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Menu from "primevue/menu";
import Button from "primevue/button";
import { RouterLink } from "vue-router";
import type { MenuItem } from "primevue/menuitem";


const router = useRouter();
const isDropdownVisible = ref(false);
const maxWidthForDropdown = 930;
const menu = ref();

const toggle = (event: any) => {
    menu.value.toggle(event);
};

const menuOptions: MenuItem[] = [
    {
        label: "Inicio",
        key: "main-section",
        command: () => {
            router.push("/#start");
        }
    },
    {
        label: "Experiencia",
        key: "experiencia",
        command: () => {
            router.push("/#exp-lab");
        }
    },
    {
        label: "Sobre Mí",
        key: "sobre-mi",
        command: () => {
            router.push("/#about-me");
        }
    },
    {
        label: "Proyectos",
        key: "proyectos",
        command: () => {
            router.push("/#projects");
        }
    },
    {
        label: "Contacto",
        key: "contacto",
        command: () => {
            router.push("/#contact");
        }
    }
];

const checkDropdownVisibility = () => {
    isDropdownVisible.value = window.innerWidth <= maxWidthForDropdown;
};

onMounted(() => {
    window.addEventListener("resize", checkDropdownVisibility);
    checkDropdownVisibility();
});

onBeforeUnmount(() => {
    window.removeEventListener("resize", checkDropdownVisibility);
});

</script>

<template>
    <header>
        <nav>
            <h2>mako</h2>
            <ul class="desktop-menu" v-if="!isDropdownVisible">
                <li><RouterLink :to="{ path: '/', hash: '#start' }">Inicio</RouterLink></li>
                <li><RouterLink :to="{ path: '/', hash: '#exp-lab' }">Experiencia</RouterLink></li>
                <li><RouterLink :to="{ path: '/', hash: '#about-me' }">Sobre Mí</RouterLink></li>
                <li><RouterLink :to="{ path: '/', hash: '#projects' }">Proyectos</RouterLink></li>
                <li><RouterLink :to="{ path: '/', hash: '#contacto' }">Contacto</RouterLink></li>
            </ul>
            <Button type="button" v-if="isDropdownVisible" icon="pi pi-ellipsis-v" @click="toggle" aria-haspopup="true"
                    aria-controls="overlay_menu" />
            <Menu ref="menu" v-if="isDropdownVisible" id="overlay_menu" :model="menuOptions" :popup="true" />
        </nav>
    </header>
</template>
<style scoped>
header {
    z-index: 1;
    position: fixed;
    top: 0;
    backdrop-filter: blur(10px);
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0 4rem;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}

nav {
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;

    h2 {
        font-size: 1.3rem;
        color: var(--nav-title-color);
    }


    nav ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        margin: 0;
        padding: 0;
        gap: 1rem;
    }

    ul li a {
        color: #fff;
        text-decoration: none;
        transition: 0.4s;
        padding: 0.4rem;
        border-radius: 0.25rem;
        position: relative;
    }

    ul li a::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: var(--nav-animation-color);
        transition: width 0.4s ease-in-out;
    }

    ul li a:hover::after {
        width: 100%;
    }

}


header {
    z-index: 1;
    position: fixed;
    top: 0;
    backdrop-filter: blur(10px);
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0 4rem;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}



@media (max-width: 930px) {
    header {
        position: sticky;
        padding: 0 1.5rem;
    }
}
</style>