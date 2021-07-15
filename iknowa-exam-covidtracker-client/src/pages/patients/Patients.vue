<template lang="">
      <div class="pt-3 pb-2 mb-3 border-bottom">
          <!-- TODO : create a reusable button component -->
          <router-link to="/patient/create" class="btn btn-sm btn-primary">Add</router-link>  
      </div>
      <div class="table-responsive">
        <table class="table table-sm">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Firstname</th>
                <th scope="col">Lastname</th>
                <th scope="col">Address</th>
                <th scope="col">Gender</th>
                <th scope="col">Birthdate</th> <!-- // TODO : Apply moment js to format date   -->
                <th scope="col">Temperature</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody v-if="patients">
                <tr v-for="(patient,index) in patients" :key="patient.id" :class="{'highlight': (patient.temperature > 40)}">
                    <td>{{index+1}}</td>
                    <td>{{patient.firstname}}</td>
                    <td>{{patient.lastname}}</td>
                    <td>{{patient.address}}</td>
                    <td>{{patient.gender}}</td>
                    <td>{{patient.birthdate}}</td>
                    <td>{{patient.temperature}}</td>
                    <td>
                        <div class="btn-group m-1">
                            <button class="btn btn-sm btn-danger" :disabled="patient.temperature >= 41"  @click="deletePatient(patient.id)">Delete</button>
                        </div>
                        
                        <div class="btn-group m-1">
                            <router-link :to="`/patient/${patient.id}/edit`" class="btn btn-sm btn-warning">Update</router-link>
                        </div>
                    </td>
                </tr>
            </tbody>
            <h4 v-if="!patients"> No records yet</h4>
        </table>
      </div>
</template>

<script lang="ts">
import {onMounted , ref} from 'vue';
import axios from 'axios';
import {Patient} from '../../models/patient';

export default {
    name: "Patients",
    setup(){
      const patients = ref([]);
    
       onMounted(async () => {
           const {data}= await axios.get('patient');

           patients.value = data;

           console.log(patients.value)
       });

       const deletePatient = async (id : string) => {
           if(confirm('Are you sure?')) {
               await axios.delete(`patient/${id}`)

               patients.value = patients.value.filter((patient: Patient) => patient.id !== id);
           }
       }
 
      return {
          patients,
          deletePatient
      }
    }
}
</script>

<style scoped>
.highlight {
  background:cyan;
}

</style>