---
title: Crealogix Design Hub
headline: "Ein Designsystem, viele Banken"
summary: "Ein Multi-Brand-Designsystem und gemeinsame UX-Standards, mit denen 5+ Finanzinstitute in der Schweiz, Europa und dem Nahen Osten einen Kern teilen und trotzdem ihre Marke, ihre Märkte und ihre Regulierung behalten."
client: Crealogix
sector: "Banking-Software (SaaS)"
year: "2019 bis 2021"
role: "Senior UX/UI Designer, Führung von Designern und des Multi-Brand-Designsystems"
team: "Designer als direkte Mitarbeitende, Product, Engineering und kundennahe Teams in der Schweiz, Spanien und Deutschland"
duration: "2 Jahre"
# TODO (Joan): number of banks live on the system, time to onboard a new bank or brand theme before and after,
#   how the four metrics were measured, and whether +35% is customer or designer satisfaction (the old site said designers).
tools: [Figma, Storybook, Confluence, Design Tokens, CSS, Angular]
cover: tenants
featured: true
order: 3
discipline: [product, visual]
tldr:
  - "Crealogix verkauft digitales Banking an viele Banken zugleich. Jeder Standort baute eigene Komponenten, also bedeutete jeder neue Kunde mehr Kopien, langsamere Lieferung und uneinheitliche Qualität."
  - "Ich führte Designer und half, gemeinsame UX-Standards und ein Multi-Brand-Designsystem aufzubauen: tokenbasierte Markenthemes auf einem Kern, Erweiterungen pro Banking-Segment und eine Dokumentation, der die Teams vertrauten."
  - "Ein System für 5+ Finanzinstitute in der Schweiz, Europa und dem Nahen Osten, mit rund 75% mehr Nutzung und Effizienz und 50% mehr Effizienz in der Umsetzung."
metrics:
  - value: "+75%"
    label: "Nutzung und Effizienz des Systems"
    method: "TODO"
  - value: "+35%"
    label: "Kundenzufriedenheit"
    method: "TODO"
  - value: "+50%"
    label: "Effizienz in der Umsetzung"
    method: "TODO"
  - value: "5+"
    label: "Finanzinstitute auf einem System"
    method: "TODO"
---

## Was auf dem Spiel stand

<dl class="glance">
  <div><dt>Geschäftsrisiko</dt><dd>Crealogix verkauft dieselbe Digital-Banking-Plattform an viele Banken. Ohne gemeinsamen Kern wird jeder neue Kunde zu einem Fork, der die Lieferung bremst und Risiken bei Compliance, Barrierefreiheit und Markenvertrauen vervielfacht.</dd></div>
  <div><dt>Umfang</dt><dd>5+ Finanzinstitute in der Schweiz, Europa und dem Nahen Osten, in Retail, Corporate, Private Banking und Wealth Management. Zu den Kunden gehörten Julius Bär, Credit Suisse und J. Safra Sarasin.</dd></div>
  <div><dt>Schlüsselentscheid</dt><dd>Anpassung über Tokens, nicht über Komponenten. Eine neue Bank bedeutet ein neues Theme auf demselben Kern, nie eine Kopie eines Buttons.</dd></div>
</dl>

## Kontext

Crealogix baut digitale Banking-Kanäle für Retail-, Corporate-, Private- und Wealth-Kunden und verkauft sie als Plattform. Dieses Geschäftsmodell funktioniert nur, wenn ein Produkt gleichzeitig wie viele Banken aussehen und sich verhalten kann.

Mit dem Wachstum baute jeder Standort in der Schweiz, Deutschland, Österreich, Grossbritannien, Spanien, Saudi-Arabien und Singapur eigene Komponenten. Das Ergebnis war absehbar: doppelte Komponenten, auseinanderlaufende Muster, eine Dokumentation, der niemand traute, und langsamere Anpassungen für jede neue Bank.

