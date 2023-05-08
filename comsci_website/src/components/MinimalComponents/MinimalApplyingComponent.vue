<template>
    <div class="container-fluid p-1 pt-5 pt-md-0 p-md-0 pt-md-5 p-lg-3 pt-lg-5">
        <h1>เปิดรับสมัครนักศึกษา ในระดับปริญญาตรี</h1>
        <hr>
        <div class="row row-cols-1 m-auto row-cols-md-2 g-3">
            <div class="col row m-auto">
                <div class="col">
                    <h3 class="fw-semibold">#คุณสมบัติผู้สมัคร</h3>
                    <div class="m-auto row row-cols-1 gx-5">
                        <div class="col">
                            <ul style="list-style: none;">
                                <li>
                                    <b>จบการศึกษาในระดับ</b>
                                    <ul>
                                        <li>มัธยมศึกษาตอนปลาย</li>
                                        <li>ปวช. ปวส.</li>
                                        <li>ปริญญาตรีทุกสาขา</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <h3 class=" opacity-0 d-none d-md-block"><span>#</span></h3>
                    <div class="m-auto row row-cols-1 gx-5">
                        <div class="col">
                            <ul style="list-style: none;">
                                <li>
                                    <b>สอบถามข้อมูลเพิ่มเติม</b>
                                    <ul>
                                        <li>Facebook</li>
                                        <li>Line</li>
                                        
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col row m-auto g-3 row-cols-2">
                <div class="col p-2">
                    <img src="@/assets/img/qrcode/code(2).png" alt="" class="img-fluid rounded-2 border shadow m-auto">
                </div>
                <div class="col p-2">
                    <img src="@/assets/img/qrcode/code(1).png" alt="" class="img-fluid rounded-2 border shadow m-auto">
                </div>


            </div>
        </div>
    </div>
</template>
  
<script>
import { defineComponent } from 'vue'

export default defineComponent(
    {
        name: "minimalApplying"
    }
);

</script>