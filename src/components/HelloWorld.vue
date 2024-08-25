<template>
  <div class="w-100 d-flex flex-row align-items-center justify-content-center h-100">
    <img src="/src/assets/img/university/sskrulogolg.png" alt=""  srcset="" class="bg-university img-fluid m-auto">
  </div>
  <MinimalHeaderComponent></MinimalHeaderComponent>
  <MinimalApplyingComponent></MinimalApplyingComponent>
  <hr>
  <div class="py-3 d-flex flex-row justify-content-center">
    <a href="/about" style="text-decoration:underline;">เกี่ยวกับหลักสูตร >>></a>
  </div>
  <MinimalStrengthComponent></MinimalStrengthComponent>
  <MinimalLearnComponent></MinimalLearnComponent>
  <MinimalJobsComponent></MinimalJobsComponent>
  <MinimalAlumniComponent></MinimalAlumniComponent>
  <!-- <MinimalContactsComponent></MinimalContactsComponent> -->
  <!-- <MinimalAboutComponent></MinimalAboutComponent> -->
</template>

<script setup>

import MinimalHeaderComponent from '../components/MinimalComponents/MinimalHeaderComponent.vue';
import MinimalJobsComponent from '../components/MinimalComponents/MinimalJobsComponent.vue';
import MinimalAlumniComponent from '../components/MinimalComponents/MinimalAlumniComponent.vue';
import MinimalStrengthComponent from '../components/MinimalComponents/MinimalStrengthComponent.vue';
import MinimalLearnComponent from '../components/MinimalComponents/MinimalLearnComponent.vue';
import MinimalAboutComponent from '../components/MinimalComponents/MinimalAboutComponent.vue';
import MinimalContactsComponent from '../components/MinimalComponents/MinimalContactsComponent.vue';
import MinimalApplyingComponent from '../components/MinimalComponents/MinimalApplyingComponent.vue';

</script>

