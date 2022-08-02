<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade-up-right")
      .titulo-principal__numero
        span.text-white 4
      h1 Conceptos generales relacionados con los GEI y huella de carbono
    p.mb-5(data-aos="fade-up-right") Los GEI son gases que se encuentran de forma natural, y en algunas ocasiones por factores antropogénicos, en la atmósfera, que se encargan de absorber y emitir radiación en diferente longitud de onda del espectro de radiación infrarroja emitido por la superficie terrestre.
    .titulo-sexto.color-acento-contenido(data-aos="fade-up-left")
      h5 Figura 2. 
      span Principales GEI presentes en la atmósfera
    .row.justify-content-center
      .col-xxl-10.col-xl-10.col-lg-10(data-aos="fade-up-right")
        img(src='@/assets/curso/tema4/figura1.svg')
    p.mt-5(data-aos="fade-up") Los GEI se pueden clasificar como GEI directos e indirectos:

    .row.justify-content-center.mb-5
      .col-xxl-5.col-xl-5.col-lg-5.col-md-6.col-sm-11.col-11
        .tarjeta-avatar1.efecto-tarjeta(data-aos="flip-left")
          .tarjeta1.fondo7.p-0.mt-0
            img(src='@/assets/curso/tema4/imagen1.jpg')
            p.text-bold.m-4 GEI directos
            p.m-4 Son aquellos gases que se transforman en la atmósfera en GEI directos e inciden en la generación del O<sub>3</sub> troposférico, dentro de estos, se encuentran los compuestos orgánicos volátiles (COV), el monóxido de carbono (CO) y óxidos de nitrógeno.
      .col-xxl-5.col-xl-5.col-lg-5.col-md-6.col-sm-11.col-11
        .tarjeta-avatar1.efecto-tarjeta(data-aos="flip-left")
          .tarjeta1.fondo7.p-0.mt-0
            img(src='@/assets/curso/tema4/imagen2.jpg')
            p.text-bold.m-4 GEI indirectos
            p.m-4 Son aquellos gases precursores del efecto invernadero, dentro estos, se encuentran el CO<sub>2</sub>, CH<sub>4</sub>, N<sub>2</sub>O y compuestos halogenados.
    span.my-5.text-bold(data-aos="fade-up-right") El calentamiento global depende, en gran medida, de la concentración en la cual se encuentre cada GEI en la atmósfera y de su potencial de calentamiento global (PCG). 
    span(data-aos="fade-up-left") El GEI con mayor concentración en la atmosfera es el CO<sub>2</sub>, sin embargo, este no es el gas con mayor PCG, siendo el hexafluoruro de azufre el gas con el mayor PCG.
    p.my-5(data-aos="fade-up") Los potenciales de calentamiento global para cada GEI son:
    .titulo-sexto.color-acento-contenido(data-aos="fade-up-right")
      h5 Tabla 2. 
      span Potenciales de calentamiento GEI   
    .row.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-11.col-sm-11.col-11.mb-5
        .tabla-a.color-acento-contenido.mb-5(data-aos="fade-up-right") 
          table
            caption.fondo2.font16px Nota. 
              span.txtregular Tomada de Minambiente (s. f.).
            thead
              tr.fondo2
                td.anchocol.text-bold.text-center GEI
                td.text-bold.text-center PCG
            tbody
              tr
                td.anchocol.fondo3.font15px.text-bold Dióxido de carbono (CO<sub>2</sub>)
                td.font15px.fondo8 1
              tr
                td.anchocol.fondo3.font15px.text-bold Metano (CH<sub>4</sub>)
                td.font15px.fondo8  Entre 21 y 23
              tr
                td.anchocol.fondo3.font15px.text-bold.alinearArriba Óxido nitroso (N<sub>2</sub>O) 
                td.font15px.fondo8 Entre 230 y 310
              tr
                td.anchocol.fondo3.font15px.text-bold.alinearArriba Perfluorocarbonos (PFC)
                td.font15px.fondo8 Entre 5.700 y 11.900
              tr
                td.anchocol.fondo3.font15px.text-bold Hidrofluorocarbonos (HFC)
                td.font15px.fondo8 Entre 13.000 y 14.000
              tr
                td.anchocol.fondo3.font15px.text-bold.alinearArriba Hexafluoruro de carbono (SF<sub>6</sub>)
                td.font15px.fondo8 23.000       
      .col-xxl-6.col-xl-6.col-lg-6.col-md-11.col-sm-11.col-11.mb-5(data-aos="fade-up-left")
        img(src='@/assets/curso/tema4/imagen3.png')
    p.my-5(data-aos="fade-up-right") Los GEI se generan por el desarrollo de cualquier actividad humana, por lo tanto, cada uno de los sectores de la economía son considerados emisores de gases contaminantes. En el siguiente recurso educativo, se presentan los GEI emitidos por sector y fuente de emisión.
    //-slider
    .row.justify-content-center
      .col-xxl-10.col-xl-10.col-lg-10.col-md-11.col-sm-11.col-11
        .tarjeta.fondo9.p-4.mb-5(data-aos="fade-up-right")
          SlyderA
            .row.justify-content-center.align-items-center
              .col-xxl-2.col-xl-2.col-lg-3.col-md-4.col-sm-6.col-7.ps-5.mb-4
                  img.mb-4(src='@/assets/curso/tema4/slider3.svg')
              .col-md-7.mb-4.mb-md-0
                h4.mb-0.sm-mt-4.margenabajo Residencial
                p Consumo de combustible y energía eléctrica.
                .row.ps-3
                  .col-xxl-2.col-xl-3.col-lg-3.col-md-4.col-sm-3.col-5.col-xs-6.fondoblanco.p-2
                    p.mb-0.text-bold.text-center GIE= CO<sub>2</sub>
            .row.justify-content-center.align-items-center
              .col-xxl-2.col-xl-2.col-lg-3.col-md-4.col-sm-6.col-7.ps-5.mb-4
                  img(src='@/assets/curso/tema4/slider4.svg')
              .col-md-7.mb-4.mb-md-0
                h4.mb-0.margenabajo Servicios
                p Consumo de combustible y energía eléctrica.
                .row.ps-3
                  .col-xxl-2.col-xl-2.col-lg-3.col-md-4.col-sm-4.col-4.fondoblanco.p-2
                    p.mb-0.text-bold.text-center GIE= CO<sub>2</sub>
            .row.justify-content-center.align-items-center
              .col-xxl-2.col-xl-2.col-lg-3.col-md-4.col-sm-6.col-7.ps-5.mb-4
                  img(src='@/assets/curso/tema4/slider1.svg')
              .col-md-8.mb-4.mb-md-0
                h4.mb-0 Industria
                p Consumo de combustible y emisión de contaminantes derivado de procesos.
                .row.ps-3
                  .col-xxl-4.col-xl-5.col-lg-6.col-md-7.col-sm-7.col-9.fondoblanco.p-2
                    p.mb-0.text-bold.text-center GIE= CO<sub>2</sub>, CFC, HFC y SF<sub>6</sub>.
            .row.justify-content-center.align-items-center
              .col-xxl-2.col-xl-2.col-lg-3.col-md-4.col-sm-6.col-9.ps-5.mb-4
                  img.mb-4(src='@/assets/curso/tema4/slider2.svg')
              .col-lg-8.col-md-7.col-sm-7.mb-4.mb-md-0
                h4.mb-0 Agrícola
                p.me-md-5.me-sm-0 Uso de fertilizantes de tipo sintético, fermentación entérica de ganado, gestión del estiércol y uso de equipos agrícolas. 
                .row.ps-3
                  .col-xxl-4.col-xl-4.col-lg-5.col-md-7.col-sm-10.col-6.fondoblanco.p-2
                    p.mb-0.text-bold.text-center.mt-md-0 GIE= CO<sub>2</sub>, N<sub>2</sub>O y CH<sub>4</sub>
            .row.justify-content-center.align-items-center
              .col-xxl-2.col-xl-2.col-lg-3.col-md-4.col-sm-6.col-7.ps-5.mb-4
                  img(src='@/assets/curso/tema4/slider5.svg')
              .col-md-7.mb-4.mb-md-0
                h4.mb-0.margenabajo Transporte
                p Consumo de combustible.
                .row.ps-3
                  .col-xxl-2.col-xl-2.col-lg-3.col-md-4.col-sm-4.col-5.fondoblanco.p-2
                    p.mb-0.text-bold.text-center GIE= CO<sub>2</sub>
            .row.justify-content-center.align-items-center
              .col-xxl-2.col-xl-2.col-lg-3.col-md-4.col-sm-6.col-7.ps-5.mb-4
                  img.mb-4(src='@/assets/curso/tema4/slider6.svg')
              .col-md-7.mb-4.mb-md-0
                h4.mb-0.margenabajo Residuos
                p Descomposición de materia orgánica en rellenos sanitarios, incineración de residuos y transporte.
                .row.ps-3
                  .col-xxl-3.col-xl-4.col-lg-5.col-md-6.col-sm-5.col-6.fondoblanco.p-2
                    p.mb-0.text-bold.text-center GIE= CO<sub>2</sub> y CH<sub>4</sub>
            .row.justify-content-center.align-items-center
              .col-xxl-2.col-xl-2.col-lg-3.col-md-4.col-sm-6.col-7.ps-5.mb-4
                  img.mb-4(src='@/assets/curso/tema4/slider7.svg')
              .col-md-7.mb-4.mb-md-0
                h4.mb-0.margenabajo Sumideros
                p Cambios de uso del suelo.
                .row.ps-3
                  .col-xxl-1.col-xl-1.col-lg-2.col-md-3.col-sm-3.col-3.p-2.fondoblanco
                    p.mb-0.text-bold.text-center CO<sub>2</sub>
    p.my-5(data-aos="fade-up-right") Asimismo, dentro de las fuentes de emisión de contaminantes atmosféricos se pueden diferenciar dos tipos, los cuales se describen a continuación:
    .row.justify-content-center.my-5
      .col-xxl-10.col-xl-10.col-lg-11.col-md-12
        .titulo-sexto.color-acento-contenido(data-aos="fade-up-right")
          h5 Figura 3. 
          span Fuentes de emisión por tipo
        img(data-aos="fade-up")(src='@/assets/curso/tema4/diagrama1.svg')
    p(data-aos="fade-up-right") Por otro lado, dados los efectos procedentes del cambio climático, se incrementa la necesidad de establecer medidas por parte de las organizaciones con el fin de mitigar aquellos impactos negativos derivados de la degradación del ambiente por el uso excesivo de los recursos naturales no renovables, como los derivados de fuentes fósiles. <br/>La base sobre la cual se deben establecer los esfuerzos de reducción de las emisiones de GEI parte del conocimiento de cada agente generador, en aras de poder establecer el punto de partida y planear las metas para su reducción.
    p.mb-5(data-aos="fade-up-right") El cálculo de las emisiones de GEI permite identificar el impacto de cada uno de los procesos desarrollados dentro de una organización frente a la calidad del aire y el calentamiento global, cada organización puede definir los procesos a los cuales desea realizar esta cuantificación, con el fin de establecer metas y objetivos que propendan por la disminución o reducción de emisiones de GEI a la atmósfera. Existen dos formas de realizar la cuantificación de las emisiones de GEI, para conocerlas, revise con atención el siguiente recurso:
    TabsB.color-acento-contenido.mb-5(data-aos="fade-up-left")
      .py-4.py-md-5(titulo="Inventario de emisiones" :icono="require('@/assets/curso/tema4/emisiones.svg')")
        .row.justify-content-center.align-items-center
          .col-md-4
            .titulo-sexto.color-acento-contenido
              h5 Consumo de combustible
            figure
              img(src='@/assets/curso/tema4/tabemisiones.png')
          .col-md-6.mb-4.mb-md-0
            p Esta es la forma elemental para cuantificar emisiones de GEI de cada una de las fuentes de emisión de la organización. Para determinar el inventario de emisiones, se debe contar con información de consumo de combustibles de cada uno de los procesos y del transporte; también, en algunos casos, se puede incluir el consumo de energía eléctrica para ampliar el enfoque de análisis.
      .py-4.py-md-5(titulo="Huella de carbono" :icono="require('@/assets/curso/tema4/huella.svg')")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4/tabhuella.svg')
          .col-md-6
            p Esta forma de cuantificación de las emisiones de GEI propone un mayor análisis de cada una de las fuentes de emisión de la organización, ya que se realiza bajo la perspectiva del ciclo de vida e incluye las fuentes de emisión directas en indirectas. Existen dos tipos de huella de carbono, las cuales son:
            span.text-bold Huella de carbono organizacional: 
            span cuantifica el total de emisiones de GEI directas e indirectas debido al desarrollo de las actividades de una organización.<br/><br/>
            span.text-bold Huella de carbono de producto: 
            span cuantifica la emisión de GEI a lo largo del ciclo de vida del producto, iniciando en la obtención de las materias primas, la fabricación, la distribución, el uso, hasta la etapa final de la vida útil de este (reutilización, reciclado o disposición final).
    p.my-5(data-aos="fade-up-right") Por otro lado, se debe tener en cuenta que las emisiones pueden clasificarse, según el tipo de fuente de emisión, en:
    .titulo-sexto.color-acento-contenido(data-aos="fade-up-right")
      h5 Figura 4 
      span Clasificación de fuente de emisión
    .row.justify-content-center.mb-5
      .col-xxl-4.col-xl-4.col-lg-4.col-md-6.col-sm-11.col-11
        .tarjeta-avatar1.efecto-tarjeta(data-aos="flip-left")
          .tarjeta1.fondorosado.p-0.mt-0
            img(src='@/assets/curso/tema4/imagen4.png')
            p.text-bold.m-4 Emisiones directas
            p.m-4 Emisiones provenientes de fuentes sobre las cuales la organización tiene el control.
      .col-xxl-4.col-xl-4.col-lg-4.col-md-6.col-sm-11.col-11
        .tarjeta-avatar1.efecto-tarjeta(data-aos="flip-left")
          .tarjeta1.fondocafe.p-0.mt-0
            img(src='@/assets/curso/tema4/imagen5.png')
            p.text-bold.m-4 Emisiones fugitivas
            p.m-4 Emisiones que no pueden ser controladas de forma física, pero son emisiones liberadas a la atmósfera de forma intencional o no intencional.
      .col-xxl-4.col-xl-4.col-lg-4.col-md-6.col-sm-11.col-11
        .tarjeta-avatar1.efecto-tarjeta(data-aos="flip-left")
          .tarjeta1.fondoverde.p-0.mt-0
            img(src='@/assets/curso/tema4/imagen6.png')
            .row.justify-content-center
              .col-xxl-11.p-0.pb-4
                p.text-bold.m-4 Emisiones indirectas 
                p.m-4 Emisiones provenientes de fuentes sobre las cuales la organización no tiene el control. Estas pueden ser de dos tipos:  <br/>
                <p style="margin: 2em;"><span style="font-weight:700;">Indirectas tipo II: </span>aquellas atribuibles al uso de la energía eléctrica.</p>
                <p style="margin: 2em;"><span style="font-weight:700;">Indirectas tipo III: </span>aquellas atribuibles a los productos y servicios que la organización necesita para su funcionamiento.</p>
    p.my-5(data-aos="fade-up-right") Cabe resaltar que para poder cuantificar la huella de carbono se debe tener claro el nivel de actividad generadora de las emisiones de GEI: por ejemplo, la cantidad de gas natural utilizado para el funcionamiento de una caldera y los factores de emisión que presumen la cantidad de emisiones de GEI por cada unidad del dato de la actividad; estos varían de acuerdo con la actividad evaluada. En el componente formativo 2, “Cálculo de GEI y estrategias de gestión”, encontrará las fuentes para la selección de estos factores de emisión de conformidad con la actividad evaluada.
    .cajon.puntacajon.p-4.mb-4.fondo10(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-xxl-2.col-xl-2.col-lg-2.col-md-3.col-sm-6.col-6
          img(src='@/assets/curso/tema4/figura2.svg')
        .col-xxl-10.col-xl-10.col-lg-9.col-md-8.col-sm-11.col-11.fondo
          p El análisis de huella de carbono es la base sobre la cual la organización identifica los procesos que generan mayor impacto sobre la calidad del aire y el calentamiento global, y establece las estrategias de gestión encaminadas a disminuir ese impacto. Las estrategias pueden partir desde la reducción y el uso eficiente de algunos recursos (combustible, energía eléctrica) hasta la compensación a través de la compra de bonos de carbono, entre otras. Estas estrategias tienen como fin último la mejora continua de los procesos y el desempeño ambiental de la organización.

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
