<template>
  <div class="form-container">
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          :placeholder="$ll('enterName')"
          aria-describedby="input-name-feedback"
          :state="inputStates.name"
          required
        ></b-form-input>
        <b-form-invalid-feedback id="input-name-feedback">
          {{ errors.name }}
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label-for="input-1"
        :description="$ll('noShareEmailInfo')"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          :placeholder="$ll('enterEmail')"
          aria-describedby="input-email-feedback"
          :state="inputStates.email"
          required
        ></b-form-input>
        <b-form-invalid-feedback id="input-email-feedback">
          {{ errors.email }}
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          :placeholder="$ll('enterPassword')"
          aria-describedby="input-password-feedback"
          :state="inputStates.password"
          required
        ></b-form-input>
        <b-form-invalid-feedback id="input-password-feedback">
          {{ errors.password | errorsFilter }}
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.confirmPassword"
          type="password"
          :placeholder="$ll('confirmPassword')"
          aria-describedby="input-confirm-password-feedback"
          :state="inputStates.confirmPassword"
          required
        ></b-form-input>
        <b-form-invalid-feedback id="input-confirm-password-feedback">
          {{ errors.confirmPassword | errorsFilter }}
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox v-model="form.rememberMe">
            {{ $ll("rememberMe") }}
          </b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-button type="submit" variant="primary" @click="register">
        {{ $ll("register") }}</b-button
      >
    </b-form>
  </div>
</template>

<script>
import Lang from "@/components/lang/lang.vue";
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        rememberMe: false,
      },
      inputStates: {
        name: null,
        email: null,
        password: null,
        confirmPassword: null,
      },
      errors: {
        name: [],
        email: [],
        password: [],
        confirmPassword: [],
      },
    };
  },
  methods: {
    validate() {
      for (let key in this.errors) {
        this.errors[key] = [];
      }
      if (this.form.password !== this.form.confirmPassword) {
        this.errors.confirmPassword.push("Hasła muszą być takie same!");
        this.errors.password.push("Hasła muszą być takie same!");
      }
      if (this.form.password.length < 8) {
        this.errors.password.push("Hasło musi mieć conajmniej 8 znaków!");
      }
      if (this.form.confirmPassword.length < 8) {
        this.errors.confirmPassword.push(
          "Hasło musi mieć conajmniej 8 znaków!"
        );
      }
    },
    onSubmit(event) {
      event.preventDefault();
      this.validate();
    },
    register() {
      const email = this.form.email;
      const password = this.form.password;
      this.$store.dispatch("Register/register", { email, password });
    },
  },
  filters: {
    errorsFilter(value) {
      return value.join(" ");
    },
  },
  watch: {
    errors: {
      deep: true,
      handler(errors) {
        for (let key in errors) {
          this.inputStates[key] = errors[key].length == 0;
        }
      },
    },
  },
  components: { Lang },
};
</script>
<style scoped lang="scss">
.form-container {
  max-width: 20%;
  margin: 0 auto;
  padding: 20px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
}
</style>