In Banking-Software ist Inkonsistenz nicht nur ein UX-Problem. Sie **vervielfacht Risiken**, denn Compliance, Barrierefreiheit und Markenvertrauen hängen an verlässlicher Qualität. Und jede Woche, in der eine Komponente für eine Bank neu gebaut wird, fehlt dem Produkt, für das alle bezahlen.

Das System musste vier Dinge gleichzeitig sein:

- ein **gemeinsamer Kern** für alle Banking-Produkte,
- eine **White-Label-Ebene**, damit jeder Kunde seine Marke anwenden kann,
- eine **regionale Ebene** für Schweizer, europäische und nahöstliche Anforderungen,
- etwas, das Designer und Entwickler **freiwillig** übernehmen.

## Discovery

Am Anfang standen Interviews mit Designern, Product Managern und Stakeholdern aus dem Business in allen Regionen, ein Audit der doppelten Komponenten und ein Benchmark von Material, Carbon, Lightning und dem Bloomberg Terminal. Letzteres, weil dichte Finanzoberflächen eigenen Regeln folgen. Vier Hürden zeigten sich:

1. **Veraltete Dokumentation** führte zu wenig Vertrauen und Nacharbeit.
2. **Kein Raum für Kunden- oder Regionalanpassungen**, also kopierten Teams Komponenten.
3. **Design- und Entwicklungswerkzeuge waren nicht abgestimmt**, also liefen Umsetzungen auseinander.
4. **Compliance und Barrierefreiheit wurden je nach Markt unterschiedlich umgesetzt.**

## Die Vision: eine einzige Quelle

Das Ziel war grösser als eine Komponentenbibliothek. Das Designsystem stand im Zentrum, die UX-Dokumentation erklärte, wie und warum man es nutzt, und zusammen wurden sie zur einzigen Quelle für alle, die bei Crealogix ein Banking-Produkt bauen.

<figure class="rings" aria-label="Drei konzentrische Kreise: das Designsystem in der UX-Dokumentation in einer einzigen Quelle">
  <div class="ring r1"><span>Eine einzige Quelle</span><div class="ring r2"><span>UX-Dokumentation</span><div class="ring r3"><span>Designsystem</span></div></div></div>
  <figcaption>Jeder Ring hängt vom inneren ab: keine gemeinsame Quelle ohne Dokumentation, keine Dokumentation ohne ein System, das sich zu dokumentieren lohnt.</figcaption>
</figure>

## Roadmap: zuerst das Unsichtbare

Die Roadmap begann bewusst mit dem, was man nicht sieht. Ohne gemeinsamen Zweck, Prinzipien und Identität wird jede Komponente zur Geschmacksdebatte. Mit ihnen werden Komponenten zu Entscheiden, die Teams überprüfen können.

<div class="roadmap" role="group" aria-label="Roadmap in drei Phasen">
  <div class="phase"><p class="ph">Phase 1 <em>nicht greifbar</em></p><div class="cards"><div class="card soft"><strong>Zweck und Werte</strong><ul><li>Wohin gehen wir?</li><li>Warum?</li><li>Wie?</li></ul></div><div class="card soft"><strong>Designprinzipien</strong><ul><li>Design für das Web</li><li>Gestendesign</li><li>Datenvisualisierung</li></ul></div><div class="card soft"><strong>Identität und Sprache</strong><ul><li>Farben, Schriften, Abstände</li><li>Formen, Icons, Illustrationen</li><li>Fotografie, Animation</li><li>Stimme und Tonalität</li></ul></div></div></div>
  <div class="phase"><p class="ph">Phase 2 <em>greifbar</em></p><div class="cards"><div class="card hard"><strong>Tokens</strong><ul><li>Farbe und Deckkraft</li><li>Abstandseinheiten</li><li>Schriftgrösse und Familie</li><li>Flex-Raster</li><li>Schatten und Z-Index</li></ul></div><div class="card hard"><strong>Atome</strong><ul><li>Button</li><li>Badge</li><li>Input</li></ul></div></div></div>
  <div class="phase"><p class="ph">Phase 3</p><div class="cards"><div class="card hard"><strong>Moleküle</strong><ul><li>Grundverhalten</li><li>Navigationsmuster</li><li>Segmentmuster</li></ul></div></div></div>
