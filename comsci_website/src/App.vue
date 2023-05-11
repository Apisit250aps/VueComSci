<template>
  <div class="w-100 d-flex flex-row align-items-center justify-content-center h-100">
    <img src="@/assets/img/university/sskrulogolg.png" alt=""  srcset="" class="bg-university img-fluid m-auto">
  </div>
  <router-view />
  <MinimalContactsComponent />
</template>

<script>

import MinimalContactsComponent from './components/MinimalComponents/MinimalContactsComponent.vue';

export default {
  name:"AppComponent",
  components:{
    MinimalContactsComponent
  }
}

</script>