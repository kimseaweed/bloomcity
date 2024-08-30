<template>
  <section class="homeCon1 container py-5 my-5">
    <div class="homeCon1-title text-center py-5">
      <h3 class="text-uppercase fw-bold display-5">k-style destination</h3>
      <p>고객의 오감을 만족시킬 다채로운시설, 한국 관광산업의 랜드마크 BLOOM CITY</p>
    </div>
    <div class="homeCon1-subs row">
      <div class="col-7">
        <img src="@/assets/con1.png" alt="창가앞 하얀쇼파와 화분들" class="">
      </div>
      <div class="col d-flex flex-column p-5 ">
        <h4 class="display-5 fw-bold pb-5 position-relative">한층 여유로운 공간,<br>세련된 인테리어</h4>
        <p class="py-4 fw-semibold">휴식과 여유의 시간, 예술적 충전, 다이나믹한 엔터테인먼트까지 다양한 시설이 조각보처럼 어우려져 한번에 모든 것을 누릴 수 있는 창조적 공간! 여행의 품격이 다른 BLOOM CITY로 여러분을 초대합니다.</p>
        <button class="text-uppercase px-5 py-3">view more</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.homeCon1{
  color: rgb(70,70,70 );
  
}
.homeCon1 img{
  width: 100%;
  height: 500px;
  object-fit: cover;
}
.homeCon1-subs h4{
  letter-spacing: 2px;
  line-height: 130%;
}
.homeCon1-subs h4::after{
  content: "";
  position: absolute;
  left: 0px;
  bottom: -2px;
  height: 1px;
  width: 100px;
  background: rgb(70,70,70 );
}
.homeCon1-subs p{
  font-size: 14px;
  color : rgb(107, 107, 107 );
  line-height: 25px;
}
.homeCon1-subs button{
  font-size: 14px;
  background-color: rgb(177, 150, 96);
  border: 1px solid transparent;
  color: white;
  width: max-content;
  transition: all 1s;
}
.homeCon1-subs button:hover{
  border: rgb(177, 150, 96) 1px solid;
  background-color: transparent;
  color: rgb(177, 150, 96);
}

</style>