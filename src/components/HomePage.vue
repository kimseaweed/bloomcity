<template>
  <HomeVisual/>
  <HomeContent1/>
  <HomeContent2/>
  <HomeContent3/>
  <HomeContent4/>
</template>

<script>
import HomeVisual from '@/components/HomeVisual.vue';
import HomeContent1 from '@/components/HomeContent1.vue';
import HomeContent2 from "@/components/HomeContent2.vue";
import HomeContent3 from "@/components/HomeContent3.vue";
import HomeContent4 from "@/components/HomeContent4.vue";

export default {
  components : {
  HomeContent4,
  HomeContent3,
  HomeContent2,
  HomeVisual,
  HomeContent1,
  }
}
</script>

<style>

</style>