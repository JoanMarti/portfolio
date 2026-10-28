---
title: Hub de exploración de Coches.net
headline: De una visita a compradores que vuelven
summary: Un espacio personal que recuerda lo que cada comprador estaba mirando (búsquedas guardadas, favoritos y comparaciones) y le devuelve a ello.
client: Coches.net (Adevinta)
sector: Marketplace de automoción
year: "TODO"
role: Senior UX/UI Designer
team: Product owner, equipo de desarrollo y analítica
duration: "TODO"
tools: [Adobe Analytics, Figma, Tests de guerrilla, Tests A/B]
cover: loop
featured: false
order: 5
tldr:
  - En Coches.net los compradores buscaban, miraban un anuncio y se iban. Comprar un coche lleva semanas de comparar, pero la plataforma les hacía empezar de cero en cada visita.
  - Diseñé un hub de exploración en la navegación principal que reúne búsquedas guardadas, favoritos, comparaciones y recomendaciones personales, y lo validé con tests de guerrilla y un test A/B por fases.
  - Los usuarios únicos crecieron un 210%, el tiempo medio de sesión pasó de 50 a 90 segundos y los leads para concesionarios subieron un 50%.
metrics:
  - value: "+210%"
    label: usuarios únicos
    method: Test A/B frente a un grupo de control en Adobe Analytics  # TODO: confirm section or platform level
  - value: "50 s → 90 s"
    label: tiempo medio de sesión (+80%)
    method: Test A/B, Adobe Analytics
  - value: "+50%"
    label: leads generados
    method: Eventos de lead enviados a concesionarios, test A/B
  - value: "+35%"
    label: uso de favoritos
    method: Seguimiento de eventos en Adobe Analytics
---

## El problema

Coches.net tenía muchos anuncios y un buscador que la gente usaba. El problema no era de usabilidad, era de **crecimiento**. Comprar un coche lleva muchas sesiones, pero cada visita empezaba de cero: buscar, abrir un anuncio, irse. Descubrir, comparar y volver no estaban pensados en ninguna parte.

## Primero los datos, después el diseño

Empecé con Adobe Analytics (duración de las sesiones, uso de funciones, dispositivos, recorridos, favoritos y puntos de abandono) para fijar una línea base de comportamiento:

- El **65%** de los usuarios solo miraba las marcas más populares.
- El **80%** interactuaba más con contenido personalizado.
- El **60%** volvía a menudo a los coches que había guardado.
- El **85%** quería comparar coches.

Después hice entrevistas, tests de usabilidad, encuestas y un análisis de la competencia para entender el porqué. El patrón estaba claro. Los compradores querían continuidad entre sesiones. Necesitaban comparar y volver a mirar para sentirse seguros, y valoraban las plataformas que se acordaban de ellos.

Eso cambió el planteamiento:

> La retención no era un problema de búsqueda. Era un problema de memoria.

## La solución

Un nuevo hub de exploración, integrado en la navegación principal, que reúne:

- búsquedas guardadas,
- favoritos,
- recomendaciones personales,
- herramientas de comparación,
- contenido relevante y accesos directos al perfil.

En lugar de obligar a los compradores a empezar de nuevo en cada visita, la plataforma retoma donde lo dejaron. El comportamiento buscado pasó de **buscar e irse** a **buscar, explorar, comparar, volver y contactar con el concesionario**.

## Decisiones clave

**Un hub, no otra funcionalidad más.** Los favoritos y las búsquedas guardadas ya existían, pero estaban dispersos. Al reunirlos, los compradores tuvieron un lugar al que volver y el producto ganó un espacio para las recomendaciones.

**Modular y dentro de la plataforma existente.** El hub tenía que encajar en la arquitectura y el sistema de interfaz que ya existían, pensado primero para móvil y sin perjudicar el rendimiento ni el SEO. Lo diseñé como módulos que podían publicarse y medirse por separado.

**Probar en pequeño y luego escalar.** Tests de guerrilla con cinco a ocho usuarios por ronda para validar los flujos, y después un test A/B diseñado con el product owner: objetivos, tamaño de la muestra, métricas de éxito y fases de despliegue. Una muestra del 5% no bastaba para tener confianza estadística, así que la fuimos ampliando poco a poco.

## Resultados

- **+210%** de usuarios únicos
- Tiempo medio de sesión de **50 segundos a 1 minuto y 30** (+80%)
- **+50%** de leads para concesionarios
- **+35%** de uso de favoritos, con más visitas recurrentes y más interacción con el contenido

## Por qué funcionó

La gente no vuelve a las plataformas. Vuelve a su progreso. Guardar intenciones, preferencias y comparaciones mantuvo el impulso de los compradores, y ese impulso es lo que convierte una visita en un lead.
