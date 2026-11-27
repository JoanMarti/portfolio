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

El archivo de la librería conserva los fundamentos tal como se definieron: una escala tipográfica para escritorio y móvil sobre una base de 16 px, seis roles de color con su gama completa de luminosidad, y espaciado, iconos y radios sobre una base de 8 px.

<div class="lib-found">
  <figure class="wide"><img src="/projects/adevinta-sui/lib-type.webp" alt="Escala tipográfica en Open Sans: titulares de Giant a Large y cuerpo de Medium a xxSmall, cada uno con su relación con la base, tamaño e interlineado para escritorio y móvil." loading="lazy" /><figcaption>Escala tipográfica: cada tamaño es la base más o menos un paso, para escritorio y móvil.</figcaption></figure>
  <figure><img src="/projects/adevinta-sui/lib-color.webp" alt="Definición de color: primario #2B91C1, acento #D57C1B, gris #777777, éxito #00A544, alerta #FF6335 y error #E93E40, cada uno con su gradación completa de luminosidad y una versión comprimida." loading="lazy" /><figcaption>Seis roles de color, cada uno con su gama de luminosidad.</figcaption></figure>
  <figure><img src="/projects/adevinta-sui/lib-spacing.webp" alt="Márgenes y paddings de 4 a 48 px sobre una base de 8 px, tamaños de icono de 16 a 40 px y radios de 0, 2 px y 50%." loading="lazy" /><figcaption>Espaciado, iconos y radios desde la misma base. Del archivo de la librería de SUI en Figma.</figcaption></figure>
</div>

El historial público del repositorio muestra el cambio. La librería creció primero en carpetas sueltas, después empezó de nuevo con estructura atómica y creció desde ahí.

