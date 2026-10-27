---
title: AthleteOS
headline: Die Daten einer Athletin aus sieben Wearables und Apps verständlich machen, gestaltet und entwickelt von A bis Z
summary: Ein eigenes Projekt, in dem ich eine Trainingsplattform gestaltet und programmiert habe, die Daten von Strava, WHOOP, Garmin und anderen zu einer täglichen Empfehlung zusammenführt.
client: Eigenes Projekt
sector: Gesundheit und Sporttechnologie
year: "2026"
role: Product Designer und Entwickler
team: Allein
duration: Laufend
tools: [Figma, Next.js, TypeScript, Supabase, Recharts, Claude]
cover: signals
featured: false
order: 6
kind: side-project
tldr:
  - Ausdauersportler sammeln Daten in vielen Apps (Strava, WHOOP, Garmin, Suunto, Wahoo, Intervals.icu und TrainingPeaks), aber keine beantwortet die eine Frage, die morgens zählt. Wie soll ich heute trainieren?
  - Ich habe eine Plattform gestaltet und gebaut, die Trainingsbelastung, HRV, Schlaf und Erholung zu einem täglichen Bereitschaftswert und einer einzigen Empfehlung verbindet, mit einem eigenen Designsystem, das zuerst für den Dark Mode gedacht ist.
  - Ein funktionierendes Produkt auf GitHub und eine praktische Möglichkeit zu testen, wie datenbasierte Empfehlungen verständlich und vertrauenswürdig werden.
metrics: []
links:
  - label: Code auf GitHub ansehen
    href: https://github.com/JoanMarti/athleteos
---

## Warum ich es gebaut habe

Ich wollte an dem Teil von KI- und Datenprodukten arbeiten, der mich als Designer am meisten interessiert: **komplexe Signale in eine Entscheidung verwandeln, der man vertraut**. Weil ich es selbst gebaut und nicht nur gestaltet habe, konnte ich diese Ideen an echten Daten und echten Einschränkungen prüfen.

## Die Designaufgabe

Wer eine Uhr, ein Erholungsarmband und eine Trainings-App nutzt, hat drei Dashboards und keine Antwort. Die Zahlen widersprechen sich oft. Die Aufgabe war nicht, mehr Daten zu zeigen. Es ging darum, **zu entscheiden, was wegfällt**, und den Rest zu erklären.

## Wichtige Entscheidungen

**Eine Empfehlung, erklärt.** Die Tagesansicht beginnt mit einem Bereitschaftswert von 0 bis 100 aus HRV, Schlaf, Trainingsbelastung und Erholungstrend und mit einer Empfehlung aus einem Regelwerk mit neun priorisierten Regeln. Jede Empfehlung zeigt, warum sie entstanden ist, und nennt das ausschlaggebende Signal. Ein klares regelbasiertes System war ein bewusster erster Schritt: leichter zu erklären und zu prüfen, bevor maschinelles Lernen dazukommt.

**Schrittweise mehr Tiefe.** Zuerst kommt die Tagesansicht. Wochenbelastung, Trends über 30 Tage (ATL, CTL und TSB), HRV und Schlafphasen liegen eine Ebene tiefer, für alle, die genauer hinschauen wollen.

**Stufen statt Einheitslösung.** Vier Stufen, vom Freizeitsport bis zum Profi, jede mit eigenen Trainingsprotokollen und Ernährungszielen. So führen dieselben Daten zu Ratschlägen, die zur Person passen.

**Vertrauen auch in der Technik.** OAuth für jeden Anbieter, verschlüsselte Tokens vor dem Speichern und ein klarer Verbindungsstatus mit Synchronisationszeiten. Man sieht, was verbunden ist und wann zuletzt aktualisiert wurde. Das gehört zum Erlebnis und nicht nur zum Backend.

**Ein kleines eigenes Designsystem.** CSS Custom Properties, zuerst für den Dark Mode gestaltet, eine sportliche Display-Schrift kombiniert mit einer Monospace-Schrift für Zahlen und ein responsives Layout, das auf dem Desktop eine Seitenleiste und auf dem Telefon eine Navigationsleiste unten zeigt.

## Wie es weitergeht

- Wöchentliche Zusammenfassungen in einfacher Sprache, von KI erstellt und auf denselben Regeln aufgebaut.
- Testen, wie Nutzer auf Empfehlungen reagieren, mit denen sie nicht einverstanden sind. Das ist der eigentliche Vertrauenstest.
