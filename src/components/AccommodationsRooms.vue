<template>
<<<<<<< HEAD
  <section class="accVisual text-center">
    <h2>DELUXE</h2>
    <p>모던하면서도 아늑한 인테리어의 디럭스 폼</p>
  </section>
  <section class="container">
    <nav>
      <ul class="row">
        <li class="col">
          <router-link to="/accommodations/deluxe">일반객실</router-link>
        </li>
        <li class="col">
          <router-link>스위트</router-link>
        </li>
        <li class="col">
          <router-link to="/accommodations/poolvilla">풀빌라</router-link>
        </li>
        <li class="col">
          <router-link>라운지</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
    acc끝
=======
  <section>
  //비주얼
    //네브
    <router-view>

    </router-view>
>>>>>>> 5445726ce14b97bdfc6fba4d8116880fca6184d6
  </section>
</template>

<script>

//데이터를 현재페이지에서 다 불러옴,
// 비주얼부분은 바로 표시하고 방정보는 라우터로 보냄

export default {
  components: {
  }

}
</script>

<style>
.accVisual{
  
}

</style>