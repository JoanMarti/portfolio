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

<div class="compare compare--wide">
  <figure>
    <img src="/projects/coches-net/home-v1.webp" alt="Die erste Version der neuen Coches.net-Startseite auf einem Laptop, mit grossen Einstiegen zu Gebraucht-, Neu- und Km-0-Fahrzeugen" />
    <p class="compare-note">Die erste Version der neuen Startseite: grosse, bildstarke Einstiege in jeden Bereich, gemeinsam mit SEO erarbeitet, damit Suchtraffic die Inserate erreicht und Nutzer in den richtigen Bereich geführt werden.</p>
  </figure>
  <figure>
    <img src="/projects/coches-net/adobe-analytics.webp" alt="Adobe-Analytics-Workspace mit Top-Seiten, Besuchen und Unique Visitors" />
    <p class="compare-note">Arbeit in Adobe Analytics: Seitenflüsse, Einstiege und Segmente nach Gerät zeigten, wo Nutzer abspringen und welche Muster sich zu gestalten lohnen. Beispielansicht mit Beispieldaten.</p>
  </figure>
</div>

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