</div>

<p class="roadmap-cap">Phase 1 richtete das Unternehmen auf das Warum und Wie aus. Phase 2 machte daraus Tokens und Atome. Phase 3 setzte sie zu Mustern zusammen.</p>

## Schwierige Entscheide

**1. Anpassung über Tokens, nicht über Komponenten.** Das war der zentrale Entscheid. Die Marke jeder Bank (Farbe, Typografie, Form und Icon-Stil) lag in einem Theme aus Token-Overrides über denselben Komponenten. Niemand musste einen Button kopieren, damit er nach der eigenen Bank aussieht.

*Preis:* Themes sind weniger ausdrucksstark als eigene Komponenten. *Gewinn:* ein Kern, der gepflegt, getestet und auf Barrierefreiheit geprüft wird, egal wie viele Banken es sind.

**2. Prinzipien vor Komponenten.** Mit Zweck, Prinzipien und Identität zu beginnen, wirkte auf Teams, die Buttons wollten, langsam. Aber es gab jeder späteren Debatte eine Referenz, vom Gestendesign bis zur Datenvisualisierung.

*Preis:* weniger sichtbare Ergebnisse in der ersten Phase. *Gewinn:* Komponentenentscheide, die einmal diskutiert wurden, nicht einmal pro Standort.

**3. Drei Ebenen mit klarer Verantwortung.** Ein gemeinsamer Kern, ein Theme pro Bank und Markt und Erweiterungen pro Banking-Segment. Jede Ebene hatte eine Verantwortliche, also bedeutete Autonomie keine Zersplitterung.

*Preis:* mehr Governance-Arbeit. *Gewinn:* Produktteams konnten in ihrem Segment schnell sein, ohne den Kern zu brechen.

**4. Token-Namen wie im Code.** Zuerst semantische Tokens, nie Rohwerte, und dieselben Namen in Figma und in den Code-Variablen. Dieses gemeinsame Vokabular beseitigte eine ganze Klasse von Übergabefragen.

## Architektur: ein Kern, viele Banken

<figure class="arch" aria-label="Diagramm der drei Ebenen des Crealogix Designsystems">
  <p class="arch-badge">Ein Kern, viele Banken</p>
  <div class="arch-layer arch-core"><p class="arch-title">Kern</p><p class="arch-sub">Foundations · Basiskomponenten · Regeln zur Barrierefreiheit</p></div>
  <p class="arch-arrow"><span aria-hidden="true">↓</span>Gestaltet pro Bank und Markt</p>
  <div class="arch-layer"><p class="arch-title">Theme</p>
  <div class="arch-cols">
    <div><strong>Marke</strong><ul><li>Farbe</li><li>Typografie</li><li>Form</li><li>Icon-Stil</li></ul></div>
    <div><strong>Markt</strong><ul><li>Sprache</li><li>Bereit für Rechts-nach-links</li><li>Rechtliche Inhalte</li></ul></div>
  </div></div>
  <p class="arch-arrow"><span aria-hidden="true">↓</span>Erweitert pro Banking-Segment</p>
  <div class="arch-layer"><p class="arch-title">Erweiterungen</p><p class="arch-sub">Retail · Corporate · Private Banking · Wealth Management</p>
  <div class="arch-cols">
    <div><strong>KYC</strong><ul><li>Onboarding und Identitätsprüfung</li></ul></div>
    <div><strong>Freigaben</strong><ul><li>Mehrstufige Freigabe</li></ul></div>
    <div><strong>Portfolioansichten</strong><ul><li>Dichte Finanzdaten</li></ul></div>
  </div></div>
  <figcaption>Der Kern wird zentral verantwortet, Themes werden pro Kunde konfiguriert, Erweiterungen kommen aus den Produktteams und werden geprüft.</figcaption>
