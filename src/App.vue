<template>
  
  <MainHeader/>

  메인페이지

  <MainFooter/>

</template>

<script>
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';


export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter,

  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
