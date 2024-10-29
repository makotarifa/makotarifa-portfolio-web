<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import Menu from "primevue/menu";
import Button from "primevue/button";
import { RouterLink, useRouter } from "vue-router";
import { createMenuOptions } from "@/utils/menuOptions";

const router = useRouter();
const menuOptions = createMenuOptions(router);

const isDropdownVisible = ref(false);
const maxWidthForDropdown = 930;
const menu = ref();

const toggle = (event: any) => {
    menu.value.toggle(event);
};


const checkDropdownVisibility = () => {
    isDropdownVisible.value = window.innerWidth <= maxWidthForDropdown;
};

const handleScroll = () => {
    const header = document.querySelector('header');
    const headerHeight = header?.offsetHeight || 0;
    if (window.scrollY > headerHeight) {
        header?.classList.add('reduced');
    } else {
        header?.classList.remove('reduced');
    }
};

onMounted(() => {
    window.addEventListener("resize", checkDropdownVisibility);
    window.addEventListener("scroll", handleScroll);
    checkDropdownVisibility();
});

onBeforeUnmount(() => {
    window.removeEventListener("resize", checkDropdownVisibility);
    window.removeEventListener("scroll", handleScroll);

});

</script>

<template>
    <header>
        <nav>
            <h2>mako</h2>
            <ul class="desktop-menu" v-if="!isDropdownVisible">
                <li v-for="option in menuOptions" :key="option.key">
                    <RouterLink :to="{ path: '/', hash: '#' + option.key }">{{ option.label }}</RouterLink>
                </li>
            </ul>
            <Button type="button" outlined v-if="isDropdownVisible" icon="pi pi-bars" @click="toggle" aria-haspopup="true"
                    aria-controls="overlay_menu" />
            <Menu ref="menu" v-if="isDropdownVisible" id="overlay_menu" :model="menuOptions" :popup="true" />
        </nav>
    </header>
</template>
<style scoped>
header {
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 4rem;
    background: #ceffef;
    min-height: 15vh;
}

header.reduced {
    background: rgba(206, 255, 239, 0.62);
    min-height: 8vh; /* Altura reducida del header */
}

nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        font-family: 'Eczar', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        font-size: 1.3rem;
        margin-bottom: 0;
    }


    ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        margin: 0;
        padding: 0;
        gap: 1rem;
    }

    ul li a {
        font-size: 1.3rem;
        color: rgba(0, 0, 0, 0.7);
        font-weight: 600;
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
        background-color: #eab363;
        transition: width 0.4s ease-in-out;
    }

    ul li a:hover::after {
        width: 100%;
    }

}


header {
    z-index: 1;
    top: 0;
    backdrop-filter: blur(10px);
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0 4rem;
}



@media (max-width: 930px) {
    header {
        padding: 0 1.5rem;
        min-height: 15vh;
    }

    header.reduced {
        background: rgba(206, 255, 239, 0.62);
        min-height: 15vh;
    }
}
</style>