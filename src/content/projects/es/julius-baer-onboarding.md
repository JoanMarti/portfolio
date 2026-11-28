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

## Un primer recorrido

Mi primer boceto del recorrido tenía dos reglas. El cliente puede hacerlo todo en digital con total confianza, pero siempre puede hablar con una persona. Y cada salida del recorrido tiene su propia acción para recuperarlo.

<ol class="jd" aria-label="Primer borrador del recorrido del distribuidor digital"><li><strong>Punto de partida</strong><span>De 5 a 10 preguntas para hacerse una primera idea del prospecto y sus necesidades</span></li><li><strong>Posibles intereses</strong><span>Los temas que pueden interesarle, a partir de esas respuestas</span></li><li class="opt"><em>Opcional</em><strong>Guardar el progreso</strong><span>Una cuenta sencilla para conservar el progreso y lo ya contestado. Preguntar todo lo posible, como mínimo email o teléfono</span></li><li><strong>Configurar</strong><span>Dar forma al paquete a partir de los intereses elegidos</span></li><li><strong>Vista previa</strong><span>Ver los posibles paquetes de solución según esa configuración</span></li><li><strong>Comprar</strong><span>El prospecto ajusta la configuración y compra el paquete final</span></li></ol>

<div class="jd-m" role="group" aria-label="Tres pilares a lo largo del recorrido"><p class="jd-mh">Tres pilares a lo largo del recorrido</p><div class="jd-row jd-head"><span>Interés</span><span>Configurar</span><span>Vista previa</span></div><div class="jd-row"><span><b>Inversión</b></span><span>Personalizar un mandato discrecional</span><span>El mandato</span></div><div class="jd-row"><span><b>Financiación</b></span><span>Una calculadora de préstamos</span><span>La oferta de financiación</span></div><div class="jd-row"><span><b>Planificación patrimonial</b></span><span>Mini apps: árbol familiar, balance, proyección patrimonial</span><span>Soluciones de sucesión, jubilación y protección</span></div><p class="jd-touch"><strong>Primer contacto humano</strong> Opcional, durante la vista previa: una primera sesión con un gestor del equipo para ajustar la configuración. Ofrecida con seguridad, para que el banco nunca parezca inseguro de su propia oferta.</p></div>

La vista previa muestra también cómo se combinan los tres pilares, y servicios extra como sesiones con un gestor o con expertos, en línea o en persona.

## Mapear el servicio completo

Planteé el concepto como un distribuidor digital y mapeé el servicio completo en un blueprint, desde cómo llega un lead al banco hasta el seguimiento cuando ya es cliente. Partí de una persona y un flujo: planificación patrimonial y un mandato.

![Foto de la pizarra con notas adhesivas: principios de diseño, tres recorridos y las fases del distribuidor digital, desde conocerlo hasta el seguimiento.](/projects/julius-baer-onboarding/jb-whiteboard-blur.webp "Empezó en papel: principios, recorridos y fases en notas adhesivas.")

<div class="bp-top"><div class="bp-card"><p class="bp-h">Persona: Sophie</p><ul><li>Entre 35 y 50 años</li><li>Profesional en activo, por ejemplo abogada de empresa, o con patrimonio heredado</li><li>Activos bancables de unos CHF 2 millones, la mitad en efectivo</li></ul><p class="bp-s">Puntos de dolor</p><ul><li>Abrumada por la complejidad de la oferta y los precios de la gestión patrimonial</li><li>Poco tiempo o interés para aprender sobre inversión</li><li>Le falta confianza para gestionar objetivos en conflicto y un patrimonio creciente</li><li>Frustrada con productos estándar y un servicio muy tradicional</li></ul><p class="bp-s">Objetivo</p><p class="bp-goal">Asesoramiento integral de planificación patrimonial y la recomendación de inversión que lo acompaña</p></div><div class="bp-card"><p class="bp-h">Principios de diseño</p><ul class="bp-pr"><li>Transparencia siempre que sea posible: paquetes, precios, inversión mínima.</li><li>El cliente siempre va de la mano y nunca se siente perdido ni con la sensación de haber olvidado algo.</li><li>El cliente se siente seguro y con el control, y siempre puede preguntar a alguien.</li><li>No ocultamos nada. Le guiamos en todo, incluso en una coincidencia del 15%.</li></ul></div></div>

<div class="bp-j" role="group" aria-label="Tres recorridos"><div class="bp-card"><p class="bp-s">Recorrido 1</p><p class="bp-goal">Solo busca un mandato, sin necesidad de planificación patrimonial</p></div><div class="bp-card"><p class="bp-s">Recorrido 2</p><p class="bp-goal">Solo busca planificación patrimonial y la experiencia del banco</p></div><div class="bp-card"><p class="bp-s">Recorrido 3, el ideal</p><p class="bp-goal">Un enfoque integral: un mandato que apoye los objetivos de planificación patrimonial</p></div></div>

<div class="bp" role="group" aria-label="Service blueprint del distribuidor digital, en ocho fases"><p class="bp-arc">El perfil siempre se puede ajustar</p><ol><li><strong>Captar leads</strong><span>Cómo llegar a los leads del nuevo servicio</span><small>Fuera de nuestro alcance. Los leads llegan por recomendación</small></li><li><strong>Enganchar</strong><span>Jugar con simulaciones y adelantos. Cada respuesta ajusta el perfil</span><small>Un cuestionario lúdico sobre inversión y planificación patrimonial, contenido gratuito como qué es, cómo puedo e ideas de inversión, conocer al equipo y qué hace diferente la oferta, y primeras preguntas como divisa y domicilio</small></li><li><strong>Crear cuenta</strong><span>Sin onboarding todavía. Se pueden recuperar simulaciones anteriores</span><small>Un código de acceso para volver sin cuenta, el progreso guardado en el navegador o una cuenta sencilla con nombre, teléfono y email</small></li><li><strong>Elegir paquete</strong><span>Paquetes recomendados según lo que ha contado el cliente</span><small>Mandatos, productos bancarios, sesiones de asesoramiento y planificación, financiación, y una hora con un especialista fiscal o de herencias</small></li><li><strong>Onboarding</strong><span>Encontrar y elegir el camino de onboarding adecuado</span><small>La mínima información posible, rellenada de antemano siempre que se pueda. Vía rápida: financiar la estrategia y listo. Asesorada: empezar con una sesión de asesoramiento para ajustar el paquete</small></li><li><strong>Siguientes pasos</strong><span>Transferir fondos o reservar la primera sesión</span></li><li><strong>Primera sesión</strong><span>Acceso al equipo de expertos y guía para la configuración final</span><small>Una primera sesión de inversión y planificación con un gestor del equipo, que puede ver el perfil y dar un asesoramiento integral, y después la configuración final con venta adicional como el apalancamiento</small></li><li><strong>Seguimiento</strong><span>Un panel con las inversiones y la planificación patrimonial, y sesiones con expertos</span><small>Una app para escritorio y móvil, quizá la misma que la banca online. Cambiar de estrategia, reservar sesiones y un asistente de perfil que recoja lo que necesita una sesión</small></li></ol></div>

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
