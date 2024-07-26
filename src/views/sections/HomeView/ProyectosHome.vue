<script setup lang="ts">
import MtCard from "@/components/MtCard.vue";


</script>
<template>
    <section id="proyectos">
        <div>
            <h2>Proyectos</h2>
            <p>Estos son algunos de los proyectos en los que he trabajado:</p>
            <div class="proyect-cards">
                <mt-card title="Proyecto 1" url="https://www.google.com" text="Is this real gangsta love." image="https://via.placeholder.com/150"></mt-card>
            </div>
        </div>
    </section>
</template>

<style scoped>
#proyectos {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

#proyectos > div {
    padding: 1rem 2rem;
    width: 100%;
    max-width: 1100px;
}

#proyectos h2 {
    margin-bottom: 1rem;
}

#proyectos p {
    font-size: 1.2rem;
}

.main-image img {
    border-radius: 50%;
}
</style>