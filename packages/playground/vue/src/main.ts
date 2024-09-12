import { createApp } from 'vue'
import App from './app.vue'
import './styles/base.css'
import { loadDevtools } from '@neo/vite-plugin-vue-icon'
const bootstrap = () => {
    const app = createApp(App)
    app.mount('#app')
    loadDevtools(app)
}

bootstrap()