<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Evaluación de retos


    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-lg-0.align-self-center
        p.mb-4 Antes de lanzar de manera masiva el reto de innovación, se debe verificar que cumpla con características básicas que permitan que el reto sea entendido y acogido por los solucionadores de la organización. 
        .cajon.color-primario.p-4
          p.mb-4 
            b ¿Cómo saber si se tiene un buen reto de innovación?
          p.mb-0 Para saber si se cuenta con un buen reto de innovación, se puede aplicar el siguiente <em>checklist:</em>
      .col-8.col-lg-6
        figure
          img.mx-auto(src='@/assets/curso/tema3/img1.svg', alt='' style='width: 610px')

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1
          p.mb-0 Lista de chequeo reto de innovación
        
        .tabla-b.color-primario
          .tabla-b__header
            h4.mb-0 Lista de chequeo - reto de innovación
          table
            
            tr.text-center(style='border-bottom: 1px solid #e8e8e8')
              th(style='width: 10%')
              th(style='width: 60%; font-size:16px') Característica
              th(style='font-size:16px') Cumple
              th(style='font-size:16px; border-right: 0') No cumple
              
            tr(style='border-bottom: 1px solid #e8e8e8')
              th
                h4.mb-0 1
              th 
                p.mb-0(style= "font-size: 16px") Incluye al usuario final y su necesidad.
              th
              td
              
            tr(style='border-bottom: 1px solid #e8e8e8')
              th
                h4.mb-0 2
              th
                p.mb-0(style= "font-size: 16px") Es inspirador y anima a ponerse en marcha.
              th
              td
              
            tr(style='border-bottom: 1px solid #e8e8e8')
              th
                h4.mb-0 3
              th
                p.mb-0(style= "font-size: 16px") Es importante para el usuario y la organizaci&oacute;n.
              th
              td
              
            tr(style='border-bottom: 1px solid #e8e8e8')
              th
                h4.mb-0 4
              th
                p.mb-0(style= "font-size: 16px") Es claro para los diferentes perfiles de solucionadores.
              th
              td
              
            tr(style='border-bottom: 1px solid #e8e8e8')
              th
                h4.mb-0 5
              th
                p.mb-0(style= "font-size: 16px") Ni muy abstracto ni muy concreto.
              th
              td
              
            tr(style='border-bottom: 1px solid #e8e8e8')
              th
                h4.mb-0 6
              th
                p.mb-0(style= "font-size: 16px") No menciona soluciones.
              th
              td
              
            tr(style='border-bottom: 1px solid #e8e8e8')
              th
                h4.mb-0 7
              th
                p.mb-0(style= "font-size: 16px") Plantea un problema o una necesidad.
              th
              td
              
            tr(style='border-bottom: 1px solid #e8e8e8')
              th
                h4.mb-0 8
              th
                p.mb-0(style= "font-size: 16px") Beneficios de resolver el reto son mayores a sus costos de implementaci&oacute;n.
              th
              td
              
            tr(style='border-bottom: 1px solid #e8e8e8')
              th
                h4.mb-0 9
              th
                p.mb-0(style= "font-size: 16px") Est&aacute; alineado con los objetivos/valores de la organizaci&oacute;n.
              th
              td
              
            tr(style='border-bottom: 1px solid #e8e8e8')
              th
                h4.mb-0 10
              th
                p.mb-0(style= "font-size: 16px") Se tienen los recursos, capacidades, habilidades y competencias.
              th
              td
        
    .row.justify-content-center.fondo-diagonal
      .col-lg-12.px-md-5
        
        .row.justify-content-center.mb-5
          .col-8.col-sm-6.col-lg-5
            figure.mb-4.mb-sm-0
              img.mx-auto(src='@/assets/curso/tema3/img2.svg', alt='' style='width: 416px')
          .col-10.col-sm.col-lg-5.align-self-center
            ul.lista-ul
              li 
                i.fas.fa-play(style='color: #FF0092')
                p.mb-0 ¿Qué problema, oportunidad o necesidad se resuelve?
                
              li 
                i.fas.fa-play(style='color: #FF0092')
                p.mb-0 ¿Para quién se está resolviendo este reto?
              
              li 
                i.fas.fa-play(style='color: #FF0092')
                p.mb-0 ¿Por qué se quiere solucionar este reto?
                
        .row.justify-content-center.mb-5
          .col-lg-10
            .cajon.color-primario.p-4
              p.mb-0 Si los retos construidos cumplen con las características anteriormente descritas, se puede inferir que se tiene un reto de innovación pertinente para ser abordado.

    .row.justify-content-center.mb-5
      .col-lg-11
        ul.lista-ul
          li 
            i.fas.fa-check(style='color: #FF0092')
            h4.mb-0 Clasificación de reto
            
        .row.justify-content-center
          .col-lg-11.ps-md-0
            p.mb-4 Cuando se trabaja con retos de innovación, es recomendable reconocer su alcance y enfoque desde su redacción, para clasificarlos correctamente y dar alcance a sus posibles soluciones.
            p.mb-2 Dentro de los retos de innovación se pueden encontrar:

    .row.justify-content-center
      .col-lg-12
        TabsA.color-acento-contenido.mb-5
          .tarjeta.tarjeta--azul.p-5(titulo="Retos problema")
            h4 Retos problema
            p Estos retos se clasifican como puntos críticos dentro del proceso en el que se quiere innovar, y por su característica de urgencia, se debe priorizar su solución dentro del equipo de trabajo.
            
          .tarjeta.tarjeta--azul.p-5(titulo="Retos necesidad")
            h4 Retos necesidad
            p Este tipo de retos no son clasificados como un problema en la actualidad, pero es importante incluirlos en el radar y tomar medidas para evitar que se conviertan en un reto problema.
            
          .tarjeta.tarjeta--azul.p-5(titulo="Reto oportunidad")
            h4 Reto oportunidad
            p Son retos categorizados como una opción de mejora, que si no se resuelven en el momento, no tienen efectos negativos; sin embargo, al resolverlos, generan cambios positivos.
            
    
    separador

    .row.justify-content-center.pb-5
      .col-lg-11
        ul.lista-ul.mb-5
          li 
            i.fas.fa-check(style='color: #FF0092')
            h4.mb-0 Priorización del reto final
            
        .titulo-sexto.color-acento-contenido.py-0
          h5 Figura 4
          p.mb-0 Matriz de Eisenhower
            
        .row.justify-content-center
          .col-lg-11.ps-md-0
            .row.mb-4
              .col-lg-6
                h4.text-center Priorización
            .row.justify-content-center
              .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img.mx-auto(src='@/assets/curso/tema3/img3.svg', alt='' style='width: 500px')
                figcaption Nota. Adaptada de Economipedia.com (2021).
              .col-lg-6.align-self-center
                p.mb-4 Para la priorización del reto final, el cual pasaría a la fase de ideación del proceso <em>Design Thinking</em>, se pueden utilizar diferentes herramientas de convergencia y selección, ya sea por afinidad, factibilidad o viabilidad, que defina el equipo encargado del reto. 
                p.mb-4 Una de las herramientas utilizadas para este proceso, son las matrices, ubicando en los ejes horizontal y vertical, las características más importantes para el momento del desarrollo del reto.
                p.mb-0 Dentro de las matrices se encuentra la matriz de Eisenhower, compuesta por cuatro cuadrantes que permiten identificar los aspectos urgentes/importantes, con el objetivo de simplificar las acciones y conseguir un enfoque rápido hacia los retos que se deben solucionar primero.

















</template>

<script>
export default {
  name: 'Tema3',
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
