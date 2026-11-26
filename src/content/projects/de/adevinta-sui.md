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

## Ein System, viele Marken

Der Schlüsselentscheid war, Gemeinsames von Marke zu trennen. Verhalten, Struktur und Barrierefreiheit leben in den gemeinsamen Komponenten; Farbe, Typografie und andere Markenwerte in einem Theme pro Marktplatz.

| Ebene | Was sie enthält | Geteilt von |
| --- | --- | --- |
| Komponenten | Atome und Moleküle: Buttons, Eingabefelder, Selects, Karten, Alerts und mehr, mit ihrem Verhalten | Allen Marktplätzen |
| Gemeinsames Theme | Die Variablen, die jede Komponente liest: Farbrollen, Schriftskala, Abstände, Radien, Elevation | Allen Marktplätzen |
| Marken-Theme | Die Werte jeder Marke für diese Variablen | Je eines pro Marktplatz: Coches.net, Fotocasa, Milanuncios, Habitaclia |

So sieht Coches.net weiterhin aus wie Coches.net und Fotocasa wie Fotocasa, aber eine Korrektur oder Verbesserung an einer Komponente erreicht alle auf einmal.

## Nah am Frontend

Während des ganzen Projekts arbeitete ich sehr eng mit den Frontend-Entwicklern. Dabei lernte ich, wie sie Dinge brauchten und wie das Design vorbereitet sein musste, damit die Übergabe weniger Reibung erzeugte. Das veränderte, wie ich Arbeit lieferte:

- **Dieselben Namen wie im Code**, damit eine Komponente oder Variable in Sketch und in React dasselbe bedeutete.
- **Werte aus dem Theme, nie lose Werte**, damit das, was die Entwicklung erhielt, schon zu ihren Variablen passte.
- **Jeder Zustand und Grenzfall in der Definition**, damit während der Entwicklung weniger Fragen zurückkamen.

Diese Nähe machte auch den Wechsel von Sketch zu React-Komponenten möglich, ohne zu verlieren, was das Design definiert hatte.

## Offen als Standard

SUI ist Open Source. Code, Historie und Marken-Themes sind öffentlich auf GitHub, und SUI Studio zeigt den Live-Katalog. Diese Offenheit war Teil des Modells: Vorschläge und Fehler wurden offen besprochen, und jedes Paket hatte seine eigene Version, sodass ein Team eine Komponente aktualisieren konnte, ohne auf ein globales Release zu warten.

Der Code ist die Arbeit der Frontend-Community von Adevinta Spain. Mein Teil lag auf der Designseite für das Motor-Vertical: das System in Sketch starten, versionieren, jede Komponente auf Definition, Umsetzung und Einsatz auf allen Plattformen validieren und testen und Design und Code beim Wechsel zu React synchron halten.

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
