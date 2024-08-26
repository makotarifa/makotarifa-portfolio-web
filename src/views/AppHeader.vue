<script setup lang="ts">

</script>

<template>
    <header>
        <nav>
            <h2>mako</h2>
            <ul>
                <li><a href="/#main-section">Inicio</a></li>
                <li><a href="/#sobre-mi">Sobre Mí</a></li>
                <li><a href="/#experiencia">Experiencia</a></li>
                <li><a href="/#proyectos">Proyectos</a></li>
                <li><a href="/#tecnologias">Tecnologias</a></li>
                <li><a href="/#contacto">Contacto</a></li>
            </ul>
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
        color: var(--nav-title-color);
    }

}

nav ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 10px;
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

nav {
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
}

nav ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 1rem;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    transition: 0.4s;
    padding: 0.4rem;
    border-radius: 0.25rem;
    position: relative;
}

nav ul li a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--nav-animation-color);
    transition: width 0.4s ease-in-out;
}

nav ul li a:hover::after {
    width: 100%;
}
</style>