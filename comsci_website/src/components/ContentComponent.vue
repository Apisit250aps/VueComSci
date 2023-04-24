<template>
    <!-- <div id="contentBox1" class="bg-gold pe-auto text-white">
        <div class="d-flex flex-column flex-md-row justify-content-md-between p-md-3 p-1">
            <img src="../assets/img/university/sskrulogolg.png" alt="" srcset="" class="img-fluid">
            <div class="text-md-end text-center">
                <h1>สาขาวิทยาการคอมพิวเตอร์</h1>
                <h2>มหาวิทยาลัยราชภัฏศรีสะเกษ</h2>
            </div>
        </div>
    </div> -->
    <div id="contentBox" class="bg-white">
        <h1 class="text-center display-3 my-1">เรียนกับเราดียังไง ?</h1>
        <div class="row">
            <div class="col-6 col-md-3 p-3" id="img-tags">
                <img src="../assets/img/frame/frame6.png" alt="" srcset="" class="img-fluid">
                <b class=" fs-6 d-block d-md-none my-2 my-md-4 ">สามารถกู้ กยศ. ได้ 100%</b>
                <b class=" fs-4 d-none d-md-block my-2 my-md-4 ">สามารถกู้ กยศ. ได้ 100%</b>
            </div>
            <div class="col-6 col-md-3 p-3" id="img-tags">
                <img src="../assets/img/frame/frame5.png" alt="" srcset="" class="img-fluid">
                <b class=" fs-6 d-block d-md-none my-2 my-md-4 ">ไกล้บ้าน ไกล้ครอบครัว</b>
                <b class=" fs-4 d-none d-md-block my-2 my-md-4 ">ไกล้บ้าน ไกล้ครอบครัว</b>
            </div>
            <div class="col-6 col-md-3 p-3" id="img-tags">
                <img src="../assets/img/frame/frame3.png" alt="" srcset="" class="img-fluid">
                <b class=" fs-6 d-block d-md-none my-2 my-md-4 ">ฐานเงินเดือนสูง</b>
                <b class=" fs-4 d-none d-md-block my-2 my-md-4 ">ฐานเงินเดือนสูง</b>
            </div>
            <div class="col-6 col-md-3 p-3" id="img-tags">
                <img src="../assets/img/frame/frame4.png" alt="" srcset="" class="img-fluid">
                <b class=" fs-6 d-block d-md-none my-2 my-md-4 ">ก้าวทันเทคโนโลยี</b>
                <b class=" fs-4 d-none d-md-block my-2 my-md-4 ">ก้าวทันเทคโนโลยี</b>
            </div>
        </div>
    </div>
    <div id="contentBox" class="bg-white">
        <h1 class="text-center display-3 my-1">สาขาเราเรียนอะไรบ้าง ?</h1>
        <div class="row">
            <div class="col-6 col-md-3 p-3" id="img-tags">
                <img src="../assets/img/program/programs.png" alt="" srcset="" class="img-fluid">
                <b class=" fs-6 d-block d-md-none my-0 my-md-4 ">ได้เขียนภาษาโปรแกรมคอมพิวเตอร์มากมาย</b>
                <b class=" fs-4 d-none d-md-block my-0 my-md-4 ">ได้เขียนภาษาโปรแกรมคอมพิวเตอร์มากมาย</b>
            </div>
            <div class="col-6 col-md-3 p-3" id="img-tags">
                <img src="../assets/img/program/web.png" alt="" srcset="" class="img-fluid">
                <b class=" fs-6 d-block d-md-none my-0 my-md-4 ">ได้พัฒนา และ ดูแลระบบ server</b>
                <b class=" fs-4 d-none d-md-block my-0 my-md-4 ">ได้พัฒนา และ ดูแลระบบ server</b>
            </div>
            <div class="col-6 col-md-3 p-3" id="img-tags">
                <img src="../assets/img/program/game.png" alt="" srcset="" class="img-fluid">
                <b class=" fs-6 d-block d-md-none my-0 my-md-4 ">สร้างเกม 2D, 3D ด้วย Unity</b>
                <b class=" fs-4 d-none d-md-block my-0 my-md-4 ">สร้างเกม 2D, 3D ด้วย Unity</b>
            </div>
            <div class="col-6 col-md-3 p-3" id="img-tags">
                <img src="../assets/img/program/ai.png" alt="" srcset="" class="img-fluid">
                <b class=" fs-6 d-block d-md-none my-0 my-md-4 ">เรียนรู้การพัฒนาระบบ AI เพื่ออนาคต</b>
                <b class=" fs-4 d-none d-md-block my-0 my-md-4 ">เรียนรู้การพัฒนาระบบ AI เพื่ออนาคต</b>
            </div>
        </div>

    </div>
</template>

<!-- <VueCarousel /> -->
<script>
import { defineComponent } from 'vue'
// import VueCarousel from '@/components/VueCarousel.vue'
export default defineComponent({
    name: "ContentComponent",
    components: {
        // VueCarousel,


    },
    data() {
        return {

        }
    }
});

</script>