</figure>

Der **Kern** enthält Foundations, Basiskomponenten und Regeln zur Barrierefreiheit und wird zentral verantwortet. Die **Theme**-Ebene trägt die Marke jeder Bank und die Regeln jedes Markts, etwa Sprache, Rechts-nach-links-Fähigkeit für den Nahen Osten und rechtliche Inhalte. **Erweiterungen** ergänzen Muster pro Segment, etwa KYC, Freigaben und Portfolioansichten. Sie kommen aus den Produktteams und werden geprüft, bevor sie ins System gelangen.

## Das System im Detail

Die Entscheide oben tragen nur, wenn das Handwerk stimmt. Das haben Designer und Entwickler jeden Tag genutzt.

### Foundations

Farbe und Typografie waren von Anfang an für viele Marken gebaut. Fünf Paletten (zwei Markenfarben, primär, sekundär und tertiär) laufen in je neun Tönen, vier heller und vier dunkler als die Basis, dazu transparente Stufen von 8% bis 48% für Overlays, Hover und Auswahl. Eine Bank ändert die Basiswerte in ihrem Theme, und alle Töne und Zustände folgen.

Die Typografie nutzt eine benannte Skala von XXXBig bis XXXSmall plus Grossbuchstaben, geprüft in drei Kontexten: schwarz auf hell, weiss auf dunkel und deaktiviert. Benannte Grössen statt Pixelwerte bedeuteten, dass Themes die Schrift wechseln konnten, ohne im Code etwas umzubenennen.

![Farbseite mit Marken-, Primär-, Sekundär- und Tertiärpalette in neun Tönen und transparenten Stufen](/projects/crealogix/color-ui.webp "Farbe: fünf Paletten mit je neun Tönen und transparenten Stufen für Overlays und Zustände.")

![Typografieseite mit der Grössenskala in Schwarz, Weiss und deaktiviert](/projects/crealogix/typography.webp "Typografie: eine benannte Skala, geprüft in Schwarz, Weiss und deaktiviert.")

### Komponenten, dokumentiert als Entscheide

Jede Komponente hatte zwei Seiten: eine **Definition** und ein **Interaktionsmuster**. Der Button zeigt den Detailgrad.

Die Definition umfasst Status und Version, drei Typen (solid, outline und flat), vier Stileigenschaften (Typografie, Kontur, Form und Schatten), fünf Zustände (default, hover, active, focus und disabled), Grössen pro Gerät (48 px mobil, 48 und 32 px auf Tablet, 48, 32 und 24 px auf Desktop) und alle semantischen Varianten.

Das Interaktionsmuster erklärt die Anwendung, mit Dos und Don’ts:

- **Ein primärer Button pro Seite**, und er markiert immer den Happy Path.
- **Eine aussagekräftige Beschriftung** wie «Überweisen» oder «Senden», «Weiter» nur für allgemeine Schritte.
- **Eine feste Position:** unten auf Mobile und rechts auf Desktop.
- **Deaktiviert, bis Pflichtfelder ausgefüllt sind**, mit hervorgehobenem fehlendem Feld, statt eines Fehlers nach dem Klick.
- **Immer ein Ausweg:** «Abbrechen» in eigenständigen Formularen und im ersten Prozessschritt, «Zurück» in den folgenden Schritten.

<div class="compare compare--wide">
  <figure>
    <img src="/projects/crealogix/button-definition.webp" alt="Definitionsseite des Buttons mit Typen, Aufbau, Zuständen, Grössen und Varianten" />
    <p class="compare-note">Definition: Typen, Aufbau, Zustände, Grössen pro Gerät und Varianten.</p>
  </figure>
  <figure>
    <img src="/projects/crealogix/button-pattern.webp" alt="Interaktionsmuster des Buttons mit Richtlinien und Dos und Don’ts" />
    <p class="compare-note">Interaktionsmuster: Regeln, Dos und Don’ts und Verhalten in Formularen.</p>
  </figure>
