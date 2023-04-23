<template>
    <footer class="bg-dark vh-100 text-white p-3 container-fluid">
        <div class="row mb-5">
            <h1>หลักสูตรวิทยาศาสตรบัณฑิต</h1>
            <h3>สาขาวิชาวิทยาการคอมพิวเตอร์</h3>
        </div>
        <div class="row mt-5 row-cols-1 row-cols-md-4" id="major">
            <div class="col text-start">
                <b>ชื่อสถาบันอุดมศึกษา</b>
                <ul>
                    <li><p>มหาวิทยาลัยราชภัฏศรีสะเกษ</p></li>
                </ul>
                <b>คณะ</b>
                <ul>
                    <li><p>ศิลปศาสตร์และวิทยาศาสตร์</p></li>
                </ul>
            </div>
            <div class="col text-start">
                <b>ชื่อหลักสูตรภาษาไทย</b>
                <ul>
                    <li><p>หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์</p></li>
                </ul>
                <b>ชื่อหลักสูตรภาษาอังกฤษ</b>
                <ul>
                    <li><p>Bachelor of Science Program in Computer Science</p></li>
                </ul>

            </div>
        </div>
        <hr>
        <div class="row"></div>
    </footer>   
</template>

<script>

import { defineComponent } from 'vue'

export default defineComponent({
    name: "NavFooter",
    data() {
        return {
            
        }
    },
    methods: {
        

    }
});
</script>