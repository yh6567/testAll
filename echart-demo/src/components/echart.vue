<template>
  <div class="hello">
    <div id="myChart" :style="{ width: '300px', height: '300px' }"></div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      let option = {
        backgroundColor: '#072B79',
        tooltip: {
          formatter: '{b}{c}'
        },
        series: [
          // {
          //   tooltip: {
          //     show: false
          //   },
          //   name: 'wrap',
          //   type: 'pie',
          //   hoverAnimation: false,
          //   legendHoverLink: false,
          //   center: ['50%', '60%'],
          //   radius: ['0%', '7%'],
          //   z: 5,
          //   label: {
          //     normal: {
          //       show: false,
          //       position: 'center'
          //     },
          //     emphasis: {
          //       show: false
          //     }
          //   },
          //   labelLine: {
          //     normal: {
          //       show: false
          //     }
          //   },
          //   data: [
          //     {
          //       value: 100,
          //       itemStyle: {
          //         normal: {
          //           color: '#072B79'
          //         },
          //         emphasis: {
          //           color: '#072B79'
          //         }
          //       }
          //     }
          //   ]
          // },
          // {
          //   tooltip: {
          //     show: false
          //   },
          //   name: 'wrap',
          //   type: 'pie',
          //   hoverAnimation: false,
          //   legendHoverLink: false,
          //   center: ['50%', '60%'],
          //   radius: ['6%', '8%'],
          //   z: 5,
          //   label: {
          //     normal: {
          //       show: false,
          //       position: 'center'
          //     },
          //     emphasis: {
          //       show: false
          //     }
          //   },
          //   labelLine: {
          //     normal: {
          //       show: false
          //     }
          //   },
          //   data: [
          //     {
          //       value: 100,
          //       itemStyle: {
          //         normal: {
          //           color: '#24D8E7'
          //         },
          //         emphasis: {
          //           color: '#24D8E7'
          //         }
          //       }
          //     }
          //   ]
          // },
          {
            tooltip: {
              show: false
            },
            name: '刻度',
            type: 'gauge',
            radius: '89%',
            z: 1,
            min: 0,
            max: 1,
            center: ['50%', '60%'],
            splitNumber: 1, // 刻度数量
            startAngle: 180, // 刻度开始的位置
            endAngle: 0, // 刻度结束的位置 计算公式 180 - (180 / value)
            axisLine: { // 最外边的圈
              show: true,
              lineStyle: {
                width: 5,
                color: [[0.09, '#fff'],[1,'#000000']]
                // [
                //   [0.2, '#E71A6D'],
                //   [0.4, '#F88168'],
                //   [0.6, '#FBF76B'],
                //   [0.8, '#7AD4DF'],
                //   [1, '#70C27E']
                // ]
              }
            }, // 仪表盘轴线
            axisLabel: {
              show: false
            }, // 刻度标签。
            axisTick: { //外侧的线
              show: false,
              lineStyle: {
                color: 'auto',
                width: 0
              },
              length: -15
            }, // 刻度样式
            splitLine: {
              show: true,
              length: 0,
              lineStyle: {
                color: 'auto',
                width: 2
              }
            }, // 分隔线样式
            detail: {
              show: false
            },
          },
          {
            name: '本期',
            type: 'gauge',
            radius: '79%',
            center: ['50%', '60%'],
            data: [
              {
                value: 0.09,
                name: '本期', //百分比上面文字
              }
            ],
            splitNumber: 12, // 刻度数量
            startAngle: 180, // 刻度开始的位置
            endAngle: 0, // 刻度结束的位置 计算公式 180 - (180 / value)
            z: 9,
            axisLine: {
              show: true,
              lineStyle: {
                width: 0,
                color: [[0.09, '#fff'],[1,'#000000']]
                // color: [
                //   [0.12, '#E71A6D'],
                //   [0.35, '#F88168'],
                //   [0.63, '#FBF76B'],
                //   [0.8, '#7AD4DF'],
                //   [1, '#70C27E']
                // ]
              }
            }, // 仪表盘轴线
            axisLabel: {
              show: true,
              color: '#fff',
              fontSize: 20,
              distance: -70,
              formatter: function (params) {
                // var value = params.toFixed(2)
                return ''
                // if (value == 0.0) {
                //   return ''
                // } else if (value == 0.25) {
                //   return ''
                // } else if (value == 0.5) {
                //   return ''
                // } else if (value == 0.75) {
                //   return ''
                // } else if (value == 1.0) {
                //   return ''
                // } else {
                  
                // }
              }
            }, // 刻度标签。
            axisTick: {
              splitNumber: 2,
              show: true,
              lineStyle: {
                // color: [[0.09, '#fff'],[1,'#000000']], // 刻度颜色
                color: 'auto', // 刻度颜色
                width: 2,
              },
              length: 4
            }, // 刻度样式
            splitLine: {
              show: false,// 外层长线
              length: 25,
              lineStyle: {
                color: 'auto',
                width: 1
              }
            }, // 分隔线样式
            itemStyle: {// 指针
              normal: {
                color: '#24D8E7' // 指针颜色
              }
            },
            pointer: { // 指针的宽度
              width: 0,
              length: '80%'
            },
            detail: {
              // 中间显示的文字
              formatter: function (params) {
                return (params * 100).toFixed(0) + '%'
              },
              fontSize: 50,
              color: '#fff',
              offsetCenter: ['0%', '-30%']
            },
            title: {
              offsetCenter: ['0', '40%'],
              fontSize: 20,
              color: '#fff',
              show: true
            }
          }
        ]
      }
      myChart.setOption(option)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
