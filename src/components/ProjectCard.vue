<script setup lang="ts">
import { computed } from "vue";
import Button from "primevue/button";
import type { IconEntity } from "@/Entities/ProjectCardEntity";

const props = defineProps<{
    title: string;
    text: string;
    url: string;
    image: string;
    icons: IconEntity[];
    backgroundColor?: string;
    textColor?: string;
}>();

const cardStyle = computed(() => ({
    backgroundColor: props.backgroundColor || "#2c3e50",
    color: props.textColor || "#ffffff",
    boxShadow: "var(--card-shadow)",
    borderRadius: "var(--card-border-radius)"
}));

const altText = computed(() => `Imagen de ${props.title}`);
</script>

<template>
    <div id="mt-card" :style="cardStyle">
        <div class="mt-card-img">
            <div class="img-controller-inverse">
                <img :src="image" :alt="altText">
            </div>
        </div>
        <div class="mt-card-content">
            <div>
                <h5>{{ title }}</h5>
                <p>{{ text }}</p>
            </div>

            <div>
                <div class="tech-icons">
                    <i :title="icon.name" v-for="icon in props.icons" :key="icon.name" :class="icon.icon" ></i>
                </div>
                <Button class="pj-button" :label="'Ver proyecto'" :href="url" size="small"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
#mt-card {
    border: 1px solid var(--card-border);
    transition: box-shadow 0.3s ease, border 0.3s ease;
    display: flex;
    width: 100%;

    >div {
        width: 100%;
    }

    .tech-icons {
        display: flex;
        gap: 10px;

        i {
            font-size: 1.5rem;
        }
    }


    .mt-card-content {
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 10px;

        >div:nth-child(1) {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        > div:nth-child(2) {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    .pj-button {
        max-width: 150px;
    }
}

#mt-card .mt-card-img .img-controller-inverse {
    height: 100%
}

.mt-card-img img {
    border-radius: var(--card-border-radius);
}

#mt-card:hover {
    box-shadow: var(--card-shadow-hover);
    border-color: var(--card-border-hover);
}



</style>