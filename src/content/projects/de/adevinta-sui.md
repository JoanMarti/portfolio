---
title: "SUI Designsystem"
headline: "Ein Designsystem für vier Marktplätze"
summary: "Vom Sketch-UI-Kit zu SUI, dem gemeinsamen React-Designsystem hinter Coches.net, Fotocasa, Milanuncios und Habitaclia, pro Marke gethemt und Open Source."
client: "Adevinta Spain (Coches.net, Fotocasa, Milanuncios, Habitaclia)"
sector: "Online-Marktplätze"
year: "2017 bis 2019"
role: "Senior UX/UI Designer, Growth and Retention"
team: "Designer und die Frontend-Community der Marktplätze"
duration: "2 Jahre"
tools: [Sketch, Abstract, React, SUI Components]
cover: layers
featured: true
order: 2.8
tldr:
  - "Coches.net stellte Web, iOS und Android auf eine neue Technologie um, und das Design arbeitete mit einem UI-Kit in Sketch ohne Versionskontrolle. Design und Entwicklung drifteten auseinander, und jeder Marktplatz löste dieselben Probleme für sich."
  - "Neben meiner Arbeit in Growth und Retention war ich einer der Verantwortlichen für das Designsystem im Motor-Vertical: Mit Researchern und Designern aller Plattformen führten wir mehrere Systeme zu einem zusammen, aufgebaut auf einem umgekehrten Dreieck, das ich vorschlug, und entwickelten es von Sketch mit Abstract Schritt für Schritt weiter, bis die Komponenten vollständig angepasste React-Komponenten in SUI waren, mit einem Theme pro Marke."
  - "Ein gemeinsames System diente Coches.net, Fotocasa, Milanuncios und Habitaclia. Zwischen 2017 und 2019 wuchs die öffentliche Bibliothek von rund 24 losen Komponenten auf etwa 42, geordnet in Atome und Moleküle, jede Marke mit eigenem Theme."
metrics:
  - value: "4"
    label: "Marktplätze in einem System"
    method: "Marken-Themes im öffentlichen SUI-Repository"
  - value: "24 → 42"
    label: "Komponenten, jetzt in atomarer Struktur"
    method: "Öffentliche Repository-Historie, Mai 2017 bis Mai 2019"
  - value: "3"
    label: "Plattformen in der Transformation"
    method: "Web, iOS und Android"
links:
  - label: "SUI Components auf GitHub"
    href: https://github.com/SUI-Components/sui-components
  - label: "SUI Studio, der Live-Komponentenkatalog"
    href: https://sui-components.vercel.app/
---
## Das Problem

Coches.net steckte mitten in der technologischen Transformation von Web, iOS und Android. Das Design arbeitete noch mit einem UI-Kit in Sketch, und Sketch hatte damals keine echte Versionskontrolle: Dateien wurden kopiert, umbenannt und überschrieben, niemand wusste, welche Version die aktuelle war, und was die Entwicklung baute, entfernte sich von dem, was das Design gezeichnet hatte.

Bei den spanischen Marktplätzen von Adevinta war es genauso. Coches.net, Fotocasa, Milanuncios und Habitaclia hatten verschiedene Marken, aber sehr ähnliche Bedürfnisse: Inserate, Suche, Filter, Formulare, Alerts. Jeder löste sie für sich.

Dazu kam, dass jedes Plattformteam sein eigenes Designsystem begonnen hatte. Web, iOS und Android hatten jeweils gute Ideen, aber keines davon war die Referenz.

> Wie teilen sich vier Marken ein System, ohne gleich auszusehen?

## Meine Rolle

Ich war Senior UX/UI Designer im Team Growth and Retention. Neben dieser Produktarbeit war ich Teil der technologischen Transformation von Web, iOS und Android und einer der Verantwortlichen für das Designsystem im Motor-Vertical (Coches.net). Für jede Komponente hiess das drei Prüfungen:

- **Definition:** Löst sie den echten Bedarf, mit den richtigen Zuständen und dem richtigen Verhalten?
- **Umsetzung:** Ist sie wie spezifiziert machbar, und entspricht die gebaute Version dem Design?
- **Bibliothek und Plattformen:** Ist sie korrekt in der gemeinsamen Bibliothek, und funktioniert sie im Einsatz auf Web, iOS und Android?

