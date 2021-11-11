export default {
  global: {
    componenteFormativo:
      'Formulación de retos de innovación y generación de ideas',
    descripcionCurso:
      'La manera más práctica de activar la mente para generar ideas de manera colectiva, es tener claramente definido el problema, el usuario y su relación con la situación. Además, transformar este problema en una pregunta concreta que ayude a dar enfoque es fundamental para los procesos de co-creación e ideación, pues trazan un norte a seguir y evita desviaciones innecesarias.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: ' Fase de definición',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Retos de innovación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de retos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Formulación de retos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Evaluación de retos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Fase de ideación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Herramientas para la divergencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Concepto de creatividad',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Técnicas de generación de ideas',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Herramientas para la convergencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Técnicas de selección',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Técnicas de visualización gráfica',
            hash: 't_6_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alba, A. (2017). Cómo lanzar retos de innovación que enganchen. Innolandia.',
      link: 'https://innolandia.es/lanzar-retos-innovacion-enganchen/',
    },
    {
      referencia:
        'Allende. (2021). Técnica de creatividad <em>plussing</em> para generar ideas.',
      link:
        'https://www.creatividad.cloud/plussing-una-tecnica-para-mejorar-las-ideas-de-forma-colaborativa/',
    },
    {
      referencia:
        //'<em>Harpersbazaar</em>. (2019). La ropa que eliges afecta a tu estado de ánimo y cerebro, según expertos. En arpersbazaar.mx.',
        'Carrera, A. (2019). Pensamiento divergente y convergente. <em>Human Centric.</em>',
      link: 'https://humancentric.es/pensamiento-divergente-y-convergente/',
    },
    {
      referencia:
        'Clos, I. (2016). Todo lo que necesitas saber sobre los retos de innovación, elemento clave del <em>design thinking. </em>Sociedad de la Innovación. ',
      link:
        'https://www.sociedaddelainnovacion.es/retos-innovacion-design-thinking/',
    },
    {
      referencia:
        'Deanizod.com. (2021). <em>Design Thinking Process.</em> [Fotografía]. ',
      link: 'https://www.deanizod.com/portfolio/design-thinking-process/',
    },
    {
      referencia: 'Economipedia.com (2021). Matriz de Eisenhower.',
      link:
        'https://economipedia.com/wp-content/uploads/MATRIZ-DE-EISENHOWER-768x768.jpg',
    },
    {
      referencia:
        'Intef. (2017). Presentación <em>Visual Thinking</em> en educación. [Video]. YouTube. ',
      link:
        'https://www.youtube.com/watch?v=Bp85Qi7tN1M&list=PL7O-wFTtwWAY-RFH5ZLJuT1fvYHsyHHwe&index=1',
    },
    {
      referencia: 'Ipmo Guide. (2019). Qué es el cuadrante mágico de Gartner. ',
      link: 'https://ipmoguide.com/que-es-el-cuadrante-magico-de-gartner/',
    },
    {
      referencia: 'Larralde, G. (2019).¿Qué es el <em>visual thinking?</em>',
      link: 'https://enredarteayudaaprender.blogspot.com/',
    },
    {
      referencia:
        'Mosquera, G., I. (2018).<em> Visual thinking: </em>dibujando el aprendizaje. UNIR. ',
      link:
        'https://www.unir.net/educacion/revista/visual-thinking-dibujando-el-aprendizaje/',
    },
    {
      referencia: 'RAE. (2020). Diccionario de la lengua española RAE - ASALE.',
      link: 'https://dle.rae.es/reto',
    },
    {
      referencia:
        'Significados. (2013). Significado de creatividad. Significados. ',
      link: 'https://www.significados.com/creatividad/',
    },
  ],
  glosario: [
    {
      termino: 'Converger',
      significado: 'coincidir en la misma posición ante algo controvertido.',
    },
    {
      termino: 'Convergencia',
      significado: 'dicho de dos o más líneas: tender a unirse en un punto.',
    },
    {
      //termino: '<em>Suftware</em>',
      termino: 'Divergencia',
      significado: 'diversidad de opiniones o pareceres.',
    },
  ],
  complementario: [
    {
      texto:
        'Intef. (2017). <em>Presentación Visual Thinking en educación.</em> [Video]. YouTube. ',
      tipo: 'Video',
      link:
        'https://youtu.be/Bp85Qi7tN1M?list=PL7O-wFTtwWAY-RFH5ZLJuT1fvYHsyHHwe',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Cristina Zuluaga Penagos',
        cargo: 'Experta temática',
        centro: 'Centro Tecnológico del Mobiliario - Regional Antioquia',
      },
      {
        nombre: 'Natalia Gómez Rodríguez',
        cargo: 'Experta temática',
        centro: 'Centro Tecnológico del Mobiliario - Regional Antioquia',
      },
      {
        nombre: 'Luz Aída Quintero Velásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Sandra Carolina Durán López'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Andres Ayala Angarita',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
