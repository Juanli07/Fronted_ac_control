<template>
    <!-- Default form register -->
    <form id="sign" class="text-center border border-light p-5" action="#!">

        <p class="h4 mb-4">Sign up</p>
        <b-alert
        show variant="danger"
        v-model="show"
         class="mt-3"
        dismissible>
        Correo en uso
        </b-alert>

        <div class="form-row mb-4">
            <div class="col">
                <!-- First name -->
                <input v-model="input.firstname" type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder="First name">
            </div>
            <div class="col">
                <!-- Last name -->
                <input v-model="input.lastname" type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Last name">
            </div>
        </div>

        <!-- E-mail -->
        <input v-model="input.email" type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-mail">

        <!-- Password -->
        <input v-model="input.password" type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock">
        <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
            At least 8 characters and 1 digit
        </small>


        <!-- Sign up button -->
        <button @click.prevent="singup()" class="btn btn-info my-4 btn-block" type="submit">Sign in</button>

        <!-- Terms of service -->
            <em>Sign up</em> you agree to our
            <a href="" target="_blank">terms of service</a>

    </form>
<!-- Default form register -->
</template>
<script>
import axios from "axios";
export default {
    name: 'Singup',
    data(){
        return{
            input: {
                firstname: '',
                lastname: '',
                email: '',
                password: ''
            },
            url: "http://0.0.0.0:5000/user",
            show:false
        }
    },
    methods: {
        singup(){
            axios.post(this.url, this.input).then((response) => {
                console.log(response);
                if(response == "duplicate"){
                    this.show = !this.show;
                }
                
            })
            .catch(function(error) {
                console.log(error);
            });
        },

    }
}
</script>
<style>
    #sign{
        width: 380px;
        height: 555px;
        border: 1px solid black;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 10px;
        padding: 20px;
    }
</style>