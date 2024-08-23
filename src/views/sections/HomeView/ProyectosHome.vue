<script setup lang="ts">
import ProjectCard from "@/components/ProjectCard.vue";
import type { ProjectCardEntity } from "@/Entities/ProjectCardEntity";


const projects: ProjectCardEntity[] = [
    {
        id: crypto.randomUUID(),
        title: "AyudaT Technical Test",
        url: "https://www.google.com",
        text: "Prueba tecnica de front-end realizada para la empresa AyudaT.",
        image: "https://via.placeholder.com/150",
        icons: [
            {
                name: "Vue",
                icon: "devicon-vuejs-plain"
            },
            {
                name: "TypeScript",
                icon: "devicon-typescript-plain"
            },
            {
                name: "Node.js",
                icon: "devicon-nodejs-plain"
            },
            {
                name: "Vite",
                icon: "devicon-vite-plain"
            }

        ]
    },
    {
        id: crypto.randomUUID(),
        title: "PokeTale",
        url: "https://github.com/makotarifa",
        text: "Juego con tematica de pokemon, donde el jugador se enfrenta a los pokemon salvajes en hordas y tiene que sobrevivir el mayor tiempo posible.",
        image: "https://via.placeholder.com/150",
        icons: [
            {
                name: "Unity",
                icon: "devicon-unity-plain"
            },
            {
                name: "C#",
                icon: "devicon-csharp-plain"
            },
            {
                name: "Firebase",
                icon: "devicon-firebase-plain"
            }
        ]
    },
    {
        id: crypto.randomUUID(),
        title: "Gestor de Alumnos",
        url: "https://github.com/makotarifa/GestorAlumnos",
        text: "Proyecto en MAUI para gestionar alumnos y sus calificaciones, ademas de poder exportar los datos a un archivo PDF con el formato del documento de prácticas de la Junta de Andalucia.",
        image: "https://via.placeholder.com/150",
        icons: [
            {
                name: "MAUI",
                icon: "devicon-dot-net-plain"
            },
            {
                name: "C#",
                icon: "devicon-csharp-plain"
            },
            {
                name: "Firebase",
                icon: "devicon-firebase-plain"
            }
        ]
    },
    {
        id: crypto.randomUUID(),
        title: "SFTL",
        url: "https://www.google.com",
        text: "Maquetación de un front-end para una empresa naviera ficticia. Realizada en Android Studio con Kotlin.",
        image: "https://via.placeholder.com/150",
        icons: [
            {
                name: "Android",
                icon: "devicon-android-plain"
            },
            {
                name: "Kotlin",
                icon: "devicon-kotlin-plain"
            }
        ]
    }
];

</script>
<template>
    <section id="project-list">
        <div>
            <h2>Proyectos</h2>
            <p>Estos son algunos de los proyectos en los que he trabajado:</p>
            <div class="cards">
                <project-card class="inside-card" v-for="project in projects" :key="project.id" :title="project.title" :url="project.url"
                              :text="project.text" :icons="project.icons" :image="project.image" />
            </div>
        </div>
    </section>
</template>

<style scoped>
#project-list {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    > div {
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 1rem 2rem;
        width: 100%;
    }

    p {
        font-size: 1.2rem;
    }
}

.main-image img {
    border-radius: 50%;
}

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    grid-auto-rows: 1fr; /* Ensures all rows have the same height */
    gap: 1rem;

    .cards:nth-child(2n) .mt-card-img {
        order: 2;
    }
}
</style>