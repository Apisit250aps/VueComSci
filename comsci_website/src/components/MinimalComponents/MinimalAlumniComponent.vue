<template>
    <div class="container-fluid p-1 pt-2 pt-md-0 p-md-0 pt-md-5 p-lg-3 pt-lg-5">
        <h2>รุ่นพี่ศิษย์เก่า สาขาวิทยาการคอมพิวเตอร์</h2>
        <hr>
        <Flicking ref="flicking2" :options="{ align: 'center', circular: true }" :plugins="plugins">
            <div class="alumni">
                <img src="@/assets/img/Alumni/alumni(1).jpg" alt="" srcset="" class="img-fluid">
            </div>
            <div class="alumni">
                <img src="@/assets/img/Alumni/alumni(2).jpg" alt="" srcset="" class="img-fluid">
            </div>
            <div class="alumni">
                <img src="@/assets/img/Alumni/alumni(3).jpg" alt="" srcset="" class="img-fluid">
            </div>
            <div class="alumni">
                <img src="@/assets/img/Alumni/alumni(4).jpg" alt="" srcset="" class="img-fluid">
            </div>
            <div class="alumni">
                <img src="@/assets/img/Alumni/alumni(5).jpg" alt="" srcset="" class="img-fluid">
            </div>
            <div class="alumni">
                <img src="@/assets/img/Alumni/alumni(6).jpg" alt="" srcset="" class="img-fluid">
            </div>
            <div class="alumni">
                <img src="@/assets/img/Alumni/alumni(7).jpg" alt="" srcset="" class="img-fluid">
            </div>
            <div class="alumni">
                <img src="@/assets/img/Alumni/alumni(8).jpg" alt="" srcset="" class="img-fluid">
            </div>
            <div class="alumni">
                <img src="@/assets/img/Alumni/alumni(9).jpg" alt="" srcset="" class="img-fluid">
            </div>
        </Flicking>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import Flicking from "@egjs/vue3-flicking";


export default defineComponent({
    name: "minimalAlumni",
    components: {
        Flicking: Flicking
    },
    data() {
        return {


        }
    },

});

</script>
