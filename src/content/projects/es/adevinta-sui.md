---
title: "Design system SUI"
headline: "Un design system para cuatro marketplaces"
summary: "De un UI kit en Sketch a SUI, el design system en React que comparten Coches.net, Fotocasa, Milanuncios y Habitaclia, con un tema por marca y de código abierto."
client: "Adevinta Spain (Coches.net, Fotocasa, Milanuncios, Habitaclia)"
sector: "Marketplaces online"
year: "2017 a 2019"
role: "Senior UX/UI Designer, Growth and Retention"
team: "Diseñadores y la comunidad frontend de los marketplaces"
duration: "2 años"
tools: [Sketch, Abstract, React, SUI Components]
cover: layers
featured: true
order: 2.8
tldr:
  - "Coches.net estaba migrando su web y sus apps de iOS y Android a una nueva tecnología, y diseño trabajaba con un UI kit en Sketch sin control de versiones. Diseño y desarrollo se iban separando, y cada marketplace resolvía los mismos problemas por su cuenta."
  - "Además de mi trabajo en growth y retención, fui uno de los responsables del design system en la vertical de motor: con researchers y diseñadores de todas las plataformas unimos varios sistemas en uno, sobre una estructura de triángulo invertido que propuse, y lo fuimos perfeccionando paso a paso desde Sketch con Abstract hasta que los componentes fueron componentes React completamente personalizados en SUI, con un tema por marca."
  - "Un solo sistema compartido sirvió a Coches.net, Fotocasa, Milanuncios y Habitaclia. Entre 2017 y 2019 la librería pública pasó de unos 24 componentes sueltos a unos 42 organizados en átomos y moléculas, cada marca con su propio tema."
metrics:
  - value: "4"
    label: "marketplaces en un solo sistema"
    method: "Temas de marca en el repositorio público de SUI"
  - value: "24 → 42"
    label: "componentes, ahora con estructura atómica"
    method: "Historial del repositorio público, de mayo de 2017 a mayo de 2019"
  - value: "3"
    label: "plataformas en la transformación"
    method: "Web, iOS y Android"
links:
  - label: "SUI Components en GitHub"
    href: https://github.com/SUI-Components/sui-components
  - label: "SUI Studio, el catálogo de componentes en vivo"
    href: https://sui-components.vercel.app/
---
## El problema

Coches.net estaba en plena transformación tecnológica de su web y sus apps de iOS y Android. Diseño seguía trabajando con un UI kit en Sketch, y Sketch no tenía entonces un control de versiones real: los archivos se copiaban, se renombraban y se sobrescribían, nadie sabía cuál era la última versión, y lo que desarrollo construía se alejaba de lo que diseño había dibujado.

En los marketplaces españoles de Adevinta pasaba lo mismo. Coches.net, Fotocasa, Milanuncios y Habitaclia tenían marcas distintas pero necesidades muy parecidas: anuncios, búsqueda, filtros, formularios, alertas. Cada uno las resolvía por su cuenta.

Además, cada equipo de plataforma había empezado su propio design system. Web, iOS y Android tenían buenas ideas, pero ninguno era la referencia.

> ¿Cómo comparten cuatro marcas un sistema sin parecer todas iguales?

## Mi papel

Era Senior UX/UI Designer en el equipo de Growth and Retention. Además de ese trabajo de producto, participé en la transformación tecnológica de la web, iOS y Android y fui uno de los responsables del design system en la vertical de motor (Coches.net). Para cada componente eso suponía tres comprobaciones:

- **Definición:** ¿resuelve la necesidad real, con los estados y el comportamiento adecuados?
- **Implementación:** ¿es viable tal como está especificado, y lo construido coincide con el diseño?
- **Librería y plataformas:** ¿está bien integrado en la librería compartida, y funciona al aplicarse en web, iOS y Android?

Validaba, gestionaba y testeaba los componentes con esas comprobaciones antes de que llegaran a los productos.

## De varios sistemas a uno

Formé parte de un equipo de researchers, interaction designers y UX designers de las distintas plataformas. Cada uno había construido un design system para su propia plataforma, y durante un tiempo los perfeccionamos en paralelo. Después de muchas conversaciones y puestas en común acordamos trabajar un sistema único, y la pregunta pasó a ser cómo estructurarlo para que todos los diseñadores lo usaran de la misma manera.

## El triángulo invertido

Propuse una estructura tomada de CSS: el triángulo invertido. La capa más ancha, arriba, llega a todo y cambia poco; cada capa de abajo es más específica y se apoya en la anterior. En la práctica, una librería de foundations en Sketch estaba vinculada a los componentes, y cada componente tomaba sus atributos de esos foundations en lugar de definir los suyos.

<figure class="tri"><div><strong>Foundations</strong><span>Color, tipografía, espaciado y elevación en una librería de Sketch</span></div><div><strong>Componentes</strong><span>Toman cada atributo de los foundations, nunca valores propios</span></div><div><strong>Accesibilidad</strong><span>Contraste, foco, tamaños y etiquetas revisados en cada componente</span></div><div><strong>Patrones generales</strong><span>Cómo funcionan la búsqueda, los filtros, los formularios y las alertas en todas partes</span></div><div><strong>Patrones de vertical</strong><span>Lo que solo necesitan los usuarios de motor, inmobiliaria o clasificados</span></div><figcaption>El triángulo invertido que propuse para el sistema compartido: amplio y estable arriba, específico de cada vertical abajo.</figcaption></figure>

