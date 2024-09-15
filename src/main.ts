import "@/assets/main.css";
import "primeicons/primeicons.css";
import "devicon/devicon.min.css";
import "primeflex/primeflex.scss";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import AnimateOnScroll from "primevue/animateonscroll";
import { createApp } from "vue";
import { createPinia } from "pinia";
import VueLazyload from "vue-lazyload";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueLazyload);
app.directive("animateonscroll", AnimateOnScroll);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.mount("#app");


