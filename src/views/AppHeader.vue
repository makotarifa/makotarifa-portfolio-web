<script setup lang="ts">

</script>

<template>
    <header>
        <nav>
            <ul>
                <li><a href="/#main-section">Inicio</a></li>
                <li><a href="/#sobre-mi">Sobre Mí</a></li>
                <li><RouterLink to="/proyectos">Proyectos</RouterLink></li>
                <li><RouterLink to="/experiencia">Experiencia</RouterLink></li>
                <li><RouterLink to="/contacto">Contacto</RouterLink></li>
            </ul>
        </nav>
    </header>
</template>
<style scoped>
header {
    z-index: 1;
    position: sticky;
    top: 0;
    backdrop-filter: blur(10px);
    width: 100%;
}

nav {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
}

nav ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 20px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    transition: 0.4s;
    padding: 0.4rem 0.8rem;
    border-radius: 0.25rem;
}

nav ul li a:hover {
    background-color: #555; /* Placeholder color */
}
</style>