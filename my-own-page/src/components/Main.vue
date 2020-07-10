<template>
  <main>
    <div class="container mr-1 mt-6">
      <div class="columns mt-6 mb-6 pb-6" style="position: relative; left: -10px;">
        <div class="column is-half">
          <figure> 
            <img src="@/assets/images/travel.jpg">
          </figure>
        </div>
        <div class="column is-4"><h1 class="is-size-2">About me</h1><br />
          <p class="is-size-4">Hello! I am Franco from Argentina. A front-end developer currently working at Qplus, a company dedicated to providing systems solutions to industries.<br/> In my spare time I like to study philosophy, history, and economics and obviously coding.
As you will see, I like to travel, I think it has positively changed my life and allowed me to focus on the things I love and like to do.</p>
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
  left: 8rem;
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
  left: 5rem;
}
</style>