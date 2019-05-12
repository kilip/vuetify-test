import Form from './Form';
import Table from './Table';
import Navbar from './Navbar';
import DatePicker from './DatePicker';

export default {
    install(Vue){
        Vue.component('c-form',Form);
        Vue.component('c-table',Table);
        Vue.component('c-navbar',Navbar);
        Vue.component('c-datepicker',DatePicker);
    }
};

export {
    Form,
    Table,
    Navbar,
    DatePicker
}

