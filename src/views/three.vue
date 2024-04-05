<template>

    <div class="w">
        <navigation />
        <h1>关于我的故事</h1>
        <hr>
        <div class="content">
            <div class="basic">
                <div class="name">黄珍珍</div>
                <div class="vx"><span class="icon-weixin iconfont"></span> j12556839</div>
                <div class="school"><span class="iconfont icon-xuexiao"> </span>信软学院 1202</div>
                <div class="dizhi"><span class="iconfont icon-dizhi"> </span>中国 | 四川 | 成都</div>
            </div>
            <swiper>

                <swiper-container :autoplay='{ autoplay: true, delay: 2000 }' :loop='true' :slides-per-view="1"
                    :space-between="spaceBetween" :centered-slides="true" :pagination="{
                    hideOnClick: true,
                    clickable: true
                }" :navigation="{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }" :breakpoints="{
                    768: {
                        slidesPerView: 1,
                    },
                }" @swiperprogress="onProgress" @swiperslidechange="onSlideChange">

                    <swiper-slide>
                        <img src="../style/images/photo1.jpg" alt="">
                        <p>Yummy photo</p>
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../style/images/photo2.jpg" alt="">
                        <p>I like potato</p>
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../style/images/photo3.jpg" alt="">
                        <p>Potato tastes nice</p>
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../style/images/photo4.jpg" alt="">
                        <p>Baked potatoes are delicious</p>
                    </swiper-slide>
                    <swiper-slide><img src="../style/images/photo5.jpg" alt="">
                        <p>Roastd potatoes are irresistible</p>
                    </swiper-slide>

                </swiper-container>

            </swiper>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
        <div class="end"> 我的故事 —— 未完待续
            <div><router-link to="/" class=" iconfont icon-back"></router-link></div>
        </div>
    </div>
</template>

<script>

import navigation from '@/components/navigation.vue'
import { register } from 'swiper/element/bundle';
import Swiper from 'swiper';

register();

export default {
    name: 'HomeView',
    components: {
        navigation
    },
    setup() {
        const spaceBetween = 10;
        const onProgress = (e) => {
            const [swiper, progress] = e.detail;
            console.log(progress)
        };

        const onSlideChange = (e) => {
            console.log('slide changed')
        }

        return {
            spaceBetween,
            onProgress,
            onSlideChange,
        };
    },

}
</script>
<style>
.w {

    margin: 0 auto;
    color: white;
    background-color: #4dd6d0;
}

swiper-container img {
    width: 100%;

}


swiper-container {
    background-color: rgb(230, 207, 163);
    width: 300px;
    height: 350px;
    margin: 0 auto;
}

a {
    text-decoration: none;
}

hr {
    border: 3px solid rgb(21, 59, 53);
    margin: 10px;
}

h1 {
    font-size: 2.5rem;
    color: white;
    text-align: center;
}

h2 {
    font-size: 2rem;
    color: white;
}

.content {
    text-align: center;
}

.name {
    font-size: 1.8rem;
}

.vx,
.icon-weixin {
    font-size: 1.5rem;
}

.dizhi,
.icon-dizhi {
    font-size: 1.5rem;
}

.school,
.icon-xuexiao {
    font-size: 1.5rem;
}



.basic {
    line-height: 2.5rem;
}

.end {
    font-size: 1.5rem;
    text-align: center;
    margin: 15px;
}

.icon-back {
    color: #fff;
    font-size: 2rem;
}
</style>