Ich habe Komponenten gegen diese Prüfungen validiert, verwaltet und getestet, bevor sie in die Produkte kamen.

## Von mehreren Systemen zu einem

Ich war Teil eines Teams aus Researchern, Interaction Designern und UX-Designern der verschiedenen Plattformen. Jeder von uns hatte ein Designsystem für die eigene Plattform gebaut, und eine Zeit lang verbesserten wir sie parallel. Nach vielen Gesprächen und gemeinsamen Reviews einigten wir uns auf ein einziges System, und die Frage wurde, wie man es so strukturiert, dass alle Designer es gleich nutzen.

## Das umgekehrte Dreieck

Ich schlug eine Struktur aus CSS vor: das umgekehrte Dreieck. Die breiteste Ebene oben erreicht alles und ändert sich selten; jede Ebene darunter ist spezifischer und baut auf der darüber auf. In der Praxis war eine Foundation-Bibliothek in Sketch mit den Komponenten verknüpft, und jede Komponente übernahm ihre Attribute aus diesen Foundations, statt eigene zu definieren.

<figure class="tri"><div><strong>Foundations</strong><span>Farbe, Typografie, Abstände und Elevation in einer Sketch-Bibliothek</span></div><div><strong>Komponenten</strong><span>Übernehmen jedes Attribut aus den Foundations, nie eigene Werte</span></div><div><strong>Barrierefreiheit</strong><span>Kontrast, Fokus, Grössen und Labels bei jeder Komponente geprüft</span></div><div><strong>Allgemeine Muster</strong><span>Wie Suche, Filter, Formulare und Alerts überall funktionieren</span></div><div><strong>Vertikale Muster</strong><span>Was nur Nutzer von Motor, Immobilien oder Kleinanzeigen brauchen</span></div><figcaption>Das umgekehrte Dreieck, das ich für das gemeinsame System vorschlug: breit und stabil oben, spezifisch für jedes Vertical unten.</figcaption></figure>

Weil alle Designer dieselben Foundations nutzten, brachte das System das Team schnell auf eine Linie: Eine Änderung an einer Farbe oder einem Abstand erreichte jede Komponente, die sie nutzte, auf jeder Plattform.

Mit der vereinbarten Struktur arbeiteten wir uns das Dreieck in dieser Reihenfolge hinunter:

<ol class="phases"><li><strong>Komponenten definieren</strong><span>Wofür jede Komponente da ist, ihre Zustände, Varianten und ihr Verhalten</span></li><li><strong>Barrierefreiheit</strong><span>Kontrast, Fokuszustände, Touch-Grössen und Labels als Teil jeder Definition</span></li><li><strong>Interaktionsmuster</strong><span>Allgemeine Muster für alle Produkte, dann die besonderen jedes Verticals</span></li></ol>

<p class="phases-note">Von der gemeinsamen Basis zu dem, was jedes Vertical braucht.</p>

Der letzte Schritt war der wichtigste. Wer ein Auto kauft, wer eine Wohnung sucht und wer ein gebrauchtes Sofa verkauft, sind verschiedene Nutzer mit verschiedenen Bedürfnissen. Das gemeinsame System gab allen dieselbe Qualität und Konsistenz, und die vertikalen Muster liessen jedes Produkt auf seine eigenen Nutzer eingehen.

## Vom UI-Kit zum System in drei Schritten

Ich ersetzte nicht alles auf einmal. Jeder Schritt löste das dringendste Problem des vorherigen.

<ol class="phases"><li><strong>Sketch + Abstract</strong><span>Eine gemeinsame Bibliothek mit Versionen, Branches und Reviews statt Dateikopien</span></li><li><strong>Gemeinsame Foundations</strong><span>Farbe, Typografie und Abstände als Variablen, Komponenten als Atome und Moleküle</span></li><li><strong>React-Komponenten</strong><span>Vollständig angepasste Komponenten in SUI, dieselben Bausteine wie im Design, pro Marke gethemt</span></li></ol>

