<template>
  <article class="poolvilla">
    <div class="poolvilla-1">

      <div id="carouselPoolvilla" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="@/assets/Accpoolvilla.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="@/assets/Accpoolvilla.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="@/assets/Accpoolvilla.png" class="d-block w-100" alt="...">
          </div>
        </div>
      </div>
      <div>
        <div class="carousel-indicators pt-3">
          <button type="button" data-bs-target="#carouselPoolvilla" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselPoolvilla" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselPoolvilla" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
      </div>
  
    </div>
    <div class="poolvilla-2 row pb-5 mb-5">
      <div class="col-12 col-md-7">
        <h4 class="fw-bold">DELUX POOL VILLA</h4>
        <h5 class="fw-bold">고급스러운 색채와 감각적인 분위기를 지닌 풀빌라의 정석, 디럭스 풀빌라</h5>
        <p class="pt-3 pe-5">전용 POOL을 보유한 디럭스 풀빌라는 마치 먼 휴양지에 와 있는 듯한 이국적인 분위기를 느끼게 해줍니다. 별관에 위치하여 독립적인 공간에서의 프라이빗한 휴식을 즐길 수 있으며, 풀빌라 내 고급 편의 시설과 풀빌라 전용으로 제공되는 서비스는 단순한 휴식을 넘어 완벽한 휴양을 제공할 것입니다.</p>
      </div>
      <div class="col ps-4 mt-md-0 mt-5">
        <h5 class="fw-bold">체크인/체크아웃</h5>
        <ul class="">
          <li class="">Check in   03:00 PM</li>
          <li class="">Check out  12:00 PM (정오 12시)</li>
        </ul>
        <ul class="warn">
          <li>성수기 시즌 체크 인/아웃 시간은 조정될 수 있습니다.</li>
          <li>호텔 내 유아용 킥보드 및 전동 퀵보드 사용은 엄격하게 제한됩니다.</li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script>
export default {

}
</script>

<style>
.poolvilla .carousel-indicators{
  position: static;
}
.poolvilla .carousel-indicators button{
    width: 10px !important; height: 10px !important;
    margin: auto 6px;
    border-radius: 100%;
    opacity: 1;
    background-color : rgba(177, 150, 96, 0.6) !important;
}
.poolvilla .carousel-indicators button.active{
  background-color: black !important;
}

.poolvilla li{
  list-style: disc;
}
.warn li{
  color : rgb(177, 150, 96) !important; 
  font-weight: 500;
}

.poolvilla-2{
 padding-top : 3rem;
}
.poolvilla-2 div{
  padding-top: 1rem;
  padding-bottom: 0;

}
.poolvilla-2>div:nth-child(2){
  background-color: rgba(177, 150, 96,0.2); 
  border: 1px solid rgba(177, 150, 96,0.3);
}
.poolvilla-2 h4{
  font-size: 34px;
  color:rgb(177, 150, 96);
}
.poolvilla-2  p{
  font-weight: 500;
  color : rgb(70,70,70);
}

</style>