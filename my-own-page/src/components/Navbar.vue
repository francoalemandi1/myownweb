<template>
  <main class="main-content">
    <div class="container mr-1">
      <nav class="navbar">
        <div class="navbar-brand">
          <div class="brand-size ml-5" style="position: relative; left: 1em;">FDA.</div>
        </div>
        <div class="navbar-menu mr-6 pr-6">
          <div class="navbar-end">
            <a class="item mr-4 pr-2">{{ $t('home') }}</a>
            <a class="item mr-4 pr-2" :href="href" @click.prevent='scroll'>{{ $t('about') }}</a>
            <a class="item mr-4 pr-2" :href1="href1" @click.prevent='scroll1'>{{ $t('experience') }}</a>
            <a class="item mr-4 pr-2" :href2="href2" @click.prevent='scroll2'>{{ $t('contact') }}</a>
            <div class="dropdown mr-4 pr-4 mt-4">
              <a class="dropbtn">{{ $t('language') }}</a>
              <div class="dropdown-content">
                <a class="other-item mr-4 pr-2" @click="selectLang('en')">EN</a>
                <a class="other-item mr-4 pr-2" @click="selectLang('es')">ES</a>
              </div>
            </div>
            <Toggle :mode="mode" @toggle="$emit('toggle')" />
          </div>
        </div>
      </nav>
      <div class="columns mt-6 pt-6 ml-6">
        <div class="column"></div>
      </div>
      <div class="columns mt-4 pt-6 ml-6">
        <div class="column"></div>
      </div>
      <div class="columns mt-6 mb-6 ml-6 pb-6" style="position: relative; left: -10px;">
        <div class="column is-half">
          <p class="is-size-2" style="position: relative; left: 6px;" ref="about-me">
            {{ $t('shortdescription') }}
          </p>
        </div>
      </div>
      <div class="columns mt-6 pt-6">
        <div class="column"></div>
      </div>
       <div class="columns mt-6 pt-6">
        <div class="column"></div>
      </div>
       <div class="columns mt-4 pt-4">
        <div class="column"></div>
      </div>
    </div>
  </main>
</template>

<script>
import Toggle from '@/components/Toggle.vue';

export default {
  name: 'Navbar',
  data() {
    return {
    }
  },
  props: ['href', 'href1', 'href2', 'mode'],
  components: {
    Toggle,
  },
  methods: {
    scroll() {
      document.querySelector(this.href).scrollIntoView({ behavior: 'smooth' });
    },
    scroll1() {
      document.querySelector(this.href1).scrollIntoView({ behavior: 'smooth' });
    },
    scroll2() {
      document.querySelector(this.href2).scrollIntoView({ behavior: 'smooth' });
    },
    selectLang(lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>

<style scoped>
  .brand-size{
    font-size: 42px;
    position: relative;
  }
  .main-content,
  .navbar,
  .container{
    background-color: rgb(247, 242, 234);
  }

  .item:hover{
    background-color: rgb(247, 242, 234);
    color: rgb(204, 120, 120);
  }
  .item {
  color: rgb(136, 34, 34);
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  bottom: 0;
  display: inline-block;
  padding: 15px 20px;
  position: relative;
}
.item:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: rgb(204, 120, 120);
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.item:hover:after { 
  width: 100%; 
  left: 5px; 
}

/* Theme */

.dark .main-content {
  background: #15202B;
}

.dark .container {
  background: #15202B;
}

.dark .navbar {
  background: #15202B;
}

.dark .item {
  color: #E8E8E8;
}
.dark .item:hover{
    background-color: #15202B;
    color: #E8E8E8;
  }
.dark .item:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #E8E8E8;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.dark .item:hover:after { 
  width: 100%; 
  left: 5px; 
}

/* Dropdown Button */
.dropbtn {
  background-color: rgb(247, 242, 234) ;
  color: rgb(136, 34, 34);
  font-size: 16px;
  border: none;
}

.dark .dropbtn {
  background-color: #15202B;
  color: #E8E8E8;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  top: -2px;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: rgb(245, 243, 241);
  min-width: 60px;
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 6px 18px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

</style>