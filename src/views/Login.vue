<template>
  <div class="login container w-25 text-center">
    <b-form @submit="onSubmit">
      <h2 class="mb-3">{{ $ll("login") }}</h2>
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          :placeholder="$ll('enterEmail')"
          aria-describedby="input-email-feedback"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          :placeholder="$ll('enterPassword')"
          aria-describedby="input-password-feedback"
          required
        ></b-form-input>
      </b-form-group>
      <b-button variant="outline-info" type="submit" @click="login" block>
        {{ $ll("login") }}
      </b-button>
      <div class="alternative-option mt-4">
        {{ $ll("noAccount") }}
        <b-button :to="`/register`" variant="outline-info" id="register_button">
          {{ $ll("register") }}
        </b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import Lang from "@/components/lang/lang.vue";
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
    },
    login() {
      const email = this.form.email;
      const password = this.form.password;
      this.$store.dispatch("Login/login", { email, password });
    },
  },
  components: { Lang },
};
</script>

<style></style>
