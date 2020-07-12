<template>
  <main>
    <div class="container mr-1 mt-6">
      <div class="columns mt-6">
        <div class="column is-half ml-6" style="position: relative; left: 5px;">
          <figure> 
            <img src="@/assets/images/travel.jpg">
          </figure>
        </div>
        <div class="column is-4" style="margin-left: 5em; position: relative; top: -6em;">
          <h1 class="is-size-2" id="#about-me">{{ $t('about') }}</h1>
          <br />
          <p class="is-size-4">{{ $t('maindescription') }}
         {{ $t('maindescription2') }}<br />
          <a href="mailto: alemandifrancocm@gmail.com">{{ $t('sendmessage') }}</a>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped>
figure{
  position: relative;
  top: -16rem;
}

img{
  border-radius: 15px;
  box-sizing: border-box;
  height: 50rem;
  width: 50rem;
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
</style>