<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="fade-up")
      .titulo-principal__numero
        span.text-white 2
      h1 Marco normativo nacional sobre GEI
    .row.justify-content-center.align-items-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-11.col-sm-11.col-11(data-aos="fade-up-right")
        img(src='@/assets/curso/tema2/imagen1.png')
      .col-xxl-6.col-xl-6.col-lg-6.col-md-11.col-sm-11.col-11(data-aos="fade-up-left")
        p.mt-5 El marco normativo nacional relacionado con las fuentes de emisión de contaminantes atmosféricos ha sido generado a través del Ministerio de Ambiente y Desarrollo Sostenible, el cual se fundamenta en la adopción de estrategias enfocadas al seguimiento y control de las emisiones generadas por fuentes fijas y móviles.
        p.mb-5 Actualmente, como estrategia para reducir el deterioro ambiental y preservar la calidad del aire, se cuenta con la Estrategia Nacional de Calidad del Aire, en la cual se presenta un énfasis en la reducción del material particulado emitido por los diferentes tipos de fuentes en áreas urbanas, mediante líneas de acción específicas, en un marco nacional de gobernanza. 
    p.mt-5(data-aos="fade-up-right") A su vez, se cuenta con un programa de reducción de impactos por olores ofensivos y ruido, que tiene como fin la adopción de guías para su mitigación; por otro lado,  el Ministerio ha promovido reducciones arancelarias como un mecanismo complementario para impulsar el control y mejoramiento del ambiente, como la reducción de la emisión de GEI y otros gases contaminantes; dentro de las reducciones arancelarias, se encuentra la exclusión  del impuesto del valor agregado a las ventas (IVA) y la deducción del impuesto a la renta de las inversiones realizadas con fines de control y reducción de emisiones.
    p.mb-5(data-aos="fade-up-right") Las líneas temáticas bajo las cuales se ha establecido el marco normativo nacional en relación con las fuentes de emisión de contaminantes atmosféricos se puede observar en la tabla 1:
    .row.justify-content-center
      .col-xxl-10(data-aos="fade-up-right")
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1. 
          span Listado líneas temáticas del marco normativo nacional con sus respectivas normas
        .tabla-a.color-acento-contenido.mb-5(data-aos="fade-up-left")
          table
            caption.fondo2.font16px Nota. 
              span.txtregular Tomada de Minambiente (s. f.).
            thead
              tr.fondo2
                td.anchocol.text-bold.text-center Linea temática
                td.text-bold.text-center Fuente de emisión
            tbody
              tr
                td.anchocol.fondo3.font15px.text-bold Uso de biocombustibles 
                td.font15px Resolución 4-0730 de 2019.
              tr
                td.anchocol.fondo3.font15px.text-bold Ruido
                td.font15px Resolución 0627 de 2006.
              tr
                td.anchocol.fondo3.font15px.text-bold.alinearArriba Olores ofensivos
                td.font15px 
                  ul.lista-ul
                    li 
                      i.fas.fa-check
                      | Resolución 672 de 2014.<br/>
                    li 
                      i.fas.fa-check
                      | Resolución 1541 de 2013.
              tr
                td.anchocol.fondo3.font15px.text-bold.alinearArriba Fuentes móviles
                td.font15px
                  ul.lista-ul
                    li 
                      i.fas.fa-check
                      | Resolución 40177 de 2020.
                  ul.lista-ul
                    li 
                      i.fas.fa-check
                      | Resolución 20213040039485 de 2020.
                  ul.lista-ul
                    li 
                      i.fas.fa-check
                      | Ley 1964 de 2019.
                  ul.lista-ul
                    li 
                      i.fas.fa-check
                      | Ley 1972 de 2019.
                  ul.lista-ul
                    li 
                      i.fas.fa-check
                      | Resolución 910 de 2008.
              tr
                td.anchocol.fondo3.font15px.text-bold Fuentes fijas
                td.font15px 
                  ul.lista-ul
                    li 
                      i.fas.fa-check
                      | Resolución 909 de 2008.
                    li 
                      i.fas.fa-check
                      | Protocolo de Fuentes Fijas.
              tr
                td.anchocol.fondo3.font15px.text-bold.alinearArriba Inventario de emisiones
                td.font15px 
                  ul.lista-ul
                    li 
                      i.fas.fa-check
                      | Portafolio de mejores técnicas disponibles y mejores prácticas ambientales para el sector alfarero y de producción de ladrillo en Colombia.
                    li
                      i.fas.fa-check
                      | Portafolio de buenas prácticas ambientales en el sector ladrillo.
                    li
                      i.fas.fa-check
                      | Guía nacional para el control, monitoreo y seguimiento de emisiones de compuestos   orgánicos volátiles.
                    li
                      i.fas.fa-check
                      | Inventario de Emisiones de Fuentes Móviles de Uso Fuera de Carretera en Colombia.
              tr
                td.anchocol.fondo3.font15px.text-bold Desintegración vehicular
                td.font15px Ley 1630 de 2013.
              tr
                td.anchocol.fondo3.font15px.text-bold.alinearArriba Contaminantes climáticos de vida corta
                td.font15px 
                  ul.lista-ul
                    li 
                      i.fas.fa-check
                      | Informe de avances 2021.
                    li 
                      i.fas.fa-check
                      | Informe de avances 2020.
                    li 
                      i.fas.fa-check
                      | Recomendaciones para la inclusión de contaminantes climáticos de vida corta en ejercicios de estimación y evaluación de medidas de mitigación.
                    li 
                      i.fas.fa-check
                      | Estrategia nacional para la mitigación de contaminantes climáticos de vida corta.
                    li 
                      i.fas.fa-check
                      | Recomendaciones para la inclusión de contaminantes climáticos de vida corta en ejercicios de estimación y evaluación de medidas de mitigación en escala subnacional.
                    li 
                      i.fas.fa-check
                      | Evaluación de las medidas de mitigación de contaminantes climáticos de vida corta en Colombia.
                    li 
                      i.fas.fa-check
                      | Informe de orientación sobre el vínculo entre la contaminación del aire y el cambio climático.

              tr
                td.anchocol.fondo3.font15px.text-bold.alinearArriba Calidad de combustibles
                td.font15px 
                  ul.lista-ul
                    li 
                      i.fas.fa-check
                      | Resolución 40103 de 2021.
                    li 
                      i.fas.fa-check
                      | Resolución 2604 de 2009.
                    li 
                      i.fas.fa-check
                      | Ley 1205 de 2008.
                    li 
                      i.fas.fa-check
                      | Resolución 898 de 1995.


</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema2',
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
