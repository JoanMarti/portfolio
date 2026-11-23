---
title: "Design system SUI"
headline: "Un design system para cuatro marketplaces"
summary: "De un UI kit en Sketch a SUI, el design system en React que comparten Coches.net, Fotocasa, Milanuncios y Habitaclia, con un tema por marca y de código abierto."
client: "Adevinta Spain (Coches.net, Fotocasa, Milanuncios, Habitaclia)"
sector: "Marketplaces online"
year: "2017 a 2019"
role: "Senior UX/UI Designer, Growth and Retention"
team: "Diseñadores y la comunidad frontend de los marketplaces"
duration: "2 años"
tools: [Sketch, Abstract, React, SUI Components]
cover: layers
featured: true
order: 2.8
tldr:
  - "Coches.net estaba migrando su web y sus apps de iOS y Android a una nueva tecnología, y diseño trabajaba con un UI kit en Sketch sin control de versiones. Diseño y desarrollo se iban separando, y cada marketplace resolvía los mismos problemas por su cuenta."
  - "Además de mi trabajo en growth y retención, fui uno de los responsables del design system en la vertical de motor: lo inicié en Sketch con Abstract para versionarlo y lo fui perfeccionando paso a paso hasta que los componentes fueron componentes React completamente personalizados en SUI, con un tema por marca."
  - "Un solo sistema compartido sirvió a Coches.net, Fotocasa, Milanuncios y Habitaclia. Entre 2017 y 2019 la librería pública pasó de unos 24 componentes sueltos a unos 42 organizados en átomos y moléculas, cada marca con su propio tema."
metrics:
  - value: "4"
    label: "marketplaces en un solo sistema"
    method: "Temas de marca en el repositorio público de SUI"
  - value: "24 → 42"
    label: "componentes, ahora con estructura atómica"
    method: "Historial del repositorio público, de mayo de 2017 a mayo de 2019"
  - value: "3"
    label: "plataformas en la transformación"
    method: "Web, iOS y Android"
links:
  - label: "SUI Components en GitHub"
    href: https://github.com/SUI-Components/sui-components
  - label: "SUI Studio, el catálogo de componentes en vivo"
    href: https://sui-components.vercel.app/
---
## El problema

Coches.net estaba en plena transformación tecnológica de su web y sus apps de iOS y Android. Diseño seguía trabajando con un UI kit en Sketch, y Sketch no tenía entonces un control de versiones real: los archivos se copiaban, se renombraban y se sobrescribían, nadie sabía cuál era la última versión, y lo que desarrollo construía se alejaba de lo que diseño había dibujado.

En los marketplaces españoles de Adevinta pasaba lo mismo. Coches.net, Fotocasa, Milanuncios y Habitaclia tenían marcas distintas pero necesidades muy parecidas: anuncios, búsqueda, filtros, formularios, alertas. Cada uno las resolvía por su cuenta.

> ¿Cómo comparten cuatro marcas un sistema sin parecer todas iguales?

## Mi papel

Era Senior UX/UI Designer en el equipo de Growth and Retention. Además de ese trabajo de producto, participé en la transformación tecnológica de la web, iOS y Android y fui uno de los responsables del design system en la vertical de motor (Coches.net). Para cada componente eso suponía tres comprobaciones:

- **Definición:** ¿resuelve la necesidad real, con los estados y el comportamiento adecuados?
- **Implementación:** ¿es viable tal como está especificado, y lo construido coincide con el diseño?
- **Librería y plataformas:** ¿está bien integrado en la librería compartida, y funciona al aplicarse en web, iOS y Android?

Validaba, gestionaba y testeaba los componentes con esas comprobaciones antes de que llegaran a los productos.

## De un UI kit a un sistema en tres pasos

No lo sustituí todo de golpe. Cada paso resolvía el problema más doloroso del anterior.

<ol class="phases"><li><strong>Sketch + Abstract</strong><span>Una librería compartida con versiones, ramas y revisiones, en lugar de copias de archivos</span></li><li><strong>Fundamentos compartidos</strong><span>Color, tipografía y espaciado como variables, componentes agrupados en átomos y moléculas</span></li><li><strong>Componentes React</strong><span>Componentes completamente personalizados en SUI, las mismas piezas que usaba diseño, con un tema por marca</span></li></ol>

<p class="phases-note">De archivos a un sistema vivo, paso a paso.</p>

- **Primero, control de versiones.** Abstract dio a diseño lo que git daba a ingeniería: una única fuente de verdad, ramas para explorar sin romper la librería y el historial de cada cambio. Era la condición para todo lo demás.
- **Después, un lenguaje común.** Los componentes se organizaron en átomos y moléculas, y sus estilos pasaron a variables de tema compartidas. Diseño y código empezaron a llamar igual a las mismas cosas.
- **Por último, el código como fuente de verdad.** Los componentes pasaron a ser componentes React completamente personalizados en SUI, así un cambio hecho una vez llegaba a todos los productos que los usaban.

## Un sistema, muchas marcas

La decisión clave fue separar lo compartido de lo que es marca. El comportamiento, la estructura y la accesibilidad viven en los componentes comunes; el color, la tipografía y otros valores de marca, en un tema por marketplace.

| Capa | Qué contiene | Quién la comparte |
| --- | --- | --- |
| Componentes | Átomos y moléculas: botones, campos, selects, tarjetas, alertas y más, con su comportamiento | Todos los marketplaces |
| Tema común | Las variables que lee cada componente: roles de color, escala tipográfica, espaciado, radios, elevación | Todos los marketplaces |
| Tema de marca | Los valores de cada marca para esas variables | Uno por marketplace: Coches.net, Fotocasa, Milanuncios, Habitaclia |

Así Coches.net seguía pareciendo Coches.net y Fotocasa, Fotocasa, pero una corrección o mejora en un componente llegaba a todos a la vez.

## Abierto por defecto

SUI es de código abierto. El código, el historial y los temas de marca son públicos en GitHub, y SUI Studio muestra el catálogo en vivo. Esa apertura formaba parte del modelo: las propuestas y los errores se discutían en abierto, y cada paquete tenía su propia versión, así un equipo podía actualizar un componente sin esperar a un release global.

El código es obra de la comunidad frontend de Adevinta Spain. Mi parte estaba en el lado del diseño para la vertical de motor: iniciar el sistema en Sketch, versionarlo, validar y testear cada componente en definición, implementación y uso en todas las plataformas, y mantener diseño y código alineados mientras pasaba a React.

## Qué aprendí

- **El control de versiones también es un problema de diseño.** Hasta que diseño tuvo historial y ramas, cualquier otra mejora era frágil.
- **Separar marca y comportamiento pronto.** Los temas permiten que varias marcas compartan un sistema sin renunciar a su identidad.
- **Avanzar paso a paso.** Cada paso facilitaba el trabajo del equipo desde el primer día, y eso es lo que mantenía a la gente usando el sistema mientras todavía se construía.
