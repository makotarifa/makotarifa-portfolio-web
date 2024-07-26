<script setup lang="ts">
import { computed } from "vue";
import MtButton from "@/components/MtButton.vue";

const props = defineProps({
    title: String,
    text: String,
    url: String,
    image: String,
    backgroundColor: {
        type: String,
        default: "#2c3e50"
    },
    textColor: {
        type: String,
        default: "#ffffff"
    },
    size: {
        type: String,
        default: "small",
        validator: (value: string) => ["small", "medium", "large"].includes(value)
    }
});

const cardStyle = computed(() => ({
    backgroundColor: props.backgroundColor,
    color: props.textColor,
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
                <h3>{{ title }}</h3>
                <p>{{ text }}</p>
            </div>

            <mt-button text="Ver proyecto" :url="url" :size="size" />
        </div>
    </div>
</template>

<style scoped>
#mt-card {
    border: 1px solid var(--card-border);
    transition: box-shadow 0.3s ease, border 0.3s ease;
    display: flex;
    min-width: 300px;
    max-width: 500px;
    min-height: 250px;
}

#mt-card .mt-card-img .img-controller-inverse {
    height: 100%;
}

.mt-card-img img {
    border-radius: var(--card-border-radius);
}

#mt-card:hover {
    box-shadow: var(--card-shadow-hover);
    border-color: var(--card-border-hover);
}

.mt-card-content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

</style>