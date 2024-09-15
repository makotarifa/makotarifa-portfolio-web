<script setup lang="ts">
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { emailCall } from "@/api/emailCall";
import { ref } from "vue";

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
    <section id="contact">
        <div class="form-container">
            <h2>Contacto</h2>
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
        </div>
    </section>
</template>

<style scoped>
#contact {
    display: flex;
    justify-content: center;
    align-items: center;
}

.form-container {
    margin: 0 auto;
    padding: 1rem 2rem;
    width: 100%;
}

.form-container h2 {
    margin-bottom: 2rem;
}

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

#contact .name {
    grid-area: name;
}

#contact .email {
    grid-area: email;
}

#contact .phone {
    grid-area: phone;
}

#contact .subject {
    grid-area: subject;
}

#contact .message {
    grid-area: message;
}

#contact .submit-btn {
    grid-area: submit;
}

@media (max-width: 900px) {
    .contact-form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

}
</style>