<p class="phases-note">Von Dateien zu einem lebendigen System, Schritt für Schritt.</p>

- **Zuerst Versionskontrolle.** Abstract gab dem Design, was git dem Engineering gab: eine einzige Quelle der Wahrheit, Branches zum Erkunden, ohne die Bibliothek zu brechen, und eine Historie jeder Änderung. Das war die Voraussetzung für alles andere.
- **Dann eine gemeinsame Sprache.** Die Komponenten wurden in Atome und Moleküle geordnet, und ihre Stile wanderten in gemeinsame Theme-Variablen. Design und Code nannten dieselben Dinge gleich.
- **Schliesslich Code als Quelle der Wahrheit.** Die Komponenten wurden vollständig angepasste React-Komponenten in SUI. Eine Änderung erreichte damit jedes Produkt, das sie nutzte.

Die Bibliotheksdatei bewahrt die Grundlagen so, wie sie definiert wurden: eine Schriftskala für Desktop und Mobile auf einer Basis von 16 px, sechs Farbrollen mit je einer vollen Helligkeitsabstufung sowie Abstände, Icons und Radien auf einer Basis von 8 px.

<div class="lib-found">
  <figure class="wide"><img src="/projects/adevinta-sui/lib-type.webp" alt="Schriftskala in Open Sans: Überschriften von Giant bis Large und Fliesstext von Medium bis xxSmall, jeweils mit Verhältnis zur Basis, Grösse und Zeilenhöhe für Desktop und Mobile." loading="lazy" /><figcaption>Schriftskala: jede Grösse ist die Basis plus oder minus eine Stufe, für Desktop und Mobile.</figcaption></figure>
  <figure><img src="/projects/adevinta-sui/lib-color.webp" alt="Farbdefinition: Primär #2B91C1, Akzent #D57C1B, Grau #777777, Erfolg #00A544, Warnung #FF6335 und Fehler #E93E40, jede mit voller und komprimierter Helligkeitsabstufung." loading="lazy" /><figcaption>Sechs Farbrollen, jede mit ihrer Helligkeitsabstufung.</figcaption></figure>
  <figure><img src="/projects/adevinta-sui/lib-spacing.webp" alt="Aussen- und Innenabstände von 4 bis 48 px auf einer Basis von 8 px, Icongrössen von 16 bis 40 px und Radien von 0, 2 px und 50%." loading="lazy" /><figcaption>Abstände, Icons und Radien aus derselben Basis. Aus der SUI-Bibliotheksdatei in Figma.</figcaption></figure>
</div>

Die öffentliche Historie des Repositorys zeigt den Wechsel. Die Bibliothek wuchs zuerst in losen Ordnern, begann dann neu in atomarer Struktur und wuchs von dort aus weiter.

