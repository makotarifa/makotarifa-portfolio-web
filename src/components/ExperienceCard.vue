<script setup lang="ts">
import { defineProps } from "vue";
import Tag from "primevue/tag";
import type { ExperienceEntity } from "@/Entities/ExperienceEntity";

const props = defineProps<{
    job: ExperienceEntity
}>();
</script>

<template>
    <div class="job-card" :style="`background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${props.job.image}) center/cover;`">
        <div class="card-title">
            <i class="pi pi-briefcase"></i><h3>{{ job.title }}</h3>
        </div>
        <div class="card-subtitle">
            <h4>{{ job.company }}</h4>
        </div>
        <div class="card-content">
            <div class="card-tags">
                <Tag class="card-tag" :value="job.startDate" severity="info" />
                <p>-</p>
                <Tag class="card-tag" :value="job.endDate" severity="info" />
            </div>
            <p>{{ job.description }}</p>
        </div>
    </div>
</template>

<style scoped>
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.job-card {
    color: #fff; /*TODO: Change the color */
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s, background 0.3s;

    h3, h4, p {
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
    }

    i {
        filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.8));
    }
}

.job-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.card-subtitle {
    display: flex;
    justify-content: space-between;
}

.card-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: flex-end;
    height: 100%;
    width: 100%;
}

h3 {
    font-size: 1.2rem;
}

h4 {
    font-size: 1.05rem;
}

.card-tags {
    display: flex;
    align-items: center;
    gap: 0.2rem;
}

.card-tag {
    font-size: 0.8rem;
}
</style>