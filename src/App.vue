<template>
 <div id="mainstream" class="mainstream relative">
    <nav>
      <Navbar />
    </nav>
    <div class="relative mb-2">
      <router-view/>
    </div>
    <footer class="absolute bottom-0 right-0 left-0 pt-2">
      <Footer />
    </footer>
 </div>
</template>

<script>
// import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue"
import Navbar from "@/components/NavBar.vue"
export default {
  components: {
    Footer,
    Navbar
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}

.mainstream{
  min-height: 100vh;
  position: relative;
  font-family: 'Roboto', sans-serif;
  padding-bottom: 10px;
}

.mainstream::before{
  content: " ";
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-image: url('./assets/img/bggg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: limegreen;
  opacity: 0.65;
}
</style>