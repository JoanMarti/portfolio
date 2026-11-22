---
title: Finora
headline: "Tus finanzas en Suiza, en una sola vista"
summary: "Una app de patrimonio de solo lectura para personas en Suiza que reúne cuentas bancarias, inversiones y Pilar 3a. La llevé por mi cuenta de cero a una versión 1.0 para Android: estrategia de producto, modelo de datos, diseño y código."
client: Finora (own product)
sector: "Fintech, finanzas personales"
year: "2026"
role: "Fundador, product designer y desarrollador"
team: "En solitario, diseñando y construyendo con Claude Code"
duration: "Sept. a oct. 2026, 31 sprints"
tools: [Figma, Flutter, Riverpod, Claude Code, GitHub Actions]
cover: wealth
featured: true
order: 2.5
kind: side-project
discipline: [product, visual]
tldr:
  - "En Suiza el dinero está repartido entre varios bancos, el fondo de pensiones, el Pilar 3a y la caja médica, cada uno con su app. Ningún producto suizo los reúne."
  - "Estrategia de producto, plan de negocio, modelo de datos, diseño y código, en solitario: un agregador de solo lectura para hogares suizos que se financia con cross-selling con consentimiento y un plan freemium."
  - "Android 1.0 y una demo web en cuatro idiomas tras 31 sprints, 219 tests automáticos y un plan de negocio de unos CHF 10,6 por usuario al año, listo para un piloto."
metrics:
  - value: "0 → 1"
    label: "de la idea a una versión 1.0 para Android"
    method: "Producto, diseño y código hechos por mí, de septiembre a octubre de 2026"
  - value: "31"
    label: "sprints, cada uno publicable"
    method: "Pull requests integrados en GitHub, cada uno con su propio alcance"
  - value: "219"
    label: "tests automáticos"
    method: "Tests unitarios, de widgets, de contrato y de traducciones en CI con cada cambio"
  - value: "4"
    label: "idiomas: EN, DE, FR, IT"
    method: "Todos los textos viven en ficheros de traducción que revisa un test"
links:
  - label: "Abrir la demo en vivo"
    href: https://joanmarti.github.io/finora-mvp/
  - label: "Código en GitHub"
    href: https://github.com/JoanMarti/finora-mvp
---

## En pocas palabras

<dl class="glance">
  <div><dt>La apuesta</dt><dd>El open banking llega a Suiza con SIX bLink y OpenWealth. Quien convierta esos datos en una visión tranquila y de confianza se gana un hábito diario.</dd></div>
  <div><dt>Mi rol</dt><dd>Todo desde cero: la tesis de producto, el modelo de datos, la arquitectura de la información, la UI, el modelo de negocio y el propio código.</dd></div>
  <div><dt>El resultado</dt><dd>Un producto que se puede instalar hoy: Android 1.0, una demo web en vivo y una arquitectura lista para pasar de datos de ejemplo a conexiones bancarias reales.</dd></div>
</dl>

## El problema

Un hogar típico en Suiza reparte su dinero entre dos o tres bancos, una plataforma de inversión, un fondo de pensiones y una o varias cuentas de Pilar 3a. Cada proveedor enseña su parte. Nadie enseña el conjunto, y las preguntas que la gente se hace los cruzan todos: cuánto tengo de verdad, si ahorro lo suficiente, si me llegará la jubilación y si puedo comprarme una casa.

Existen agregadores internacionales, pero no hablan suizo: no tienen Pilar 3a, ni AHV, ni impuestos por cantón, ni importes como CHF 1’248.40. Y la confianza es frágil. Nadie da acceso a su banco a una app que parece que podría mover su dinero o vender sus datos.

> La oportunidad no era otra app de presupuestos. Era una visión tranquila, suiza y de solo lectura de todo lo que alguien tiene, con próximos pasos claros.

## El objetivo: el agregador suizo que falta

