<template>
  <div>
    <div class="div">
      <div class="top">
        <div v-for="item in list" :key="item.id">
          <img :src="getImageUrl(item.imgurl)" alt="" @click="prompt(item.id)" />
          <p>{{ item.name }}</p>
          <p>{{ item.address }}</p>

          <div class="prompt" v-if="item.flag">
            <p>
              <img src="../assets/组 3030@3x.png" alt="" />
              {{ item.name }}&ensp;{{ item.address }}
            </p>

            <img src="../assets/蒙版组 3.png" alt="" />
            <img src="../assets/蒙版组 6.png" alt="" />

            <span>扫码看详情</span>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="left1">
          <div class="text">
            <img src="../assets/组 3030(1).png" alt="" />
            土壤肥力分析
          </div>
          <div id="echarts" style="width: 400px; height: 200px"></div>
        </div>
        <div class="right1">
          <div class="text">
            <div class="img1">
              <img src="../assets/组 3030(1).png" alt="" />
              收成详情
            </div>
            <div class="boxShadow">
              <span>收成</span>
              <span>收成</span>
            </div>
          </div>
          <div class="detail">
            <div class="div1">
              <div class="ul">果实</div>
              <div class="li">百香果</div>
            </div>
            <div class="div1">
              <div class="ul">预计收成</div>
              <div class="li">491斤</div>
            </div>
            <div class="div1">
              <div class="ul">预计收入</div>
              <div class="li">569198元</div>
            </div>
            <div class="div1">
              <div class="ul">施工后</div>
              <div class="li">百香果酱</div>
            </div>
            <div class="div1">
              <div class="ul">预计收成</div>
              <div class="li">200斤</div>
            </div>
            <div class="div1">
              <div class="ul">实际</div>
              <div class="li">291斤</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts"
