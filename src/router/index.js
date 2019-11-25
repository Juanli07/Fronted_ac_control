import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import View from '../components/View-G'
import Login from '../components/Login.vue'
import Sign from '../components/Signup.vue'

Vue.use(Router)

const routes = [
    {
        path:'/home',
        name: 'Inicio',
        component: Home,
        beforeEnter: (to, from, next) => {
            if(localStorage.getItem('token').length > 0){
                next();
            }else{
                next('/');
            }
        }
    },
    {
        path:'/view-g',
        name: 'Gráficas',
        component: View,
        beforeEnter: (to, from, next) => {
            if(localStorage.getItem('token').length > 0){
                next();
            }
        }
    },
    {
        path:'/',
        name: 'Login',
        component: Login
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Sign
    }
]

export const router = new Router({
    mode: 'hash',
    routes,
    scrollBehavior(){
        return{x : 0, y : 0}
    }
})