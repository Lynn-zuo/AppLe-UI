<template>
  <div id="home">
    <TopNav />
    <div class="banner" id="home-banner">
      <h1><a class="Doc-title" href="">AppLe-UI</a></h1>
      <p class="description">一个有点可爱的简洁UI</p>
      <p class="actions">
        <a href="https://github.com/Lynn-zuo" target="_blank">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
    <canvas id="background"></canvas>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue'
import {Round_item} from '../utils/Round_item.js'

let canvas;
let content;
export default {
  data () {
    return {
    }
  },
  components: {
    TopNav
  },
  mounted() {
    // 绘制canvas图像
	  this.initCanvas();
    // 监听窗口缩放自适应
    window.onresize = () => {
      return (() => {
        this.initCanvas();
      })()
    }
  },
  methods: {
    initCanvas(){
      var canvas = document.getElementById("background") as HTMLCanvasElement; // HTMLCanvasElement
      var ctx = canvas.getContext("2d");
      var WIDTH, HEIGHT, initRoundPopulation = 99;
      WIDTH = document.documentElement.clientWidth;
      HEIGHT = document.documentElement.clientHeight; // 高度改为getElementById('home-banner')，则鼠标移动事件失效,因为banner遮盖住了canvas
      canvas.width = WIDTH;
      canvas.height = HEIGHT;

      // 创建小球的构造函数
      function Ball() {
        this.x = randomNum(3, canvas.width - 3);
        this.y = randomNum(3, canvas.height - 3);
        this.r = randomNum(1, 3);
        this.color = randomColor();
        this.speedX = randomNum(-3, 3) * 0.1;
        this.speedY = randomNum(-3, 3) * 0.1;
      }
      // 在构造函数的原型上添加方法函数
      Ball.prototype = {
        //绘制小球
        draw: function () {
          ctx.beginPath();
          ctx.globalAlpha = 1; // 设置图形和图片透明度的属性
          ctx.fillStyle = this.color; // 填充颜色
          ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); // 画圆弧方法
          ctx.fill(); // 填充当前或已存在的路径
        },
        //小球移动
        move: function () {
          this.x += this.speedX;
          this.y += this.speedY;
          //为了合理性,设置极限值
          if (this.x <= 3 || this.x > canvas.width - 3) {
            this.speedX *= -1;
          }
          if (this.y <= 3 || this.y >= canvas.height - 3) {
            this.speedY *= -1;
          }
        }
      };
      // 存储所有的小球
      var balls = [];
      // 创建initRoundPopulation个小球
      for (var i = 0; i < initRoundPopulation; i++) {
        var ball = new Ball();
        balls.push(ball);
      }
      main();
      // 动画
      function main() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // 鼠标移动绘制线
        mouseLine();
        // 小球与小球之间自动画线
        drawLine();
        // 使用关键帧动画，不断的绘制和清除
        window.requestAnimationFrame(main);
      }
      // 添加鼠标移动事件
      // 记录鼠标移动时的mouseX坐标
      var mouseX;
      var mouseY;
      canvas.onmousemove = function (e) {
        var ev = event || e;
        mouseX = ev.offsetX;
        mouseY = ev.offsetY;
      }
      //判断是否划线
      function drawLine() {
        for (var i = 0; i < balls.length; i++) {
          balls[i].draw();
          balls[i].move();
          for (var j = 0; j < balls.length; j++) {
            if (i != j) {
              if (Math.sqrt(Math.pow((balls[i].x - balls[j].x), 2) + Math.pow((balls[i].y - balls[j].y), 2)) < 100) {
                ctx.beginPath();
                ctx.moveTo(balls[i].x, balls[i].y); // 将一个新的子路径的起始点移动到(x，y)坐标
                ctx.lineTo(balls[j].x, balls[j].y); // 使用直线连接子路径的终点到x，y坐标（并不会真正地绘制）
                ctx.strokeStyle = "#DE6262"; // 描述画笔（绘制图形）颜色或者样式
                ctx.globalAlpha = 0.1; // 透明度
                ctx.stroke(); // 非零环绕规则，根据当前的画线样式，绘制当前或已经存在的路径
              }
            }
          }
        }
      }
      // 使用鼠标移动划线
      function mouseLine() {
        for (var i = 0; i < balls.length; i++) {
          if (Math.sqrt(Math.pow((balls[i].x - mouseX), 2) + Math.pow((balls[i].y - mouseY), 2)) < 100) {
            ctx.beginPath();
            ctx.moveTo(balls[i].x, balls[i].y);
            ctx.lineTo(mouseX, mouseY);
            ctx.strokeStyle = "#DE6262";
            ctx.globalAlpha = 0.6;
            ctx.stroke();
          }
        }
      }
      // 随机函数
      function randomNum(m, n) {
        return Math.floor(Math.random() * (n - m + 1) + m);
      }
      // 修改小球颜色(可随机)
      function randomColor() {
        return "rgb(47, 147, 247, 0.7)";
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$h:2.2rem;
#background {
  position: absolute; // fixed相对于窗口定位
  top: 4.5rem;
  left: 0;
  z-index: -100;
  background: #DAE2F8;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #FFFFFF, #DAE2F8);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #FFFFFF, #DAE2F8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.banner {
  width: 100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  height: 18rem;
  > h1 {
    margin: 1rem 0;
    font-size: 5rem;
  }
  > .description {
    font-size:1.2rem;
    margin-top:1rem;
  }
  > .actions {
    padding:1rem 0;
    > a{
      font-size: 1.3rem;
      margin: 3rem 1rem;
      background: #fff;
      display: inline-block;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      border: 1px solid #3366FF;
      padding: 0 1rem;
      &:hover {
        color: #3366FF;
      }
    }
  }
  @media (max-width:500px) {
    > h1 {margin: 1rem 0; font-size: 3.5rem;}
  }
  @media (max-width:300px) {
    > h1 {margin: 1rem 0; font-size: 2rem;}
  }
}
</style>

<style scoped>
div.topnav ::v-deep(span.toggleAside){
  display:none;
}
</style>