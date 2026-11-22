---
title: Finora
headline: "Deine Schweizer Finanzen auf einen Blick"
summary: "Eine Vermögens-App nur mit Leserechten für Menschen in der Schweiz, die Bankkonten, Anlagen und Säule 3a zusammenführt. Ich habe sie allein von null bis zu einem Android-1.0-Build gebracht: Produktstrategie, Datenmodell, Design und Code."
client: Finora (own product)
sector: "Fintech, persönliche Finanzen"
year: "2026"
role: "Gründer, Product Designer und Entwickler"
team: "Allein, Design und Umsetzung mit Claude Code"
duration: "Sept. bis Okt. 2026, 31 Sprints"
tools: [Figma, Flutter, Riverpod, Claude Code, GitHub Actions]
cover: wealth
featured: true
order: 2.5
kind: side-project
discipline: [product, visual]
tldr:
  - "In der Schweiz liegt das Geld bei mehreren Banken, der Pensionskasse, der Säule 3a und der Krankenkasse, jede mit eigener App. Kein Schweizer Produkt führt sie zusammen."
  - "Produktstrategie, Businessplan, Datenmodell, Design und Code, allein: ein Aggregator mit reinen Leserechten für Schweizer Haushalte, finanziert durch Cross-Selling mit Einwilligung und ein Freemium-Abo."
  - "Android 1.0 und eine Live-Demo im Web in vier Sprachen nach 31 Sprints, 219 automatisierte Tests und ein Businessplan mit rund CHF 10.60 pro Person und Jahr, bereit für einen Pilot."
metrics:
  - value: "0 → 1"
    label: "von der Idee zum Android-1.0-Build"
    method: "Produkt, Design und Code von mir, September bis Oktober 2026"
  - value: "31"
    label: "Sprints, jeder auslieferbar"
    method: "Gemergte Pull Requests auf GitHub, jeder mit eigenem Umfang"
  - value: "219"
    label: "automatisierte Tests"
    method: "Unit-, Widget-, Vertrags- und Übersetzungstests in der CI bei jeder Änderung"
  - value: "4"
    label: "Sprachen: EN, DE, FR, IT"
    method: "Alle Texte liegen in Übersetzungsdateien, die ein Test prüft"
links:
  - label: "Live-Demo öffnen"
    href: https://joanmarti.github.io/finora-mvp/
  - label: "Quellcode auf GitHub"
    href: https://github.com/JoanMarti/finora-mvp
---

## Auf einen Blick

<dl class="glance">
  <div><dt>Die Wette</dt><dd>Open Banking kommt mit SIX bLink und OpenWealth in die Schweiz. Wer daraus eine ruhige, vertrauenswürdige Übersicht macht, gewinnt eine tägliche Gewohnheit.</dd></div>
  <div><dt>Meine Rolle</dt><dd>Alles von null: Produktthese, Datenmodell, Informationsarchitektur, UI, Geschäftsmodell und der Code selbst.</dd></div>
  <div><dt>Das Ergebnis</dt><dd>Ein Produkt, das man heute installieren kann: Android 1.0, eine Live-Demo im Web und eine Architektur, die von Demodaten auf echte Bankverbindungen umschalten kann.</dd></div>
</dl>

## Das Problem

Ein typischer Haushalt in der Schweiz verteilt sein Geld auf zwei oder drei Banken, eine Anlageplattform, eine Pensionskasse und ein oder mehrere Säule-3a-Konten. Jeder Anbieter zeigt seinen Ausschnitt. Niemand zeigt das Ganze, dabei gehen die eigentlichen Fragen quer durch alle: Wie viel habe ich wirklich, spare ich genug, reicht meine Rente, und kann ich mir ein Eigenheim leisten?

Internationale Aggregatoren gibt es, aber sie sprechen nicht Schweizerisch: keine Säule 3a, keine AHV, keine kantonalen Steuern, keine Beträge im Format CHF 1’248.40. Und Vertrauen ist zerbrechlich. Niemand gibt einer App Bankzugriff, die so aussieht, als könnte sie Geld bewegen oder Daten verkaufen.

> Die Chance war nicht noch eine Budget-App. Es war eine ruhige, schweizerische Übersicht mit reinen Leserechten über alles, was jemand besitzt, mit klaren nächsten Schritten.

## Das Ziel: der fehlende Schweizer Aggregator

