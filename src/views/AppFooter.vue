<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";
import { createMenuOptions } from "@/utils/menuOptions";

const router = useRouter();
const menuOptions = createMenuOptions(router);

</script>
<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <h3>Visítame en:</h3>
                <div class="social-links">
                    <a href="https://github.com/yourusername" target="_blank" aria-label="GitHub">
                        <i class="pi pi-github"></i>
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" aria-label="LinkedIn">
                        <i class="pi pi-linkedin"></i>
                    </a>
                </div>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <nav v-for="option in menuOptions" :key="option.key">
                    <RouterLink :to="{ path: '/', hash: '#' + option.key }">{{ option.label }}</RouterLink>
                </nav>
            </div>
<!--            <div class="footer-section">-->
<!--                <h3>¡Contáctame!</h3>-->
<!--                <p>¡Trabajemos juntos!</p>-->
<!--                <Button class="contact-btn" @click="$emit('openContact')">-->
<!--                    Contact Me <i class="fas fa-paper-plane"></i>-->
<!--                </Button>-->
<!--            </div>-->
        </div>
        <div class="footer-bottom">
            <p>&copy; {{ new Date().getFullYear() }} Ángel Jesús Morando Gallego.</p>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    background-color: #006666;
    color: white;
    padding: 4rem 2rem 1rem;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
}

.footer-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.footer-section h3 {
    color: #48D1CC;
    margin-bottom: 1rem;
}

.social-links {
    display: flex;
    gap: 1.5rem;
}

.social-links a i{
    color: white;
    font-size: 2rem;
    transition: color 0.3s ease, transform 0.3s ease;
}

.social-links a i:hover {
    color: #48D1CC;
    transform: translateY(-3px);
}

.footer-section nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.footer-section nav a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer p {
    color: white;
}

.footer-section nav a:hover {
    color: #48D1CC;
}

.contact-btn {
    background-color: #48D1CC;
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
}

.contact-btn:hover {
    background-color: #20B2AA;
}

.footer-bottom {
    margin-top: 3rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 768px) {
    .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .social-links {
        justify-content: center;
    }
}
</style>