<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "@/views/AppHeader.vue";
import AppFooter from "@/views/AppFooter.vue";
</script>

<template>
    <app-header />
    <RouterView />
    <app-footer />
</template>

<style scoped>
</style>
