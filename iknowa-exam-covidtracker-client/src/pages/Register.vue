<template lang="">
   <div class="container">
  <main>
    <div class="py-5 text-center">
      <h2>Signup</h2>
      <p class="lead">Hi! Signup and become an admin.</p>
    </div>

    <div class="custom-wrapper">
      <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Personal information</h4>
        <form @submit.prevent="onSubmit" class="needs-validation" novalidate>
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">First name</label>
              <input v-model="firstname" type="text" class="form-control" required>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Last name</label>
              <input v-model="lastname" type="text" class="form-control" required>
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div class="col-12">
              <label for="username" class="form-label">Username</label>
              <div class="input-group has-validation">
                <span class="input-group-text">@</span>
                <input v-model="username" type="text" class="form-control" required>
              <div class="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div class="col-md-6">
                <p class="mb-3">Sex</p>
                <div class="row g-3">
                    <div class="col-md-5">
                        <div class="form-check">
                            <input v-model="sex" value="male" type="radio" class="form-check-input"  required>
                            <label class="form-check-label" for="credit">Male</label>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="form-check">
                            <input v-model="sex" value="female" type="radio" class="form-check-input" required>
                            <label class="form-check-label" for="debit">Female</label>
                        </div>
                    </div>
                </div>    
            </div>

            <div class="col-md-6">
              <label for="country" class="form-label">Birthdate</label>
               <input type="date" v-model="birthdate" class="form-control" >
            </div>

             <div class="col-sm-6">
              <label for="password" class="form-label">Password</label>
              <input type="password"  v-model="password" class="form-control" id="password" required>
            </div>

            <div class="col-sm-6">
              <label for="passwordConfirm" class="form-label">Confirm Password</label>
              <input type="password" v-model="password_confirm" class="form-control" id="passwordConfirm" required>
            </div>    
          </div>

           
          <hr class="my-4">

          <button class="w-100 btn btn-primary btn-lg" type="submit">Signup</button>
        </form>
      </div>
    </div>
  </main>
</div>
</template>

<script lang="ts">
import {ref} from 'vue';
import axios from 'axios'
import {useRouter} from "vue-router"

export default {
    name: "Register",
    setup() {
        const firstname = ref('');
        const lastname = ref('');
        const birthdate = ref('');
        const sex = ref('');
        const username = ref('');
        const password = ref('');
        const password_confirm = ref('');

        const isLoading = ref(false);
        const router = useRouter();

        const onSubmit = async () => {  // TODO : Implement proper validation , and error design.
            isLoading.value = true;

            if(firstname.value.trim() == ''){
                isLoading.value = false
                return alert('Firstname is Required');
            }
            if(lastname.value.trim() == ''){
                isLoading.value = false
                return alert('Lastname is Required');
            }
            if(birthdate.value.trim() == ''){
                isLoading.value = false
                return alert('Birthdate is Required');
            }
            if(sex.value.trim() == ''){
                isLoading.value = false
                return alert('Sex is Required');
            }
            if(username.value.trim() == ''){
                isLoading.value = false
                return alert('Username is Required');
            }
            if(password.value.trim() == ''){
                isLoading.value = false
                return alert('Password is Required');
            }
            if(password.value !== password_confirm.value){
                isLoading.value = false
                return alert('Password do not match');
            }
            const res = await axios.post('users/register', {
                  firstname: firstname.value,
                  lastname: lastname.value,
                  birthdate: birthdate.value,
                  sex: sex.value,
                  username: username.value,
                  password: password.value,
                  password_confirm: password_confirm.value
              })
            
            if(res.status === 201) {
              await router.push('/login');
            }
        }

        return {
            firstname,
            lastname,
            birthdate,
            sex,
            username,
            password,
            password_confirm,
            onSubmit
        }
    }
}
</script>
<style scoped>
 .container {
  max-width: 960px;
}

.custom-wrapper{
    display:flex;
    justify-content:center;
}
</style>