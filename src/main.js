import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import {BootstrapVue3} from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import axios from 'axios';

const app = createApp(App)

app.use(axios)
.use(router)
.use(BootstrapVue3)

app.config.globalProperties.$axios = axios;
app.config.globalProperties.$serverUrl = '//localhost:8082';
app.mount('#app');