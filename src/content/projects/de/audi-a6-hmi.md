---
title: Vernetztes HMI im Audi A6
headline: Den Blick auf der Strasse
summary: Informationsarchitektur und Interaktionsmodell für das vernetzte Infotainmentsystem des Audi A6, getestet in einem Fahrsimulator.
client: Audi (Volkswagen Konzern)
sector: Automobil
year: "2015"
role: Senior UX und HMI Designer
team: UX, HMI-Entwicklung sowie Software- und Hardware-Teams
duration: "TODO"
tools: [Informationsarchitektur, Interaktionsdesign, Sprachinteraktion, High-Fidelity-Prototyping, Tests im Simulator]
cover: hmi
featured: false
order: 8
tldr:
  - Autos wurden zu vernetzten Plattformen mit Navigation, Medien, Telefon, Fahrzeugeinstellungen und Fahrerassistenz, und mit jeder Funktion wurden die Menüs tiefer.
  - Ich definierte Informationsarchitektur, Navigationsmodell und Interaktionsprinzipien für den vernetzten A6, zuerst für den Dreh-Drück-Steller gedacht, und testete Prototypen in einem Cockpit-Simulator.
  - Das Ergebnis war eine flachere, einheitliche HMI-Struktur, die neue vernetzte Dienste aufnehmen kann, ohne tiefer zu werden, und ein gemeinsames Modell für Design und Entwicklung.
metrics: []
---


## Das Problem

2015 wechselte die Autoindustrie von einzelnen Bedienelementen zu vollständig vernetzten digitalen Systemen. Die Funktionen wuchsen schneller, als die Oberfläche sie aufnehmen konnte. Die Folgen waren tiefe Menüs, uneinheitliche Muster, schwer auffindbare Funktionen und vor allem **Ablenkung beim Fahren**.

Für ein Auto zu gestalten, ist etwas anderes als für das Web oder ein Telefon:

- **Der Mensch fährt.** Die Aufmerksamkeit ist begrenzt, Interaktionen müssen schnell und vorhersehbar sein, und Fehler haben Folgen für die Sicherheit.
- **Das System besteht aus vielen Systemen.** Navigation, Medien, Telefon, Einstellungen und Assistenz haben je eigene Entwicklungszyklen und älteres Verhalten.
- **Die Hardware ist fix.** Eine Bildschirmgrösse, begrenzte Leistung und ein Dreh-Drück-Steller mit physischen Tasten als Hauptbedienung.

Es war also ebenso sehr ein Systemprojekt wie ein Oberflächenprojekt.

![Designer und Ingenieure arbeiten an einem Audi-Prototyp in der Entwicklungswerkstatt](/projects/audi/workshop.webp "Konzepte wurden am echten Fahrzeug geprüft, nicht nur am Bildschirm.")

## Was ich tat

Ich konzentrierte mich auf das Erlebnis auf Systemebene: Informationsarchitektur, Navigationsmodell und Interaktionslogik, HMI-Prinzipien, Screen-Layouts und Komponenten sowie High-Fidelity-Prototypen für Tests im Cockpit. Ein grosser Teil der Arbeit bestand darin, die Brücke zur Entwicklung zu sein, damit die Konzepte auf der echten Hardware funktionierten.

## Das HMI als System

Das HMI ist kein Bildschirm. Es liegt zwischen vier Bereichen, und ein Entscheid in einem davon wirkt auf alle anderen.

