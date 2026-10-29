---
title: HMI conectado del Audi A6
headline: La mirada en la carretera
summary: Arquitectura de la información y modelo de interacción del sistema de infoentretenimiento conectado del Audi A6, probado en un simulador de conducción.
client: Audi (Grupo Volkswagen)
sector: Automoción
year: "2015"
role: Senior UX y HMI Designer
team: UX, ingeniería de HMI y equipos de software y hardware
duration: "TODO"
tools: [Arquitectura de la información, Diseño de interacción, Interacción por voz, Prototipos de alta fidelidad, Tests en simulador]
cover: hmi
featured: false
order: 8
tldr:
  - Los coches se estaban convirtiendo en plataformas conectadas con navegación, multimedia, teléfono, ajustes del vehículo y asistencia a la conducción, y los menús se hacían más profundos con cada función nueva.
  - Definí la arquitectura de la información, el modelo de navegación y los principios de interacción del A6 conectado, pensando primero en el mando giratorio, y probé los prototipos en un simulador de cabina.
  - El resultado fue una estructura de HMI más plana y coherente, capaz de incorporar nuevos servicios conectados sin ganar profundidad, y un modelo común que alineó a diseño e ingeniería.
metrics: []
---


## El problema

En 2015 la industria del automóvil pasaba de los mandos independientes a sistemas digitales totalmente conectados. Las funciones crecían más rápido de lo que la interfaz podía absorber, y eso provocaba menús profundos, patrones incoherentes, funciones difíciles de encontrar y, sobre todo, **distracciones al volante**.

Diseñar para un coche no se parece a diseñar para la web o para un móvil:

- **La persona está conduciendo.** La atención es limitada, las interacciones tienen que ser rápidas y previsibles, y los errores afectan a la seguridad.
- **El sistema son muchos sistemas.** Navegación, multimedia, teléfono, ajustes y asistencia tienen cada uno su propio ciclo de desarrollo y comportamientos heredados.
- **El hardware es fijo.** Un único tamaño de pantalla, un rendimiento limitado y un mando giratorio con botones físicos como forma principal de control.

Por eso era tanto un proyecto de diseño de sistemas como de interfaz.

![Diseñadores e ingenieros trabajando alrededor de un Audi prototipo en el taller de desarrollo](/projects/audi/workshop.webp "Los conceptos se comprobaban alrededor del coche real, no solo en una pantalla.")

## Qué hice

Me centré en la experiencia a nivel de sistema: la arquitectura de la información, el modelo de navegación y la lógica de interacción, los principios del HMI, los layouts de pantalla y los componentes, y prototipos de alta fidelidad para probar dentro de la cabina. Gran parte del trabajo consistió en hacer de puente con ingeniería para que los conceptos funcionaran en el hardware real.

## El HMI como sistema

El HMI no es una pantalla. Está entre cuatro bloques, y una decisión en cualquiera de ellos repercute en todos los demás.

<figure class="hmi-sys" aria-label="Diagrama del sistema HMI con sus entradas, salidas, sistemas del vehículo y plataforma">
  <div class="node n-vs"><p>Sistemas del vehículo</p><ul><li>Navegación</li><li>Multimedia</li><li>Teléfono</li><li>Ajustes del vehículo</li><li>Asistencia a la conducción (ADAS)</li><li>Servicios conectados</li><li>Estado del vehículo</li></ul></div>
  <span class="arr a-d1" aria-hidden="true"></span>
  <div class="node n-in"><p>Entradas</p><ul><li>Mando giratorio</li><li>Botones del volante</li><li>Pantalla táctil</li><li>Control por voz</li></ul></div>
  <span class="arr a-r1" aria-hidden="true"></span>
  <div class="node n-hmi"><p>Sistema HMI</p><ul><li>Capa de UI</li><li>Lógica de interacción</li><li>Estados del sistema</li><li>Feedback del sistema</li><li>Modelo de navegación</li></ul></div>
  <span class="arr a-r2" aria-hidden="true"></span>
  <div class="node n-out"><p>Salidas</p><ul><li>Pantalla central</li><li>Cuadro de instrumentos</li><li>Head-up display</li><li>Feedback sonoro</li></ul></div>
  <span class="arr a-d2" aria-hidden="true"></span>
  <div class="node n-pf"><p>Plataforma</p><ul><li>Sistema embebido</li><li>Datos del vehículo y bus CAN</li><li>Sensores</li><li>Conectividad y nube</li></ul></div>
  <figcaption>El contenido llega de los sistemas del vehículo, la plataforma marca los límites y el HMI convierte cuatro entradas en cuatro salidas.</figcaption>
