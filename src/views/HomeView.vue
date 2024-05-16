<template>
  <div class="home">
    <img src="../assets/标题@2x.png" alt="" class="www" />
    <div class="context">
      <div class="left">1</div>
      <div class="center"></div>
      <div class="right">
        <top></top>
        <center></center>
        <bottom></bottom>
      </div>
    </div>
  </div>
</template>

<script>
import top from "../components/TopView.vue"
import center from "../components/CenterView.vue"
import bottom from "../components/BottomView.vue"
export default {
  components: {
    top,
    center,
    bottom
  }
}
</script>
<style>
.home {
  width: 100vw;
  height: 100vh;
  background: url(../assets/bg@2x\(1\).png);
  background-size: 100% 100%;
  overflow: hidden;
}

.www {
  width: 100%;
  position: fixed;
}

.left {
  width: 27%;
  height: 800px;
  background-color: aqua;
}

.center {
  width: 42%;
  height: 800px;
  background-color: black;
}

.right {
  width: 27%;
  height: 800px;
  /* background-color: bisque; */
}

.context {
  display: flex;
  justify-content: space-around;
  margin: 110px 0;
}
</style>