Hoy un hogar en Suiza necesita una app por banco, otra para el bróker, un portal para el fondo de pensiones, otra para el Pilar 3a y otra más para la caja médica. Cada app responde preguntas sobre su propio producto. Ninguna responde preguntas sobre el hogar, y ningún producto suizo las reúne.

<dl class="glance">
  <div><dt>Hoy</dt><dd>Una app o un portal por proveedor, cada uno con su login, sus cifras y solo una parte del conjunto.</dd></div>
  <div><dt>Con Finora</dt><dd>Todas las cuentas en una sola vista de solo lectura, en CHF, con las reglas suizas del Pilar 3a, la AHV, los impuestos y la vivienda.</dd></div>
  <div><dt>Por qué importa</dt><dd>La visión de conjunto crea el hábito. El hábito permite a Finora mostrar ahorros que ningún proveedor por separado señalaría.</dd></div>
</dl>

Fijé tres objetivos de producto, en este orden:

1. **Agregar.** Conectar cada banco y gestor de patrimonio mediante SIX bLink y OpenWealth, más activos manuales como un inmueble.
2. **Explicar.** Convertir la visión de conjunto en respuestas: ¿voy bien?, ¿puedo comprar una casa?, ¿me llegará la jubilación?
3. **Actuar.** Cuando los datos muestran que alguien paga de más, conectarlo con un producto mejor, solo con su consentimiento.

## Principios de producto

Los escribí antes de diseñar una sola pantalla, y cada decisión posterior se contrastó con ellos:

- **Solo lectura por diseño.** Finora nunca puede mover dinero. Cualquier pago u operación devuelve al usuario a su banco. Es la base de la confianza, por eso aparece en la primera pantalla.
- **Valor antes que perfilado.** El onboarding solo pregunta lo necesario para montar la visión. Ingresos, objetivos y riesgo llegan después, cuando el producto puede explicar para qué los necesita.
- **Patrimonio antes que cuentas.** La primera pestaña responde cuánto tengo y hacia dónde va. Los bancos y movimientos están un nivel por debajo.
- **Conocimiento antes que venta cruzada.** Una oferta de un partner solo aparece después de una señal explicable en los propios datos, y solo con consentimiento expreso.
- **Educación, no asesoramiento.** Los temas de inversión son orientativos y dicen claramente que no son una recomendación personal.

## Un modelo de datos que hace comparables los bancos

El problema de diseño más difícil era invisible: los datos. Cada banco describe cuentas, saldos y movimientos de forma distinta, y solo se confía en un dashboard si sus números nunca se contradicen. Por eso diseñé primero la capa de datos.

<figure class="arch" aria-label="Diagrama de cómo Finora convierte los datos bancarios en una sola vista">
  <p class="arch-badge">Muchas fuentes, una sola verdad</p>
  <div class="arch-layer"><p class="arch-title">Fuentes</p><div class="arch-cols">
    <div><strong>Bancos</strong><ul><li>SIX bLink</li><li>Cuentas corrientes y de ahorro</li></ul></div>
    <div><strong>Patrimonio</strong><ul><li>OpenWealth</li><li>Carteras y Pilar 3a</li></ul></div>
    <div><strong>Manual</strong><ul><li>Inmuebles, coches</li><li>Otros bienes</li></ul></div>
  </div></div>
  <p class="arch-arrow"><span aria-hidden="true">↓</span>Los adaptadores normalizan cada respuesta</p>
  <div class="arch-layer arch-core"><p class="arch-title">Un único modelo financiero</p><p class="arch-sub">Entidades · Cuentas · Movimientos · Dinero en Rappen · Salud de los datos</p></div>
  <p class="arch-arrow"><span aria-hidden="true">↓</span>Calculado, nunca guardado</p>
  <div class="arch-layer"><p class="arch-title">La app</p><p class="arch-sub">Patrimonio neto, reparto, evolución, salud financiera y avisos, todo calculado a partir de las mismas cuentas</p></div>
  <figcaption>La interfaz nunca habla directamente con un banco. Pasar de datos de ejemplo a conexiones reales con bLink u OpenWealth cambia un solo sitio, no las pantallas.</figcaption>