<figure class="chart"><p class="chart-title">Komponenten in der öffentlichen SUI-Bibliothek, pro Quartal</p><ul class="chart-legend"><li><i style="background:#6b7682"></i>Lose Ordner</li><li><i style="background:#ff5a4f"></i>Atome</li><li><i style="background:#5b7cff"></i>Moleküle und weitere</li></ul><div class="chart-scroll"><svg class="chart-svg" viewBox="0 0 720 300" role="img" aria-labelledby="sui-chart-t"><title id="sui-chart-t">Komponenten in der öffentlichen SUI-Bibliothek, pro Quartal</title><line class="grid" x1="44" x2="710" y1="256.0" y2="256.0"/><text class="ax" x="36" y="260.0" text-anchor="end">0</text><line class="grid" x1="44" x2="710" y1="177.3" y2="177.3"/><text class="ax" x="36" y="181.3" text-anchor="end">30</text><line class="grid" x1="44" x2="710" y1="98.7" y2="98.7"/><text class="ax" x="36" y="102.7" text-anchor="end">60</text><line class="grid" x1="44" x2="710" y1="20.0" y2="20.0"/><text class="ax" x="36" y="24.0" text-anchor="end">90</text><path fill="#6b7682" d="M56.2 256.0V252.1Q56.2 248.1 60.2 248.1H83.3Q87.3 248.1 87.3 252.1V256.0Z"><title>Jan 17: 3 in losen Ordnern</title></path><text class="ax" x="71.8" y="272" text-anchor="middle">Jan 17</text><path fill="#6b7682" d="M111.7 256.0V204.9Q111.7 200.9 115.7 200.9H138.8Q142.8 200.9 142.8 204.9V256.0Z"><title>Apr 17: 21 in losen Ordnern</title></path><text class="ax odd" x="127.2" y="272" text-anchor="middle">Apr 17</text><path fill="#6b7682" d="M167.2 256.0V191.8Q167.2 187.8 171.2 187.8H194.3Q198.3 187.8 198.3 191.8V256.0Z"><title>Jul 17: 26 in losen Ordnern</title></path><text class="ax" x="182.8" y="272" text-anchor="middle">Jul 17</text><text class="val" x="182.8" y="181.8" text-anchor="middle">26</text><path fill="#6b7682" d="M222.7 256.0V155.1Q222.7 151.1 226.7 151.1H249.8Q253.8 151.1 253.8 155.1V256.0Z"><title>Okt 17: 40 in losen Ordnern</title></path><text class="ax odd" x="238.2" y="272" text-anchor="middle">Okt 17</text><path fill="#6b7682" d="M278.2 256.0V103.9H309.3V256.0Z"><title>Jan 18: 58 in losen Ordnern</title></path><path fill="#ff5a4f" d="M278.2 101.9V90.8H309.3V101.9Z"><title>Jan 18: 5 Atome</title></path><path fill="#5b7cff" d="M278.2 88.8V92.2Q278.2 88.2 282.2 88.2H305.3Q309.3 88.2 309.3 92.2V88.8Z"><title>Jan 18: 1 Moleküle und weitere</title></path><text class="ax" x="293.8" y="272" text-anchor="middle">Jan 18</text><path fill="#6b7682" d="M333.7 256.0V85.6H364.8V256.0Z"><title>Apr 18: 65 in losen Ordnern</title></path><path fill="#ff5a4f" d="M333.7 83.6V67.2H364.8V83.6Z"><title>Apr 18: 7 Atome</title></path><path fill="#5b7cff" d="M333.7 65.2V63.3Q333.7 59.3 337.7 59.3H360.8Q364.8 59.3 364.8 63.3V65.2Z"><title>Apr 18: 3 Moleküle und weitere</title></path><text class="ax odd" x="349.2" y="272" text-anchor="middle">Apr 18</text><path fill="#6b7682" d="M389.2 256.0V77.7H420.3V256.0Z"><title>Jul 18: 68 in losen Ordnern</title></path><path fill="#ff5a4f" d="M389.2 75.7V43.6H420.3V75.7Z"><title>Jul 18: 13 Atome</title></path><path fill="#5b7cff" d="M389.2 41.6V37.1Q389.2 33.1 393.2 33.1H416.3Q420.3 33.1 420.3 37.1V41.6Z"><title>Jul 18: 4 Moleküle und weitere</title></path><text class="ax" x="404.8" y="272" text-anchor="middle">Jul 18</text><text class="val" x="404.8" y="27.1" text-anchor="middle">85</text><path fill="#ff5a4f" d="M444.7 256.0V219.3H475.8V256.0Z"><title>Okt 18: 14 Atome</title></path><path fill="#5b7cff" d="M444.7 217.3V199.7Q444.7 195.7 448.7 195.7H471.8Q475.8 195.7 475.8 199.7V217.3Z"><title>Okt 18: 9 Moleküle und weitere</title></path><text class="ax odd" x="460.2" y="272" text-anchor="middle">Okt 18</text><path fill="#ff5a4f" d="M500.2 256.0V211.4H531.3V256.0Z"><title>Jan 19: 17 Atome</title></path><path fill="#5b7cff" d="M500.2 209.4V181.3Q500.2 177.3 504.2 177.3H527.3Q531.3 177.3 531.3 181.3V209.4Z"><title>Jan 19: 13 Moleküle und weitere</title></path><text class="ax" x="515.8" y="272" text-anchor="middle">Jan 19</text><path fill="#ff5a4f" d="M555.7 256.0V211.4H586.8V256.0Z"><title>Apr 19: 17 Atome</title></path><path fill="#5b7cff" d="M555.7 209.4V163.0Q555.7 159.0 559.7 159.0H582.8Q586.8 159.0 586.8 163.0V209.4Z"><title>Apr 19: 20 Moleküle und weitere</title></path><text class="ax odd" x="571.2" y="272" text-anchor="middle">Apr 19</text><path fill="#ff5a4f" d="M611.2 256.0V208.8H642.3V256.0Z"><title>Jul 19: 18 Atome</title></path><path fill="#5b7cff" d="M611.2 206.8V149.9Q611.2 145.9 615.2 145.9H638.3Q642.3 145.9 642.3 149.9V206.8Z"><title>Jul 19: 24 Moleküle und weitere</title></path><text class="ax" x="626.8" y="272" text-anchor="middle">Jul 19</text><text class="val" x="626.8" y="139.9" text-anchor="middle">42</text><path fill="#ff5a4f" d="M666.7 256.0V208.8H697.8V256.0Z"><title>Okt 19: 18 Atome</title></path><path fill="#5b7cff" d="M666.7 206.8V149.9Q666.7 145.9 670.7 145.9H693.8Q697.8 145.9 697.8 149.9V206.8Z"><title>Okt 19: 24 Moleküle und weitere</title></path><text class="ax odd" x="682.2" y="272" text-anchor="middle">Okt 19</text><line class="ann" x1="432.5" x2="432.5" y1="20" y2="256"/><text class="ann-t" x="438.5" y="30">Sep 2018: lose Ordner entfernt,</text><text class="ann-t" x="438.5" y="44">die Bibliothek geht als Atome und Moleküle weiter</text></svg></div><figcaption>Gezählt aus der öffentlichen Historie des SUI-Repositorys auf GitHub: ein Punkt zu Beginn jedes Quartals. Vor der Umstellung lagen Komponenten in Ordnern nach Thema (Karten, Formulare, Tags), danach nach Ebene.</figcaption><details class="chart-table"><summary>Daten anzeigen</summary><table><thead><tr><th>Quartal</th><th>Lose Ordner</th><th>Atome</th><th>Moleküle und weitere</th></tr></thead><tbody><tr><td>Jan 17</td><td>3</td><td>0</td><td>0</td></tr><tr><td>Apr 17</td><td>21</td><td>0</td><td>0</td></tr><tr><td>Jul 17</td><td>26</td><td>0</td><td>0</td></tr><tr><td>Okt 17</td><td>40</td><td>0</td><td>0</td></tr><tr><td>Jan 18</td><td>58</td><td>5</td><td>1</td></tr><tr><td>Apr 18</td><td>65</td><td>7</td><td>3</td></tr><tr><td>Jul 18</td><td>68</td><td>13</td><td>4</td></tr><tr><td>Okt 18</td><td>0</td><td>14</td><td>9</td></tr><tr><td>Jan 19</td><td>0</td><td>17</td><td>13</td></tr><tr><td>Apr 19</td><td>0</td><td>17</td><td>20</td></tr><tr><td>Jul 19</td><td>0</td><td>18</td><td>24</td></tr><tr><td>Okt 19</td><td>0</td><td>18</td><td>24</td></tr></tbody></table></details></figure>

