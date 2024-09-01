<template>
  <footer>
    <div class="footer-wrapper container-lg py-5">
        <div class="footer-menu d-flex px-xl-5 mx-xl-5 mx-md-0 px-md-0 flex-md-row flex-column">
            <div class="flex-fill " v-for="menuitems in nav" :key="menuitems">
                <p>{{ menuitems.subject}}</p>
                <ul>
                    <li class="" v-for="menuitem in menuitems.menuItems" :key="menuitem"><router-link :to="menuitem.menuPath">{{ menuitem.menuName }}</router-link></li>
                </ul>
            </div>
            
        </div>
        <div class="py-3 text-center">
            <div class="py-3">
                <a href="#" class="footerlink">개인정보처리방침</a>
            </div>
                <p class="fontLight">copyright @ openfield. all rights reserved.</p>
        </div>
    </div>
  </footer>
</template>

<script>

export default {
    props : {
        nav : Array,
    },
    data() {
        return {
        }
    },
}
</script>

<style>
footer{
    background-color: rgb(68, 62, 57);
    color: white;
}

.footer-wrapper>div:nth-of-type(2){
 border-top: 1px solid rgba(255,255,255,0.1);
}
footer>div>div>div>p{
    text-transform: uppercase;
    margin: 0;
    padding: 0;
}
.footer-menu{
    padding: 30px;
}
.footer-menu ul{
    padding: 0;
}
.footer-menu li{
    margin-top: 7px;
}
.footer-menu li a{
    color: rgba(255,255,255,0.6);
}
.footer-menu li a:hover{
    font-weight: bold;
    cursor:pointer;
}
@media (max-width: 756px) {
    .footer-menu{
        text-align: center;
    }
  }
.footerlink{
    color: white;
    text-decoration: none;
}

</style>