import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Patients from "@/pages/patients/Patients.vue";
import Register from "@/pages/Register.vue";
import Wrapper from '@/pages/Wrapper.vue';
import Login from '@/pages/Login.vue';
import PatientCreate from '@/pages/patients/PatientCreate.vue';
import PatientUpdate from '@/pages/patients/PatientUpdate.vue';

const routes: Array<RouteRecordRaw> = [
  {path: '/register' , component : Register},
  {path: '/login' , component : Login},
  {
    path: '',
    component: Wrapper,
    children: [
      {path: '' , name :"Patients",component : Patients},
      {path:'/patient/create', component : PatientCreate},
      {path:'/patient/:id/edit', component : PatientUpdate},
    ]
  }

  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
