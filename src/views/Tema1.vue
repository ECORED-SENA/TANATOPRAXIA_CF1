<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1  Conceptos y generalidades para el sector funerario
  

    p.mb-5 El corazón de la labor funeraria se encuentra en el laboratorio de tanatopraxia, debido a que es el lugar de custodia de los seres más importantes para alguien. En este espacio se custodia con respeto y cuidados sanitarios al padre, a la madre, al hijo o al ser más querido de otra persona. Esto también sucede en las salas de transición de los hospitales, las morgues o cualquier otro lugar de paso que permite cuidar de aquellos cuerpos o restos mortales.

    .row.justify-content-center.mb-4
      .col-lg-4.align-self-center
        figure.mb-4
          img.mx-auto(src='@/assets/curso/tema1/img1.jpg', alt='Laboratorio de tanatopraxia',style='width:415px;')
      .col-md-12.col-lg-8
        p.mb-4 Para trabajar en el sector funerario se debe actuar con total responsabilidad desde la perspectiva de cuidados sanitarios o salubridad, porque existen riesgos biológicos que se pueden transmitir a las comunidades por inadecuadas prácticas de salubridad, ya que en los laboratorios de tanatopraxia se está manipulando con biológicos en vía de descomposición. El cuerpo es materia orgánica que, al terminar todas las funciones vitales, comienza un nuevo ciclo donde las condiciones internas, como los microorganismos o agentes patógenos, inician labores de degradación de la materia orgánica.
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Por lo anterior, los profesionales que están en funciones de manipulación de biológicos en vía de descomposición deben tener protocolos para su salubridad y la de su comunidad. Es decir, este proceso es importante porque disminuye accidentes, enfermedades o perjuicios laborales y sociales.

    .bloque-texto-a.color-primario.p-4.p-md-4.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-9
          .bloque-texto-a__texto
            p Como trabajadores del sector funerario, no solo se debe velar por el cuidado de fallecidos, sino del cuidado propio, para así cuidar a la comunidad en general. El primer paso para ello son las premisas del autocuidado de cualquier proceso, esto implica conocer, planear y tener todos las preparaciones y las precauciones necesarias para crear una red de cuidadores para los que la premisa debe ser: yo me cuido y cuido a los demás.
        .col-lg-3.mb-4.mb-lg-0.align-self-center
          figure
            img.mx-auto(src='@/assets/curso/tema1/img2.svg', alt='imagen ambiental',style='width:255px;')
          
              















</template>

<script>
export default {
  name: 'Tema1',
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

<style lang="sass" scoped></style>
