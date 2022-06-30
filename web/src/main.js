import { createApp } from 'vue'
import { createAuth0 } from '@auth0/auth0-vue';
import App from './App.vue'
import router from './router'
import './index.css'
import { domain, clientId } from "../auth_config.json";

const app = createApp(App);
app.use(
    createAuth0({
        domain: domain,
        client_id: clientId,
        redirect_uri: window.location.origin,
    }),
).use(router);

app.mount('#app');
// createApp(App).use(router).mount('#app')
