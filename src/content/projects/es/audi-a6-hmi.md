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
tools: [Arquitectura de la información, Diseño de interacción, Prototipos de alta fidelidad, Tests en simulador]
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

## Qué hice

Me centré en la experiencia a nivel de sistema: la arquitectura de la información, el modelo de navegación y la lógica de interacción, los principios del HMI, los layouts de pantalla y los componentes, y prototipos de alta fidelidad para probar dentro de la cabina. Gran parte del trabajo consistió en hacer de puente con ingeniería para que los conceptos funcionaran en el hardware real.

## Primero los principios, después las pantallas

Antes de diseñar pantallas acordamos unos principios que cualquier equipo pudiera usar para tomar decisiones:

- Navegación plana en lugar de menús profundos.
- Los mismos patrones de interacción en todos los sistemas.
- Comportamiento previsible y respuesta inmediata.
- Menos pasos para las tareas frecuentes.
- Primero el mando giratorio, después la pantalla táctil.
- Que la mirada del conductor siga en la carretera.

## Decisiones clave

**Menos categorías principales, agrupadas según lo que quiere hacer el conductor** y no según el sistema técnico responsable de cada función. Algunas responsabilidades de ingeniería quedaron menos claras, pero los conductores encontraban las cosas donde esperaban.

**Un modelo de navegación poco profundo** con plantillas de pantalla coherentes, para que cada nuevo servicio conectado encajara en un patrón existente en lugar de añadir un nivel.

**Una zona de estado fija** para los mensajes del sistema y la información crítica, para que el conductor nunca tuviera que buscarla.

**Personalización limitada.** Menos opciones significaban más fiabilidad y previsibilidad, la decisión correcta en un contexto donde la seguridad va primero.

## Pruebas en la cabina

Probamos prototipos de alta fidelidad en un simulador de cabina con tareas de navegación, multimedia, teléfono y ajustes, mientras observábamos la atención y el comportamiento de los conductores. Muchos problemas solo aparecían en una situación de conducción realista, y provocaron cambios en la estructura de navegación, los flujos, los layouts y los mensajes del sistema.

## Resultado

- Tareas completadas más rápido y una navegación más clara en las pruebas en simulador.
- Una arquitectura de HMI escalable, preparada para futuros servicios conectados.
- Un modelo de interacción compartido que alineó a diseño e ingeniería, comunicado con flujos, arquitectura de la información y prototipos, y no solo con pantallas.

## Qué aprendí

Diseñar para un vehículo es diseñar para la atención y la seguridad. El comportamiento del sistema importa tanto como lo visual, el hardware condiciona las decisiones de UX y prototipar en un entorno realista las cambia mucho. Sigo aplicando esa lección a cualquier producto en el que hay mucho en juego: probar donde la presión es real.
