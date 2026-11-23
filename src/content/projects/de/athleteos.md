---
title: "AthleteOS"
headline: "Vier Geräte, eine Trainingsantwort"
summary: "Ein persönliches Produkt, das ich für mein Ultradistanz-Training gestaltet und gebaut habe: Es bringt Suunto, Garmin, Fitbit und WHOOP in eine Quelle und macht aus den Daten eine erklärte Empfehlung pro Tag."
client: "Eigenes Projekt"
sector: "Gesundheits- und Sporttechnologie"
year: "2026"
role: "Product Designer und Entwickler"
team: "Allein"
duration: "Laufend"
tools: [Figma, Next.js, TypeScript, Supabase, Recharts, Claude Code]
cover: signals
featured: false
order: 6
kind: side-project
tldr:
  - "Als Ultradistanz-Sportler trage ich Suunto, Garmin, Fitbit und WHOOP. Jedes Gerät sieht einen Teil des Bildes, aber keines sagt mir, wie meine Form ist, wie ich heute trainieren soll oder welche Einheiten wirklich wirken."
  - "Ich habe AthleteOS gestaltet und gebaut: Es verbindet jedes Gerät zu einer Quelle und macht aus HRV, Schlaf, Trainingslast und Erholung einen täglichen Readiness-Score und eine Empfehlung, die sich selbst erklärt."
  - "Ein funktionierendes Produkt, das ich für mein eigenes Training nutze, Open Source auf GitHub, und ein praktischer Test, wie datenbasierte Empfehlungen verständlich und vertrauenswürdig werden."
metrics:
  - value: "1"
    label: "Quelle für jedes Gerät"
    method: "Suunto, Garmin, Fitbit, WHOOP und Strava in einem Datenmodell"
  - value: "0 bis 100"
    label: "täglicher Readiness-Score"
    method: "HRV, Schlaf, Last und Erholungstrend"
  - value: "9"
    label: "Regeln hinter jeder Empfehlung"
    method: "In Prioritätsreihenfolge geprüft, jede erklärt"
links:
  - label: "Code auf GitHub ansehen"
    href: https://github.com/JoanMarti/athleteos
---
## Warum ich es gestartet habe

Ultradistanz ist mein Hobby. Das Training für Rennen, die viele Stunden dauern, bedeutet lange Trainingsblöcke, in denen sich kleine Entscheide summieren: wann Gas geben, wann ruhen, welche Einheiten wiederholen. Ich wollte meine eigene Form besser verstehen und mit Absicht trainieren statt aus Gewohnheit.

Die Daten waren alle da, aber verstreut. **Suunto** zeichnet meine Trail- und Bergeinheiten mit präzisem GPS auf, **Garmin** meine Aktivitäten und die Body Battery, **Fitbit** meinen Schlaf und Ruhepuls und **WHOOP** meine Erholung und HRV. Vier Apps, vier Dashboards und Zahlen, die sich oft widersprechen. Keine beantwortete die Fragen, die ich wirklich hatte.

<dl class="glance">
  <div><dt>Wie ist meine Form?</dt><dd>Eine ehrliche Einschätzung von heute, aus allen Signalen statt aus der Meinung eines Geräts.</dd></div>
  <div><dt>Wie soll ich heute trainieren?</dt><dd>Eine Empfehlung mit dem Grund dahinter, keine Wand aus Diagrammen.</dd></div>
  <div><dt>Welches Training wirkt?</dt><dd>Geplant gegen gemacht, Last gegen Fitness, und wie die Erholung über Wochen reagiert.</dd></div>
</dl>

## Eine Quelle für jedes Gerät

Die erste Aufgabe war, alles zu verbinden und eine Sprache zu sprechen. Jeder Anbieter verbindet sich per OAuth, seine Daten werden in ein Modell übertragen, und die App zeigt klar, was verbunden ist und wann zuletzt synchronisiert wurde.

| Quelle | Was sie beiträgt |
| --- | --- |
| Suunto | Trail-, Berg- und Schwimmeinheiten mit präzisem GPS im Freien |
| Garmin | Aktivitäten, Body Battery, SpO₂ und HRV |
| Fitbit | Schlafphasen, HRV, Ruhepuls und Schritte |
| WHOOP | Recovery-Score, Schlaf und HRV (RMSSD) |
| Strava | Aktivitäten mit Leistung, Pace, Puls und Zonen |

![AthleteOS-Ansicht der Datenquellen mit Verbindungskarten für Strava, Fitbit und Suunto und Hinweisen zum Datenschutz](/projects/athleteos/connect.webp "Datenquellen: Jedes Gerät zeigt, was es beiträgt, seinen Verbindungsstatus und wie seine Daten behandelt werden. Tokens bleiben verschlüsselt, der Zugriff ist nur lesend.")

**Vertrauen beginnt in der Technik.** Nur lesender Zugriff, verschlüsselte Tokens und die Möglichkeit, jederzeit zu trennen, sind Teil der Erfahrung, nicht nur des Backends. Wenn ich nicht sehe, woher eine Zahl kommt, vertraue ich dem Rat nicht, der darauf beruht.

## Von Daten zu einer Antwort

Die Tagesansicht beantwortet die ersten zwei Fragen. Sie beginnt mit einem **Readiness-Score von 0 bis 100** und einer empfohlenen Einheit, alles andere folgt darunter.

