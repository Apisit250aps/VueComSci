
<template>
    <div class="container-fluid p-1 pt-2 pt-md-0 p-md-0 pt-md-5 p-lg-3 pt-lg-5">
        <h1>จบแล้วทำงานอะไรได้บ้าง?</h1>
        <hr>
        <Flicking ref="flicking" :options="{ align: 'prev', circular: true }" >
            <div class="panel">1</div>
            <div class="panel">2</div>
            <div class="panel">3</div>
            <div class="panel">4</div>
            <div class="panel">5</div>
            <div class="panel">6</div>
            <div class="panel">7</div>
            <div class="panel">8</div>
            <div class="panel">9</div>
        </Flicking>
    </div>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import { defineComponent } from 'vue'

export default defineComponent({
    name: "minimalJobs",
    components: {
        Flicking: Flicking
    },
    data() {
        return {

        }
    },
    methods: {
        onMoveEnd() {
            this.$refs.flicking.next();
        }
    }
});



</script>