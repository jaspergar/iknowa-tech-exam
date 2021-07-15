<template lang="">
<!-- // TODO : Create a reusable component for form patient create and update -->
   <div class="container mt-4">
      <main>
        <div>
        <div class="col-md-7 col-lg-8">
            <h4 class="mb-3">Edit Patient</h4>
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
                    <input disabled type="text"  v-model="form.temperature" class="form-control" id="temperature">
                </div> 
                <div class="col-sm-6" style="display:flex;">
                   <button class="w-100 btn btn-primary btn-lg" type="submit">Update</button>
                </div> 
             </div>
            </form>
        </div>
        </div>
    </main>
</div>
</template>
<script lang="ts">
import {reactive,ref,onMounted} from "vue"
import axios from 'axios'
import {useRouter,useRoute} from 'vue-router'

export default {
    name : "PatientUpdate",
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
       const route = useRoute();

       onMounted(async () => {
           const response = await axios.get(`patient/${route.params.id}`);

           if(response.status === 200){
               form.firstname = response.data.firstname;
               form.lastname = response.data.lastname;
               form.address = response.data.address;
               form.temperature = response.data.temperature;
               form.birthdate = response.data.birthdate;
               form.gender = response.data.gender;
           }
       })
     
     const onSubmit = async () => {
          isLoading.value = true;
            const res = await axios.put(`patient?id=${route.params.id}`, {
                  firstname: form.firstname,
                  lastname: form.lastname,
                  birthdate: form.birthdate,
                  gender: form.gender,
                  address: form.address
              })
            
            if(res.status === 200) {
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