</figure>

Cuatro decisiones mantienen los números honestos:

- **El dinero es exacto.** Los importes se guardan en Rappen enteros, nunca en decimales, y solo se formatean en la interfaz.
- **Los totales se calculan, nunca se guardan.** El patrimonio neto y el reparto salen cada vez de las cuentas, así el dashboard nunca puede contradecir a la lista de cuentas.
- **Entidad y cuenta van por separado.** Un banco puede tener cinco cuentas sin duplicar su estado de conexión.
- **La salud de los datos forma parte del modelo.** Cada conexión está al día, desactualizada, pendiente de acción o es manual, y el mismo estado aparece en el dashboard, en el banco y en el perfil.

## Un onboarding que se gana la confianza

<ol class="flow-steps" style="--start:0"><li><img src="/projects/finora/welcome.webp" alt="Pantalla de bienvenida con la promesa de una visión clara, solo lectura y control del usuario" loading="lazy" /><p><strong>Primero la promesa.</strong> Solo lectura y “tú tienes el control” es lo primero que se lee, antes de cualquier registro.</p></li><li><img src="/projects/finora/about-you.webp" alt="Formulario Sobre ti con año de nacimiento, cantón, situación laboral y familiar" loading="lazy" /><p><strong>Solo lo que cambia los números.</strong> El cantón, el trabajo y la familia determinan impuestos, reglas de jubilación y estimaciones. Todo se queda en el dispositivo.</p></li></ol>

El flujo se adapta a cada persona: los bancos y productos que elige son exactamente lo que muestra el dashboard, y se puede explorar todo con datos de ejemplo antes de crear una cuenta.

## Un dashboard con una jerarquía clara

En el dashboard fallan la mayoría de las apps de dinero: veinte widgets con el mismo peso. Lo diseñé como un orden de lectura, de la respuesta a los detalles.

![Dashboard de Finora en escritorio con patrimonio total, evolución, salud financiera y próximos recibos](/projects/finora/desktop-dashboard.webp "Escritorio: primero el patrimonio total, después su evolución, después la salud financiera y lo que está por venir. La navegación agrupa el producto en Resumen, Planificar, Ahorrar y Tú.")

1. **¿Cuánto tengo?** El patrimonio neto, con efectivo, inversiones, Pilar 3a y deuda en una fila debajo.
2. **¿Hacia dónde va?** La evolución del patrimonio a 6, 12 o 24 meses.
3. **¿Estoy bien?** Una puntuación de salud financiera sobre 100, con un siguiente paso.
4. **¿Qué tengo que hacer?** Próximos recibos y plazos, y después las herramientas de planificación.

La misma jerarquía se mantiene en móvil, tableta y escritorio, con diseños pensados para cada uno en lugar de una pantalla estirada.

<ol class="flow-steps" style="--start:2"><li><img src="/projects/finora/dashboard.webp" alt="Dashboard móvil con patrimonio total, accesos directos, salud financiera y evolución" loading="lazy" /><p><strong>El mismo orden en móvil.</strong> Respuesta, evolución, salud y accesos directos, todo al alcance del pulgar.</p></li><li><img src="/projects/finora/health.webp" alt="Revisión de salud financiera con 91 sobre 100 y áreas como fondo de emergencia y tasa de ahorro" loading="lazy" /><p><strong>Una puntuación con la que actuar.</strong> Seis áreas, cada una explicada en lenguaje claro y enlazada con la pantalla que la mejora.</p></li></ol>

## Una salud financiera que se entiende

Una única puntuación solo sirve si la gente la entiende y puede cambiarla. La revisión de salud combina seis áreas, ponderadas según lo que importan para un hogar en Suiza:

