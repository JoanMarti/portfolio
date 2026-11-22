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
  - "Menschen in der Schweiz verteilen ihr Geld auf mehrere Banken, eine Pensionskasse und die Säule 3a, und keine App zeigt das Ganze auf Schweizer Art."
  - "Ich habe das Produkt definiert, ein Datenmodell gestaltet, das jede Bank in eine Ansicht übersetzt, und die App in Flutter für iOS, Android und Web gebaut, mit Freemium-Modell und Einwilligung zuerst bei Partnerangeboten."
  - "Ein funktionierendes Produkt in 31 Sprints: ein Android-1.0-Build, eine Live-Demo im Web in vier Sprachen, ein Referenz-Backend und 219 automatisierte Tests."
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

## Ein Geschäftsmodell, das die Nutzer nicht verrät

Eine kostenlose App, die Finanzen analysiert, muss irgendwie Geld verdienen, und die einfachen Wege zerstören Vertrauen. Ich habe das Geschäftsmodell mit derselben Sorgfalt gestaltet wie die Screens.

<ol class="flow-steps" style="--start:8"><li><img src="/projects/finora/offers.webp" alt="Sparmöglichkeiten mit 13 datenbasierten Vorschlägen und geschätzter jährlicher Ersparnis" loading="lazy" /><p><strong>Angebote aus den eigenen Daten.</strong> Jedes stammt aus einer erklärbaren Regel und zeigt die geschätzte jährliche Ersparnis.</p></li><li><img src="/projects/finora/plus.webp" alt="Finora Premium für CHF 4.92 pro Monat bei jährlicher Zahlung, mit 14 Tagen Gratis-Test" loading="lazy" /><p><strong>Freemium, klar gesagt.</strong> Premium hebt Limits auf und vertieft die Planung. Vor Ende des Tests kommt eine Erinnerung.</p></li></ol>

- **Die tägliche Analyse kommt nie hinter die Bezahlschranke.** Premium bringt unbegrenzt viele Banken, 24 Monate Verlauf und tiefere Planung. Ein Downgrade löscht nie etwas.
- **Die Provision bestimmt nie die Reihenfolge.** Wie Finora von einem Partner bezahlt würde, steht bei jedem Angebot, und es beeinflusst nie, welche Angebote erscheinen oder in welcher Reihenfolge.
- **Einwilligung ist ein Feature.** Daten für Angebote auszuwerten gilt nach dem revidierten Datenschutzgesetz als Profiling mit hohem Risiko, braucht also eine ausdrückliche Einwilligung, gespeichert mit der Version des akzeptierten Textes.
- **Geschäftskennzahlen ohne Personendaten.** Der Angebots-Funnel wird als anonyme Zählung pro Angebotsart gemeldet, ohne Namen, Beträge oder Zeitstempel pro Person.

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
