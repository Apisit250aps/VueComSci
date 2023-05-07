<template>
    <div class="container-fluid p-1 pt-2 pt-md-0 p-md-0 pt-md-5 p-lg-3 pt-lg-5">
        <h2>เกี่ยวกับเรา</h2>
        <hr>
        <div class="m-auto row gx-0 gx-sm-3 gy-3 row-cols-1 row-cols-sm-2 p-2 ">
            <a class="col" href="https://web.facebook.com/comsci.sskru" target="_blank">
                <div class="card" style="">
                    <img src="@/assets/img/university/page.png" class="img-fluid card-img-top" alt="...">

                    <div class="card-body">
                        <h5 class="card-title">Facebook</h5>
                        <h6 class="card-subtitle mb-2 text-muted ">วิทยาการคอมพิวเตอร์ มหาวิทยาลัยราชภัฏศรีสะเกษ</h6>
                        <p class="card-text">สามารถติดตามข้อมูลข่าวสาร ผลงานของนักศึกษา และ สาระดีๆจากพวกเรา</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
    name: "minimalAbout",
    components: {
        

    },

    data() {
        return {


        }
    }
});

</script>