<figure class="hmi-sys" aria-label="Diagramm des HMI-Systems mit Eingaben, Ausgaben, Fahrzeugsystemen und Plattform">
  <div class="node n-vs"><p>Fahrzeugsysteme</p><ul><li>Navigation</li><li>Medien</li><li>Telefon</li><li>Fahrzeugeinstellungen</li><li>Fahrerassistenz (ADAS)</li><li>Vernetzte Dienste</li><li>Fahrzeugstatus</li></ul></div>
  <span class="arr a-d1" aria-hidden="true"></span>
  <div class="node n-in"><p>Eingaben</p><ul><li>Dreh-Drück-Steller</li><li>Lenkradtasten</li><li>Touchscreen</li><li>Sprachsteuerung</li></ul></div>
  <span class="arr a-r1" aria-hidden="true"></span>
  <div class="node n-hmi"><p>HMI-System</p><ul><li>UI-Ebene</li><li>Interaktionslogik</li><li>Systemzustände</li><li>Systemfeedback</li><li>Navigationsmodell</li></ul></div>
  <span class="arr a-r2" aria-hidden="true"></span>
  <div class="node n-out"><p>Ausgaben</p><ul><li>Zentrales Display</li><li>Kombiinstrument</li><li>Head-up-Display</li><li>Audiofeedback</li></ul></div>
  <span class="arr a-d2" aria-hidden="true"></span>
  <div class="node n-pf"><p>Plattform</p><ul><li>Embedded System</li><li>Fahrzeugdaten und CAN-Bus</li><li>Sensoren</li><li>Konnektivität und Cloud</li></ul></div>
  <figcaption>Die Inhalte kommen aus den Fahrzeugsystemen, die Plattform setzt die Grenzen, und das HMI macht aus vier Eingaben vier Ausgaben.</figcaption>
</figure>

**Fahrzeugsysteme** liefern die Inhalte, jedes mit eigenem Release-Zyklus. **Eingaben** kommen auf vier Wegen: Dreh-Drück-Steller, Lenkradtasten, Touchscreen und Sprache. **Ausgaben** gehen an das zentrale Display, das Kombiinstrument, das Head-up-Display und an Audio. Darunter setzt die **Plattform** (Embedded System, Fahrzeugdaten über den CAN-Bus, Sensoren und Cloud-Konnektivität) harte Grenzen bei Leistung und Timing. Dieses Bild zuerst zu zeichnen, gab Design und Engineering eine gemeinsame Sicht darauf, wo jeder Entscheid landet.

## Zuerst Prinzipien, dann Screens

Bevor wir Screens gestalteten, einigten wir uns auf Prinzipien, mit denen jedes Team Entscheidungen treffen konnte:

- Flache Navigation statt tiefer Menüs.
- Dieselben Interaktionsmuster in allen Systemen.
- Vorhersehbares Verhalten und sofortige Rückmeldung.
- Weniger Schritte für häufige Aufgaben.
- Zuerst der Dreh-Drück-Steller, dann Touch.
- Der Blick des Fahrers bleibt auf der Strasse.

## Informationsarchitektur

Fünf Kategorien, gruppiert nach dem, was der Fahrer tun will, mit jeweils höchstens fünf Zielen. Der Baum bleibt zwei Ebenen tief: Home, eine Kategorie, ein Ziel.

<figure class="tree" aria-label="Navigationsbaum des HMI von Home zu fünf Kategorien">
  <p class="root">HOME</p>
  <div class="cols">
    <div><p class="cat">Navigation</p><ul><li>Ziel eingeben</li><li>Letzte Ziele</li><li>Favoriten</li><li>Karteneinstellungen</li></ul></div>
    <div><p class="cat">Medien</p><ul><li>Radio</li><li>Mediathek</li><li>Bluetooth Audio</li><li>USB</li><li>Medieneinstellungen</li></ul></div>
    <div><p class="cat">Telefon</p><ul><li>Kontakte</li><li>Anrufliste</li><li>Tastatur</li><li>Nachrichten</li><li>Telefoneinstellungen</li></ul></div>
    <div><p class="cat">Fahrzeug</p><ul><li>Fahreinstellungen</li><li>Fahrerassistenz</li><li>Licht</li><li>Klima</li><li>Fahrzeugstatus</li></ul></div>
    <div><p class="cat">Einstellungen</p><ul><li>Display</li><li>Ton</li><li>Konnektivität</li><li>System</li><li>Benutzerprofile</li></ul></div>
  </div>
  <figcaption>Höchstens zwei Ebenen unter Home. Neue vernetzte Dienste kommen in eine bestehende Kategorie, statt Tiefe hinzuzufügen.</figcaption>
