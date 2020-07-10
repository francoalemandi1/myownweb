<template>
  <main>
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-one-quarter">
          <h2 class="is-size-4">Resume</h2>
        </div>
        <div class="column is-one-third">
          <a href="#">Resume.pdf</a>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column is-one-quarter">
          <h2 class="is-size-4">Profile</h2>
        </div>
        <div class="column is-one-third is-resume">
          <h2 class="is-size-4">I’m a front-end developer specializing in crafting engaging digital experiences for web and mobile applications.</h2><br />
          <p class="is-size-5">
          I’m passionate about turning great ideas into exciting, functional, accessible digital products. With seven years of experience in the industry, I’ve built various products for individuals and organizations ranging from simple, highly converting marketing landing pages to mid-sized Node.js web applications. <br /><br />
          As a freelancer since 2013, I’ve worked with a variety of clients and creative agencies. At the moment, I collaborate primarily with Hub & Spoke Creative to create digital experiences that effectively connect with their audiences. While I’m primarily a front-end developer, in the past I’ve worked with companies and organizations such as Proper Channel and Technole in public relations, marketing and technical writing capacities.
          <br/><br /> When I’m not in a code editor, I typically spend time working on my writing, filming, catching up on some of my most watched shows, and seeing what’s new on my favorite YouTube channel.
          Interested in working together? Let’s connect.</p>
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
          <h2 class="is-size-4">Skillset</h2>
        </div>
        <div class="column is-one-third">
          <div class="container is-size-4">Design</div>
            <div class="image-container">
              <div class="card-image" style="position: relative; left: 3px;">
                <figure class="image is-96x96">
                  <img src="@/assets/images/PS.svg">
                  <p class="is-size-5 is-centered">Photoshop</p>
                </figure>
              </div>
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
  transform: scale(1.05);
  cursor: pointer;
}
a {
  color: rgb(136, 34, 34);
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  
  display: inline-block;
  padding: 15px 20px;
  position: relative;
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
</style>