<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade-up-right")
      .titulo-principal__numero
        span.text-white 6
      h1 Directrices internacionales para la gestión de los GEI
    img.mb-5(data-aos="fade-up")(src='@/assets/curso/tema6/imagen1.jpg')
    p.mb-5(data-aos="fade-up-right")  La Convención Marco de las Naciones Unidas sobre el Cambio Climático (CMNUCC)  tiene como objetivo velar por la estabilización de las concentraciones de las emisiones de GEI en la atmósfera a nivel mundial y luchar contra el cambio climático, asimismo, incluye una serie de tratados multilaterales sobre medio ambiente, entre los cuales están el Protocolo de Montreal y el Protocolo de Kyoto; en estos protocolos, los países miembros se comprometen a actuar conjuntamente por la seguridad humana, la protección de los  ecosistemas y el bienestar de la sociedad en general.
    separador
    #kioto.titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 6.1 Protocolo de Kyoto.
    .row.justify-content-center
      .col-xxl-7.col-xl-7.col-lg-7.col-md-12(data-aos="fade-up-right")
        p Fue aprobado el 11 de diciembre de 1997 y entró en vigor el 16 de febrero de 2005 tras un complicado proceso de ratificación. Este protocolo cuenta con 192 países llamados Partes.
        .cajon.puntacajon.p-4.my-4.fondo10
          p El Protocolo de Kyoto es el primer tratado que da inicio o pone en funcionamiento a la CMNUCC, el cual fue creado con el firme propósito de reducir las emisiones de GEI por parte de los países desarrollados, de acuerdo con unas metas establecidas de forma individual, y también propone que los países en desarrollo solo establezcan planes, políticas y estrategias que propendan por la mitigación de los GEI emitidos e informen periódicamente sobre los resultados obtenidos en la implementación de estos instrumentos.
        p El Protocolo de Kyoto se basa en los principios y disposiciones de la CMNUCC y divide a sus países parte en tres anexos; para conocerlos, revise el siguiente recurso educativo: 
      .col-xxl-5.col-xl-5.col-lg-5.col-md-10(data-aos="fade-up-left")
        img.mb-5(src='@/assets/curso/tema6/imagen2.png')
    .row.justify-content-center.mb-5
      .col-xxl-4.col-xl-4.col-lg-4.col-md-6.col-sm-11.col-11
        .tarjeta-avatar1.efecto-tarjeta(data-aos="flip-left")
          .tarjeta1.fondoamarillo.p-0.mt-0
            .row.justify-content-center
              .col-md-5.col-sm-6.col-6
                img.mt-4(src='@/assets/curso/tema6/figura1.svg')
            h4.m-5 Países anexo 1
            p.m-5 Solo vincula a los países desarrollados y aquellos cuya economía estaba en una fase de transición (países de Europa del Este), y les impone metas más rigurosas de acuerdo con el principio de “responsabilidad común pero diferenciada y capacidades respectivas”, porque los países desarrollados son considerados como los principales responsables de altos niveles de GEI en la atmósfera.
      .col-xxl-4.col-xl-4.col-lg-4.col-md-6.col-sm-11.col-11
        .tarjeta-avatar1.efecto-tarjeta(data-aos="flip-left")
          .tarjeta1.fondoamarillo.p-0.mt-0
            .row.justify-content-center
              .col-md-5.col-sm-6.col-6
                img.mt-4(src='@/assets/curso/tema6/figura2.svg')
            h4.m-5 Países anexo 2
            p.m-5 Vincula a los países desarrollados que, además de cumplir con sus obligaciones de mitigación, deben proveer ayuda de tipo tecnológico y financiera a los países en desarrollo para que estos puedan cumplir con sus compromisos.
      .col-xxl-4.col-xl-4.col-lg-4.col-md-6.col-sm-11.col-11
        .tarjeta-avatar1.efecto-tarjeta(data-aos="flip-left")
          .tarjeta1.fondoamarillo.p-0.mt-0
            .row.justify-content-center
              .col-md-5.col-sm-6.col-6
                img.mt-4(src='@/assets/curso/tema6/figura3.svg')
            h4.m-5 Países no anexo
            p.m-5 Son los países en desarrollo que no deben cumplir compromisos cuantitativos de mitigación, sino informar periódicamente sus inventarios de emisiones e implementar políticas públicas encaminadas a la mitigación y adaptación al cambio climático.
    p.my-5 Por otro lado, dentro del protocolo, en su Anexo A, se listan los GEI de mayor interés para la comunidad científica por sus potenciales efectos negativos, los cuales son el CO<sub>2</sub>, CH<sub>4</sub>, NO<sub>2</sub>, HFC, SF<sub>6</sub> y PFC, siendo el CO<sub>2</sub> uno de los GEI más abundantes en la atmósfera. En el siguiente recurso educativo, se enuncian los principales sectores emisores de GEI con sus respectivas fuentes de emisión:
    TabsA.color-primario.mb-5(data-aos="fade-up-right")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Sector energético")
        .row.justify-content-center
          .col-md-7
            h4 Sector energético
            span.text-bold Fuente de emisión: 
            span quema de combustible en:
            ul.lista-ul
              li 
                i.fas.fa-asterisk
                | Industrias energéticas.
              li
                i.fas.fa-asterisk
                | Industrias de manufactura y construcción.
              li 
                i.fas.fa-asterisk
                | Transporte.
              li 
                i.fas.fa-asterisk
                | Emisiones fugitivas de combustibles sólidos, fósiles y sus derivados.
              li 
                i.fas.fa-asterisk
                | Otros sectores.
          .col-md-4
            img(src='@/assets/curso/tema6/energia.svg')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Sector industrial")
        .row.justify-content-center
          .col-md-7
            h4 Sector industrial
            p.text-bold Fuente de emisión: 
            ul.lista-ul
              li 
                i.fas.fa-asterisk
                | Procesos de extracción mineral.
              li
                i.fas.fa-asterisk
                | Industria química.
              li 
                i.fas.fa-asterisk
                | Producción de metales.
              li 
                i.fas.fa-asterisk
                | Producción y consumo de halocarbonos y SF<sub>6</sub>.
          .col-md-4
            img(src='@/assets/curso/tema6/industrial.svg')      
      .tarjeta.color-acento-botones--borde.p-4(titulo="Sector disolventes y otras sustancias")
        .row.justify-content-center
          .col-md-7
            h4 Sector disolventes y otras sustancias
            p.text-bold Fuente de emisión: 
            ul.lista-ul
              li 
                i.fas.fa-asterisk
                | Disolventes y otras sustancias.
          .col-md-4
            img(src='@/assets/curso/tema6/disolventes.svg')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Sector agricultura")
        .row.justify-content-center.align-items-center
          .col-md-7
            h4 Sector agricultura
            p.text-bold Fuente de emisión: 
            ul.lista-ul
              li 
                i.fas.fa-asterisk
                | Fermentación entérica.
              li
                i.fas.fa-asterisk
                | Aprovechamiento del estiércol.
              li 
                i.fas.fa-asterisk
                | Cultivos de arroz.
              li 
                i.fas.fa-asterisk
                | Suelos para la producción agrícola.
              li 
                i.fas.fa-asterisk
                | Quema de sabanas para ampliación de la frontera agrícola.
              li 
                i.fas.fa-asterisk
                | Quema de residuos agrícolas a cielo abierto.
          .col-md-4
            img.me-5(src='@/assets/curso/tema6/agricultura.svg')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Sector desechos")
        .row.justify-content-center
          .col-md-7
            h4 Sector desechos
            span.text-bold Fuente de emisión:
            ul.lista-ul
              li 
                i.fas.fa-asterisk
                | Disposición de residuos sólidos en el suelo.
              li
                i.fas.fa-asterisk
                | Tratamiento de aguas residuales.
              li 
                i.fas.fa-asterisk
                | Incineración de residuos.
          .col-md-4
            img(src='@/assets/curso/tema6/desechos.svg')
    p.mt-5(data-aos="fade-up-right") Asimismo, el protocolo de Kyoto, dentro de su anexo B, establece las metas de disminución de las emisiones de GEI de carácter vinculante para los 36 países desarrollados y la Unión Europea. La unión de estas metas representa la reducción de las emisiones de GEI alrededor de un 5 %, en contraste con las concentraciones de los GEI en el año 1990, esto durante el primer periodo de compromiso 2008-2012.
    p.mb-5(data-aos="fade-up") Además, dentro de este Protocolo, se incluyen unos mecanismos de libre mercado basados en la comercialización de permisos de emisión, pues en este protocolo se enuncia que los compromisos adquiridos se deben cumplir a través de medidas nacionales. Sin embargo, también se puede realizar a través de tres mecanismos de mercado como son el Comercio Internacional de Emisiones, Mecanismos de Desarrollo Limpio (MDL) y la aplicación conjunta.
    .row.justify-content-center
      .col-xxl-10.col-md-11(data-aos="fade-up-left")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema6/imagen3.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Estos mecanismos fueron creados con el ánimo de estimular la disminución de las concentraciones de GEI en la atmósfera de forma eficaz en función de costos en los países en desarrollo, pues no interesaba dónde se redujeron las emisiones, siempre y cuando no se emitieran los GEI; de esta forma, se incentivó la inversión verde en los países en desarrollo y se incorporaría al sector privado el compromiso de reducción y mantenimiento de las emisiones de GEI en un nivel seguro.
    p.my-5(data-aos="fade-up-right") Finalmente, en el 2012, se aprobó la Enmienda de Doha al Protocolo de Kyoto, sin embargo, esta enmienda no ha entrado en vigor, ya que se requiere tener 144 instrumentos de aceptación para conocer los contenidos de la enmienda Doha. Revise el siguiente recurso educativo:
    .row.justify-content-center
      .col-xxl-8.col-xl-8.col-lg-8.col-md-12(data-aos="fade-up-left")
        img(src='@/assets/curso/tema6/figura4.svg')
    p.my-5 Durante este periodo de compromisos, los países desarrollados establecieron como meta la reducción del 18 % de las emisiones de GEI durante el 2013 y el 2020, respecto a las concentraciones de GEI en la atmósfera del año 1990; sin embargo, se dio una modificación a los países anexo 1 y 2, cambiando así los compromisos de estos en el segundo periodo de compromisos del Protocolo.
    separador
    #montreal.titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 6.2 Protocolo de Montreal.
    p.mb-5(data-aos="fade-up") El Protocolo de Montreal es un acuerdo global que propende por la protección de la capa de ozono del planeta, a través de la eliminación progresiva de las sustancias químicas que la agotan; este gran propósito de eliminación abarca la producción y consumo de las sustancias agotadoras de la capa de ozono (SAO). Este protocolo fue aprobado en 1987, entró en vigor en 1989 y fue ratificado universalmente el 16 de septiembre de 2009.
    img(data-aos="fade-up-right")(src='@/assets/curso/tema6/imagen4.jpg')
    p.my-5(data-aos="fade-up-left") Este protocolo se estructuró con base en varias SAO, las cuales fueron clasificadas según su familia química, exigiendo el control de alrededor de 100 sustancias químicas. Asimismo, se relaciona un calendario para la eliminación de la producción y consumo de estas de forma paulatina, con el fin último de eliminarlas y prohibir su uso por completo más allá de la fecha de eliminación.
    .row.justify-content-center.align-items-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-11.col-sm-11.col-11.mb-5(data-aos="fade-up-right")
        img(src='@/assets/curso/tema6/imagen5.png')
      .col-xxl-6.col-xl-6.col-lg-6.col-md-11.col-sm-12.col-12.mb-5(data-aos="fade-up-left")
        p Las sustancias de principal atención de eliminación fueron los clorofluorocarbonos (CFC) y halones, debido a su alto potencial de agotamiento del ozono, y la eliminación de los hidroclorofluorocarbónos (HCFC) fue más tardía ya que estas sustancias eran usadas como sustitutos de la transición de los CFC y por su pequeño potencial de agotamiento del ozono.
        p La agenda de eliminación de los HCFC se estructuró en 1992 para los países desarrollados y en desarrollo, y se estableció la eliminación total de estos en los países desarrollados en 2030 y en los países en desarrollo, en 2040. Sin embargo, en 2007, los países parte decidieron adelantar esta agenda de eliminación para todos los países.
        .cajon.puntacajon.p-4.my-4.fondo10
          p Los países parte se reúnen anualmente, con el fin de verificar y tomar decisiones frente a la implementación del Protocolo; dentro de estas reuniones, se pueden realizar enmiendas al Protocolo. Hasta la actualidad, se han realizado 6 enmiendas. 
    p.my-5(data-aos="fade-up-right") La última enmienda es la Enmienda de Kigali, en la cual se establece la importancia de reducir gradualmente los HFC en 2016; estos HFC fueron usados como reemplazo de las SAO eliminadas a través del Protocolo de Montreal inicial. Aunque los HFC no son SAO, sí son considerados como un GEI que contribuye al aceleramiento del cambio climático.
    .row.justify-content-center
      .col-xxl-10.col-md-11(data-aos="fade")
        .bloque-texto-g1.fondo12.p-3.p-sm-4.p-md-5
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema6/imagen6.jpg')})`}"
          )
          .bloque-texto-g1__texto.p-4
            p.mb-0 El Protocolo de Montreal estableció diversas acciones a través de consenso universal, y se puede decir que es el Protocolo de tipo ambiental que ha tenido mayor éxito, ya que hasta el momento se ha cumplido con su objetivo y se continúa salvaguardando la capa de ozono en la actualidad, mostrando así que el trabajo en conjunto, colaborativo y bien encaminado, entre las naciones de todo el mundo, contribuye al cumplimiento de objetivos comunes.     

</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema4',
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
