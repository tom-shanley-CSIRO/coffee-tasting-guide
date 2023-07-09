import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// Initialize Firebase
import { initializeApp } from 'firebase/app'
// TODO Add SDK's for firebase development

// Firebase config
const firebaseConfig = {
    apiKey: 'AIzaSyCQxwAG60ZKQlRSL9XZuKxmdzSiOPLnKfM',
    authDomain: 'coffee-log-c1d72.firebaseapp.com',
    projectId: 'coffee-log-c1d72',
    storageBucket: 'coffee-log-c1d72.appspot.com',
    messagingSenderId: '460015836996',
    appId: '1:460015836996:web:186f8bbe35b4d248258111'
}

initializeApp(firebaseConfig)

const app = createApp(App)

app.use(router)
app.use(ElementPlus)

app.mount('#app')