Como todos los diseñadores usaban los mismos foundations, el sistema alineó al equipo muy rápido: un cambio en un color o en un espaciado llegaba a todos los componentes que lo usaban, en todas las plataformas.

Con la estructura acordada, recorrimos el triángulo hacia abajo en este orden:

<ol class="phases"><li><strong>Definición de componentes</strong><span>Para qué sirve cada componente, sus estados, variantes y comportamiento</span></li><li><strong>Accesibilidad</strong><span>Contraste, estados de foco, tamaños táctiles y etiquetas como parte de cada definición</span></li><li><strong>Patrones de interacción</strong><span>Patrones generales para todos los productos y después los particulares de cada vertical</span></li></ol>

<p class="phases-note">De la base compartida a lo que necesita cada vertical.</p>

El último paso fue el más importante. Quien compra un coche, quien busca un piso y quien vende un sofá de segunda mano son usuarios distintos con necesidades distintas. El sistema compartido les daba la misma calidad y coherencia, y los patrones de cada vertical permitían que cada producto respondiera a sus propios usuarios.

## De un UI kit a un sistema en tres pasos

No lo sustituí todo de golpe. Cada paso resolvía el problema más doloroso del anterior.

<ol class="phases"><li><strong>Sketch + Abstract</strong><span>Una librería compartida con versiones, ramas y revisiones, en lugar de copias de archivos</span></li><li><strong>Fundamentos compartidos</strong><span>Color, tipografía y espaciado como variables, componentes agrupados en átomos y moléculas</span></li><li><strong>Componentes React</strong><span>Componentes completamente personalizados en SUI, las mismas piezas que usaba diseño, con un tema por marca</span></li></ol>

<p class="phases-note">De archivos a un sistema vivo, paso a paso.</p>

- **Primero, control de versiones.** Abstract dio a diseño lo que git daba a ingeniería: una única fuente de verdad, ramas para explorar sin romper la librería y el historial de cada cambio. Era la condición para todo lo demás.
- **Después, un lenguaje común.** Los componentes se organizaron en átomos y moléculas, y sus estilos pasaron a variables de tema compartidas. Diseño y código empezaron a llamar igual a las mismas cosas.
- **Por último, el código como fuente de verdad.** Los componentes pasaron a ser componentes React completamente personalizados en SUI, así un cambio hecho una vez llegaba a todos los productos que los usaban.

## Un sistema, muchas marcas

La decisión clave fue separar lo compartido de lo que es marca. El comportamiento, la estructura y la accesibilidad viven en los componentes comunes; el color, la tipografía y otros valores de marca, en un tema por marketplace.

| Capa | Qué contiene | Quién la comparte |
| --- | --- | --- |
| Componentes | Átomos y moléculas: botones, campos, selects, tarjetas, alertas y más, con su comportamiento | Todos los marketplaces |
| Tema común | Las variables que lee cada componente: roles de color, escala tipográfica, espaciado, radios, elevación | Todos los marketplaces |
| Tema de marca | Los valores de cada marca para esas variables | Uno por marketplace: Coches.net, Fotocasa, Milanuncios, Habitaclia |

Así Coches.net seguía pareciendo Coches.net y Fotocasa, Fotocasa, pero una corrección o mejora en un componente llegaba a todos a la vez.

## Cerca de frontend

Durante todo el proyecto trabajé muy cerca de los desarrolladores frontend. Eso me ayudó a entender cómo necesitaban las cosas y cómo teníamos que preparar el diseño para que la entrega tuviera menos fricciones. Cambió mi forma de entregar el trabajo:

- **Los mismos nombres que en el código**, para que un componente o una variable significara lo mismo en Sketch y en React.
- **Valores del tema, nunca valores sueltos**, para que lo que recibía desarrollo ya coincidiera con las variables que usaban.
- **Cada estado y caso límite en la definición**, para que llegaran menos preguntas durante el desarrollo.

Esa cercanía es también lo que permitió pasar de Sketch a componentes React sin perder lo que diseño había definido.

## Abierto por defecto

SUI es de código abierto. El código, el historial y los temas de marca son públicos en GitHub, y SUI Studio muestra el catálogo en vivo. Esa apertura formaba parte del modelo: las propuestas y los errores se discutían en abierto, y cada paquete tenía su propia versión, así un equipo podía actualizar un componente sin esperar a un release global.

El código es obra de la comunidad frontend de Adevinta Spain. Mi parte estaba en el lado del diseño para la vertical de motor: iniciar el sistema en Sketch, versionarlo, validar y testear cada componente en definición, implementación y uso en todas las plataformas, y mantener diseño y código alineados mientras pasaba a React.

## Qué aprendí

- **La alineación sale de las conversaciones, no de los archivos.** El sistema único solo funcionó cuando todos los equipos de plataforma le dieron forma juntos.
- **El control de versiones también es un problema de diseño.** Hasta que diseño tuvo historial y ramas, cualquier otra mejora era frágil.
- **Separar marca y comportamiento pronto.** Los temas permiten que varias marcas compartan un sistema sin renunciar a su identidad.
- **Avanzar paso a paso.** Cada paso facilitaba el trabajo del equipo desde el primer día, y eso es lo que mantenía a la gente usando el sistema mientras todavía se construía.
- **Trabajar al lado de frontend.** Entender cómo necesitan las cosas los desarrolladores es la forma más rápida de quitar fricción entre diseño y código.
