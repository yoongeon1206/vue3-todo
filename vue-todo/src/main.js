import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import { createStore } from 'vuex'

const storage = createStore(store)
createApp(App).use(storage).mount('#app')
// const app = createApp(App)
// app.use(store)
// app.mount('#app')
