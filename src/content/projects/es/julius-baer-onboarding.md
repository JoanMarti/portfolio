---
title: Onboarding de Julius Baer
headline: Onboarding digital con trato humano
summary: Una prueba de concepto de onboarding adaptativo para clientes de alto patrimonio, validada con clientes y asesores y aprobada por el comité de dirección para un piloto.
client: Julius Baer (a través de IBM iX Suiza)
sector: Banca privada
year: "2022"
role: "Senior UX/UI Designer, IBM iX"
team: Equipo de innovación multidisciplinar de cuatro personas
duration: "5 meses"
tools: [Figma, Síntesis de entrevistas, Journey mapping, Tests de usabilidad moderados]
cover: branching
featured: true
order: 4
tldr:
  - El onboarding de Julius Baer estaba repartido entre canales digitales y presenciales. Para clientes que esperan discreción y una relación personal, la primera impresión digital no estaba a la altura de la marca.
  - Lideré la investigación, la lógica del flujo adaptativo y los prototipos de alta fidelidad de una prueba de concepto que adapta el onboarding a cada cliente y mantiene al asesor visible en todo momento.
  - La prueba de concepto se validó con clientes y asesores, la aprobó el comité de dirección y pasó a un piloto con tests A/B y KPIs definidos.
metrics:
  - value: "Aprobada"
    label: por el comité de dirección para un piloto
    method: Revisión del comité de la prueba de concepto, los resultados de la investigación y el análisis de riesgos
  - value: "5"
    label: KPIs definidos para el piloto
    method: Tasa de finalización, tiempo hasta activar la cuenta, confianza del cliente, implicación del asesor y abandonos
---

## El problema

La banca privada se basa en la confianza y en las relaciones personales, con normas estrictas de KYC, prevención del blanqueo de capitales y protección de datos. El onboarding de Julius Baer no lo reflejaba. Los clientes se encontraban con:

- datos que tenían que introducir varias veces,
- pasos siguientes poco claros,
- poca personalización,
- un asesor que apenas se veía,
- abandonos durante la verificación de identidad.

El riesgo era estratégico, no estético. **La fricción digital erosiona la confianza**, y en banca privada la confianza es el producto.

La pregunta que teníamos que responder era:

> ¿Podemos modernizar el onboarding sin poner en riesgo la confianza, el cumplimiento normativo ni la relación con el asesor?

## Qué hice

Me incorporé a IBM iX Suiza como Lead UX/UI Designer para el programa de innovación de Julius Baer. Era un proyecto de validación, no un rediseño. Nuestro trabajo consistía en reducir el riesgo de una gran inversión antes de hacerla.

**Investigar con las personas que importan.** Clientes de alto patrimonio, clientes recomendados por asesores, inversores recurrentes, asesores de banca privada y responsables internos de cumplimiento. Usé IA para resumir entrevistas y agrupar patrones, sobre todo el lenguaje emocional en torno a la confianza y la inquietud, y revisé cada resultado a mano porque el contexto es muy delicado.

Lo que aprendimos:

- Los clientes asocian la fricción con menos confianza.
- La personalización aumenta la sensación de exclusividad.
- Ver a su asesor dentro del flujo les da seguridad.
- Los pasos de KYC generan inquietud cuando no saben por qué se les pide algo.
- Sobre todo, quieren saber qué pasará después.

## Buscando patrones

Antes de dibujar nada, recopilé patrones de onboarding y de configuración de apps fuera de la banca: seguros, fitness, eventos, inmobiliaria y bienestar. De cada uno anoté qué podía resolvernos. Se agrupaban en cuatro.

<div class="patterns" role="group" aria-label="Patrones recopilados para el onboarding"><div><p class="pt-h">Preguntar</p><ul><li>Preguntas conversacionales para conocer al cliente</li><li>Burbujas para elegir áreas de interés, con más detalle al tocarlas</li></ul></div><div><p class="pt-h">Explorar</p><ul><li>Categorías principales y sus servicios en una sola vista</li><li>Fácil de recorrer y de profundizar en un área</li><li>Deslizar entre los servicios elegidos y abrir el detalle</li></ul></div><div><p class="pt-h">Decidir</p><ul><li>Configurar cada servicio en un «carrito»</li><li>Vista previa de gráficos en un modal, a pantalla completa al elegirlos</li><li>Una propuesta de valor clara para cada servicio</li></ul></div><div><p class="pt-h">Progreso</p><ul><li>Una señal sencilla de cuánto falta</li><li>El progreso junto a una vista previa del carrito</li><li>Un estado de éxito al final</li></ul></div></div>

## Estructurar el recorrido

Los patrones dieron forma a un flujo de contenido sencillo, desde lo que engancha al cliente hasta convertirlo en prospecto.

<ol class="phases"><li><strong>Áreas de interés</strong><span>Objetivos de vida, preguntas clave y servicios principales, para enganchar</span></li><li><strong>Explorar el detalle</strong><span>Los servicios, productos u objetivos concretos de cada una</span></li><li><strong>Propuesta</strong><span>Un producto que el cliente puede configurar</span></li><li><strong>Registro</strong><span>El cliente pasa a ser prospecto</span></li></ol>

