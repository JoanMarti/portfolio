---
title: HMI conectado del Audi A6
headline: La mirada en la carretera
summary: Arquitectura de la información y modelo de interacción del sistema de infoentretenimiento conectado del Audi A6, probado en un simulador de conducción.
client: Audi (Grupo Volkswagen)
sector: Automoción
year: "2015 a 2016"
role: "Senior User Interface Designer (HMI), Uedelhoven para Audi"
team: UX, ingeniería de HMI y equipos de software y hardware
duration: "8 meses"
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
  <div class="anatomy-screen"><img src="/projects/audi/home-screen.webp" alt="La pantalla de inicio de serie con siete elementos numerados" /><span class="pin" style="left:77.3%;top:28%" aria-hidden="true">1</span><span class="pin" style="left:30.2%;top:29.5%" aria-hidden="true">2</span><span class="pin" style="left:32.6%;top:36.5%" aria-hidden="true">3</span><span class="pin" style="left:43%;top:39%" aria-hidden="true">4</span><span class="pin" style="left:31.6%;top:72.4%" aria-hidden="true">5</span><span class="pin" style="left:62.4%;top:53.2%" aria-hidden="true">6</span><span class="pin" style="left:63.4%;top:82.4%" aria-hidden="true">7</span></div>
  <ol class="anatomy-legend"><li><strong>Barra de estado.</strong> Conectividad, teléfono, perfil y hora, siempre en el mismo sitio, para que el conductor nunca tenga que buscar el estado del sistema.</li><li><strong>Barra de accesos.</strong> Inicio y los cuatro destinos más frecuentes, visibles en todas las pantallas. Un toque desde cualquier sitio, sin volver atrás.</li><li><strong>Cuadrícula de mosaicos.</strong> Dos filas de cuatro. Zonas táctiles grandes y bien espaciadas donde responde todo el mosaico, no solo el texto.</li><li><strong>Ilustración.</strong> Se reconoce con la visión periférica antes de leer nada. La forma hace la primera parte del trabajo.</li><li><strong>Etiqueta.</strong> Corta, en mayúsculas y con espaciado amplio para leerse bien en una pantalla oscura a la distancia del brazo.</li><li><strong>Acento de color.</strong> Una línea fina por categoría. Identifica sin gritar y mantiene la pantalla tranquila de noche.</li><li><strong>Indicador de página.</strong> Hay más mosaicos a un gesto, así la estructura crece a lo ancho en lugar de en profundidad.</li></ol>
  <p class="anatomy-h">Orden de lectura de un vistazo</p>
  <ol class="read-order"><li><span>1</span>Forma, con la visión periférica</li><li><span>2</span>Color, la categoría</li><li><span>3</span>Etiqueta, la confirmación</li><li><span>4</span>Toque, todo el mosaico</li></ol>
  <figcaption>La pantalla de inicio en el coche de serie, anotada.</figcaption>
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
