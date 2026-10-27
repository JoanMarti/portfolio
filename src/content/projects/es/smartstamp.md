---
title: Smartstamp
headline: Rediseñar una app de autenticación de arte, de un sitemap a medias a un producto en el que es fácil orientarse
summary: "Me hice cargo de la app de iOS y Android de Smartstamp con una arquitectura de la información sin terminar, redefiní su estructura y sus flujos, y rediseñé la experiencia en torno a cuatro acciones: registrar, verificar, transferir y certificar."
client: Smartstamp
sector: Arte y autenticación
year: "2025"            # TODO: confirm start and end dates
role: Product Designer  # TODO: confirm exact title
team: "TODO"
duration: "TODO"
tools: [Figma, User flows, Arquitectura de la información, Librería de UI, Especificaciones de diseño, TestFlight]
coverImage:
  src: /projects/smartstamp/cover.webp
  alt: Seis pantallas de la app de Smartstamp editando la ficha de una obra, con selectores de tamaño, peso y precio, selección de técnica y confirmaciones en cada campo.
featured: true
order: 2
tldr:
  - Smartstamp crea una huella digital única de cada obra de arte con IA y visión por ordenador. Cuando llegué, la estructura de la app era un sitemap a medias, con una home, seis ramas, las acciones clave escondidas varios niveles por debajo y muchas zonas marcadas como «work in progress».
  - Redefiní la arquitectura de la información y todos los flujos principales, y rediseñé la app dos veces. La primera versión llegó a TestFlight. La segunda se basa en una home más ligera y en un centro de acciones que puede crecer con funciones premium.
  - Transferir una obra pasó de estar cinco niveles por debajo a un toque desde la barra de navegación. Todos los flujos quedaron definidos de principio a fin, y desarrollo recibió cada cambio como una especificación breve y fácil de probar.
metrics:
  - value: "5 → 1"
    label: niveles hasta Transferir obra
    method: Sitemap recibido (Inicio › Spaces › Space › Lista de obras › Obra › Transferir) comparado con la pestaña Actions de la nueva navegación
  - value: "7"
    label: funciones clave en un único centro de acciones
    method: Registrar, Verificar, Transferir, Retomar borradores, Certificado, Etiqueta de exposición y Lista de precios
  - value: "4"
    label: tipos de usuario en una sola app
    method: Artista registrado, coleccionista, empresa y visitante
links: []
---

## Contexto

Los certificados de autenticidad suelen ser una firma en un papel o una etiqueta en la parte de atrás de un lienzo. Las dos cosas son fáciles de copiar. Smartstamp, una empresa suiza, ha desarrollado una tecnología patentada que usa IA y visión por ordenador para crear una huella única de la propia obra, registrada con un sello de tiempo en blockchain. Después, cualquiera puede comprobar una pieza con el móvil.

La tecnología funcionaba. La app que la rodeaba, todavía no. Tenía que permitir a cuatro tipos de usuarios (**artistas registrados, coleccionistas, empresas y visitantes**) registrar una obra fotografiándola bien, verificar cualquier obra, transferir la propiedad cuando se vende y gestionar una colección.

## Lo que recibí

Heredé un sitemap que describía el producto como una home con seis ramas: perfil, notificaciones, búsqueda, spaces, registrar y verificar.

![La arquitectura de la información que recibí: un sitemap con colores, una home con seis ramas, mucha profundidad bajo Spaces y muchas notas marcadas como work in progress.](/projects/smartstamp/ia-received.webp "El sitemap que recibí. Cada color es una rama de la home, y las notas naranjas dicen «work in progress».")

Era un buen punto de partida, pero tenía tres problemas de estructura:

- **Las acciones clave estaban escondidas.** Transferir una obra, una de las tres acciones principales del producto, estaba cinco niveles por debajo: Inicio › Spaces › Space › Lista de obras › Obra › Transferir.
- **La estructura seguía al sistema, no a las personas.** Las ramas reflejaban objetos del backend como espacios, archivos y documentos, y no lo que la gente viene a hacer.
- **Había zonas enteras sin definir.** La búsqueda, las notificaciones, las transferencias, el soporte y varias páginas del perfil estaban marcadas como «work in progress» o directamente sin definir.

