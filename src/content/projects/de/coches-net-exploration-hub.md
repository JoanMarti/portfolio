---
title: Coches.net Entdeckungsbereich
headline: Vom einmaligen Besuch zum Stammkunden
summary: Ein persönlicher Bereich, der sich merkt, was jede Käuferin und jeder Käufer angeschaut hat (gespeicherte Suchen, Favoriten und Vergleiche), und dorthin zurückführt.
client: Coches.net (Adevinta)
sector: Automarktplatz
year: "2017 bis 2019"
role: "Senior UI/UX Designer, User Growth and Retention"
team: Product Owner, Entwicklungsteam und Analytics
duration: "2 Jahre"
tools: [Adobe Analytics, Figma, Guerrilla-Tests, A/B-Tests]
cover: loop
featured: true
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

Coches.net war ein datengetriebenes Unternehmen: Produkt, Marketing und Engineering entschieden anhand von Zahlen, und Design musste sich auf dieselbe Weise behaupten. Ich arbeitete jede Woche in Adobe Analytics, baute eigene Auswertungen zu Seitenflüssen, Einstiegen und Gerätesegmenten, um die Muster zu finden, für die sich Gestaltung lohnt, und legte die Erfolgskennzahl mit dem Produkt fest, bevor es einen einzigen Screen gab.

![Adobe-Analytics-Workspace mit Top-Seiten, Besuchen und Unique Visitors](/projects/coches-net/adobe-analytics.webp "Ein typischer Workspace in Adobe Analytics: Top-Seiten, Besuche und Unique Visitors, nach Gerät segmentiert. Beispielansicht mit Beispieldaten.")

Danach führte ich Interviews, Usability-Tests, Umfragen und einen Wettbewerbsvergleich durch, um das Warum zu verstehen. Das Muster war klar. Käufer wollten Kontinuität zwischen den Besuchen. Sie mussten vergleichen und wiederkommen, um sich sicher zu fühlen, und schätzten Plattformen, die sich an sie erinnern.

Damit stellte sich die Aufgabe neu:

> Kundenbindung war kein Suchproblem. Es war ein Gedächtnisproblem.

## Erster Schritt: eine Startseite, die lenkt

Vor dem Hub musste die Startseite Menschen besser an den richtigen Ort bringen. Die meisten Besuche kamen über Suchmaschinen und landeten auf einer allgemeinen Seite, die alle zum selben Suchformular schickte.

Gemeinsam mit dem SEO-Team gestaltete ich die erste Version der Startseite als Raster grosser Einstiege, einer für jede Art zu kaufen: Gebrauchtwagen, Neuwagen, Km 0, erweiterte Garantie, Motorräder, Nutzfahrzeuge und Testberichte. Jede Kachel entsprach einer Suchabsicht, die Menschen bereits hatten. So erreichte der Suchtraffic die Inserate in weniger Schritten, und Nutzer gelangten direkt in den passenden Bereich, statt bei einer leeren Suche zu beginnen.

Das gab auch der Analyse ein klareres Signal: Welchen Bereich jemand wählte, wurde zum ersten Kontext, auf dem der Hub später aufbauen konnte.

![Die erste Version der neuen Coches.net-Startseite auf einem Laptop mit grossen Einstiegen nach Kaufabsicht](/projects/coches-net/home-v1.webp "Die erste Version der neuen Startseite: ein grosser Einstieg pro Kaufabsicht, mit SEO gestaltet, damit Suchtraffic die Inserate erreicht und Nutzer direkt in den richtigen Bereich gelangen.")

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
