<template>
    <div class="butt">
        <button  id="bt" @click.prevent="changestate()" type="button" class="btn btn-outline-success btn-rounded waves-effect">{{ state }}</button>
    </div>
</template>
<script>
/* eslint-disable */ 
import axios from "axios";
export default {
    data(){
        return{
            state : "",
            url : "https://ac-ctrl.herokuapp.com/ac"
        }
        
    },
    mounted(){
        this.setState();
    },
    methods: {
        changestate(){
            if(this.state === "OFF"){
                axios.put(this.url+"up/G81").then(response=> {
                    this.state = "ON"
                }).catch(error=> {
                    console.log(error);
                })
            }else{
                axios.put(this.url+"up/G81").then(response=> {
                    this.state = "OFF"
                }).catch(error=> {
                    console.log(error);
                })
            }
        },
        setState(){
            axios.get("https://ac-ctrl.herokuapp.com/ac").then(response =>{
                let r = response.data
                for(let i = 0; i < r.length; i++){
                    if(r[i].id_ac ==="G81"){
                        if(r[i].state === 1){
                            this.state = "ON"
                        }else{
                            this.state = "OFF"
                        }
                    }
                }
            }).catch(error =>{
                console.log(error)
            })
        }
    }
}
</script>
<style >
    .butt{
        align-content: center;
        padding-top: 150px;
        padding-left: 100px;http://0.0.0.0:5000
        width: 200px;
    }
    #bt{
        width: 200px;
        height: 200px;
    }

</style>