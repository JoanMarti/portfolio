---
title: Coches.net Entdeckungsbereich
headline: Aus einmaligen Suchen wiederkehrende Käufer machen, auf dem grössten Automarktplatz Spaniens
summary: Ein persönlicher Bereich, der sich merkt, was jede Käuferin und jeder Käufer angeschaut hat (gespeicherte Suchen, Favoriten und Vergleiche), und dorthin zurückführt.
client: Coches.net (Adevinta)
sector: Automarktplatz
year: "TODO"
role: Senior UX/UI Designer
team: Product Owner, Entwicklungsteam und Analytics
duration: "TODO"
tools: [Adobe Analytics, Figma, Guerrilla-Tests, A/B-Tests]
cover: loop
featured: false
order: 5
tldr:
  - Auf Coches.net suchten Käufer, schauten ein Inserat an und gingen wieder. Ein Autokauf dauert Wochen mit vielen Vergleichen, aber die Plattform liess bei jedem Besuch bei null beginnen.
  - Ich gestaltete einen Entdeckungsbereich in der Hauptnavigation, der gespeicherte Suchen, Favoriten, Vergleiche und persönliche Empfehlungen an einem Ort bündelt, und validierte ihn mit Guerrilla-Tests und einem schrittweisen A/B-Test.
  - Die Zahl der Unique Users stieg um 210%, die durchschnittliche Sitzungsdauer von 50 auf 90 Sekunden und die Leads für Händler um 50%.
metrics:
  - value: "+210%"
    label: Unique Users
    method: A/B-Test gegen eine Kontrollgruppe in Adobe Analytics  # TODO: confirm section or platform level
  - value: "50 s → 90 s"
    label: durchschnittliche Sitzungsdauer (+80%)
    method: A/B-Test, Adobe Analytics
  - value: "+50%"
    label: generierte Leads
    method: Lead-Ereignisse an Händler, A/B-Test
  - value: "+35%"
    label: Nutzung der Favoriten
    method: Event-Tracking in Adobe Analytics
---

## Das Problem

Coches.net hatte viele Inserate und eine Suche, die genutzt wurde. Das Problem war nicht die Bedienbarkeit, sondern das **Wachstum**. Ein Autokauf braucht viele Besuche, doch jeder begann von vorn: suchen, Inserat öffnen, gehen. Entdecken, Vergleichen und Wiederkommen wurden nirgends unterstützt.

## Erst Daten, dann Design

Ich begann mit Adobe Analytics (Sitzungsdauer, Nutzung von Funktionen, Geräte, Seitenabläufe, Favoriten und Abbruchpunkte), um eine Ausgangslage des Verhaltens festzuhalten:

- **65%** der Nutzer schauten nur die beliebtesten Marken an.
- **80%** interagierten mehr mit personalisierten Inhalten.
- **60%** kehrten regelmässig zu gespeicherten Autos zurück.
- **85%** wollten Autos vergleichen.

Danach führte ich Interviews, Usability-Tests, Umfragen und einen Wettbewerbsvergleich durch, um das Warum zu verstehen. Das Muster war klar. Käufer wollten Kontinuität zwischen den Besuchen. Sie mussten vergleichen und wiederkommen, um sich sicher zu fühlen, und schätzten Plattformen, die sich an sie erinnern.

Damit stellte sich die Aufgabe neu:

> Kundenbindung war kein Suchproblem. Es war ein Gedächtnisproblem.

## Die Lösung

Ein neuer Entdeckungsbereich in der Hauptnavigation, der Folgendes zusammenführt:

- gespeicherte Suchen,
- Favoriten,
- persönliche Empfehlungen,
- Vergleichsfunktionen,
- passende Inhalte und Abkürzungen zum Profil.

Statt dass Käufer bei jedem Besuch neu suchen, macht die Plattform dort weiter, wo sie aufgehört haben. Das angestrebte Verhalten änderte sich von **suchen und gehen** zu **suchen, entdecken, vergleichen, wiederkommen und den Händler kontaktieren**.

## Wichtige Entscheidungen

**Ein Bereich, nicht noch eine Funktion.** Favoriten und gespeicherte Suchen gab es schon, aber verstreut. Gebündelt erhielten Käufer einen Ort, an den sie zurückkehren, und das Produkt eine Fläche für Empfehlungen.

**Modular, innerhalb der bestehenden Plattform.** Der Bereich musste in die bestehende Architektur und das UI-System passen, Mobile First, ohne Leistung oder SEO zu beeinträchtigen. Ich gestaltete ihn als Module, die sich einzeln ausliefern und messen liessen.

**Klein testen, dann skalieren.** Guerrilla-Tests mit fünf bis acht Personen pro Runde zur Validierung der Abläufe, danach ein A/B-Test, den ich mit dem Product Owner aufsetzte: Ziele, Stichprobengrösse, Erfolgskennzahlen und Phasen der Einführung. Eine Stichprobe von 5% reichte für statistische Sicherheit nicht aus, also erhöhten wir sie schrittweise.

## Ergebnisse

- **+210%** Unique Users
- Durchschnittliche Sitzungsdauer von **50 Sekunden auf 1 Minute 30** (+80%)
- **+50%** Leads für Händler
- **+35%** Nutzung der Favoriten, mit mehr wiederkehrenden Besuchen und mehr Interaktion mit Inhalten

## Warum es funktionierte

Menschen kehren nicht zu Plattformen zurück. Sie kehren zu ihrem Fortschritt zurück. Weil die Plattform Absichten, Vorlieben und Vergleiche speicherte, blieb der Schwung der Käufer erhalten, und genau dieser Schwung macht aus Stöbern einen Lead.