</figure>

Die häufigsten Ziele liegen zusätzlich in einer festen Leiste links am Bildschirm. So springt der Fahrer von überall zu Navigation, Medien, Telefon oder Radio, ohne zurück auf Home zu gehen.

## Wichtige Entscheidungen

**Weniger Hauptkategorien, geordnet danach, was der Fahrer tun will,** und nicht danach, welches technische System eine Funktion verantwortet. Manche Zuständigkeiten in der Entwicklung wurden dadurch weniger klar, aber die Fahrer fanden Funktionen dort, wo sie sie erwarteten.

**Ein flaches Navigationsmodell** mit einheitlichen Screen-Vorlagen, damit jeder neue vernetzte Dienst in ein bestehendes Muster passte, statt eine Ebene hinzuzufügen.

**Ein fester Statusbereich** für Systemrückmeldungen und wichtige Informationen, damit Fahrer nie danach suchen mussten.

**Begrenzte Anpassungen.** Weniger Optionen bedeuteten mehr Zuverlässigkeit und Vorhersehbarkeit, die richtige Wahl in einem Umfeld, in dem Sicherheit vorgeht.

## Ein Modell, vier Eingaben

Dieselbe Struktur musste funktionieren, ob der Fahrer den Dreh-Drück-Steller drehte, eine Lenkradtaste drückte, den Bildschirm berührte oder sprach. Fokus, Feedback und Bestätigung wurden deshalb einmal gestaltet und dann für jede Eingabe umgesetzt, statt vier getrennte Oberflächen zu entwerfen.

Die Sprachsteuerung sollte sich natürlich anfühlen, nicht wie eine Befehlssprache. Im Klima-Kontext schlägt der Bildschirm Sätze wie «Mir ist zu warm» vor und hebt die Wörter hervor, die das System versteht. So lernen Fahrer ohne Handbuch, was sie sagen können.

![Sprachsteuerung für Klima mit vorgeschlagenen Sätzen über der Klimabedienung](/projects/audi/voice-climate.webp "Sprache im Kontext: vorgeschlagene Sätze für Klima, die verstandenen Wörter hervorgehoben. Die Klimabedienung bleibt auf dem unteren Bildschirm.")

## Die Oberfläche im Auto

Zwei Touchscreens teilen sich die Arbeit: der obere für Infotainment und Navigation, der untere für Klima und Komfort. Der Fahrer weiss immer, welcher Bildschirm was tut.

![Cockpit des Audi A6 mit Kombiinstrument und zwei zentralen Touchscreens](/projects/audi/cockpit.webp "Das Cockpit: Kombiinstrument, oberer Bildschirm für Infotainment, unterer für Klima.")

Der Home-Bildschirm ist ein Raster grosser Kacheln mit einer Farbakzentuierung pro Kategorie. So erkennt man ein Ziel auf einen Blick an Bild und Farbe, statt Beschriftungen zu lesen. Eine Statusleiste zeigt Konnektivität, Telefon und Profil immer an derselben Stelle.

<div class="compare compare--wide">
  <figure>
    <img src="/projects/audi/home-screen.webp" alt="Der Home-Bildschirm mit acht grossen Kacheln und der festen linken Leiste" />
    <p class="compare-note">Home: grosse Kacheln, ein Farbakzent pro Kategorie und die feste linke Leiste.</p>
  </figure>
  <figure>
    <img src="/projects/audi/home-tiles.webp" alt="Nahaufnahme der Kacheln für Navigation, Fahrzeug, Telefon und Medien" />
    <p class="compare-note">Kacheln, die man auf einen Blick liest: Icon, Beschriftung und Farbe wirken zusammen.</p>
  </figure>
