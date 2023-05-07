<template>
  <MinimalHeaderComponent />
  <MinimalAlumniComponent />
  <!-- <MinimalJobsComponent /> -->
  <MinimalAboutComponent />
</template>

<script>
// @ is an alias to /src
import { defineComponent } from 'vue';

import MinimalHeaderComponent from '@/components/MinimalComponents/MinimalHeaderComponent.vue';
import MinimalAboutComponent from '@/components/MinimalComponents/MinimalAboutComponent.vue';
// import MinimalJobsComponent from '@/components/MinimalComponents/MinimalJobsComponent.vue';
import MinimalAlumniComponent from '@/components/MinimalComponents/MinimalAlumniComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    MinimalHeaderComponent,
    MinimalAboutComponent,
    // MinimalJobsComponent,
    MinimalAlumniComponent,
    
  }
});
</script>
