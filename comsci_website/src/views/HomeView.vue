<template>
  <MinimalHeaderComponent></MinimalHeaderComponent>
  <MinimalApplyingComponent></MinimalApplyingComponent>
  <MinimalStrengthComponent></MinimalStrengthComponent>
  <MinimalLearnComponent></MinimalLearnComponent>
  <MinimalJobsComponent></MinimalJobsComponent>
  <MinimalAlumniComponent></MinimalAlumniComponent>
  <!-- <MinimalContactsComponent></MinimalContactsComponent> -->
  <MinimalAboutComponent></MinimalAboutComponent>
</template>

<script>
// @ is an alias to /src
import { defineComponent } from 'vue';

import MinimalHeaderComponent from '@/components/MinimalComponents/MinimalHeaderComponent.vue';
import MinimalJobsComponent from '@/components/MinimalComponents/MinimalJobsComponent.vue';
import MinimalAlumniComponent from '@/components/MinimalComponents/MinimalAlumniComponent.vue';
import MinimalStrengthComponent from '@/components/MinimalComponents/MinimalStrengthComponent.vue';
import MinimalLearnComponent from '@/components/MinimalComponents/MinimalLearnComponent.vue';
import MinimalAboutComponent from '@/components/MinimalComponents/MinimalAboutComponent.vue';
// import MinimalContactsComponent from '@/components/MinimalComponents/MinimalContactsComponent.vue';
import MinimalApplyingComponent from '@/components/MinimalComponents/MinimalApplyingComponent.vue';


export default defineComponent({
  name: 'HomeView',
  components: {
    MinimalHeaderComponent,
    MinimalJobsComponent,
    MinimalAlumniComponent,
    MinimalStrengthComponent,
    MinimalLearnComponent,
    MinimalAboutComponent,
    // MinimalContactsComponent,
    MinimalApplyingComponent,
  }
});
</script>

