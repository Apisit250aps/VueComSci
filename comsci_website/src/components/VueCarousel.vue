<template>
    <Carousel :items-to-show="2" :wrap-around="true">
        <Slide v-for="(pro, i) in programs" :key="i">
            <img  :src="pro.imgsrc" alt="err" srcset="">
            
        </Slide>

        <template #addons>
            <Navigation />
        </template>
    </Carousel>
    <!-- <img src="../assets/img/program/python.png" alt="" srcset=""> -->
</template>
  
<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    name: 'VueCarousel',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data() {
        return {
            programs: [
                {
                    imgsrc:'src/assets/img/program/python.png'
                    
                },


            ]
        }
    }
});
</script>