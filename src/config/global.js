export default {
  global: {
    componenteFormativo: 'Principios y normas de bioseguridad.',
    descripcionCurso:
      'El presente componente de formación surge ante la necesidad del sector funerario de salvaguardar la integridad de su personal y la comunidad en general a partir de prácticas de bioseguridad y autocuidado que minimicen los riesgos de la salud pública y ambiental en el momento de custodiar el cuerpo de una persona.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'Conceptos y generalidades para el sector funerario',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Normas de bioseguridad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Microbiología',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Desinfección',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Clasificación de los desinfectantes',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Métodos y técnicas de desinfección instrumental',
            hash: 't_4_2',
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
        'ICONTEC. (2017). Servicios funerarios. Requisitos (NTC 5840).',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/pdfview/viewer.aspx?locale=es-ES&Q=AF60935720F13C6466C0297B7F80FF16&Req=',
    },
    {
      referencia:
        'ICONTEC. (2017). Servicios funerarios. Términos y definiciones (NTC 6212).',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/pdfview/viewer.aspx?locale=es-ES&Q=6002A697B3F03F6282B108144F0748A3&Req=',
    },
    {
      referencia:
        'Ley 9 de 1979. Por la cual se dictan medidas sanitarias. Enero 24 de 1979. DO. Nº 35.308.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0009_1979.html',
    },
    {
      referencia:
        'Ley 1562 de 2012. Por la cual se modifica el sistema de riesgos laborales en materia de salud ocupacional. Julio 11 de 2012.<br>',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Ley-1562-de-2012.pdf',
    },
    {
      referencia:
        'Díaz, G. (2018). Guía para las empresas con exposición de riesgo biológico. Ministerio del Trabajo.<br>',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/59676/GUIA+RIESGO+BIOL%C3%93GICO+EMPRESAS.pdf/d37bb562-af8e-a51b-106e-60c7784f645b',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (s.f.). Guía de limpieza y desinfección.<br>',
      /*link:
        'https://www.minambiente.gov.co/images/AsuntosambientalesySectorialyUrbana/Talento_humano/Circular-015/GUIA_DE_LIMPIEZA_Y_DESINFECCION.pdf',
    */
    },
    {
      referencia:
        'SENA [Red Producción de Contenidos Grupo Gestión Curricular]. (2020a, mayo 3). ¿Cómo lavarse las manos de una forma segura? [Video]. YouTube.',
      link: 'https://youtu.be/N5iWzjNWh8A',
    },
    {
      referencia:
        'SENA [Red Producción de Contenidos Grupo Gestión Curricular]. (2020b, abril 21). Recomendaciones, descarte de elementos y desinfección de equipo [Video]. YouTube',
      link: 'https://youtu.be/fUmd0RTsvbI',
    },
  ],
  glosario: [
    {
      termino: 'Bioseguridad',
      significado:
        'Según ICONTEC (2017), es un conjunto de medidas preventivas que tienen como objetivo minimizar y controlar factores de riesgo que puedan afectar la seguridad, la salud humana y el ambiente.',
    },
    {
      termino: 'Desinfección ',
      significado:
        'Es la eliminación de microorganismos patógenos que se encuentran en objetos o materiales y que no es posible percibirlos a simple vista.',
    },
    {
      termino: 'Limpieza',
      significado:
        'Es la remoción de objetos o material que es percibido visualmente. La limpieza se logra con acciones manuales, como barrer y trapear, o con productos básicos como el agua y el jabón.',
    },
    {
      termino: 'Servicios funerarios',
      significado:
        'Según ICONTEC (2017), es un conjunto de actividades organizadas para la realización de rituales fúnebres. Pueden constar de servicios básicos (tales como preparación del cadáver, restos humanos, restos óseos o cenizas; obtención de licencias de inhumación o cremación; traslados, suministros de carroza fúnebre para el servicio; ataúd, urna, sala de velación y trámites civiles y eclesiásticos), servicios complementarios (tales como arreglos florales, avisos de murales y prensa, transporte de acompañantes, acompañamientos musicales) y destino final (inhumación o cremación).',
    },
  ],
  complementario: [
    {
      texto:
        'Ley 9 de 1979. Por la cual se dictan medidas sanitarias. Enero 24 de 1979. DO. Nº 35.308.',
      tipo: 'Pagina web',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0009_1979.html',
    },
    {
      texto:
        'Ley 1562 de 2012. Por la cual se modifica el sistema de riesgos laborales en materia de salud ocupacional. Julio 11 de 2012.',
      tipo: 'Pdf',
      descarga: '/downloads/Ley-1562-de-2012.pdf',
    },
    {
      texto:
        'SENA [Red Producción de Contenidos Grupo Gestión Curricular]. (2020, 21 abril). Equipo de protección personal [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/iDnhA8nPFsM',
    },
    {
      texto:
        'SENA [Red Producción de Contenidos Grupo Gestión Curricular]. (2020b, abril 21). Recomendaciones, descarte de elementos y desinfección de equipo [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/fUmd0RTsvbI',
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
        nombre: 'Luz María Uribe Lotero',
        cargo: 'Experta Temática',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Lina María Restrepo Zapata',
        cargo: 'Experta Temática',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Jhacesiz Mary Hincapié Atehortúa',
        cargo:
          'Instructora (EPC) – Líder Desarrollo Curricular Servicios Personales',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Adriana María Bustamante Cataño',
        cargo: 'Profesional de Diseño y Producción Curricular',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Cristian Metaute Medina',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica del SENA - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
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
        nombre: ['Jesus Antonio Vecino Valero'],
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
        nombre: 'Arnulfo Beltrán Mojica',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniela Muñoz Bedoya',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jessica Moreno Realpe',
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
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