Por debajo, planteé tres puertas de entrada. Se podía empezar por un servicio, por una pregunta o por un momento vital, y cada puerta tenía los mismos niveles hasta el detalle.

<div class="ia3" role="group" aria-label="Tres entradas a la misma estructura"><div class="ia3-col"><p class="ia3-h">Servicios</p><p class="ia3-l">Categoría</p><div class="ia3-c cat"><span>Inversión</span><span>Planificación patrimonial</span></div><p class="ia3-l">Servicio</p><div class="ia3-c svc"><span>Mandato de asesoramiento</span><span>Mandato discrecional</span><span>Productos estructurados</span><span>Ejecución y asesoramiento de valores</span><span>Divisas y metales preciosos</span></div><p class="ia3-l">Detalle</p><div class="ia3-c det"><span>Mandato discrecional: mandatos y estrategias</span></div></div><div class="ia3-col"><p class="ia3-h">Preguntas</p><p class="ia3-l">Categoría</p><div class="ia3-c cat"><span>Preguntas clave del cliente</span></div><p class="ia3-l">Servicio</p><div class="ia3-c svc"><span>Los servicios que responden a cada una</span></div><p class="ia3-l">Detalle</p><div class="ia3-c det"><span>El detalle de cada servicio</span></div></div><div class="ia3-col"><p class="ia3-h">Emociones</p><p class="ia3-l">Categoría</p><div class="ia3-c cat"><span>Familia</span><span>Sucesión</span></div><p class="ia3-l">Servicio</p><div class="ia3-c svc"><span>Una entrada para cada situación familiar</span></div><p class="ia3-l">Detalle</p><div class="ia3-c det"><span>El detalle de cada servicio</span></div></div></div>

De ahí salió el concepto paso a paso. El cliente selecciona primero todos sus objetivos y momentos, puede leer el detalle de cualquiera y después lo ve todo en una vista de carrito, donde lo ajusta o añade más servicios antes de continuar.

## Decisiones clave

**Muchos caminos, una sola estructura.** En lugar de un flujo lineal, el onboarding se adapta al origen del cliente, a su perfil, a si ya tiene relación con el banco y a su experiencia inversora. Todos los caminos comparten el mismo esqueleto, así que cumplimiento revisa una estructura y no una docena de flujos. Modelamos los caminos y los casos límite antes de prototipar para encontrar preguntas redundantes y posibles puntos de abandono.

**El asesor forma parte de la interfaz.** Se presenta al principio del flujo y su contacto sigue visible en todo momento. El objetivo no era sustituir la relación por tecnología, sino hacerla presente dentro de la experiencia digital.

**Explicar el cumplimiento en lugar de esconderlo.** Cada paso de KYC explica por qué es necesario y qué viene después, con el progreso siempre a la vista. La transparencia convirtió la fricción normativa en un momento de tranquilidad.

**Contención visual.** Una interfaz mínima, microinteracciones sutiles y nada de efectos llamativos. En banca privada, la calma es la señal de calidad.

## El prototipo

Las primeras pantallas preguntan antes de vender. Tres preguntas cortas sobre objetivos, temas de interés y temas para profundizar, con el progreso siempre visible y la opción de saltarlas.

![Tres pantallas de onboarding: objetivos de vida para elegir con fotos, temas de interés como burbujas con iconos y temas para profundizar, como derivados, divisas e inversión sostenible, como burbujas.](/projects/julius-baer-onboarding/jb-questions.webp "Objetivos, temas de interés y temas para profundizar. El cliente elige lo que le importa, nunca rellena un formulario.")

Las respuestas dan forma a lo que viene después. La home muestra los objetivos elegidos y sugiere servicios para hablar con su gestor. Al abrir una cuenta del pilar 3a, el cliente ve una estrategia recomendada según esas respuestas, puede elegir otra y tiene a una persona a quien preguntar en la parte inferior de la pantalla.

![Home con los objetivos de vida elegidos y tres servicios sugeridos: productos estructurados, planificación patrimonial y mandatos discrecionales. Dos pantallas de estrategia de inversión para una cuenta del pilar 3a con la estrategia recomendada Income 35%, un mensaje de confirmación y la opción de hacer una pregunta rápida con la foto de un asesor.](/projects/julius-baer-onboarding/jb-suggestions.webp "Sugerencias según los objetivos, una estrategia recomendada que se puede cambiar y un asesor a un toque.")

## Validación

Prototipos de alta fidelidad para escritorio y móvil, probados en sesiones moderadas con clientes de alto patrimonio, asesores y responsables internos. Observamos la seguridad al completar el proceso, las señales de confianza, la claridad del flujo, los momentos de duda y cómo vivían los asesores su papel.

## Resultado

- La prueba de concepto se validó con clientes y asesores.
- **El comité de dirección aprobó** un piloto con tests A/B.
- Se definieron los KPIs del despliegue: tasa de finalización, tiempo hasta activar la cuenta, confianza del cliente, implicación del asesor y reducción de abandonos.

## Qué aprendí

En banca privada, la UX consiste en construir confianza. La innovación tiene que convivir con la normativa, y conseguir la aprobación de un comité de dirección requiere un relato, datos y un análisis honesto de los riesgos, no solo buenas pantallas.
