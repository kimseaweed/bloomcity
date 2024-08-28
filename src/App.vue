<template>
  
  <MainHeader/>
  <HomeVisual/>
  <HomeContent1/>
  <HomeContent2/>
  <HomeContent3/>
  <HomeContent4/>
  <MainFooter/>

</template>

<script>

import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';
import HomeVisual from './components/HomeVisual.vue';
import HomeContent1 from './components/HomeContent1.vue';
import HomeContent2 from './components/HomeContent2.vue';
import HomeContent3 from './components/HomeContent3.vue';
import HomeContent4 from './components/HomeContent4.vue';

export default {
  name: 'App',
  datd(){

  },
  components: {
    MainHeader,
    MainFooter,
    HomeVisual,
    HomeContent1,
    HomeContent2,
    HomeContent3,
    HomeContent4,

  },
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap');
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");

*{
  margin: 0;
  padding: 0;
  font-family: "Noto Sans KR", sans-serif;
}
ul>li{
  list-style: none;
}
</style>
