---
title: Crealogix Design Hub
headline: Ein Designsystem für viele Banken, mandantenfähig und als White Label in sieben Ländern
summary: Ein SaaS-fähiges Designsystem, mit dem Bankkunden einen gemeinsamen Kern nutzen und trotzdem ihre eigene Marke, ihre Regulierung und ihre regionalen Anforderungen behalten.
client: Crealogix
sector: Banking-Software (SaaS)
year: "TODO"
role: Senior UX/UI Designer, Designsysteme und Produktplattform
team: Innovationsteam mit Design und Entwicklung in der Schweiz, Deutschland, Österreich, Grossbritannien, Spanien, Saudi-Arabien und Singapur
duration: "TODO"
tools: [Figma, Storybook, Confluence, Design Tokens]
cover: tenants
featured: true
order: 3
tldr:
  - Crealogix entwickelt digitale Bankkanäle für Retail, Private, Corporate und Wealth Banking. Jedes Büro baute eigene Komponenten. Die Umsetzung wurde langsamer, und die Qualität schwankte von Kunde zu Kunde.
  - Ich definierte ein mandantenfähiges Modell mit gemeinsamem Kern, markenspezifischen Themes auf Basis von Tokens und Erweiterungen für jedes Bankensegment, dazu Dokumentation und Governance, die die Teams tatsächlich übernommen haben.
  - Die Übergabe wurde um 40% schneller, die Designerinnen und Designer waren zufriedener mit ihren Werkzeugen, und das System wurde zum Standard für jedes neue Produkt.
metrics:
  - value: "40%"
    label: weniger Zeit für die Designübergabe
    method: "TODO: Methode, zum Beispiel durchschnittliche Tage von fertigem Design bis zur Entwicklungsreife, vorher und nachher"
  - value: "+35%"
    label: Zufriedenheit im Designteam
    method: Quartalsumfrage unter Designerinnen und Designern aller Standorte
  - value: "7"
    label: Länder mit einem gemeinsamen Kern
    method: Schweiz, Deutschland, Österreich, Grossbritannien, Spanien, Saudi-Arabien und Singapur
---

## Das Problem

Mit dem Wachstum von Crealogix bauten die Büros in der Schweiz, in Deutschland, Österreich, Grossbritannien, Spanien, Saudi-Arabien und Singapur je eigene Komponenten. Das Ergebnis war absehbar: doppelte Komponenten, auseinanderlaufende Muster, eine Dokumentation, der niemand traute, und langsamere Anpassungen für jede neue Bank.

In Banking-Software ist Uneinheitlichkeit nicht nur ein UX-Problem. Sie **vervielfacht das Risiko**, denn Compliance, Barrierefreiheit und Vertrauen in die Marke hängen alle von verlässlicher Qualität ab.

Das System musste vier Dinge gleichzeitig leisten:

- einen **gemeinsamen Kern** für alle Bankprodukte,
- eine **White-Label-Ebene**, damit jeder Kunde seine Marke anwenden kann,
- eine **regionale Ebene** für Anforderungen in Europa und im Nahen Osten,
- und es musste so gut sein, dass Design und Entwicklung es **freiwillig** übernehmen.

## Was ich tat

Im Innovationsteam arbeitete ich an der Schnittstelle zwischen Produktdefinition und Systemarchitektur und verantwortete Design, Dokumentation und Befähigung rund um das System.

**Zuerst verstehen.** Interviews mit Design, Produktmanagement und Fachverantwortlichen aus allen Regionen, ein Audit der doppelten Komponenten und ein Vergleich mit Material, Carbon, Lightning und dem Bloomberg Terminal. Letzteres, weil dichte Finanzoberflächen anderen Regeln folgen. Vier Hürden zeigten sich:

1. Veraltete Dokumentation führte zu wenig Vertrauen und Nacharbeit.
2. Es gab keinen Spielraum für Anpassungen pro Kunde oder Region, also kopierten die Teams Komponenten.
3. Die Werkzeuge von Design und Entwicklung passten nicht zusammen, die Umsetzungen liefen auseinander.
4. Compliance und Barrierefreiheit wurden je nach Markt unterschiedlich umgesetzt.

## Wichtige Entscheidungen

**Anpassung über Tokens, nicht über Komponenten.** Das war die zentrale Entscheidung. Die Marke jeder Bank (Farbe, Typografie, Formen und Icon-Stil) lag in einem Theme aus überschriebenen Tokens auf denselben Komponenten. Niemand musste einen Button kopieren, damit er nach der eigenen Bank aussah. Themes sind weniger ausdrucksstark als eigene Komponenten, aber der Kern bleibt wartbar.

**Drei Ebenen mit klarer Verantwortung.**
- *Kern:* Grundlagen, Basiskomponenten und Regeln zur Barrierefreiheit, zentral verantwortet.
- *Theme:* Marke und Marktregeln wie Sprache, Unterstützung für Schreibrichtung von rechts nach links und rechtliche Inhalte, pro Kunde konfiguriert.
- *Erweiterungen:* Muster für jedes Segment, etwa KYC, Freigaben und Portfolioansichten für Retail, Private, Corporate und Wealth Banking, von den Produktteams beigesteuert und geprüft.

**Token-Namen, die zum Code passen.** Zuerst semantische Tokens, nie Rohwerte, und dieselben Namen in Figma und in den Code-Variablen. Dieses gemeinsame Vokabular beseitigte eine ganze Kategorie von Rückfragen bei der Übergabe.

**Dokumentation als Motor der Einführung.** Sie hatte zwei Bereiche. Die *Grundlagen des Systems* umfassten Prinzipien, Versionierung, Theming-Regeln, den Beitragsprozess und das Onboarding für Design und Entwicklung. Die *Komponenten* umfassten Einsatz, Varianten, Zustände, Do’s and Don’ts, Barrierefreiheit, eine Live-Demo in Storybook, Hinweise zur Umsetzung und den Versionsverlauf. Mit KI erstellte ich erste Entwürfe von Komponentenseiten, prüfte Benennungen, fasste Release Notes zusammen und fand Lücken (Abgleich der Figma-Eigenschaften mit der Dokumentationsvorlage). Vor der Veröffentlichung wurde alles geprüft.

## Einführung

Die Einführung war schrittweise und gemeinschaftlich statt verordnet: Workshops und Onboarding-Sessions für jedes Büro, ein fester Rhythmus für Triage und Releases und laufendes Feedback von Teams, die das System in echten Projekten nutzten. Die Nutzung wurde über die Analytics der Figma-Bibliothek, Messungen der Übergabezeit und Zufriedenheitsumfragen verfolgt.

## Was ich gelernt habe

- Mandantenfähige Systeme funktionieren, wenn die Anpassung über Tokens läuft. Anpassung über Komponenten endet immer in Kopien.
- Governance muss schlank, aber klar sein, sonst kehren die Teams zu lokalen Kopien zurück.
- Dokumentation ist der wichtigste Hebel für die Einführung. Ist sie veraltet, bricht das Vertrauen schnell ein.

**Beim nächsten Mal** würde ich früher in automatisierte Parität zwischen Figma und Code investieren (Linting und Pipelines zur Token-Synchronisation) und in Muster für Wealth und Corporate Banking.
