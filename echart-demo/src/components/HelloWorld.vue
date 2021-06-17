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
      msg: 'Welcome to Your Vue.js App',
      angle: 0
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    getCirlPoint (x0, y0, r, angle) {
      let x1 = x0 + r * Math.cos((angle * Math.PI) / 180)
      let y1 = y0 + r * Math.sin((angle * Math.PI) / 180)
      return {
        x: x1,
        y: y1
      }
    },
    draw (myChart, option) {
      this.angle = this.angle + 3
      myChart.setOption(option, true)
      // window.requestAnimationFrame(draw);
    },
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      let _this = this
      let value = 0
      var timerId
      let option = {
        backgroundColor: '#000E1A',
        title: [
          {
            // 多级title 可以实现
            text: '·',
            x: 'center',
            y: 'center',
            textStyle: {
              color: '#ccc',
              fontSize: 20,
              rich: {
                c: {
                  fontSize: 20,
                  color: '#ffffff'
                  // padding: [5,0]
                }
              }
            }
          },
          {
            // text: '{a|' + value + '}{c|%}',
            text: '000',
            x: 'center',
            y: '8%',
            textStyle: {
              color: '#ccc',
              fontSize: 8,
              rich: {
                c: {
                  fontSize: 12,
                  color: '#ffffff'
                  // padding: [5,0]
                }
              }
            }
          },
          {
            // text: '{a|' + value + '}{c|%}',
            text: '000',
            x: 'center',
            y: '88%',
            textStyle: {
              color: '#ccc',
              fontSize: 8,
              rich: {
                c: {
                  fontSize: 12,
                  color: '#ffffff'
                  // padding: [5,0]
                }
              }
            }
          }
        ],
        series: [
          {
            name: '值域占比',
            type: 'pie', // line ——-折线图  bar ——-柱状图 pie ——-饼图
            radius: '85%', // 可以使用数组 不使用数组的时候是整体大小 【上下的大小，左右的大小】
            hoverAnimation: false, // 是否移入改变饼图大小
            color: 'rgba(255, 255, 255, 0.2)', // 单个图的背景颜色 进制不能使用通明 所以使用rgba
            center: ['50%', '50%'], // 位置【上下，左右】
            data: [{ value: 0 }] // 必填 可以为空数组
          },
          {
            name: '值域占比1',
            type: 'pie',
            radius: ['10%', '25%'],
            hoverAnimation: false, // 是否移入改变饼图大小
            color: 'rgba(255, 255, 255)',
            center: ['50%', '50%'],
            data: [
              {
                value: 0,
                label: {
                  // 描述的文字是name
                  normal: {
                    // 静态的时候显示的默认样式
                    position: 'inner' // inner 默认 top bottom right left inside(内部中央) insideTop(内部靠顶部) 可以使用【x,y】
                  }
                },
                labelLine: {
                  // 线
                  normal: {
                    show: false
                  }
                }
              }
            ]
          },
          // 蓝色
          {
            name: 'ring5',
            type: 'custom', // 类型，自定义
            coordinateSystem: 'none', // none 不使用 cartesian2d 二维的直角坐标系  polar 极坐标系 geo 地理坐标系 一般是用于地图
            renderItem: function (params, api) {
              // 函数
              return {
                type: 'arc', // 弧线
                shape: {
                  cx: api.getWidth() / 2, // x轴
                  cy: api.getHeight() / 2, // Y轴
                  r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6, // 位置相对于圆心的位置
                  // startAngle: ((-180 + _this.angle) * Math.PI) / 180,
                  startAngle: -30, // 起始位置
                  endAngle: ((270 + _this.angle) * Math.PI) / 180 // 结束位置 有个疑惑这个位置好像不是角度
                },
                style: {
                  // 弧线的样式
                  stroke: '#4386FA',
                  fill: 'transparent',
                  lineWidth: 1.5
                },
                silent: true
              }
            },
            data: [0]
          },
          // {
          //   name: 'ring5', // 蓝色
          //   type: 'custom',
          //   coordinateSystem: 'none',
          //   renderItem: function (params, api) {
          //     let x0 = api.getWidth() / 2
          //     let y0 = api.getHeight() / 2
          //     let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6
          //     let point = _this.getCirlPoint(x0, y0, r, 180 + _this.angle)
          //     return {
          //       type: 'circle',
          //       shape: {
          //         cx: point.x,
          //         cy: point.y,
          //         r: 4
          //       },
          //       style: {
          //         stroke: '#4386FA', // 绿
          //         fill: '#4386FA'
          //       },
          //       silent: true
          //     }
          //   },
          //   data: [0]
          // },

          {
            name: 'ring5',
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: function (params, api) {
              return {
                type: 'arc',
                shape: {
                  cx: api.getWidth() / 2,
                  cy: api.getHeight() / 2,
                  r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.75,
                  startAngle: ((270 + -_this.angle) * Math.PI) / 180,
                  endAngle: ((40 + -_this.angle) * Math.PI) / 180
                },
                style: {
                  stroke: '#0CD3DB',
                  fill: 'transparent',
                  lineWidth: 1.5
                },
                silent: true
              }
            },
            data: [0]
          },
          // 橘色

          {
            name: 'ring5',
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: function (params, api) {
              return {
                type: 'arc',
                shape: {
                  cx: api.getWidth() / 2,
                  cy: api.getHeight() / 2,
                  r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.75,
                  startAngle: ((90 + -_this.angle) * Math.PI) / 180,
                  endAngle: ((220 + -_this.angle) * Math.PI) / 180
                },
                style: {
                  stroke: '#FF8E89',
                  fill: 'transparent',
                  lineWidth: 1.5
                },
                silent: true
              }
            },
            data: [0]
          },
          {
            name: 'ring5',
            type: 'custom',
            coordinateSystem: 'none',
            // renderItem: function (params, api) {
            //   let x0 = api.getWidth() / 2
            //   let y0 = api.getHeight() / 2
            //   let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65
            //   let point = _this.getCirlPoint(x0, y0, r, 90 + -_this.angle)
            //   return {
            //     type: 'circle',
            //     shape: {
            //       cx: point.x,
            //       cy: point.y,
            //       r: 4
            //     },
            //     style: {
            //       stroke: '#FF8E89', // 粉
            //       fill: '#FF8E89'
            //     },
            //     silent: true
            //   }
            // },
            data: [0]
          },
          {
            name: 'ring5', // 绿点
            type: 'custom',
            coordinateSystem: 'none',
            // 去掉线头的圆
            // renderItem: function (params, api) {
            //   let x0 = api.getWidth() / 2
            //   let y0 = api.getHeight() / 2
            //   let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65
            //   let point = _this.getCirlPoint(x0, y0, r, 270 + -_this.angle)
            //   return {
            //     type: 'circle',
            //     shape: {
            //       cx: point.x,
            //       cy: point.y,
            //       r: 4
            //     },
            //     style: {
            //       stroke: '#0CD3DB', // 绿
            //       fill: '#0CD3DB'
            //     },
            //     silent: true
            //   }
            // },
            data: [0]
          },
          // 线
          {
            name: 'ring5',
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: function (params, api) {
              return {
                type: 'arc',
                shape: {
                  cx: api.getWidth() / 2,
                  cy: api.getHeight() / 2,
                  r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.35,
                  // startAngle: 180,
                  endAngle: 10,
                  startAngle: 0
                },
                style: {
                  stroke: '#fff',
                  fill: 'transparent',
                  lineWidth: 1.5
                },
                silent: true
              }
            },
            data: [0]
          },
          // 中間的半圆 饼图用通明
          {
            name: '吃猪肉频率',
            type: 'pie',
            radius: ['45%', '46%'],
            hoverAnimation: false, // 是否移入改变饼图大小
            startAngle: 0, // 起始角度
            label: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: 50,
                itemStyle: {
                  normal: {
                    color: '#fff'
                  }
                }
              },
              // 最中间的宽度的圆圈
              {
                value: 50,
                name: '',
                label: {
                  normal: {
                    show: false
                  }
                },
                itemStyle: {
                  normal: {
                    color: 'rgba(255, 255, 255, 0)'
                  }
                }
              }
            ]
          },
          {
            name: '',
            type: 'gauge',
            radius: '55%',
            center: ['50%', '50%'],
            startAngle: 0,
            endAngle: 180,
            splitNumber: 1,
            hoverAnimation: true,
            axisTick: {
              show: false
            },
            splitLine: {
              length: 15,
              lineStyle: {
                width: 2,
                color: '#02B1FF'
              }
            },
            axisLabel: {
              show: false
            },
            pointer: {
              show: false
            },
            axisLine: {
              lineStyle: {
                opacity: 0
              }
            },
            detail: {
              show: false
            },
            data: [0]
          },
          {
            name: '',
            type: 'gauge',
            radius: '55%',
            center: ['25%', '26%'],
            startAngle: 0,
            endAngle: 180,
            splitNumber: 0,
            hoverAnimation: true,
            axisTick: {
              show: false
            },
            splitLine: {
              length: 15,
              lineStyle: {
                width: 2,
                color: '#02B1FF'
              }
            },
            axisLabel: {
              show: false
            },
            pointer: {
              show: false
            },
            axisLine: {
              lineStyle: {
                opacity: 0
              }
            },
            detail: {
              show: false
            },
            data: [0]
          },
          // 最外圈的点
          {
            type: 'gauge',
            radius: '67%',
            startAngle: 0,
            endAngle: 360,
            z: 2,
            axisTick: {
              show: true,
              lineStyle: {
                color: '#fff',
                width: 1
              },
              length: 2
            }, // 刻度样式
            splitLine: {
              show: true,
              lineStyle: {
                color: '#fff',
                width: 1
              },
              length: 2 // 这个修改仪表盘的x轴的宽度
            }, // 分隔线样式
            axisLabel: {
              color: 'rgba(255,255,255,0)',
              fontSize: 12
            }, // 刻度节点文字颜色
            pointer: {
              show: false
            },
            axisLine: {
              show: false
            },
            label: {
              show: false
            },
            // 仪表盘详情，用于显示数据。
            detail: {
              show: true,
              offsetCenter: [15, '100%'],
              color: '#fff',
              formatter: function (params) {
                return ''
              },
              textStyle: {
                fontSize: 20
              }
            }
          }
        ]
      }
      if (timerId) {
        clearInterval(timerId)
      }
      timerId = setInterval(function () {
        // 用setInterval做动画感觉有问题
        _this.draw(myChart, option)
      }, 100)
      // myChart.setOption(option)
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
