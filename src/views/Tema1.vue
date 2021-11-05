<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido(data-aos='fade-left')
      .titulo-principal__numero
        span 1
      h1 Fase de definición
  

    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        p.mb-4 Las metodologías de innovación son conjuntos de herramientas o formas de actuar que tienen como propósito principal promover no solo la interacción entre las diferentes áreas de la organización, sino involucrar a los colaboradores en la identificación y solución de problemas reales que, como consecuencia, impactan la motivación y sentido de pertenencia de los mismos.
        .cajon.color-primario.p-4
          p.mb-0 Una vez desarrollada la primera fase de empatizar –vista anteriormente, que incluye el conocimiento profundo del usuario, el problema y el contexto en el cual se desarrolla– es posible pasar a la fase de definición del problema o reto a resolver, porque se cuenta con la suficiente información sobre los elementos del problema.
      .col-9.col-lg-6
        figure(data-aos="fade-up" )
          img.mx-auto(src='@/assets/curso/tema1/img1.png', alt='imagen ambiental', style='width: 550px;')


    .row.justify-content-center.fondo2.mb-4
      .col-lg-12.px-md-5.mt-5
          
        .row.justify-content-center.mb-4
            
          .col-md-5.col-lg-5.mb-5.mb-lg-4(data-aos='flip-left')
            .tarjeta-avatar
              img(src='@/assets/curso/tema1/img2.svg' alt='AvatarTop')
              
              .tarjeta(style='background-color: #ffff')
                .p-5
                  h2.mb-4.text-center Concepto
                  p Esta fase se enfoca en procesos de convergencia, en los que se deben tomar decisiones importantes para determinar el enfoque que se le quiere dar al resto del proceso. El Design Thinking es un proceso iterativo que permite repensar en cada avance si se está tomando el camino correcto, permite la duda, la incertidumbre y preguntarse varias veces sobre temas específicos para derribar paradigmas o creencias preconcebidas.
                
          .col-md-5.col-lg-5.mb-5.mb-lg-4(data-aos='flip-left')
            .tarjeta-avatar
              img(src='@/assets/curso/tema1/img3.svg' alt='AvatarTop')
              
              .tarjeta(style='background-color: #ffff')
                .p-5
                  h2.mb-4.text-center Proceso
                  p El proceso de definición de retos de innovación, comienza con el análisis de la información recolectada durante la fase de empatía, seguido de la realización de un primer filtro y la generación de un proceso de decantación, donde el objetivo principal es consolidar la información que continúa en el proceso y que realmente genera valor, aportando perspectivas diferentes. El proceso consiste en identificar problemas claros a solucionar y que son claves para encontrar soluciones innovadoras centradas en las personas. 
















</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
