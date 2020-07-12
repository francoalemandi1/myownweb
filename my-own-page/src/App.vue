<template>
  <div class="app" :class="mode">
    <Navbar href="#about-me" href1="#resume" href2="#contact" :mode="mode" @toggle="toggle" />
    <Main id="about-me" :mode="mode" />
    <Resume id="resume" />
    <Footer id="contact" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Main from '@/components/Main.vue';
import Resume from '@/components/Resume.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  data() {
    return {
      mode: 'light'
    }
  },
  components: {
    Navbar,
    Main,
    Resume,
    Footer,
  },
  created () {
    window.addEventListener('keyup', this.keyPress)
  },
  methods: {
    keyPress (e) {
      if (e.key === 't') {
        this.toggle()
      }
    },
    toggle () {
      if (this.mode === "dark") {
        this.mode = "light"
      } else {
        this.mode = "dark"
      }
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  width: 100vw;
  min-height: 100vh;
  background: #F3F3F3;
  transition: background 0.3s ease-in-out;
}
.dark {
  background: #192734;
  color: #E8E8E8;
}
</style>
