<template>
  <div>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <h1>Login</h1>
    <form @submit.prevent="handleClick">
    <div class="row">
    <div class="col-md-4 mx-auto">
      <input type="email" id="email" v-model="email" placeholder="Email" class="form-control"/>
      <br />
      <input type="password" id="password" v-model="password" placeholder="Password" class="form-control"/>
      </div>
  </div>
      <br />
      <button type="submit" class="btn btn-primary" v-if="mode === 'login'">Login</button>
      <button type="submit" class="btn btn-primary" v-if="mode === 'signup'">Sign Up</button>
    </form>
    <p v-if="error">{{ error }}</p>
    <p v-if="mode === 'login'">
      <a @click="mode = 'signup'">Sign up</a>
    </p>
    <p v-if="mode === 'signup'">
      <a @click="mode = 'login'">Login</a>
    </p>
  </div>
</template>

<script>
import {auth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from '../firebase/auth';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
      mode: 'login'
    };
  },
  methods: {
    handleClick()
    {
      this.error = "";
      if (this.mode === 'login'){
        this.handleLogin(); }
      else if (this.mode === 'signup'){
        this.handleSignUp();
    }
  },
    handleLogin() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          alert('User signed in: ' + userCredential.user.email);
          console.log('User signed in: ', userCredential.user);
        })
        .catch((error) => {
          this.error = "Invalid name and/or password";
          console.log(error.message);
        });
    },
    handleSignUp()
    {
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          alert('User signed up: ' + userCredential.user.email);
          console.log('User signed up:', userCredential.user);
        })
        .catch((error) => {
          this.error = "Invalid user";
          console.log(error.message);
        });
    }
  },
};
</script>
