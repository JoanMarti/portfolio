---
title: Crealogix Design Hub
headline: "Un design system, muchos bancos"
summary: "Un design system multimarca y unos estándares de UX compartidos con los que más de 5 entidades financieras de Suiza, Europa y Oriente Medio comparten un mismo núcleo sin renunciar a su marca, sus mercados ni su normativa."
client: Crealogix
sector: "Software bancario (SaaS)"
year: "2019 a 2021"
role: "Lead UX/UI Designer and Design Systems Specialist"
team: "Diseñadores a mi cargo, Producto, Ingeniería y equipos de cliente en Suiza, España y Alemania"
duration: "2 años y 2 meses"
# TODO (Joan): number of banks live on the system, time to onboard a new bank or brand theme before and after,
#   how the four metrics were measured, and whether +35% is customer or designer satisfaction (the old site said designers).
tools: [Figma, Storybook, Confluence, Design tokens, CSS, Angular]
cover: tenants
featured: true
order: 3
discipline: [product, visual]
tldr:
  - "Crealogix vende banca digital a muchos bancos a la vez. Cada oficina construía sus propios componentes, así que cada cliente nuevo suponía más copias, entregas más lentas y una calidad desigual."
  - "Lideré diseñadores y ayudé a crear unos estándares de UX compartidos y un design system multimarca: temas de marca basados en tokens sobre un mismo núcleo, extensiones por segmento bancario y una documentación en la que los equipos confiaban."
  - "Un solo sistema para más de 5 entidades financieras de Suiza, Europa y Oriente Medio, con alrededor de un 75% más de adopción y eficiencia y un 50% más de eficiencia de implementación."
metrics:
  - value: "+75%"
    label: "adopción y eficiencia del sistema"
    method: "TODO"
  - value: "+35%"
    label: "satisfacción del cliente"
    method: "TODO"
  - value: "+50%"
    label: "eficiencia de implementación"
    method: "TODO"
  - value: "5+"
    label: "entidades financieras con un solo sistema"
    method: "TODO"
---

## Qué estaba en juego

<dl class="glance">
  <div><dt>Riesgo de negocio</dt><dd>Crealogix vende la misma plataforma de banca digital a muchos bancos. Sin un núcleo común, cada cliente nuevo se convierte en una bifurcación que frena las entregas y multiplica el riesgo en cumplimiento normativo, accesibilidad y confianza en la marca.</dd></div>
  <div><dt>Alcance</dt><dd>Más de 5 entidades financieras de Suiza, Europa y Oriente Medio, en banca minorista, corporativa, privada y gestión patrimonial. Entre los clientes estaban Julius Baer, Credit Suisse y J. Safra Sarasin.</dd></div>
  <div><dt>Decisión clave</dt><dd>Personalizar con tokens, no con componentes. Un banco nuevo es un tema nuevo sobre el mismo núcleo, nunca una copia de un botón.</dd></div>
</dl>

## Contexto

Crealogix desarrolla canales de banca digital para clientes de banca minorista, corporativa, privada y patrimonial, y los vende como plataforma. Ese modelo de negocio solo funciona si un mismo producto puede parecerse y comportarse como muchos bancos a la vez.

Con el crecimiento, sus oficinas de Suiza, Alemania, Austria, Reino Unido, España, Arabia Saudí y Singapur construían cada una sus propios componentes. El resultado era previsible: componentes duplicados, patrones que se separaban, una documentación en la que nadie confiaba y una personalización más lenta para cada banco nuevo.

En el software bancario, la incoherencia no es solo un problema de UX. **Multiplica el riesgo**, porque el cumplimiento normativo, la accesibilidad y la confianza en la marca dependen de una calidad predecible. Y cada semana dedicada a rehacer un componente para un banco es una semana que no se dedica al producto por el que pagan todos.

El sistema tenía que ser cuatro cosas a la vez:

- un **núcleo común** para todos los productos bancarios,
- una **capa de marca blanca** para que cada cliente aplicara su propia marca,
- una **capa regional** para los requisitos de Suiza, Europa y Oriente Medio,
- algo que diseño y desarrollo adoptaran **sin que se lo impusieran**.

## Discovery

