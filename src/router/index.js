import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import View from '../components/View-G'
import Login from '../components/Login.vue'
import Sign from '../components/Signup.vue'
import manager from '../components/manager.vue'
import button from '../components/button.vue'

Vue.use(Router)

const routes = [
    {
        path:'/home',
        name: 'Inicio',
        component: Home,
        beforeEnter: (to, from, next) => {
            try{
                if(localStorage.getItem('token').length > 0){
                    next();
                }
            }catch{
                next("/");
            }
        }
    },
    {
        path:'/button',
        name: 'Button',
        component: button,
        beforeEnter: (to, from, next) => {
            try{
                if(localStorage.getItem('token').length > 0){
                    next();
                }
            }catch{
                next("/");
            }
        }
    },
    {
        path:'/view-g',
        name: 'Gráficas',
        component: View,
        beforeEnter: (to, from, next) => {
            try{
                if(localStorage.getItem('token').length > 0){
                    next();
                }
            }catch{
                next("/");
            }
        }
    },
    {
        path:'/',
        name: 'Login',
        component: Login,
        beforeEnter: (to, from, next) => {
            try{
                if(localStorage.getItem('token').length > 0){
                    next("/home");
                }
            }catch{
                next();
            }
        }
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Sign
    },
    {
        path:'/manager',
        name: 'Manager',
        component: manager,
        beforeEnter: (to, from, next) => {
            try{
                if(localStorage.getItem('token').length > 0){
                    next();
                }
            }catch{
                next("/");
            }
        }
    },
]

export const router = new Router({
    mode: 'hash',
    routes,
    scrollBehavior(){
        return{x : 0, y : 0}
    }
})