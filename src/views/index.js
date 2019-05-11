import Form from './Form';
import Table from './Table';
import Navbar from './Navbar';

export default {
    install(Vue){
        Vue.component('c-form',Form);
        Vue.component('c-table',Table);
        Vue.component('c-navbar',Navbar)
    }
};

export {
    Form,
    Table,
    Navbar
}