Empecé con entrevistas a diseñadores, product managers y responsables de negocio de todas las regiones, una auditoría de componentes duplicados y un benchmark de Material, Carbon, Lightning y el Bloomberg Terminal. Este último porque las interfaces financieras densas siguen sus propias reglas. Aparecieron cuatro barreras:

1. **Documentación desactualizada**, que generaba desconfianza y retrabajo.
2. **Ningún margen para personalizar por cliente o región**, así que los equipos copiaban componentes.
3. **Herramientas de diseño y desarrollo desalineadas**, así que las implementaciones se separaban.
4. **Cumplimiento normativo y accesibilidad aplicados de forma desigual** según el mercado.

## La visión: una única fuente de verdad

El objetivo iba más allá de una librería de componentes. El design system estaba en el centro, la documentación de UX explicaba cómo y por qué usarlo, y juntos se convertían en una única fuente de verdad para todos los que construyen un producto bancario en Crealogix.

<figure class="rings" aria-label="Tres círculos concéntricos: el design system dentro de la documentación de UX dentro de una única fuente de verdad">
  <div class="ring r1"><span>Una única fuente de verdad</span><div class="ring r2"><span>Documentación de UX</span><div class="ring r3"><span>Design system</span></div></div></div>
  <figcaption>Cada anillo depende del de dentro: no hay fuente de verdad sin documentación, ni documentación sin un sistema que merezca documentarse.</figcaption>
</figure>

## Roadmap: primero lo intangible

El roadmap empezó a propósito por lo que no se ve. Sin propósito, principios e identidad compartidos, cada componente se convierte en un debate de gustos. Con ellos, los componentes pasan a ser decisiones que los equipos pueden contrastar.

<div class="roadmap" role="group" aria-label="Roadmap en tres fases">
  <div class="phase"><p class="ph">Fase 1 <em>intangible</em></p><div class="cards"><div class="card soft"><strong>Propósito y valores</strong><ul><li>¿Hacia dónde vamos?</li><li>¿Por qué?</li><li>¿Cómo?</li></ul></div><div class="card soft"><strong>Principios de diseño</strong><ul><li>Cómo diseñar para la web</li><li>Diseño de gestos</li><li>Visualización de datos</li></ul></div><div class="card soft"><strong>Identidad y lenguaje</strong><ul><li>Colores, tipografías, espacios</li><li>Formas, iconos, ilustraciones</li><li>Fotografía, animación</li><li>Voz y tono</li></ul></div></div></div>
  <div class="phase"><p class="ph">Fase 2 <em>tangible</em></p><div class="cards"><div class="card hard"><strong>Tokens</strong><ul><li>Color y opacidad</li><li>Unidades de espaciado</li><li>Tamaño y familia tipográfica</li><li>Retícula flex</li><li>Sombra y z-index</li></ul></div><div class="card hard"><strong>Átomos</strong><ul><li>Botón</li><li>Badge</li><li>Input</li></ul></div></div></div>
  <div class="phase"><p class="ph">Fase 3</p><div class="cards"><div class="card hard"><strong>Moléculas</strong><ul><li>Comportamientos básicos</li><li>Patrones de navegación</li><li>Patrones por segmento</li></ul></div></div></div>
</div>

<p class="roadmap-cap">La fase 1 alineó a la empresa en el porqué y el cómo. La fase 2 lo convirtió en tokens y átomos. La fase 3 los combinó en patrones.</p>

## Decisiones difíciles

**1. Personalizar con tokens, no con componentes.** Fue la decisión central. La marca de cada banco (color, tipografía, forma y estilo de iconos) vivía en un tema de tokens sobre los mismos componentes. Nadie tenía que copiar un botón para que pareciera de su banco.

*Lo que cedimos:* los temas son menos expresivos que los componentes a medida. *Lo que ganamos:* un solo núcleo que mantener, probar y certificar en accesibilidad, sin importar cuántos bancos hubiera.

**2. Principios antes que componentes.** Empezar por propósito, principios e identidad parecía lento a equipos que querían botones. Pero dio una referencia a cada debate posterior, del diseño de gestos a la visualización de datos.

*Lo que cedimos:* menos entregables visibles en la primera fase. *Lo que ganamos:* decisiones de componentes que se discutían una vez, no una vez por oficina.

