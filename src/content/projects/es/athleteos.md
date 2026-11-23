---
title: "AthleteOS"
headline: "Cuatro dispositivos, una respuesta de entrenamiento"
summary: "Un producto personal que diseñé y construí para mi entrenamiento de ultra distancia: une Suunto, Garmin, Fitbit y WHOOP en una sola fuente y convierte los datos en una recomendación explicada cada día."
client: "Proyecto personal"
sector: "Tecnología de salud y deporte"
year: "2026"
role: "Product designer y desarrollador"
team: "En solitario"
duration: "En curso"
tools: [Figma, Next.js, TypeScript, Supabase, Recharts, Claude Code]
cover: signals
featured: false
order: 6
kind: side-project
tldr:
  - "Como atleta de ultra distancia uso Suunto, Garmin, Fitbit y WHOOP. Cada dispositivo ve una parte, pero ninguno me dice cómo está mi condición, cómo debería entrenar hoy ni qué entrenamientos están funcionando de verdad."
  - "Diseñé y construí AthleteOS: conecta todos los dispositivos en una sola fuente y convierte la HRV, el sueño, la carga de entrenamiento y la recuperación en un índice de preparación diario y una recomendación que se explica sola."
  - "Un producto que funciona y que uso en mi propio entrenamiento, de código abierto en GitHub, y una prueba práctica de cómo hacer que las recomendaciones basadas en datos se entiendan y generen confianza."
metrics:
  - value: "1"
    label: "fuente para todos los dispositivos"
    method: "Suunto, Garmin, Fitbit, WHOOP y Strava en un solo modelo de datos"
  - value: "0 a 100"
    label: "índice de preparación diario"
    method: "HRV, sueño, carga y tendencia de recuperación"
  - value: "9"
    label: "reglas detrás de cada recomendación"
    method: "Evaluadas por prioridad, cada una explicada"
links:
  - label: "Ver el código en GitHub"
    href: https://github.com/JoanMarti/athleteos
---
## Por qué lo empecé

La ultra distancia es mi hobby. Entrenar para carreras de muchas horas significa bloques largos de trabajo donde las pequeñas decisiones se acumulan: cuándo apretar, cuándo descansar, qué sesiones repetir. Quería entender mejor mi propia condición y entrenar con intención, no por costumbre.

Los datos estaban todos, pero repartidos. **Suunto** registra mis salidas de trail y montaña con un GPS preciso, **Garmin** mis actividades y la Body Battery, **Fitbit** mi sueño y la frecuencia cardiaca en reposo, y **WHOOP** mi recuperación y la HRV. Cuatro apps, cuatro dashboards y cifras que a menudo no coinciden. Ninguna respondía a las preguntas que yo tenía.

<dl class="glance">
  <div><dt>¿Cómo está mi condición?</dt><dd>Una lectura honesta de hoy, construida con todas las señales y no con la opinión de un solo dispositivo.</dd></div>
  <div><dt>¿Cómo entreno hoy?</dt><dd>Una recomendación con su porqué, no un muro de gráficos.</dd></div>
  <div><dt>¿Qué entrenamiento funciona?</dt><dd>Lo planificado frente a lo hecho, la carga frente a la forma, y cómo responde la recuperación semana a semana.</dd></div>
</dl>

## Una fuente para todos los dispositivos

El primer trabajo fue conectarlo todo y hablar un solo idioma. Cada proveedor se conecta con OAuth, sus datos se traducen a un único modelo, y la app muestra con claridad qué está conectado y cuándo se sincronizó por última vez.

| Fuente | Qué aporta |
| --- | --- |
| Suunto | Sesiones de trail, montaña y natación con GPS preciso en exterior |
| Garmin | Actividades, Body Battery, SpO₂ y HRV |
| Fitbit | Fases del sueño, HRV, frecuencia cardiaca en reposo y pasos |
| WHOOP | Índice de recuperación, sueño y HRV (RMSSD) |
| Strava | Actividades con potencia, ritmo, frecuencia cardiaca y zonas |

![Pantalla de fuentes de datos de AthleteOS con tarjetas de conexión de Strava, Fitbit y Suunto y notas de privacidad](/projects/athleteos/connect.webp "Fuentes de datos: cada dispositivo muestra qué aporta, su estado de conexión y cómo se tratan sus datos. Los tokens se guardan cifrados y el acceso es de solo lectura.")

**La confianza empieza en la fontanería.** El acceso de solo lectura, los tokens cifrados y poder desconectar en cualquier momento forman parte de la experiencia, no solo del backend. Si no veo de dónde sale una cifra, no me fío del consejo que se apoya en ella.

## De los datos a una respuesta

La vista del día responde a las dos primeras preguntas. Empieza con un **índice de preparación de 0 a 100** y una sesión recomendada, y todo lo demás va debajo.

