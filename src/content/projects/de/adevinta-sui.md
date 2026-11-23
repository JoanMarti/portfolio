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
  - "Neben meiner Arbeit in Growth und Retention war ich einer der Verantwortlichen für das Designsystem im Motor-Vertical: Ich startete es in Sketch mit Abstract für die Versionierung und entwickelte es Schritt für Schritt weiter, bis die Komponenten vollständig angepasste React-Komponenten in SUI waren, mit einem Theme pro Marke."
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

> Wie teilen sich vier Marken ein System, ohne gleich auszusehen?

## Meine Rolle

Ich war Senior UX/UI Designer im Team Growth and Retention. Neben dieser Produktarbeit war ich Teil der technologischen Transformation von Web, iOS und Android und einer der Verantwortlichen für das Designsystem im Motor-Vertical (Coches.net). Für jede Komponente hiess das drei Prüfungen:

- **Definition:** Löst sie den echten Bedarf, mit den richtigen Zuständen und dem richtigen Verhalten?
- **Umsetzung:** Ist sie wie spezifiziert machbar, und entspricht die gebaute Version dem Design?
- **Bibliothek und Plattformen:** Ist sie korrekt in der gemeinsamen Bibliothek, und funktioniert sie im Einsatz auf Web, iOS und Android?

Ich habe Komponenten gegen diese Prüfungen validiert, verwaltet und getestet, bevor sie in die Produkte kamen.

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

## Offen als Standard

SUI ist Open Source. Code, Historie und Marken-Themes sind öffentlich auf GitHub, und SUI Studio zeigt den Live-Katalog. Diese Offenheit war Teil des Modells: Vorschläge und Fehler wurden offen besprochen, und jedes Paket hatte seine eigene Version, sodass ein Team eine Komponente aktualisieren konnte, ohne auf ein globales Release zu warten.

Der Code ist die Arbeit der Frontend-Community von Adevinta Spain. Mein Teil lag auf der Designseite für das Motor-Vertical: das System in Sketch starten, versionieren, jede Komponente auf Definition, Umsetzung und Einsatz auf allen Plattformen validieren und testen und Design und Code beim Wechsel zu React synchron halten.

## Was ich gelernt habe

- **Versionskontrolle ist auch ein Designproblem.** Solange das Design keine Historie und keine Branches hatte, war jede andere Verbesserung fragil.
- **Marke früh von Verhalten trennen.** Themes erlauben mehreren Marken, ein System zu teilen, ohne ihre Identität aufzugeben.
- **Schritt für Schritt vorgehen.** Jeder Schritt erleichterte die Arbeit des Teams sofort, und genau das hielt die Leute beim System, während es noch entstand.