export default {
  data() {
    return {
      list: [
        {
          name: "科研地块1",
          address: "(京都一号)",
          imgurl: "组 230.png",
          id: 1,
          flag: false
        },
        {
          name: "科研地块2",
          address: "(京都二号)",
          imgurl: "组 230.png",
          id: 2,
          flag: false
        },
        {
          name: "科研地块3",
          address: "(京都三号)",
          imgurl: "组 230.png",
          id: 3,
          flag: false
        },
        {
          name: "科研地块4",
          address: "(京都四号)",
          imgurl: "组 230.png",
          id: 4,
          flag: false
        }
      ]
    }
  },
  methods: {
    getImageUrl(imageName) {
      // 动态引入图片
      return require(`@/assets/${imageName}`)
    },
    // item.imgurl = '组 230(1).png'
    prompt(id) {
      this.list.forEach((item) => {
        if (item.id == id) {
          item.imgurl = "组 230(1).png"
          item.flag = true
        } else {
          item.imgurl = "组 230.png"
          item.flag = false
        }
      })
    }
    // aaa() {
    //   this.list.forEach((item) => {
    //     item.flag = false
    //   })
    // }
  },
  mounted() {
    var chartDom = document.getElementById("echarts")
    var myChart = echarts.init(chartDom)
    var option

    // 图表渲染参数开始
    option = {
      tooltip: {
        trigger: "item",
        // formatter: "{b} : {d}%"
        formatter: function (a) {
          var c = a.name
          var d = c.split(":")
          return d[0] + " : " + a.percent + "%"
        }
      },
      legend: [
        {
          icon: "square",
          orient: "vertical",
          left: "left",
          top: "center",
          itemGap: 18,
          padding: 15,
          textStyle: {
            color: "#fff",
            padding: [0, 0, 0, -5]
          },
          data: ["警: 90", "自危害: 120", "攻击入侵: 110"]
          // data: dataResult.name[0]
        },
        {
          icon: "square",
          orient: "vertical",
          left: "right",
          top: "center",
          itemGap: 18,
          padding: 15,
          textStyle: {
            color: "#fff",
            padding: [0, -100, 0, -60]
          },
          data: ["安全预警: 150", "信息刺探: 70", "恶意代码: 60"]
          // data: dataResult.name[1]
        }
      ],
      grid: {
        right: 100
      },
      series: [
        {
          type: "pie",
          radius: ["40%", "60%"],
          center: ["50%", "50%"],

          label: {
            normal: {
              show: false
            }
          },
          labelLine: {
            normal: {
              show: false,
              length2: 10
            }
          },
          data: [
            {
              value: 90,
              // value: dataResult.value[3],
              name: "警" + ": " + 90,
              // name: dataResult.name[0][3],
              itemStyle: {
                normal: {
                  color: "#ffff00"
                }
              }
            },
            {
              value: 120,
              // value: dataResult.value[4],
              name: "自危害" + ": " + 120,
              // name: dataResult.name[0][4],
              itemStyle: {
                normal: {
                  color: "#ff0000"
                }
              }
            },

            {
              value: 110,
              // value: dataResult.value[5],
              name: "攻击入侵" + ": " + 110,
              // name: dataResult.name[0][5],
              itemStyle: {
                normal: {
                  color: "#ff1a40"
                }
              }
            },

            {
              value: 150,
              // value: dataResult.value[9],
              name: "安全预警" + ": " + 150,
              // name: dataResult.name[1][3],
              itemStyle: {
                normal: {
                  color: "#0000ff"
                }
              }
            },

            {
              value: 70,
              // value: dataResult.value[10],
              name: "信息刺探" + ": " + 70,
              // name: dataResult.name[1][4],
              itemStyle: {
                normal: {
                  color: "#de3d1c"
                }
              }
            },
            {
              value: 60,
              // value: dataResult.value[11],
              name: "恶意代码" + ": " + 60,
              // name: dataResult.name[1][5],
              itemStyle: {
                normal: {
                  color: "#4ec968"
                }
              }
            }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    }

    option && myChart.setOption(option)
  }
}
</script>
<style lang="scss" scoped>
.div {
  height: 800px;
  .top {
    width: 100%;
    height: 70%;
    /* background-color: #000000; */
    // opacity: 0.5;
    color: #fff;
    position: relative;
    div {
      &:nth-of-type(1) {
        position: absolute;
        left: 150px;
        top: 70px;
        position: relative;
        .prompt {
          position: absolute;
          left: 100px;
          top: 0;
          text-align: center;
          border: 1px solid #ccc;
          border-radius: 5px;
          background: rgba(12, 30, 22, 0.6);
          width: 200px;
          height: 160px;
          img {
            margin-top: 10px;
          }
          span {
            display: block;
            width: 100%;
            height: 30px;
            // text-align: center;
            line-height: 30px;
          }
          p {
            height: 30px;
            padding: 5px;
            // box-sizing: border-box;
            line-height: 30px;
            border-bottom: 1px solid #ccc;
            font-style: italic;
            display: flex;
            align-items: center;
            img {
              width: 20px;
              height: 20px;
              margin-bottom: 5px;
            }
          }
        }
      }
      &:nth-of-type(2) {
        position: absolute;
        left: 270px;
        top: 200px;
        .prompt {
          position: absolute;
          left: 100px;
          top: 0;
          text-align: center;
          border: 1px solid #ccc;
          border-radius: 5px;
          background: rgba(12, 30, 22, 0.6);
          width: 200px;
          height: 160px;
          img {
            margin-top: 10px;
          }
          span {
            display: block;
            width: 100%;
            height: 30px;
            // text-align: center;
            line-height: 30px;
          }
          p {
            height: 30px;
            padding: 5px;
            // box-sizing: border-box;
            line-height: 30px;
            border-bottom: 1px solid #ccc;
            font-style: italic;
            display: flex;
            align-items: center;
            img {
              width: 20px;
              height: 20px;
              margin-bottom: 5px;
            }
          }
        }
      }
      &:nth-of-type(3) {
        position: absolute;
        left: 370px;
        bottom: 30px;
        .prompt {
          position: absolute;
          left: 100px;
          top: 0;
          text-align: center;
          border: 1px solid #ccc;
          border-radius: 5px;
          background: rgba(12, 30, 22, 0.6);
          width: 200px;
          height: 160px;
          img {
            margin-top: 10px;
          }
          span {
            display: block;
            width: 100%;
            height: 30px;
            // text-align: center;
            line-height: 30px;
          }
          p {
            height: 30px;
            padding: 5px;
            // box-sizing: border-box;
            line-height: 30px;
            border-bottom: 1px solid #ccc;
            font-style: italic;
            display: flex;
            align-items: center;
            img {
              width: 20px;
              height: 20px;
              margin-bottom: 5px;
            }
          }
        }
      }
      &:nth-of-type(4) {
        position: absolute;
        right: 180px;
        bottom: 60px;
        .prompt {
          position: absolute;
          left: 100px;
          top: 0;
          text-align: center;
          border: 1px solid #ccc;
          border-radius: 5px;
          background: rgba(12, 30, 22, 0.6);
          width: 200px;
          height: 160px;
          img {
            margin-top: 10px;
          }
          span {
            display: block;
            width: 100%;
            height: 30px;
            // text-align: center;
            line-height: 30px;
          }
          p {
            height: 30px;
            padding: 5px;
            // box-sizing: border-box;
            line-height: 30px;
            border-bottom: 1px solid #ccc;
            font-style: italic;
            display: flex;
            align-items: center;
            img {
              width: 20px;
              height: 20px;
              margin-bottom: 5px;
            }
          }
        }
      }
    }
  }
  .bottom {
    width: 100%;
    height: 30%;
    /* background-color: #000000; */
    /* opacity: 0.5; */
    display: flex;
    // height: 100%;
    justify-content: space-between;
    .left1 {
      border-radius: 5px;
      width: 55%;
      height: 240px;
      background: rgba(12, 30, 22, 0.6);
      /* background-color: chartreuse; */
      border: 1px solid #ccc;
      color: #fff;
      .text {
        width: 100%;
        box-sizing: border-box;
        padding: 0 15px;
        height: 40px;
        line-height: 40px;
        /* text-align: center; */
        font-size: 20px;
        /* 字体倾斜 */

        font-style: italic;
        font-weight: 600;
        border-bottom: 1px solid #ccc;

        img {
          width: 30px;
          height: 30px;
          /* margin-right: 10px; */
          vertical-align: middle;
        }
      }
    }
    .right1 {
      width: 40%;
      height: 240px;
      border: 1px solid #ccc;
      background: rgba(12, 30, 22, 0.6);
      border-radius: 5px;
      color: #fff;
      /* background-color: chocolate; */
      .detail {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        .div1 {
          flex: 30%;
          text-align: center;
          padding: 5px;
          margin-top: 15px;
          .li {
            color: yellow;
            margin-top: 8px;
          }
        }
      }
      .text {
        width: 100%;
        box-sizing: border-box;
        padding: 0 15px;
        height: 40px;
        line-height: 40px;
        /* text-align: center; */
        font-size: 20px;
        /* 字体倾斜 */

        font-style: italic;
        font-weight: 600;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
          width: 30px;
          height: 30px;
          /* margin-right: 10px; */
          vertical-align: middle;
        }
        .boxShadow {
          font-size: 14px;
          span {
            &:nth-of-type(1) {
              display: inline-block;
              border-radius: 50px 0 0 50px;
              background: rgba(91, 103, 51, 0.9);
              padding: 0 10px;
              height: 30px;
              line-height: 30px;
              /* text-align: center; */
              font-size: 14px;
              font-weight: normal;
              /* 字体倾斜 */
              font-style: normal;
            }

            &:nth-of-type(2) {
              display: inline-block;
              border-radius: 0 50px 50px 0;
              background: rgba(24, 52, 40, 0.9);
              padding: 0 10px;
              height: 30px;
              line-height: 30px;
              /* text-align: center; */
              font-size: 14px;
              font-weight: normal;
              /* 字体倾斜 */
              font-style: normal;
            }
          }
        }
      }
    }
  }
}
</style>