</div>

### Anatomie des Home-Bildschirms

Ein Bildschirm, der in Sekundenbruchteilen gelesen wird, braucht eine strenge Hierarchie. Jedes Element hat genau eine Aufgabe, und die Reihenfolge, in der das Auge es findet, ist gestaltet und nicht dem Zufall überlassen.

<figure class="anatomy">
  <div class="anatomy-screen"><svg viewBox="0 0 800 450" role="img" aria-label="Annotiertes Wireframe des HMI-Home-Bildschirms mit sieben nummerierten Elementen" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="800" height="450" rx="18" fill="#0c0d10"/><g fill="none" stroke="#d4d4d8" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M648 36 L658 45 L653 49 L653 31 L658 35 L648 44"/><circle cx="676" cy="36" r="3.5"/><path d="M669 49 q7 -10 14 0"/><rect x="692" y="31" width="9" height="17" rx="2"/></g><g fill="#d4d4d8"><rect x="710" y="44" width="3" height="5"/><rect x="715" y="40" width="3" height="9"/><rect x="720" y="36" width="3" height="13"/><rect x="725" y="32" width="3" height="17" opacity=".4"/></g><text x="742" y="47" fill="#e4e4e7" font-size="15" font-weight="600">16:11</text><rect x="18" y="70" width="70" height="340" rx="6" fill="#16171b"/><rect x="18" y="70" width="70" height="68" rx="6" fill="#2a2c33"/><path d="M40 110 L53 98 L66 110 M44 107 L44 120 L62 120 L62 107" fill="none" stroke="#e4e4e7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><path d="M53 160 L63 188 L53 182 L43 188 Z" fill="none" stroke="#e4e4e7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><path d="M48 254 L48 232 L62 228 L62 250" fill="none" stroke="#e4e4e7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><circle cx="45" cy="254" r="4" fill="none" stroke="#e4e4e7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><circle cx="59" cy="250" r="4" fill="none" stroke="#e4e4e7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><path d="M44 296 q2 -6 6 -4 l4 6 q1 3 -2 5 q3 7 9 10 q2 -3 5 -2 l6 4 q2 4 -4 6 q-14 0 -24 -25 z" fill="none" stroke="#e4e4e7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><circle cx="53" cy="372" r="3" fill="none" stroke="#e4e4e7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><path d="M53 375 L53 392 M44 364 a12 12 0 0 0 0 16 M62 364 a12 12 0 0 1 0 16" fill="none" stroke="#e4e4e7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><line x1="26" y1="138" x2="80" y2="138" stroke="#2a2c33"/><line x1="26" y1="206" x2="80" y2="206" stroke="#2a2c33"/><line x1="26" y1="274" x2="80" y2="274" stroke="#2a2c33"/><line x1="26" y1="342" x2="80" y2="342" stroke="#2a2c33"/><rect x="130" y="80" width="150" height="150" rx="4" fill="#121317" stroke="#2f3138"/><path d="M165 160 Q195 112 243 120" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><path d="M179 166 Q205 128 245 134" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><text x="205" y="202" fill="#f4f4f5" font-size="12.5" font-weight="600" letter-spacing="1" text-anchor="middle">NAVIGATION</text><line x1="136" y1="228" x2="274" y2="228" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/><rect x="296" y="80" width="150" height="150" rx="4" fill="#121317" stroke="#2f3138"/><ellipse cx="371" cy="142" rx="34" ry="13" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><ellipse cx="371" cy="139" rx="16" ry="6" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><text x="371" y="202" fill="#f4f4f5" font-size="12.5" font-weight="600" letter-spacing="1" text-anchor="middle">SETTINGS</text><line x1="302" y1="228" x2="440" y2="228" stroke="#d4d4d8" stroke-width="3" stroke-linecap="round"/><rect x="462" y="80" width="150" height="150" rx="4" fill="#121317" stroke="#2f3138"/><circle cx="547" cy="138" r="15" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><path d="M503 156 a10 10 0 0 1 8 -16 a13 13 0 0 1 24 2 a9 9 0 0 1 4 14 z" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><text x="537" y="202" fill="#f4f4f5" font-size="12.5" font-weight="600" letter-spacing="1" text-anchor="middle">WEATHER</text><line x1="468" y1="228" x2="606" y2="228" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/><rect x="628" y="80" width="150" height="150" rx="4" fill="#121317" stroke="#2f3138"/><path d="M663 158 C683 158 687 118 703 118 C719 118 723 158 743 152" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><text x="703" y="202" fill="#f4f4f5" font-size="12.5" font-weight="600" letter-spacing="1" text-anchor="middle">RADIO</text><line x1="634" y1="228" x2="772" y2="228" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/><rect x="130" y="250" width="150" height="150" rx="4" fill="#121317" stroke="#2f3138"/><path d="M175 316 L225 298 L239 308 L189 326 Z" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><path d="M167 324 Q205 342 245 316" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><text x="205" y="372" fill="#f4f4f5" font-size="12.5" font-weight="600" letter-spacing="1" text-anchor="middle">TELEPHONE</text><line x1="136" y1="398" x2="274" y2="398" stroke="#84cc16" stroke-width="3" stroke-linecap="round"/><rect x="296" y="250" width="150" height="150" rx="4" fill="#121317" stroke="#2f3138"/><rect x="337" y="298" width="68" height="26" rx="8" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><path d="M349 298 L357 286 L385 286 L393 298" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><circle cx="351" cy="312" r="3" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><circle cx="391" cy="312" r="3" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><text x="371" y="372" fill="#f4f4f5" font-size="12.5" font-weight="600" letter-spacing="1" text-anchor="middle">CAR</text><line x1="302" y1="398" x2="440" y2="398" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/><rect x="462" y="250" width="150" height="150" rx="4" fill="#121317" stroke="#2f3138"/><ellipse cx="537" cy="296" rx="38" ry="7" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><ellipse cx="537" cy="310" rx="28" ry="6" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><ellipse cx="537" cy="324" rx="22" ry="7" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><text x="537" y="372" fill="#f4f4f5" font-size="12.5" font-weight="600" letter-spacing="1" text-anchor="middle">MEDIA</text><line x1="468" y1="398" x2="606" y2="398" stroke="#eab308" stroke-width="3" stroke-linecap="round"/><rect x="628" y="250" width="150" height="150" rx="4" fill="#121317" stroke="#2f3138"/><path d="M685 300 L703 290 L721 300 L721 324 L703 334 L685 324 Z M685 300 L703 310 L721 300 M703 310 L703 334" fill="none" stroke="#a1a1aa" stroke-width="1.6" stroke-linecap="round"/><text x="703" y="372" fill="#f4f4f5" font-size="12.5" font-weight="600" letter-spacing="1" text-anchor="middle">HELP</text><line x1="634" y1="398" x2="772" y2="398" stroke="#d4d4d8" stroke-width="3" stroke-linecap="round"/><rect x="440" y="421" width="16" height="4" rx="2" fill="#e4e4e7"/><rect x="460" y="421" width="10" height="4" rx="2" fill="#52525b"/><g class="mk"><circle cx="626" cy="41" r="13"/><text x="626" y="45.5" text-anchor="middle">1</text></g><g class="mk"><circle cx="96" cy="74" r="13"/><text x="96" y="78.5" text-anchor="middle">2</text></g><g class="mk"><circle cx="130" cy="80" r="13"/><text x="130" y="84.5" text-anchor="middle">3</text></g><g class="mk"><circle cx="262" cy="124" r="13"/><text x="262" y="128.5" text-anchor="middle">4</text></g><g class="mk"><circle cx="276" cy="198" r="13"/><text x="276" y="202.5" text-anchor="middle">5</text></g><g class="mk"><circle cx="436" cy="228" r="13"/><text x="436" y="232.5" text-anchor="middle">6</text></g><g class="mk"><circle cx="490" cy="423" r="13"/><text x="490" y="427.5" text-anchor="middle">7</text></g></svg></div>
  <ol class="anatomy-legend"><li><strong>Statusleiste.</strong> Konnektivität, Telefon, Profil und Uhrzeit, immer an derselben Stelle. Der Fahrer muss den Systemzustand nie suchen.</li><li><strong>Shortcut-Leiste.</strong> Home und die vier häufigsten Ziele, auf jedem Bildschirm sichtbar. Ein Tipp von überall, ohne zurückzugehen.</li><li><strong>Kachelraster.</strong> Zwei Reihen mit je vier Kacheln. Grosse, gleichmässig verteilte Flächen, bei denen die ganze Kachel reagiert, nicht nur die Beschriftung.</li><li><strong>Illustration.</strong> Wird im peripheren Sehen erkannt, bevor etwas gelesen wird. Die Form leistet den ersten Teil der Arbeit.</li><li><strong>Beschriftung.</strong> Kurz, in Grossbuchstaben, mit grosszügiger Laufweite für Lesbarkeit auf dunklem Grund auf Armlänge.</li><li><strong>Farbakzent.</strong> Eine feine Linie pro Kategorie. Sie unterscheidet, ohne zu schreien, und hält den Bildschirm nachts ruhig.</li><li><strong>Seitenanzeige.</strong> Weitere Kacheln liegen einen Wisch entfernt. Die Struktur wächst in die Breite statt in die Tiefe.</li></ol>
  <p class="anatomy-h">Lesereihenfolge auf einen Blick</p>
  <ol class="read-order"><li><span>1</span>Form, im peripheren Sehen</li><li><span>2</span>Farbe, die Kategorie</li><li><span>3</span>Beschriftung, die Bestätigung</li><li><span>4</span>Berührung, die ganze Kachel</li></ol>
  <figcaption>Für diese Fallstudie gezeichnetes Wireframe, das die UI-Logik des Systems zeigt. Es ist keine Kopie des Serienbildschirms.</figcaption>
