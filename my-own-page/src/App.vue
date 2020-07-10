<template>
  <div id="app">
    <Navbar />
    <Main />
    <Resume />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Main from '@/components/Main.vue';
import Resume from '@/components/Resume.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Main,
    Resume,
  }
}
</script>

<style lang="scss">

</style>