Heute braucht ein Haushalt in der Schweiz eine App pro Bank, eine weitere für den Broker, ein Portal für die Pensionskasse, eine für die Säule 3a und noch eine für die Krankenkasse. Jede App beantwortet Fragen zu ihrem eigenen Produkt. Keine beantwortet Fragen zum Haushalt, und kein Schweizer Produkt führt sie zusammen.

<dl class="glance">
  <div><dt>Heute</dt><dd>Eine App oder ein Portal pro Anbieter, jeweils mit eigenem Login, eigenen Zahlen und nur einem Ausschnitt.</dd></div>
  <div><dt>Mit Finora</dt><dd>Alle Konten in einer Ansicht mit reinen Leserechten, in CHF, mit Schweizer Regeln für Säule 3a, AHV, Steuern und Wohnen.</dd></div>
  <div><dt>Warum das zählt</dt><dd>Die Übersicht schafft die Gewohnheit. Die Gewohnheit erlaubt Finora, Sparpotenzial zu zeigen, auf das kein einzelner Anbieter hinweisen würde.</dd></div>
</dl>

Ich habe drei Produktziele festgelegt, in dieser Reihenfolge:

1. **Zusammenführen.** Jede Bank und jeden Vermögensanbieter über SIX bLink und OpenWealth verbinden, dazu manuelle Werte wie Immobilien.
2. **Erklären.** Aus der Übersicht Antworten machen: Geht es mir gut, kann ich ein Eigenheim kaufen, reicht meine Rente?
3. **Handeln.** Wenn die Daten zeigen, dass jemand zu viel bezahlt, ein besseres Produkt vermitteln, nur mit Einwilligung.

## Produktprinzipien

Ich habe sie aufgeschrieben, bevor ich einen einzigen Screen gestaltet habe, und jeder spätere Entscheid wurde an ihnen gemessen:

- **Nur lesen, by design.** Finora kann nie Geld bewegen. Jede Zahlung oder jeder Handel führt zurück zur eigenen Bank. Das ist die Grundlage des Vertrauens, deshalb steht es auf dem ersten Screen.
- **Nutzen vor Profilierung.** Das Onboarding fragt nur, was für die Übersicht nötig ist. Einkommen, Ziele und Risiko kommen später, wenn das Produkt erklären kann, wozu.
- **Vermögen vor Konten.** Der erste Tab beantwortet, wie viel ich habe und wohin es sich entwickelt. Banken und Transaktionen liegen eine Ebene tiefer.
- **Erkenntnis vor Cross-Selling.** Ein Partnerangebot erscheint nur nach einem erklärbaren Signal in den eigenen Daten und nur mit ausdrücklicher Einwilligung.
- **Bildung, keine Beratung.** Anlagethemen dienen der Orientierung und sagen klar, dass sie keine persönliche Empfehlung sind.

## Ein Datenmodell, das Banken vergleichbar macht

Das schwierigste Designproblem war unsichtbar: die Daten. Jede Bank beschreibt Konten, Salden und Transaktionen anders, und einem Dashboard vertraut man nur, wenn sich seine Zahlen nie widersprechen. Deshalb habe ich zuerst die Datenebene gestaltet.

<figure class="arch" aria-label="Diagramm, wie Finora Bankdaten in eine Ansicht übersetzt">
  <p class="arch-badge">Viele Quellen, eine Wahrheit</p>
  <div class="arch-layer"><p class="arch-title">Quellen</p><div class="arch-cols">
    <div><strong>Banken</strong><ul><li>SIX bLink</li><li>Privat- und Sparkonten</li></ul></div>
    <div><strong>Vermögen</strong><ul><li>OpenWealth</li><li>Depots und Säule 3a</li></ul></div>
    <div><strong>Manuell</strong><ul><li>Immobilien, Autos</li><li>Weitere Werte</li></ul></div>
  </div></div>
  <p class="arch-arrow"><span aria-hidden="true">↓</span>Adapter vereinheitlichen jede Antwort</p>
  <div class="arch-layer arch-core"><p class="arch-title">Ein Finanzmodell</p><p class="arch-sub">Institute · Konten · Transaktionen · Geld in Rappen · Datenqualität</p></div>
  <p class="arch-arrow"><span aria-hidden="true">↓</span>Berechnet, nie gespeichert</p>
  <div class="arch-layer"><p class="arch-title">Die App</p><p class="arch-sub">Nettovermögen, Aufteilung, Verlauf, Gesundheitswert und Hinweise, alles aus denselben Konten berechnet</p></div>
  <figcaption>Die Oberfläche spricht nie direkt mit einer Bank. Der Wechsel von Demodaten zu echten bLink- oder OpenWealth-Verbindungen ändert eine Stelle, nicht die Screens.</figcaption>
