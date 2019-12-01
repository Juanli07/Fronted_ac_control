<template>
  <div id="app">
    <nav class="main-nav">
      <img tag="vista" src="./assets/Ac.svg">
      <Burger></Burger>
    </nav>
    <div class="sub">
      <label><b>Air conditioning control system</b></label>
    </div>

    <Sidebar>
      <ul class="sidebar-panel-nav">
        <li>
          <router-link tag="a" to="/home" class="scroll-suave">Home</router-link>
        </li>
        <li>
          <router-link tag="a" to="/view-g" class="scroll-suave">Consumption</router-link>
        </li>
        <li>
          <router-link tag="a" to="/button" class="scroll-suave">AC control</router-link>
        </li>
        <li>
          <a href="" @click.prevent="logOut()">Log out</a>
        </li>
      </ul>
    </Sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import Burger from "./components/Menu/Burger.vue";
import Sidebar from "./components/Menu/Sidebar.vue";

export default {
  name: "app",
  components: {
    Burger,
    Sidebar
  },
  methods:{
    logOut(){
      if(localStorage.token){
        localStorage.removeItem('token');
        localStorage.removeItem("is_admin")
        this.$router.push('/');
      }
    },
  }
}
</script>
<style>
html {
  height: 100%;
  overflow: hidden;
}

body {
  border: 0;
  margin: 0;
  padding: 0;
  font-family: "Lato";
  height: 100%;
  background: rgb(101, 31, 87);
  background: linear-gradient(
    45deg,
    rgb(172, 185, 175) 0%,
    rgba(95, 232, 160) 48%,
    rgb(215, 231, 227) 100%
  );
}
.sub{
  background: #36A6BF;
  text-align: center
}

.main-nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.8rem;
  background:#fff;
  height: 60px;
}

ul.sidebar-panel-nav {
  list-style-type: none;
}

ul.sidebar-panel-nav > li > a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
}
</style>