<figure class="chart"><p class="chart-title">Componentes de la librería pública de SUI, por trimestre</p><ul class="chart-legend"><li><i style="background:#6b7682"></i>Carpetas sueltas</li><li><i style="background:#ff5a4f"></i>Átomos</li><li><i style="background:#5b7cff"></i>Moléculas y otros</li></ul><div class="chart-scroll"><svg class="chart-svg" viewBox="0 0 720 300" role="img" aria-labelledby="sui-chart-t"><title id="sui-chart-t">Componentes de la librería pública de SUI, por trimestre</title><line class="grid" x1="44" x2="710" y1="256.0" y2="256.0"/><text class="ax" x="36" y="260.0" text-anchor="end">0</text><line class="grid" x1="44" x2="710" y1="177.3" y2="177.3"/><text class="ax" x="36" y="181.3" text-anchor="end">30</text><line class="grid" x1="44" x2="710" y1="98.7" y2="98.7"/><text class="ax" x="36" y="102.7" text-anchor="end">60</text><line class="grid" x1="44" x2="710" y1="20.0" y2="20.0"/><text class="ax" x="36" y="24.0" text-anchor="end">90</text><path fill="#6b7682" d="M56.2 256.0V252.1Q56.2 248.1 60.2 248.1H83.3Q87.3 248.1 87.3 252.1V256.0Z"><title>ene 17: 3 en carpetas sueltas</title></path><text class="ax" x="71.8" y="272" text-anchor="middle">ene 17</text><path fill="#6b7682" d="M111.7 256.0V204.9Q111.7 200.9 115.7 200.9H138.8Q142.8 200.9 142.8 204.9V256.0Z"><title>abr 17: 21 en carpetas sueltas</title></path><text class="ax odd" x="127.2" y="272" text-anchor="middle">abr 17</text><path fill="#6b7682" d="M167.2 256.0V191.8Q167.2 187.8 171.2 187.8H194.3Q198.3 187.8 198.3 191.8V256.0Z"><title>jul 17: 26 en carpetas sueltas</title></path><text class="ax" x="182.8" y="272" text-anchor="middle">jul 17</text><text class="val" x="182.8" y="181.8" text-anchor="middle">26</text><path fill="#6b7682" d="M222.7 256.0V155.1Q222.7 151.1 226.7 151.1H249.8Q253.8 151.1 253.8 155.1V256.0Z"><title>oct 17: 40 en carpetas sueltas</title></path><text class="ax odd" x="238.2" y="272" text-anchor="middle">oct 17</text><path fill="#6b7682" d="M278.2 256.0V103.9H309.3V256.0Z"><title>ene 18: 58 en carpetas sueltas</title></path><path fill="#ff5a4f" d="M278.2 101.9V90.8H309.3V101.9Z"><title>ene 18: 5 átomos</title></path><path fill="#5b7cff" d="M278.2 88.8V92.2Q278.2 88.2 282.2 88.2H305.3Q309.3 88.2 309.3 92.2V88.8Z"><title>ene 18: 1 moléculas y otros</title></path><text class="ax" x="293.8" y="272" text-anchor="middle">ene 18</text><path fill="#6b7682" d="M333.7 256.0V85.6H364.8V256.0Z"><title>abr 18: 65 en carpetas sueltas</title></path><path fill="#ff5a4f" d="M333.7 83.6V67.2H364.8V83.6Z"><title>abr 18: 7 átomos</title></path><path fill="#5b7cff" d="M333.7 65.2V63.3Q333.7 59.3 337.7 59.3H360.8Q364.8 59.3 364.8 63.3V65.2Z"><title>abr 18: 3 moléculas y otros</title></path><text class="ax odd" x="349.2" y="272" text-anchor="middle">abr 18</text><path fill="#6b7682" d="M389.2 256.0V77.7H420.3V256.0Z"><title>jul 18: 68 en carpetas sueltas</title></path><path fill="#ff5a4f" d="M389.2 75.7V43.6H420.3V75.7Z"><title>jul 18: 13 átomos</title></path><path fill="#5b7cff" d="M389.2 41.6V37.1Q389.2 33.1 393.2 33.1H416.3Q420.3 33.1 420.3 37.1V41.6Z"><title>jul 18: 4 moléculas y otros</title></path><text class="ax" x="404.8" y="272" text-anchor="middle">jul 18</text><text class="val" x="404.8" y="27.1" text-anchor="middle">85</text><path fill="#ff5a4f" d="M444.7 256.0V219.3H475.8V256.0Z"><title>oct 18: 14 átomos</title></path><path fill="#5b7cff" d="M444.7 217.3V199.7Q444.7 195.7 448.7 195.7H471.8Q475.8 195.7 475.8 199.7V217.3Z"><title>oct 18: 9 moléculas y otros</title></path><text class="ax odd" x="460.2" y="272" text-anchor="middle">oct 18</text><path fill="#ff5a4f" d="M500.2 256.0V211.4H531.3V256.0Z"><title>ene 19: 17 átomos</title></path><path fill="#5b7cff" d="M500.2 209.4V181.3Q500.2 177.3 504.2 177.3H527.3Q531.3 177.3 531.3 181.3V209.4Z"><title>ene 19: 13 moléculas y otros</title></path><text class="ax" x="515.8" y="272" text-anchor="middle">ene 19</text><path fill="#ff5a4f" d="M555.7 256.0V211.4H586.8V256.0Z"><title>abr 19: 17 átomos</title></path><path fill="#5b7cff" d="M555.7 209.4V163.0Q555.7 159.0 559.7 159.0H582.8Q586.8 159.0 586.8 163.0V209.4Z"><title>abr 19: 20 moléculas y otros</title></path><text class="ax odd" x="571.2" y="272" text-anchor="middle">abr 19</text><path fill="#ff5a4f" d="M611.2 256.0V208.8H642.3V256.0Z"><title>jul 19: 18 átomos</title></path><path fill="#5b7cff" d="M611.2 206.8V149.9Q611.2 145.9 615.2 145.9H638.3Q642.3 145.9 642.3 149.9V206.8Z"><title>jul 19: 24 moléculas y otros</title></path><text class="ax" x="626.8" y="272" text-anchor="middle">jul 19</text><text class="val" x="626.8" y="139.9" text-anchor="middle">42</text><path fill="#ff5a4f" d="M666.7 256.0V208.8H697.8V256.0Z"><title>oct 19: 18 átomos</title></path><path fill="#5b7cff" d="M666.7 206.8V149.9Q666.7 145.9 670.7 145.9H693.8Q697.8 145.9 697.8 149.9V206.8Z"><title>oct 19: 24 moléculas y otros</title></path><text class="ax odd" x="682.2" y="272" text-anchor="middle">oct 19</text><line class="ann" x1="432.5" x2="432.5" y1="20" y2="256"/><text class="ann-t" x="438.5" y="30">Sep 2018: se eliminan las carpetas sueltas,</text><text class="ann-t" x="438.5" y="44">la librería sigue como átomos y moléculas</text></svg></div><figcaption>Contado a partir del historial público del repositorio de SUI en GitHub: un punto al inicio de cada trimestre. Antes del cambio, los componentes vivían en carpetas por tema (tarjetas, formularios, etiquetas); después, por nivel.</figcaption><details class="chart-table"><summary>Ver los datos</summary><table><thead><tr><th>Trimestre</th><th>Carpetas sueltas</th><th>Átomos</th><th>Moléculas y otros</th></tr></thead><tbody><tr><td>ene 17</td><td>3</td><td>0</td><td>0</td></tr><tr><td>abr 17</td><td>21</td><td>0</td><td>0</td></tr><tr><td>jul 17</td><td>26</td><td>0</td><td>0</td></tr><tr><td>oct 17</td><td>40</td><td>0</td><td>0</td></tr><tr><td>ene 18</td><td>58</td><td>5</td><td>1</td></tr><tr><td>abr 18</td><td>65</td><td>7</td><td>3</td></tr><tr><td>jul 18</td><td>68</td><td>13</td><td>4</td></tr><tr><td>oct 18</td><td>0</td><td>14</td><td>9</td></tr><tr><td>ene 19</td><td>0</td><td>17</td><td>13</td></tr><tr><td>abr 19</td><td>0</td><td>17</td><td>20</td></tr><tr><td>jul 19</td><td>0</td><td>18</td><td>24</td></tr><tr><td>oct 19</td><td>0</td><td>18</td><td>24</td></tr></tbody></table></details></figure>