| Área | Peso | Qué mira |
| --- | --- | --- |
| Fondo de emergencia | 20% | Cuántos meses de gastos cubre el ahorro |
| Tasa de ahorro | 20% | Parte de los ingresos que queda cada mes |
| Jubilación | 20% | Ingresos previstos de AHV, fondo de pensiones y Pilar 3a |
| Pilar 3a | 15% | Aportaciones frente al máximo de este año |
| Vivienda | 15% | Si la vivienda actual o prevista es asumible |
| Gastos fijos | 10% | Parte de los ingresos que va a recibos fijos |

Cuando a Finora le faltan datos para un área, lo dice y sugiere qué añadir en lugar de adivinar. La puntuación sirve para empezar una conversación, no para juzgar.

## Cuentas, gastos y planificación suiza

<ol class="flow-steps" style="--start:4"><li><img src="/projects/finora/accounts.webp" alt="Pantalla de cuentas con el total, filtros y entidades conectadas con su estado de sincronización" loading="lazy" /><p><strong>Cada entidad, bien ordenada.</strong> Totales, filtros y un estado de sincronización visible para cada conexión.</p></li><li><img src="/projects/finora/account-detail.webp" alt="Detalle de cuenta con la evolución del saldo y un consejo de ahorro contextual" loading="lazy" /><p><strong>Conocimiento por cuenta.</strong> Evolución del saldo por periodo y una señal de ahorro solo cuando los datos la respaldan.</p></li><li><img src="/projects/finora/analysis.webp" alt="Análisis de gastos con tasa de ahorro, peso de los gastos fijos e ingresos frente a gastos" loading="lazy" /><p><strong>Los gastos, mes a mes.</strong> Tasa de ahorro, gastos fijos y flujo de caja, sin categorizar a mano.</p></li><li><img src="/projects/finora/home-buying.webp" alt="Simulador de compra de vivienda con el precio máximo asumible" loading="lazy" /><p><strong>¿Puedo comprar una casa?</strong> Un simulador con las reglas suizas: fondos propios, asequibilidad y retiro anticipado del fondo de pensiones.</p></li></ol>

En la planificación es donde Finora se vuelve suiza: una previsión de jubilación con los tres pilares (AHV con la 13.ª pensión, fondo de pensiones y Pilar 3a), un resumen fiscal por año con exportación en CSV, un calendario financiero con los plazos suizos y simuladores de compra de vivienda y ahorro fiscal.

## Cross-selling a partir de los datos del usuario

Ver todas las cuentas a la vez es también la ventaja de negocio. Finora puede justificar una oferta con una cifra del propio usuario, «pagas CHF 348 al mes a tu caja médica», en lugar de publicidad genérica. El motor funciona con 15 reglas explicables. Cada una parte de una señal en los datos y estima un ahorro anual prudente.

| Oportunidad | Se activa cuando | Ahorro estimado al año | Cómo cobra Finora |
| --- | --- | --- | --- |
| Cambiar de seguro básico | Hay una prima de caja médica en los recibos, en temporada de cambio (hasta el 30 de noviembre) | 5 a 15% de la prima | Tarifa por contrato, máximo CHF 70 por persona |
| Revisar seguros | Dos o más seguros en los recibos | CHF 420 a 840 | Parte de la comisión |
| Liquidez ociosa | Más de 3 meses de gasto en cuentas corrientes | 0,4 a 0,8% del exceso | Tarifa por cuenta abierta |
| Aprovechar el Pilar 3a | Queda margen hasta CHF 7’258, con prioridad en el último trimestre | 20 a 30% del margen, en impuestos | Tarifa por cuenta o aportación |
| Renovar la hipoteca | Hay una hipoteca conectada | 0,1 a 0,3% de la deuda | Parte de la comisión del bróker |
| Comisiones de tarjeta y banco | Una tarjeta de crédito, o cuentas corrientes en dos o más bancos | CHF 50 a 240 | Tarifa por tarjeta o cuenta |
| Teléfono e internet | Recibo de telecom de más de CHF 60 al mes | 20 a 40% del recibo | Tarifa por contrato |
| Revisar suscripciones | Dos o más suscripciones | Hasta la mitad del total | Nada: no hay partner, genera confianza |

