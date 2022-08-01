<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0(data-aos="fade-up-right")
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/curso/iconos/arrastrar.svg")
      .col-12.col-md-8.col-lg-9(data-aos="fade-up-left")
        .titulo-segundo
          h2 Acertar lo visto
        p.mb-4 Recordar lo aprendido sobre conceptos, marco normativo nacional e internacional y metodologías para la medición de GEI, para aplicarlo en un contexto real.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Arrastrar y pegar
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/Actividad01/index.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0(data-aos="fade-up-right")
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/curso/iconos/sopa-letras-crucigrama.svg")
      .col-12.col-md-8.col-lg-9(data-aos="fade-up-left")
        .titulo-segundo
          h2 Afianzando conceptos
        p.mb-4 Identificar los conceptos relacionados con el marco normativo y metodologías de cálculo de GEI para aplicarlos en un contexto organizacional real.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Sopa de letras
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
