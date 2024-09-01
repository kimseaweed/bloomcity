<template>
  <section class="accVisual text-center text-white position-relative">
    <div class="position-absolute start-50 translate-middle-x">
      <h2 class="text-uppercase display-3 fw-bold"
        data-aos="fade-up"
        data-aos-duration="1000"
      >{{currentPath}}</h2>
      <p
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="0"
      >모던하면서도 아늑한 인테리어의 디럭스 폼</p>
    </div>
  </section>
  <section class="accSection container">
    <nav class="mx-auto my-5">
      <ul class="row">
        <li class="col fw-bold" v-for="menu in nav[0].menuItems" :key="menu">
          <router-link 
          :to="menu.menuPath" @click="changePath(menu.menuPath)"
          active-class="navActive">
            {{ menu.menuName }}
          </router-link>
        </li>
      </ul>
    </nav>
      <router-view 
      data-aos="fade-up"
      data-aos-offset="0"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="flase"
      />
  </section>
</template>

<script>

export default {
    props : {
        nav : Array,
    },
    data(){
      return {
        currentPath : 'deluxe',
        menupath : '/accommodations/deluxe',
      }
    },
    methods : {
      changePath(path) {
        this.currentPath = path.replace(/^\/accommodations\/?/, '');
      },

    }
}
</script>

<style>
.accVisual{
  background: url('@/assets/AccVisual.png') no-repeat center / cover ;
  height: 550px;
}
.accVisual>div{
  top: 43%;
}
.accSection a{
 color: black;
}
.accSection nav{
  font-size : 16px ;
  width: 530px;
}@media (max-width: 756px) {
  .accSection nav{
    width : 100%
  }

}
</style>