<template>
  <main class="main-content">
    <div class="container mr-1 mt-6">
      <nav class="navbar">
        <div class="navbar-brand">
          <div class="brand-size">FDA.</div>
        </div>
        <div class="navbar-menu mr-6 pr-6">
          <div class="navbar-end mr-6 pr-6">
            <a class="navbar-item mr-6 pr-5">Home</a>
            <a class="navbar-item mr-6 pr-5">About me</a>
            <a class="navbar-item mr-6 pr-5">Experience</a>
            <a class="navbar-item mr-6 pr-5">Contact</a>
          </div>
        </div>
      </nav>
      <div class="columns mt-6 pt-6">
        <div class="column"></div>
      </div>
      <div class="columns mt-4 pt-6">
        <div class="column"></div>
      </div>
      <div class="columns mt-6 mb-6 pb-6" style="position: relative; left: -10px;">
        <div class="column is-half">
          <p class="is-size-1">
            Franco Alemandi — A frontend developer,
            focusing on creating digital products with great user experience.
          </p>
        </div>
      </div>
      <div class="columns mt-6 pt-6">
        <div class="column"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .brand-size{
    font-size: 42px;
  }

  .main-content,
  .navbar,
  .container{
    background-color: rgb(247, 242, 234);
  }

  .navbar-item:hover{
    background-color: rgb(247, 242, 234);
    color: rgb(204, 120, 120);
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