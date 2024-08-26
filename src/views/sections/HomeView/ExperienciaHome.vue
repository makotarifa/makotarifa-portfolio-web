<script setup lang="ts">
import { ref } from "vue";
import ExperienceCard from "@/components/ExperienceCard.vue";
import type { ExperienceEntity } from "@/Entities/ExperienceEntity";

const jobExperiences = ref<ExperienceEntity[]>([
    {
        title: "Software Developer Intern",
        image: "https://www.elestrechodigital.com/wp-content/uploads/2023/06/maersk-contenedor-arcoiris-2023-1.jpg",
        company: "A.P. Moller - Maersk",
        startDate: "04/2024",
        endDate: "06/2024",
        description: "Developed and maintained web applications using Vue.js and TypeScript."
    },
    {
        title: "Junior System Administrator",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/e9/34/7b/tarifa-jet.jpg?w=1200&h=900&s=1",
        company: "FRS Iberia S.L.U.",
        startDate: "06/2023",
        endDate: "09/2023",
        description: "Created responsive web designs and improved user experience."
    },
    {
        title: "IT Assistant",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/e9/34/7b/tarifa-jet.jpg?w=1200&h=900&s=1",
        company: "FRS Iberia S.L.U.",
        startDate: "06/2022",
        endDate: "09/2022",
        description: "Created responsive web designs and improved user experience."
    }

]);

</script>

<template>
    <section class="laboral-exp">
        <h2>Experiencia Laboral</h2>
        <div v-if="jobExperiences.length" class="experience-cards">
            <experience-card v-for="job in jobExperiences" :key="job.title" :job="job" />
        </div>
        <p v-else>No job experiences available.</p>
    </section>
</template>

<style scoped>
.laboral-exp {
    margin: 0 auto;
    padding: 2rem;
    border-radius: 8px;
    animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.experience-cards {
    display: grid;
    width: 100%;
    gap: 0.5rem;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(500px, auto); /* Increase the minimum height of each row */
}

@media (max-width: 768px) {
    .experience-cards {
        grid-template-columns: 1fr;
    }
}



</style>