## Redefinir la arquitectura de la información

Reconstruí la estructura en torno a las tareas que la gente viene a hacer. El resultado es una navegación con cuatro pestañas en la que todas las acciones principales están a mano desde la primera pantalla.

<div class="ia">
  <section>
    <h3>Antes</h3>
    <p class="ia-sub">Una home y seis ramas, organizadas por objetos del sistema</p>
    <ul>
      <li><span class="node">Home</span>
        <ul>
          <li>Perfil de usuario
            <ul><li>Mejorar cuenta, Invitar a un amigo, Sobre nosotros, Atención al cliente, Ajustes, Datos personales, Cerrar sesión</li></ul>
          </li>
          <li>Notificaciones <span class="wip">(definidas a medias)</span></li>
          <li>Barra de búsqueda <span class="wip">(sin definir)</span></li>
          <li>Spaces
            <ul>
              <li>Un space
                <ul>
                  <li>Lista de obras
                    <ul>
                      <li>Detalle de la obra</li>
                      <li>Smart archive › certificados y documentos</li>
                      <li><span class="deep">Transferir obra</span> <span class="wip">(en desarrollo)</span></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Registrar obra nueva</li>
          <li>Verificar</li>
        </ul>
      </li>
    </ul>
  </section>
  <section>
    <h3>Después</h3>
    <p class="ia-sub">Cuatro pestañas, organizadas por lo que la gente viene a hacer</p>
    <ul>
      <li><span class="node">Home</span>
        <ul><li>Spaces, últimos registros de obras, mis últimos registros, últimas verificaciones, transferencias recientes y un botón para registrar obra</li></ul>
      </li>
      <li><span class="node">Actions</span>
        <ul>
          <li>Registrar obra</li>
          <li>Verificar obra</li>
          <li><span class="key">Transferir obra</span></li>
          <li>Retomar borradores</li>
          <li>Generar certificado <span class="premium">Premium</span></li>
          <li>Etiqueta de exposición <span class="premium">Premium</span></li>
          <li>Lista de precios <span class="premium">Premium</span></li>
        </ul>
      </li>
      <li><span class="node">Verify</span>
        <ul><li>Escanear el código QR o introducir el ID de Smartstamp</li></ul>
      </li>
      <li><span class="node">Profile</span>
        <ul><li>Datos personales, seguridad, preferencias (idioma, moneda y unidades), plan y pagos, soporte, invitar a un amigo</li></ul>
      </li>
    </ul>
  </section>
</div>

Tres principios guiaron la nueva estructura:

- **Primero las acciones, después los objetos.** Registrar, verificar y transferir son lo que la gente viene a hacer, así que están en el primer nivel. Los spaces y los registros las acompañan desde la home.
- **Un lugar que puede crecer.** El centro de acciones da a cada función la misma tarjeta y el mismo patrón paso a paso. Las nuevas funciones premium, como certificados, etiquetas de exposición y listas de precios, encajan sin cambiar la navegación.
- **Atajos fuera de la app.** Registrar, verificar y transferir también están disponibles como acciones rápidas desde la pantalla de inicio del iPhone y el iPad.

## De los huecos a flujos definidos

Con la estructura decidida, dibujé todos los flujos de principio a fin. La primera versión enseñaba a propósito lo que faltaba: las zonas sin definir en azul y las preguntas para marketing en rosa.

![Primera versión del user flow de Smartstamp. Los bloques azules marcan partes del producto aún sin definir, y un bloque rosa marca contenido del onboarding que había que aclarar con marketing.](/projects/smartstamp/userflow-v1.webp "Flow v1.0: zonas sin definir en azul y preguntas abiertas con marketing en rosa, para que todo el mundo viera los huecos.")

Ese mapa se convirtió en el orden del día para decidir con los fundadores, marketing y desarrollo. En la versión 1.2 cada rama tenía una respuesta.

