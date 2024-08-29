<template>
<section class="homeVisual">
  <div id="carousel" class="carousel slide carousel-fade position-relative" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button class="mx-2 active" type="button" data-bs-target="#carousel" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
      <button class="mx-2" type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button class="mx-2" type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
  
    <div class="visualTitle position-absolute z-3 start-50 translate-middle text-light">
        <h4 class="fw-bold">BLOOM CITY</h4>
        <p class="text-center fs-4">과거와 미래가 공존하는 현실과 상상을 넘나드는 새로운 도시의 탄생</p>
      </div>
  
    <div class="carousel-inner">
      <div class="carousel-item active"  data-bs-interval="3000">
        <img src="../assets/visual0.png" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/visual1.png" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/visual2.png" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
        </div>
      </div>
  
    </div>
  </div>
</section>

</template>

<script>
  export default {
    data() {
      return {

      }
    },
    }
</script>

<style>
  #carousel img{
    height: 800px;
    object-fit : cover;
  }
  .homeVisual .visualTitle{
    top: 45%;
  }
  .homeVisual h4{
    font-size: 10rem !important;
    letter-spacing: 5px;
  }
  .homeVisual .carousel-indicators button{
    width: 14px !important; height: 14px !important;
    border-radius: 100%;
    opacity: 1;
  }
  .homeVisual .carousel-indicators button.active{
    background-color : rgb(177, 150, 96) !important;
  }
</style>