<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "@/views/AppHeader.vue";
import AppFooter from "@/views/AppFooter.vue";
</script>

<template>
    <div class="app-div">
        <app-header />
        <RouterView />
        <app-footer />
    </div>
</template>

<style scoped>
.app-div {
    background-color: #ceffef;
}
</style>
