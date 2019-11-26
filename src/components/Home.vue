<template>
    <nav>
    <form @submit.prevent="consumirAPI">
      <div class="form-group">
      </div>
    </form>
    <table class="table table-striped">
      <thead >
        <tr>
          <th><i>ID AC</i></th>
          <th><i>Temperatura</i></th>
          <th><i>Estado</i></th>
          <th><i>Sensor de movimiento</i></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="regs in  reg" :key="regs.id_ac">
          <td>G81</td>
          <td>{{ regs.temp }} °C</td>
          <td>{{ regs.state }}</td>
          <td>{{regs.motion}}</td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-info my-4 btn-block" @click.prevent="manager()" v-if="show == true">Manager AC's</button>
</nav>
</template>
<script>
import axios from "axios";
export default {
  name: "app",
 data () {
   return {
     reg : [],
     url : "http://0.0.0.0:5000/regforhour", 
     show : false
   }
 },
created() {
  this.consumirAPI();
},
methods: {
    consumirAPI () {
      axios.get(this.url).then(response => {
        console.log("passs")
        this.reg = response.data;
        console.log(this.reg);
        for(var r in this.reg){
          console.log(this.reg[r].motion)
          if(this.reg[r].motion === 1){
            this.reg[r].motion = "detectado";
          }
          if(this.reg[r].state === 1){
            this.reg[r].state = "encendido"
          }
        }
        console.log("yes");
        this.comprobar()
      }).catch(error => {
        console.log(error)
      });
    },
    comprobar(){
      console.log(localStorage.getItem("is_admin"))
      if(localStorage.getItem("is_admin") === "true"){
        this.show = !this.show
      }
    },
    manager(){
      this.$router.push("/manager")
    }

    
}
};
</script>
<style>
  .table table-striped{
    text-align: center
  };
</style>