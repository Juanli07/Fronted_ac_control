<template>
    <!-- Default form register -->
    <form id="sign" class="text-center border border-light p-5" action="#!">

        <p class="h4 mb-4">Sign up</p>

        <div class="form-row mb-4">
            <div class="col">
                <!-- First name -->
                <input type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder="First name">
            </div>
            <div class="col">
                <!-- Last name -->
                <input type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Last name">
            </div>
        </div>

        <!-- E-mail -->
        <input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-mail">

        <!-- Password -->
        <input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock">
        <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
            At least 8 characters and 1 digit
        </small>

        <!-- Phone number -->
        <input type="text" id="defaultRegisterPhonePassword" class="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock">
        <small id="defaultRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4">
            Optional - for two step authentication
        </small>


        <!-- Sign up button -->
        <button class="btn btn-info my-4 btn-block" type="submit" @clickprevent="singup()">Sign in</button>

        <!-- Terms of service -->
            <em>Sign up</em> you agree to our
            <a href="" target="_blank">terms of service</a>

    </form>
<!-- Default form register -->
</template>
<script>
export default {
    data(){

    },
    methods: {
        singup(){
            this.$route.push("/Home")
        }
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