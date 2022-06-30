import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
//tilewindのcss
import './index.css'
import { Auth0Plugin } from './auth/index.js';



const app = createApp(App).use(Auth0Plugin).use(router).use(VueAxios, axios);

app.mount('#app');