</div>

### Von Figma zu CSS und Angular

Das System war dafür gestaltet, gebaut zu werden. Jeder Entscheid in Figma hatte ein direktes Gegenstück in CSS und in der Angular-Komponentenbibliothek. Ich arbeitete mit dem Engineering an der Umsetzung jedes einzelnen und prüfte die Übereinstimmung zwischen beiden.

| In Figma | In CSS | In Angular |
| --- | --- | --- |
| Farb-, Schrift- und Abstandsstile | Semantische Tokens als CSS Custom Properties | Eine gemeinsame Theme-Datei, die jede App importiert |
| Das Theme einer Bank | Token-Overrides auf einer Theme-Klasse | Das Kunden-Theme beim Start der App |
| Varianten: Typ und Grösse | Modifier-Klassen, die nur Tokens lesen | Komponenten-Inputs mit denselben Namen |
| Zustände: hover, focus, disabled | `:hover`, `:focus-visible`, `[disabled]` | Disabled-Zustand an die Gültigkeit des Formulars gebunden |
| Layouts von rechts nach links | Logische Properties wie `padding-inline` | `dir`-Attribut pro Locale |

Drei Regeln hielten diese Zuordnung stabil:

- **Komponenten setzen nie feste Werte.** Sie lesen nur Tokens, also kann ein Theme den ganzen Auftritt einer Bank ändern, ohne Komponentencode anzufassen.
- **Namen bleiben gleich.** Eine Variante «outline» in Figma ist `type="outline"` in Angular und `cx-button--outline` in CSS. Design und Entwicklung reden über dasselbe.
- **Verhalten gehört zur Komponente.** Fokusstile, Disabled-Logik und Mindestgrössen stecken in der Komponente selbst, also erbt jede Bank die Barrierefreiheit, statt sie neu zu bauen.

Ein vereinfachtes Beispiel des Buttons zeigt, wie die Ebenen zusammenkommen:

<p class="code-label">Tokens, Theme und Komponente in CSS</p>

```css
/* Core: semantic tokens, shared by every bank */
:root {
  --cx-color-primary: #1f6fe5;
  --cx-color-focus: #7aa7ff;
  --cx-radius-control: 4px;
  --cx-space-md: 16px;
}

/* Theme: a bank overrides tokens, never components */
.theme-bank-a {
  --cx-color-primary: #0b3d91;
  --cx-radius-control: 0;
}

/* Component: styled only through tokens */
.cx-button {
  min-block-size: var(--cx-button-height, 48px);
  padding-inline: var(--cx-space-md);
  border-radius: var(--cx-radius-control);
  background: var(--cx-color-primary);
}
.cx-button--medium { --cx-button-height: 32px; }
.cx-button--small { --cx-button-height: 24px; }
.cx-button:focus-visible {
  outline: 2px solid var(--cx-color-focus);
  outline-offset: 2px;
}
```

<p class="code-label">Dieselben Varianten als Angular-Inputs</p>

```ts
@Component({
  selector: 'cx-button',
  template: `
    <button [class]="classes" [disabled]="disabled">
      <ng-content></ng-content>
    </button>`,
})
export class CxButtonComponent {
  @Input() type: 'solid' | 'outline' | 'flat' = 'solid';
  @Input() size: 'big' | 'medium' | 'small' = 'big';
  @Input() disabled = false;

  get classes(): string {
    return `cx-button cx-button--${this.type} cx-button--${this.size}`;
  }
}
```

<p class="code-label">Die Interaktionsregel in einem echten Formular</p>

```html
<!-- The primary action stays disabled until the form is valid -->
<cx-button type="solid" [disabled]="transferForm.invalid">Transfer</cx-button>
```

Die Beispiele sind für diese Fallstudie vereinfacht, die Struktur ist aber die des Systems: Tokens im Kern, Themes als Overrides und Komponenten, deren API Figma spiegelt.

