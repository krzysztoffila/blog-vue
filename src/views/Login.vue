<template>
  <div class="login container w-25 text-center">
    <b-form @submit="onSubmit">
      <h2 class="mb-3">Login</h2>
      <b-form-group id="input-group-1" label="Enter Email" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          aria-describedby="input-email-feedback"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Password" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          placeholder="Enter password"
          aria-describedby="input-password-feedback"
          required
        ></b-form-input>
      </b-form-group>
      <div class="alternative-option mt-4">
        You don't have an account?
        <b-button
          :to="`/register`"
          variant="outline-primary"
          id="register_button"
        >
          Register
        </b-button>
      </div>
      <!-- <p v-if="errMsg">{{ errMsg }}</p> -->
      <b-button type="submit" variant="primary" @click="login">
        Login
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        errMsg: "",
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
      let errMsg = this.form.errMsg;
      this.$store.dispatch("Login/login", { email, password, errMsg });
    },
  },
};
</script>

<style></style>
