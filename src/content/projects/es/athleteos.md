---
title: AthleteOS
headline: Dar sentido a los datos de un deportista de siete wearables y apps, diseñado y programado de principio a fin
summary: Un proyecto personal en el que diseñé y programé una plataforma de entrenamiento que combina datos de Strava, WHOOP, Garmin y otras en una única recomendación diaria.
client: Proyecto personal
sector: Salud y tecnología deportiva
year: "2026"
role: Diseñador de producto y desarrollador
team: En solitario
duration: En curso
tools: [Figma, Next.js, TypeScript, Supabase, Recharts, Claude]
cover: signals
featured: false
order: 6
kind: side-project
tldr:
  - Los deportistas de resistencia acumulan datos en muchas apps (Strava, WHOOP, Garmin, Suunto, Wahoo, Intervals.icu y TrainingPeaks), pero ninguna responde a la única pregunta que importa por la mañana. ¿Cómo debería entrenar hoy?
  - Diseñé y programé una plataforma que combina carga de entrenamiento, HRV, sueño y recuperación en una puntuación diaria de preparación y una única recomendación, con un design system propio pensado primero para el modo oscuro.
  - Un producto que funciona, publicado en GitHub, y una forma práctica de comprobar cómo hacer que las recomendaciones basadas en datos se entiendan y generen confianza.
metrics: []
links:
  - label: Ver el código en GitHub
    href: https://github.com/JoanMarti/athleteos
---

## Por qué lo construí

Quería trabajar en la parte de los productos de IA y datos que más me interesa como diseñador: **convertir señales complejas en una decisión en la que la gente confíe**. Construirlo yo mismo, y no solo diseñarlo, me permitió probar esas ideas con datos y limitaciones reales.

## El reto de diseño

Un deportista con un reloj, una pulsera de recuperación y una app de entrenamiento tiene tres paneles y ninguna respuesta. A menudo los números no coinciden. El reto no era enseñar más datos. Era **decidir qué dejar fuera** y explicar el resto.

## Decisiones clave

**Una recomendación, explicada.** La vista diaria empieza con una puntuación de preparación de 0 a 100, calculada a partir de HRV, sueño, carga de entrenamiento y tendencia de recuperación, y una recomendación que sale de un motor de nueve reglas priorizadas. Cada recomendación explica por qué y nombra la señal que la ha provocado. Un motor de reglas claro fue un primer paso deliberado: más fácil de explicar y de revisar antes de añadir aprendizaje automático.

**Profundidad progresiva.** Primero está la vista diaria. La carga semanal, las tendencias de 30 días (ATL, CTL y TSB), la HRV y las fases del sueño están un nivel más abajo para quien quiera profundizar.

**Niveles en lugar de una talla única.** Cuatro niveles de deportista, de aficionado a profesional, cada uno con sus propios protocolos de entrenamiento y objetivos de nutrición, para que los mismos datos lleven a consejos que encajan con cada persona.

**Confianza también en la parte técnica.** OAuth para cada proveedor, tokens cifrados antes de guardarlos y un estado de conexión claro con la hora de sincronización. Se ve qué está conectado y cuándo se actualizó por última vez. Eso forma parte de la experiencia, no solo del backend.

**Un pequeño design system propio.** Variables CSS, pensado primero para el modo oscuro, una tipografía deportiva para los titulares combinada con una monoespaciada para los números, y un layout adaptable que pasa de una barra lateral en escritorio a una navegación inferior en el móvil.

## Próximos pasos

- Resúmenes semanales en lenguaje sencillo generados con IA y basados en las mismas reglas.
- Probar cómo reaccionan los usuarios a las recomendaciones con las que no están de acuerdo, que es la verdadera prueba de confianza.
