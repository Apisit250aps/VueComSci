<template>
  <MinimalHeaderComponent />
  <MinimalAboutComponent />
</template>

<script>
// @ is an alias to /src
import { defineComponent } from 'vue';

import MinimalHeaderComponent from '@/components/MinimalComponents/MinimalHeaderComponent.vue';
import MinimalAboutComponent from '@/components/MinimalComponents/MinimalAboutComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    MinimalHeaderComponent,
    MinimalAboutComponent,
    
  }
});
</script>
