<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-sexto.color-acento-contenido.encima(data-aos="fade-up")
      h5 Medición de huella de carbono en organizaciones
      p Síntesis: Marco normativo sobre GEI y metodologías de cálculo de GEI
    p(data-aos="fade-up") El desarrollo de este componente de aprendizaje busca fortalecer en los aprendices del curso complementario sobre “Medición de huella de carbono en organizaciones”, sus habilidades y conocimientos respecto a los marcos normativos, políticas, protocolos y estrategias necesarias para la implementación de la medición de GEI dentro de cualquier organización.
    p(data-aos="fade-up") Este componente establece de manera clara la ruta que se debe tener en cuenta para desarrollar acciones respecto a la medición de Gases Efecto Invernadero (GEI), los cuales son fundamentales en la conservación y el cuidado del medio ambiente.
    p(data-aos="fade-up") Una breve revisión de los temas vistos, se encuentran en el siguiente esquema:

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-up-right")
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="alt")
      .col-auto(data-aos="fade-up-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Sintesis',
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
