<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fase de definición
  

    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        p.mb-4 Las metodologías de innovación son conjuntos de herramientas o formas de actuar que tienen como propósito principal promover no solo la interacción entre las diferentes áreas de la organización, sino involucrar a los colaboradores en la identificación y solución de problemas reales que, como consecuencia, impactan la motivación y sentido de pertenencia de los mismos.
        .cajon.color-secundario.p-4
          p.mb-0 Una vez desarrollada la primera fase de empatizar –vista anteriormente, que incluye el conocimiento profundo del usuario, el problema y el contexto en el cual se desarrolla– es posible pasar a la fase de definición del problema o reto a resolver, porque se cuenta con la suficiente información sobre los elementos del problema.
      .col-lg-6
        figure(data-aos="fade-up" )
          img.mx-auto(src='@/assets/curso/tema1/img1.png', alt='imagen ambiental', style='width: 550px;')


















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
