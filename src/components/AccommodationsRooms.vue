<template>
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
  </section>
</template>

<script>
export default {

}
</script>

<style>
.accVisual{
  
}

</style>