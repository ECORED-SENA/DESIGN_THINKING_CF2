<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Herramientas para la divergencia

    .row.justify-content-center.mb-4.fondo1
      .col-md-10.pt-5
        .row.justify-content-center
          .col-auto
            .bloque-texto-c
              i.fas.fa-quote-left.size-left--comilla
          .col.col-lg.pt-4.pt-lg-5
            p.mb-4
              b La diferencia entre pensamiento divergente y convergente, data desde 1951 con el psicólogo Paul Guilford, quien definió los tipos de pensamiento productivo a la hora de enfrentar problemas y retos en la vida diaria. 
            .linea-rosa.mb-4
        .row.justify-content-end.mb-5
          .col-auto
            figure
              img.mx-auto(src='@/assets/curso/tema5/icon1.png' alt='AvatarTop' style='width: 70px')
          .col-auto.align-self-center
            h4.mb-0 Paul Guilford




















</template>

<script>
export default {
  name: 'Tema5',
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
