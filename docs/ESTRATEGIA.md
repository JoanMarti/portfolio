# Portfolio de Joan Martí Díez — Diagnóstico y estrategia

*Borrador v1 · 26 octubre 2026*

Este documento acompaña al repositorio. Explica qué falla en el portfolio actual (campecha.com, en UXfolio), cuál es el nuevo posicionamiento, cómo está estructurado el sitio nuevo, qué imágenes hay que rehacer y qué tienes que revisar tú antes de publicarlo.

---

## 1. Diagnóstico del portfolio actual

El contenido de fondo es bueno: seis casos con contexto, rol, proceso y métricas, algo que muchos portfolios senior no tienen. El problema no es la falta de material, es **cómo se presenta y algunos errores que restan credibilidad**. Un recruiter o hiring manager dedica entre 30 y 90 segundos a la primera pasada; el sitio actual no supera ese filtro.

### Errores que hay que corregir ya (también en campecha.com si sigue online)

| # | Problema | Dónde | Por qué importa |
|---|----------|-------|-----------------|
| 1 | Coches.net "provides a large volume of **medical and scientific content**" | Caso Coches.net, contexto | Texto copiado de otro caso. Un lector atento deja de confiar en todo lo demás. |
| 2 | Sesión de 50 s → 1 min 30 s presentada como **+50 %** | Caso Coches.net, resultados | Es un +80 %. Además en la cabecera aparece como "Retention +50 %", cuando es tiempo de sesión. |
| 3 | "Product Hypothesis" aparece dos veces | Caso Coches.net | Señal de texto sin revisar. |
| 4 | Todas las páginas de caso tienen el título `Case study title` | `<title>` de cada caso | Se ve en la pestaña del navegador, en Google y al compartir en LinkedIn/Slack. |
| 5 | El footer enlaza a `linkedin.com/in/campecha`, pero tu perfil es `linkedin.com/in/joan-marti-productdesigner` | Footer y contacto | Si el enlace antiguo no redirige, pierdes el contacto más importante. |
| 6 | Meta description: "I'm a UX designer. I'm passionate about creating usable digital products…" | Home | Genérica; no menciona design systems, banca ni 16 años. Es lo que aparece en Google. |
| 7 | "Julius Bär" y "Julius Baer" mezclados; rol "Lead UX/UI Designer" y "Senior Product Designer" en el mismo caso | Caso Julius Baer | Inconsistencia de rol = duda sobre seniority. |
| 8 | Instamusic / Musiclist; "acting as Staff PM + Senior Product Designer" | Caso Instamusic | Confuso. Mejor: "Product Design Lead (also owned product management)". |
| 9 | El CV se abre como popup de un PDF en S3 | Menú "Resumé" | Bloqueado por muchos navegadores; mejor enlace directo y descarga. |
| 10 | Teléfono personal visible en la web | Contacto | Fuente de spam; con email + Calendly es suficiente. |

### Problemas estructurales

- **No hay hero ni propuesta de valor.** La home empieza con "Selected Case Studies". En 5 segundos no se sabe quién eres, en qué eres el mejor ni si estás disponible.
- **Los casos son largos y uniformes.** 2.000–3.000 palabras cada uno, todos con la misma plantilla. Un hiring manager necesita un resumen escaneable arriba (rol, equipo, duración, resultado) y poder profundizar si quiere.
- **Las métricas no tienen método.** "+80 % design fidelity" o "+40 % UX–Dev synchronisation" sin decir cómo se midió suenan inventadas, aunque no lo sean. Una línea de método las vuelve creíbles.
- **Mucha mención a IA "validada por humanos"** repetida en cada caso. Una vez, bien explicada, es una ventaja; seis veces parece relleno de tendencia.
- **Lo más actual no está en el portfolio**: AthleteOS (tu proyecto de IA con wearables en GitHub), tu auditoría de accesibilidad de apps bancarias suizas y el artículo "Designing Access to Information". Son exactamente las señales que buscan hoy los equipos: IA aplicada, accesibilidad, criterio propio.
- **Imágenes genéricas.** Mockups de dispositivo con alt text "Screen design displayed in a mockup". No enseñan cómo piensas, y un senior se contrata por cómo piensa.
- **Plataforma cerrada (UXfolio).** Sin control del SEO, títulos, rendimiento ni dominio de las URLs (`/p/d7bbdc24`).

---

## 2. Posicionamiento

**Antes:** "Senior UX/UI Designer" (genérico, compite con miles de perfiles).

**Ahora:** *Senior Product Designer especializado en design systems y producto para entornos regulados y complejos* (banca privada, SaaS bancario, trading de materias primas, automoción).

Frase principal del hero:

> I design systems and products for places where mistakes are expensive — private banking, trading platforms and cars.

Por qué funciona:
- Diferencia: no "hago UX", sino "trabajo donde el error cuesta caro". Explica a la vez banca, CTRM y HMI de coche.
- Encaja con el mercado suizo (banca, commodities en Zug, fintech) que es donde buscas.
- Deja los design systems como la habilidad nuclear, que es tu especialidad más demandada y mejor pagada.

Tres pilares que se repiten en todo el sitio:
1. **Design systems como producto** — Glencore, Crealogix.
2. **UX en entornos regulados y de confianza** — Julius Baer, auditoría de accesibilidad bancaria.
3. **Producto medible** — Coches.net (crecimiento), Instamusic (MVP), AthleteOS (IA).

