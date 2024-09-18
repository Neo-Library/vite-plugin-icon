import { createApp } from 'vue'
import App from './app.vue'
import './styles/base.css'
// import { addCustomTab } from '@vue/devtools-api'
// test load vue devtools plugin
import {
    setupDevtoolsPlugin,
    TimelineEvent,
    App as DevtoolsApp,
} from '@vue/devtools-api'
// console.log(addCustomTab)


setupDevtoolsPlugin({
    id: 'dd.ff.devtools'
}, () => { })


const bootstrap = () => {
    const app = createApp(App)
    app.mount('#app')
}

bootstrap()