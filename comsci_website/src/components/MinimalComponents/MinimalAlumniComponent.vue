<template>
    <div class="container-fluid p-1 pt-2 pt-md-0 p-md-0 pt-md-5 p-lg-3 pt-lg-5">
        <h2>รุ่นพี่ศิษย์เก่า สาขาวิทยาการคอมพิวเตอร์</h2>
        <hr>
        <Flicking ref="flicking2" :options="options" :plugins="plugins" class="p-3">
            <div class="alumni panel">
                <img src="@/assets/img/Alumni/alumni(1).jpg" alt="" srcset="" class="img-fluid">
            </div>
            <div class="alumni panel">
                <img src="@/assets/img/Alumni/alumni(2).jpg" alt="" srcset="" class="img-fluid">
            </div>
            <div class="alumni panel">
                <img src="@/assets/img/Alumni/alumni(3).jpg" alt="" srcset="" class="img-fluid">
            </div>
            <div class="alumni panel">
                <img src="@/assets/img/Alumni/alumni(4).jpg" alt="" srcset="" class="img-fluid">
            </div>
            <div class="alumni panel">
                <img src="@/assets/img/Alumni/alumni(5).jpg" alt="" srcset="" class="img-fluid">
            </div>
            <div class="alumni panel">
                <img src="@/assets/img/Alumni/alumni(6).jpg" alt="" srcset="" class="img-fluid">
            </div>
            <div class="alumni panel">
                <img src="@/assets/img/Alumni/alumni(7).jpg" alt="" srcset="" class="img-fluid">
            </div>
            <div class="alumni panel">
                <img src="@/assets/img/Alumni/alumni(8).jpg" alt="" srcset="" class="img-fluid">
            </div>
            <div class="alumni panel">
                <img src="@/assets/img/Alumni/alumni(9).jpg" alt="" srcset="" class="img-fluid">
            </div>
            <template #viewport>
                <div class="flicking-pagination"></div>
            </template>

        </Flicking>
        <div class="flicking-pagination"></div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import Flicking from "@egjs/vue3-flicking";

// import { AutoPlay } from "@egjs/flicking-plugins";

import { Perspective, AutoPlay, Pagination } from "@egjs/flicking-plugins";



export default defineComponent({
    name: "minimalAlumni",
    components: {
        Flicking: Flicking
    },
    data() {
        return {
            options: {
                align: 'center',
                circular: true,
                // inputType: ["touch", "mouse"],
                // moveType: ["strict", { count: 1 }]

            },

            plugins: [
                new Perspective({ rotate: 0.5 }),
                new AutoPlay({ duration: 2500, direction: "NEXT", stopOnHover: true }),
                new Pagination({ type: 'scroll' })

            ]




        }
    },

});

</script>