**3. Tres capas con responsables claros.** Un núcleo común, un tema por banco y mercado, y extensiones por segmento bancario. Cada capa tenía un responsable, así la autonomía no significaba fragmentación.

*Lo que cedimos:* más trabajo de gobernanza. *Lo que ganamos:* los equipos de producto podían avanzar rápido en su segmento sin romper el núcleo.

**4. Nombres de tokens iguales que en código.** Primero tokens semánticos, nunca valores sueltos, y los mismos nombres en Figma y en las variables de código. Ese vocabulario común eliminó toda una categoría de dudas en los traspasos.

## Arquitectura: un núcleo, muchos bancos

<figure class="arch" aria-label="Diagrama de las tres capas del design system de Crealogix">
  <p class="arch-badge">Un núcleo, muchos bancos</p>
  <div class="arch-layer arch-core"><p class="arch-title">Núcleo</p><p class="arch-sub">Fundamentos · Componentes base · Reglas de accesibilidad</p></div>
  <p class="arch-arrow"><span aria-hidden="true">↓</span>Adaptado a cada banco y mercado</p>
  <div class="arch-layer"><p class="arch-title">Tema</p>
  <div class="arch-cols">
    <div><strong>Marca</strong><ul><li>Color</li><li>Tipografía</li><li>Forma</li><li>Estilo de iconos</li></ul></div>
    <div><strong>Mercado</strong><ul><li>Idioma</li><li>Preparado para derecha a izquierda</li><li>Contenido legal</li></ul></div>
  </div></div>
  <p class="arch-arrow"><span aria-hidden="true">↓</span>Ampliado por segmento bancario</p>
  <div class="arch-layer"><p class="arch-title">Extensiones</p><p class="arch-sub">Minorista · Corporativa · Banca privada · Gestión patrimonial</p>
  <div class="arch-cols">
    <div><strong>KYC</strong><ul><li>Alta y verificación de identidad</li></ul></div>
    <div><strong>Aprobaciones</strong><ul><li>Firma en varios pasos</li></ul></div>
    <div><strong>Vistas de cartera</strong><ul><li>Datos financieros densos</li></ul></div>
  </div></div>
  <figcaption>El núcleo se gestiona de forma central, los temas se configuran por cliente y las extensiones las aportan los equipos de producto y se revisan.</figcaption>
</figure>

El **núcleo** reúne fundamentos, componentes base y reglas de accesibilidad, y se gestiona de forma central. La capa de **tema** lleva la marca de cada banco y las reglas de cada mercado, como el idioma, la preparación para escritura de derecha a izquierda en Oriente Medio y el contenido legal. Las **extensiones** añaden patrones por segmento, como KYC, aprobaciones y vistas de cartera, que aportan los equipos de producto y se revisan antes de entrar en el sistema.

## El sistema en detalle

Las decisiones anteriores solo se sostienen si la ejecución está a la altura. Esto es lo que diseño y desarrollo usaban cada día.

### Fundamentos

El color y la tipografía se construyeron desde el principio para muchas marcas. Cinco paletas (dos colores de marca, primario, secundario y terciario) tienen nueve tonos cada una, cuatro más claros y cuatro más oscuros que la base, además de pasos transparentes del 8% al 48% para capas, hover y selección. Un banco cambia los valores base en su tema y todos los tonos y estados le siguen.

La tipografía usa una escala con nombre de XXXBig a XXXSmall más mayúsculas, revisada en tres contextos: negro sobre claro, blanco sobre oscuro y deshabilitado. Usar nombres en lugar de píxeles permitía que un tema cambiara la tipografía sin renombrar nada en el código.

![Página de color con las paletas de marca, primaria, secundaria y terciaria en nueve tonos y pasos transparentes](/projects/crealogix/color-ui.webp "Color: cinco paletas de nueve tonos con pasos transparentes para capas y estados.")

![Página de tipografía con la escala de tamaños en negro, blanco y deshabilitado](/projects/crealogix/typography.webp "Tipografía: una escala con nombre, revisada en negro, blanco y deshabilitado.")

### Componentes documentados como decisiones

Cada componente tenía dos páginas: una **definición** y un **patrón de interacción**. El botón muestra el nivel de detalle.

