<template>
  <main>
    <div class="container mr-1 mt-6">
        <div class="columns mt-6">
          <div class="column is-one-third is-talk" id="#contact">
            <h1 class="is-lets-talk" v-scrollanimation>{{ $t('letstalk') }}</h1>
            <p class="is-work-together" v-scrollanimation>{{ $t('worktogether') }} <a class="anchor-class" href="mailto: alemandifrancocm@gmail.com">alemandifrancocm@gmail.com.</a></p>
          </div>
        </div>
      <div class="contact-container">
        <div class="columns mt-6 mb-4 is-last-icons">
          <div class="column is-two-thirds ml-6">
          <small>&copy; Alemandi Franco</small>
          </div>
          <div class="icons-container">
            <div class="column">
              <figure class="image is-32x32">
                <a href="https://github.com/francoalemandi1" target="_blank"><img src="@/assets/images/github.svg"></a>
              </figure>
            </div>
            <div class="column">
              <figure class="image is-32x32">
                <a href="https://www.linkedin.com/in/franco-alemandi/" target="_blank"><img src="@/assets/images/linkedin.svg"></a>
              </figure>
            </div>
            <div class="column">
              <figure class="image is-32x32">
                <a href="https://twitter.com/francoalemandi" target="_blank"><img src="@/assets/images/twitter.svg"></a>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.is-size-2{
  text-transform: uppercase;
  font-weight: bolder;
}
.is-size-4{
  letter-spacing: 0.02em;
}
small{
  color: black;
  letter-spacing: 0.05em;
  font-size: 14px;
}
.contact-container{
  margin: 1px;
}

.anchor-class {
  font-size: 21px;
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

.dark small{
  color: #E8E8E8;
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
.icons-container{
  display: flex;
  flex-flow: row;
  align-content: space-around;
  justify-content: space-around;

  margin-left: 2rem;
}
.is-lets-talk{
  font-size: 30px;
}
.is-work-together{
  font-size: 24px;
}

@media screen and (max-width: 992px) {
  .carousel {
    position: relative;
  }
  .icons-container{
    display: flex;
    flex-flow: row;
    align-content: space-between;
    justify-content: space-between;
  }
  .is-talk{
    text-align: justify;
  }
  .is-lets-talk{
    text-align: center;
    margin-bottom: 20px;
    font-size: 20px;
  }
  .is-work-together{
  font-size: 16px;
  margin: 12px;
}
  small{
    margin-left: 3rem;
  }
  .anchor-class{
    letter-spacing: 0;
    font-size: 18px;
  }
}
</style>