## Un sistema, muchas marcas

La decisión clave fue separar lo compartido de lo que es marca. El comportamiento, la estructura y la accesibilidad viven en los componentes comunes; el color, la tipografía y otros valores de marca, en un tema por marketplace.

| Capa | Qué contiene | Quién la comparte |
| --- | --- | --- |
| Componentes | Átomos y moléculas: botones, campos, selects, tarjetas, alertas y más, con su comportamiento | Todos los marketplaces |
| Tema común | Las variables que lee cada componente: roles de color, escala tipográfica, espaciado, radios, elevación | Todos los marketplaces |
| Tema de marca | Los valores de cada marca para esas variables | Uno por marketplace: Coches.net, Fotocasa, Milanuncios, Habitaclia |

Así Coches.net seguía pareciendo Coches.net y Fotocasa, Fotocasa, pero una corrección o mejora en un componente llegaba a todos a la vez.

El mismo componente botón, renderizado desde los paquetes públicos con dos temas: el tema base y el de Milanuncios. Cambian el color, el radio y la tipografía; el componente no.

<div class="themes"><figure><img src="/projects/adevinta-sui/sui-theme-base.webp" alt="Botones con el tema base de SUI: primario azul, acento naranja, esquinas rectas." /><figcaption>Tema base</figcaption></figure><figure><img src="/projects/adevinta-sui/sui-theme-milanuncios.webp" alt="Los mismos botones con el tema de Milanuncios: primario verde, acento amarillo, esquinas redondeadas y Verdana." /><figcaption>Tema Milanuncios</figcaption></figure></div>

## Cerca de frontend

Durante todo el proyecto trabajé muy cerca de los desarrolladores frontend. Eso me ayudó a entender cómo necesitaban las cosas y cómo teníamos que preparar el diseño para que la entrega tuviera menos fricciones. Cambió mi forma de entregar el trabajo:

- **Los mismos nombres que en el código**, para que un componente o una variable significara lo mismo en Sketch y en React.
- **Valores del tema, nunca valores sueltos**, para que lo que recibía desarrollo ya coincidiera con las variables que usaban.
- **Cada estado y caso límite en la definición**, para que llegaran menos preguntas durante el desarrollo.

Esa cercanía es también lo que permitió pasar de Sketch a componentes React sin perder lo que diseño había definido.

Esos valores siguen en el código. El tema por defecto de SUI usa hoy los colores, la tipografía y las escalas que se definieron en la librería:

| En la librería | En el tema de SUI hoy |
| --- | --- |
| Primario #2B91C1 | <code>$c-primary</code> #2b91c1 |
| Acento #D57C1B | <code>$c-accent</code> #d57c1b |
| Gris #777777 | <code>$c-gray</code> #777777 |
| Éxito, alerta, error #00A544, #FF6335, #E93E40 | <code>$c-success</code>, <code>$c-alert</code>, <code>$c-error</code> con los mismos valores |
| Open Sans | <code>$ff-sans-serif</code> Open Sans |
| Base tipográfica 16 px, pasos B + 12, + 8, + 4, + 2, − 2, − 4, − 6 | <code>$fz-base</code> 16 px, con los mismos pasos |
| Base de espaciado 8 px, de 4 a 48 px | <code>$p-base</code> y <code>$m-base</code> 8 px, de 4 a 48 px |

