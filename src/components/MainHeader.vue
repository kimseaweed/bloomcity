<template>
  <header class="sticky-top shadow">
    <nav class="navbar navbar-expand-lg bg-body-tertiary px-xxl-5 px-2 justify-content-center">
  <div class="container-fluid d-flex">
    <router-link to="/" class="navbar-brand flex-shrink-1 me-xxl-5 me-3 ps-xxl-5">BLOOM CITY</router-link>
    <div class="collapse navbar-collapse d-none d-xl-block">
      <ul class="navbar-nav mx-xxl-auto mx-0 mb-2 mb-lg-0">
        <li class="nav-item mx-xxl-4 mx-md-2 px-0 text-uppercase fw-bold flex-shrink-1" :class="{ 'sm-fs' : this.width < 1300 }"
        v-for="menuItems in nav" :key="menuItems">
          <router-link :to="menuItems.subjectPath" class="nav-link " :class="{ 'navActive': isActive(menuItems.subjectPath) }">{{menuItems.subject}}</router-link>
        </li>
      </ul>
      <div class="d-flex ms-auto">
        <div class="fs-2 mx-2"><a href="#" class="text-secondary"><i class="bi bi-person"></i></a></div>
        <div class="fs-2 mx-2"><a href="#" class="text-secondary"><i class="bi bi-search"></i></a></div>
      </div>
    </div>
    
    <!-- 모바일 start -->
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end d-lg-none ps-2" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <router-link to="/" class="navbar-brand flex-shrink-1 mx-0">BLOOM CITY</router-link>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item text-uppercase fw-bold my-3" v-for="menuItems in nav" :key="menuItems">
            <router-link :to="menuItems.subjectPath" class="nav-link" 
            :class="{ 'navActive': isActive(menuItems.subjectPath) }">{{menuItems.subject}}</router-link>
          </li>
        </ul>
      </div>
      </div>
    <!-- 모바일 end -->
  </div>
</nav>

  </header>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  data() {
        return {
          width: 0,
        };
      },
      mounted() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize(); 
      },
      beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
      },
     methods : {
    isActive(path) {
      const route = useRoute();
      return route.path.startsWith(path);
    },
    handleResize() {
          this.width = window.innerWidth;
        },
  },
  props : {
    nav : Array,
  }


}
</script>

<style>
header{
  z-index: -99999;
}
header nav{
  padding: 0;
  height: 120px;
  
}
.nav-item{
  font-size: 20px;
}
.navbar-brand{
  color: rgb(37, 23, 15);
  font-size: 2rem
  !important;
  font-weight: 900;
}
.navActive{
  color : rgb(177, 150, 96) !important;
}
.sm-fs{
  font-size : 13px;
}

</style>