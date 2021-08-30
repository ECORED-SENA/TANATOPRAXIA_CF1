<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Microbiología

    .bloque-texto-a.reverse.color-primario.p-4.p-md-4.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3.mb-4.mb-lg-0.align-self-center
          figure
            img.mx-auto(src='@/assets/curso/tema3/img1.svg', alt='imagen ambiental',style='width:211px;')
        .col-lg-9
          .bloque-texto-a__texto
            p Los microorganismos son agentes biológicos que solo se pueden ver a través de un microscopio por su diminuto tamaño. Pueden ser unicelulares (una sola célula) o pluricelulares (muchas células). Entre ellos se encuentran las bacterias, los hongos, los parásitos y los virus. Muchos de ellos se relacionan de manera benéfica para el hombre, pero muchos otros se comportan de forma nociva, siendo estos la mayor causa de riesgo biológico del personal de salud, en el que se incluye al personal funerario.
  
    p.mb-4 El cuerpo humano, en vida, presenta múltiples microorganismos que interactúan en diversas funciones vitales, como la alimentación, pero cuando la persona fallece, estos microorganismos son los encargados de la descomposición interna del propio cuerpo.
    .row.justify-content-center.mb-4
      .col-lg-8
        .cajon.color-secundario.p-4.mb-2
          p.mb-0 Las infecciones son enfermedades causadas por microorganismos. Varias de las principales causas de muerte en el mundo se deben a infecciones de orden respiratorio, como la COVID-19, e infecciones digestivas, como la diarrea. En general, cualquier persona puede contraer una infección en las células o tejidos del cuerpo, pero en el sector funerario, al estar tan expuestos a riesgos biológicos, es necesario aplicar todas las medidas de bioseguridad con sus respectivos elementos de protección. Puede que un trabajador no se enferme directamente, pero puede propagar el virus o la bacteria a su propia familia. Por eso es supremamente importante el lavado correcto de manos y el uso adecuado de todas las medidas preventivas.
      .col-lg-4
        figure.mb-2
          img.mx-auto(src='@/assets/curso/tema3/img2.svg', alt='imagen ambiental',style='width:370px;')

    p.mb-4 Estos microorganismos están presentes en el agua, suelo, aire, personas, animales o plantas. Muchos de ellos se pueden alojar en los fluidos corporales o elementos contaminados. Se estima que el 80% de los mecanismos de infección son por medio de las partículas de aire y de las manos, por ello es tan importante y vital el lavado correcto de las manos luego de la práctica funeraria o del contacto con cadáveres y el uso obligatorio de la mascarilla o tapabocas.
    p.mb-4 Existen miles de enfermedades producidas por los microorganismos, pero para el sector funerario las más comunes pueden ser las que se presentan a continuación:

    .row.justify-content-center
      .col-lg-5
        figure.mb-2
          img.mx-auto(src='@/assets/curso/tema3/img3.svg', alt='imagen ambiental',style='width:330px;')
      .col-lg-7
        LineaTiempoD.color-primario
          .row.justify-content-center(numero="1" titulo="Bacterias")
            .col-lg-12.px-4
              p.mb-4 Pertenecen al reino monera, no todas producen enfermedades. Se sabe que hay tipos de bacterias que pueden resistir en ambientes difíciles, como el ácido, y muy rara vez al fuego. Ellas se clasifican en otras familia llamadas arqueas.  Existen tres tipos de bacterias, según su forma: cocos, bacilos, helicoidales.
              p.mb-4 Algunas de las enfermedades que producen son:
              .row.justify-content-center
                .col-auto
                  ul.lista-ul
                    li 
                      i.fas.fa-biohazard
                      | Tuberculosis (bacilo de Koch)
                    li 
                      i.fas.fa-biohazard
                      | Disentería (salmonella, E. Coli)
                    li 
                      i.fas.fa-biohazard
                      | Gastritis (helicobacter pylori)
                    li 
                      i.fas.fa-biohazard
                      | Infecciones de la piel (Estafilococos)
                    li 
                      i.fas.fa-biohazard
                      | Amigdalitis (estreptococo)
                .col-lg-4
                  figure.mb-2
                    img.mx-auto(src='@/assets/curso/tema3/img4.svg', alt='imagen ambiental',style='width:140px;')
          
          .row.justify-content-center(numero="2" titulo="Virus")
            .col-lg-12.px-4
              p.mb-4 Tienen la singularidad que no se pueden ver por medio de un microscopio común; por sí mismos no se pueden reproducir y necesitan de células vivas anfitrionas, ya que no tienen organización celular. Su material genético se encuentra como ácidos nucleicos de ADN o ARN. Se protegen con una membrana llamada cápside. Algunos virus, como la Hepatitis A, no presentan envoltura y son propensos a vivir más tiempo sin un hospedador, un ejemplo de ello es su presencia en el agua. Por otro lado, los virus con envolturas,  como los herpes o la Hepatitis B, se contagian por medio de sangre o ciertos fluidos corporales humanos. 
              p.mb-4 Producen enfermedades como: 
              .row.justify-content-center
                .col-auto
                  ul.lista-ul
                    li 
                      i.fas.fa-biohazard
                      | VIH sida
                    li 
                      i.fas.fa-biohazard
                      | Influenza
                    li 
                      i.fas.fa-biohazard
                      | SARS
                    li 
                      i.fas.fa-biohazard
                      | COVID-19
                    li 
                      i.fas.fa-biohazard
                      | Herpes
                .col-lg-5
                  figure.mb-2
                    img.mx-auto(src='@/assets/curso/tema3/img5.svg', alt='imagen ambiental',style='width:155px;')
            
          .row.justify-content-center(numero="3" titulo="Hongos")
            .col-lg-12.px-4
              p.mb-4 Son organismos que se alimentan de material orgánico, pueden vivir en muchos ambientes y la gran mayoría son benéficos para el hombre, como en la industria alimenticia. Sin embargo, cuando se presentan en material orgánico, como los tejidos de los cadáveres, se deben tratar con productos que detengan su reproducción. Pueden atacar pulmones e intestinos.
              p.mb-4 Producen enfermedades como micosis pulmonar (aspergillus).

</template>

<script>
export default {
  name: 'Tema3',
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
