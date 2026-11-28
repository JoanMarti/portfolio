---
title: Julius Bär Onboarding
headline: Digitales Onboarding mit persönlicher Note
summary: Ein Proof of Concept für ein adaptives Onboarding vermögender Privatkunden, mit Kunden und Beratern validiert und von der Geschäftsleitung für einen Pilot freigegeben.
client: Julius Bär (über IBM iX Schweiz)
sector: Private Banking
year: "2022"
role: "Senior UX/UI Designer, IBM iX"
team: Interdisziplinäres Innovationsteam mit vier Personen
duration: "5 Monate"
tools: [Figma, Interviewauswertung, Journey Mapping, Moderierte Usability-Tests]
cover: branching
featured: true
order: 4
tldr:
  - Das Onboarding bei Julius Bär war auf digitale und persönliche Kanäle verteilt. Für Kunden, die Diskretion und eine persönliche Beziehung erwarten, passte der erste digitale Eindruck nicht zur Marke.
  - Ich leitete die Nutzerforschung, die Logik des adaptiven Ablaufs und die High-Fidelity-Prototypen für einen Proof of Concept, der das Onboarding an jede Kundin und jeden Kunden anpasst und den Berater durchgehend sichtbar hält.
  - Der Proof of Concept wurde mit Kunden und Beratern validiert, von der Geschäftsleitung freigegeben und in einen Pilot mit A/B-Tests und festgelegten KPIs überführt.
metrics:
  - value: "Freigegeben"
    label: von der Geschäftsleitung für einen Pilot
    method: Prüfung des Proof of Concept, der Forschungsergebnisse und der Risikobewertung durch die Geschäftsleitung
  - value: "5"
    label: KPIs für den Pilot festgelegt
    method: Abschlussquote, Zeit bis zur Kontoeröffnung, Vertrauen der Kunden, Engagement der Berater und Abbrüche
---

## Das Problem

Private Banking lebt von Vertrauen und persönlichen Beziehungen, unter strengen Regeln zu KYC, Geldwäschereibekämpfung und Datenschutz. Das Onboarding bei Julius Bär spiegelte das nicht wider. Kundinnen und Kunden erlebten:

- wiederholte Dateneingaben,
- unklare nächste Schritte,
- wenig Personalisierung,
- einen Berater, der kaum sichtbar war,
- Abbrüche bei der Identitätsprüfung.

Das Risiko war strategisch, nicht kosmetisch. **Digitale Reibung untergräbt Vertrauen**, und im Private Banking ist Vertrauen das Produkt.

Die Frage, die wir beantworten mussten:

> Lässt sich das Onboarding modernisieren, ohne Vertrauen, Compliance oder die Beziehung zum Berater zu gefährden?

## Was ich tat

Ich kam als Lead UX/UI Designer zu IBM iX Schweiz für das Innovationsprogramm von Julius Bär. Es war ein Validierungsprojekt und kein Redesign. Unsere Aufgabe war, das Risiko einer grossen Investition zu senken, bevor sie getätigt wurde.

**Forschung mit den Menschen, auf die es ankommt.** Vermögende Privatkunden, von Beratern empfohlene Kunden, wiederkehrende Investoren, Kundenberater und interne Compliance-Verantwortliche. Mit KI habe ich Interviews zusammengefasst und Muster gruppiert, besonders die emotionale Sprache rund um Vertrauen und Unsicherheit. Wegen des sensiblen Kontexts habe ich jedes Ergebnis von Hand geprüft.

Was wir gelernt haben:

- Kunden setzen Reibung mit weniger Vertrauen gleich.
- Personalisierung verstärkt das Gefühl von Exklusivität.
- Wenn der Berater im Ablauf sichtbar ist, fühlen sich Kunden sicher.
- KYC-Schritte verunsichern, wenn nicht klar ist, warum etwas gefragt wird.
- Vor allem wollen Kunden wissen, was als Nächstes passiert.

## Auf der Suche nach Mustern

Bevor ich etwas zeichnete, sammelte ich Muster für Onboarding und Konfiguration aus Apps ausserhalb des Bankings: Versicherung, Fitness, Events, Immobilien und Wohlbefinden. Bei jedem notierte ich, was es für uns lösen könnte. Sie liessen sich in vier Gruppen ordnen.

