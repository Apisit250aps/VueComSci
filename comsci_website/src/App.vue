<template>
  <NavHeader />
  
  <CarouselContent />
  <ContentComponent />
  
  
</template>

<script>

import NavHeader from '@/components/NavHeader.vue';
import CarouselContent from '@/components/CarouselComponent.vue'
import ContentComponent from '@/components/ContentComponent.vue';


export default {
  name: 'App',
  components: {
    NavHeader,
    CarouselContent,
    ContentComponent,

    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
