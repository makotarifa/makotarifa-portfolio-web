<script setup lang="ts">
import ProjectCard from "@/components/ProjectCard.vue";
import type { ProjectCardEntity } from "@/Entities/ProjectCardEntity";


const projects: ProjectCardEntity[] = [
    {
        id: crypto.randomUUID(),
        title: "Proyecto 1",
        url: "https://www.google.com",
        text: "Is this real gangsta love.",
        image: "https://via.placeholder.com/150"
    },
    {
        id: crypto.randomUUID(),
        title: "Proyecto 2",
        url: "https://www.google.com",
        text: "Is this real gangsta love.",
        image: "https://via.placeholder.com/150"
    },
    {
        id: crypto.randomUUID(),
        title: "Proyecto 3",
        url: "https://www.google.com",
        text: "Is this real gangsta love.",
        image: "https://via.placeholder.com/150"
    },
    {
        id: crypto.randomUUID(),
        title: "Proyecto 4",
        url: "https://www.google.com",
        text: "Is this real gangsta love.",
        image: "https://via.placeholder.com/150"
    }
];

</script>
<template>
    <section id="project-list">
        <div>
            <h2>Proyectos</h2>
            <p>Estos son algunos de los proyectos en los que he trabajado:</p>
            <div class="cards">
                <project-card v-for="project in projects" :key="project.id" :title="project.title" :url="project.url"
                              :text="project.text" :image="project.image" />
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
    gap: 1rem;
}
</style>