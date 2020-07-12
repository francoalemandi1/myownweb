<template>
  <main>
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-one-quarter">
          <h2 class="is-size-4" id="#resume">{{ $t('resume') }}</h2>
        </div>
        <div class="column is-one-third">
          <a class="anchor-class">{{ $t('resume') }}.pdf</a>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column is-one-quarter">
          <h2 class="is-size-4">{{ $t('profile') }}</h2>
        </div>
        <div class="column is-one-third is-resume">
          <h2 class="is-size-4">{{ $t('mainresume') }}</h2><br />
          <p class="is-size-5">{{ $t('s21resume')}} <br /><br />
          {{ $t('doctadevsresume') }} <br /><br />
          {{ $t('aboutmeresume') }} <br /><br />
          {{$t('futureresume')}}
          <br /><br />
          <a class="anchor-class">{{ $t('interestresume') }}</a></p>
        </div>
      </div>
      <div class="columns">
        <div class="column"></div>
      </div>
      <div class="columns">
        <div class="column"></div>
      </div>
    <div class="columns is-centered">
      <div class="column is-one-quarter">
        <h2 class="is-size-4">{{ $t('skillset') }}</h2>
      </div>
      <div class="column is-one-third">
        <div class="container is-size-4" style="position: relative; left: -12px; top: -15px;">{{ $t('design') }}</div>
          <div class="image-container">
            <div class="card-image" style="position: relative; left: 3px;">
              <figure class="image is-64x64">
                <a href="https://www.adobe.com/la/products/photoshop.html" target="_blank"><img src="@/assets/images/PS.svg"></a>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="columns is-centered mt-4">
      <div class="column is-one-quarter"></div>
      <div class="column is-one-third">
        <div class="container is-size-4">
          {{ $t('code') }}
        </div>
      </div>
    </div>
    <div class="columns is-centered" style="position: relative; left: -5px;">
      <div class="column is-3"></div>
      <div class="column is-1">
        <div class="image-container">
          <div class="card-image" style="position: relative; left: 3px;">
            <figure class="image is-96x96" style="position: relative; top: -10px;">
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"><img src="@/assets/images/HTMlvector.svg"></a>
            </figure>
          </div>
        </div>
      </div>
      <div class="column is-1">
        <div class="image-container">
          <div class="card-image" style="position: relative; left: 3px;">
            <figure class="image is-64x64">
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><img src="@/assets/images/css.svg"></a>
            </figure>
          </div>
        </div>
      </div>
      <div class="column is-1">
        <div class="image-container">
          <div class="card-image">
            <figure class="image is-64x64">
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="@/assets/images/JS.svg"></a>
            </figure>
          </div>
        </div>
      </div>
      <div class="column is-1">
        <div class="image-container">
          <div class="card-image">
            <figure class="image is-64x64">
              <a href="https://vuejs.org/" target="_blank"><img src="@/assets/images/Vue.svg"></a>
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div class="columns is-centered" style="position: relative; left: 20px;">
      <div class="column is-one-quarter"></div>
      <div class="column is-one-third">
        <div class="container is-size-4" style="position: relative; left: -12px; top: -15px;">{{ $t('Tools') }}</div>
          <div class="image-container">
            <div class="card-image" style="position: relative; left: -3px;">
              <figure class="image is-64x64">
                <a href="https://git-scm.com/" target="_blank"><img src="@/assets/images/git.svg" ></a>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column"></div>
      </div>
      <div class="columns">
        <div class="column"></div>
      </div>
      <div class="columns">
        <div class="column"></div>
      </div>
  </main>
</template>

<style scoped>
main {
  background-color: rgb(247, 242, 234);
}
.is-resume{
  text-align: justify;
}
figure:hover{
  transition: 0.5s;
  transform: scale(1.25);
  cursor: pointer;
}
.anchor-class {
  color: rgb(136, 34, 34);
  text-decoration: none;
  letter-spacing: 0.05em;
  
  display: inline-block;
  padding: 5px;
  position: relative;
}
.anchor-class:after {    
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
.anchor-class:hover:after { 
  width: 100%; 
  left: 0; 
}

.dark main {
  background: #15202B;
}

.dark .anchor-class {
  color: #ddbebe;
  text-decoration: none;
  letter-spacing: 0.1em;
  display: inline-block;
  position: relative;
  top: 2px;
}
.dark .anchor-class:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #ddbebe;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.anchor-class:hover:after { 
  width: 100%; 
  left: 0; 
}
</style>