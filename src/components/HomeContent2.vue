<template>
  <section class="homeCon2 text-center pb-3">
    <div class="homeCon2-wrapper container py-5">
      <div class="homeCon2-title p-5">
        <h3 class="text-uppercase display-5 fw-bold">special offers</h3>
        <p>BLOOM CITY만의 특별한 패키지 상품을 소개합니다!</p>
      </div>
      <div class="row pb-5">
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
    </div>
  </section>
</template>

<script>
export default {

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
.homeCon2 .row .col>div{
  transition: all 1s;
}
.homeCon2 .row .col:hover>div{
  background-color: rgb(177, 150, 96) !important;
  color: white;
}

.homeCon2 img{
  width: 100%;
  height: 550px;
  object-fit: cover;
}

</style>