import Vue from 'vue'
import Router from 'vue-router'
import Form from '../components/FormTest';
import Table from '../components/Table';
import HelloWorld from "../components/HelloWorld";
Vue.use(Router);

const routes = [
    {
        name: 'Main',
        path: '/',
        redirect: '/dashboard'
    },
    {
        name: 'Homepage',
        path: '/dashboard',
        component: HelloWorld,
        meta: {
            icon: "dashboard",
            label: 'Home'
        }
    },
    {
        name: 'Forms',
        path: '/forms',
        component: Form,
        meta: {
            label: 'Form List',
            icon: 'dashboard'
        }
    },
    {
        name: 'Table',
        path: '/tables',
        component: Table,
        icon: 'assignment',
        meta: {
            label: 'Table Layout'
        }
    }
];

export default new Router({
    routes: [
        ...routes
    ]
});
