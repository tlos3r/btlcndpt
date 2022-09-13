<template>
   <section class="container">
      <div class="row">
         <div class="col-12">
            <h1 class="rainbow-text">Bài tập lớn môn Công nghệ đa phương tiện</h1>
            <ul>
               <li><router-link :to="{ name: 'Home' }">Trang chủ</router-link></li>
               <li><router-link :to="{ name: 'introduce' }">Thành viên</router-link></li>
               <li><router-link :to="{ name: 'videomain' }">Video</router-link></li>
            </ul>
            <router-view></router-view>
         </div>
      </div>
   </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
run html,
body {
   background: linear-gradient(to right, #d5eaf5, #f5ddda);
}
@keyframes Animation {
   0% {
      background-position: 10% 0%;
   }
   50% {
      background-position: 91% 100%;
   }
   100% {
      background-position: 10% 0%;
   }
}
.rainbow-text {
   background: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
   background-size: 200% 200%;
   background-clip: text;
   -webkit-text-fill-color: transparent;
   animation-name: Animation;
   animation-duration: 5s;
   animation-iteration-count: infinite;
   animation-direction: alternate;
   animation-timing-function: linear;
}
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   font-size: 20px;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   margin-top: 60px;
   color: #112d4e;
   section {
      background-color: #f9f7f7;
   }
   ul {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
         padding: 15px;
         list-style: none;
         a {
            position: relative;
         }
         a:hover {
            text-decoration: none;
         }
         a.router-link-exact-active {
            border-bottom: 2px solid #2cccff;
         }
      }
   }
}
</style>
