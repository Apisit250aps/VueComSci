<template>
    <div class="container-fluid p-1 pt-3 pt-md-0 p-md-0 pt-md-5 p-lg-3 pt-lg-5" id="about">
        <h2>เกี่ยวกับเรา</h2>
        <hr>
        <div class="m-auto row g-3 row-cols-1 row-cols-lg-2 p-2 ">
            
                <Flicking ref="flicking3" :options="{ circular: true, horizontal: true }" :plugins="plugins" class="col" style="width: 50%;">
                    <div class="weather-panel">
                        <img src="@/assets/img/contacts/contact1.png" class="img-fluid">
                    </div>
                    <div class="weather-panel">
                        <img src="@/assets/img/contacts/contact2.png" class="img-fluid">
                    </div>
                    <div class="weather-panel">
                        <img src="@/assets/img/contacts/contact3.png" class="img-fluid">
                    </div>
                    <div class="weather-panel">
                        <img src="@/assets/img/contacts/contact4.png" class="img-fluid">
                    </div>
                    
                </Flicking>
            <div class="col"></div>

        </div>
    </div>
</template>

<script>

import { defineComponent } from 'vue';

import Flicking from "@egjs/vue3-flicking";

import { AutoPlay } from "@egjs/flicking-plugins";

// import { Perspective, AutoPlay, Pagination } from "@egjs/flicking-plugins";





export default defineComponent({
    name: "minimalAbout",
    components: {
        Flicking: Flicking


    },

    data() {
        return {
            plugins: [new AutoPlay()]

        }
    },
    methods: {
        collapseShow(e) {
            console.log(e)
        }
    }
});

</script>

<style>
li>p {
    color: rgba(0, 0, 0, 0.65);
}
</style>