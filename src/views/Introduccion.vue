<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="fade-up")
      .titulo-principal__numero
        span.text-white
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos="fade-up-right") Le damos la bienvenida al componente formativo “Marco normativo sobre GEI y metodologías de cálculo de GEI”. Para comenzar el recorrido por el mismo, visite el recurso educativo que se propone a continuación:
    figure.mb-5(data-aos="fade-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    

</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
