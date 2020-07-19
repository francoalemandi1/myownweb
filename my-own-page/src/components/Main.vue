<template>
  <main>
    <div class="container is-centered mt-6">
      <div class="columns mt-6">
        <div class="column is-2"></div>
        <div v-scrollanimation class="column is-one-quarter ml-6 is-slider" style="position: relative; left: 5px;">
          <carousel :per-page="1" :mouse-drag="false" class="carousel"
            data-index="0"
            data-name="MySlideName"
            @slideclick="handleSlideClick"
            paginationColor='#F3A08F'
            paginationActiveColor= '#E0330E'
            >
            <slide>
              <figure> 
                <img src="@/assets/images/yo.jpg">
              </figure>
            </slide>
            <slide>
              <figure> 
                <img src="@/assets/images/travel.jpg">
              </figure>
            </slide>
            <slide>
              <figure> 
                <img src="@/assets/images/doctadevs.jpg">
              </figure>
            </slide>
            <slide>
              <figure> 
                <img src="@/assets/images/iruya.jpg">
              </figure>
            </slide>
          </carousel>
        </div>
        <div class="column is-2"></div>
        <div class="column is-one-third" style="position: relative; top: -6em;">
          <h1 class="is-size-2 is-about-me" id="#about-me" v-scrollanimation>{{ $t('about') }}</h1>
          <br />
          <p class="is-size-4" v-scrollanimation>{{ $t('maindescription') }}
         {{ $t('maindescription2') }}<br />
          <a href="mailto: alemandifrancocm@gmail.com">{{ $t('sendmessage') }}</a>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'main',
  components: {
    Carousel,
    Slide,
  },
  methods: {
    handleSlideClick (dataset) {
    console.log(dataset.index, dataset.name)
  },
  }
}
</script>

<style scoped>
.is-slider{
  position: relative;
  top: -15rem;
}
img{
  border-radius: 15px;
  object-fit: cover;
  width: 30rem;
  height: 40rem;
}
.slide{
  position: relative;
  left: 500px;
}

p,
h1{
  text-align: justify;
  position: relative;
}

a {
  color: rgb(136, 34, 34);
  text-decoration: none;
  letter-spacing: 0.1em;
  
  display: inline-block;
  position: relative;
  top: 2px;
}
a:after {    
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
a:hover:after { 
  width: 100%; 
  left: 0; 
}

.dark a {
  color: #c9a1a1;
}

.dark a:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #c9a1a1;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.dark a:hover:after { 
  width: 100%; 
  left: 0; 
}

/* Transitions */
.before-enter{
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}

.enter{
  opacity: 1;
  transform: translateY(0px);
  transition: all 2s ease-out;
}

@media screen and (max-width: 1366px) {
  .carousel {
    position: relative;
    left: -1.7rem;
  }
  .is-about-me{
    text-align: center;
  }
}
</style>