<div class="patterns" role="group" aria-label="Für das Onboarding gesammelte Muster"><div><p class="pt-h">Fragen</p><ul><li>Gesprächsartige Fragen, um die Kundschaft kennenzulernen</li><li>Blasen, um Interessengebiete zu wählen, mit mehr Details per Tippen</li></ul></div><div><p class="pt-h">Entdecken</p><ul><li>Hauptkategorien und ihre Dienstleistungen in einer Ansicht</li><li>Leicht zu überblicken und in einen Bereich zu vertiefen</li><li>Durch die gewählten Dienstleistungen wischen und die Details öffnen</li></ul></div><div><p class="pt-h">Entscheiden</p><ul><li>Jede Dienstleistung in einem «Warenkorb» konfigurieren</li><li>Diagramm-Vorschauen in einem Modal, im Vollbild nach der Wahl</li><li>Ein klares Wertversprechen für jede Dienstleistung</li></ul></div><div><p class="pt-h">Fortschritt</p><ul><li>Ein einfaches Zeichen, wie weit die Kundschaft ist</li><li>Fortschritt zusammen mit einer Vorschau des Warenkorbs</li><li>Ein Erfolgszustand am Ende</li></ul></div></div>

## Die Reise strukturieren

Die Muster formten einen einfachen Inhaltsfluss, vom ersten Interesse bis zur Kundin oder zum Kunden in spe.

<ol class="phases"><li><strong>Interessengebiete</strong><span>Lebensziele, zentrale Fragen und Hauptdienstleistungen, die neugierig machen</span></li><li><strong>Details entdecken</strong><span>Die konkreten Dienstleistungen, Produkte oder Ziele dahinter</span></li><li><strong>Vorschlag</strong><span>Ein Produkt, das die Kundschaft konfigurieren kann</span></li><li><strong>Registrierung</strong><span>Aus Interesse wird ein Lead</span></li></ol>

Darunter skizzierte ich drei Einstiege. Man konnte bei einer Dienstleistung, einer Frage oder einem Lebensmoment beginnen, und jeder Einstieg hatte dieselben Ebenen bis zu den Details.

<div class="ia3" role="group" aria-label="Drei Einstiege in dieselbe Struktur"><div class="ia3-col"><p class="ia3-h">Dienstleistungen</p><p class="ia3-l">Kategorie</p><div class="ia3-c cat"><span>Anlegen</span><span>Vermögensplanung</span></div><p class="ia3-l">Dienstleistung</p><div class="ia3-c svc"><span>Beratungsmandat</span><span>Vermögensverwaltungsmandat</span><span>Strukturierte Produkte</span><span>Wertschriftenhandel und Beratung</span><span>Devisen und Edelmetalle</span></div><p class="ia3-l">Details</p><div class="ia3-c det"><span>Vermögensverwaltungsmandat: Mandate und Strategien</span></div></div><div class="ia3-col"><p class="ia3-h">Fragen</p><p class="ia3-l">Kategorie</p><div class="ia3-c cat"><span>Zentrale Fragen der Kundschaft</span></div><p class="ia3-l">Dienstleistung</p><div class="ia3-c svc"><span>Die Dienstleistungen, die jede beantworten</span></div><p class="ia3-l">Details</p><div class="ia3-c det"><span>Die Details zu jeder Dienstleistung</span></div></div><div class="ia3-col"><p class="ia3-h">Emotionen</p><p class="ia3-l">Kategorie</p><div class="ia3-c cat"><span>Familie</span><span>Nachfolge</span></div><p class="ia3-l">Dienstleistung</p><div class="ia3-c svc"><span>Ein Einstieg für jede Familiensituation</span></div><p class="ia3-l">Details</p><div class="ia3-c det"><span>Die Details zu jeder Dienstleistung</span></div></div></div>

Daraus entstand das Schritt-für-Schritt-Konzept. Die Kundschaft wählt zuerst alle Ziele und Momente, kann die Details jedes einzelnen lesen und sieht dann alles in einer Warenkorbansicht, wo sie es verfeinert oder weitere Dienstleistungen hinzufügt, bevor sie weitergeht.