## Dokumentation als Motor der Nutzung

Die Dokumentation hatte zwei Bereiche. **Systemgrundlagen** umfassten Prinzipien, Versionierung, Theming-Regeln, den Beitragsprozess und das Onboarding für Designer und Entwickler. **Komponenten** umfassten Anwendung, Varianten, Zustände, Dos und Don’ts, Barrierefreiheit, eine lebende Storybook-Demo, Hinweise zur Umsetzung und die Versionshistorie.

KI nutzte ich für erste Entwürfe von Komponentenseiten, Namensprüfungen, Zusammenfassungen von Release Notes und die Erkennung von Lücken (Abgleich der Figma-Eigenschaften mit der Dokumentationsvorlage), immer mit Prüfung vor der Veröffentlichung.

<div class="video">
  <iframe src="https://www.youtube.com/embed/FUA0fpCOTEc" title="Crealogix Design Hub" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>
  <p class="video-caption">Der Crealogix Design Hub im Einsatz. <a href="https://youtu.be/FUA0fpCOTEc" target="_blank" rel="noopener">Auf YouTube ansehen</a></p>
</div>

## Das Team führen

Ich führte Designer als direkte Mitarbeitende in mehreren internationalen Programmen: Prioritäten setzen, Mentoring, Feedback, ihre Entwicklung fördern und die Designqualität hochhalten. Das Designsystem war auch ein Werkzeug fürs Team. Es gab allen dieselben Standards für Reviews, also ging es im Feedback um Entscheide und nicht um persönlichen Geschmack.

## Einführung und Governance

Die Einführung war schrittweise und sozial statt verordnet: Workshops und Onboarding-Sessions für jeden Standort, ein fester Rhythmus für Triage und Releases und Feedback von Teams, die das System in laufenden Projekten nutzten. Die Nutzung wurde über Figma-Library-Analysen, Messungen der Übergabezeit und Zufriedenheitsumfragen verfolgt.

## Wirkung aufs Geschäft

- **Ein System für 5+ Finanzinstitute** in der Schweiz, Europa und dem Nahen Osten, jedes mit eigener Marke auf demselben Kern.
- **Rund 75% mehr Nutzung und Effizienz**, als die Teams von lokalen Kopien auf das gemeinsame System wechselten.
- **50% mehr Effizienz in der Umsetzung** durch wiederverwendbare Muster und Token-Namen, die Design und Code teilen.
- **35% höhere Kundenzufriedenheit** durch einheitlichere Journeys über Produkte und Marken hinweg.
- **Eine neue Bank bedeutete ein neues Theme, keinen neuen Fork.** Genau so skaliert ein Plattformgeschäft.

## Was sich in der Organisation verändert hat

- **Ein Vokabular über alle Standorte.** Designer und Entwickler in verschiedenen Ländern nutzten dieselben Namen für dieselben Dinge.
- **Beiträge statt Kopien.** Produktteams erweiterten das System über einen geprüften Prozess, statt es zu forken.
- **Gemeinsame UX-Standards.** Reviews in allen Programmen orientierten sich an denselben Prinzipien und Mustern.

## Was ich gelernt habe

- Multi-Tenant-Systeme funktionieren, wenn die Anpassung über Tokens läuft. Anpassung über Komponenten endet immer in Kopien.
- Zuerst das Unsichtbare. Prinzipien und Identität sparen mehr Zeit als jede Komponente.
- Governance muss schlank, aber klar sein, sonst kehren Teams zu lokalen Kopien zurück.
- Dokumentation ist der wichtigste Hebel für die Nutzung. Ist sie veraltet, bricht das Vertrauen schnell ein.

**Nächstes Mal** würde ich früher in automatisierte Übereinstimmung zwischen Figma und Code (Linting und Token-Sync-Pipelines) und in Muster für Wealth und Corporate Banking investieren.
