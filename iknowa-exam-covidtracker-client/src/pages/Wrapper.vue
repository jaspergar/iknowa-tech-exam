<template lang="">
    <HeaderNav/>

    <div class="container-fluid">
      <div class="row">
        <SidebarNav/>

        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
           <router-view/>
        </main>
      </div>
    </div>

    <footer class="my-5 pt-5 text-muted text-center text-small">
      <p class="mb-1">&copy; 2021 Iknowa Tech Exam</p>
    </footer>
</template>

<script>
 import HeaderNav from "@/components/HeaderNav";
 import SidebarNav from "@/components/SidebarNav";
 import {computed, onMounted} from 'vue';
 import {useRouter} from "vue-router";
 import {useStore} from "vuex";
//  import axios from 'axios';

 export default {
   components:{
     HeaderNav,
     SidebarNav
     },
     setup(){
       const router = useRouter();
       const store = useStore();

       onMounted(async () => {
         try{
            const token = computed(() => store.getters.token);
            console.log(token);
            // await store.dispatch('auth/attempt' , token)
         }catch(e) {
           await router.push('/login');
         }
       })
     }
 }
</script>