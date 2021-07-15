<template lang="">
   <main class="form-signin">
    <form @submit.prevent="onSubmit">
        
        <h1 class="h3 mb-3 fw-normal" style="text-align:center;">{{authenticated}}</h1>

        <div class="form-floating">
        <input v-model="form.username" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Username</label>
        </div>
        <div class="form-floating">
        <input v-model="form.password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Password</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    </form>
  </main>
</template>
<script>
import {reactive,computed } from 'vue'
import { useStore ,mapGetters } from 'vuex'
import {useRouter, userRouter} from 'vue-router'

export default {
    name : "Login",
    setup(){
       const form = reactive({
           username : '',
           password : '' 
       })
       const router = useRouter()
       const store = useStore()
       const signIn = (form) => store.dispatch('auth/signIn' , form)

        const onSubmit = () => {
             signIn(form).then( async () => {
              //  const token = computed(() => store.state.token);
              //  console.log(token);
              //  await store.dispatch('auth/attempt' , token)
               router.replace({
                 name: 'Patients'
               })
             })
        }
 
       return {
           form,
           onSubmit
       }
    },
    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user'
        }),
    }
}
</script>
<style scoped>
html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
  margin-top: 15rem;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>