</figure>

Los **sistemas del vehículo** aportan el contenido, cada uno con su propio ciclo de versiones. Las **entradas** llegan por cuatro vías: mando giratorio, botones del volante, pantalla táctil y voz. Las **salidas** van a la pantalla central, el cuadro de instrumentos, el head-up display y el audio. Por debajo, la **plataforma** (sistema embebido, datos del vehículo por el bus CAN, sensores y conectividad en la nube) impone límites estrictos de rendimiento y tiempos. Dibujar este mapa primero dio a diseño e ingeniería una sola imagen de dónde caía cada decisión.

## Primero los principios, después las pantallas

Antes de diseñar pantallas acordamos unos principios que cualquier equipo pudiera usar para tomar decisiones:

- Navegación plana en lugar de menús profundos.
- Los mismos patrones de interacción en todos los sistemas.
- Comportamiento previsible y respuesta inmediata.
- Menos pasos para las tareas frecuentes.
- Primero el mando giratorio, después la pantalla táctil.
- Que la mirada del conductor siga en la carretera.

## Arquitectura de la información

Cinco categorías agrupadas por lo que el conductor quiere hacer, cada una con cinco destinos como máximo. El árbol tiene solo dos niveles: inicio, una categoría y un destino.

<figure class="tree" aria-label="Árbol de navegación del HMI desde el inicio hasta cinco categorías">
  <p class="root">INICIO</p>
  <div class="cols">
    <div><p class="cat">Navegación</p><ul><li>Introducir destino</li><li>Destinos recientes</li><li>Favoritos</li><li>Ajustes del mapa</li></ul></div>
    <div><p class="cat">Multimedia</p><ul><li>Radio</li><li>Biblioteca</li><li>Audio Bluetooth</li><li>USB</li><li>Ajustes multimedia</li></ul></div>
    <div><p class="cat">Teléfono</p><ul><li>Contactos</li><li>Historial de llamadas</li><li>Teclado</li><li>Mensajes</li><li>Ajustes del teléfono</li></ul></div>
    <div><p class="cat">Vehículo</p><ul><li>Ajustes de conducción</li><li>Asistencia a la conducción</li><li>Luces</li><li>Climatización</li><li>Estado del vehículo</li></ul></div>
    <div><p class="cat">Ajustes</p><ul><li>Pantalla</li><li>Sonido</li><li>Conectividad</li><li>Sistema</li><li>Perfiles de usuario</li></ul></div>
  </div>
  <figcaption>Como mucho dos niveles por debajo del inicio. Los nuevos servicios conectados entran en una categoría existente en lugar de añadir profundidad.</figcaption>
</figure>

Los destinos más frecuentes están también en una barra fija a la izquierda de la pantalla, así el conductor salta a navegación, multimedia, teléfono o radio desde cualquier sitio sin volver al inicio.

## Decisiones clave

**Menos categorías principales, agrupadas según lo que quiere hacer el conductor** y no según el sistema técnico responsable de cada función. Algunas responsabilidades de ingeniería quedaron menos claras, pero los conductores encontraban las cosas donde esperaban.

**Un modelo de navegación poco profundo** con plantillas de pantalla coherentes, para que cada nuevo servicio conectado encajara en un patrón existente en lugar de añadir un nivel.

**Una zona de estado fija** para los mensajes del sistema y la información crítica, para que el conductor nunca tuviera que buscarla.

**Personalización limitada.** Menos opciones significaban más fiabilidad y previsibilidad, la decisión correcta en un contexto donde la seguridad va primero.

## Un modelo, cuatro entradas

La misma estructura tenía que funcionar tanto si el conductor giraba el mando, pulsaba un botón del volante, tocaba la pantalla o hablaba. Por eso el foco, el feedback y las confirmaciones se diseñaron una sola vez y después se adaptaron a cada entrada, en lugar de diseñar cuatro interfaces distintas.