![Vista de hoy de AthleteOS con un índice de preparación de 82, su desglose y una sesión de umbral recomendada](/projects/athleteos/today.webp "Hoy: el índice de preparación y su desglose a la izquierda, una sesión recomendada a la derecha, con el motivo en una línea.")

El índice pondera cuatro señales, y el desglose siempre está visible para que la cifra nunca parezca una caja negra:

<ul class="pb-stats"><li><strong>35%</strong><span>HRV</span></li><li><strong>30%</strong><span>Sueño</span></li><li><strong>25%</strong><span>Carga de entrenamiento (TSB)</span></li><li><strong>10%</strong><span>Tendencia de recuperación</span></li></ul>

La recomendación sale de **nueve reglas evaluadas por orden de prioridad**. Primero van las de seguridad: descanso obligatorio cuando la fatiga es crítica y recuperación activa cuando la preparación es baja. Las sesiones de calidad solo aparecen cuando el cuerpo está listo. Cada recomendación nombra la señal que la ha provocado.

<details class="more">
<summary>Las nueve reglas, por orden de prioridad</summary>
<div class="more-body">

| Regla | Cuándo | Sesión |
| --- | --- | --- |
| 1 | Forma por debajo de −35 o seis días duros seguidos | Descanso total |
| 2 | Preparación por debajo de 35 | Recuperación activa, zona 1 |
| 3 | Viernes después de tres o más días duros | Descarga deliberada, zona 2 |
| 4 | Dos semanas o menos para una carrera | Tapering |
| 5 | Preparación por debajo de 55 o forma por debajo de −15 | Resistencia aeróbica, zona 2 |
| 6 | Preparación de 70 o más con objetivo de potencia | Intervalos de umbral |
| 7 | Preparación de 70 o más con objetivo de carrera | Series de VO₂max |
| 8 | Fin de semana y preparación de 75 o más | Sesión larga, zona 2 |
| 9 | Cualquier otro caso | Aeróbico moderado, zona 2 |

Un motor de reglas claro fue un primer paso deliberado: es fácil de explicar y de depurar antes de añadir machine learning encima.

</div>
</details>

## Qué entrenamiento funciona

La tercera pregunta necesita tiempo, por eso está un nivel más abajo. La vista semanal compara la carga planificada con la real día a día; la de recuperación muestra cómo responden la HRV, el sueño y la fatiga en 30 días.

![Vista semanal de AthleteOS con la carga planificada y la real por día, el plan de la semana y el reparto por deporte](/projects/athleteos/week.webp "Esta semana: carga planificada frente a real, el plan por tipo de sesión y cómo se reparte el tiempo entre deportes.")

![Vista de recuperación de AthleteOS con la tendencia de HRV de 30 días, las fases del sueño y el gráfico de fatiga, forma y frescura](/projects/athleteos/recovery.webp "Recuperación: la HRV frente a su media de 30 días, 14 noches de fases del sueño y la fatiga, la forma y la frescura (ATL, CTL, TSB) en el tiempo.")

Leer la fatiga (ATL), la forma (CTL) y la frescura (TSB) junto a la HRV y el sueño es lo que me dice si un bloque de entrenamiento está construyendo forma o solo cavando un agujero.

## Decisiones de diseño

- **Decidir qué se queda fuera.** El reto nunca fue mostrar más datos. Cada pantalla responde a una pregunta y lleva el resto un nivel más abajo.
- **Explicar cada cifra.** Los índices llevan su desglose y las recomendaciones su motivo, porque la confianza depende de poder comprobarlo.
- **Niveles en lugar de una talla única.** Cuatro niveles de atleta, de recreativo a profesional, cada uno con su reparto de entrenamiento y sus objetivos de nutrición, para que los mismos datos den un consejo que encaje con cada persona.
- **Un pequeño design system propio.** Pensado primero en modo oscuro, con una tipografía deportiva para títulos y una monoespaciada para las cifras, y un layout que pasa de barra lateral en escritorio a navegación inferior en móvil.

![Vista de salud y recuperación de AthleteOS con los componentes de la recuperación y la recomendación del día](/projects/athleteos/health.webp "Salud y recuperación: los componentes de la recuperación, cada uno con su dispositivo de origen, y la recomendación del día.")

## Diseñado y construido con IA

Diseñé AthleteOS y lo construí yo mismo con Claude Code: una app en Next.js y TypeScript con Supabase, gráficos en Recharts e integraciones con cada proveedor. Construirlo, y no solo diseñarlo, me permitió poner las ideas a prueba con datos reales y límites reales.

Las capturas usan datos de demostración.

## Próximos pasos

- Probar las recomendaciones durante una temporada completa de ultra y ver qué sesiones mejoran de verdad mi rendimiento.
- Resúmenes semanales generados con IA en lenguaje claro, basados en las mismas reglas.
- Estudiar cómo reaccionamos yo y otros atletas ante recomendaciones con las que no estamos de acuerdo, que es la verdadera prueba de la confianza.