![AthleteOS-Tagesansicht mit Readiness-Score 82, Aufschlüsselung und einer empfohlenen Schwelleneinheit](/projects/athleteos/today.webp "Heute: der Readiness-Score und seine Aufschlüsselung links, eine empfohlene Einheit rechts, mit dem Grund in einer Zeile.")

Der Score gewichtet vier Signale, und die Aufschlüsselung ist immer sichtbar, damit die Zahl nie wie eine Blackbox wirkt:

<ul class="pb-stats"><li><strong>35%</strong><span>HRV</span></li><li><strong>30%</strong><span>Schlaf</span></li><li><strong>25%</strong><span>Trainingslast (TSB)</span></li><li><strong>10%</strong><span>Erholungstrend</span></li></ul>

Die Empfehlung entsteht aus **neun Regeln in Prioritätsreihenfolge**. Sicherheitsregeln kommen zuerst: erzwungene Ruhe bei kritischer Ermüdung, aktive Erholung bei tiefer Readiness. Qualitätseinheiten erscheinen nur, wenn der Körper bereit ist. Jede Empfehlung nennt das Signal, das sie ausgelöst hat.

<details class="more">
<summary>Die neun Regeln in Prioritätsreihenfolge</summary>
<div class="more-body">

| Regel | Wann | Einheit |
| --- | --- | --- |
| 1 | Form unter −35 oder sechs harte Tage in Folge | Vollständige Ruhe |
| 2 | Readiness unter 35 | Aktive Erholung, Zone 1 |
| 3 | Freitag nach drei oder mehr harten Tagen | Bewusste Entlastung, Zone 2 |
| 4 | Zwei Wochen oder weniger bis zum Rennen | Tapering |
| 5 | Readiness unter 55 oder Form unter −15 | Aerobe Ausdauer, Zone 2 |
| 6 | Readiness 70 oder mehr mit Leistungsziel | Schwellenintervalle |
| 7 | Readiness 70 oder mehr mit Rennziel | VO₂max-Intervalle |
| 8 | Wochenende und Readiness 75 oder mehr | Lange Einheit, Zone 2 |
| 9 | Alles andere | Moderat aerob, Zone 2 |

Ein klares Regelwerk war ein bewusster erster Schritt: leicht zu erklären und zu prüfen, bevor maschinelles Lernen dazukommt.

</div>
</details>

## Welches Training wirkt

Die dritte Frage braucht Zeit, deshalb liegt sie eine Ebene tiefer. Die Wochenansicht vergleicht geplante und tatsächliche Last Tag für Tag; die Erholungsansicht zeigt, wie HRV, Schlaf und Ermüdung über 30 Tage reagieren.

![AthleteOS-Wochenansicht mit geplanter und tatsächlicher Last pro Tag, Wochenplan und Aufteilung nach Sportart](/projects/athleteos/week.webp "Diese Woche: geplante gegen tatsächliche Last, der Plan nach Einheitstyp und wie sich die Zeit auf die Sportarten verteilt.")

![AthleteOS-Erholungsansicht mit HRV-Trend über 30 Tage, Schlafphasen und Diagramm zu Ermüdung, Fitness und Form](/projects/athleteos/recovery.webp "Erholung: HRV gegen den 30-Tage-Schnitt, 14 Nächte Schlafphasen und Ermüdung, Fitness und Form (ATL, CTL, TSB) im Verlauf.")

Ermüdung (ATL), Fitness (CTL) und Form (TSB) neben HRV und Schlaf zu lesen, zeigt mir, ob ein Trainingsblock Fitness aufbaut oder nur ein Loch gräbt.

## Designentscheide

- **Entscheiden, was wegbleibt.** Die Herausforderung war nie, mehr Daten zu zeigen. Jede Ansicht beantwortet eine Frage und schiebt den Rest eine Ebene tiefer.
- **Jede Zahl erklären.** Scores kommen mit ihrer Aufschlüsselung und Empfehlungen mit ihrem Grund, denn Vertrauen hängt davon ab, nachprüfen zu können.
- **Stufen statt Einheitsgrösse.** Vier Athletenstufen, vom Freizeit- bis zum Profisport, jede mit eigener Trainingsverteilung und eigenen Ernährungszielen, damit dieselben Daten zu passendem Rat führen.
- **Ein kleines eigenes Designsystem.** Dark first, eine sportliche Display-Schrift mit einer Monospace-Schrift für Zahlen und ein Layout, das von der Seitenleiste am Desktop zur unteren Navigation auf dem Handy wechselt.

![AthleteOS-Ansicht Gesundheit und Erholung mit Erholungskomponenten und der Tagesempfehlung](/projects/athleteos/health.webp "Gesundheit und Erholung: die Komponenten hinter der Erholung, jede mit ihrem Quellgerät, und die Empfehlung des Tages.")

## Mit KI gestaltet und gebaut

Ich habe AthleteOS gestaltet und selbst mit Claude Code gebaut: eine App mit Next.js und TypeScript, Supabase, Diagrammen in Recharts und Integrationen für jeden Anbieter. Es zu bauen statt nur zu gestalten, liess mich die Ideen an echten Daten und echten Grenzen prüfen.

Die Screenshots zeigen Demodaten.

## Wie es weitergeht

- Die Empfehlungen über eine ganze Ultra-Saison testen und sehen, welche Einheiten meine Leistung wirklich verbessern.
- KI-generierte Wochenzusammenfassungen in einfacher Sprache, gestützt auf dieselben Regeln.
- Untersuchen, wie ich und andere Athleten auf Empfehlungen reagieren, denen wir nicht zustimmen. Das ist der eigentliche Test für Vertrauen.
