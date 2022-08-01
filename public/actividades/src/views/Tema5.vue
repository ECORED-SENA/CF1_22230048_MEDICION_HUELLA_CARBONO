<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade-up-right")
      .titulo-principal__numero
        span.text-white 5
      h1 Metodologías para el cálculo de emisiones de GEI y huella de carbono
    p.mb-5(data-aos="fade-up-right") El cambio climático no solo se considera el problema de mayor interés para la comunidad internacional, sino que también se cataloga como un problema estructural del desarrollo económico global, con fuertes efectos negativos en el medio ambiente, la economía y en el ámbito social. La mitigación del cambio climático se centra en la reducción y limitación de la emisión de GEI a niveles más bajos que los que predominan actualmente. Para poder llevar a cabo esta mitigación, es necesaria la participación mundial bajo el marco de la cooperación y entendimiento, dada la connotación del problema.
    img(data-aos="fade-up-left")(src='@/assets/curso/tema5/imagen1.jpg')
    p.my-5(data-aos="fade-up-right") La mitigación del cambio climático puede ser desafiante, pero a su vez puede ser vista como la ventana para propiciar la transformación de los patrones productivos y de consumo de la sociedad, extrapolando sus beneficios a la triple cuenta de la sostenibilidad. La cuantificación de la emisión de los GEI es el punto de partida para determinar las acciones de control y posible reducción de esos gases que llevarán, de manera innegable, a mejorar la calidad ambiental, la competitividad de las organizaciones y el desarrollo social.
    .row.justify-content-center
      .col-xxl-10.col-xl-10.col-lg-10.col-md-11.col-sm-11.col-12
        .cajon.puntacajon.p-4.mb-4.fondo10(data-aos="fade-up-right")
          .row.justify-content-center.align-items-center
            .col-xxl-2.col-xl-2.col-lg-2.col-md-3.col-sm-6.col-6.ps-4
              img(src='@/assets/curso/tema5/figura1.svg')
            .col-xxl-10.col-xl-10.col-lg-9.col-md-8.col-sm-11.col-11.pe-4
              p Por ello, las organizaciones públicas, privadas, industriales y de distinta COR de negocio son llamadas a desarrollar, de manera transparente, coherente y exacta, el reporte de las emisiones generadas por sus actividades, para que sobre estas se puedan establecer estrategias, programas, proyectos y acciones que impulsen su mitigación.
              p A nivel internacional, se encuentran diversas metodologías a partir de las cuales se puede realizar la medición de los GEI; sin embargo, aquí se enuncian las más usadas, indistintamente del COR de negocio de las organizaciones.
    separador
    #iso.titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 5.1 ISO 14064-1:2019 ISO
    p(data-aos="fade-up") Este se ha definido como el instrumento para la cuantificación de los GEI, la cual tiene como objetivo trazar una directriz clara para comunicar informes de emisiones veraces y que sustenten las estrategias de mitigación y reducción de estas.
    p.mb-5(data-aos="fade-up") Este estándar está compuesto por tres estándares, donde se establecen los principios, criterios y etapas necesarias para cuantificar y verificar las emisiones de GEI de una organización y la definición de prácticas para la gestión, comunicación y validación de los informes de emisiones de GEI; para conocerlos, revise con atención el siguiente recurso educativo: 
    .row.mb-5(data-aos="fade-down-left")
      .col-sm-4.col-xl-4.mb-4.mb-xl-0(data-aos="fade-up-right")
        .tarjeta1.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              img(src='@/assets/curso/tema5/imagen2.png')
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema5/imagen3.jpg')})`}")

      .col-sm-4.col-xl-4.mb-4.mb-xl-0(data-aos="fade-up-right")
        .tarjeta1.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              img(src='@/assets/curso/tema5/imagen6.png')
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema5/imagen7.jpg')})`}")

      .col-sm-4.col-xl-4.mb-4.mb-xl-0(data-aos="fade-up-right")
        .tarjeta1.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              img(src='@/assets/curso/tema5/imagen4.png')
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema5/imagen5.jpg')})`}")
    separador
    #ghg.titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 5.2 GHG Protocol
    .row.justify-content-center
      .col-xxl-10.col-md-11(data-aos="fade-up")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/imagen8.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El estándar Protocolo de Gases de Efecto Invernadero (GHG <i>Protocol</i>) fue estructurado en 1998 por la coordinación del <i>World Resources Institute</i> (WRI) y el <i>World Business Council for Sustainable Development</i> (WBCSD) o Consejo Mundial Empresarial para el Desarrollo Sostenible, con el propósito de establecer un lineamiento a seguir para la cuantificación e informe de las emisiones de GEI de las organizaciones, y que fuese reconocido a nivel internacional.   
    p.mt-5(data-aos="fade-up") Actualmente, se han establecido dos estándares, el primero, que permite la cuantificación y reporte de las emisiones a nivel corporativo, y el segundo, que orienta la cuantificación de emisiones derivadas de proyectos.
    p.mb-5(data-aos="fade-up") El estándar de cuantificación y reporte de emisiones a nivel corporativo (ECCR) establece los criterios metodológicos para desarrollar inventarios de emisiones, donde se incluya la cuantificación de los GEI considerados en el Protocolo de Kyoto. Este estándar se constituye como la herramienta clave para las organizaciones en términos de contabilización y gestión de las emisiones de GEI basados en los siguientes principios.
    .row.justify-content-center.mt-5
      .col-xxl-12(data-aos="fade-up-right")
        .row.justify-content-center
          .col-xxl-6.col-xl-8.col-lg-9.col-md-11.col-sm-9.col-12
            .titulo-sexto.color-acento-contenido.encima 
              h5 Figura 5. 
              span Principios del ECCR
        img.subir1(src='@/assets/curso/tema5/figura2.svg')

    p.my-5(data-aos="fade-up-right") La metodología del estándar se encuentra estructurada bajo tres alcances que hacen alusión a diferentes fuentes de emisión, las cuales son las fuentes directas, fuentes indirectas de generación y otras fuentes indirectas. Dentro de la metodología, los alcances 1 y 2 representan el enfoque hacia el inventario de emisiones y el alcance 3 presenta un enfoque hacia el cálculo de huella de carbono.
    .row.justify-content-center.align-items-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-11.col-sm-12.col-12.mb-5(data-aos="fade-up-right")
        p Esta metodología, al compilar las actividades relacionadas con el desarrollo del inventario de emisiones y el cálculo de la huella de carbono, simplifica el diseño de estrategias de gestión de las emisiones generadas dentro de la organización de tipo voluntario y no voluntario. 
        p Este estándar puede ser aplicable en cualquier tipo de organización que, al realizar sus procesos y actividades, emita gases contaminantes a la atmosfera, no requiere la comunicación del informe de la cuantificación de las emisiones ante la WRI o la WBCSD y no establece criterios para realizar la verificación de los informes de los inventarios de emisiones. Del mismo modo, este estándar, al ser aceptado de forma internacional, la mayoría de las organizaciones realizan la cuantificación de sus emisiones a través de este, con el fin de poder acceder a mercados de GEI y programas voluntarios y no voluntarios de disminución de emisiones de GEI.
        p El PAS 2050:2008 y otros estándares han tomado como referencia el GHG <i>Protocol</i> para el desarrollo de sus criterios de inventario de emisiones.   
      .col-xxl-6.col-xl-6.col-lg-6.col-md-11.col-sm-11.col-11.mb-5(data-aos="fade-up-left")
        img(src='@/assets/curso/tema5/imagen9.png')
    separador
    #5_3_iso.titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 5.3 ISO 14067:2018
    span.text-bold(data-aos="fade-up-right") La ISO 14067 indica los criterios y requisitos para calcular la huella de carbono de productos y servicios, se le denomina <i>Carbon Footprint of a Product</i> (CFP). 
    span(data-aos="fade-up-right") Este estándar permite conocer de forma específica y veraz el impacto del desarrollo de un producto o servicio en una organización, con el fin de poder elegir las estrategias más adecuadas de mitigación de los GEI.
    span(data-aos="fade-up-right") La medición de la CFPE es una práctica que contribuye a la toma de decisiones informadas frente al cambio climático, de forma efectiva, y esto es ratificado por la CMNUCC. 
    img.my-5(data-aos="fade-up-right")(src='@/assets/curso/tema5/imagen10.jpg')
    p.mb-5(data-aos="fade-up-right") Este estándar permite conocer claramente el uso energético dentro de la organización e incluye información específica del sector forestal y agrícola. Además, está incluido dentro de la familia de la ISO 14060, teniendo como objetivo común dar herramientas a las organizaciones para la cuantificación, control, informe y validación de los GEI emitidos, apostando así a la lucha por la mitigación del cambio climático (ver figura 6).

    .titulo-sexto.color-acento-contenido.encima(data-aos="fade-up-right")
      h5 Figura 6. 
      span Componentes de la familia la ISO 14060
    .row.justify-content-center
      .col-xxl-10.col-xl-10(data-aos="fade-up-left")
        img.my-5(src='@/assets/curso/tema5/figura3.svg')
    .row.justify-content-center
      .col-xxl-9.col-xl-9.col-lg-9.fondo11.p-3(data-aos="fade-up")
        p.mb-0 Nota. Tomada de www.iso.org
    separador
    #5_4_pas.titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 5.4 PAS 2050
    .row.justify-content-center.align-items-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-11.col-sm-12.col-12.mb-5
        .cajon-b.otrocolor.p-3.mb-5(data-aos="fade-up-right")
          p.mb-0 <i>Publicly Available Specification</i> (PAS 2050) orienta especificaciones para la verificación del ciclo de vida de emisiones de GEI en el desarrollo y fabricación de productos y servicios. Este estándar fue desarrollado por el <i>British Standards Institution</i> en 2008. PAS 2050 es el primer estándar aplicable sobre la huella de carbono de los productos consensuada internacionalmente y ha sido usado como base para el desarrollo de otros estándares a nivel internacional.
          p El PAS 2050 fue desarrollado a través de una amplia consulta por partes interesadas internacionales y, en particular, a través del compromiso significativo de la comunidad usuaria de este estándar.
          p Este estándar proporciona requisitos para cuantificar los GEI de un producto emitido a lo largo de su vida útil, asimismo, incluye requisitos para la elaboración del informe de emisiones.
      .col-xxl-6.col-xl-6.col-lg-6.col-md-11.col-sm-11.col-11.mb-5(data-aos="fade-up-left")
        img(src='@/assets/curso/tema5/imagen11.png')
    p.my-5 Además, brinda un enfoque coherente para promover el uso y el desarrollo de especificaciones de GEI para los productos conocido como “reglas de productos” y se basa en los siguientes principios:
    .row.justify-content-center
      .col-xxl-9.col-xl-9.col-lg-9(data-aos="fade")
        img(src='@/assets/curso/tema5/figura4.svg')
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