La voz se diseñó para sonar natural y no como un lenguaje de comandos. En el contexto de climatización, la pantalla sugiere frases como “Mir ist zu warm” (tengo calor) y resalta las palabras que el sistema entiende, así el conductor aprende qué decir sin manual.

![Pantalla de control por voz para climatización con frases sugeridas sobre los mandos de clima](/projects/audi/voice-climate.webp "Voz en contexto: frases sugeridas para climatización, con las palabras que el sistema entiende resaltadas. Los mandos de clima siguen en la pantalla inferior.")

## La interfaz en el coche

Dos pantallas táctiles se reparten el trabajo: la superior para infoentretenimiento y navegación, la inferior para climatización y confort. El conductor siempre sabe qué hace cada pantalla.

![Puesto de conducción del Audi A6 con el cuadro de instrumentos y las dos pantallas táctiles centrales](/projects/audi/cockpit.webp "El puesto de conducción: cuadro de instrumentos, pantalla superior para infoentretenimiento e inferior para climatización.")

La pantalla de inicio es una cuadrícula de mosaicos grandes con un color de acento por categoría, así cada destino se reconoce de un vistazo por su imagen y su color sin tener que leer. Una barra de estado mantiene la conectividad, el teléfono y el perfil siempre en el mismo sitio.

<div class="compare compare--wide">
  <figure>
    <img src="/projects/audi/home-screen.webp" alt="La pantalla de inicio con ocho mosaicos grandes y la barra fija de la izquierda" />
    <p class="compare-note">Inicio: mosaicos grandes, un color por categoría y la barra fija de la izquierda.</p>
  </figure>
  <figure>
    <img src="/projects/audi/home-tiles.webp" alt="Detalle de los mosaicos de navegación, coche, teléfono y multimedia" />
    <p class="compare-note">Mosaicos que se leen de un vistazo: icono, texto y color trabajan juntos.</p>
  </figure>
</div>

### Anatomía de la pantalla de inicio

Una pantalla que se lee en una fracción de segundo necesita una jerarquía estricta. Cada elemento tiene una sola función, y el orden en que la vista los encuentra está diseñado, no se deja al azar.

