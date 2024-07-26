<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
    text: String,
    url: String,
    icon: String,
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

const imageUrl = new URL(`../assets/${props.icon}`, import.meta.url).href;

const iconSize = computed(() => {
    switch (props.size) {
        case "small":
            return "24px";
        case "medium":
            return "40px";
        case "large":
            return "50px";
        default:
            return "24px";
    }
});
</script>

<template>
    <a :href="url" :style="{ color: textColor }" :class="size">
        <div :style="{ backgroundColor: backgroundColor }">
            <div v-if="icon" class="img-controller" :style="{ width: iconSize }">
                <img v-lazy="imageUrl">
            </div>
            <div v-if="text">
                <p>{{ text }}</p>
            </div>
        </div>
    </a>
</template>

<style scoped>
a {
    display: inline-flex;
    text-decoration: none;
}

a.small div {
    padding: 0.1rem 0.2rem;
}

a.medium div {
    padding: 0.2rem 0.3rem;
}

a.large div {
    padding: 0.3rem 0.4rem;
}

a.small div p {
    font-size: 0.8rem;
}

a.medium div p {
    font-size: 1rem;
}

a.large div p {
    font-size: 1.2rem;
}

a div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 24px;
    transition: 0.4s;
}
</style>