## Ein System, viele Marken

Der Schlüsselentscheid war, Gemeinsames von Marke zu trennen. Verhalten, Struktur und Barrierefreiheit leben in den gemeinsamen Komponenten; Farbe, Typografie und andere Markenwerte in einem Theme pro Marktplatz.

| Ebene | Was sie enthält | Geteilt von |
| --- | --- | --- |
| Komponenten | Atome und Moleküle: Buttons, Eingabefelder, Selects, Karten, Alerts und mehr, mit ihrem Verhalten | Allen Marktplätzen |
| Gemeinsames Theme | Die Variablen, die jede Komponente liest: Farbrollen, Schriftskala, Abstände, Radien, Elevation | Allen Marktplätzen |
| Marken-Theme | Die Werte jeder Marke für diese Variablen | Je eines pro Marktplatz: Coches.net, Fotocasa, Milanuncios, Habitaclia |

So sieht Coches.net weiterhin aus wie Coches.net und Fotocasa wie Fotocasa, aber eine Korrektur oder Verbesserung an einer Komponente erreicht alle auf einmal.

Dieselbe Button-Komponente, aus den öffentlichen Paketen mit zwei Themes gerendert: dem Basis-Theme und dem Theme von Milanuncios. Farbe, Radius und Schrift ändern sich, die Komponente nicht.

