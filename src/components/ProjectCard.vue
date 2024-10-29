<script setup lang="ts">
import Button from "primevue/button";
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
    <div id="mt-card">
        <div class="left-side">
            <div class="card-content">
                <h5>{{ project.title }}</h5>
                <p>{{ project.text }}</p>
            </div>
            <div class="card-footer">
                <div class="tech-icons">
                    <i :title="icon.name" v-for="icon in project.icons" :key="icon.name" :class="icon.icon"></i>
                </div>
                <Button class="pj-button" :label="'Ver proyecto'" @click="navigateToProject" size="small" />
            </div>
        </div>
        <div class="right-side">
            <img :src="project.image" alt="Project image"/>
        </div>
    </div>
</template>

<style scoped>
#mt-card {
    border-radius: 1rem;
    background-color: #fff;
    display: flex;
    max-height: 20rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

#mt-card .right-side, #mt-card .left-side{
    width: 50%;
}

#mt-card .right-side img {
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    width: 100%;
    height: 20rem;
    object-fit: cover;
}


#mt-card .left-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
}

#mt-card .left-side .card-content{
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

#mt-card .tech-icons {
    display: flex;
    gap: 10px;

}

#mt-card .tech-icons i {
    font-size: 1.5rem;
    color: rgb(31 41 55);
}

#mt-card .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#mt-card .pj-button {
    max-width: 150px;
}

#mt-card h5 {
    color: #333333;
    font-size: 1.5rem;
}

#mt-card p {
    font-size: 1rem;
}


#mt-card:hover {
    border-color: var(--card-border-hover);
}

.card-footer .p-button {
    color: #fff;
    background-color: #006666;
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 0.8rem;
    border: 0.2rem solid #006666;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-footer .p-button:hover{
    color: #006666;
    border: 0.2rem solid #006666;
    background-color: transparent;
    transform: translateY(-2px);
    box-shadow: 0 8px 6px rgba(0, 0, 0, 0.1);
}

@media (max-width: 780px) {
    #mt-card {
        flex-direction: column;
        max-height: max-content;

    }

    #mt-card .right-side {
        width: 100%;
        height: 15rem;
    }

    #mt-card .right-side img {
        border-top-right-radius: 0;
        height: 15rem;
        border-bottom-left-radius: 1rem;

    }

    #mt-card .left-side {
        width: 100%;
        padding: 1rem;
    }
}
</style>