La definición incluye estado y versión, tres tipos (sólido, contorno y plano), las cuatro propiedades de estilo (tipografía, contorno, forma y sombra), cinco estados (por defecto, hover, activo, foco y deshabilitado), tamaños por dispositivo (48 px en móvil, 48 y 32 px en tablet, 48, 32 y 24 px en escritorio) y todas las variantes semánticas.

El patrón de interacción explica cómo usarlo, con lo que sí y lo que no:

- **Un solo botón primario por página**, y siempre marca el camino principal.
- **Una etiqueta descriptiva** como “Transferir” o “Enviar”, y “Siguiente” solo para pasos genéricos.
- **Una posición fija:** abajo en móvil y a la derecha en escritorio.
- **Deshabilitado hasta completar los campos obligatorios**, con el campo que falta resaltado, en lugar de un error después de pulsar.
- **Siempre una salida:** “Cancelar” en formularios independientes y en el primer paso de un proceso, “Atrás” en los siguientes.

<div class="compare compare--wide">
  <figure>
    <img src="/projects/crealogix/button-definition.webp" alt="Página de definición del botón con tipos, estructura, estados, tamaños y variantes" />
    <p class="compare-note">Definición: tipos, estructura, estados, tamaños por dispositivo y variantes.</p>
  </figure>
  <figure>
    <img src="/projects/crealogix/button-pattern.webp" alt="Página del patrón de interacción del botón con pautas y lo que sí y lo que no" />
    <p class="compare-note">Patrón de interacción: reglas de uso, lo que sí y lo que no, y comportamiento en formularios.</p>
  </figure>
</div>

### De Figma a CSS y Angular

El sistema se diseñó para construirse. Cada decisión en Figma tenía su equivalente directo en CSS y en la librería de componentes de Angular. Trabajé con ingeniería en cómo se implementaba cada una y revisaba la paridad entre ambos.

| En Figma | En CSS | En Angular |
| --- | --- | --- |
| Estilos de color, tipografía y espaciado | Tokens semánticos como CSS custom properties | Un archivo de tema común que importa cada app |
| El tema de un banco | Un conjunto de tokens sobrescritos en una clase de tema | El tema del cliente aplicado al arrancar la app |
| Variantes: tipo y tamaño | Clases modificadoras que solo leen tokens | Inputs del componente con los mismos nombres |
| Estados: hover, foco, deshabilitado | `:hover`, `:focus-visible`, `[disabled]` | Estado deshabilitado ligado a la validez del formulario |
| Diseños de derecha a izquierda | Propiedades lógicas como `padding-inline` | Atributo `dir` según el idioma |

Tres reglas sostenían esa correspondencia:

- **Los componentes nunca fijan un valor.** Solo leen tokens, así un tema puede cambiar toda la imagen de un banco sin tocar el código del componente.
- **Los nombres viajan sin cambios.** Una variante “outline” en Figma es `type="outline"` en Angular y `cx-button--outline` en CSS, así diseño y desarrollo hablan de lo mismo.
- **El comportamiento es parte del componente.** Los estilos de foco, la lógica de deshabilitado y los tamaños mínimos viven en el propio componente, así cada banco hereda la accesibilidad en lugar de rehacerla.

Un ejemplo simplificado del botón muestra cómo se encuentran las capas:

<p class="code-label">Tokens, tema y componente en CSS</p>

```css
/* Core: semantic tokens, shared by every bank */
:root {
  --cx-color-primary: #1f6fe5;
  --cx-color-focus: #7aa7ff;
  --cx-radius-control: 4px;
  --cx-space-md: 16px;
}

/* Theme: a bank overrides tokens, never components */
.theme-bank-a {
  --cx-color-primary: #0b3d91;
  --cx-radius-control: 0;
}

/* Component: styled only through tokens */
.cx-button {
  min-block-size: var(--cx-button-height, 48px);
  padding-inline: var(--cx-space-md);
  border-radius: var(--cx-radius-control);
  background: var(--cx-color-primary);
}
.cx-button--medium { --cx-button-height: 32px; }
.cx-button--small { --cx-button-height: 24px; }
.cx-button:focus-visible {
  outline: 2px solid var(--cx-color-focus);
  outline-offset: 2px;
}
```

<p class="code-label">Las mismas variantes como inputs de Angular</p>

