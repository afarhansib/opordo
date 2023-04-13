import { createApp } from 'vue';
import { createPinia } from 'pinia'
// import VueApexCharts from "vue3-apexcharts";
import App from './App.vue';
import './index.css';

const pinia = createPinia()

const app = createApp(App);
app.use(pinia)
// app.use(VueApexCharts);
app.mount('#app');