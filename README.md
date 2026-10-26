# Joan Martí Díez — Portfolio

Portfolio de producto construido con [Astro](https://astro.build): estático, rápido, sin dependencias de UI y listo para publicar en GitHub Pages.

> El diagnóstico del portfolio anterior, el posicionamiento y la dirección de imágenes están en [`docs/ESTRATEGIA.md`](docs/ESTRATEGIA.md).

## Arrancar en local

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera /dist
```

Necesitas Node 20 o superior.

## Dónde está cada cosa

| Quiero cambiar… | Archivo |
|---|---|
| Nombre, email, disponibilidad, redes, idiomas, enlace de calendario | `src/data/site.ts` |
| Trayectoria, formación, recomendaciones | `src/data/experience.ts` |
| Artículos (Medium, Substack, LinkedIn) | `src/data/writing.ts` |
| Un caso de estudio | `src/content/projects/<slug>.md` |
| Colores, tipografía, espaciado | `src/styles/global.css` (variables en `:root`) |
| Portadas-diagrama de los casos | `src/components/ProjectCover.astro` |
| Ilustración del hero | `src/components/HeroLayers.astro` |
| CV en PDF | `public/joan-marti-diez-cv.pdf` |
| Imagen al compartir en LinkedIn/Slack | `public/og.png` (1200×630) |

## Añadir un caso de estudio nuevo

1. Copia cualquier archivo de `src/content/projects/` y renómbralo (el nombre del archivo es la URL: `mi-proyecto.md` → `/work/mi-proyecto/`).
2. Rellena la ficha del principio (front matter). Los campos obligatorios están definidos en `src/content.config.ts`; si falta alguno, `npm run build` te dirá cuál.
3. `tldr` son exactamente tres frases: problema, qué hiciste, resultado.
4. En `metrics`, añade siempre `method`: cómo se midió. Es lo que hace creíble un número.
5. `order` decide la posición; `featured: true` lo muestra en grande en la home (recomendado: máximo 3).
6. `draft: true` lo oculta mientras lo escribes.
7. Imágenes: guárdalas en `public/projects/<slug>/` y úsalas en el Markdown con `![Texto alternativo que explique qué se ve](/projects/<slug>/imagen.webp)`.

Cualquier valor que empiece por `TODO` no se muestra en la web, así puedes dejar huecos pendientes sin que se vean.

## Añadir un artículo

Añade una entrada al principio de `src/data/writing.ts` con título, extracto, fuente, URL y fecha. Si lo relacionas con un caso (`relatedProject`), aparecerá al final de ese caso de estudio.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub (por ejemplo `portfolio`) y sube este proyecto:
   ```bash
   git remote add origin https://github.com/JoanMarti/portfolio.git
   git push -u origin main
   ```
2. En el repositorio: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Cada `push` a `main` publica la web automáticamente (`.github/workflows/deploy.yml`).

**Con dominio propio (campecha.com):** añade el dominio en *Settings → Pages → Custom domain*, crea un archivo `public/CNAME` con `www.campecha.com` y apunta el DNS a GitHub Pages. No hace falta cambiar nada más.

**Sin dominio propio:** en *Settings → Secrets and variables → Actions → Variables* crea:
- `SITE_URL` = `https://joanmarti.github.io`
- `BASE_PATH` = `/portfolio/` (el nombre del repositorio)

## Pendiente

Ver la lista de TODO en `docs/ESTRATEGIA.md` §5, o busca `TODO` en el proyecto.
