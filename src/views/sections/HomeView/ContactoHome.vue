<script setup lang="ts">
import ContactFormModal from "@/components/ContactFormModal.vue";

</script>

<template>
    <section id="contact">
        <h2>Contacto</h2>
        <div class="contact-content">
            <ContactFormModal />
            <div class="social-links">
                <a href="https://github.com/makotarifa" target="_blank" aria-label="GitHub">
                    <i class="pi pi-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/%C3%A1ngel-j-morando-gallego-bb1a4923a/" target="_blank" aria-label="LinkedIn">
                    <i class="pi pi-linkedin"></i>
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.contact-content {
    margin: 0 auto;
    padding: 1rem 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
}

.contact-content h2 {
    margin-bottom: 1rem;
}

.contact-content .social-links {
    display: flex;
    gap: 1.5rem;
}

.contact-content .social-links a i{
    color: rgb(31 41 55);
    font-size: 2rem;
    transition: color 0.3s ease, transform 0.3s ease;
}

.contact-content .social-links a i:hover {
    color: #48D1CC;
    transform: translateY(-3px);
}

</style>