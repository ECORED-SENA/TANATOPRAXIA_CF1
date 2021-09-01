<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Normas de bioseguridad

    p.mb-4 Las medidas de bioseguridad en el sector funerario son medidas que se toman y se aplican para la prevención de riesgos o de accidentes provenientes de material biológico, anatómico, de elementos patógenos o por microorganismos tales como bacterias, virus u hongos. El objetivo de la bioseguridad es servir como punto de contención de las posibles enfermedades que pudiesen salir de la manipulación de cualquier elemento biológico y así evitar al máximo accidentes de orden laboral que afecten la salud de los trabajadores o de las demás personas.
    p.mb-4 En el gremio funerario los accidentes más comunes se deben a pinchazos con agujas o cortaduras de bisturí o cualquier otro elemento punzocortante que están dentro de las herramientas y equipos; pero también los riesgos biológicos a los que está sometido un operario funerario son aquellos que pueden ingresar de manera dérmica, sanguínea, respiratoria o digestiva, pudiendo desencadenar enfermedades infectocontagiosas, intoxicaciones o alergias. Las zonas o espacios donde se guardan herramientas que se usan para los procesos con cadáveres deben estar debidamente demarcadas con los símbolos de riesgo biológico y deben ser de uso exclusivo para las funciones específicas que contengan algún grado de riesgo biológico.
    .row.justify-content-center
      .col-lg-8.mb-3
        p En la bioseguridad, se considera que existe un riesgo biológico cuando las personas están propensas a la exposición con agentes patógenos, y para minimizar el riesgo existe un principio universal que protege y salvaguarda la integridad del personal que trabaja en el área de la salud y que por obvias razones se extiende al sector funerario. Este principio básicamente es para prevenir significativamente que ocurra una transmisión o propagación de alguna enfermedad. La norma universal de precaución consiste en que el trabajador funerario dé por hecho que “todo cadáver se tiene que suponer que es potencialmente infeccioso”. Esta premisa de bioseguridad universal permite que el operario realice las funciones funerarias con todos los cuidados necesarios, sin importar si se conoce o no el diagnóstico patológico o la historia clínica del cuerpo que se manipula. El propósito esencial de esta precaución universal es protegerse y proteger a las personas que lo rodean. 
      .col-lg-4.mb-3
        figure
          img.mx-auto(src='@/assets/curso/tema2/img1.svg', alt='Medidas de bioseguridad',style='width:420px;')

    .cajon.color-secundario.p-4.mb-4
      p.mb-0 Para cumplir con esta medida, es necesario que siempre se usen los elementos de barrera que estén a la disposición y al alcance de todo el personal, sobre todo en las áreas en que se trabaja o se está en contacto con los fluidos corporales de los cadáveres. Los fluidos corporales considerados en la precaución universal y que son manejados por el personal funerario son: la sangre, el semen, la secreción vaginal, los fluidos nasofaríngeos o cualquier otra sustancia o componente corporal que esté visiblemente con sangre, como las heces fecales.

    .row.justify-content-center
      .col-lg-5.mb-4
        figure
          img.mx-auto(src='@/assets/curso/tema2/img2.svg', alt='Capacitación salud ocupacional',style='width:505px;')
      .col-lg-7.mb-4 
        p.mb-4 Como precaución estándar desde el área administrativa a nivel empresarial, se deben tener capacitaciones de salud ocupacional por agencias de riesgos profesionales ARL; también se recomienda tener a disposición de todo el personal los manuales e instructivos que facilitan la consulta continua de cómo actuar o proceder en casos de accidentes en las áreas de riesgo biológico específicos de cada empresa, a los que acceden desde personal de traslado y embalsamamiento, como el personal de salas de transición en hospitales y morgues, hasta el personal de limpieza o, en general, cualquier persona que entre en contacto directo o indirecto con cadáveres.

    p.mb-5 En Colombia, rigen actualmente varias normas sobre bioseguridad y cuidado en el trabajo, entre ellas están: 
    .row.justify-content-center.mb-5
      .col-lg-11
        LineaTiempoB.color-secundario.mb-5(:datos="datosLineaTiempoB")


    p.mb-5 Todas estas normas aportan lineamientos y recomendaciones a seguir desde las premisas universales de bioseguridad en toda la cadena del sector funerario, que incluye funerarias, salas de velación, cementerios y morgues. Estas normativas dan la base necesaria para que el personal tome las medidas preventivas necesarias en la manipulación de los cadáveres, teniendo como premisa inicial las precauciones universales cuando se trata de exposición a material biológico. Además, cada entidad funeraria debe contar con su propio manual institucional, en el que se detallen los procesos de salud ocupacional.

    .bloque-texto-a.reverse.color-primario.p-4.p-md-4.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3.mb-4.mb-lg-0.align-self-center
          figure
            img.mx-auto(src='@/assets/curso/tema2/img3.svg', alt='imagen ambiental',style='width:250px;')
        .col-lg-9
          .bloque-texto-a__texto.p-5
            p Apreciado aprendiz, el Ministerio de Trabajo de Colombia ha desarrollado una #[strong “Guía para trabajadores expuestos a riesgos biológicos” (2018).] Está invitado a identificar las herramientas y recomendaciones sugeridas en los entornos laborales que presentan alta exposición a riesgo biológico. Haga clic en el presente ícono para ir al texto.
          .row.contenedorLink
            .col-auto
              a.anexo.mb-4(:href="obtenerLink('/downloads/GUIA RIESGO BIOLÓGICO PARA TRABAJADORES.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo. Guía para trabajadores expuestos<br> a riesgos biológico

    p.mb-5 Hasta aquí se han presentado algunas aproximaciones a normas de bioseguridad enfocadas en el sector funerario. Cabe recordar que, además de lo mencionado, en las zonas operativas de la funeraria, no se debe fumar, ingerir o ingresar alimentos. En caso tal de presentar alguna cortada o lesión dérmica, se sugiere vendar o tapar la zona, porque se está expuesto a algún contagio con microorganismos. Estos incidentes y otros riesgos se deben disminuir mediante el uso de elementos de protección. Pero, #[strong ¿qué es un elemento de protección?] Para resolver esta inquietud, está invitado a continuar la lectura.
    .row.justify-content-center.mb-4
      .col-lg-8
        p.mb-4 Los elementos de protección personal son elementos o equipos usados por cualquier persona para protegerse de uno o varios riesgos o peligros a los que se expone. Estos elementos deben ser específicos, adecuados y especializados, según la función y el peligro que la labor implique para el trabajador. Se recomienda que los elementos de protección personal (EPP) utilizados por el sector funerario sean equivalentes a los del sector salud, por la similitud en el objeto de trabajo -cuerpos humanos-.
      .col-lg-4
        figure.mb-4
          img.mx-auto(src='@/assets/curso/tema2/img4.svg', alt='Elementos de protección personal',style='width:420px;')

    .cajon.color-secundario.p-4.mb-5
      p.mb-0 En el contexto del sector funerario los elementos de protección personal son la primera línea de defensa que tiene un tanatopractor y otros funcionarios que están direccionados en la etapa de traslado inicial, intermedio y final de un cadáver. Según la intención de cada una las etapas mencionadas existen elementos de protección acorde a los riesgos biológicos, físicos y químicos.
    
    p.mb-5 Existen dos mecanismos de barrera contundentes, que permiten minimizar los riesgos de contraer enfermedades de riesgo biológico. Ellos son:

    .tarjeta--container.row.mb-4
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/tema2/icon5.svg', alt='icono que acompaña')
        h2.text-center Barrera de inmunización activa<br> adquirida a partir de <br>inmunobiológicos (vacunas).
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/tema2/icon6.svg', alt='icono que acompaña')
        h2.text-center(style='color: #12263f') Barrera física por medio de<br> los elementos de<br> protección personal.

    p.mb-4 Se da inicio a la caracterización de estos mecanismos de barreras contundentes a partir de la comprensión del sistema de defensa innato y adquirido del ser humano. Allí se hablará sobre la barrera de inmunización activa. ¿Qué espera para continuar aprendiendo? Revise con atención el siguiente recurso educativo.

    .tarjeta.tarjeta--fondo.p-4.mb-5
      SlyderA
        .row(style='justify-content: space-evenly')
          .col-md-6.mb-4.mb-md-0.align-self-center.p-0
            .cajon-b.color-primario.abajo-derecha.p-3.mb-0
              p.mb-0 Existen factores de riesgo cotidiano que bajan las defensas del cuerpo, como fumar, consumir sustancias psicoactivas, el licor, hábitos de vida sedentarios, mala alimentación, o el estrés. Por ello, se recomienda llevar hábitos de vida saludable.  Cuando se tienen las defensas bajas, se está en riesgo constante de contraer una infección.
          .col-md-4.align-self-center
            figure
              img.custom-img.mx-auto(src='@/assets/curso/tema2/img5.jpg', alt='Los malos hábitos bajan las defensas', style='')

        .row(style='justify-content: space-evenly')
          .col-md-4
            figure.mb-4
              img.custom-img.mx-auto(src='@/assets/curso/tema2/img6.jpg', alt='Microorganismos nocivos')
          .col-md-6.mb-4.mb-md-0.align-self-center.p-0
            .cajon-b.color-primario.p-3.mb-5
              p.mb-0  Por lo general, los microorganismos tienen acceso al cuerpo de una persona por medio de la respiración, las mucosas y la piel. El propio cuerpo está en la capacidad de detectar los microorganismos nocivos, que reciben el nombre de antígenos. La barrera de defensa propia son los anticuerpos, que están presentes en los órganos y células del cuerpo. 
        
        .row(style='justify-content: space-evenly')
          .col-md-6.mb-4.mb-md-0.align-self-center.p-0
            p.mb-4 Los órganos o tejidos que sirven como barreras de defensa para el cuerpo son: las amígdalas, la glándula timo, sistema linfático (ganglios), bazo y la médula ósea. 
            .cajon-b.color-primario.abajo-derecha.p-3.mb-0
              p.mb-0 A nivel celular, están los glóbulos blancos de la sangre, llamados linfocitos, estas células son las más importantes para la defensa del cuerpo, pues permiten comunicar y ayudar a alertar a las demás células del cuerpo sobre la presencia de un antígeno, lo que permite identificarlo y destruirlo, para así generar memoria o recordación de este por si ocurre otra posible infección con el mismo microorganismo o agente extraño.
          .col-md-4.align-self-center
            figure
              img.custom-img.mx-auto(src='@/assets/curso/tema2/img7.jpg', alt='Los malos hábitos bajan las defensas', style='')

        .row(style='justify-content: space-evenly')
          .col-md-4
            figure.mb-4
              img.custom-img.mx-auto(src='@/assets/curso/tema2/img8.jpg', alt='Microorganismos nocivos')
          .col-md-6.mb-4.mb-md-0.align-self-center.p-0
            .cajon-b.color-primario.p-3.mb-4
              p.mb-0  El sistema innato es el sistema de defensa con el que todas las personas nacen. Se va desarrollando por medio del reconocimiento y la alerta de un antígeno, para así poder producir respuestas inmediatas de defensa, que transportan por el torrente sanguíneo los glóbulos blancos que producen citoquinas y permean los tejidos, generando la inmunoglobulina.
            p.px-3.mb-0 Con este mecanismo, los linfocitos fagotizadores  destruyen los objetos extraños; luego, el cuerpo limpia los residuos. En todo este proceso, se genera la infección, que es la reacción de la batalla entre esos antígenos y los anticuerpos por el bienestar del organismo. Después de todo esto, lo último que sucede es que se activa el sistema de defensa adquirida, que es cuando ya el cuerpo es capaz de reconocer el antígeno.

        .row(style='justify-content: space-evenly')
          .col-md-6.mb-4.mb-md-0.align-self-center.p-0
            .cajon-b.color-primario.abajo-derecha.p-3.mb-0
              p.mb-0 Las vacunas, por ejemplo, copian este mismo sistema de defensa adquirida. Ellas se definen como un instrumento clave para combatir una enfermedad y surgen de las mismas bacterias, virus o microorganismos que son ajustados, manipulados y tratados en los laboratorios para que, al ingresar al cuerpo, se cree el sistema de defensa que ayudará a que el cuerpo reconozca qué patógenos ingresaron y los elimine. Ese mecanismo de defensa crea células de memoria, a las cuales se conoce como inmunidad. Ya sea por medio del sistema de defensa innato o adquirido, se produce la inflamación de los tejidos, que se manifiesta con síntomas como la fiebre y el malestar general.
          .col-md-4.align-self-center
            figure
              img.custom-img.mx-auto(src='@/assets/curso/tema2/img9.jpg', alt='Los malos hábitos bajan las defensas', style='')

        .row(style='justify-content: space-evenly')
          .col-md-4
            figure.mb-4
              img.custom-img.mx-auto(src='@/assets/curso/tema2/img10.jpg', alt='Microorganismos nocivos')
          .col-md-7.mb-4.mb-md-0.align-self-center.p-0
            .cajon-b.color-primario.p-3.mb-2
              p.mb-0  La mayoría de las veces, el operario funerario no tiene conocimiento si el cuerpo con el que está trabajando presenta alguna enfermedad infectocontagiosa, por tal motivo, se tiene siempre que trabajar bajo premisas universales de autocuidado y protección personal.
            p.px-3.mb-4 Al personal operativo que está en contacto o en exposición con los fallecidos se le recomienda tener al día y actualizado el siguiente esquema de vacunación y periódicamente estar revisando los niveles de anticuerpos.
            .row.justify-content-center
              .col-auto
                figure.mb-4
                  img.custom-img.mx-auto(src='@/assets/curso/tema2/img11.svg', alt='', style='width:590px;')

    p.mb-4 Para finalizar los mecanismos de barreras contundentes, se presentan elementos de protección personal relacionados con vestuario y objetos externos al ser humano que disminuyen riesgos presentes en procesos que involucran la atención de un servicio de salud y similares.
    .row.justify-content-center.mb-4
      .col-lg-8
        .cajon.color-secundario.p-4.mb-2
          p.mb-0 Inicialmente, para la protección personal, se recomienda que los trabajadores en el área operativa usen ropa diferente dentro de las instalaciones funerarias de riesgo biológico, como laboratorios y morgues, y otra totalmente limpia para el exterior (transporte público, la casa, o cualquier otro lugar común), esto con el fin de ayudar a contener posibles contaminaciones por los espacios que se habitan.
      .col-lg-4
        figure.mb-4
          img.mx-auto(src='@/assets/curso/tema2/img12.jpg', alt='Protección personal según el area', style='width:460px;')

    .row
      .col-lg-12.p-0
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img(style='min-width:15%')
            img(src='@/assets/curso/tema2/icon7.svg' alt='AvatarTop', style='width:160px;')
          .tarjeta.bg-color1(style='border-radius:0;background-color:#fff; align-self: center;')
            .p-4.ps-0
              p.mb-0 Los elementos de protección personal (EPP), tal como su nombre lo dice, son elementos o equipamientos que se usan como barrera física para proteger a quien los usa de uno o varios factores de riesgo, y así evitar contacto directo con material orgánico o demás elementos que puedan causar daño; estos elementos de protección personal ayudan a generar un ambiente seguro e higiénico pues permiten minimizar el área expuesta de piel o mucosas que puede entrar en contacto cuando se realicen las manipulaciones con los cadáveres.

    .bloque-texto-a.color-primario.p-4.p-md-4.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-9
          .bloque-texto-a__texto
            p Los elementos de protección personal atienden las necesidades de defensa a nivel cutáneo, ocular, respiratorio y digestivo, por vías de transmisión como son el contacto, las gotas o los aerosoles. A continuación, valore la información que se ha seleccionado para usted con respecto a las barreras de protección. Pero antes debe preguntarse: ¿ha observado algún riesgo en un entorno laboral?, ¿cómo fue solucionado?, ¿qué barreras de protección logró percibir? Para conseguir unas respuestas más estructuradas, revise la siguiente información:
        .col-lg-3.mb-4.mb-lg-0.align-self-center
          figure
            img.mx-auto(src='@/assets/curso/tema2/img13.svg', alt='imagen ambiental',style='width:245px;')

    .row.justify-content-center
      .col-lg-4.mb-5
          figure
            img.custom-img2.mx-auto(src='@/assets/curso/tema2/img14.svg', alt='imagen ambiental',style='')
      .col-lg-8.mb-5
        LineaTiempoD.color-primario
          .row.justify-content-center.mt-3(numero="1" titulo="Bata plástica y pijama antifluido ")
            .col-md-2.linea-custom.align-self-center(style='text-align: center;')
              figure
                img.mx-auto(src='@/assets/curso/tema2/img15.svg', alt='Bata plástica y pijama antifluido', style='width:72px;')
            .col-md-9.mb-4.mb-md-0
              p La tela antifluido, por sus características, sirve como una barrera que ayuda a rechazar las posibles partículas de líquidos. Se recomienda que sea pantalón y camisa por separado, además, un gorro para cubrir la cabeza o recoger el cabello; superpuesto a esto, debe usarse una bata o delantal plástico que cubra toda la parte delantera, desde el pecho hasta las rodillas, y que cubra por completo los brazos, por lo general, se cierra por la parte posterior de la cintura. Existen otros tipos de batas, tipo overol, que tienen cierres en la parte delantera y son completamente plásticas. 
            
          .row.justify-content-center.mt-3(numero="2" titulo="Botas plásticas o protección para calzado")
            .col-md-2.linea-custom.align-self-center(style='text-align: center;')
              figure
                img.mx-auto(src='@/assets/curso/tema2/img16.svg', alt='Botas plásticas o protección para calzado', style='width:89px;')
            .col-md-9.mb-4.mb-md-0
              p Se recomienda que sean botas plásticas blancas largas, idealmente, que cubran desde la planta del pie hasta unos 2 o 3 dedos abajo de la rodilla, con esto se evitará que posibles derrames de líquidos o sangre se filtren en el calzado, además, es necesario que sean de color blanco, pues permite que siempre se evidencie la limpieza de ellas.
          
          .row.justify-content-center.mt-3(numero="3" titulo="Gafas o careta plástica")
            .col-md-2.linea-custom.align-self-center(style='text-align: center;')
              figure
                img.mx-auto(src='@/assets/curso/tema2/img17.svg', alt='Gafas o careta plástica', style='width:108px;')
            .col-md-9.mb-4.mb-md-0
              p Es normal que existan salpicaduras o derrames de fluidos corporales, por ello se debe cubrir el rostro y sobre todo los ojos, que deben ser aislados con este tipo de elementos para evitar infecciones.
          
          .row.justify-content-center(numero="4" titulo="Protección respiratoria")
            .col-11
              .row.justify-content-center.mt-3
                .col-md-2.linea-custom.align-self-center(style='text-align: center;')
                  figure
                    img.mx-auto(src='@/assets/curso/tema2/img18.svg', alt='Protección respiratoria')
                .col-md-10.mb-4.mb-md-0
                  p Es fundamental tener siempre tapabocas especializados para la protección, porque existen micropartículas de elementos patógenos que se albergan en el aire y penetran a través de la respiración. Se recomienda el uso de mascarillas tipo N95. 
            .col-11
              p.mb-4 Deben quedar bien ajustados ubicándolos alrededor de la cabeza, cuello u orejas, según su forma. Lo más importante es que cubra por completo las vías respiratorias, desde el tabique de la nariz hasta la barbilla.
          
          .row.justify-content-center.mt-3(numero="5" titulo="Guantes")
            .col-md-2.linea-custom.align-self-center(style='text-align: center;')
              figure
                img.mx-auto(src='@/assets/curso/tema2/img19.svg', alt='Guantes', style='width:68px;')
            .col-md-9.mb-4.mb-md-0
              p Se recomienda que sean de material resistente, como el nitrilo o la goma. Los de látex no se recomiendan para el uso funerario, pues el material es poroso, lo que genera que el líquido o pequeñas partículas se filtren más rápido. Se usan para cubrir por completo la mano y los dedos hasta hacer contacto con el área de la muñeca que aísla la bata, protegiendo así por completo las extremidades superiores. Se tienen que cambiar cuando se rompan.
          
    
    figure.mb-5
      img.mx-auto(src='@/assets/curso/tema2/img20.svg', alt='A imagen que presenta el orden adecuado para la implementación de estos elementos de protección personal:', style='')

    .row
      .col-lg-12.p-0
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img(style='min-width:15%')
            img(src='@/assets/curso/tema2/icon7.svg' alt='AvatarTop', style='width:160px;')
          .tarjeta.bg-color1(style='border-radius:0;background-color:#fff; ')
            .p-4.ps-0.mt-4
              p.mb-0 Para finalizar, se debe recordar que con todos estos elementos de bioseguridad se evitan accidentes de orden biológico. El retiro de estos es de suma importancia, pues se deben retirar teniendo las precauciones de no tocar directamente las zonas que estuvieron en contacto directo con el cadáver. Se deben retirar en el área dispuesta para esto, que normalmente es la zona intermedia entre el laboratorio de tanatopraxia y el exterior.

    p.mb-4 El orden adecuado el retiro  de estos elementos de protección personal se presenta a continuación:


    PasosA.color-primario.mb-5(tipo="n")
      .row
        .col-auto
          .tarjeta-avatar-b.mb-2
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/icon8.svg' alt='AvatarTop')
            .tarjeta
              .p-4
                h3 Retirar los guantes
                p.mb-0 Desde una de las manos, se toma el guante de la mano contraria y se extrae. El guante permanece en la mano que tiene aún el guante. Desde un dedo de la otra mano que quedó libre, se debe retirar el guante desde la parte interna, la que está en contacto con la piel y que, por ende, es la zona limpia. Se deben desechar en la caneca de residuos biológicos. Si la piel llegase a tocar la parte sucia de los guantes, se debe lavar las manos inmediatamente y aplicar loción desinfectante o alcohol.
      .row.justify-content-end
        .col-auto
          .tarjeta-avatar-b.mb-2
            .tarjeta
              .p-4.text-start
                h3 Quitar la bata
                p.mb-0 Se retira desamarrando la parte de atrás, sacando los brazos y las manos. Si es de un solo uso, enrollar siempre por la parte interna y desecharla en la caneca de residuos biológicos. Si es de varios usos, previamente, antes de retirar los guantes, debió quedar limpia.
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/icon9.svg' alt='AvatarTop')
            
      .row
        .col-auto
          .tarjeta-avatar-b.mb-2
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/icon10.svg' alt='AvatarTop')
            .tarjeta
              .p-4
                h3 Retirar gafas
                p.mb-0 Guardarlas limpias, en el lugar designado para ello.
      
      .row.justify-content-end
        .col-auto
          .tarjeta-avatar-b.mb-2
            .tarjeta
              .p-4.text-start
                h3 Retirar mascarilla
                p.mb-0 Si es de un solo uso, desecharla, o si es reutilizable, guardarla limpia en el lugar asignado.
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/icon11.svg' alt='AvatarTop')
      .row
        .col-auto
          .tarjeta-avatar-b.mb-2
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/icon12.svg' alt='AvatarTop')
            .tarjeta
              .p-4
                h3 Limpiar pijama
                p.mb-0 Guardar pijama antifluido y lavarla todos los días luego de la labor funeraria.
        
      .row.justify-content-end
        .col-auto
          .tarjeta-avatar-b.mb-2
            .tarjeta
              .p-4.text-start
                h3 Retirar botas
                p.mb-0 Retirar el calzado especializado para dicha labor -botas plásticas blancas.
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/icon13.svg' alt='AvatarTop')
      .row
        .col-auto
          .tarjeta-avatar-b.mb-2
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/icon14.svg' alt='AvatarTop')
            .tarjeta
              .p-4
                h3 Lavar las manos
                p.mb-0 Lavar muy bien las manos, antebrazo y brazo.

    p.mb-4 Luego de haber identificado algunos elementos de protección, es importante adicionar al uso de estos la limpieza de las manos, ya que son una parte del cuerpo del funcionario necesaria para la manipulación del cadáver. Una vez finalice esta función, se recomienda un lavado de manos.
    p.mb-5 El lavado de las manos incluye la palma, el dorso, los dedos y las uñas; para estas últimas se recomiendan que estén cortas, sin esmalte y limpias. Para el lavado eficiente de las manos se debe usar agua limpia y jabón desinfectante. Se le sugiere observar el siguiente recurso de aprendizaje para que perciba un buen lavado de manos.
    figure.mb-5
      .video
        <iframe width="933" height="525" src="https://www.youtube.com/embed/N5iWzjNWh8A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    .row
      .col-lg-12.p-0
        .tarjeta-avatar-b.mb-4

          .tarjeta-avatar-b__img(style='min-width:15%')
            img(src='@/assets/curso/tema2/icon7.svg' alt='AvatarTop', style='width:160px;')
          .tarjeta.bg-color1(style='border-radius:0;background-color:#fff; ')
            .p-4.ps-0.mt-4
              p.mb-0 Para finalizar, se debe recordar que con todos estos elementos de bioseguridad se evitan accidentes de orden biológico. El retiro de estos es de suma importancia, pues se deben retirar teniendo las precauciones de no tocar directamente las zonas que estuvieron en contacto directo con el cadáver. Se deben retirar en el área dispuesta para esto, que normalmente es la zona intermedia entre el laboratorio de tanatopraxia y el exterior.



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: 'Ley 9 de 1979 ',
        texto:
          'Esta Ley  expone las normas sanitarias para prevención y control de riesgos biológicos, físicos o químicos que alterarían el entorno humano. Para más información consulta este enlace:<br><br><a class="anexo mb-4" href="./downloads/LEY 0009 DE 1979.pdf" target="_blank"><div class="anexo__icono"><img src="./imagenes/icono-pdf.svg" /></div><div class="anexo__texto"><p>Anexo. LEY 9 DE 1979 (enero 24) Diario Oficial No. 35308, del 16 de julio de 1979</p></div></a>',
        icono: require('@/assets/curso/tema2/icon1.svg'),
      },
      {
        titulo: 'Ley 1562 de 2012',
        texto:
          'Por la cual se modifica el sistema de riesgos laborales en materia de salud ocupacional. Esta ley moderniza el sistema de riesgos personales.  Para más información consulta este enlace:<br><br><a class="anexo mb-4" href="./downloads/Ley-1562-de-2012.pdf" target="_blank"><div class="anexo__icono"><img src="./imagenes/icono-pdf.svg" /></div><div class="anexo__texto"><p>Anexo. Anexo. LEY 1562 de 2012 Sistema general de riesgos laborales</p></div></a>',
        icono: require('@/assets/curso/tema2/icon2.svg'),
      },
      {
        titulo: 'Norma Técnica Colombiana NTC 5840',
        texto:
          'Esta Norma establece los requisitos necesarios para la prestación de los servicios funerarios. Para más información consulta el siguiente enlace:<br><br><div class="row"><div class="col-12"> <a class="anexo mb-4 mb-lg-0" href="https://e-collection-icontec-org.bdigital.sena.edu.co/pdfview/viewer.aspx?locale=es-ES&Q=AF60935720F13C6466C0297B7F80FF16&Req=" target="_blank"><div class="anexo__icono"><img src="./imagenes/icono-link.svg" /></div><div class="anexo__texto"><p>Enlace web. Norma Técnica Colombiana NTC 5840</p></div></a></div></div>',
        icono: require('@/assets/curso/tema2/icon3.svg'),
      },
      {
        titulo: 'Norma Técnica Colombiana NTC 6212',
        texto:
          'Esta Norma establece define los términos utilizados en la prestación de servicios funerarios. Para más información, consulta el siguiente enlace:<br><br><div class="row"><div class="col-12"> <a class="anexo mb-4 mb-lg-0" href="https://e-collection-icontec-org.bdigital.sena.edu.co/pdfview/viewer.aspx?locale=es-ES&Q=6002A697B3F03F6282B108144F0748A3&Req=" target="_blank"><div class="anexo__icono"><img src="./imagenes/icono-link.svg" /></div><div class="anexo__texto"><p>Enlace web. Norma Técnica Colombiana NTC 6212</p></div></a></div></div>',
        icono: require('@/assets/curso/tema2/icon4.svg'),
      },
    ],
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
