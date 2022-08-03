export default {
  global: {
    componenteFormativo:
      'Marco normativo sobre GEI y metodologías de cálculo de GEI.',
    descripcionCurso:
      'Este componente proporciona información relacionada con el marco normativo nacional e internacional sobre GEI, portafolio de políticas públicas de adaptación y mitigación del cambio climático por sectores de la economía, conceptos generales sobre los GEI, y las metodologías y directrices internacionales para el cálculo y gestión de los GEI.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    fondoBannerInterno: require('@/assets/curso/portada/fondo-banner-interno.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner/1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner/2.svg'),
      },
    ],
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
        titulo: 'Marco normativo internacional sobre GEI',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Marco normativo nacional sobre GEI',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Portafolio de políticas públicas de adaptación y mitigación del cambio climático por sectores de la economía',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Conceptos generales relacionados con los GEI y huella de carbono',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo:
          'Metodologías para el cálculo de emisiones de GEI y huella de carbono',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'ISO 14064-1:2019',
            hash: 'iso',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'GHG Protocol',
            hash: 'ghg',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'ISO 14067:2018',
            hash: '5_3_iso',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'PAS 2050',
            hash: '5_4_pas',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Directrices internacionales para la gestión de los GEI',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Protocolo de Kyoto.',
            hash: 'kioto',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Protocolo de Montreal',
            hash: 'montreal',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
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
        'Banco Interamericano de Desarrollo [BID]. (2013). Estrategias de mitigación y métodos para la estimación de las emisiones de Gases Efecto Invernadero en el sector transporte. ',
      link:
        'https://publications.iadb.org/publications/spanish/document/Estrategias-de-mitigaci%C3%B3n-y-m%C3%A9todos-para-la-estimaci%C3%B3n-de-las-emisiones-de-gases-de-efecto-invernadero-en-el-transporte.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible [Minambiente]. (2017). Política Nacional de Cambio Climático. .Puntoaparte Editores. ',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2022/01/9.-Politica-Nacional-de-Cambio-Climatico.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible [Minambiente]. (2022a). Emisiones Atmosféricas Contaminantes. Gov.co.',
      link:
        'https://www.minambiente.gov.co/asuntos-ambientales-sectorial-y-urbana/emisiones-atmosfericas-contaminantes/',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible [Minambiente]. (2022b). Estrategia Colombiana de Desarrollo Bajo en Carbono (ECDBC). Gov.co.',
      link:
        'https://www.minambiente.gov.co/cambio-climatico-y-gestion-del-riesgo/estrategia-colombiana-de-desarrollo-bajo-en-carbono-ecdbc/',
    },
    {
      referencia:
        'Ministerio para la Transición Ecológica. (2016). Guía para el cálculo de la huella de carbono y para la elaboración de un plan de mejora de una organización. Oficina Española de Cambio Climático.',
      link:
        'https://www.miteco.gob.es/es/cambio-climatico/temas/mitigacion-politicas-y-medidas/guia_huella_carbono_tcm30-479093.pdf',
    },
    {
      referencia:
        'Programa de las Naciones Unidas para el Medio Ambiente [PNUMA]. (2000). Protocolo de Montreal relativo a las sustancias que agotan la capa de ozono. Secretaría del Convenio de Viena para la Protección de la Capa de Ozono y el Protocolo de Montreal relativo a las sustancias que agotan la capa de ozono. ',
      link: 'https://www.car.gov.co/uploads/files/5b59e6ff82eb0.pdf',
    },
    {
      referencia: 'SGS Colombia. (s. f.). ISO 14067 - Huella de carbono. ',
      link:
        'https://www.sgs.co/es-es/sustainability/environment/carbon-services/greenhouse-gas-emissions-and-lifecycle-assessment/iso-14067-carbon-footprint',
    },
    {
      referencia:
        'Stavro, X. (2007). Implementación del Protocolo de Montreal en Colombia. Producción + Limpia, 2(1), p. 91-105.',
      link:
        'http://repository.unilasallista.edu.co/dspace/bitstream/10567/523/1/PL_V2_N1_p091-105_protocolo_montreal.pdf',
    },
    {
      referencia:
        '<i>United Nations Framework Convention on Climate Change [UNFCCC]</i>. (s. f.-a). El Acuerdo de París.<i> United Nations Climate Change</i>. ',
      link:
        'https://unfccc.int/es/process-and-meetings/the-paris-agreement/el-acuerdo-de-paris',
    },
    {
      referencia:
        'United Nations Framework Convention on Climate Change [UNFCCC]. (s. f.-b). ¿Qué es el Protocolo de Kyoto? United Nations Climate Change.',
      link: 'https://unfccc.int/es/kyoto_protocol',
    },
  ],
  glosario: [
    {
      termino: 'CO2 equivalente (CO2-e)',
      significado:
        'unidad universal de medida que indica el potencial de calentamiento global (PCG) de cada uno de los seis gases efecto invernadero, expresado en términos del PCG de una unidad de dióxido de carbono. Se utiliza para evaluar la liberación (o el evitar la liberación) de diferentes gases efecto invernadero contra un común denominador.',
    },
    {
      termino:
        'Convención Marco de las Naciones Unidas sobre Cambio Climático (CMNUCC)',
      significado:
        'es el tratado fundamental en materia de cambio climático que ofrece un contexto global para los esfuerzos internacionales para mitigar el cambio climático. El Protocolo de Kioto es un protocolo de la CMNUCC.',
    },
    {
      termino: 'Desarrollo sostenible',
      significado:
        'hace referencia a la integración de las metas de una calidad de vida elevada, la salud y la prosperidad con justicia social y al mantenimiento de la capacidad de la tierra para conservar la vida en toda su diversidad. Estas metas sociales, económicas y ambientales son interdependientes y se refuerzan mutuamente. El desarrollo sostenible puede considerarse como una vía para expresar las más amplias expectativas de la sociedad en su conjunto.',
    },
    {
      termino: 'Panel Intergubernamental de Cambio Climático (IPCC)',
      significado:
        'organismo internacional compuesto por científicos especializados en cambio climático. Su misión es evaluar la información científica, técnica y socioeconómica relevante para el entendimiento de los riesgos e impactos planteados por el cambio climático.',
    },
    {
      termino: 'Protocolo de Kioto',
      significado:
        'protocolo de la CMNUCC que exige que los países listados en su Anexo 1 (países desarrollados) cumplan con objetivos de reducción de emisiones de GEI en relación con sus emisiones registradas en 1990, durante el período de compromiso de 2008-2012.',
    },
  ],
  complementario: [
    {
      tema: 'Marco normativo internacional sobre GEI.',
      referencia:
        '<i>UN Climate Change</i>. (2021). ¿Se ha preguntado alguna vez qué es el Acuerdo de París y cómo funciona? [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/4ofqzVW0mwM',
    },
    {
      tema:
        'Portafolio de políticas públicas de adaptación y mitigación al cambio climático por sectores de la economía.',
      referencia:
        'Estrategia Climática de Largo Plazo Colombia E2050. (2021). ¿Qué es ser carbono neutral? [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=yTdxstryYmo&ab_channel=EstrategiaClim%C3%A1ticadeLargoPlazoColombiaE2050',
    },
    {
      tema: 'Conceptos generales relacionados con los GEI y huella de carbono.',
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible - Colombia (2016). ¿Sabes qué es el cambio climático? [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=w9-AMP8jG30&ab_channel=MinisteriodeAmbienteyDesarrolloSostenible-Colombia',
    },
    {
      tema:
        'Metodologías para el cálculo de emisiones de GEI y huella de carbono.',
      referencia:
        '<i>World Resources Institute. (2011). WRI/WBCSD Greenhouse Gas Protocol (GHGP)</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_urMCfkPdus&t=6s',
    },
    {
      tema: 'Directrices internacionales para la gestión de los GEI.',
      referencia:
        '<i>Simpleshow foundation. (2018). What is the Kyoto Protocol?</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=DFhuNKNDrLg',
    },
    {
      tema: 'Directrices internacionales para la gestión de los GEI.',
      referencia:
        'Fondo Mundial para la Naturaleza [WWF]. (s. f.). Protocolo de Kioto. Situación actual y perspectivas. ',
      tipo: 'Documento',
      link: 'http://www.ceida.org/prestige/Documentacion/Protocolo%20Kioto.pdf',
    },
    {
      tema: 'Directrices internacionales para la gestión de los GEI.',
      referencia:
        'Stavro, X. (2007). Implementación del Protocolo de Montreal en Colombia. Producción + Limpia, 2(1), p. 91-105.',
      tipo: 'Artículo',
      link:
        'http://repository.unilasallista.edu.co/dspace/bitstream/10567/523/1/PL_V2_N1_p091-105_protocolo_montreal.pdf',
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Íngrid Natalia Lozano Muñoz',
        cargo: 'Experto Temático',
        centro: 'Regional Tolima - Centro Agropecuario La Granja',
      },
      {
        nombre: 'Jeimy Lorena Romero Perilla',
        cargo: 'Diseñadora Instruccional',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora Metodológica',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología ',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de Estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Maria Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jorge Enrique Haylock Calderín',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Ilustración',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Validación audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Emilsen Alfonso Bautista',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
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
