---
title: Instamusic
headline: Música según tu estado de ánimo
summary: Una app de descubrimiento musical basada en el estado de ánimo que rompe el bucle de «porque escuchaste», construida como una capa sobre los servicios de streaming existentes.
client: Musiclist (startup de Barcelona)
sector: Música para el público general
year: "2019"
role: Product Design Lead (también me ocupé de la gestión de producto)
team: Fundadores, desarrollo y diseño
duration: Tres meses hasta el MVP
tools: [Figma, Hotjar, Google Analytics, Typeform, Tests de guerrilla]
cover: mood
featured: false
order: 7
tldr:
  - Los motores de recomendación se basan en el historial de escucha, así que siempre ofrecen más de lo mismo. Los oyentes jóvenes, de 15 a 25 años, querían algo nuevo que encajara con el momento.
  - Definí el MVP, hice el discovery y diseñé y probé dos formas de entrar en la app, sobre Spotify y Apple Music. Una usaba un selfie opcional como señal divertida del estado de ánimo y la otra una selección manual rápida.
  - Lanzamos el MVP en tres meses y lo validamos con más de 50 personas en Barcelona. El flujo con selfie se percibía más rápido, más divertido y «menos como el mismo algoritmo de siempre».
metrics:
  - value: "3 meses"
    label: de la idea al MVP publicado
  - value: "50+"
    label: participantes en tests de campo
    method: Tests de guerrilla a distintas horas del día en Barcelona
---

## El problema

En 2019 el streaming ya era lo habitual y las recomendaciones estaban muy maduras, pero todas funcionaban igual: porque escuchaste X. Los oyentes más jóvenes, acostumbrados a TikTok e Instagram, descubrían música según su estado de ánimo y el momento. Querían novedad sin tener que configurar filtros.

> Los oyentes jóvenes quieren una forma rápida y sin esfuerzo de descubrir música que encaje con cómo se sienten ahora, sin quedarse atrapados en el mismo bucle del algoritmo.

## Qué hice

Como Product Design Lead me ocupé de la definición de producto y de la UX: el plan de discovery, el reclutamiento para entrevistas y tests de campo, las hipótesis de producto, el alcance del MVP, las métricas de éxito, los talleres y el relato para inversores.

**Discovery.** Hotjar y Google Analytics para encontrar los puntos de entrada con más interés, una encuesta con ramificaciones en Typeform para segmentar motivaciones y entrevistas en profundidad sobre la frustración con la repetición y cómo busca la gente algo nuevo. La conclusión fue que el problema no era la falta de recomendaciones. Era la falta de **novedad** y de **relación con el momento**.

![Joan moderando un focus group, con participantes ordenando perfiles de usuario impresos con post-its en la pared](/projects/instamusic/focus-group.webp "Moderando un focus group: los participantes ordenaron perfiles de oyentes impresos por estado de ánimo y momento, y sus notas en la pared dieron forma a las primeras hipótesis.")

**Ideación.** Preguntas «¿cómo podríamos…?», Crazy 8s y un mapa de impacto y esfuerzo llevaron a la idea clave: un selfie opcional como forma divertida de captar el estado de ánimo que genera recomendaciones en segundos.

## Decisiones clave

**Probar dos entradas, una contra otra.** El flujo A usaba el selfie y el flujo B, etiquetas de estado de ánimo y controles deslizantes. Probamos la rapidez, la claridad, la diversión frente a la incomodidad, las expectativas sobre el consentimiento y las ganas de conectar una cuenta de streaming.

El flujo A, el que seguimos adelante, en cuatro pasos:

