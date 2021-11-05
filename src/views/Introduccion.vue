<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    .row.justify-content-center.mb-5
      .col-lg-11
        h5 Recordemos las fases que componen la metodología del Design Thinking:

    .row.justify-content-center.mb-4.fondo1
      .col-lg-12.px-md-5.mt-5
        .row.justify-content-center.mb-4
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Figura 1
              p.mb-0 Fases del <em>Desing Thinking</em>
        .row.justify-content-center.mb-5
          .col-lg-10
            figure(data-aos="fade-up" )
              img.mx-auto(src='@/assets/curso/img1.svg', alt='imagen ambiental', style='')
          
          
    .row.justify-content-center
      .col-lg-10
        p.mb-0 Nota. Adaptada de www.deanizod.com (2021). 
        
    











</template>
<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
