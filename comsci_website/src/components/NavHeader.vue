<template>
    <nav class="navbar bg-white fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Computer Science SSKRU</a>
            <button class="btn-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                    class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                    <path
                        d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                        <h1>วิทยาการคอมพิวเตอร์</h1>
                    </h5>
                    <button type="button" class="btn-icon" data-bs-dismiss="offcanvas" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                </div>
                <div class="offcanvas-body">
                    <div class="d-block">
                        <a class="nav-link" href="http://www.oass.sskru.ac.th/std.sskru/s1.html?fbclid=IwAR2S1BxOZNeff9TkRAGmhRp3tchZbF61JbWnWK73VlBNTO4Z4aZnYzwc4lw">
                            <h5>สมัครเรียน</h5>
                        </a>
                    </div>
                    <div class="d-block">
                        <a class="nav-link" href="https://web.facebook.com/comsci.sskru">
                            <h5>เยี่ยมชมเพจเฟซบุ๊ค</h5>
                        </a>
                    </div>
                    

                </div>
            </div>
        </div>
    </nav>
</template>
<script>

export default {
    name: "NavHeader"
}

</script>
<style>
nav {
    padding: 0 1rem;
    font-family: kodchasan;
}
</style>