</figure>

Vier Entscheide halten die Zahlen ehrlich:

- **Geld ist exakt.** Beträge werden als ganze Rappen gespeichert, nie als Dezimalzahlen, und erst in der Oberfläche formatiert.
- **Summen werden berechnet, nie gespeichert.** Nettovermögen und Aufteilung entstehen jedes Mal aus den Konten, also kann das Dashboard der Kontenliste nie widersprechen.
- **Institut und Konto sind getrennt.** Eine Bank kann fünf Konten führen, ohne ihren Verbindungsstatus zu duplizieren.
- **Datenqualität ist Teil des Modells.** Jede Verbindung ist aktuell, veraltet, braucht eine Aktion oder ist manuell, und derselbe Status erscheint im Dashboard, bei der Bank und im Profil.

## Ein Onboarding, das Vertrauen verdient

<ol class="flow-steps" style="--start:0"><li><img src="/projects/finora/welcome.webp" alt="Willkommensscreen mit dem Versprechen einer klaren Übersicht, nur Leserechte und volle Kontrolle" loading="lazy" /><p><strong>Zuerst das Versprechen.</strong> Nur lesen und „du behältst die Kontrolle“ steht ganz oben, vor jeder Registrierung.</p></li><li><img src="/projects/finora/about-you.webp" alt="Formular Über dich mit Jahrgang, Kanton, Erwerbs- und Familienstand" loading="lazy" /><p><strong>Nur was die Zahlen verändert.</strong> Kanton, Arbeit und Familie bestimmen Steuern, Vorsorgeregeln und Schätzungen. Alles bleibt auf dem Gerät.</p></li></ol>

Der Ablauf passt sich jeder Person an: Die gewählten Banken und Produkte sind genau das, was das Dashboard zeigt, und man kann alles mit Demodaten erkunden, bevor man ein Konto erstellt.

## Ein Dashboard mit klarer Hierarchie

Am Dashboard scheitern die meisten Finanz-Apps: zwanzig Widgets mit gleichem Gewicht. Ich habe es als Lesereihenfolge gestaltet, von der Antwort zu den Details.

![Finora-Dashboard auf dem Desktop mit Gesamtvermögen, Entwicklung, Finanzgesundheit und anstehenden Rechnungen](/projects/finora/desktop-dashboard.webp "Desktop: zuerst das Gesamtvermögen, dann seine Entwicklung, dann der Gesundheitswert und was ansteht. Die Navigation gliedert das Produkt in Übersicht, Planen, Sparen und Du.")

1. **Wie viel habe ich?** Das Nettovermögen, darunter Bargeld, Anlagen, Säule 3a und Schulden in einer Zeile.
2. **Wohin entwickelt es sich?** Die Vermögensentwicklung über 6, 12 oder 24 Monate.
3. **Geht es mir gut?** Ein Gesundheitswert von 100, mit einem nächsten Schritt.
4. **Was muss ich tun?** Anstehende Rechnungen und Fristen, dann die Planungswerkzeuge.

Dieselbe Hierarchie gilt auf Smartphone, Tablet und Desktop, mit eigenen Layouts statt eines gestreckten Screens.

<ol class="flow-steps" style="--start:2"><li><img src="/projects/finora/dashboard.webp" alt="Mobiles Dashboard mit Gesamtvermögen, Schnellzugriffen, Gesundheitswert und Entwicklung" loading="lazy" /><p><strong>Dieselbe Reihenfolge auf Mobile.</strong> Antwort, Entwicklung, Gesundheit und Schnellzugriffe, alles mit einem Daumen erreichbar.</p></li><li><img src="/projects/finora/health.webp" alt="Finanzgesundheit mit Wert 91 von 100 und Bereichen wie Notreserve und Sparquote" loading="lazy" /><p><strong>Ein Wert, mit dem man handeln kann.</strong> Sechs Bereiche, jeder in klarer Sprache erklärt und mit dem Screen verknüpft, der ihn verbessert.</p></li></ol>

## Finanzgesundheit erklärbar machen

Ein einzelner Wert nützt nur, wenn man ihn versteht und verändern kann. Der Gesundheitscheck kombiniert sechs Bereiche, gewichtet danach, wie wichtig sie für einen Haushalt in der Schweiz sind:

