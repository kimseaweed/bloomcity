<template>
  
  <MainHeader :nav="nav"/>
  <router-view :nav="nav" />
  <MainFooter :nav="nav"/>

</template>

<script>

import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';

export default {
  name: 'App',
  beforeMount(){
            this.$axios
              .get(this.$serverUrl+"/ui/nav",{})
              .then((res) => {
                this.nav = res.data;
                console.log(res.data);
              })
              .catch((res) => {
                console.log('통신실패')
                console.error(res);
              });
  },
  data()  {
    return{
        nav : null,
    }
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
  box-sizing: border-box;
}
ul>li{
  list-style: none;
}
a{
  text-decoration: none !important;
}
</style>
