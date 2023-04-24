<template>
    <footer class="text-white bg-secondary">
        <nav class="navbar navbar-expand-md bg-secondary">
            <div class="container d-md-block d-flex flex-row">
                <h1 class="my-3">สนใจสมัครเรียน</h1>
                <button class="btn-icon text-white navbar-toggler" type="button" @click="collapse()" data-bs-target="#navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
                    </svg>
                </button>
                <div class="navbar-collapse collapse row row-cols-1 row-cols-md-3" :class="{ 'show': show }">
                    <div class="col">
                        <ul>
                            <li>
                                <h4>สมัครกับทางเว็บของทางมหาวิทยาลัย</h4>
                            </li>
                            <li>
                                <a :href="registerURL">
                                    <img src="../assets/img/university/sskrulogo.png" style="width: 64px; height: 64px;"
                                        alt="" class="img-fluid bg-white p-1 rounded-3">
                                </a>
                                <span class="mx-3">มหาวิทยาลัยราชภัฏศรีสะเกษ</span>
                            </li>
                        </ul>
                    </div>
                    <div class="col">
                        <ul>
                            <li>
                                <h4>สอบถามข้อมูลเพิ่มเติม</h4>
                            </li>
                            <li>

                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor"
                                        class="bi bi-line text-success bg-white p-1 rounded-3" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0ZM5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.154.154 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157Zm.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156h-.562Zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832a.17.17 0 0 0-.013-.015v-.001a.139.139 0 0 0-.01-.01l-.003-.003a.092.092 0 0 0-.011-.009h-.001L7.88 4.79l-.003-.002a.029.029 0 0 0-.005-.003l-.008-.005h-.002l-.003-.002-.01-.004-.004-.002a.093.093 0 0 0-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.154.154 0 0 0 .039.038l.001.001.01.006.004.002a.066.066 0 0 0 .008.004l.007.003.005.002a.168.168 0 0 0 .01.003h.003a.155.155 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156h-.561Zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.155.155 0 0 0-.108.044h-.001l-.001.002-.002.003a.155.155 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.155.155 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z" />
                                    </svg>
                                </a>
                                <span class="mx-3">Computer Science SSKRU</span>

                            </li>
                        </ul>
                    </div>
                    <div class="col">
                        <ul class="">
                            <li>
                                <h4>ติดตามข้อมูลข่าวสารของสาขา</h4>
                            </li>
                            <li>
                                <a :href="facebookURL">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor"
                                        class="bi bi-facebook  text-primary bg-white p-1 rounded-3" viewBox="0 0 16 16">
                                        <path
                                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                </a>
                                <span class="mx-3">วิทยาการคอมพิวเตอร์ มรภ.ศรีสะเกษ</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <hr>
    </footer>
</template>

<script>

import { defineComponent } from 'vue'

export default defineComponent({
    name: "NavFooter",
    data() {
        return {
            show: false,
            facebookURL: "https://web.facebook.com/comsci.sskru",
            registerURL: 'http://www.oass.sskru.ac.th/std.sskru/s1.html?fbclid=IwAR2S1BxOZNeff9TkRAGmhRp3tchZbF61JbWnWK73VlBNTO4Z4aZnYzwc4lw'

        }
    },
    methods: {
        collapse() {
            if (this.show == false) {
                this.show = true
            }
            else {
                this.show = false
            }
        }


    }
});
</script>