| Bereich | Gewicht | Was er betrachtet |
| --- | --- | --- |
| Notreserve | 20% | Wie viele Monate Ausgaben das Ersparte deckt |
| Sparquote | 20% | Anteil des Einkommens, der jeden Monat bleibt |
| Vorsorge | 20% | Erwartetes Einkommen aus AHV, Pensionskasse und Säule 3a |
| Säule 3a | 15% | Einzahlungen im Verhältnis zum diesjährigen Maximum |
| Wohnen | 15% | Tragbarkeit der heutigen oder geplanten Wohnsituation |
| Fixkosten | 10% | Anteil des Einkommens für feste Rechnungen |

Fehlen Finora die Daten für einen Bereich, sagt die App das und schlägt vor, was zu ergänzen wäre, statt zu raten. Der Wert ist ein Gesprächsanfang, kein Urteil.

## Konten, Ausgaben und Schweizer Vorsorgeplanung

<ol class="flow-steps" style="--start:4"><li><img src="/projects/finora/accounts.webp" alt="Kontenübersicht mit Gesamtsumme, Filtern und verbundenen Instituten mit Synchronisationsstatus" loading="lazy" /><p><strong>Jedes Institut, klar geordnet.</strong> Summen, Filter und ein sichtbarer Synchronisationsstatus für jede Verbindung.</p></li><li><img src="/projects/finora/account-detail.webp" alt="Kontodetail mit Saldoverlauf und einem passenden Spartipp" loading="lazy" /><p><strong>Erkenntnis pro Konto.</strong> Saldoverlauf nach Zeitraum und ein Spar-Hinweis nur, wenn die Daten ihn stützen.</p></li><li><img src="/projects/finora/analysis.webp" alt="Ausgabenanalyse mit Sparquote, Fixkostenanteil sowie Einnahmen und Ausgaben" loading="lazy" /><p><strong>Ausgaben, Monat für Monat.</strong> Sparquote, Fixkosten und Cashflow, ohne manuelles Kategorisieren.</p></li><li><img src="/projects/finora/home-buying.webp" alt="Tragbarkeitsrechner für Wohneigentum mit dem höchsten tragbaren Preis" loading="lazy" /><p><strong>Kann ich mir ein Eigenheim leisten?</strong> Ein Rechner nach Schweizer Regeln: Eigenmittel, Tragbarkeit und Vorbezug aus der Pensionskasse.</p></li></ol>

In der Planung wird Finora schweizerisch: eine Vorsorgeübersicht über drei Säulen (AHV inklusive 13. Rente, Pensionskasse und Säule 3a), eine Steuerübersicht pro Jahr mit CSV-Export, ein Finanzkalender mit Schweizer Fristen und Rechner für Wohneigentum und Steuerersparnis.

## Cross-Selling aus den eigenen Daten

Alle Konten auf einmal zu sehen, ist auch der geschäftliche Vorteil. Finora kann ein Angebot mit der eigenen Zahl der Person begründen, „du zahlst CHF 348 im Monat an deine Krankenkasse“, statt mit allgemeiner Werbung. Die Logik beruht auf 15 erklärbaren Regeln. Jede startet bei einem Signal in den Daten und schätzt eine vorsichtige jährliche Ersparnis.

| Chance | Ausgelöst, wenn | Geschätzte Ersparnis pro Jahr | Wie Finora verdient |
| --- | --- | --- | --- |
| Grundversicherung wechseln | Eine Krankenkassenprämie in den Rechnungen, in der Wechselzeit (bis 30. November) | 5 bis 15% der Prämie | Pauschale pro Vertrag, maximal CHF 70 pro Person |
| Versicherungen prüfen | Zwei oder mehr Versicherungen in den Rechnungen | CHF 420 bis 840 | Anteil an der Provision |
| Ungenutzte Liquidität | Mehr als 3 Monatsausgaben auf Privatkonten | 0,4 bis 0,8% des Überschusses | Pauschale pro eröffnetem Konto |
| Säule 3a ausschöpfen | Spielraum bis CHF 7’258, mit Priorität im letzten Quartal | 20 bis 30% des Spielraums, an Steuern | Pauschale pro Konto oder Einzahlung |
| Hypothek erneuern | Eine verbundene Hypothek | 0,1 bis 0,3% der Schuld | Anteil an der Provision des Brokers |
| Karten- und Bankgebühren | Eine Kreditkarte oder Privatkonten bei zwei oder mehr Banken | CHF 50 bis 240 | Pauschale pro Karte oder Konto |
| Handy und Internet | Telekomrechnung über CHF 60 im Monat | 20 bis 40% der Rechnung | Pauschale pro Vertrag |
| Abos prüfen | Zwei oder mehr Abos | Bis zur Hälfte der Summe | Nichts: Es gibt keinen Partner, das schafft Vertrauen |

