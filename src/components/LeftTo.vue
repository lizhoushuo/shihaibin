<template>
  <div>
    <div class="first">
      <h2><img src="../assets/容器 47@2x.png" alt="" class="img1" />&ensp; 百香果基地概要</h2>
      <div class="one1">
        <div class="a1">
          <img src="../assets/组 3030@2x.png" alt="" class="img2" />
          <div class="right1">
            <div>种植人数</div>
            <div>52人</div>
          </div>
        </div>
        <div class="a1">
          <img src="../assets/组 3030@2x(2).png" alt="" class="img2" />
          <div class="right1">
            <div>种植人数</div>
            <div>52人</div>
          </div>
        </div>
        <div class="a1">
          <img src="../assets/组 3030@2x(1).png" alt="" class="img2" />
          <div class="right1">
            <div>种植人数</div>
            <div>52人</div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="left">
          <div class="font">
            检测设备
            <h3>729</h3>
          </div>
          <img src="../assets/Group 625@2x.png" alt="" class="she" />
        </div>
        <div class="right2">
          <div class="www1">
            <h3 style="line-height: 40px">第一次写目</h3>
            <h5>1</h5>
          </div>
          <div class="www1">
            <h3 style="line-height: 40px">第一次写目</h3>
            <h5>1</h5>
          </div>
          <div class="www1">
            <h3 style="line-height: 40px">第一次写目</h3>
            <h5>1</h5>
          </div>
          <div class="www1">
            <h3 style="line-height: 40px">第一次写目</h3>
            <h5>1</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="second">
      <h2><img src="../assets/容器 47@2x.png" alt="" class="img1" />&ensp; 天气预报</h2>
      <div class="w">
        <div class="ww" v-for="(item, index) in arr" :key="index">
          <div class="b1" style="width: 22%">
            <div>{{ item.week }}</div>
            <div>{{ item.data }}</div>
          </div>
          <div class="b1" style="width: 22%">
            <div><img src="../assets/83@2x.png" alt="" /></div>
            <div>晴</div>
          </div>
          <div class="b1" style="width: 38%">
            <div>{{ item.start }}</div>
            <div class="du"><div class="du1"></div></div>
            <div>{{ item.end }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="third">
      <h2 class="h2">
        <div><img src="../assets/容器 47@2x.png" alt="" class="img1" />&ensp; 地块动态</div>
        <div class="head">业务</div>
      </h2>
      <div class="xia">
        <div class="left2">
          <h3 class="h3">
            <img src="../assets/组 239@2x.png" alt="" />
            <div>种植面积1</div>
            <div>农家1号</div>
          </h3>
          <h3 class="h3">
            <img src="../assets/组 239@2x.png" alt="" />
            <div>种植面积1</div>
            <div>农家1号</div>
          </h3>
        </div>
        <div class="right3">
          <div class="ji">基地</div>
          <div class="ji">基地</div>
          <div class="ji">基地</div>
          <div class="ji">基地</div>
          <div class="ji">基地</div>
          <div class="ji">基地</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        { week: "今天", data: "03/11", start: "15", end: "24" },
        { week: "明天", data: "03/12", start: "12", end: "30" },
        { week: "周三", data: "03/13", start: "16", end: "32" },
        { week: "周四", data: "03/14", start: "12", end: "32" },
        { week: "周五", data: "03/15", start: "15", end: "28" },
        { week: "周六", data: "03/16", start: "15", end: "18" },
        { week: "周日", data: "03/17", start: "15", end: "20" }
      ]
    }
  }
}
</script>
<style>
* {
  color: #fff;
}

.first {
  width: 98%;
  height: 340px;
  /* background-color: blue; */
  margin: auto;
  border: 1px solid #fff;
  border-radius: 16px;
}

h2 {
  padding: 16px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #fff;
}

.img1 {
  width: 25px;
  height: 25px;
}

.one1 {
  height: 100px;
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.a1 {
  display: flex;
  font-size: large;
  width: 28%;
  justify-content: space-around;
}

.img2 {
  width: 70px;
  height: 70px;
}

.right1 {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: large;
  margin-left: 10px;
}

.bottom {
  position: relative;
  width: 100%;
  height: 170px;
  display: flex;
  justify-content: space-around;
}

.she {
  position: absolute;
  top: -40px;
  left: -70px;
}

.font {
  position: absolute;
  left: 100px;
  top: 15px;
  text-align: center;
}

.left {
  width: 40%;
  height: 100%;
}

.right2 {
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex: 1;
  align-items: center;
}

.www1 {
  width: 35%;
  text-align: center;
}
</style>
<style>
.second {
  width: 98%;
  height: 375px;
  /* background-color: blue; */
  margin: 18px auto;
  border: 1px solid #fff;
  border-radius: 16px;
}
</style>

<style>
.third {
  width: 98%;
  height: 200px;
  /* background-color: blue; */
  margin: 18px auto;
  border: 1px solid #fff;
  border-radius: 16px;
}
.ww {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.b1 {
  display: flex;
  width: 28%;
  height: 42px;
  justify-content: space-around;
  align-items: center;
}
.du {
  width: 100px;
  height: 10px;
  border-radius: 10px;
  padding: 0 10px;
  background-color: #dfcb70;
}
.du1 {
  width: 40px;
  height: 10px;
  border-radius: 10px;
  padding: 0 10px;
  background-color: blue;
}
</style>

<style>
.h2 {
  display: flex;
  justify-content: space-between;
}
.head {
  width: 100px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  background-color: aqua;
  float: right;
  border-radius: 15px;
}
.xia {
  display: flex;
  justify-content: space-between;
}
.h3 {
  width: 100%;
  display: flex;
  align-items: center;
  margin: 15px;
  justify-content: space-around;
}
.left2 {
  width: 40%;
  height: 100%;
}
.right3 {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
  line-height: 40px;
  flex: 1;
}
.ji {
  width: 80px;
  height: 40px;
  margin: 10px;
  border: 1px solid black;
  border-radius: 15px;
}
</style>
