<template>
    <div class="container-fluid p-1 pt-2 pt-md-0 p-md-0 pt-md-5 p-lg-3 pt-lg-5">
        <h2></h2>
        <div class="row row-cols-1 row-cols-md-2 g-3">
            <div class="col">
                <img src="@/assets/img/contacts/contact1.png" alt="" class="img-fluid">
            </div>
            <div class="col">
                <img src="@/assets/img/contacts/contact2.png" alt="" class="img-fluid">
            </div>
            <div class="col">
                <img src="@/assets/img/contacts/contact3.png" alt="" class="img-fluid">
            </div>
            <div class="col">
                <img src="@/assets/img/contacts/contact4.png" alt="" class="img-fluid">
            </div>
        </div>
    </div>
</template>

<script>

import { defineComponent } from 'vue'

export default defineComponent(
    {
        name: "minimalContacts",
        component: {

        },
        data() {
            return {

            }
        },
        methods: {

        }
    }
);


</script>