<template>
  <form  id="login" class="text-center border border-light p-5" action="#!">

    <p class="h4 mb-4">Sign in</p>
    <b-alert
      show variant="danger"
      v-model="show"
      class="mt-3"
      dismissible>
      Error de usuario o contraseña
    </b-alert>
    

    <!-- Email -->
    <input type="email" id="defaultLoginFormEmail" name="username" v-model="input.username" class="form-control mb-4" placeholder="E-mail">

    <!-- Password -->
    <input type="password" id="defaultLoginFormPassword"  name="password" v-model="input.password" class="form-control mb-4" placeholder="Password">

    <div class="d-flex justify-content-around">
        <div>
            <!-- Remember me -->
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember">
                <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
            </div>
        </div>
        <div>
            <!-- Forgot password -->
            <a href="">Forgot password?</a>
        </div>
    </div>

    <!-- Sign in button -->
    <button class="btn btn-info my-4 btn-block" @click.prevent="login()"  type="submit">Sign in</button>

    <!-- Register -->
    <p>Not a member?
        <a href="" @click.prevent="goto()">Register</a>
    </p>

</form>
</template>
<script>
import axios from "axios";
export default {
  name: 'Login',
  data(){
    return {
      input: {
        username: '',
        password: '',
      },
      name: 'BootstrapVue',
      show: false,
      url: "http://0.0.0.0:5000/login"
    }
  },
  methods: {
    resetforms(){
      this.input.username = '';
      this.input.password = '';
    },
    login() {
      axios.post(this.url, this.input)
        .then((response) => { //usea arrow functions (funciones flecha)
        
        if(response.data.access_token){
          localStorage.setItem('token', response.data.access_token)
          console.log(localStorage.getItem('token'));
        }
        if(localStorage.getItem('token')){
          this.$router.push('/Home');
        }else{
          this.show = !this.show;
          this.resetforms()
        }
        })
      
    },
    goto() {
      this.$router.push('/signup');
    }
  },
}
</script>
<style scoped>
    #login {
        width: 380px;
        border: 4px solid black;
        margin: auto;
        margin-top: 70px;
        padding: 20px;
        background-color: #FFFFFF;
    }
</style>