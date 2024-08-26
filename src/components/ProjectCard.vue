<script setup lang="ts">
import Button from "primevue/button";
import Card from "primevue/card";
import type { ProjectEntity } from "@/Entities/ProjectEntity";

const props = defineProps<{
    project: ProjectEntity;
    backgroundColor?: string;
    textColor?: string;
}>();

const navigateToProject = () => {
    window.open(props.project.url, "_blank");
};

</script>

<template>
    <Card id="mt-card"
          :style="`background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${props.project.image}) center/cover`">
        <template #title>
            <div>
                <h5>{{ project.title }}</h5>
            </div>
        </template>
        <template #content>
            <div class="card-content">
                <p>{{ project.text }}</p>
            </div>
        </template>
        <template #footer>
            <div class="card-footer">
                <div class="tech-icons">
                    <i :title="icon.name" v-for="icon in project.icons" :key="icon.name" :class="icon.icon"></i>
                </div>
                <Button class="pj-button" :label="'Ver proyecto'" @click="navigateToProject" size="small" />
            </div>
        </template>
    </Card>
</template>

<style scoped>
#mt-card {
    border: 1px solid var(--card-border);
    transition: box-shadow 0.3s ease, border 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Asegura que el footer esté en la parte inferior */


    .tech-icons {
        display: flex;
        gap: 10px;

        i {
            font-size: 1.5rem;
            filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.8));
        }
    }

    .card-content {
        height: 15vh;
        min-height: 200px;
    }

    .card-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .pj-button {
        max-width: 150px;
    }

    h5, p {
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
    }
}

#mt-card:hover {
    box-shadow: var(--card-shadow-hover);
    border-color: var(--card-border-hover);
}
</style>