```ts
@Component({
  selector: 'cx-button',
  template: `
    <button [class]="classes" [disabled]="disabled">
      <ng-content></ng-content>
    </button>`,
})
export class CxButtonComponent {
  @Input() type: 'solid' | 'outline' | 'flat' = 'solid';
  @Input() size: 'big' | 'medium' | 'small' = 'big';
  @Input() disabled = false;

  get classes(): string {
    return `cx-button cx-button--${this.type} cx-button--${this.size}`;
  }
}
```

<p class="code-label">La regla de interacción en un formulario real</p>

```html
<!-- The primary action stays disabled until the form is valid -->
<cx-button type="solid" [disabled]="transferForm.invalid">Transfer</cx-button>
```

Los ejemplos están simplificados para este caso de estudio, pero la estructura es la que seguía el sistema: tokens en el núcleo, temas como sobrescrituras y componentes cuya API refleja Figma.

## La documentación como motor de adopción

La documentación tenía dos áreas. **Fundamentos del sistema** cubría principios, versiones, reglas de temas, el flujo de contribución y el onboarding para diseño y desarrollo. **Componentes** cubría uso, variantes, estados, lo que sí y lo que no, accesibilidad, una demo viva en Storybook, notas de implementación e historial de versiones.

Usé IA para primeros borradores de páginas de componentes, revisión de nombres, resúmenes de notas de versión y detección de huecos (comparando las propiedades de Figma con la plantilla de documentación), siempre revisados antes de publicar.

<div class="video">
  <iframe src="https://www.youtube.com/embed/FUA0fpCOTEc" title="Crealogix Design Hub" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>
  <p class="video-caption">El Crealogix Design Hub en uso. <a href="https://youtu.be/FUA0fpCOTEc" target="_blank" rel="noopener">Ver en YouTube</a></p>
</div>

## Liderar el equipo

Tuve diseñadores a mi cargo de forma directa en varios programas internacionales: marcar prioridades, mentoría, feedback, apoyo a su desarrollo y mantener el nivel de calidad del diseño. El design system también era una herramienta de equipo. Daba a todos los mismos estándares para revisar, así el feedback trataba de decisiones y no de gustos personales.

## Despliegue y gobernanza

El despliegue fue iterativo y social, no impuesto: talleres y sesiones de onboarding en cada oficina, un ritmo fijo de triaje y versiones, y feedback de los equipos que usaban el sistema en proyectos reales. La adopción se seguía con las analíticas de la librería de Figma, mediciones del tiempo de traspaso y encuestas de satisfacción.

## Impacto en el negocio

- **Un solo sistema para más de 5 entidades financieras** de Suiza, Europa y Oriente Medio, cada una con su marca sobre el mismo núcleo.
- **Alrededor de un 75% más de adopción y eficiencia** al pasar los equipos de copias locales al sistema común.
- **Un 50% más de eficiencia de implementación**, gracias a patrones reutilizables y nombres de tokens compartidos entre diseño y código.
- **Un 35% más de satisfacción del cliente**, con recorridos más coherentes entre productos y marcas.
- **Un banco nuevo era un tema nuevo, no una bifurcación nueva.** Así es como escala un negocio de plataforma.

## Qué cambió en la organización

- **Un solo vocabulario entre oficinas.** Diseño y desarrollo en distintos países usaban los mismos nombres para lo mismo.
- **Contribuir en lugar de copiar.** Los equipos de producto ampliaban el sistema con un flujo revisado en lugar de bifurcarlo.
- **Estándares de UX compartidos.** Las revisiones de todos los programas se hacían con los mismos principios y patrones.

## Qué aprendí

- Los sistemas multimarca funcionan cuando la personalización se hace con tokens. Personalizar con componentes siempre acaba en copias.
- Empezar por lo intangible. Los principios y la identidad ahorran más tiempo que cualquier componente.
- La gobernanza tiene que ser ligera pero explícita, o los equipos vuelven a sus copias locales.
- La documentación es la gran palanca de adopción. En cuanto se queda desactualizada, la confianza se desploma.

**La próxima vez** invertiría antes en paridad automática entre Figma y código (linting y sincronización de tokens) y en patrones para banca patrimonial y corporativa.
