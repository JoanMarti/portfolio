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
  - "En Suiza la gente reparte su dinero entre varios bancos, un fondo de pensiones y el Pilar 3a, y ninguna app muestra el conjunto a la manera suiza."
  - "Definí el producto, diseñé un modelo de datos que convierte cualquier banco en una sola vista y construí la app en Flutter para iOS, Android y web, con un modelo freemium y el consentimiento por delante en las ofertas de partners."
  - "Un producto que funciona en 31 sprints: una versión 1.0 para Android, una demo web en cuatro idiomas, un backend de referencia y 219 tests automáticos."
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

## Un modelo de negocio que no traiciona al usuario

Una app gratuita que analiza el dinero tiene que ganar algo, y las formas fáciles destruyen la confianza. Diseñé el modelo de negocio con el mismo cuidado que las pantallas.

<ol class="flow-steps" style="--start:8"><li><img src="/projects/finora/offers.webp" alt="Formas de ahorrar con 13 oportunidades basadas en datos y el ahorro anual estimado" loading="lazy" /><p><strong>Ofertas a partir de los propios datos.</strong> Cada una sale de una regla explicable y muestra el ahorro anual estimado.</p></li><li><img src="/projects/finora/plus.webp" alt="Plan Finora Premium a CHF 4.92 al mes con pago anual y 14 días de prueba gratis" loading="lazy" /><p><strong>Freemium, dicho claramente.</strong> Premium quita límites y añade planificación más profunda. Antes de que acabe la prueba llega un aviso.</p></li></ol>

- **El análisis del día a día nunca pasa a ser de pago.** Premium añade bancos ilimitados, 24 meses de historial y planificación más profunda. Bajar de plan nunca borra nada.
- **La comisión nunca decide el orden.** Cómo cobraría Finora de un partner aparece en cada oferta, y nunca influye en qué ofertas aparecen ni en su orden.
- **El consentimiento es una funcionalidad.** Analizar los datos para hacer ofertas cuenta como perfilado de alto riesgo según la nueva ley suiza de protección de datos, así que requiere consentimiento expreso, guardado con la versión del texto aceptado.
- **Métricas de negocio sin datos personales.** El embudo de ofertas se reporta como recuentos anónimos por tipo de oferta, sin nombres, importes ni fechas por persona.

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