Los ahorros se muestran como «un rango, no una promesa» y se calibrarán con los primeros partners. Con el perfil demo suman unos CHF 3’250 al año.

<ol class="flow-steps" style="--start:8"><li><img src="/projects/finora/offers.webp" alt="Formas de ahorrar con 13 oportunidades basadas en datos y el ahorro anual estimado" loading="lazy" /><p><strong>Ofertas a partir de los propios datos.</strong> Cada una sale de una regla explicable y muestra el ahorro anual estimado.</p></li><li><img src="/projects/finora/plus.webp" alt="Plan Finora Premium a CHF 4.92 al mes con pago anual y 14 días de prueba gratis" loading="lazy" /><p><strong>Freemium, dicho claramente.</strong> Premium quita límites y añade planificación más profunda. Antes de que acabe la prueba llega un aviso.</p></li></ol>

La experiencia de las ofertas sigue una regla: una oferta solo aparece si se puede explicar con los datos del usuario y si el usuario ha dicho que quiere verlas.

- **Una pregunta antes de analizar nada.** «¿Buscamos formas de ahorrar?» Hasta que la respuesta es sí, no se analiza nada para ofertas. Según la nueva ley suiza de protección de datos es un perfilado de alto riesgo, así que el consentimiento se guarda con la versión del texto.
- **Por qué lo ves.** Cada oferta muestra la cifra del usuario que la justifica, cómo se ha estimado el ahorro y cómo cobraría Finora.
- **Consentimiento por partner.** El botón para continuar solo se activa cuando el usuario acepta compartir su nombre, su e-mail y esos datos con ese partner concreto.
- **La comisión nunca decide el orden.** Las ofertas se ordenan por fecha límite y tamaño del ahorro. Como mucho aparecen dos en el dashboard, y «No me interesa» oculta una para siempre.
- **El análisis del día a día nunca pasa a ser de pago.** Finora Premium (CHF 59 al año) levanta límites y añade planificación avanzada. Nunca cambia qué ofertas aparecen.

## El plan de negocio

Finora gana dinero cuando ayuda a ahorrar. Modelé el plan por cada 10’000 usuarios activos con supuestos explícitos, para que el primer piloto pueda confirmar o tumbar cada uno.

<ul class="pb-stats"><li><strong>CHF 10,6</strong><span>de ingreso por usuario activo y año, escenario base</span></li><li><strong>60%</strong><span>de usuarios que aceptan ofertas, el supuesto con más impacto</span></li><li><strong>CHF 59</strong><span>Premium al año, o CHF 6,90 al mes</span></li><li><strong>T2 2027</strong><span>piloto propuesto, tras cerrar partners y revisión legal</span></li></ul>

| Fuente de ingresos | Conversión anual (supuesto) | Ingreso por conversión | Ingreso anual |
| --- | --- | --- | --- |
| Hipotecas | 0,3% de 6’000 usuarios con consentimiento → 18 | CHF 1’500 | CHF 27’000 |
| Seguro básico | 4% → 240 | CHF 70 (tope legal) | CHF 16’800 |
| Banca: ahorro, tarjetas, cuentas | 3% → 180 | CHF 80 | CHF 14’400 |
| Otros seguros | 1,5% → 90 | CHF 150 | CHF 13’500 |
| Pilar 3a | 2% → 120 | CHF 100 | CHF 12’000 |
| Telecom | 2% → 120 | CHF 40 | CHF 4’800 |
| Finora Premium | 3% de 10’000 usuarios → 300 | CHF 59 | CHF 17’700 |
| **Total** | | | **CHF 106’200, unos CHF 10,6 por usuario** |

