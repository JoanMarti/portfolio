---
title: Crealogix Design Hub
headline: Un design system, muchos bancos
summary: Un design system preparado para SaaS que permitió a los bancos compartir un mismo núcleo sin renunciar a su marca, su normativa ni sus necesidades regionales.
client: Crealogix
sector: Software bancario (SaaS)
year: "TODO"
role: Senior UX/UI Designer, design systems y plataforma de producto
team: Equipo de innovación, con diseño y desarrollo en Suiza, Alemania, Austria, Reino Unido, España, Arabia Saudí y Singapur
duration: "TODO"
tools: [Figma, Storybook, Confluence, Design tokens]
cover: tenants
featured: true
order: 3
tldr:
  - Crealogix desarrolla canales digitales para banca retail, privada, corporativa y de patrimonios. Cada oficina construía sus propios componentes, así que las entregas se ralentizaban y la calidad cambiaba de un cliente a otro.
  - Definí un modelo multicliente con un núcleo común, temas de marca basados en tokens y extensiones para cada segmento bancario, además de la documentación y el gobierno que hicieron que los equipos lo adoptaran de verdad.
  - El traspaso de diseño a desarrollo fue un 40% más rápido, los diseñadores quedaron más satisfechos con sus herramientas y el sistema se convirtió en el estándar para cada producto nuevo.
metrics:
  - value: "40%"
    label: menos tiempo de traspaso de diseño
    method: "TODO: método, por ejemplo días medios desde diseño terminado hasta listo para desarrollo, antes y después"
  - value: "+35%"
    label: satisfacción del equipo de diseño
    method: Encuesta trimestral de satisfacción a los diseñadores de todas las oficinas
  - value: "7"
    label: países con un mismo núcleo
    method: Suiza, Alemania, Austria, Reino Unido, España, Arabia Saudí y Singapur
---

## El problema

A medida que Crealogix crecía, sus oficinas de Suiza, Alemania, Austria, Reino Unido, España, Arabia Saudí y Singapur construían cada una sus propios componentes. El resultado era previsible: componentes duplicados, patrones que se separaban, una documentación en la que nadie confiaba y personalizaciones más lentas para cada banco nuevo.

En software bancario, la falta de coherencia no es solo un problema de UX. **Multiplica el riesgo**, porque el cumplimiento normativo, la accesibilidad y la confianza en la marca dependen de una calidad previsible.

El sistema tenía que ser cuatro cosas a la vez:

- un **núcleo común** para todos los productos bancarios,
- una **capa de marca blanca** para que cada cliente aplicara su propia marca,
- una **capa regional** para los requisitos de Europa y Oriente Medio,
- y algo que diseño y desarrollo adoptaran **sin que se lo impusieran**.

## Qué hice

Trabajé entre la definición de producto y la arquitectura del sistema dentro del equipo de innovación, como responsable del diseño, la documentación y la formación en torno al sistema.

**Primero, entender.** Entrevistas con diseñadores, product managers y responsables de negocio de todas las regiones, una auditoría de los componentes duplicados y un análisis comparativo de Material, Carbon, Lightning y el Bloomberg Terminal. Este último, porque las interfaces financieras densas siguen otras reglas. Aparecieron cuatro barreras:

1. La documentación desactualizada generaba poca confianza y retrabajo.
2. No había margen para personalizar por cliente o región, así que los equipos copiaban componentes.
3. Las herramientas de diseño y desarrollo no encajaban, y las implementaciones se desviaban.
4. El cumplimiento normativo y la accesibilidad se aplicaban de forma desigual según el mercado.

## Decisiones clave

**Personalizar con tokens, no con componentes.** Fue la decisión central. La marca de cada banco (color, tipografía, formas y estilo de iconos) vivía en un tema que sobrescribía tokens sobre los mismos componentes. Nadie tenía que copiar un botón para que se pareciera a su banco. Los temas son menos expresivos que los componentes a medida, pero el núcleo sigue siendo mantenible.

**Tres capas con responsables claros.**
- *Núcleo:* fundamentos, componentes base y reglas de accesibilidad, gestionados de forma central.
- *Tema:* marca y reglas de cada mercado, como el idioma, la escritura de derecha a izquierda y los textos legales, configurados por cliente.
- *Extensiones:* patrones para cada segmento, como KYC, aprobaciones y vistas de cartera para banca retail, privada, corporativa y de patrimonios, aportados por los equipos de producto y revisados.

**Nombres de tokens que coinciden con el código.** Primero tokens semánticos, nunca valores en bruto, y los mismos nombres en Figma y en las variables del código. Ese vocabulario común eliminó toda una categoría de preguntas en el traspaso.

**La documentación como motor de adopción.** Tenía dos áreas. Los *fundamentos del sistema* recogían principios, versiones, reglas de temas, el proceso de contribución y el onboarding para diseño y desarrollo. Los *componentes* recogían uso, variantes, estados, qué hacer y qué no, accesibilidad, una demo en vivo en Storybook, notas de implementación e historial de versiones. Usé IA para los primeros borradores de las páginas de componentes, la revisión de nombres, los resúmenes de las notas de versión y la detección de huecos (comparando las propiedades de Figma con la plantilla de documentación). Todo se revisaba antes de publicarse.

## Despliegue

El despliegue fue progresivo y colaborativo, no impuesto: talleres y sesiones de onboarding en cada oficina, un ritmo fijo de priorización y versiones, y feedback continuo de los equipos que usaban el sistema en proyectos reales. La adopción se midió con la analítica de la librería de Figma, el tiempo de traspaso y encuestas de satisfacción.

## Qué aprendí

- Los sistemas multicliente funcionan cuando la personalización se hace con tokens. Personalizar con componentes siempre acaba en copias.
- El gobierno tiene que ser ligero pero explícito, o los equipos vuelven a sus copias locales.
- La documentación es la palanca principal de adopción. Cuando se queda desactualizada, la confianza se hunde rápido.

**La próxima vez** invertiría antes en automatizar la paridad entre Figma y el código (linting y sincronización de tokens) y en patrones para banca de patrimonios y corporativa.
