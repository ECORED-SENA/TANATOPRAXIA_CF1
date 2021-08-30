<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Desinfección
    
    .tarjeta--container.row.mb-4
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img.mx-auto(src='@/assets/curso/tema4/img1.svg', alt='icono que acompaña', style='width:222px;')
        h3.mb-4.text-center Limpieza
        p.mb-4.text-center Es la remoción de objetos o material que es percibido visualmente. La limpieza se logra con acciones manuales como barrer y trapear o con productos básicos como el agua y el jabón.
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img.mx-auto(src='@/assets/curso/tema4/img2.svg', alt='icono que acompaña', style='width:222px;')
        h3.mb-4.text-center(style='color: #12263f') Desinfección
        p.mb-4.text-center(style='color: #12263f') Es la eliminación de microorganismos patógenos que se encuentran en objetos o materiales y que no es posible percibirlos a simple vista. Es por ello que se necesitan productos más fuertes para que penetren más a fondo y puedan eliminar microorganismos.

    .row.justify-content-center.mb-4
      .col-lg-8
          p.mb-2 Existe otro método para desinfectar de forma instrumental, pero se usa, principalmente, en el área de salud hospitalaria o médica y no en funeraria. Se trata de las autoclaves, las cuales permiten eliminar y esterilizar todo rastro de esporas o filamentos de bacterias u hongos que no mueren con productos desinfectantes. Algunas veces, se usa calor, vapor o luz especializada, con el fin de reusar herramientas e instrumentos en muchas personas, sin riesgo de causarles una contaminación cruzada.
      .col-lg-4
        figure
          img.mx-auto(src='@/assets/curso/tema4/img3.svg', alt='Desinfectar de forma instrumental', style='width:422px;')

    .cajon.color-secundario.p-4.mb-4
      p.mb-0 Para la realización de procesos de desinfección, se debe partir del conocimiento básico del concepto de desinfección. Este es un proceso por medio del cual se eliminan los patógenos, aunque no necesariamente toda la vida microbiana que pudiese existir en el área, insumos o instrumentos. Por ello, se dice que hay diferentes niveles y tipos de desinfección que se pueden usar en los objetos inanimados, dependiendo de su potencial para propagar infecciones. Existe una clasificación de los dispositivos médicos y quirúrgicos así:

    .row.justify-content-around(data-aos="fade-left")
      .bg-color2.p-4.mb-4
        figure.mb-4
          img(src='@/assets/curso/tema4/icon1.svg', style="width: auto" ,alt='Texto que describa la imagen').mx-auto
        .h4.text-center Elementos críticos
        p.text-center Son todos los elementos que entran en contacto con tejidos estériles, sistema vascular o por donde fluye la sangre; por ejemplo: instrumental quirúrgico, catéteres vasculares.
      .bg-color3.p-4.mb-4
        figure.mb-4
          img(src='@/assets/curso/tema4/icon2.svg', style="width: auto" ,alt='Texto que describa la imagen').mx-auto
        .h4.text-center Elementos semicríticos
        p.text-center Son aquellos insumos que tienen contacto con membranas o mucosas intactas o con piel no intacta; por ejemplo, las sondas.
      .bg-color2.p-4.mb-4
        figure.mb-4
          img(src='@/assets/curso/tema4/icon3.svg', style="width: auto" ,alt='Texto que describa la imagen').mx-auto
        .h4.text-center Elementos no críticos
        p.text-center Son los materiales que tienen contacto con la piel intacta y no representan mayor riesgo.

    p.mb-4 Para hablar de las formas de destrucción de los agentes patógenos, es necesario conocer previamente cómo destruir diferentes tipos de poblaciones (bacterianas, micóticas o virulentas). Estas se mueren cuando son expuestas a un agente físico o químico letal. Existen algunas condiciones que favorecen o disminuyen la efectividad de los desinfectantes, estas son:
    .row.justify-content-center
      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/tema4/img4.svg', style="width: 400px" ,alt='imagen ambiental').mx-auto
      .col-lg-7
        LineaTiempoD.color-primario
          p.px-3(numero="1" titulo="Concentración del agente") Esta característica varía según el desinfectante y el organismo, por lo cual se puede decir que a mayor concentración del agente desinfectante, menos tiempo de exposición para lograr la muerte de los microorganismos.
          p.px-3(numero="2" titulo="Tiempos de exposición") Es el tiempo mínimo requerido para que el agente desinfectante pueda actuar y pueda lograr el efecto deseado.
          p.px-3(numero="3" titulo="PH del medio") Establece el grado de ionización del agente desinfectante que logra atravesar las paredes del microorganismo y así desactivarlo.
          p.px-3(numero="4" titulo="Temperatura") Es una condición que normalmente altera el nivel bactericida del microorganismo, ante más temperatura, mayor poder bactericida.
          p.px-3(numero="5" titulo="Presencia de materiales extraños") Son materiales que ayudan a “camuflar” los microorganismos. Por ejemplo, la materia orgánica puede causar que el desinfectante disminuya su capacidad, ya que no podrá atravesar todo este material. 
          p.px-3(numero="6" titulo="Resistencia propia del microorganismo") Se ve afectada por el agente desinfectante que se use y si es capaz de atravesar el tipo de pared y la presencia de esporos.
          p.px-3(numero="7" titulo="Número inicial de la población") Un factor determinante para determinar la cantidad de desinfectante a usar, ya que a mayor nivel de agentes patógenos, mayor cantidad de agente desinfectante a usar.
          


    separador
    #t_4_1.titulo-segundo
      .h2 4.1 Clasificación de los desinfectantes
    

    p.mb-4 Los desinfectantes se clasifican según su nivel de efectividad (alto, medio o bajo) y mecanismos de acción (alteran la membrana celular, inactivan las proteínas o lesionan los ácidos nucleicos). A continuación, se hace una breve descripción de ellos:

    .row.justify-content-center
      .col-lg-11
        .tarjeta-avatar-b.mb-4
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema4/icon4.svg' alt='AvatarTop')
            .tarjeta.bg-tarjeta
              .p-4
                h3 Desinfectante de alto nivel
                p Actúa sobre los esporos (los agentes de reproducción). Este método se usa sobre instrumental quirúrgico que sea termosensible. Entre ellos, están: el óxido de etileno, formaldehído al 8% en alcohol al 70%, glutaraldehído al 2% y peróxido de hidrógeno.
          
        .tarjeta-avatar-b.mb-4
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema4/icon5.svg' alt='AvatarTop')
            .tarjeta.bg-tarjeta
              .p-4
                h3 Desinfectante de mediano nivel
                p Es el agente desinfectante que logra destruir hongos y virus no lipídicos. Acá se encuentran: los compuestos clorados (por ejemplo, el hipoclorito de sodio), compuestos iodados (iodóforos y alcohol iodado), compuestos fenólicos, alcoholes y clorhexidina. La mayoría de estos son usados como desinfectantes y antisépticos.
        
        .tarjeta-avatar-b.mb-4
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema4/icon6.svg' alt='AvatarTop')
            .tarjeta.bg-tarjeta
              .p-4
                h3 Desinfectante de bajo nivel
                p Agentes que logran destruir bacterias, pero no sus esporos, algunos hongos y no logran destruir virus lipídicos. Entre ellos se encuentran: el agua oxigenada y algunos compuestos mercúricos.

    .row.justify-content-center
      .col-lg-7
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Se hará mención especial a las capacidades y generalidades del hipoclorito de sodio como agente desinfectante, ya que es el insumo más común y de fácil acceso. El principio activo de esta solución es la liberación de cloro molecular que, al mezclarse con agua, genera el ácido hipocloroso. La efectividad de este compuesto se verá afectada por el pH, ya que actúa mejor en un pH neutro que ácido, la presencia de materia orgánica y su nivel de exposición a la luz, por lo que se sugiere el uso de contenedores opacos.
      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/tema4/img5.jpg', style="width: 450px;" ,alt='Hipoclorito de sodio').mx-auto

    p.mb-5 Es necesario conocer la medición de la concentración de cloro activo para determinar así la cantidad de sustancia a usar para la realización del proceso de desinfección de los insumos. Este se mide en partes por millón (PPM) o gramos por litro (g/l), de modo que 1000 PPM=1 gr/l o lo que es lo mismo 1 PPM = 1 mg/l. Ahora, para hacer la dilución de una solución concentrada de hipoclorito de sodio, se utiliza la siguiente ecuación:
    .row.justify-content-center
      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/tema4/img6.svg', style="width: 410px;" ,alt='Formula para la dilución concentrada de Hipoclorito').mx-auto

    .row.justify-content-center.mb-5
      .col-auto.mb-4
        .tarjeta.tarjeta-container.tarjeta-cyan
          .tarjetaContent
            .tarjetaImg
              figure.mb-3
                img(src="@/assets/curso/tema4/icon7.svg", alt="icono", style="width:105px;").m-auto
            .tarjetaTxt
              p.mb-0 Es el volumen de la dilución madre
      
      .col-auto.mb-4
        .tarjeta.tarjeta-container.tarjeta-purpura
          .tarjetaContent
            .tarjetaImg
              figure.mb-3
                img(src="@/assets/curso/tema4/icon8.svg", alt="icono", style="width:105px;").m-auto
            .tarjetaTxt
              p.mb-0 Es la concentración de la dilución madre
      
      .col-auto.mb-4
        .tarjeta.tarjeta-container.tarjeta-cyan
          .tarjetaContent
            .tarjetaImg
              figure.mb-3
                img(src="@/assets/curso/tema4/icon9.svg", alt="icono", style="width:105px;").m-auto
            .tarjetaTxt
              p.mb-0 Es el volumen de la disolución final o diluida
      
      .col-auto.mb-4
        .tarjeta.tarjeta-container.tarjeta-purpura
          .tarjetaContent
            .tarjetaImg
              figure.mb-3
                img(src="@/assets/curso/tema4/icon10.svg", alt="icono", style="width:105px;").m-auto
            .tarjetaTxt
              p.mb-0 Es la concentración de la disolución final o diluida
      

    p.mb-4 Ahora, despejando de la ecuación 1, se obtendría la ecuación 2 para hallar la cantidad (volumen) de desinfectante que se debe agregar al agua para obtener la concentración necesaria para tratar el elemento o insumo quirúrgico, para este caso.
    .row.justify-content-center
      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/tema4/img7.svg', style="width: 410px;" ,alt='Formula matematica').mx-auto

    .cajon.color-secundario.p-4.mb-5
      p.mb-0 #[strong EX:] se desea saber el volumen de hipoclorito de sodio, que en su presentación comercial viene en una concentración de 5%, que se debe agregar a un litro de agua (1000 ml) para obtener una solución con una concentración de 0.2%.

    .row.justify-content-center
      .col-lg-8
        figure.mb-4
          img(src='@/assets/curso/tema4/img8.svg', style="width: 700px;" ,alt='Formula matematica').mx-auto

    p.mb-4 Reemplazando valores sería así:

    .row.justify-content-center
      .col-lg-7
        figure.mb-5
          img(src='@/assets/curso/tema4/img9.svg', style="width: 610px;" ,alt='Formula matematica').mx-auto


    .cajon.color-secundario.p-4.mb-5
      p.mb-0 El volumen de hipoclorito que se debe agregar a 1 litro de agua (1000 ml) es de 40 ml para obtener una solución al 0.2%.


    separador
    #t_4_2.titulo-segundo
      .h2 4.2 Métodos y técnicas de desinfección instrumental

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      



</template>

<script>
export default {
  name: 'Tema4',
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