<div class="themes"><figure><img src="/projects/adevinta-sui/sui-theme-base.webp" alt="Buttons mit dem SUI-Basis-Theme: blaue Hauptfarbe, orange Akzentfarbe, eckige Ecken." /><figcaption>Basis-Theme</figcaption></figure><figure><img src="/projects/adevinta-sui/sui-theme-milanuncios.webp" alt="Dieselben Buttons mit dem Theme von Milanuncios: grüne Hauptfarbe, gelbe Akzentfarbe, abgerundete Ecken und Verdana." /><figcaption>Theme Milanuncios</figcaption></figure></div>

## Nah am Frontend

Während des ganzen Projekts arbeitete ich sehr eng mit den Frontend-Entwicklern. Dabei lernte ich, wie sie Dinge brauchten und wie das Design vorbereitet sein musste, damit die Übergabe weniger Reibung erzeugte. Das veränderte, wie ich Arbeit lieferte:

- **Dieselben Namen wie im Code**, damit eine Komponente oder Variable in Sketch und in React dasselbe bedeutete.
- **Werte aus dem Theme, nie lose Werte**, damit das, was die Entwicklung erhielt, schon zu ihren Variablen passte.
- **Jeder Zustand und Grenzfall in der Definition**, damit während der Entwicklung weniger Fragen zurückkamen.

Diese Nähe machte auch den Wechsel von Sketch zu React-Komponenten möglich, ohne zu verlieren, was das Design definiert hatte.

Diese Werte stecken noch im Code. Das Standard-Theme von SUI nutzt heute die Farben, die Schrift und die Skalen, die in der Bibliothek definiert wurden:

| In der Bibliothek | Im SUI-Theme heute |
| --- | --- |
| Primär #2B91C1 | <code>$c-primary</code> #2b91c1 |
| Akzent #D57C1B | <code>$c-accent</code> #d57c1b |
| Grau #777777 | <code>$c-gray</code> #777777 |
| Erfolg, Warnung, Fehler #00A544, #FF6335, #E93E40 | <code>$c-success</code>, <code>$c-alert</code>, <code>$c-error</code> mit denselben Werten |
| Open Sans | <code>$ff-sans-serif</code> Open Sans |
| Schriftbasis 16 px, Stufen B + 12, + 8, + 4, + 2, − 2, − 4, − 6 | <code>$fz-base</code> 16 px, mit denselben Stufen |
| Abstandsbasis 8 px, von 4 bis 48 px | <code>$p-base</code> und <code>$m-base</code> 8 px, von 4 bis 48 px |

In der Bibliothek wurde jede Komponente mit all ihren Zuständen definiert, bevor sie gebaut wurde. Das Button-Blatt umfasst primäre, sekundäre, tertiäre und Akzent-Buttons, mit Icons, in Normal, Hover und Deaktiviert, auf hellem Grund und auf Markengrund.

![Button-Blatt aus der SUI-Bibliothek: Reihen primärer, sekundärer, tertiärer und Akzent-Buttons in den Zuständen Normal, Hover und Deaktiviert, mit und ohne Icons, auf hellem und auf blauem Markengrund.](/projects/adevinta-sui/lib-buttons.webp "Der Button, wie er in der Bibliothek definiert war, vor dem Code.")

Designentscheide wurden im Code zu Props. Der Button hat vier Designs und sechs Farbrollen, und jede ist ein Wert, den die Entwicklung übergibt, keine neue Komponente.

