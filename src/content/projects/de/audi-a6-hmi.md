---
title: Vernetztes HMI im Audi A6
headline: Den Blick auf der Strasse
summary: Informationsarchitektur und Interaktionsmodell für das vernetzte Infotainmentsystem des Audi A6, getestet in einem Fahrsimulator.
client: Audi (Volkswagen Konzern)
sector: Automobil
year: "2015 bis 2016"
role: "Senior User Interface Designer (HMI), Uedelhoven für Audi"
team: UX, HMI-Entwicklung sowie Software- und Hardware-Teams
duration: "8 Monate"
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
  <div class="anatomy-screen"><img src="/projects/audi/home-screen.webp" alt="Der Home-Bildschirm in Serie mit sieben nummerierten Elementen" /><span class="pin" style="left:77.3%;top:28%" aria-hidden="true">1</span><span class="pin" style="left:30.2%;top:29.5%" aria-hidden="true">2</span><span class="pin" style="left:32.6%;top:36.5%" aria-hidden="true">3</span><span class="pin" style="left:43%;top:39%" aria-hidden="true">4</span><span class="pin" style="left:31.6%;top:72.4%" aria-hidden="true">5</span><span class="pin" style="left:62.4%;top:53.2%" aria-hidden="true">6</span><span class="pin" style="left:63.4%;top:82.4%" aria-hidden="true">7</span></div>
  <ol class="anatomy-legend"><li><strong>Statusleiste.</strong> Konnektivität, Telefon, Profil und Uhrzeit, immer an derselben Stelle. Der Fahrer muss den Systemzustand nie suchen.</li><li><strong>Shortcut-Leiste.</strong> Home und die vier häufigsten Ziele, auf jedem Bildschirm sichtbar. Ein Tipp von überall, ohne zurückzugehen.</li><li><strong>Kachelraster.</strong> Zwei Reihen mit je vier Kacheln. Grosse, gleichmässig verteilte Flächen, bei denen die ganze Kachel reagiert, nicht nur die Beschriftung.</li><li><strong>Illustration.</strong> Wird im peripheren Sehen erkannt, bevor etwas gelesen wird. Die Form leistet den ersten Teil der Arbeit.</li><li><strong>Beschriftung.</strong> Kurz, in Grossbuchstaben, mit grosszügiger Laufweite für Lesbarkeit auf dunklem Grund auf Armlänge.</li><li><strong>Farbakzent.</strong> Eine feine Linie pro Kategorie. Sie unterscheidet, ohne zu schreien, und hält den Bildschirm nachts ruhig.</li><li><strong>Seitenanzeige.</strong> Weitere Kacheln liegen einen Wisch entfernt. Die Struktur wächst in die Breite statt in die Tiefe.</li></ol>
  <p class="anatomy-h">Lesereihenfolge auf einen Blick</p>
  <ol class="read-order"><li><span>1</span>Form, im peripheren Sehen</li><li><span>2</span>Farbe, die Kategorie</li><li><span>3</span>Beschriftung, die Bestätigung</li><li><span>4</span>Berührung, die ganze Kachel</li></ol>
  <figcaption>Der Home-Bildschirm im Serienfahrzeug, annotiert.</figcaption>
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
