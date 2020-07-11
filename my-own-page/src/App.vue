<template>
  <div class="app">
    <Navbar href="#about-me" href1="#resume" href2="#contact"/>
    <Main id="about-me"/>
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
    }
  },
  components: {
    Navbar,
    Main,
    Resume,
    Footer,
  },
}
</script>

<style>
</style>
