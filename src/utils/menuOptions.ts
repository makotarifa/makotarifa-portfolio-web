import type { MenuItem } from "primevue/menuitem";
import type { Router } from "vue-router";

export function createMenuOptions(router: Router): MenuItem[] {
    return [
        {
            label: "Inicio",
            key: "start",
            command: async () => {
                await router.push("/#start");
            }
        },
        {
            label: "Experiencia",
            key: "exp-lab",
            command: async () => {
                await router.push("/#exp-lab");
            }
        },
        {
            label: "Sobre Mí",
            key: "about-me",
            command: async () => {
                await router.push("/#about-me");
            }
        },
        {
            label: "Proyectos",
            key: "projects",
            command: async () => {
                await router.push("/#projects");
            }
        },
        {
            label: "Contacto",
            key: "contact",
            command: async () => {
                await router.push("/#contact");
            }
        }
    ];
}