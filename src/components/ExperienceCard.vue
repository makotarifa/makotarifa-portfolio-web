Para adaptar `ExperienceCard` al estilo visual de `ProjectCard`, asegurando que las fotos se vean a la izquierda cuando el tamaño está al máximo, y teniendo en cuenta los títulos de los trabajos y el tamaño de los párrafos, aquí tienes el código actualizado:

```vue
<script setup lang="ts">
import { defineProps } from "vue";
import Tag from "primevue/tag";
import type { ExperienceEntity } from "@/Entities/ExperienceEntity";

const props = defineProps<{
    job: ExperienceEntity
}>();
</script>

<template>
    <div id="job-card">
        <div class="left-side">
            <img :src="job.image" alt="Job image"/>
        </div>
        <div class="right-side">
            <div class="card-content">
                <div class="card-title">
                    <i class="pi pi-briefcase"></i><h3>{{ job.title }}</h3>
                </div>
                <div class="card-subtitle">
                    <h4>{{ job.company }}</h4>
                </div>
                <div class="card-tags">
                    <Tag class="card-tag" :value="job.startDate" severity="info" />
                    <p>-</p>
                    <Tag class="card-tag" :value="job.endDate" severity="info" />
                </div>
                <p v-html="job.description"></p>
            </div>
        </div>
    </div>
</template>

<style scoped>
#job-card {
    border-radius: 1rem;
    background-color: #fff;
    display: flex;
    max-height: 20rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    color: #333333;
    transition: all 0.3s ease;
}

#job-card .left-side, #job-card .right-side {
    width: 50%;
}

#job-card .left-side img {
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    width: 100%;
    height: 20rem;
    object-fit: cover;
}

#job-card .right-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.2rem;
    padding: 1rem;
}

#job-card .card-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

#job-card .card-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

#job-card .card-title h3 {
    font-size: 1.5rem;
}

#job-card .card-subtitle h4 {
    font-size: 1.2rem;
}

#job-card .card-subtitle {
    display: flex;
    justify-content: space-between;
}

#job-card .card-tags {
    display: flex;
    align-items: center;
    gap: 0.2rem;
}

#job-card .card-tag {
    font-size: 0.8rem;
}

#job-card p {
    font-size: 1rem;
}

#job-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

#job-card .p-tag {
    transition: background-color 0.3s ease;
    background-color: #006666;
    color: white;
}

#job-card .p-tag:hover {
    background-color: #004d4d;
}


@media (max-width: 950px) {
    #job-card {
        flex-direction: column;
        max-height: max-content;
    }

    #job-card .left-side {
        width: 100%;
        height: 15rem;
    }

    #job-card .left-side img {
        border-top-right-radius: 1rem;
        height: 15rem;
        border-bottom-left-radius: 0;
    }

    #job-card .right-side {
        width: 100%;
        padding: 1rem;
    }
}
</style>
```