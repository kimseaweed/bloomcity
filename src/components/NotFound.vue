<template>
  <article class="notfound">
    <section>
      <h2>404 Not Found</h2>
      <strong>찾을 수 없는 페이지 입니다.</strong>
    </section>
    <section class="notfoundSubs">
      <p>
        
        현재 개발된 페이지는 다음과 같습니다.
        <ul class="">
          <li><router-link to="/"> 메인페이지</router-link></li>
          <li><router-link to="/accommodations/deluxe">서브페이지1(accommodations/deluxe)</router-link></li>
          <li><router-link to="/accommodations/poolvilla">서브페이지1(accommodations/poolvilla)</router-link></li>
        </ul>
        제 작업물에 관심 가져주셔서 감사합니다.  :D
      </p>

    </section>
  </article>
</template>

<script>
export default {

}
</script>

<style>
.notfound{
  margin : 20vh auto 20vh;
  text-align: center;
}
.notfoundSubs{
  margin-top: 5rem;
}

</style>