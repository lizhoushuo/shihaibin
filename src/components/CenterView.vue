<template>
  <div class="bottom">
    <dv-border-box-8 style="background-color: #3a584b" :color="['#3e5a4e', '#fff']">
      <div>
        <div class="top">
          <img src="../assets/组 3030(2).png" alt="" class="img" />
          <p>百香果基地预警</p>
        </div>
        <div style="height: 180px">
          <div class="aa">
            <div class="one" style="height: 120px">
              <div style="height: 100px" class="bottoms">
                <span class="zt">729</span>
              </div>
              <div style="color: #fff; font-size: 13px; text-align: center">本周管理数</div>
            </div>
            <div>
              <div style="height: 100px" class="bottoms">
                <span class="zt">729</span>
              </div>
              <div style="color: #fff; font-size: 13px; text-align: center">本周管理数</div>
            </div>
            <div>
              <div style="height: 100px" class="bottoms">
                <span class="zt">729</span>
              </div>
              <div style="color: #fff; font-size: 13px; text-align: center">本周管理数</div>
            </div>
          </div>
          <div style="height: 60px" class="ss">
            <div class="bb">
              <span style="color: #785a59">24小时预警</span>
            </div>
            <div style="display: flex; flex-wrap: wrap; color: #fff">
              <div>
                <div>天气预警 <span style="color: #785a59">29</span></div>
                <div>天气预警 <span style="color: #785a59">51</span></div>
              </div>
              <div>
                <div>天气预警 <span style="color: #785a59">237</span></div>
                <div>天气预警 <span style="color: #785a59">37</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dv-border-box-8>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style scoped>
.bottom {
  margin-top: 15px;
}

.top {
  height: 50px;
  border-bottom: 2px solid #cccccc70;
  display: flex;
  color: #fff;
  align-items: center;
}

.img {
  width: 30px;
  height: 30px;
  margin: 0 10px 0 15px;
}

.bottoms {
  background-image: url("../assets/组\ 3299@2x.png");
  background-repeat: no-repeat;
  width: 110px;
  padding: 20px 0 0 29px;
  box-sizing: border-box;
}

.zt {
  font-size: 30px;
  color: #765a61;
}

.aa {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}

.one {
  height: 130px;
}

.bb {
  background-image: url("../assets/Rectangle\ 605@2x.png");
  background-repeat: no-repeat;
  padding: 13px 0 0 17px;
  box-sizing: border-box;
  width: 122px;
  height: 48px;
}

.ss {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
