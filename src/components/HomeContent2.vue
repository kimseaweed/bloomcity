<template>
  <section class="homeCon2 text-center pb-3">
    <div class="homeCon2-wrapper container py-5">
      <div class="homeCon2-title p-5">
        <h3 class="text-uppercase display-5 fw-bold"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset=""
          data-aos-delay="20"
        >special offers</h3>
        <p
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset=""
        data-aos-delay="200"
        >BLOOM CITY만의 특별한 패키지 상품을 소개합니다!</p>
      </div>
      <!-- 데탑start -->
      <div class="row pb-5"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset=""
          data-aos-delay="300"
          v-if="this.width >= 1000">
        <div class="col">
          <div>
            <img src="@/assets/con2-1.png">
          </div>
          <div class="bg-white py-3">
            <p class=" fw-medium">
              <span class="text-uppercase fs-4">smart summer</span> <br>
              BLOOM CITY에서 즐기는 스마트한 초이스
            </p>
          </div>
        </div>
        <div class="col">
          <div>
            <img src="@/assets/con2-2.png">
          </div>
          <div class="bg-white py-3">
            <p class=" fw-medium">
              <span class="text-uppercase fs-4">room only</span> <br>
              BLOOM CITY를 즐기는 완벽한 여행
            </p>
          </div>
        </div>
        <div class="col">
          <div>
            <img src="@/assets/con2-3.png">
          </div>
          <div class="bg-white py-3">
            <p class=" fw-medium">
              <span class="text-uppercase fs-4">one summer night</span> <br>
              더욱 특별해지는 당신의 여름밤
            </p>
          </div>
        </div>
      </div>
      <!-- 데탑end -->
      <!-- 랩탑start -->
      <div id="carouselExampleIndicators" class="carousel slide" v-if="this.width < 1000"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset=""
        data-aos-delay="300">
        <div class="carousel-inner position-relative">
          <div class="carousel-item active">
            <div>
            <img src="@/assets/con2-1.png">
              <p class=" fw-medium bg-white pt-3 pb-4 mb-0">
                <span class="text-uppercase fs-4">smart summer</span> <br>
                BLOOM CITY에서 즐기는 스마트한 초이스
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="">
            <img src="@/assets/con2-2.png">
              <p class=" fw-medium bg-white pt-3 pb-4 mb-0">
                <span class="text-uppercase fs-4">room only</span> <br>
                BLOOM CITY를 즐기는 완벽한 여행
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <div>
            <img src="@/assets/con2-3.png">
              <p class=" fw-medium bg-white pt-3 pb-4 mb-0">
                <span class="text-uppercase fs-4">one summer night</span> <br>
                더욱 특별해지는 당신의 여름밤
              </p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
       <!-- 랩탑end -->

    </div>
  </section>
</template>

<script>
export default {
  data() {
      return {
        width: 0,
        height: 0
      };
    },
    mounted() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize(); // Initialize with the current size
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      handleResize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
      }
    }
}
</script>

<style>
.homeCon2{
  background-color: rgb(243, 242, 242);
  color: rgb(70,70,70);
}
.homeCon2 .row .col{
  border: 1px solid rgb(230, 230, 230);
  padding: 0;
  margin-left: 7px;
  margin-right: 7px;
}
.homeCon2 .row .col>div,
.carousel-item p{
  transition: all 1s;
}
.homeCon2 .row .col:hover>div,
.carousel-item:hover p{
  background-color: rgb(177, 150, 96) !important;
  color: white;
}

.homeCon2 img{
  width: 100%;
  height: 550px;
  object-fit: cover;
}

</style>