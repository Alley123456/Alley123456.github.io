<template>
  <div class="w">
    <navigation />
    <section>
      <img src="../style/images/moon.png" alt="" class="img1">
      <img src="../style/images/sun.png" alt="" class="img2">
      <img src="../style/images/clound.png" alt="" class="img3">
      <img src="../style/images/tree.png" alt="" class="img4">
      <h2 id="text">Hello Frontend!</h2>
    </section>
    <footer>
      <h1>关于前端</h1>
      <h2>为什么选择前端</h2>
      <p>自己其实是一个比较喜欢创造东西的人，并且作为一个编程小白经过刚刚入学的时候的痛苦之后，其实自己对于自己的编程能力不是特别的自信，甚至觉得非常的枯燥······同时在写代码的时候也感觉不到有什么乐趣。
      </p>
      <p>但是后面了解到了前端，感觉符合自己想要创造的想法，入门也比较容易，同时还有源源不断的正反馈，自己就坚持下来啦~</p>
      <h2>学习的感受</h2>
      <p>一开始的html和css非常容易上手，而且也很快能够看到成果，但是随着学到的属性越来越多，深深地感觉到了要学的东西好多好杂！！！大学生不能没有chatgpt~
      </p>
      <p>不过能看到自己做出来满意的效果还是非常有成就感的，比如上面那个banner我真的非常喜欢哈哈哈哈哈。</p>
      <h2>学习途径</h2>
      <p>尝试了看文档学习和看视频学习，感觉还是看视频比较适合我。文档学习感觉有点枯燥无聊，同时在一些地方觉得文档不是非常清楚，感觉学起来挺累的。还是视频手把手教学更适合我这种小菜鸡。</p>

      <router-link to="/two" class=" iconfont icon-jiantou_yemian_xiangyou" style="font-size: 5rem;"></router-link>
    </footer>
  </div>
</template>

<script>
import navigation from '@/components/navigation.vue'

export default {
  name: 'HomeView',
  components: {
    navigation
  },
  mounted() {
    const img1 = document.querySelector('.img1');
    const img2 = document.querySelector('.img2');
    const img3 = document.querySelector('.img3');
    const text = document.querySelector('#text');
    window.addEventListener('scroll', () => {
      let value = window.scrollY;
      text.style.marginTop = value * 0.7 * 0.0625 + 'rem';
      img3.style.top = value * -1.5 * 0.0625 + 'rem';
      img2.style.left = value * 1.5 * 0.0625 + 'rem';
      img2.style.top = value * 1.5 * 0.0625 + 'rem';
      img1.style.top = value * 1 * 0.0625 + 'rem';
      img1.style.left = value * -1 * 0.0625 + 'rem';
    });
  }
}
</script>
<style>
.w {
  background-color: #4dd6d0;
}

section {
  background-color: #4dd6d0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}

a {
  text-decoration: none;
}

section img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
}

#text {
  position: absolute;
  top: 12%;
  font-size: 6rem;
  color: #fff;
  text-shadow: .0313rem .0313rem .0625rem rgba(0, 0, 0, .2);
}

footer {
  padding: 0 8%;
  background-color: rgb(21, 59, 53);
  line-height: 1.5;
}


footer h1 {
  font-size: 3.75rem;
  text-align: center;
  color: white;
}

footer h2 {
  font-size: 2.5rem;
  color: white;
}


footer p {
  font-size: 2rem;
  color: white;
}

.icon-jiantou_yemian_xiangyou {
  display: flex;
  justify-content: center;
  color: #fff;
}
</style>