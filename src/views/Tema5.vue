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
            .contenedor-bloque
              .bloque-imagen
                figure
                  img.mx-auto(src='@/assets/curso/tema5/img3.svg' alt='imagen ambiental' style='')
              .bloque-texto-custom--img.p-5.pe-4.pb-4
                i.fas.fa-quote-left
                p Es la capacidad de generar nuevas ideas y conceptos o nuevas asociaciones entre ideas ya conocidas y que llevan a nuevas conclusiones o soluciones originales y valiosas.
            
          .col-lg-5
            .bloque-texto-custom.p-5.pe-4.pb-4
              i.fas.fa-quote-left
              p Es un proceso mental que nace de la imaginación y se desarrolla con el tiempo caracterizado por la originalidad, adaptabilidad y sus posibilidades de realización. 


    separador
    #t_5_2.titulo-segundo.color-acento-contenido
      .h2 5.2 Técnicas de generación de ideas

    p.mb-4 Ahora, se exponen las técnicas de generación de ideas
    
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5.px-md-5(titulo="Plussing" :icono="require('@/assets/curso/tema5/icon2.svg')" style="background-color: #EBF7FF")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Celebrate your failures 1
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              
      .py-4.py-md-5.px-md-5(titulo="Story Telling" :icono="require('@/assets/curso/tema5/icon3.svg')" style="background-color: #EBF7FF")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 
            p 
        
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              
      .py-4.py-md-5.px-md-5(titulo="Seis Sombreros " :icono="require('@/assets/curso/tema5/icon4.svg')" style="background-color: #EBF7FF")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 
            p 
        
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              
      .py-4.py-md-5.px-md-5(titulo="Brainstorming" :icono="require('@/assets/curso/tema5/icon5.svg')" style="background-color: #EBF7FF")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 
            p 
        
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              
      .py-4.py-md-5.px-md-5(titulo="Scamper" :icono="require('@/assets/curso/tema5/icon6.svg')" style="background-color: #EBF7FF")
        .row.justify-content-center
          h4 Scamper
          p.mb-5 Esta técnica de ideación, es utilizada para desarrollar o mejorar ideas, productos o servicios. El acrónimo Scamper se compone de las siguientes palabras.
          .col-md-7.mb-4.mb-md-0
              
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema5/letra1.svg' alt='AvatarTop')
              .tarjeta.color-primario.align-self-center(style="border-radius: 0")
                .p-2
                  h4.mb-1.text-white Sustituir
                  p.mb-1.text-white ¿Qué podemos reemplazar? 
                  p.mb-0.text-white Ejemplo: materiales, componente, colores, formas, usos.
                    
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema5/letra1.svg' alt='AvatarTop')
              .tarjeta.color-secundario
                .p-4
                  h2 John Doe
                  p moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
                    
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema5/letra1.svg' alt='AvatarTop')
              .tarjeta.color-acento-contenido
                .p-4
                  h2 John Doe
                  p moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
                    
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema5/letra1.svg' alt='AvatarTop')
              .tarjeta.color-primario
                .p-4
                  h2 John Doe
                  p moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
                    
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema5/letra1.svg' alt='AvatarTop')
              .tarjeta.color-secundario
                .p-4
                  h2 John Doe
                  p moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
                    
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema5/letra1.svg' alt='AvatarTop')
              .tarjeta.color-acento-contenido
                .p-4
                  h2 John Doe
                  p moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
                    
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema5/letra1.svg' alt='AvatarTop')
              .tarjeta.color-primario
                .p-4
                  h2 John Doe
                  p moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
                    
          









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
