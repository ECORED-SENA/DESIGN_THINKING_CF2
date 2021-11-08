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
                figure(data-aos="flip-up")
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
        .row.justify-content-center
          h4 Plussing
          p Esta técnica consiste en trabajar con ideas previamente concebidas o generadas en otros procesos de creatividad, permite realizar una reunión con los demás miembros del equipo y mejorar la idea a través del sano debate y la crítica constructiva.
            
          .col-md-7.mb-4.mb-md-0.align-self-center
            
            .cajon.color-primario.p-4.mb-4
              p.mb-1 #[strong Recursos: ] espacio físico o virtual, idea a trabajar, equipo de trabajo, moderador.
              p.mb-0 #[strong Tiempo: ] 1-2 horas como máximo.
            figure
              img.mb-3.mx-auto(src='@/assets/curso/tema5/img4.svg', alt='imagen ambiental')
              figcaption(style='background-color: #fff') Nota. Adaptada de Allende (2021)
            
          .col-8.col-md-5
            figure
              img.mx-auto(src='@/assets/curso/tema5/img5.svg', alt='imagen ambiental', style='width: 357px')
              
      .py-4.py-md-5.px-md-5(titulo="Story Telling" :icono="require('@/assets/curso/tema5/icon3.svg')" style="background-color: #EBF7FF")
        .row
            
          .col-7.col-md-7.mb-4.mb-md-0
            figure
              img.mx-auto(src='@/assets/curso/tema5/img6.svg', alt='imagen ambiental', style='width: 495px')
                
          .col-md-5.align-self-center
            h4 Story Telling
            p.mb-4 Consiste en contar historias en un contexto específico con elementos, personajes y ambiente seleccionados; la idea es construir una historia con su inicio, medio y fin con el objetivo de transmitir un mensaje con ideas al azar para iniciar los procesos de creatividad. Esta técnica, también es usada en las últimas fases para transmitir la idea de manera inspiradora al usuario final.
            .cajon.color-primario.p-4
              p.mb-1 #[strong Recursos: ] mensaje, ambiente, personajes.
              p.mb-0 #[strong Tiempo: ] 25 minutos como mínimo.
              
      .py-4.py-md-5.px-md-5(titulo="Seis Sombreros" :icono="require('@/assets/curso/tema5/icon4.svg')" style="background-color: #EBF7FF")
        .row.mb-5
          .col-md-6.mb-4.mb-md-0.align-self-center
            h4.mb-4 Seis Sombreros para pensar
            .p-4(style='background-color: #B7E6E5')
              p.mb-0 Esta técnica, famosa en todo el mundo para generar procesos de creatividad, parte desde el concepto de que cada ser humano piensa normalmente desde una perspectiva específica. Se utilizan seis colores refiriéndose a seis tipos de pensamientos, los que, al ser asignados, indican al participante que tiene que cambiar su perspectiva frente al problema o reto.
            
          .col-md-6
            figure
              img(src='@/assets/curso/tema5/img7.svg', alt='imagen ambiental' style='width: 505px')
            
        .row.justify-content-center.mb-4
          .col-md-6.mb-4.mb-md-0
            p.mb-4 #[strong Sombrero blanco: ] es un color neutro y pone al participante en una posición objetiva donde no hay juicios subjetivos ni emociones, solo datos y hechos verificables.
            p.mb-4 #[strong Sombrero rojo: ] este color transmite pasión y permite al participante expresar sus sentimientos de una manera más intuitiva hacia la solución.
            p.mb-0 #[strong Sombrero verde: ] al ser el color de las plantas, se asocia al pensamiento creativo y transmite crecimiento y sirve para generar ideas a las posibles problemáticas.
          .col-md-6
            p.mb-4 #[strong Sombrero negro: ] un color oscuro que remite a los pensamientos cautelosos y críticos, este sombrero permite al participante estar alerta en todos los aspectos de la idea que pueden convertir se en un problema.
            p.mb-4 #[strong Sombrero amarillo: ] este color se asocia con el sol y la luz, permite al participante entrar en un estado de optimismo que permita encontrar ventajas y valores al planteamiento en cuestión.
            p.mb-0 #[strong Sombrero azul: ] un color que transmite control y serenidad, es denominado el sombrero esencial y el participante asignado con este color debe gestionar la dinámica del grupo para generar mejores resultados.
            
        .row.justify-content-center
          .cajon.color-primario.p-4
            p.mb-1 #[strong Recursos: ] equipo de trabajo, idea o planteamiento, sombreros o elementos que simbolicen sus características.
            p.mb-0 #[strong Tiempo: ] 1 hora aproximadamente.
              
      .py-4.py-md-5.px-md-5(titulo="Brainstorming" :icono="require('@/assets/curso/tema5/icon5.svg')" style="background-color: #EBF7FF")
        .row.justify-content-center
          h4 Brainstorming
          p.mb-4 Es la técnica más utilizada para los procesos de ideación y es también llamada lluvia de ideas, su objetivo principal es llevar al grupo a romper las limitaciones comunes del pensamiento y producir gran cantidad de ideas de las que pueden escoger después, esta herramienta es útil para gestionar problemas específicos y fragmentados donde se necesitan ideas frescas y novedosas.
          p.mb-4 
            b La técnica de brainstorming tiene cuatro reglas principales: 
              
          .col-8.col-md-6.mb-4.mb-md-0.align-self-center
            figure
              img.mx-auto(src='@/assets/curso/tema5/img8.svg', alt='imagen ambiental', style='width: 336px')
            
          .col-md-6
              .row.justify-content-center.mb-3
                .col-auto
                  figure
                    img.mx-auto(src='@/assets/curso/tema5/num1.svg', alt='imagen ambiental' style='width: 54px')
                  
                .col.align-self-center
                  p.mb-0 #[strong Cero juicios: ] al eliminar las críticas se permite que las ideas fluyan.
                  
              .row.justify-content-center.mb-3
                .col-auto
                  figure
                    img.mx-auto(src='@/assets/curso/tema5/num2.svg', alt='imagen ambiental' style='width: 54px')
                  
                .col.align-self-center
                  p.mb-0 #[strong Pensar fuera de la caja: ] el imaginar nuevas posibilidades sin juzgar si son viables o no permite crear un ambiente de familiaridad donde surgen mejores ideas.
                  
              .row.justify-content-center.mb-3
                .col-auto
                  figure
                    img.mx-auto(src='@/assets/curso/tema5/num3.svg', alt='imagen ambiental' style='width: 54px')
                  
                .col.align-self-center
                  p.mb-0 #[strong Cantidad más que calidad: ] en las sesiones de lluvia de ideas se requiere alcanzar el mayor número de ideas posibles para luego seleccionarlas y refinarlas.
                  
              .row.justify-content-center.mb-3
                .col-auto
                  figure
                    img.mx-auto(src='@/assets/curso/tema5/num4.svg', alt='imagen ambiental' style='width: 54px')
                  
                .col.align-self-center
                  p.mb-0 #[strong Construir sobre las ideas de los demás: ] esta práctica ayuda a multiplicar las ideas, obtener inspiración de las ideas de los demás ayudará al equipo a generar muchas más ideas.
                  
              .cajon.color-primario.p-4
                p.mb-1 #[strong Recursos: ] equipo de trabajo, reto, notas adhesivas, lapiceros.
                p.mb-0 #[strong Tiempo: ] desde 30 minutos a 1 hora aproximadamente.
                
                
      .py-4.py-md-5.px-md-5(titulo="Scamper" :icono="require('@/assets/curso/tema5/icon6.svg')" style="background-color: #EBF7FF")
        .row.justify-content-center
          h4 Scamper
          p.mb-5 Esta técnica de ideación, es utilizada para desarrollar o mejorar ideas, productos o servicios. El acrónimo Scamper se compone de las siguientes palabras.
          .col-11.col-md-10.col-lg-7.mb-4.mb-md-0
              
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema5/letra1.svg' alt='AvatarTop')
              .tarjeta.color-primario.align-self-center(style="border-radius: 0")
                .p-2.py-3
                  h4.mb-1.text-white Sustituir
                  p.mb-1.text-white ¿Qué podemos reemplazar? 
                  p.mb-0.text-white Ejemplo: materiales, componente, colores, formas, usos.
                    
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema5/letra2.svg' alt='AvatarTop')
              .tarjeta.color-acento-contenido.align-self-center(style="border-radius: 0")
                .p-2.py-3
                  h4.text-white.mb-1 Combinar
                  p.text-white.mb-1 ¿Qué características podemos combinar o fusionar?
                  p.text-white.mb-0 Ejemplo: particularidades, propiedades.
                    
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema5/letra3.svg' alt='AvatarTop')
              .tarjeta.color-secundario.align-self-center(style="border-radius: 0")
                .p-2.py-3
                  h4.mb-1(style="color: #12263f") Adaptar
                  p.mb-1(style="color: #12263f") ¿Qué podemos añadir o agregar?
                  p.mb-0(style="color: #12263f") Ejemplo: nuevos elementos o funcionalidades. 
                    
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema5/letra4.svg' alt='AvatarTop')
              .tarjeta.color-primario.align-self-center(style="border-radius: 0")
                .p-2.py-3
                  h4.mb-1.text-white Modificar
                  p.mb-1.text-white ¿Qué podemos cambiar? 
                  p.mb-0.text-white Ejemplo: tamaño, funciones.
                    
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema5/letra5.svg' alt='AvatarTop')
              .tarjeta.color-acento-contenido.align-self-center(style="border-radius: 0")
                .p-2.py-3
                  h4.mb-1.text-white Poner otros usos
                  p.mb-1.text-white ¿En qué otro contexto lo puedo usar?
                  p.mb-0.text-white Ejemplo: usos en diferentes contextos y con diferentes usuarios.
              
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema5/letra6.svg' alt='AvatarTop')
              .tarjeta.color-secundario.align-self-center(style="border-radius: 0")
                .p-2.py-3
                  h4.mb-1(style="color: #12263f") Eliminar
                  p.mb-1(style="color: #12263f") ¿Qué puedo eliminar o simplificar?
                  p.mb-0(style="color: #12263f") Ejemplo: quitar elementos o componentes.
                    
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema5/letra7.svg' alt='AvatarTop')
              .tarjeta.color-primario.align-self-center(style="border-radius: 0")
                .p-2.py-3
                  h4.mb-1.text-white Reordenar
                  p.mb-1.text-white ¿Qué puedo cambiar de orden para obtener nuevos resultados? 
                  p.mb-0.text-white Ejemplo: invertir componentes o procesos.
              
          









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
