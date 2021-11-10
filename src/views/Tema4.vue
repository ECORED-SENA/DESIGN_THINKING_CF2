<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Fase de ideación


    .row.justify-content-center
      .col-lg-6.mb-4.mb-lg-0.align-self-center
        p.mb-4 Una vez se tenga definido, refinado y priorizado el reto de innovación, podemos pasar a la fase de ideación, la cual es la 
          b tercera fase del proceso de <em>Design Thinking. </em> 
          b-none Es una de las más amplias dentro de la metodología, porque cuando se trabaja en esta fase, se abordan procesos de divergencia y convergencia con el objetivo de favorecer el pensamiento creativo y lograr ideas innovadoras pensadas desde el usuario para solucionar el reto definido.
          
        .tarjeta.color-gradiente.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/tema4/icon1.svg" style='width: 68px;')
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.text-white Concepto y proceso de ideación
                  p.text-white Para ampliar este tema se invita a descargar la siguiente infografía:
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/concepto_proceso.pdf')" target="_blank")
                    span(style='color: #12263F') Descargar
                    i.fas.fa-file-download(style='color: #12263F') 
          
      .col-8.col-lg-6
        figure(data-aos="fade-left")
          img.mx-auto(src='@/assets/curso/tema4/img1.png', alt='' style='width: 550px')



















</template>

<script>
export default {
  name: 'Tema4',
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
