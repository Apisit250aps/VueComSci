<template>
  <MinimalDescriptionComponent></MinimalDescriptionComponent>
  
</template>

<script>
import { defineComponent } from 'vue'
import MinimalDescriptionComponent from '@/components/MinimalComponents/MinimalDescriptionComponent.vue';


export default defineComponent(
  {
    name: "aboutView",
    components: {
      MinimalDescriptionComponent,
    }
  }
);





</script>