Todas las tasas y tarifas, salvo el tope de CHF 70, son supuestos a validar con partners. Las hipotecas aportan una cuarta parte del ingreso con muy pocas conversiones, así que un solo acuerdo con un bróker cambia el resultado.

- **Por qué ahora.** Las primas del seguro básico suben un 5,0% de media en 2027 y el plazo para cambiar acaba el 30 de noviembre. Es el momento del año en que más gente busca ahorrar.
- **Partners en tres olas.** Primero, programas abiertos con comisión conocida (tasación de inmuebles y tarifas móviles vía Awin, un comparador de seguros de salud). Después, un piloto para gastos en el extranjero e inversión. Por último, acuerdos directos con un proveedor de Pilar 3a y un bróker hipotecario, donde el ahorro para el usuario es mayor.
- **La regulación da forma al modelo.** Para cobrar comisiones de seguros, Finora debe registrarse en la FINMA como intermediario no vinculado o trabajar con uno registrado. Las comisiones del seguro básico están limitadas a CHF 70 por persona desde septiembre de 2024. Remitir a productos financieros necesita una revisión jurídica según la LSFin antes del lanzamiento.
- **Un embudo medible sin datos personales.** La app ya registra visualizaciones, clics al partner y descartes como recuentos anónimos. Objetivos del piloto: 60% de consentimiento, 15% de clics al partner, 25% de conversión en el partner y menos del 20% de descartes.

Falta para cerrar el plan: el coste de adquisición por usuario, la retención a 12 meses y las tarifas reales de los primeros partners.

## Diseñado y construido con IA

Diseñé Finora y la construí en código con Claude Code, en 31 sprints cortos, cada uno terminado con un producto publicable. Trabajar así cambió mi forma de diseñar: las decisiones se probaban el mismo día en el producto real, no en un prototipo.

- **Flutter** para iOS, Android y web con una sola base de código, y diseños adaptados a móvil, tableta y escritorio.
- **Una arquitectura limpia**: la interfaz depende de un contrato de datos financieros, así un proveedor bancario real sustituye los datos de ejemplo en un solo sitio.
- **Un backend de referencia y tests de contrato** que evitan que la app y su API se separen.
- **219 tests automáticos**, incluidos tests de traducción que fallan si a alguno de los cuatro idiomas le falta un texto.
- **Entrega continua**: cada cambio se analiza, se prueba y se publica en la demo web, y las versiones de Android se generan automáticamente.
- **Accesibilidad por defecto**: zonas táctiles de 48 px, etiquetas descriptivas, estados de sincronización visibles y una paleta revisada por contraste.

![Pantalla de planes de Finora en escritorio comparando Free y Premium](/projects/finora/desktop-plans.webp "Los diseños de escritorio se pensaron para cada pantalla, no se estiraron desde el móvil.")

## Qué aprendí

- **En fintech, el modelo de datos es el diseño.** El dashboard tranquilo solo es posible porque cada número sale de una sola fuente y no puede contradecir a otro.
- **La confianza se diseña en muchos sitios pequeños**: solo lectura en la primera pantalla, consentimientos con versión, estados de sincronización visibles y una comisión que nunca decide el orden.
- **Construirlo yo mismo me hizo mejor product designer.** Tuve que concretar cada compromiso, desde el precio del plan anual hasta qué pasa cuando una conexión bancaria se queda desactualizada.

**Siguiente paso:** validar el onboarding, la comprensión de las conexiones y la jerarquía del dashboard con 5 a 8 personas que trabajan con varios bancos suizos, confirmar cobertura y costes con los proveedores de bLink y OpenWealth, y medir la finalización, el éxito de las conexiones y el uso recurrente.

Todas las cifras, saldos y personas de las capturas son datos de ejemplo ficticios.
