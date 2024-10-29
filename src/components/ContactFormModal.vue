<script setup lang="ts">
import { ref } from "vue";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { emailCall } from "@/api/emailCall";

const displayModal = ref(false);

const { handleSubmit, resetForm } = useForm({
    validationSchema: yup.object({
        name: yup.string().required("El nombre es obligatorio"),
        email: yup.string().email("Debe ser un correo válido").required("El correo es obligatorio"),
        number: yup.string()
            .matches(/^\+?[0-9]+$/, "El número de teléfono debe ser válido"),
        subject: yup.string().required("El asunto es obligatorio"),
        message: yup.string().required("El mensaje es obligatorio")
    })
});

const { value: name, errorMessage: nameError } = useField("name");
const { value: email, errorMessage: emailError } = useField("email");
const { value: number, errorMessage: numberError } = useField("number");
const { value: subject, errorMessage: subjectError } = useField("subject");
const { value: message, errorMessage: messageError } = useField("message");
const isSubmitSent = ref(false);
const firstTimeSubmit = ref(false);

const onSubmit = handleSubmit(async (values) => {
    try {
        await emailCall({
            name: values.name,
            email: values.email,
            number: values.number,
            subject: values.subject,
            message: values.message
        });
        isSubmitSent.value = true;
    } catch (error) {
        console.error(error);
        isSubmitSent.value = false;
    }
    firstTimeSubmit.value = true;
    resetForm();
});
</script>

<template>
    <div class="contact-outside">
        <Button class="contact-button" label="¡Enviame un mensaje!" icon="pi pi-envelope" @click="displayModal = true" />
    </div>
    <Dialog header="Contacto" v-model:visible="displayModal" :modal="true" :closable="true">
        <form @submit.prevent="onSubmit" class="contact-form">
            <div class="field name">
                <label for="name">Nombre *</label>
                <InputText id="name" v-model="name" />
                <span v-if="nameError">{{ nameError }}</span>
            </div>
            <div class="field email">
                <label for="email">Correo Electrónico *</label>
                <InputText id="email" v-model="email" />
                <span v-if="emailError">{{ emailError }}</span>
            </div>
            <div class="field phone">
                <label for="number">Teléfono</label>
                <InputText id="number" v-model="number" />
                <span v-if="numberError">{{ numberError }}</span>
            </div>
            <div class="field subject">
                <label for="subject">Asunto *</label>
                <InputText id="subject" v-model="subject" />
                <span v-if="subjectError">{{ subjectError }}</span>
            </div>
            <div class="field message">
                <label for="message">Mensaje *</label>
                <Textarea id="message" v-model="message" rows="5" />
                <span v-if="messageError">{{ messageError }}</span>
            </div>
            <span v-if="isSubmitSent && firstTimeSubmit">Mensaje enviado correctamente</span>
            <span v-if="!isSubmitSent && firstTimeSubmit">Error al enviar el mensaje</span>
            <Button class="submit-btn" type="submit" label="Enviar" icon="pi pi-send" />
        </form>
    </Dialog>
</template>

<style scoped>
.contact-form {
    display: grid;
    grid-template-areas:
        "name email phone"
        "subject subject subject"
        "message message message"
        "submit submit submit";
    gap: 1rem;
}

.field {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.field label {
    font-size: 1.1rem;
    font-weight: bold;
}

.contact-form .name {
    grid-area: name;
}

.contact-form .email {
    grid-area: email;
}

.contact-form .phone {
    grid-area: phone;
}

.contact-form .subject {
    grid-area: subject;
}

.contact-form .message {
    grid-area: message;
}

.contact-form .submit-btn {
    grid-area: submit;
}

.contact-outside .p-button, .contact-form .p-button {
    color: #fff;
    background-color: rgb(31 41 55);
    font-size: 1.25rem;
    padding: 1rem;
    border-radius: 1rem;
    border: 0.2rem solid rgb(31 41 55);
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-outside  .p-button:hover, .contact-form .p-button:hover{
    color: var(--main-text-color);
    border: 0.2rem solid rgb(31 41 55);
    background-color: transparent;
    transform: translateY(-2px);
    box-shadow: 0 8px 6px rgba(0, 0, 0, 0.1);
}

.contact-form .p-button {
    background-color: #20B2AA;
    border: 0.2rem solid #20B2AA;
    color: black;
}

.contact-form .p-button:hover {
    background-color: #88edcc;
    border: 0.2rem solid #88edcc;
}

.contact-form span {
    font-weight: 700;
    color: #e35c5c;
    font-size: 1rem;
}


@media (max-width: 900px) {
    .contact-form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        min-width: 80vw;
    }
}



</style>