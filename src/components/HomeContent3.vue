<template>
  <section class="homeCom3 text-center text-white d-flex align-items-center">
    <div>
      <h3 class="text-uppercase display-5 fw-bold"
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="10">accommodations</h3>
      <p
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="200">BLOOM CITY만의 예술적 품격을 갖춘 객실에서 <br class="d-sm-none">격이 다른 휴식과 여유를 경험해보세요.</p>
      <router-link to="accommodations">
        <button class="text-uppercase mt-5 px-5 py-3 "
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-delay="300">view more</button>
        </router-link>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.homeCom3{
  background: no-repeat center/cover url("../assets/con3.png") ;
  height: 750px;
}
.homeCom3>div{
  margin: auto;
}
.homeCom3>div>p{
  font-size: 14px;
}
.homeCom3 button{
  color: white;
  border: white solid 2px;
  font-weight: bold;
  background: transparent;
  transition: all 1s;
}
.homeCom3 button:hover{
  background: white;
  color: rgb(70, 70, 70);
  transition: all 1s;
}

</style>