Ersparnisse werden als „Spanne, kein Versprechen“ gezeigt und mit den ersten Partnern kalibriert. Mit dem Demoprofil ergeben sie zusammen rund CHF 3’250 pro Jahr.

<ol class="flow-steps" style="--start:8"><li><img src="/projects/finora/offers.webp" alt="Sparmöglichkeiten mit 13 datenbasierten Vorschlägen und geschätzter jährlicher Ersparnis" loading="lazy" /><p><strong>Angebote aus den eigenen Daten.</strong> Jedes stammt aus einer erklärbaren Regel und zeigt die geschätzte jährliche Ersparnis.</p></li><li><img src="/projects/finora/plus.webp" alt="Finora Premium für CHF 4.92 pro Monat bei jährlicher Zahlung, mit 14 Tagen Gratis-Test" loading="lazy" /><p><strong>Freemium, klar gesagt.</strong> Premium hebt Limits auf und vertieft die Planung. Vor Ende des Tests kommt eine Erinnerung.</p></li></ol>

Die Angebote folgen einer Regel: Ein Angebot erscheint nur, wenn es sich mit den Daten der Person erklären lässt und sie Angebote sehen möchte.

- **Eine Frage vor jeder Analyse.** „Sollen wir nach Sparmöglichkeiten suchen?“ Bis die Antwort Ja lautet, wird nichts für Angebote analysiert. Nach dem revidierten Datenschutzgesetz ist das Profiling mit hohem Risiko, deshalb wird die Einwilligung mit der Version des Textes gespeichert.
- **Warum du das siehst.** Jedes Angebot zeigt die eigene Zahl dahinter, wie die Ersparnis geschätzt wurde und wie Finora bezahlt würde.
- **Einwilligung pro Partner.** Der Weiter-Button wird erst aktiv, wenn die Person zustimmt, Name, E-Mail und diese Daten an genau diesen Partner weiterzugeben.
- **Die Provision bestimmt nie die Reihenfolge.** Angebote sind nach Frist und Höhe der Ersparnis sortiert. Höchstens zwei erscheinen im Dashboard, und „Kein Interesse“ blendet eines dauerhaft aus.
- **Die tägliche Analyse wandert nie hinter die Bezahlschranke.** Finora Premium (CHF 59 pro Jahr) hebt Limits auf und bietet tiefere Planung. Es ändert nie, welche Angebote erscheinen.

## Der Businessplan

Finora verdient, wenn es Menschen beim Sparen hilft. Ich habe den Plan pro 10’000 aktive Nutzerinnen und Nutzer mit expliziten Annahmen modelliert, damit der erste Pilot jede einzelne bestätigen oder widerlegen kann.

<ul class="pb-stats"><li><strong>CHF 10.60</strong><span>Umsatz pro aktiver Person und Jahr, Basisszenario</span></li><li><strong>60%</strong><span>akzeptieren Angebote, die Annahme mit der grössten Wirkung</span></li><li><strong>CHF 59</strong><span>Premium pro Jahr, oder CHF 6.90 im Monat</span></li><li><strong>Q2 2027</strong><span>vorgeschlagener Pilot, nach Partnern und rechtlicher Prüfung</span></li></ul>

| Umsatzquelle | Konversion pro Jahr (Annahme) | Umsatz pro Konversion | Umsatz pro Jahr |
| --- | --- | --- | --- |
| Hypotheken | 0,3% von 6’000 mit Einwilligung → 18 | CHF 1’500 | CHF 27’000 |
| Grundversicherung | 4% → 240 | CHF 70 (gesetzliche Obergrenze) | CHF 16’800 |
| Banking: Sparen, Karten, Konten | 3% → 180 | CHF 80 | CHF 14’400 |
| Andere Versicherungen | 1,5% → 90 | CHF 150 | CHF 13’500 |
| Säule 3a | 2% → 120 | CHF 100 | CHF 12’000 |
| Telekom | 2% → 120 | CHF 40 | CHF 4’800 |
| Finora Premium | 3% von 10’000 → 300 | CHF 59 | CHF 17’700 |
| **Total** | | | **CHF 106’200, rund CHF 10.60 pro Person** |

