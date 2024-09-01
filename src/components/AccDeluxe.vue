<template>
  <article class="deluxe container row d-flex pb-5 mb-5">
    <section class="deluxeImg col-12 col-xl-8 row row-cols-2 ms-2">
      <div class="col p-1"><img class="" src="@/assets/AccDeluxe0.png" alt="객실안에 침대가 두개"></div>
      <div class="col p-1"><img class="" src="@/assets/AccDeluxe1.png" alt="바다가 보이는 수영장"></div>
      <div class="col p-1"><img src="@/assets/AccDeluxe2.png" alt="바다가 보이는 조"></div>
      <div class="col p-1"><img src="@/assets/AccDeluxe3.png" alt="아침식사 서비스"></div>
    </section>
    <section class="col-12 mt-5 mt-xl-0 col-xl-4 ps-md-5 ps-2">
      <h5>상세정보</h5>
      <p>편안한 분위기와 세련된 실내 디자인의 디럭스 룸은 45평방미터의 공간으로 안락하고 편안한 휴식을 제공합니다. 룸서비스 이용은 24시간 가능하며, 와이파이 서비스는 무료로 이용하실 수 있습니다.</p>
      <h5>객실 서비스</h5>
      <ul class="row">
        <li class="col-12 col-sm-6">무료 WIFI</li>
        <li class="col-12 col-sm-6">55인치 FULL HD TV</li>
        <li class="col-12 col-sm-6">위성 TV 63개 채널</li>
        <li class="col-12 col-sm-6">개인용 금고</li>
        <li class="col-12 col-sm-6">커피</li>
        <li class="col-12 col-sm-6">녹차, 홍차(티백)</li>
        <li class="col-12 col-sm-6">미네랄 워터 2병</li>
        <li class="col-12 col-sm-6">커피포트</li>
      </ul>
      <h5>어메니티</h5>
      <ul class="row">
        <li class="col-12 col-sm-6">배쓰 어메니티 5종</li>
        <li class="col-12 col-sm-6">배쓰타올</li>
        <li class="col-12 col-sm-6">목욕용 가운</li>
        <li class="col-12 col-sm-6">샤워캡</li>
        <li class="col-12 col-sm-6">머리 빗</li>
        <li class="col-12 col-sm-6">면봉</li>
        <li class="col-12 col-sm-6">에머리보드</li>
        <li class="col-12 col-sm-6">헤어드라이기 등</li>
      </ul>
      <h5>체크인/체크아웃</h5>
      <ul class="row">
        <li class="col-12">Check in   03:00 PM</li>
        <li class="col-12">Check out  12:00 PM (정오 12시)</li>
      </ul>

      <ul class="ps-4">
        <li>성수기 시즌 체크 인/아웃 시간은 조정될 수 있습니다.</li>
        <li>호텔 내 유아용 킥보드 및 전동 퀵보드 사용은 엄격하게 제한됩니다.</li>
      </ul>

      <button class="py-3">예약하기</button>
    </section>
  </article>
</template>

<script>
export default {

}
</script>

<style>
/* .deluxe */
  .deluxeImg img{
    width: 100%;
  }
  .deluxe h5{
    font-size: 18px;
    font-weight: 800;
    padding-top: 8px;
    padding-bottom: 4px;

  }
  .deluxe section ul li{
    list-style: disc;
    color : rgb(70, 70, 70);
    padding: 0px;
  }
  .deluxe ul.ps-4 li{
    font-size: 14px;
    color:rgb(177, 150, 96) ;
    font-weight: 500;
    list-style: "*  " !important;
    padding-left: 3px;
  }
  .deluxe ul.ps-4{
    padding-left:14px !important;
  }
  .deluxe button{
    width: 100%;
    background-color:rgb(177, 150, 96);
    color : white;
    border: 1px solid transparent;
    transition: all 1s;
  }
  .deluxe button:hover{
    background-color:white;
    color : rgb(177, 150, 96);
    border: 1px solid rgb(177, 150, 96);;
  }
</style>