</figure>

## Tests im Cockpit

Wir testeten High-Fidelity-Prototypen in einem Cockpit-Simulator mit Aufgaben zu Navigation, Medien, Telefon und Einstellungen und beobachteten dabei Aufmerksamkeit und Verhalten der Fahrer. Viele Probleme zeigten sich erst in einer realistischen Fahrsituation und führten zu Änderungen an Navigationsstruktur, Abläufen, Layouts und Systemmeldungen.

<div class="video">
  <iframe src="https://www.youtube.com/embed/XGqnJOjWSzs" title="Audi A6 vernetztes HMI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>
  <p class="video-caption">Das vernetzte HMI des A6 im Einsatz. <a href="https://youtu.be/XGqnJOjWSzs" target="_blank" rel="noopener">Auf YouTube ansehen</a></p>
</div>

## Ergebnis

- Schnellere Erledigung der Aufgaben und klarere Navigation in den Simulatortests.
- Eine skalierbare HMI-Architektur, bereit für künftige vernetzte Dienste.
- Ein gemeinsames Interaktionsmodell für Design und Entwicklung, vermittelt über Abläufe, Informationsarchitektur und Prototypen statt nur über Screens.

## Was ich gelernt habe

Für Fahrzeuge zu gestalten heisst, für Aufmerksamkeit und Sicherheit zu gestalten. Das Verhalten des Systems zählt so viel wie die Optik, die Hardware prägt UX-Entscheidungen, und Prototypen in einer realistischen Umgebung verändern sie stark. Diese Lektion wende ich bis heute bei jedem anspruchsvollen Produkt an: dort testen, wo der Druck echt ist.
