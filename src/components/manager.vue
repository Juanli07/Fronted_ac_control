<template>
<nav @submit.prevent="consumirAPI()">
    <button @click.prevent="showform()" class="btn btn-info my-4 btn-block" >Add AC</button>
     <div v-if="show == true">
        <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">Id AC</span>
            </div>
            <input v-model="input.id_ac" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
        </div>
        <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">Temperature</span>
            </div>
            <input v-model="input.temp" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
        </div>
        <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">status</span>
            </div>
            <input v-model="input.state" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
        </div>
        <div id="but">
            <button @click.prevent="showform()" type="button" class="btn btn-danger">Abort</button>
            <button @click.prevent="add()" class="btn btn-success" >OK</button>
        </div>
    </div>
<table class="table table-striped">
    
      <thead >
        <tr>
          <th><i>ID AC</i></th>
          <th><i>Temperatura</i></th>
          <th><i>Estado</i></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="regs in  reg" :key="regs.id_ac">
          <td>{{ regs.id_ac }}</td>
          <td>{{ regs.temp }} °C</td>
          <td>{{ regs.state }}</td>
          <td><button @click.prevent="del(regs)" type="button" class="btn btn-danger">Delete</button></td>
        </tr>
      </tbody>
    </table>
   
</nav>
</template>
<script>
    import axios from "axios";

export default {
    data(){
        return{
            input : {
                id_ac : "",
                temp : "25",
                state: "0"
            },
            reg : [],
            url : "http://0.0.0.0:5000/ac",
            show : false
        }
    },
    created(){
        this.consumirAPI();
    },
    methods :{
        consumirAPI () {
            axios.get(this.url).then(response => {
                console.log("passs")
                this.reg = response.data;
                console.log(this.reg);
                
                console.log("yes");
            }).catch(error => {
                console.log(error)
            });
        },
        del(n){
            axios.delete(this.url + "del/" + n.id_ac).then(function(response) {
                console.log(response);
                alert("AC deleted");
                this.consumirAPI(() =>({}))
            })
            .catch(function(error) {
                console.log(error);
            });
            
        },
        showform(){
            this.show = !this.show
        },
        add(){
            axios.post(this.url, this.input).then((response) => {
                console.log(response);
                alert("AC added")
                this.showform();
                this.consumirAPI()
                
            })
            .catch(function(error) {
                console.log(error);
            });
        }
            
    }
}
</script>
<style>
    #but{
        align-items: center;
    }
</style>