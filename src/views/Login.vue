<template>
  <div class="login container w-25 text-center">
    <form>
      <h2 class="mb-3">Login</h2>
      <div class="input">
        <label for="email">Email address</label>
        <input
          class="form-control"
          type="text"
          name="email"
          placeholder="email@adress.com"
        />
      </div>
      <div class="input">
        <label for="password">Password</label>
        <input
          class="form-control"
          type="password"
          name="password"
          placeholder="password123"
        />
      </div>
      <div class="alternative-option mt-4">
        You don't have an account?
        <b-button type="submit" variant="outline-primary" id="register_button">
          Register
        </b-button>
      </div>
      <b-button type="submit" variant="primary" id="login_button">
        Login
      </b-button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