En la librería, cada componente se definía con todos sus estados antes de construirse. La hoja del botón cubre botones primarios, secundarios, terciarios y de acento, con iconos, en normal, hover y desactivado, sobre fondo claro y sobre fondo de marca.

![Hoja del botón de la librería de SUI: filas de botones primarios, secundarios, terciarios y de acento en normal, hover y desactivado, con y sin iconos, sobre fondo claro y sobre el fondo azul de marca.](/projects/adevinta-sui/lib-buttons.webp "El botón tal como se definió en la librería, antes del código.")

Las decisiones de diseño se convirtieron en props en el código. El botón tiene cuatro diseños y seis roles de color, y cada uno es un valor que pasa el desarrollador, no un componente nuevo.

![El botón de SUI en cuatro diseños (solid, outline, flat, link) y seis roles de color (primary, accent, neutral, success, alert, error).](/projects/adevinta-sui/sui-button-props.webp "Un componente, 24 combinaciones, cada una elegida con dos props: design y color.")

## Abierto por defecto

SUI es de código abierto. El código, el historial y los temas de marca son públicos en GitHub, y SUI Studio muestra el catálogo en vivo. Esa apertura formaba parte del modelo: las propuestas y los errores se discutían en abierto, y cada paquete tenía su propia versión, así un equipo podía actualizar un componente sin esperar a un release global.

El código es obra de la comunidad frontend de Adevinta Spain. Mi parte estaba en el lado del diseño para la vertical de motor: iniciar el sistema en Sketch, versionarlo, validar y testear cada componente en definición, implementación y uso en todas las plataformas, y mantener diseño y código alineados mientras pasaba a React.

Cada componente es un paquete propio con su código, demo, tests y changelog en el mismo sitio. El botón conserva además su definición original, la especificación que diseño escribió antes del código.

<div class="pkg" role="group" aria-label="Estructura de un paquete de componente de SUI"><p class="pkg-root">components/atom/button/</p><ul><li><code>SPEC.md</code><span>La definición: propósito, tipos, tamaños y reglas, con su estado, versión y responsables de UX, UI y front</span></li><li><code>README.md</code><span>Cómo instalarlo y usarlo</span></li><li><code>src/</code><span>El componente React y sus estilos, que leen el tema</span></li><li><code>demo/</code><span>Los ejemplos en vivo de SUI Studio: diseño, color, tamaño, accesibilidad, teclado</span></li><li><code>test/</code><span>Tests automáticos</span></li><li><code>CHANGELOG.md</code><span>Cada versión, publicada por separado</span></li></ul><p class="pkg-cap">El paquete del botón, tal como está hoy en GitHub.</p></div>

## Decisiones y lo que costaron

**1. Un sistema en lugar de uno por plataforma.** Web, iOS y Android tenían cada uno un design system con buenas ideas, pero ninguno era la referencia.

*Lo que cedimos:* Cada equipo de plataforma renunció a su propio sistema. *Lo que ganamos:* Una sola referencia para todos los diseñadores y desarrolladores de los cuatro marketplaces.

**2. Por pasos en lugar de reescribirlo todo.** Primero Abstract, después fundamentos compartidos y al final componentes React en SUI.

*Lo que cedimos:* Un camino más lento que sustituirlo todo de golpe. *Lo que ganamos:* Cada paso resolvía el problema más urgente del anterior, y los equipos seguían entregando.

**3. Comportamiento compartido, marca en temas.** Los componentes guardan comportamiento, estructura y accesibilidad; cada marketplace tiene su propio tema.

*Lo que cedimos:* Menos libertad de marca dentro de los componentes. *Lo que ganamos:* Un arreglo en un componente llega a las cuatro marcas a la vez.

## Qué aprendí

- **La alineación sale de las conversaciones, no de los archivos.** El sistema único solo funcionó cuando todos los equipos de plataforma le dieron forma juntos.
- **El control de versiones también es un problema de diseño.** Hasta que diseño tuvo historial y ramas, cualquier otra mejora era frágil.
- **Separar marca y comportamiento pronto.** Los temas permiten que varias marcas compartan un sistema sin renunciar a su identidad.
- **Avanzar paso a paso.** Cada paso facilitaba el trabajo del equipo desde el primer día, y eso es lo que mantenía a la gente usando el sistema mientras todavía se construía.
- **Trabajar al lado de frontend.** Entender cómo necesitan las cosas los desarrolladores es la forma más rápida de quitar fricción entre diseño y código.
