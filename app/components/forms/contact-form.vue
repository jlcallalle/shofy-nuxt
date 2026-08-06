<template>
  <form id="contact-form" @submit="onSubmit">
    <div class="tp-contact-input-wrapper">
      <div class="tp-contact-input-box">
        <div class="tp-contact-input">
          <input name="name" id="name" type="text" placeholder="Tu Nombre" v-bind="name">
        </div>
        <div class="tp-contact-input-title">
          <label for="name">Nombre</label>
        </div>
        <err-message :msg="errors.name" />
      </div>

      <div class="tp-contact-input-box">
        <div class="tp-contact-input">
          <input name="email" id="email" type="email" placeholder="Tu Email" v-bind="email">
        </div>
        <div class="tp-contact-input-title">
          <label for="email">Email</label>
        </div>
        <err-message :msg="errors.email" />
      </div>

      <div class="tp-contact-input-box">
        <div class="tp-contact-input">
          <input name="subject" id="subject" type="text" placeholder="Tu Asunto" v-bind="subject">
        </div>
        <div class="tp-contact-input-title">
          <label for="subject">Asunto</label>
        </div>
        <err-message :msg="errors.subject" />
      </div>

      <div class="tp-contact-input-box">
        <div class="tp-contact-input">
          <Field name="message" v-slot="{ field }">
            <textarea v-bind="field" id="message" name="message" placeholder="Tu Mensaje"></textarea>
          </Field>
        </div>
        <div class="tp-contact-input-title">
          <label for="message">Tu Mensaje</label>
        </div>
        <err-message :msg="errors.message" />
      </div>
    </div>

    <div class="tp-contact-suggetions mb-20">
      <div class="tp-contact-remeber">
        <input id="remeber" type="checkbox">
        <label for="remeber">Guardar mi nombre y email en este navegador para la proxima vez que escriba.</label>
      </div>
    </div>

    <p
      v-if="submitMessage"
      :class="`tp-contact-submit-message ${submitStatus === 'success' ? 'success' : 'error'}`"
    >
      {{ submitMessage }}
    </p>

    <div class="tp-contact-btn">
      <button type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? "Enviando..." : "Enviar Mensaje" }}
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { Field, useForm } from "vee-validate";
import * as yup from "yup";

interface IFormValues {
  name?: string | null;
  email?: string | null;
  subject?: string | null;
  message?: string | null;
}

const contactEmail = "jlcallalle@gmail.com";
const contactCopyEmail = "Boottrainingperu@gmail.com";
const isSubmitting = ref(false);
const submitStatus = ref<"success" | "error" | null>(null);
const submitMessage = ref("");

const { errors, handleSubmit, defineInputBinds, resetForm } = useForm<IFormValues>({
  validationSchema: yup.object({
    name: yup.string().required("Ingresa tu nombre").label("Nombre"),
    email: yup.string().required("Ingresa tu email").email("Ingresa un email valido").label("Email"),
    subject: yup.string().required("Ingresa el asunto").label("Asunto"),
    message: yup.string().required("Ingresa tu mensaje").label("Mensaje"),
  }),
});

const onSubmit = handleSubmit(async (values) => {
  isSubmitting.value = true;
  submitStatus.value = null;
  submitMessage.value = "";

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
        _subject: `Nuevo mensaje de contacto: ${values.subject}`,
        _cc: contactCopyEmail,
        _template: "table",
        _captcha: "false",
      }),
    });

    if (!response.ok) {
      throw new Error("No se pudo enviar el mensaje");
    }

    submitStatus.value = "success";
    submitMessage.value = "Mensaje enviado correctamente. Te responderemos pronto.";
    resetForm();
  } catch (error) {
    submitStatus.value = "error";
    submitMessage.value = "No se pudo enviar el mensaje. Intentalo nuevamente o escribe por WhatsApp.";
  } finally {
    isSubmitting.value = false;
  }
});

const name = defineInputBinds("name");
const email = defineInputBinds("email");
const subject = defineInputBinds("subject");
</script>

<style scoped>
.tp-contact-submit-message {
  margin-bottom: 18px;
  font-size: 14px;
  font-weight: 500;
}

.tp-contact-submit-message.success {
  color: #118c4f;
}

.tp-contact-submit-message.error {
  color: #d93025;
}

.tp-contact-btn button:disabled {
  cursor: not-allowed;
  opacity: 0.7;
}
</style>
