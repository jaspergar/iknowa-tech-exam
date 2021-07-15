<template lang="">
   <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Covid Tracker</a>
      <div class="navbar-nav">
        <div class="nav-item text-nowrap">
          <a class="nav-link px-3" href="#">Sign out</a>
        </div>
      </div>
    </header>
</template>
<script>
import { computed , ref} from 'vue';
import {useStore} from 'vuex'

export default {
    name: "HeaderNav",
    setup(){
      const name = ref('');
      const store = useStore();
 
      const user = computed(() => store.state.user);

      console.log(user);

      return {
        name
      }
    }
}
</script>