<template lang="">
<!-- // TODO : Create a reusable component for form patient create and update -->
   <div class="container mt-4">
      <main>
        <div>
        <div class="col-md-7 col-lg-8">
            <h4 class="mb-3">Create Patient</h4>
            <form @submit.prevent="onSubmit" class="needs-validation" novalidate>
            <div class="row g-3">
                <div class="col-sm-6">
                    <label for="firstName" class="form-label">First name</label>
                    <input v-model="form.firstname" type="text" class="form-control" required>
                </div>

                <div class="col-sm-6">
                    <label for="lastName" class="form-label">Last name</label>
                    <input v-model="form.lastname" type="text" class="form-control" required>
                </div>

                <div class="col-12">
                    <label for="address" class="form-label">Full Address</label>
                    <div class="input-group has-validation">
                        <input v-model="form.address" type="text" class="form-control" required>
                    </div>
                </div>

                <div class="col-md-6">
                    <p class="mb-3">Gender</p>
                    <div class="row g-3">
                        <div class="col-md-5">
                            <div class="form-check">
                                <input v-model="form.gender" value="male" type="radio" class="form-check-input"  required>
                                <label class="form-check-label" for="credit">Male</label>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="form-check">
                                <input v-model="form.gender" value="female" type="radio" class="form-check-input" required>
                                <label class="form-check-label" for="debit">Female</label>
                            </div>
                        </div>
                    </div>    
                </div>

                <div class="col-md-6">
                    <label for="country" class="form-label">Birthdate</label>
                    <input type="date" v-model="form.birthdate" class="form-control" >
                </div>

                <div class="col-sm-6">
                    <label for="temperature" class="form-label">Temperature</label>
                    <input type="text"  v-model="form.temperature" class="form-control" id="temperature" required>
                </div> 
                <div class="col-sm-6" style="display:flex;">
                   <button class="w-100 btn btn-primary btn-lg" type="submit">Save</button>
                </div> 
             </div>
            </form>
        </div>
        </div>
    </main>
</div>
</template>
<script lang="ts">
import {reactive,ref} from "vue"
import axios from 'axios'
import {useRouter} from 'vue-router'

export default {
    name : "PatientCreate",
    setup(){
        const form = reactive({ //TODO : create a store for the patient
            firstname:'',
            lastname:'',
            birthdate:'',
            gender:'',
            address:'',
            temperature:''
        })
       
       const isLoading = ref(false);
       const router = useRouter();
     
     const onSubmit = async () => {
          isLoading.value = true;

            if(form.firstname.trim() == ''){
                isLoading.value = false
                return alert('Firstname is Required');
            }
            if(form.lastname.trim() == ''){
                isLoading.value = false
                return alert('Lastname is Required');
            }
            if(form.birthdate.trim() == ''){
                isLoading.value = false
                return alert('Birthdate is Required');
            }
            if(form.gender.trim() == ''){
                isLoading.value = false
                return alert('Gender is Required');
            }
            if(form.address.trim() == ''){
                isLoading.value = false
                return alert('Address is Required');
            }
            if(form.temperature.trim() == ''){
                isLoading.value = false
                return alert('Temperature is Required');
            }
            const res = await axios.post('patient', {
                  firstname: form.firstname,
                  lastname: form.lastname,
                  birthdate: form.birthdate,
                  gender: form.gender,
                  address: form.address,
                  temperature: form.temperature
              })
            
            if(res.status === 201) {
              isLoading.value = false;
              await router.push('/');
            }
     }
     return {
         form,
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