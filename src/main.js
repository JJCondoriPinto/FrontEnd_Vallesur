import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Bar } from 'vue-chartjs'
import '@fortawesome/fontawesome-free/css/all.css';
await store.dispatch('getUser');

createApp(App).use(store).use(router).use(Bar).mount('#app');