![Der SUI-Button in vier Designs (solid, outline, flat, link) und sechs Farbrollen (primary, accent, neutral, success, alert, error).](/projects/adevinta-sui/sui-button-props.webp "Eine Komponente, 24 Kombinationen, jede mit zwei Props gewählt: design und color.")

## Offen als Standard

SUI ist Open Source. Code, Historie und Marken-Themes sind öffentlich auf GitHub, und SUI Studio zeigt den Live-Katalog. Diese Offenheit war Teil des Modells: Vorschläge und Fehler wurden offen besprochen, und jedes Paket hatte seine eigene Version, sodass ein Team eine Komponente aktualisieren konnte, ohne auf ein globales Release zu warten.

Der Code ist die Arbeit der Frontend-Community von Adevinta Spain. Mein Teil lag auf der Designseite für das Motor-Vertical: das System in Sketch starten, versionieren, jede Komponente auf Definition, Umsetzung und Einsatz auf allen Plattformen validieren und testen und Design und Code beim Wechsel zu React synchron halten.

Jede Komponente ist ein eigenes Paket mit Code, Demo, Tests und Changelog am selben Ort. Der Button bewahrt zudem seine ursprüngliche Definition auf, die Spezifikation, die das Design vor dem Code schrieb.

<div class="pkg" role="group" aria-label="Aufbau eines SUI-Komponentenpakets"><p class="pkg-root">components/atom/button/</p><ul><li><code>SPEC.md</code><span>Die Definition: Zweck, Typen, Grössen und Regeln, mit Status, Version und Verantwortlichen für UX, UI und Frontend</span></li><li><code>README.md</code><span>Installation und Nutzung</span></li><li><code>src/</code><span>Die React-Komponente und ihre Styles, die das Theme lesen</span></li><li><code>demo/</code><span>Die Live-Beispiele in SUI Studio: Design, Farbe, Grösse, Barrierefreiheit, Tastatur</span></li><li><code>test/</code><span>Automatisierte Tests</span></li><li><code>CHANGELOG.md</code><span>Jede Version, einzeln veröffentlicht</span></li></ul><p class="pkg-cap">Das Button-Paket, wie es heute auf GitHub liegt.</p></div>

## Entscheidungen und ihr Preis

**1. Ein System statt eines pro Plattform.** Web, iOS und Android hatten je ein Designsystem mit guten Ideen, aber keines war die Referenz.

*Preis:* Jedes Plattformteam gab sein eigenes System auf. *Gewinn:* Eine Referenz für alle Designer und Entwickler der vier Marktplätze.

**2. Schritt für Schritt statt eines grossen Neubaus.** Zuerst Abstract, dann gemeinsame Grundlagen, dann React-Komponenten in SUI.

*Preis:* Ein langsamerer Weg, als alles auf einmal zu ersetzen. *Gewinn:* Jeder Schritt löste das dringendste Problem des vorherigen, und die Teams lieferten weiter.

**3. Gemeinsames Verhalten, Marke in Themes.** Komponenten enthalten Verhalten, Struktur und Barrierefreiheit; jeder Marktplatz hat sein eigenes Theme.

*Preis:* Weniger Markenfreiheit innerhalb der Komponenten. *Gewinn:* Eine Korrektur an einer Komponente erreicht alle vier Marken auf einmal.

## Was ich gelernt habe

- **Abstimmung entsteht in Gesprächen, nicht in Dateien.** Ein gemeinsames System funktionierte erst, als jedes Plattformteam es mitgestaltet hatte.
- **Versionskontrolle ist auch ein Designproblem.** Solange das Design keine Historie und keine Branches hatte, war jede andere Verbesserung fragil.
- **Marke früh von Verhalten trennen.** Themes erlauben mehreren Marken, ein System zu teilen, ohne ihre Identität aufzugeben.
- **Schritt für Schritt vorgehen.** Jeder Schritt erleichterte die Arbeit des Teams sofort, und genau das hielt die Leute beim System, während es noch entstand.
- **Nah beim Frontend sitzen.** Zu verstehen, wie Entwickler Dinge brauchen, ist der schnellste Weg, Reibung zwischen Design und Code zu beseitigen.
