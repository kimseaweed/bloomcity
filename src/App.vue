<template>
  
  <MainHeader/>
  <router-view/>
  <MainFooter/>

</template>

<script>

import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';

export default {
  name: 'App',
  datd(){

  },
  components: {
    MainHeader,
    MainFooter,

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