---

## 3. Estructura del sitio nuevo

```
/                 Home: hero + disponibilidad, 3 casos destacados, resto de trabajo,
                  cómo trabajo, últimos artículos, contacto
/work/<slug>/     Caso de estudio (resumen escaneable + versión completa)
/about/           Bio, trayectoria, recomendaciones, idiomas, CV
/writing/         Todos los artículos (Medium, Substack, LinkedIn) con enlace a la fuente
```

### Orden de los proyectos (de más a menos relevante para el mercado actual)

1. **Glencore CTRM — Enterprise design system** (destacado) — tu caso más fuerte y más reciente.
2. **Crealogix — Multi-tenant banking design system** (destacado) — demuestra escala internacional.
3. **Julius Baer — Private banking onboarding** (destacado) — banca privada suiza + aprobación a nivel de board.
4. **Coches.net — Exploration hub** — el caso con mejores números de negocio.
5. **AthleteOS — AI coach for wearables** (nuevo, side project) — IA aplicada con código propio.
6. **Instamusic — Mood-based discovery MVP**.
7. **Audi A6 — Connected HMI** — valioso pero de 2015; va al final con el año visible.

### Plantilla de caso de estudio

Cada caso tiene ahora la misma estructura, pensada para leer en 60 segundos o en 8 minutos:

1. **Ficha**: rol, equipo, duración, sector, herramientas.
2. **TL;DR**: tres frases (problema, qué hice, resultado).
3. **Impacto**: 2–4 métricas con *cómo se midió*.
4. **El problema**: contexto y por qué importaba al negocio.
5. **Decisiones clave**: 3–4 decisiones con su trade-off (es lo que más valora un hiring manager senior).
6. **Proceso**: resumido, solo lo que cambió el resultado.
7. **Qué haría diferente**: honestidad = seniority.

---

## 4. Dirección de imágenes

Las portadas del borrador son **diagramas generados en SVG**, uno por proyecto, que muestran la idea central del caso (capas del sistema, flujo adaptativo, bucle de retención, árbol de navegación…). No son decoración: comunican cómo pensaste el problema antes de que alguien lea una línea. Funcionan con NDA porque no muestran pantallas reales.

Para el interior de cada caso, sustituye los mockups actuales por estas piezas (en orden de prioridad):

| Tipo de imagen | Qué enseña | Proyectos |
|---|---|---|
| Diagrama de arquitectura (capas, tokens → componentes → plantillas) | Pensamiento sistémico | Glencore, Crealogix |
| Antes / después de un componente o pantalla, con anotaciones | Calidad de decisión | Todos |
| Captura de Figma/Storybook (página de documentación de un componente) | Que el sistema existe de verdad | Glencore, Crealogix |
| Mapa de flujo con ramas | Lógica de producto | Julius Baer, Instamusic |
| Gráfico de la métrica (antes/después del A/B test) | Impacto real | Coches.net |
| Foto de sesión de test o workshop (sin caras o con permiso) | Proceso con usuarios | Audi, Instamusic, Julius Baer |
| Pantallas reales, desenfocando datos sensibles | Craft visual | Todos los que lo permita el NDA |

Reglas: formato 16:10 o 3:2, ancho mínimo 2400 px, WebP, fondo neutro (sin mockups de iPhone flotando), alt text que describa lo que se ve y por qué importa.

**Antes de publicar:** confirma con Glencore, Julius Baer (vía IBM iX) y Crealogix qué puedes enseñar. Si hay duda, usa diagramas y pantallas re-dibujadas con datos ficticios.

---

## 5. Lo que tienes que revisar o completar (TODO)

Están marcados en el código con `TODO` para encontrarlos fácilmente.

- [ ] **Fechas y empresas de la trayectoria** (`src/data/experience.ts`). He usado solo lo que aparece en tus casos y en Malt; LinkedIn oculta las fechas sin sesión iniciada.
- [ ] **Métricas**: añade el método de medición donde pone `TODO: method` (Glencore y Crealogix).
- [ ] **Coches.net**: confirma el año y si "+210 % unique users" se refiere a la sección nueva o a la plataforma.
- [ ] **Enlaces exactos de los artículos** de Medium y la URL de tu Substack (`src/content/writing/`).
- [ ] **CV en PDF** → `public/joan-marti-diez-cv.pdf`.
- [ ] **Foto** (opcional pero recomendable en el about) → `public/images/joan.jpg`.
- [ ] **Imágenes reales** de cada caso → `public/projects/<slug>/`.
- [ ] **Enlace de calendario** (Calendly/Cal.com) en `src/data/site.ts`.
- [ ] **NDA**: validar qué se puede mostrar de cada cliente.

---

## 6. Próximos pasos propuestos

1. Revisar este borrador y los textos de los casos (están en inglés, en `src/content/projects/`).
2. Crear el repositorio en GitHub y activar GitHub Pages (instrucciones en el README).
3. Apuntar campecha.com al nuevo sitio cuando esté listo.
4. Iterar caso por caso: empezar por Glencore (imágenes + métricas con método).
5. Ritmo de publicación: un artículo al mes, cada uno enlazado desde un caso relacionado (p. ej. "Tell me what kind of company you are…" desde Crealogix).