<figure class="anatomy">
  <div class="anatomy-screen"><svg viewBox="0 0 800 450" role="img" aria-label="Wireframe anotado de la pantalla de inicio del HMI con siete elementos numerados" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="800" height="450" rx="18" fill="#0c0d10"/><g fill="none" stroke="#d4d4d8" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M648 36 L658 45 L653 49 L653 31 L658 35 L648 44"/><circle cx="676" cy="36" r="3.5"/><path d="M669 49 q7 -10 14 0"/><rect x="692" y="31" width="9" height="17" rx="2"/></g><g fill="#d4d4d8"><rect x="710" y="44" width="3" height="5"/><rect x="715" y="40" width="3" height="9"/><rect x="720" y="36" width="3" height="13"/><rect x="725" y="32" width="3" height="17" opacity=".4"/></g><text x="742" y="47" fill="#e4e4e7" font-size="15" font-weight="600">16:11</text><rect x="18" y="70" width="70" height="340" rx="6" fill="#16171b"/><rect x="18" y="70" width="70" height="68" rx="6" fill="#2a2c33"/><path d="M40 110 L53 98 L66 110 M44 107 L44 120 L62 120 L62 107" fill="none" stroke="#e4e4e7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><path d="M53 160 L63 188 L53 182 L43 188 Z" fill="none" stroke="#e4e4e7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><path d="M48 254 L48 232 L62 228 L62 250" fill="none" stroke="#e4e4e7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><circle cx="45" cy="254" r="4" fill="none" stroke="#e4e4e7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><circle cx="59" cy="250" r="4" fill="none" stroke="#e4e4e7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><path d="M44 296 q2 -6 6 -4 l4 6 q1 3 -2 5 q3 7 9 10 q2 -3 5 -2 l6 4 q2 4 -4 6 q-14 0 -24 -25 z" fill="none" stroke="#e4e4e7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><circle cx="53" cy="372" r="3" fill="none" stroke="#e4e4e7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><path d="M53 375 L53 392 M44 364 a12 12 0 0 0 0 16 M62 364 a12 12 0 0 1 0 16" fill="none" stroke="#e4e4e7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><line x1="26" y1="138" x2="80" y2="138" stroke="#2a2c33"/><line x1="26" y1="206" x2="80" y2="206" stroke="#2a2c33"/><line x1="26" y1="274" x2="80" y2="274" stroke="#2a2c33"/><line x1="26" y1="342" x2="80" y2="342" stroke="#2a2c33"/><rect x="130" y="80" width="150" height="150" rx="4" fill="#121317" stroke="#2f3138"/><path d="M165 160 Q195 112 243 120" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><path d="M179 166 Q205 128 245 134" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><text x="205" y="202" fill="#f4f4f5" font-size="12.5" font-weight="600" letter-spacing="1" text-anchor="middle">NAVIGATION</text><line x1="136" y1="228" x2="274" y2="228" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><rect x="296" y="80" width="150" height="150" rx="4" fill="#121317" stroke="#2f3138"/><ellipse cx="371" cy="142" rx="34" ry="13" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><ellipse cx="371" cy="139" rx="16" ry="6" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><text x="371" y="202" fill="#f4f4f5" font-size="12.5" font-weight="600" letter-spacing="1" text-anchor="middle">SETTINGS</text><line x1="302" y1="228" x2="440" y2="228" stroke="#d4d4d8" stroke-width="3" stroke-linecap="round"/><rect x="462" y="80" width="150" height="150" rx="4" fill="#121317" stroke="#2f3138"/><circle cx="547" cy="138" r="15" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><path d="M503 156 a10 10 0 0 1 8 -16 a13 13 0 0 1 24 2 a9 9 0 0 1 4 14 z" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><text x="537" y="202" fill="#f4f4f5" font-size="12.5" font-weight="600" letter-spacing="1" text-anchor="middle">WEATHER</text><line x1="468" y1="228" x2="606" y2="228" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/><rect x="628" y="80" width="150" height="150" rx="4" fill="#121317" stroke="#2f3138"/><path d="M663 158 C683 158 687 118 703 118 C719 118 723 158 743 152" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><text x="703" y="202" fill="#f4f4f5" font-size="12.5" font-weight="600" letter-spacing="1" text-anchor="middle">RADIO</text><line x1="634" y1="228" x2="772" y2="228" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/><rect x="130" y="250" width="150" height="150" rx="4" fill="#121317" stroke="#2f3138"/><path d="M175 316 L225 298 L239 308 L189 326 Z" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><path d="M167 324 Q205 342 245 316" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><text x="205" y="372" fill="#f4f4f5" font-size="12.5" font-weight="600" letter-spacing="1" text-anchor="middle">TELEPHONE</text><line x1="136" y1="398" x2="274" y2="398" stroke="#84cc16" stroke-width="3" stroke-linecap="round"/><rect x="296" y="250" width="150" height="150" rx="4" fill="#121317" stroke="#2f3138"/><rect x="337" y="298" width="68" height="26" rx="8" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><path d="M349 298 L357 286 L385 286 L393 298" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><circle cx="351" cy="312" r="3" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><circle cx="391" cy="312" r="3" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><text x="371" y="372" fill="#f4f4f5" font-size="12.5" font-weight="600" letter-spacing="1" text-anchor="middle">CAR</text><line x1="302" y1="398" x2="440" y2="398" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/><rect x="462" y="250" width="150" height="150" rx="4" fill="#121317" stroke="#2f3138"/><ellipse cx="537" cy="296" rx="38" ry="7" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><ellipse cx="537" cy="310" rx="28" ry="6" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><ellipse cx="537" cy="324" rx="22" ry="7" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><text x="537" y="372" fill="#f4f4f5" font-size="12.5" font-weight="600" letter-spacing="1" text-anchor="middle">MEDIA</text><line x1="468" y1="398" x2="606" y2="398" stroke="#eab308" stroke-width="3" stroke-linecap="round"/><rect x="628" y="250" width="150" height="150" rx="4" fill="#121317" stroke="#2f3138"/><path d="M685 300 L703 290 L721 300 L721 324 L703 334 L685 324 Z M685 300 L703 310 L721 300 M703 310 L703 334" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><text x="703" y="372" fill="#f4f4f5" font-size="12.5" font-weight="600" letter-spacing="1" text-anchor="middle">HELP</text><line x1="634" y1="398" x2="772" y2="398" stroke="#d4d4d8" stroke-width="3" stroke-linecap="round"/><rect x="440" y="421" width="16" height="4" rx="2" fill="#e4e4e7"/><rect x="460" y="421" width="10" height="4" rx="2" fill="#52525b"/><g class="mk"><circle cx="626" cy="41" r="13"/><text x="626" y="45.5" text-anchor="middle">1</text></g><g class="mk"><circle cx="96" cy="74" r="13"/><text x="96" y="78.5" text-anchor="middle">2</text></g><g class="mk"><circle cx="130" cy="80" r="13"/><text x="130" y="84.5" text-anchor="middle">3</text></g><g class="mk"><circle cx="262" cy="124" r="13"/><text x="262" y="128.5" text-anchor="middle">4</text></g><g class="mk"><circle cx="276" cy="198" r="13"/><text x="276" y="202.5" text-anchor="middle">5</text></g><g class="mk"><circle cx="436" cy="228" r="13"/><text x="436" y="232.5" text-anchor="middle">6</text></g><g class="mk"><circle cx="490" cy="423" r="13"/><text x="490" y="427.5" text-anchor="middle">7</text></g></svg></div>
  <ol class="anatomy-legend"><li><strong>Barra de estado.</strong> Conectividad, teléfono, perfil y hora, siempre en el mismo sitio, para que el conductor nunca tenga que buscar el estado del sistema.</li><li><strong>Barra de accesos.</strong> Inicio y los cuatro destinos más frecuentes, visibles en todas las pantallas. Un toque desde cualquier sitio, sin volver atrás.</li><li><strong>Cuadrícula de mosaicos.</strong> Dos filas de cuatro. Zonas táctiles grandes y bien espaciadas donde responde todo el mosaico, no solo el texto.</li><li><strong>Ilustración.</strong> Se reconoce con la visión periférica antes de leer nada. La forma hace la primera parte del trabajo.</li><li><strong>Etiqueta.</strong> Corta, en mayúsculas y con espaciado amplio para leerse bien en una pantalla oscura a la distancia del brazo.</li><li><strong>Acento de color.</strong> Una línea fina por categoría. Identifica sin gritar y mantiene la pantalla tranquila de noche.</li><li><strong>Indicador de página.</strong> Hay más mosaicos a un gesto, así la estructura crece a lo ancho en lugar de en profundidad.</li></ol>
  <p class="anatomy-h">Orden de lectura de un vistazo</p>
  <ol class="read-order"><li><span>1</span>Forma, con la visión periférica</li><li><span>2</span>Color, la categoría</li><li><span>3</span>Etiqueta, la confirmación</li><li><span>4</span>Toque, todo el mosaico</li></ol>
  <figcaption>Wireframe dibujado para este caso de estudio para mostrar la lógica de UI del sistema. No es una copia de la pantalla de serie.</figcaption>
