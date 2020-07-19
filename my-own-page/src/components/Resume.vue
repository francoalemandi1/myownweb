<template>
  <main>
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-one-quarter">
          <h2 class="is-resume-title" id="#resume" v-scrollanimation>{{ $t('resume') }}</h2>
        </div>
        <div class="column is-one-third is-resume-pdf">
          <a class="anchor-class" v-scrollanimation href="https://drive.google.com/file/d/1u47js1X6VSyNimUd2DQ8cIifgTIsw6Ov/view?usp=sharing" target="_blank">{{ $t('resume') }}.pdf</a>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column is-one-quarter">
          <h2 class="is-profile" v-scrollanimation>{{ $t('profile') }}</h2>
        </div>
        <div class="column is-one-third is-resume" v-scrollanimation>
          <h2 v-scrollanimation class="is-main-resume">{{ $t('mainresume') }} </h2><br />
          <p v-scrollanimation class="is-s21-resume">{{ $t('s21resume')}} <br /><br />
          {{ $t('doctadevsresume') }} <br /><br />
          {{ $t('aboutmeresume') }} <br /><br />
          {{$t('futureresume')}}
          <br /><br />
          <a href="mailto: alemandifrancocm@gmail.com" v-scrollanimation class="anchor-class" >{{ $t('interestresume') }}</a></p>
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
        <h2 class="is-skillset" v-scrollanimation>{{ $t('skillset') }}</h2>
      </div>
      <div class="column is-one-third">
        <div class="container is-design" v-scrollanimation>{{ $t('design') }}</div>
          <div v-scrollanimation class="image-container" style='position: relative; left: 0.5rem;'>
            <div class="card-image is-ps-image">
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
      <div class="column is-one-third is-all-skill">
        <div v-scrollanimation class="container is-code-title">
          {{ $t('code') }}
        </div>
        <div v-scrollanimation class="columns is-full is-code">
          <div class="column is-2">
            <div class="image-container is-html">
              <div class="card-image">
                <figure class="image is-96x96" style="position: relative; top: -10px;">
                  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"><img src="@/assets/images/HTMlvector.svg"></a>
                </figure>
              </div>
            </div>
          </div>
          <div class="column is-2">
            <div class="image-container is-css">
              <div class="card-image">
                <figure class="image is-64x64">
                  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><img src="@/assets/images/css.svg"></a>
                </figure>
              </div>
            </div>
          </div>
          <div class="column is-2">
            <div class="image-container is-js">
              <div class="card-image">
                <figure class="image is-64x64">
                  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="@/assets/images/JS.svg"></a>
                </figure>
              </div>
            </div>
          </div>
          <div class="column is-2">
            <div class="image-container is-vue">
              <div class="card-image">
                <figure class="image is-64x64">
                  <a href="https://vuejs.org/" target="_blank"><img src="@/assets/images/Vue.svg"></a>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-scrollanimation class="columns is-centered">
      <div class="column is-one-quarter"></div>
      <div class="column is-one-third">
        <div class="container is-tools">{{ $t('Tools') }}</div>
          <div class="image-container" style='position: relative; left: 0.7rem;'>
            <div class="card-image is-git-image">
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
  background: #ddbebe;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.anchor-class:hover:after { 
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

.is-resume-title,
.is-profile,
.is-skillset{
  font-size: 22px;
}

.is-main-resume{
  font-size: 20px;
}
.is-s21-resume{
  font-size: 18px;
}
.is-design,
.is-code-title,
.is-tools{
  font-size: 22px;
}

@media screen and (max-width: 992px) {
  main{
    overflow-x: hidden;
  }
  .is-code {
    display: flex;
    flex-flow: row;
    align-content: space-around;
    justify-content: space-around;
  }
  .is-resume-title,
  .is-profile,
  .is-resume-pdf,
  .is-skillset,
  .is-code-title
  {
    text-align: center;
    font-size: 18px;
  }
  .is-design{
    text-align: center;
  }

  .is-ps-image{
    display: flex;
    flex-flow: row;
    align-content: center;
    justify-content: center;

    position: relative;
    left: -0.5rem;
  }

  .is-tools{
    text-align: center;
  }

  .is-git-image{
    display: flex;
    flex-flow: row;
    align-content: center;
    justify-content: center;

    position: relative;
    left: -0.7rem;
  }
  .anchor-class{
    letter-spacing: 0;
  }
  .is-main-resume,
  .is-s21-resume{
    font-size: 16px;
    margin: 12px;
  }
}
@media screen and (min-width: 1365px) and (max-width: 1600px) {
  .is-2{
    margin: 0 35px 0 0;
  }
}
</style>