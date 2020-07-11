<template>
  <main>
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-one-quarter">
          <h2 class="is-size-4">RESUME</h2>
        </div>
        <div class="column is-one-third">
          <a class="anchor-class" href="#">Resume.pdf</a>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column is-one-quarter">
          <h2 class="is-size-4">PROFILE</h2>
        </div>
        <div class="column is-one-third is-resume">
          <h2 class="is-size-4">I’m a front-end developer specializing in crafting engaging digital experiences for web and mobile applications.</h2><br />
          <p class="is-size-5">
          I’m passionate about turning great ideas into exciting, functional, accessible digital products. With seven years of experience in the industry, I’ve built various products for individuals and organizations ranging from simple, highly converting marketing landing pages to mid-sized Node.js web applications. <br /><br />
          As a freelancer since 2013, I’ve worked with a variety of clients and creative agencies. At the moment, I collaborate primarily with Hub & Spoke Creative to create digital experiences that effectively connect with their audiences. While I’m primarily a front-end developer, in the past I’ve worked with companies and organizations such as Proper Channel and Technole in public relations, marketing and technical writing capacities.
          <br/><br /> When I’m not in a code editor, I typically spend time working on my writing, filming, catching up on some of my most watched shows, and seeing what’s new on my favorite YouTube channel.
          <br /><br />
          <a class="anchor-class">Interested in working together? Let’s connect.</a></p>
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
        <h2 class="is-size-4">SKILLSET</h2>
      </div>
      <div class="column is-one-third">
        <div class="container is-size-4" style="position: relative; left: -12px; top: -15px;">Design</div>
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
          Code
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
        <div class="container is-size-4" style="position: relative; left: -12px; top: -15px;">Tools</div>
          <div class="image-container">
            <div class="card-image" style="position: relative; left: 3px;">
              <figure class="image is-64x64">
                <a href="https://git-scm.com/" target="_blank"><img src="@/assets/images/git.svg" ></a>
              </figure>
            </div>
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
</style>