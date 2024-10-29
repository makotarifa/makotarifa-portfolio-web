<script setup lang="ts">
import ProjectCard from "@/components/ProjectCard.vue";
import type { ProjectEntity } from "@/Entities/ProjectEntity";


const projects: ProjectEntity[] = [
    {
        id: crypto.randomUUID(),
        title: "PokeTale",
        url: "https://github.com/makotarifa",
        text: "Juego con tematica de pokemon, donde el jugador se enfrenta a los pokemon salvajes en hordas y tiene que sobrevivir el mayor tiempo posible.",
        image: "/images/projects/poketale.jpg",
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
        image: "/images/projects/gestor-cursos.jpg",
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
        title: "SFLT",
        url: "https://github.com/makotarifa/SFTL",
        text: "Maquetación de un front-end para una empresa naviera ficticia. Realizada en Android Studio con Kotlin.",
        image: "/images/projects/SFTL.jpg",
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
    <section id="projects">
        <div>
            <h2>Mis proyectos</h2>
            <div class="cards">
                <project-card class="inside-card" v-for="project in projects" :key="project.id" :project="project" />
            </div>
        </div>
    </section>
</template>

<style scoped>
#projects {


    > div {
        display: flex;
        flex-direction: column;
        padding: 1rem 0;
        width: 100%;
    }
    p {
        font-size: 1.2rem;
    }
}

.main-image img {
    border-radius: 50%;
}

#projects .cards {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
}


</style>