<ol class="flow-steps" style="--start:0"><li><img src="/projects/instamusic/screens/home.webp" alt="Pantalla de inicio con un gran botón de cámara y el titular Descubre música con tus fotos" loading="lazy" /><p><strong>Una sola acción clara.</strong> La home es una única invitación: haz una foto y descubre música.</p></li><li><img src="/projects/instamusic/screens/camera.webp" alt="Vista de cámara encuadrando un selfie" loading="lazy" /><p><strong>Una forma divertida de captar el ánimo.</strong> El selfie recoge cómo te sientes ahora mismo, con un toque.</p></li><li><img src="/projects/instamusic/screens/photo.webp" alt="Vista previa de la foto con el botón Continuar" loading="lazy" /><p><strong>Confirmar antes de que pase nada.</strong> El usuario ve la foto y decide si continúa.</p></li><li><img src="/projects/instamusic/screens/tags-selected.webp" alt="Tags detectados de ánimo, género y contexto, algunos seleccionados, con el botón Crear tu playlist" loading="lazy" /><p><strong>El control es del usuario.</strong> La app sugiere tags de ánimo, género y contexto; el usuario se queda solo con los que encajan.</p></li></ol>

**Ser una capa, no un catálogo.** En lugar de licenciar música, los usuarios conectaban Spotify o Apple Music y escuchaban allí las canciones. Así el MVP se centró en lo nuevo, que era descubrir y volver.

La música vive donde la gente ya escucha: conecta Spotify, recibe una playlist y la exporta con un toque.

<ol class="flow-steps" style="--start:4"><li><img src="/projects/instamusic/screens/connect.webp" alt="Pantalla de bienvenida con Conectar con Spotify y una opción de acceso libre" loading="lazy" /><p><strong>Conectar o explorar libremente.</strong> Spotify es el camino principal, con una opción libre para quien no quiere conectar una cuenta.</p></li><li><img src="/projects/instamusic/screens/playlist.webp" alt="Playlist generada con sus tags y el botón Exportar a Spotify" loading="lazy" /><p><strong>Una playlist para el momento.</strong> Los tags que la crearon siguen visibles encima de la lista.</p></li><li><img src="/projects/instamusic/screens/exported.webp" alt="Confirmación de que la playlist se ha exportado, con Abrir Spotify" loading="lazy" /><p><strong>De vuelta a su reproductor.</strong> La playlist se exporta y se abre en Spotify.</p></li></ol>

**Diseñar una IA responsable desde el principio.** Como el concepto implica leer emociones en una cara, las salvaguardas formaron parte del diseño y no fueron un añadido legal:
- El selfie es opcional y la selección manual siempre está disponible.
- Textos claros explican para qué se usa la cámara.
- Por defecto no se guardan imágenes y se prioriza el procesamiento en el propio dispositivo.
- Es fácil saltar el paso, retirar el permiso y borrar los datos.
- El estado de ánimo se trata como una señal orientativa, nunca como un diagnóstico.


En la interfaz, esas salvaguardas se ven así:

<ol class="flow-steps" style="--start:7"><li><img src="/projects/instamusic/screens/tags.webp" alt="Tags detectados mostrados como sugerencias sin seleccionar" loading="lazy" /><p><strong>Sugerencias, no veredictos.</strong> Los tags detectados empiezan sin seleccionar; no se da nada por hecho del usuario.</p></li><li><img src="/projects/instamusic/screens/tags-info.webp" alt="Diálogo que explica qué son los tags y para qué sirven" loading="lazy" /><p><strong>Explicar el porqué.</strong> Una explicación breve de qué son los tags y cómo mejoran la búsqueda.</p></li><li><img src="/projects/instamusic/screens/preferences.webp" alt="Pantalla de preferencias con idioma, privacidad y ayuda" loading="lazy" /><p><strong>La privacidad a un toque.</strong> La privacidad y la ayuda siempre están accesibles desde preferencias.</p></li></ol>

## Resultados

Tests de campo con más de 50 participantes a distintas horas del día. El flujo A se percibió siempre como más divertido, más novedoso y más rápido para decidir. Después medimos el MVP por descubrimientos completados, canciones guardadas y compartidas y visitas de vuelta a corto plazo, para apoyar las conversaciones con inversores.

## Qué haría después

Combinar el estado de ánimo con el contexto (hora y actividad) y con preferencias explícitas, añadir un control para elegir entre más novedad o más música conocida, probar con tests A/B el paso de consentimiento y medir la retención a largo plazo por cohortes.
