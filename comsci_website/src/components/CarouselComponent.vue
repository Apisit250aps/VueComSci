<template>
    <div id="content">
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../assets/img/contents/luca-bravo-XJXWbfSo2f0-unsplash.jpg" class="d-block img-fluid w-100"
                        alt="...">
                    <div class="carousel-caption  bg-opacity-50 bg-dark rounded-4">
                        <h5 class="display-2">เส้นทางสู่อาชีพโปรแกรมเมอร์</h5>
                        <p class="display-6 d-none d-md-block">พัฒนาระบบเทคโนโลยีเพื่ออนาคต</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/img/contents/alex-knight-2EJCSULRwC8-unsplash.jpg" class="d-block w-100 img-fluid"
                        alt="...">
                    <div class="carousel-caption  bg-opacity-50 bg-dark rounded-4">
                        <h5 class="display-2">ก้าวทันทุกเทคโนโลยี</h5>
                        <p class="display-6 d-none d-md-block">ไม่หลุดกระแสที่เปลี่ยนแปลง</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/img/contents/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg"
                        class="d-block img-fluid w-100" alt="...">
                    <div class="carousel-caption  bg-opacity-50 bg-dark rounded-4">
                        <h5 class="display-2">ทำงานสะบาย รายได้สูง</h5>
                        <p class="display-6 d-none d-md-block">ไม่มีทางตกงานเพราะ สายงานที่มีความต้องการสูงในปัจบัน</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/img/contents/marvin-meyer-SYTO3xs06fU-unsplash.jpg"
                        class="d-block img-fluid w-100" alt="...">
                    <div class="carousel-caption  bg-opacity-50 bg-dark rounded-4">
                        <h5 class="display-2">มาร่วมเป็นส่วนหนึ่งกับเรา</h5>
                        <p class="display-6 d-none d-md-block">ยินดีต้อนรับสำหรับผู้มีความสนใจ ในด้านการพัฒนาโปรแกรมเพื่ออนาคต</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: "CarouselComponent",
}
</script>

<style> .carousel-item>img {
     /* align-items: center; */
 }
</style>