Alle Quoten und Gebühren ausser der Obergrenze von CHF 70 sind Annahmen, die mit Partnern zu prüfen sind. Hypotheken bringen ein Viertel des Umsatzes aus sehr wenigen Konversionen, ein einziger Vertrag mit einem Broker verändert also das Ergebnis.

- **Warum jetzt.** Die Prämien der Grundversicherung steigen 2027 im Schnitt um 5,0%, und die Frist für den Wechsel ist der 30. November. Das ist der Moment im Jahr, in dem die meisten nach Ersparnissen suchen.
- **Partner in drei Wellen.** Zuerst offene Programme mit bekannter Vergütung (Immobilienbewertung und Handyabos über Awin, ein Krankenkassenvergleich). Dann ein Pilot für Ausgaben im Ausland und Investieren. Schliesslich direkte Verträge mit einem Säule-3a-Anbieter und einem Hypothekarbroker, wo die Ersparnis am grössten ist.
- **Regulierung prägt das Modell.** Um Versicherungsprovisionen zu erhalten, muss sich Finora bei der FINMA als ungebundener Vermittler registrieren oder mit einem registrierten zusammenarbeiten. Provisionen in der Grundversicherung sind seit September 2024 auf CHF 70 pro Person begrenzt. Vermittlungen zu Finanzprodukten brauchen vor dem Start eine rechtliche Prüfung nach FIDLEG.
- **Ein Funnel, messbar ohne Personendaten.** Die App erfasst Aufrufe, Klicks zum Partner und Ablehnungen bereits als anonyme Zählungen. Ziele für den Pilot: 60% Einwilligung, 15% Klicks zum Partner, 25% Konversion beim Partner, weniger als 20% Ablehnungen.

Noch offen, um den Plan abzuschliessen: Akquisitionskosten pro Person, Retention nach 12 Monaten und die echten Vergütungen der ersten Partner.

## Gestaltet und gebaut mit KI

Ich habe Finora gestaltet und mit Claude Code in Code gebaut, in 31 kurzen Sprints, jeder mit einem auslieferbaren Produkt am Ende. Diese Arbeitsweise hat verändert, wie ich gestalte: Entscheide wurden am selben Tag im echten Produkt getestet, nicht im Prototyp.

- **Flutter** für iOS, Android und Web aus einer Codebasis, mit responsiven Layouts für Smartphone, Tablet und Desktop.
- **Eine saubere Architektur**: Die Oberfläche hängt von einem Datenvertrag ab, also ersetzt ein echter Bankanbieter die Demodaten an einer Stelle.
- **Ein Referenz-Backend und Vertragstests**, damit App und API nicht auseinanderlaufen.
- **219 automatisierte Tests**, darunter Übersetzungstests, die fehlschlagen, wenn einer der vier Sprachen ein Text fehlt.
- **Continuous Delivery**: Jede Änderung wird analysiert, getestet und in die Web-Demo ausgeliefert, Android-Releases werden automatisch gebaut.
- **Barrierefreiheit als Standard**: 48 px grosse Touch-Flächen, beschreibende Labels, sichtbare Synchronisationsstatus und eine Palette, die auf Kontrast geprüft ist.

![Finora-Planübersicht auf dem Desktop mit Free und Premium im Vergleich](/projects/finora/desktop-plans.webp "Desktop-Layouts wurden für jeden Screen gestaltet, nicht von Mobile gestreckt.")

## Was ich gelernt habe

- **Im Fintech ist das Datenmodell das Design.** Das ruhige Dashboard ist nur möglich, weil jede Zahl aus einer Quelle kommt und keiner anderen widersprechen kann.
- **Vertrauen entsteht an vielen kleinen Stellen**: nur lesen auf dem ersten Screen, Einwilligungen mit Versionen, sichtbare Synchronisationsstatus und eine Provision, die nie die Reihenfolge bestimmt.
- **Selbst zu bauen hat mich zu einem besseren Product Designer gemacht.** Jeder Zielkonflikt musste konkret werden, vom Preis des Jahresplans bis zur Frage, was passiert, wenn eine Bankverbindung veraltet.

**Als Nächstes:** Onboarding, Verständnis der Verbindungen und die Hierarchie des Dashboards mit 5 bis 8 Personen testen, die bei mehreren Schweizer Banken sind, Abdeckung und Kosten mit bLink- und OpenWealth-Anbietern klären und Abschlussrate, Verbindungserfolg und wiederkehrende Nutzung messen.

Alle Zahlen, Salden und Personen in den Screenshots sind erfundene Demodaten.
