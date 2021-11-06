<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Herramientas para la divergencia

    .row.justify-content-center.mb-5.fondo1
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

    .row.justify-content-center.mb-5
      p.mb-4 Las características del pensamiento divergente son:
      .col-lg-6.mb-4.mb-lg-0
        .tarjeta-numerada.color-acento-contenido.p-5.pb-4.pt-4
          .tarjeta-numerada__numero
            .h2 1
          p.mb-0 Trata de derribar paradigmas, aplicando técnicas que potencien la búsqueda de diferentes perspectivas.
            
        .tarjeta-numerada.color-acento-contenido.p-5.pb-4.pt-4
          .tarjeta-numerada__numero
            .h2 2
          p.mb-0 Está asociado directamente con la creatividad y la imaginación.
            
        .tarjeta-numerada.color-acento-contenido.p-5.pb-4.pt-4
          .tarjeta-numerada__numero
            .h2 3
          p.mb-0 Propicia la búsqueda de nuevas conexiones a través de las metáforas, analogías de otras fuentes que se relacionan directamente con el tema o con áreas completamente diferentes u opuestas.
            
        .tarjeta-numerada.color-acento-contenido.p-5.pb-4.pt-4
          .tarjeta-numerada__numero
            .h2 4
          p.mb-0 ASe orienta a expandir el pensamiento para buscar mayor cantidad de ideas.
            
        .tarjeta-numerada.color-acento-contenido.p-5.pb-4.pt-4
          .tarjeta-numerada__numero
            .h2 5
          p.mb-0 En este momento no importa tanto la calidad o viabilidad de las ideas. Busca salirse de lo tradicional, permitirse soñar.
            
      .col-8.col-lg-6.align-self-center
        figure
          img.mx-auto(src='@/assets/curso/tema5/img1.svg' alt='imagen ambiental' style='width: 440px;')


    p.mb-5 Y algunas de las herramientas que favorecen el pensamiento expansivo o divergente son:
      
    .row.justify-content-around.mb-5
      .col-8.col-lg-5.mb-4.mb-lg-0.align-self-center
        figure
          img.mx-auto(src='@/assets/curso/tema5/img2.svg' alt='imagen ambiental' style='width: 505px;')
      .col-lg-6(data-aos="fade-left")
        LineaTiempoD.color-secundario
          p.mb-0.p-3(numero="1" titulo="Sesiones imaginativas") Comenzando con un espacio agradable, estas sesiones imaginativas buscan romper los esquemas dando paso a estímulos y emociones que permitan generar nuevas ideas.
          p.mb-0.p-3(numero="2" titulo="Construir con las manos") Herramientas como la plastilina, la arcilla y cualquier material que permita estimular el tacto y el pensamiento expansivo son importantes en esta etapa; el dibujo también se incluye en esta categoría de ideas por su gran poder visual y de detalle.
          p.mb-0.p-3(numero="3" titulo="Fragmentos") Esta herramienta consiste en dividir el problema en partes más pequeñas con el objetivo de abordar por segmentos para luego construir una solución completa.
          p.mb-0.p-3(numero="4" titulo="Analogías/homologaciones/contradicciones") Consiste en buscar en otro ámbito, elementos de soluciones que puedan servir al problema actual, también es llamada la técnica del pensamiento forzado.



    #t_5_1.titulo-segundo.color-acento-contenido
      .h2 5.1 Concepto de creatividad

    .row.justify-content-center.fondo5
      .col-lg-12.p-md-5
          
        .row.justify-content-end.mb-4.mb-md-5.mt-5
          .col-lg-10
            p.text-white 
              b Según la Real Academia Española, la creatividad se entiende como la capacidad de creación o facultad de crear, sin embargo su significado abarca mucho más. 
            
        .row.justify-content-center.mb-5
          .col-lg-7.mb-4.mb-lg-0
            .bloque-texto-custom.p-5.pe-4.pb-4
              i.fas.fa-quote-left
              p Es la capacidad de generar nuevas ideas y conceptos o nuevas asociaciones entre ideas ya conocidas y que llevan a nuevas conclusiones o soluciones originales y valiosas.
            
          .col-lg-5
            .bloque-texto-custom.p-5.pe-4.pb-4
              i.fas.fa-quote-left
              p Es un proceso mental que nace de la imaginación y se desarrolla con el tiempo caracterizado por la originalidad, adaptabilidad y sus posibilidades de realización. 













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
