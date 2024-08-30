<template>
  <footer>
    <div class="footer-wrapper container py-5">
        <div class="footer-menu d-flex px-5 mx-5">
            <div class="flex-fill">
                <p>dccommodations</p>
                <ul>
                    <li class="fontLight"><a>일반객실</a></li>
                    <li class="fontLight"><a>스위트</a></li>
                    <li class="fontLight"><a>풀빌라</a></li>
                    <li class="fontLight"><a>라운지</a></li>
                </ul>
            </div>
            <div class="flex-fill">
                <p>dinning</p>
                <ul>
                    <li class="fontLight"><a>파인다이닝</a></li>
                    <li class="fontLight"><a>카페&바</a></li>
                </ul>
            </div>
            <div class="flex-fill">
                <p>fun&joy</p>
                <ul>
                    <li class="fontLight"><a>레저시설</a></li>
                    <li class="fontLight"><a>부대시설</a></li>
                </ul>
            </div>
            <div class="flex-fill">
                <p>meetiong</p>
                <ul>
                    <li class="fontLight"><a>컨벤션</a></li>
                    <li class="fontLight"><a>웨딩</a></li>
                </ul>
            </div>
            <div class="flex-fill">
                <p>paradise city</p>
                <ul>
                    <li class="fontLight"><a>파라다이스 시티</a></li>
                    <li class="fontLight"><a>오시는 길</a></li>
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
.fontLight{
    color: rgba(255,255,255,0.6);
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
.footer-menu li:hover{
    font-weight: bold;
}
.footerlink{
    color: white;
    text-decoration: none;
}

</style>