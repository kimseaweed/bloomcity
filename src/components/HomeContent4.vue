<template>
  <section class="homeCon4 text-center position-relative pt-4">
    <div class="homeCon4-title">
      <h3 class="text-uppercase display-5 pt-3 fw-bold"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="0">contact us</h3>
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="10">언제나 설레는 길, BLOOM CITY 오시는 길을 안내해 드립니다.</p>
    </div>
    <div class="container">
      <div class="homeCon4-subs row row-cols-3 p-5"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <div class="col-12 col-sm-4 pt-4">
          <div class="homeCon4-icon mx-auto">
            <i class="bi bi-geo-alt-fill"></i>
          </div>
          <p class="pt-4">서울특별시 마포구 영화로10길 15 I.O빌딩 4층</p>
        </div>
        <div class="col-12 col-sm-4 pt-4">
          <div class="homeCon4-icon mx-auto">
            <i class="bi bi-flag-fill"></i>
          </div>
          <p class="pt-4">서울특별시 마포구 서교동 395-171</p>
        </div>
        <div class="col-12 col-sm-4 pt-4">
          <div class="homeCon4-icon mx-auto">
            <i class="bi bi-telephone-fill"></i>
          </div>
          <p  class="pt-4">02. 123. 4567</p>
        </div>
      </div>
    </div>
    <div id="map" style="width:100%;height:680px;"></div>
  
  </section>
</template>

<script>
  import key from "../key.js";
  export default {
    mounted() {

// 네이버 지도 API 로드

const script = document.createElement("script");

script.src =
"https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId="+key;

script.async = true;
script.defer = true;
document.head.appendChild(script);

  

script.onload = () => {
  var map = new window.naver.maps.Map("map", {
  center: new window.naver.maps.LatLng(37.5510157145479, 126.917368429956),
  zoom: 17,
  });

  new window.naver.maps.Marker({
    position: new window.naver.maps.LatLng(37.5510157145479, 126.917368429956),
    map: map})


};

},
  };


</script>

<style>
.homeCon4-title{
  color: rgb(70, 70, 70);
  position: relative;
  top: 100px;
}
.homeCon4-subs{
  background-color: rgb(68, 62, 57);
  font-size: 14px;
  position: relative;
  top: 150px;
  z-index: 9;
}
@media (min-width: 756px) {
  .homeCon4-subs>div:nth-child(n+2){
    border-left: 1px solid rgba(255,255,255,0.3);
  }
}
.homeCon4-subs p{
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
}
.homeCon4-icon{
  width: 100px;
  height: 100px;
  border-radius: 100% ;
  background-color: rgb(180, 148, 97);
  font-size: 45px;
  color: black;
  
}
.homeCon4-subs>div i{
  transition: all 1s;
}
.homeCon4-subs>div:hover i{
  color: white;
}

.homeCon4-icon i{
  line-height: 95px;
}
</style>