---
title: Vernetztes HMI im Audi A6
headline: Eine Fahrzeugschnittstelle für Menschen, die eigentlich auf die Strasse schauen sollten
summary: Informationsarchitektur und Interaktionsmodell für das vernetzte Infotainmentsystem des Audi A6, getestet in einem Fahrsimulator.
client: Audi (Volkswagen Konzern)
sector: Automobil
year: "2015"
role: Senior UX und HMI Designer
team: UX, HMI-Entwicklung sowie Software- und Hardware-Teams
duration: "TODO"
tools: [Informationsarchitektur, Interaktionsdesign, High-Fidelity-Prototyping, Tests im Simulator]
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

## Was ich tat

Ich konzentrierte mich auf das Erlebnis auf Systemebene: Informationsarchitektur, Navigationsmodell und Interaktionslogik, HMI-Prinzipien, Screen-Layouts und Komponenten sowie High-Fidelity-Prototypen für Tests im Cockpit. Ein grosser Teil der Arbeit bestand darin, die Brücke zur Entwicklung zu sein, damit die Konzepte auf der echten Hardware funktionierten.

## Zuerst Prinzipien, dann Screens

Bevor wir Screens gestalteten, einigten wir uns auf Prinzipien, mit denen jedes Team Entscheidungen treffen konnte:

- Flache Navigation statt tiefer Menüs.
- Dieselben Interaktionsmuster in allen Systemen.
- Vorhersehbares Verhalten und sofortige Rückmeldung.
- Weniger Schritte für häufige Aufgaben.
- Zuerst der Dreh-Drück-Steller, dann Touch.
- Der Blick des Fahrers bleibt auf der Strasse.

## Wichtige Entscheidungen

**Weniger Hauptkategorien, geordnet danach, was der Fahrer tun will,** und nicht danach, welches technische System eine Funktion verantwortet. Manche Zuständigkeiten in der Entwicklung wurden dadurch weniger klar, aber die Fahrer fanden Funktionen dort, wo sie sie erwarteten.

**Ein flaches Navigationsmodell** mit einheitlichen Screen-Vorlagen, damit jeder neue vernetzte Dienst in ein bestehendes Muster passte, statt eine Ebene hinzuzufügen.

**Ein fester Statusbereich** für Systemrückmeldungen und wichtige Informationen, damit Fahrer nie danach suchen mussten.

**Begrenzte Anpassungen.** Weniger Optionen bedeuteten mehr Zuverlässigkeit und Vorhersehbarkeit, die richtige Wahl in einem Umfeld, in dem Sicherheit vorgeht.

## Tests im Cockpit

Wir testeten High-Fidelity-Prototypen in einem Cockpit-Simulator mit Aufgaben zu Navigation, Medien, Telefon und Einstellungen und beobachteten dabei Aufmerksamkeit und Verhalten der Fahrer. Viele Probleme zeigten sich erst in einer realistischen Fahrsituation und führten zu Änderungen an Navigationsstruktur, Abläufen, Layouts und Systemmeldungen.

## Ergebnis

- Schnellere Erledigung der Aufgaben und klarere Navigation in den Simulatortests.
- Eine skalierbare HMI-Architektur, bereit für künftige vernetzte Dienste.
- Ein gemeinsames Interaktionsmodell für Design und Entwicklung, vermittelt über Abläufe, Informationsarchitektur und Prototypen statt nur über Screens.

## Was ich gelernt habe

Für Fahrzeuge zu gestalten heisst, für Aufmerksamkeit und Sicherheit zu gestalten. Das Verhalten des Systems zählt so viel wie die Optik, die Hardware prägt UX-Entscheidungen, und Prototypen in einer realistischen Umgebung verändern sie stark. Diese Lektion wende ich bis heute bei jedem anspruchsvollen Produkt an: dort testen, wo der Druck echt ist.
