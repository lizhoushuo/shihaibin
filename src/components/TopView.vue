<template>
  <div class="top">
    <dv-border-box-8 style="background-color: #39564a" :color="['#3e5a4e', 'green']">
      <div class="flex">
        <div class="one">
          <div class="bg">
            <span>51</span>
          </div>
          <p style="color: #fff; font-size: 13px; text-align: center">土壤检测专家</p>
        </div>
        <div>
          <div class="bg">
            <span>66</span>
          </div>
          <p style="color: #fff; font-size: 13px; text-align: center">神经专家</p>
        </div>
        <div>
          <div class="bg">
            <span>96</span>
          </div>
          <p style="color: #fff; font-size: 13px; text-align: center">病虫防治专家</p>
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
.top {
  height: 90px;
}

.bg {
  height: 60px;
  padding: 20px 0 0 65px;
  box-sizing: border-box;
  background-image: url(../assets/组\ 3038@2x\(1\).png);
  width: 113px;
  background-repeat: no-repeat;
}

.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  height: 90px;
}

span {
  color: #1d4435;
}
</style>
