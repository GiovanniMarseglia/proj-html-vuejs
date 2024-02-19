<script>
    export default {
        name:"review",
            data() {
                return {
                    
                }
            },
        
    }
</script>


<template>
    <div class="container-fluid py-5">
        <div class="containe d-flex flex-column gap-5">
            <h1 class="text-center">What Our Client Say</h1>
    <div id="carouselIndicators" class="carousel slide ">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" class="active bg-dark" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" class="bg-dark" aria-label="Slide 2"></button>
    
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
       
      <div class="container d-flex flex-column w-100 d-flex flex-column align-items-center">
 
      <figure>
        <img class="w-100" src="../../img/testimonials-2.jpg" alt="">
      </figure>
      <p class="fs-5 text-center">Ability proceeds from a fusion of skills,knowledge,understanding and imagination,consolidated by experience.</p>
      <span class="h5 text-center">Luis Desaivo, <span class="fs-5">CREO TECH</span></span>
      </div>
    </div>
    <div class="carousel-item">
        <div class="container d-flex flex-column w-100 d-flex flex-column align-items-center">
      <figure >
        <img class="w-100" src="../../img/testimonials-1.jpg" alt="">
      </figure>
      <p  class="fs-5 text-center">Ability proceeds from a fusion of skills,knowledge,understanding and imagination,consolidated by experience.</p>
      <span class="h5 text-center">Luis Desaivo, <span class="fs-5">CREO TECH</span></span>
      </div>
    </div>
    
  </div>
  
</div>
</div>
</div>
</template>


<style lang="scss" scoped>
.carousel-indicators{
    bottom: -50px;
}

img {
  border-radius: 50%;
}
figure{
    width: 150px;
}

button{
    width: 10px!important;
    height: 10px!important;
    border-radius: 999rem 999rem;
    border-top: none!important;
    border-bottom: none!important;
}
</style>