![Versión 1.2 del user flow con onboarding para coleccionistas, todas las ramas definidas y secuencias de huella con tres, seis, siete y nueve capturas.](/projects/smartstamp/userflow-v2.webp "Flow v1.2: onboarding pensado para coleccionistas, tipos de usuario y pagos definidos, y elección de 3, 6, 7 o 9 capturas de huella.")

Los cambios principales entre las dos versiones:

- **Onboarding pensado para coleccionistas**, con cuatro mensajes sobre proteger la colección, dejar constancia de cada cambio de manos y conservar la procedencia.
- **Tipos de usuario definidos** (Art Intro, Art Lover, Art Pro y Enterprise), con elección de plan y pago con Apple Pay o Google Pay.
- **Un registro explícito:** foto general, foto de detalle y después la elección de cuántas huellas capturar (tres por defecto, o seis, siete o nueve), un resumen de solo lectura y un paso de carga que avisa de que los datos se están cifrando.
- **Salidas diseñadas.** Si alguien abandona el registro a medias, vuelve al panel con un aviso de que el proceso está incompleto y puede retomar el borrador más tarde.

## Rediseñar la interfaz

### Versión 1

La primera interfaz era oscura, con el naranja de la marca en la cabecera y una home organizada como una cuadrícula de spaces. Llegó a TestFlight en septiembre de 2025.

<div class="compare">
  <figure>
    <span class="tag">Versión 1, diseño</span>
    <img src="/projects/smartstamp/home-v1-dark.webp" alt="Home de la versión 1 en tema oscuro: cabecera naranja con saludo y búsqueda, un selector entre Spaces y obras transferidas, y una cuadrícula de ocho spaces." />
    <p class="compare-note">La home como cuadrícula de spaces. Las transferencias quedan detrás de un selector.</p>
  </figure>
  <figure>
    <span class="tag">Versión 1 en TestFlight</span>
    <img src="/projects/smartstamp/home-v1-build.webp" alt="Captura de la primera build en TestFlight en septiembre de 2025: logo de Smartstamp, selector entre Spaces y obras transferidas, un space de prueba y un botón para registrar obra." />
    <p class="compare-note">La primera build en TestFlight. Al probarla se vio lo vacía que se sentía la home para un usuario nuevo.</p>
  </figure>
  <figure>
    <span class="tag tag--new">Versión 2, rediseño</span>
    <img src="/projects/smartstamp/home-v2.webp" alt="Home de la versión 2 en tema claro: saludo, un banner premium y secciones horizontales de spaces, últimos registros de obras, registros con QR, verificaciones y transferencias, con un botón para registrar obra." />
    <p class="compare-note">Una home clara hecha de secciones para spaces, registros, verificaciones y transferencias, cada una a un toque de su lista completa.</p>
  </figure>
</div>

### Versión 2

La versión 2 mantuvo la estructura y cambió cómo se siente y cómo crece:

- **Una home que muestra actividad.** En lugar de una cuadrícula de carpetas, la home enseña lo que está pasando en la colección (últimos registros, verificaciones y transferencias), con un botón fijo para registrar obra.
- **Un lenguaje visual más ligero.** Un tema claro con neutros más cálidos deja que el color lo pongan las obras. Los iconos, las etiquetas y los espacios de la barra de navegación se simplificaron para que compita menos con el contenido.
- **El centro de acciones.** Todas las funciones principales están en una sola lista, cada una con una descripción breve, un contador de uso (por ejemplo, dos transferencias pendientes o cinco certificados) y una etiqueta premium cuando corresponde. Después, cada función sigue la misma estructura: primero se explican los pasos y abajo hay un único botón principal.

![La especificación de la página Actions junto a ocho pantallas: el centro de acciones y los flujos de Registrar, Verificar, Transferir, Retomar borradores, Generar certificado, Etiqueta de exposición y Lista de precios.](/projects/smartstamp/actions-hub.webp "El centro de acciones y los siete flujos que abre. Todos siguen la misma estructura: primero los pasos y abajo una única acción principal.")

![Especificación del rediseño visual de la barra de navegación inferior, con las pantallas Home, Verify y Profile usando la nueva barra.](/projects/smartstamp/nav-redesign.webp "Rediseño de la barra de navegación: iconos más ligeros, etiquetas más claras y más espacio para el contenido.")