## Wichtige Entscheidungen

**Viele Wege, eine Struktur.** Statt eines linearen Ablaufs passt sich das Onboarding an die Empfehlungsquelle, das Kundenprofil, eine bestehende Beziehung und die Anlageerfahrung an. Alle Wege teilen dasselbe Gerüst, damit Compliance eine Struktur prüft und nicht ein Dutzend Abläufe. Wir haben die Wege und Sonderfälle vor dem Prototyping modelliert, um überflüssige Fragen und mögliche Abbruchpunkte zu finden.

**Der Berater ist Teil der Oberfläche.** Er wird früh im Ablauf vorgestellt und bleibt als Kontakt sichtbar. Ziel war nicht, die Beziehung durch Technik zu ersetzen, sondern sie im digitalen Erlebnis präsent zu machen.

**Compliance erklären statt verstecken.** Jeder KYC-Schritt sagt, warum er nötig ist und was danach kommt, und der Fortschritt ist immer sichtbar. Transparenz machte aus regulatorischer Reibung einen Moment der Beruhigung.

**Visuelle Zurückhaltung.** Eine reduzierte Oberfläche, dezente Mikrointeraktionen und keine Effekthascherei. Im Private Banking ist Ruhe das Zeichen von Qualität.

## Der Prototyp

Die ersten Screens fragen, bevor sie verkaufen. Drei kurze Fragen zu Zielen, Interessen und Themen zum Vertiefen, mit sichtbarem Fortschritt und der Möglichkeit zu überspringen.

![Drei Onboarding-Screens: Lebensziele mit Fotos zur Auswahl, Interessengebiete als Icon-Blasen und Themen zum Vertiefen wie Derivate, Währungen und nachhaltiges Anlegen als Blasen.](/projects/julius-baer-onboarding/jb-questions.webp "Ziele, Interessen und Themen zum Vertiefen. Die Kundschaft wählt, was zählt, und füllt nie ein Formular aus.")

Die Antworten prägen, was folgt. Die Startseite zeigt die gewählten Ziele und schlägt Dienstleistungen vor, die man mit der Kundenberaterin oder dem Kundenberater besprechen kann. Bei der Eröffnung eines Säule-3a-Kontos sieht die Kundschaft eine empfohlene Strategie auf Basis dieser Antworten, kann eine andere wählen und hat unten auf dem Screen eine Person, die sie fragen kann.

![Startseite mit den gewählten Lebenszielen und drei vorgeschlagenen Dienstleistungen: strukturierte Produkte, Vermögensplanung und Vermögensverwaltungsmandate. Zwei Screens zur Anlagestrategie für ein Säule-3a-Konto mit der empfohlenen Strategie Income 35%, einer Bestätigung und einer Option für eine kurze Frage mit Foto eines Beraters.](/projects/julius-baer-onboarding/jb-suggestions.webp "Vorschläge auf Basis der Ziele, eine empfohlene Strategie, die sich ändern lässt, und eine Beratungsperson nur einen Tipp entfernt.")

## Validierung

High-Fidelity-Prototypen für Desktop und Mobile, getestet in moderierten Sessions mit vermögenden Privatkunden, Beratern und internen Verantwortlichen. Wir beobachteten die Sicherheit beim Abschliessen, Vertrauenssignale, die Verständlichkeit des Ablaufs, Momente des Zögerns und wie die Berater ihre Rolle darin erlebten.

## Ergebnis

- Der Proof of Concept wurde mit Kunden und Beratern validiert.
- **Die Geschäftsleitung gab einen Pilot** mit A/B-Tests frei.
- Für die Einführung wurden KPIs festgelegt: Abschlussquote, Zeit bis zur Kontoeröffnung, Vertrauen der Kunden, Engagement der Berater und weniger Abbrüche.

## Was ich gelernt habe

Im Private Banking ist UX Vertrauensarbeit. Innovation muss mit Regulierung zusammengehen, und eine Freigabe durch die Geschäftsleitung braucht eine klare Geschichte, Belege und eine ehrliche Einschätzung der Risiken, nicht nur gute Screens.
