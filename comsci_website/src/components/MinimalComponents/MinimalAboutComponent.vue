<template>
    <div class="container-fluid p-1 pt-3 pt-md-0 p-md-0 pt-md-5 p-lg-3 pt-lg-5" id="about">
        <h2>เกี่ยวกับเรา</h2>
        <hr>
        <div class="m-auto row g-3 row-cols-1 row-cols-md-2 p-2 ">

            <div class="col  row row-cols-1" hidden>
                <button class="collapse-btn" name="aboutBachelor"    data-target="aboutBachelor" @click="collapseShow(name)">
                    <h4>เกี่ยวกับหลักสูตร</h4>
                </button>
                <div class="collapse" ref="aboutBachelor" id="aboutBachelor">
                    <div class="col ">
                        <h5>ชื่อหลักสูตร</h5>
                        <ul>
                            <li>
                                <h6>ชื่อภาษาไทย</h6>
                                <ul>
                                    <li>
                                        <p>หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h6>ชื่อภาษาอังกฤษ</h6>
                                <ul>
                                    <li>
                                        <p>Bachelor of Science Program in Computer Science</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="col">
                        <h5>ชื่อปริญญาและสาขาวิชา </h5>
                        <ul>
                            <li>
                                <h6>ชื่อเต็มภาษาไทย</h6>
                                <ul>
                                    <li>
                                        <p>วิทยาศาสตรบัณฑิต (วิทยาการคอมพิวเตอร์)</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h6>ชื่อย่อภาษาไทย </h6>
                                <ul>
                                    <li>
                                        <p>วท.บ. (วิทยาการคอมพิวเตอร์)</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h6>ชื่อเต็มภาษาอังกฤษ</h6>
                                <ul>
                                    <li>
                                        <p>Bachelor of Science (Computer Science)</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h6>ชื่อย่อภาษาอังกฤษ</h6>
                                <ul>
                                    <li>
                                        <p>B.Sc. (Computer Science)</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

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
    },
    methods:{
        collapseShow(e){
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