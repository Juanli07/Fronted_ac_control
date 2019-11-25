<template>
    <nav>
    <form @submit.prevent="consumirAPI">
      <div class="form-group">
        <!-- <div class="input-group">
          <input v-model="title" class="form-control">
          <button @click="consumirAPI"><b><i>OK</i></b></button>
        </div> -->
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
          <td>{{ regs.temp }}</td>
          <td>{{ regs.state }}</td>
          <td>{{regs.motion}}</td>
        </tr>
      </tbody>
    </table>
</nav>
</template>
<script>
import axios from "axios";
export default {
  name: "app",
 data () {
   return {
     reg : [],
     url : "http://0.0.0.0:5000/regforhour"
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
        console.log("yes");
      }).catch(error => {
        console.log(error)
      });
    }
    
}
};
</script>
<style>
  .table table-striped{
    text-align: center
  };
</style>