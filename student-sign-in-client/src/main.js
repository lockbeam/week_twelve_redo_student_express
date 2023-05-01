import { createApp } from 'vue'
import App from './App.vue'
import StudentService from '@/services/StudentServices' // object composed of getAllStudents and addStudent

let app = createApp(App)

app.config.globalProperties.$student_api = StudentService

app.mount('#app')
