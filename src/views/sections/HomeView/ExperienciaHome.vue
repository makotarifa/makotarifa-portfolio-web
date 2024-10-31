<script setup lang="ts">
import { ref } from "vue";
import ExperienceCard from "@/components/ExperienceCard.vue";
import type { ExperienceEntity } from "@/Entities/ExperienceEntity";

const jobExperiences = ref<ExperienceEntity[]>([
    {
        title: "Software Developer Intern",
        image: "https://www.elestrechodigital.com/wp-content/uploads/2021/01/whatsapp-image-2021-01-01-at-110744.jpeg",
        company: "A.P. Moller - Maersk",
        startDate: "04/2024",
        endDate: "06/2024",
        description: "Durante mis prácticas para obtener la titulación en Desarrollo de Aplicaciones Multiplataforma, tuve la oportunidad de integrarme al equipo ASTRA en el departamento de programación de Maersk, donde desarrollé una aplicación web para la gestión asistida de contenedores, adquiriendo experiencia en tecnologías como Vue y Spring Boot."
    },
    {
        title: "Junior System Administrator",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/e9/34/7b/tarifa-jet.jpg?w=1200&h=900&s=1",
        company: "FRS Iberia S.L.U.",
        startDate: "06/2023",
        endDate: "09/2023",
        description: "Durante el receso entre el primer y segundo año de mi ciclo formativo de grado superior, retomé mi labor en el departamento de IT de FRS Iberia, donde me encargaba de la administración de sistemas, redes y equipos en distintas oficinas, puntos de venta y buques de la empresa. Además, participé activamente en el montaje completo de los sistemas informáticos del buque <i>Poniente Jet</i>."
    },
    {
        title: "IT Assistant",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/e9/34/7b/tarifa-jet.jpg?w=1200&h=900&s=1",
        company: "FRS Iberia S.L.U.",
        startDate: "03/2022",
        endDate: "09/2022",
        description: "Tras obtener mi titulación en Sistemas Microinformáticos y Redes, realicé mis prácticas en FRS Iberia, donde posteriormente me uní al departamento de IT. Allí asumí la responsabilidad de la resolución de incidencias y el mantenimiento de equipos y redes en las oficinas, puntos de venta y buques de la empresa."
    }

]);

</script>

<template>
    <section id="exp-lab">
        <div class="exp-lab-cont">
            <h2>Experiencia Laboral</h2>
            <div v-if="jobExperiences.length" class="experience-cards">
                <experience-card v-for="job in jobExperiences" :key="job.title" :job="job" />
            </div>
            <p v-else>No job experiences available.</p>
        </div>
    </section>
</template>

<style scoped>
#exp-lab {
    margin: 0 auto;

    h2 {
        margin-bottom: 2rem;
    }
}

.experience-cards {
    display: flex;
    width: 100%;
    gap: 2rem;
    flex-direction: column;
}

@media (max-width: 768px) {
    .experience-cards {
        grid-template-columns: 1fr;
    }
}



</style>