</figure>

## Pruebas en la cabina

Probamos prototipos de alta fidelidad en un simulador de cabina con tareas de navegación, multimedia, teléfono y ajustes, mientras observábamos la atención y el comportamiento de los conductores. Muchos problemas solo aparecían en una situación de conducción realista, y provocaron cambios en la estructura de navegación, los flujos, los layouts y los mensajes del sistema.

<div class="video">
  <iframe src="https://www.youtube.com/embed/XGqnJOjWSzs" title="HMI conectado del Audi A6" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>
  <p class="video-caption">El HMI conectado del A6 en uso. <a href="https://youtu.be/XGqnJOjWSzs" target="_blank" rel="noopener">Ver en YouTube</a></p>
</div>

## Resultado

- Tareas completadas más rápido y una navegación más clara en las pruebas en simulador.
- Una arquitectura de HMI escalable, preparada para futuros servicios conectados.
- Un modelo de interacción compartido que alineó a diseño e ingeniería, comunicado con flujos, arquitectura de la información y prototipos, y no solo con pantallas.

## Qué aprendí

Diseñar para un vehículo es diseñar para la atención y la seguridad. El comportamiento del sistema importa tanto como lo visual, el hardware condiciona las decisiones de UX y prototipar en un entorno realista las cambia mucho. Sigo aplicando esa lección a cualquier producto en el que hay mucho en juego: probar donde la presión es real.