![Icono de la app de Smartstamp en la pantalla de inicio de un iPad con acciones rápidas para registrar, verificar y transferir una obra.](/projects/smartstamp/ipad-quick-actions.webp "Acciones rápidas en el iPad. Las tres acciones principales están disponibles antes incluso de abrir la app.")

## Diseñar los detalles

Los datos de una obra cambian a menudo (precios, números de inventario, series), así que cada campo de la ficha se edita en su sitio y se confirma por separado. El tamaño, el peso y el precio usan selectores con unidades (centímetros o pulgadas, kilos o libras, CHF, EUR o USD), para que los coleccionistas de cualquier país introduzcan los datos a su manera y las fichas sigan siendo coherentes.

![Doce estados de la ficha de una obra: edición en el propio campo, marcas de confirmación, selectores de unidades para tamaño y peso, selector de moneda para el precio y selección múltiple para la técnica.](/projects/smartstamp/artwork-edit-states.webp "Estados de la ficha de una obra. Cada campo se edita en su sitio y se confirma por separado.")

## Un sistema detrás de las pantallas

Organicé el trabajo para que pudiera crecer con el producto: un archivo de Figma por funcionalidad (Home, Registrar, Verificar, Transferir, Space, Búsqueda, Perfil, Registro de eventos, Archivo, emails y promociones dentro de la app), todos construidos sobre una librería de UI común con componentes documentados.

![El espacio de trabajo de Smartstamp en Figma: más de 20 archivos, uno por funcionalidad, entre ellos UI Library, Foundations CSS, User flow y Proto-Persona.](/projects/smartstamp/figma-files.webp "Un archivo por funcionalidad, todos sobre la misma librería de UI y los mismos fundamentos.")

<div class="compare">
  <figure>
    <img src="/projects/smartstamp/ui-buttons.webp" alt="Estados del componente botón para botones primarios, secundarios y terciarios en reposo, hover y pulsado, además de iconos de acciones rápidas, una fila de spaces y dos tarjetas de verificación." />
    <p class="compare-note">Los estados del botón y los componentes que se construyen a partir de ellos.</p>
  </figure>
  <figure>
    <img src="/projects/smartstamp/ui-button-docs.webp" alt="Página de documentación del componente botón: comportamiento, variantes, acciones de cabecera, reglas de interacción y usabilidad, jerarquía visual y notas de comportamiento." />
    <p class="compare-note">Cada componente está documentado con su comportamiento, sus variantes, sus reglas de accesibilidad (áreas táctiles de 44 a 48 px) y su uso.</p>
  </figure>
</div>

## Trabajar con desarrollo después del lanzamiento

Cuando la app ya estaba en pruebas, entregué las mejoras como especificaciones breves que desarrollo podía incluir en la siguiente versión. Todas tenían los mismos campos: el problema, a qué usuarios y plataformas afecta, el punto de entrada, qué lo activa y el resultado esperado.

![Una especificación de diseño para reducir la altura de la barra de navegación de 83 a 56 píxeles, junto a la home actualizada de Smartstamp.](/projects/smartstamp/spec-bottom-nav.webp "Ejemplo de especificación: reducir la barra de navegación de 83 px a 56 px, en línea con Material Design y las guías de Apple.")

Un ejemplo: la barra de navegación ocupaba 83 píxeles de alto y apretaba las vistas previas de las obras en los móviles pequeños. Al reducirla a 56 píxeles, cada pantalla recuperó unos 27 píxeles para el contenido y el botón de registrar obra quedó más cerca del pulgar.

## Qué aprendí

- Cuando heredas un producto, lo primero que hay que entregar es una imagen compartida de lo que falta. Hacer visibles los huecos acelera más las decisiones que unas pantallas pulidas.
- La navegación tiene que organizarse según lo que la gente viene a hacer, no según los objetos de la base de datos. Además, así el producto es más fácil de ampliar.
- Una primera build en manos reales, aunque sea en TestFlight, es la forma más rápida de ver en qué se equivocó el diseño. La versión 2 nació de usar la versión 1.
