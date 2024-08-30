<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary px-5">
  <div class="container-fluid d-flexjustify-content-between h100">
    <router-link to="/" class="navbar-brand">BLOOM CITY</router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0 ">
        <li class="nav-item mx-4 text-uppercase fw-bold">
<<<<<<< HEAD
          <router-link to="/accommodations" class="nav-link" :class="{ 'navActive': isActive('/accommodations') }">accoommdations</router-link>
=======
          <!-- @click="setActive(inex) -->
          <router-link to="/accommodations" class="nav-link" >accommodations</router-link>
>>>>>>> 5445726ce14b97bdfc6fba4d8116880fca6184d6
        </li>
        <li class="nav-item mx-4 text-uppercase fw-bold">
          <a class="nav-link" href="#">dinning</a>
        </li>
        <li class="nav-item mx-4 text-uppercase fw-bold">
          <a class="nav-link" href="#">fun&joy</a>
        </li>
        <li class="nav-item mx-4 text-uppercase fw-bold">
          <a class="nav-link" href="#">meeting&wedding</a>
        </li>
        <li class="nav-item mx-4 text-uppercase fw-bold">
          <a class="nav-link" href="#">paradise city</a>
        </li>
      </ul>
      <div class="d-flex">
        <div class="fs-2 mx-2"><a href="#" class="text-secondary"><i class="bi bi-person"></i></a></div>
        <div class="fs-2 mx-2"><a href="#" class="text-secondary"><i class="bi bi-search"></i></a></div>
      </div>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>

  </header>
</template>

<script>
import { useRoute } from 'vue-router';



export default {
  
  methods : {
    isActive(path) {
      const route = useRoute();
      return route.path.startsWith(path);
    },
  }


}
</script>

<style>

nav{
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
  color : rgb(177, 150, 96)
  !important
}

</style>