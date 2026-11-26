---
title: Smartstamp
headline: Echtheitsprüfung für Kunst neu gestaltet
summary: "Ich übernahm die iOS- und Android-App von Smartstamp mit einer unfertigen Informationsarchitektur, definierte Struktur und Abläufe neu und gestaltete das Erlebnis rund um vier Kernaktionen: registrieren, prüfen, übertragen und zertifizieren."
client: Smartstamp
sector: Kunst und Echtheitsprüfung
year: "2025"
role: "Senior Product Designer"
team: "PM, 2 Gründer, 2 Entwickler, eine Fachperson aus der Kunstwelt und der Marketingleiter"
duration: "6 Monate"
tools: [Figma, User Flows, Informationsarchitektur, UI-Bibliothek, Designspezifikationen, TestFlight]
cover: ia
featured: true
order: 2
discipline: [product, visual]
tldr:
  - Smartstamp erstellt mit KI und Computer Vision einen einzigartigen digitalen Fingerabdruck eines Kunstwerks. Als ich dazukam, war die Struktur der App eine unfertige Sitemap mit einer Startseite, sechs Ästen, tief versteckten Kernaktionen und vielen Bereichen mit dem Vermerk «work in progress».
  - Ich definierte die Informationsarchitektur und alle Kernabläufe neu und entwickelte die App über drei Versionen weiter. Die erste ging in TestFlight, die zweite brachte eine leichtere Startseite und einen zentralen Aktionsbereich, und die dritte verbesserte Sichtbarkeit, Barrierefreiheit und Navigation.
  - Ein Kunstwerk zu übertragen, lag früher fünf Ebenen tief und ist jetzt einen Tipp von der Navigationsleiste entfernt. Jeder Ablauf ist vollständig definiert, und die Entwicklung erhielt jede Änderung als kurze, testbare Spezifikation.
metrics:
  - value: "5 → 1"
    label: Ebenen bis zur Übertragung eines Kunstwerks
    method: Übernommene Sitemap (Start › Spaces › Space › Werkliste › Werk › Übertragen) im Vergleich zum Tab Actions in der neuen Navigation
  - value: "90%"
    label: "abgeschlossene Identitätsprüfungen"
    method: "Registrierte Nutzer, die die KYC-Identitätsprüfung abschlossen. Sie wurde eingeführt, damit Investoren und Nutzer der Plattform echte, zertifizierte Personen sind"
  - value: "7"
    label: Kernfunktionen in einem Aktionsbereich
    method: Registrieren, Prüfen, Übertragen, Entwürfe fortsetzen, Zertifikat, Ausstellungsetikett und Preisliste
  - value: "4"
    label: Nutzertypen in einer App
    method: Registrierte Künstlerinnen und Künstler, Sammler, Unternehmen und Besucher
links:
  - label: "Smartstamp ArtID im App Store"
    href: https://apps.apple.com/us/app/smartstamp-artid/id1670131767
  - label: "Smartstamp ArtID bei Google Play"
    href: https://play.google.com/store/apps/details?id=com.smartstamp.app
---

## Kontext

Echtheitszertifikate sind meist eine Unterschrift auf Papier oder ein Etikett auf der Rückseite einer Leinwand. Beides lässt sich leicht fälschen. Das Schweizer Unternehmen Smartstamp hat eine patentierte Technologie entwickelt, die mit KI und Computer Vision einen einzigartigen Fingerabdruck des Werks selbst erstellt und per Blockchain mit einem Zeitstempel sichert. Danach kann jede Person ein Werk mit dem Smartphone prüfen.

Die Technologie funktionierte. Die App drumherum noch nicht. Sie musste vier Arten von Nutzern (**registrierten Künstlerinnen und Künstlern, Sammlern, Unternehmen und Besuchern**) ermöglichen, ein Werk durch korrektes Fotografieren zu registrieren, jedes Werk zu prüfen, das Eigentum beim Verkauf zu übertragen und eine Sammlung zu verwalten.

## Was ich übernommen habe

Ich übernahm eine Sitemap, die das Produkt als eine Startseite mit sechs Ästen beschrieb: Profil, Mitteilungen, Suche, Spaces, Registrieren und Prüfen.

![Die übernommene Informationsarchitektur: eine farbcodierte Sitemap mit einer Startseite und sechs Ästen, tiefer Verschachtelung unter Spaces und vielen Notizen mit dem Vermerk work in progress.](/projects/smartstamp/ia-received.svg "Die übernommene Sitemap. Jede Farbe ist ein Ast der Startseite, die orangen Notizen bedeuten «work in progress».")

Sie war ein brauchbarer Ausgangspunkt, hatte aber drei strukturelle Probleme:

- **Kernaktionen waren versteckt.** Ein Kunstwerk zu übertragen, eine der drei Kernaktionen, lag fünf Ebenen tief: Start › Spaces › Space › Werkliste › Werk › Übertragen.
- **Die Struktur folgte dem System, nicht den Menschen.** Die Äste entsprachen Objekten im Backend wie Spaces, Archiven und Dokumenten, nicht dem, was Menschen in der App erledigen wollen.
- **Grosse Bereiche waren undefiniert.** Suche, Mitteilungen, Übertragungen, Support und mehrere Profilseiten waren als «work in progress» oder gar nicht definiert markiert.

## Die Informationsarchitektur neu definieren

Ich baute die Struktur um die Aufgaben herum, für die Menschen die App öffnen. Das Ergebnis ist eine Navigation mit vier Tabs, in der jede Kernaktion vom ersten Screen aus erreichbar ist.

<div class="ia">
  <section>
    <h3>Vorher</h3>
    <p class="ia-sub">Eine Startseite und sechs Äste, geordnet nach Systemobjekten</p>
    <ul>
      <li><span class="node">Startseite</span>
        <ul>
          <li>Benutzerprofil
            <ul><li>Konto upgraden, Freunde einladen, Über uns, Kundendienst, Einstellungen, Persönliche Angaben, Abmelden</li></ul>
          </li>
          <li>Mitteilungen <span class="wip">(teilweise definiert)</span></li>
          <li>Suchleiste <span class="wip">(nicht definiert)</span></li>
          <li>Spaces
            <ul>
              <li>Einzelner Space
                <ul>
                  <li>Werkliste
                    <ul>
                      <li>Werkdetails</li>
                      <li>Smart Archive › Zertifikate und Dokumente</li>
                      <li><span class="deep">Werk übertragen</span> <span class="wip">(in Arbeit)</span></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Neues Werk registrieren</li>
          <li>Prüfen</li>
        </ul>
      </li>
    </ul>
  </section>
  <section>
    <h3>Nachher</h3>
    <p class="ia-sub">Vier Tabs in Version 3, geordnet nach dem, was Menschen tun wollen</p>
    <ul>
      <li><span class="node">Home</span>
        <ul><li>Button zum Registrieren, Identitätsprüfung, Schnellaktionen (Prüfen, Übertragen, weitere Optionen), Kunstwerke und übertragene Werke</li></ul>
      </li>
      <li><span class="node">Actions</span>
        <ul>
          <li>Werk registrieren</li>
          <li>Werk prüfen</li>
          <li><span class="key">Werk übertragen</span></li>
          <li>Entwürfe fortsetzen</li>
          <li>Zertifikat erstellen <span class="premium">Premium</span></li>
          <li>Ausstellungsetikett <span class="premium">Premium</span></li>
          <li>Preisliste <span class="premium">Premium</span></li>
        </ul>
      </li>
      <li><span class="node">Feedback</span>
        <ul><li>Ein direkter Draht von den Nutzern zum Team</li></ul>
      </li>
      <li><span class="node">Profile</span>
        <ul><li>Persönliche Angaben, Sicherheit, Präferenzen (Sprache, Währung und Masseinheiten), Abo und Zahlungen, Support, Freunde einladen</li></ul>
      </li>
    </ul>
  </section>
</div>

Drei Prinzipien leiteten die neue Struktur:

- **Aktionen vor Objekten.** Registrieren, prüfen und übertragen sind der Grund, warum Menschen die App öffnen. Deshalb stehen sie auf der obersten Ebene. Spaces und Einträge unterstützen sie von der Startseite aus.
- **Ein Ort, der wachsen kann.** Der Aktionsbereich gibt jeder Funktion dieselbe Karte und dasselbe Schritt-für-Schritt-Muster. Neue Premium-Funktionen wie Zertifikate, Ausstellungsetiketten und Preislisten fügen sich ein, ohne die Navigation zu ändern.
- **Abkürzungen ausserhalb der App.** Registrieren, prüfen und übertragen stehen auch als Schnellaktionen auf dem Home-Bildschirm von iPhone und iPad zur Verfügung.

## Von Lücken zu definierten Abläufen

Mit der neuen Struktur zeichnete ich jeden Ablauf vollständig auf. Die erste Version machte bewusst sichtbar, was fehlte: undefinierte Bereiche in Blau, offene Fragen an das Marketing in Rosa.

![Erste Version des User Flows von Smartstamp. Blaue Blöcke markieren noch nicht definierte Bereiche, ein rosa Block Onboarding-Inhalte, die mit dem Marketing zu klären waren.](/projects/smartstamp/userflow-v1.svg "Flow v1.0: undefinierte Bereiche in Blau und offene Fragen an das Marketing in Rosa, damit die Lücken für alle sichtbar waren.")

Diese Karte wurde zur Agenda für Entscheidungen mit den Gründern, dem Marketing und der Entwicklung. In Version 1.2 hatte jeder Ast eine Antwort.

![Version 1.2 des User Flows mit Onboarding für Sammler, allen definierten Ästen und Fingerabdruck-Sequenzen mit drei, sechs, sieben und neun Aufnahmen.](/projects/smartstamp/userflow-v2.svg "Flow v1.2: Onboarding für Sammler, definierte Nutzertypen und Zahlung, und eine Auswahl von 3, 6, 7 oder 9 Fingerabdruck-Aufnahmen.")

Die wichtigsten Änderungen zwischen den beiden Versionen:

- **Onboarding für Sammler** mit vier Botschaften: die Sammlung schützen, jeden Besitzerwechsel festhalten und die Provenienz sichern.
- **Definierte Nutzertypen** (Art Intro, Art Lover, Art Pro und Enterprise) mit Abo-Auswahl und Zahlung über Apple Pay oder Google Pay.
- **Klar definierte Registrierung:** Gesamtfoto, Detailfoto, dann die Wahl, wie viele Fingerabdrücke aufgenommen werden (standardmässig drei, wahlweise sechs, sieben oder neun), eine Zusammenfassung zum Lesen und ein Ladeschritt, der erklärt, dass die Daten verschlüsselt werden.
- **Gestaltete Ausstiege.** Wer die Registrierung abbricht, kehrt mit einem Hinweis, dass der Vorgang unvollständig ist, zum Dashboard zurück und kann den Entwurf später fortsetzen.

## Die Oberfläche neu gestalten

### Version 1

Die erste Oberfläche war dunkel, mit der orangen Markenfarbe im Header und einer Startseite als Raster von Spaces. Sie ging im September 2025 in TestFlight.

<div class="compare">
  <figure>
    <span class="tag">Version 1, Design</span>
    <img src="/projects/smartstamp/home-v1-dark.webp" alt="Startseite der Version 1 im dunklen Design: oranger Header mit Begrüssung und Suche, Umschalter zwischen Spaces und übertragenen Werken und ein Raster aus acht Spaces." />
    <p class="compare-note">Die Startseite als Raster von Spaces. Übertragungen liegen hinter einem Umschalter.</p>
  </figure>
  <figure>
    <span class="tag">Version 1 in TestFlight</span>
    <img src="/projects/smartstamp/home-v1-build.webp" alt="Screenshot des ersten Builds in TestFlight im September 2025: Smartstamp-Logo, Umschalter zwischen Spaces und übertragenen Werken, ein Test-Space und ein Button zum Registrieren." />
    <p class="compare-note">Der erste Build in TestFlight. Im Test zeigte sich, wie leer die Startseite für neue Nutzer wirkte.</p>
  </figure>
  <figure>
    <span class="tag">Version 2, Redesign</span>
    <img src="/projects/smartstamp/home-v2.webp" alt="Startseite der Version 2 im hellen Design: Begrüssung, Premium-Banner und horizontale Bereiche für Spaces, neueste Werkeinträge, QR-Einträge, Prüfungen und Übertragungen, mit einem Button zum Registrieren." />
    <p class="compare-note">Eine helle Startseite aus Bereichen für Spaces, Einträge, Prüfungen und Übertragungen, jeweils einen Tipp von der vollständigen Liste entfernt.</p>
  </figure>
  <figure>
    <span class="tag tag--new">Version 3, aktuell</span>
    <img src="/projects/smartstamp/home-v3.webp" alt="Startseite der Version 3 auf einem Telefon: Smartstamp-Logo und Suche, oben ein Button zum Registrieren, ein Hinweis an Pro-Nutzer, ihre Identität zu bestätigen, Schnellaktionen für Prüfen, Übertragen und weitere Optionen, ein Bereich mit Kunstwerken und eine Navigation mit Home, Actions, Feedback und Profile." />
    <p class="compare-note">Die aktuelle Version: die Hauptaktion zuerst, Schnellaktionen in Reichweite und eine klarere Navigation.</p>
  </figure>
</div>

### Version 2

Version 2 behielt die Struktur und veränderte, wie sie sich anfühlt und wie sie wächst:

- **Eine Startseite, die Aktivität zeigt.** Statt eines Rasters aus Ordnern zeigt die Startseite, was in der Sammlung passiert (neueste Einträge, Prüfungen und Übertragungen), mit einem festen Button zum Registrieren.
- **Eine leichtere Bildsprache.** Ein helles Design mit wärmeren Neutraltönen überlässt die Farbe den Kunstwerken. Icons, Beschriftungen und Abstände der Navigationsleiste wurden vereinfacht, damit sie weniger mit dem Inhalt konkurriert.
- **Der Aktionsbereich.** Alle Kernfunktionen stehen in einer Liste, jede mit kurzer Beschreibung, einem Zähler (zum Beispiel zwei offene Übertragungen oder fünf Zertifikate) und, wo nötig, einem Premium-Hinweis. Jede Funktion folgt danach derselben Struktur: Schritte zuerst erklärt, ein Hauptbutton unten.

![Spezifikation der Actions-Seite neben acht Screens: dem Aktionsbereich und den Abläufen Registrieren, Prüfen, Übertragen, Entwürfe fortsetzen, Zertifikat erstellen, Ausstellungsetikett und Preisliste.](/projects/smartstamp/actions-hub.webp "Der Aktionsbereich und die sieben Abläufe, die er öffnet. Alle folgen derselben Struktur: zuerst die Schritte, unten eine Hauptaktion.")

![Spezifikation für die visuelle Überarbeitung der Navigationsleiste, mit den Screens Home, Verify und Profile in der neuen Navigation.](/projects/smartstamp/nav-redesign.webp "Überarbeitete Navigationsleiste: leichtere Icons, klarere Beschriftungen und mehr Platz für Inhalt.")

![Smartstamp-App-Icon auf einem iPad-Home-Bildschirm mit Schnellaktionen für Werk registrieren, Werk prüfen und Werk übertragen.](/projects/smartstamp/ipad-quick-actions.webp "Schnellaktionen auf dem iPad. Die drei Kernaktionen sind verfügbar, bevor die App überhaupt geöffnet ist.")

### Version 3

Die aktuelle Version, im Vergleich oben rechts zu sehen, verbesserte Version 2 in drei Bereichen:

- **Sichtbarkeit.** Werk registrieren steht als Hauptaktion ganz oben auf der Startseite. Ein Hinweis zeigt Pro-Nutzern, wenn ihre Identität noch bestätigt werden muss, mit einem direkten Link dorthin. Prüfen und Übertragen folgen direkt darunter als Schnellaktionen, sodass alle drei Kernaktionen ohne Scrollen sichtbar sind.
- **Barrierefreiheit.** Grössere Tippflächen für die Schnellaktionen, eine Beschriftung unter jedem Icon und ein aktiver Tab, der durch Farbe, eine Markierungslinie und seine Beschriftung erkennbar ist und nicht nur durch Farbe. Hinweise verbinden ein Icon, einen Titel und einen erklärenden Satz und sind damit ebenfalls nicht auf Farbe angewiesen.
- **Informationsarchitektur.** Die Navigation wurde zu Home, Actions, Feedback und Profile. Prüfen wanderte vom eigenen Tab in die Schnellaktionen der Startseite, wo man es zuerst sucht, und ein Feedback-Tab gibt Nutzern einen direkten Draht zum Team. Die Startseite gliedert die Inhalte jetzt in Kunstwerke und Übertragene Werke, jeweils mit einem Link zur vollständigen Liste.

## Ein Ablauf im Detail: ein Provenienzdokument hinzufügen

Die Provenienz gibt einem zertifizierten Kunstwerk seinen Wert, und ein schlecht abgelegtes Dokument ist ein verlorenes Dokument. In der letzten Version habe ich mehrere Abläufe gestaltet, um einem Kunstwerk Dokumente und zusätzliche Informationen hinzuzufügen. Dieser, ein Eigentumsdokument per Scan hinzufügen, zeigt, wie aus einem Use Case Screens werden.

<dl class="usecase"><dt>Nutzer</dt><dd>Registrierte Nutzer: Künstler, Sammler oder Unternehmen</dd><dt>Ziel</dt><dd>Ein Eigentumsdokument zu einem bestimmten Kunstwerk hochladen, damit die Provenienz vollständig bleibt</dd><dt>Plattform</dt><dd>iOS und Android</dd><dt>Einstieg</dt><dd>Kunstwerkdetails, Tab Dokumente, Dokument hinzufügen</dd><dt>Ergebnis</dt><dd>Das Dokument ist klassifiziert, dem Kunstwerk zugeordnet und später für die Provenienz leicht zu finden</dd></dl>

### 1. Den richtigen Ort finden

<ol class="flow-steps" style="--start:0"><li><img src="/projects/smartstamp/doc-flow/01-artwork.webp" alt="Kunstwerkdetails mit den Tabs Kunstwerk und Dokumente und Schnellaktionen" loading="lazy" /><p><strong>Kunstwerkdetails.</strong> Dokumente haben einen eigenen Tab neben den Kunstwerkdaten, einen Tipp entfernt.</p></li><li><img src="/projects/smartstamp/doc-flow/02-documents-empty.webp" alt="Leerer Tab Dokumente, der erklärt, warum Dokumente wichtig sind, mit Button Dokument hinzufügen" loading="lazy" /><p><strong>Ein leerer Zustand, der erklärt.</strong> Er sagt, warum Dokumente wichtig sind, und bietet eine einzige Hauptaktion.</p></li></ol>

### 2. Klassifizieren und beschreiben

<ol class="flow-steps" style="--start:2"><li><img src="/projects/smartstamp/doc-flow/04-title.webp" alt="Formular mit dem Titel, vorausgefüllt mit dem Namen des Eigentümers" loading="lazy" /><p><strong>Sinnvolle Vorgaben.</strong> Der Titel beginnt mit dem Namen des Eigentümers und lässt sich ändern.</p></li><li><img src="/projects/smartstamp/doc-flow/05-type.webp" alt="Raster der Dokumenttypen mit ausgewähltem Eigentum" loading="lazy" /><p><strong>Typ vor Datei.</strong> Acht Typen mit Icon und Beschriftung. Die Auswahl wird gefüllt dargestellt und hängt nie nur an der Farbe.</p></li><li><img src="/projects/smartstamp/doc-flow/06-description.webp" alt="Formular mit ausgefüllter optionaler Beschreibung" loading="lazy" /><p><strong>Optionaler Kontext.</strong> Eine Beschreibung mit Zeichenzähler, die nie blockiert.</p></li></ol>

### 3. Passend anhängen

<ol class="flow-steps" style="--start:5"><li><img src="/projects/smartstamp/doc-flow/07-attach-options.webp" alt="Upload-Optionen: Dokument scannen, Foto aufnehmen, Bild wählen oder Datei anhängen" loading="lazy" /><p><strong>Vier Wege.</strong> Scannen ist die empfohlene erste Option, Foto, Bild und Datei sind Alternativen.</p></li><li><img src="/projects/smartstamp/doc-flow/08-scan.webp" alt="Scanner in der App rahmt ein Zertifikat mit einem Hinweis ein" loading="lazy" /><p><strong>Geführtes Scannen.</strong> Die Kamera rahmt die Seite ein, mit Farb- und Automatikmodus.</p></li><li><img src="/projects/smartstamp/doc-flow/09-scan-capture.webp" alt="Scanner mit erkanntem Dokument und Speichern-Button" loading="lazy" /><p><strong>Aufnehmen und bestätigen.</strong> Der Nutzer prüft das Ergebnis vor dem Anhängen oder nimmt es neu auf.</p></li></ol>

### 4. Prüfen und speichern

<ol class="flow-steps" style="--start:8"><li><img src="/projects/smartstamp/doc-flow/10-attached.webp" alt="Formular mit angehängtem Dokument und der Möglichkeit, es zu entfernen" loading="lazy" /><p><strong>Alles auf einen Blick.</strong> Titel, Typ, Beschreibung und Datei zusammen, mit einer klaren Möglichkeit, die Datei vor dem Speichern zu entfernen.</p></li></ol>

Die Entscheide dahinter:

- **Am Ursprung klassifizieren.** Wer den Typ vor der Datei wählt, legt jedes Dokument von Anfang an richtig ab. So lässt sich die Provenienz später nach Typ filtern und gruppieren, statt ein Haufen Anhänge zu sein.
- **Scannen statt fotografieren.** Ein Scanner in der App mit Rahmenhilfe liefert gerade, lesbare Dokumente, die auch Jahre später als Nachweis taugen.
- **Wenig Aufwand.** Ein vorausgefüllter Titel, eine optionale Beschreibung und eine Hauptaktion pro Screen halten eine Aufgabe kurz, die man sonst gern aufschiebt.
- **Zugängliche Auswahl.** Jede Typ-Kachel kombiniert Icon und Beschriftung, und die Auswahl ändert Füllung und Iconfarbe, nicht nur den Rahmen.

## Entscheidungen und ihr Preis

**1. Aktionen vor Objekten.** Die Navigation ist nach Registrieren, Prüfen und Übertragen geordnet, nicht nach der Datenbank.

*Preis:* Spaces sind nicht mehr der Einstieg; sie unterstützen die Aktionen von der Startseite aus. *Gewinn:* Ein Werk zu übertragen ging von fünf Ebenen auf einen Tipp.

**2. Lücken sichtbar machen, bevor Screens entstehen.** Der erste Flow zeigte Undefiniertes in Blau und offene Fragen in Rosa.

*Preis:* Das erste Ergebnis hatte keine ausgearbeitete Oberfläche. *Gewinn:* Eine Agenda für Entscheide mit den Gründern, dem Marketing und der Entwicklung, und in Version 1.2 hatte jeder Ast eine Antwort.

**3. Mindestens drei Fingerabdrücke, mehr als Option.** Jeder Fingerabdruck fliesst in die digitale ID des Werks und sein Blockchain-Zertifikat ein, die Basis eines digitalen Portfolios für Transport, Verkauf und Identifikation.

*Preis:* Das Registrieren dauert länger als ein einzelnes Foto. *Gewinn:* Eine ID, die sicher genug ist, um das Werk zu zertifizieren, mit drei, sechs, sieben oder neun Aufnahmen je nach Werk.

**4. Jeden Nutzer mit KYC verifizieren.** Investoren und alle, die sich registrieren, mussten echte, zertifizierte Personen sein, und der Funnel musste einfach bleiben, damit Registrierungen bis zum Ende kommen.

*Preis:* Ein zusätzlicher Schritt im Onboarding. *Gewinn:* Zertifizierte Nutzer, und 90% von ihnen schlossen die Identitätsprüfung ab.

## Ein System hinter den Screens

Ich organisierte die Arbeit so, dass sie mit dem Produkt wachsen konnte: eine Figma-Datei pro Funktion (Home, Registrieren, Prüfen, Übertragen, Space, Suche, Profil, Ereignisprotokoll, Archiv, E-Mails und Promotionen in der App), alle auf einer gemeinsamen UI-Bibliothek mit dokumentierten Komponenten. Jede Datei folgt denselben drei Regeln.

### Ein Cover, ein Label

Ich vereinheitlichte die Covers, damit jede Datei im Arbeitsbereich gleich aussieht: Markenfarbe, Logo und ein Label mit dem Inhalt der Datei, dazu ein Versions-Chip. Niemand muss eine Datei öffnen, um zu wissen, was darin ist, und die Version zeigt, welche aktuell ist.

![Der Figma-Arbeitsbereich von Smartstamp: über 20 Dateien mit identischen Covers, jede mit ihrem Inhalt beschriftet, etwa Home, UI Library, Userflow, Verify Artwork, Register Artwork und Archive, dazu ein Versions-Chip.](/projects/smartstamp/figma-files.webp "Überall dasselbe Cover. Nur das Label ändert sich: Home, UI Library, Verify Artwork, Archive.")

### Dieselben Seiten in jeder Datei

Innen hat jede Datei dieselbe Seitenstruktur, in Gruppen getrennt, damit sich alle im Team auch in einer Datei zurechtfinden, die sie noch nie geöffnet haben.

<div class="pages" role="group" aria-label="Seitenstruktur einer Funktionsdatei">
  <div class="pg"><ul><li>Cover</li><li>Changelog</li></ul><p><strong>Kontext.</strong> Das Cover und ein Changelog: was sich geändert hat, wann und warum.</p></div>
  <div class="pg"><ul><li><span>Dashboard</span><span>Home</span><span>Iteration 1</span></li><li><span>Dashboard</span><span>Home</span><span>Iteration 2</span></li><li><span>Home</span><span>Home</span><span>Iteration 1</span></li></ul><p><strong>In Arbeit.</strong> Eine Seite pro Iteration, benannt nach Bereich, Screen und Iterationsnummer. Frühere Iterationen bleiben neben der aktuellen, so lässt sich die Entwicklung leicht nachvollziehen.</p></div>
  <div class="pg"><ul><li><span>Home</span><span>Tablet</span></li></ul><p><strong>Geräte.</strong> Anpassungen an andere Bildschirmgrössen, getrennt von der Arbeit fürs Telefon.</p></div>
  <div class="pg"><ul><li>Archive</li></ul><p><strong>Archiv.</strong> Verworfene Ansätze. Aus dem Weg, aber nie gelöscht, damit sich jede Entscheidung zurückverfolgen lässt.</p></div>
</div>

### Jeder Flow beginnt mit einer Spezifikation

Jeder Flow ist ein Frame mit denselben Teilen: links eine Spezifikation, rechts die Screens in ihrer Reihenfolge. Die Spezifikation beantwortet das Warum, bevor die Screens das Was zeigen.

<dl class="spec-fields"><div><dt>Wer und wo</dt><dd>Nutzertyp, Plattform und Einstiegspunkt</dd></div><div><dt>Warum</dt><dd>Anwendungsfall und erwartetes Ergebnis</dd></div><div><dt>Was passiert</dt><dd>Auslöser und Hauptaktion</dd></div><div><dt>Wie es aussieht</dt><dd>Designreferenz: die Muster und Komponenten, auf denen der Flow aufbaut</dd></div></dl>

![Spezifikation des Flows zum Übertragen eines Werks über die Schnellaktionen der Startseite: eine Tabelle mit Titel, Anwendungsfall, Nutzertyp, Plattform, Einstiegspunkt, Auslöser, Hauptaktion, erwartetem Ergebnis und Designreferenz, daneben die Startseite und der Screen Choose Artwork.](/projects/smartstamp/flow-spec-transfer.webp "Beispiel: ein Werk über die Schnellaktionen der Startseite übertragen. Zuerst die Spezifikation, dann die Screens in ihrer Reihenfolge.")

### Eine Bibliothek darunter

Jede Datei ist mit einer UI-Bibliothek verbunden. Sie beginnt mit wenigen Basiskomponenten, und die Muster auf den Screens bauen darauf auf. Eine Änderung an einem Button erreicht so jede Schnellaktion, jede Karte und jedes Formular, das ihn nutzt.

<figure class="ss-lib" aria-label="Button-Zustände und Komponenten von Smartstamp, neu gezeichnet">
  <div class="ss-panel">
    <p class="ss-t">Button-Hierarchie</p>
    <div class="ss-grid"><div class="ss-row ss-head"><span></span><span>Standard</span><span>Hover</span><span>Gedrückt</span></div><div class="ss-row"><span class="ss-k">Primär</span><span class="ss-b ss-pri ss-d" aria-hidden="true">Weiter</span><span class="ss-b ss-pri ss-h" aria-hidden="true">Weiter</span><span class="ss-b ss-pri ss-p" aria-hidden="true">Weiter</span></div><div class="ss-row"><span class="ss-k">Sekundär</span><span class="ss-b ss-sec ss-d" aria-hidden="true">Weiter</span><span class="ss-b ss-sec ss-h" aria-hidden="true">Weiter</span><span class="ss-b ss-sec ss-p" aria-hidden="true">Weiter</span></div><div class="ss-row"><span class="ss-k">Tertiär</span><span class="ss-b ss-ter ss-d" aria-hidden="true">Weiter</span><span class="ss-b ss-ter ss-h" aria-hidden="true">Weiter</span><span class="ss-b ss-ter ss-p" aria-hidden="true">Weiter</span></div></div>
  </div>
  <ul class="ss-rules"><li><strong>Eine Hauptaktion pro Screen</strong>Der gefüllte Button markiert den wichtigsten Schritt, damit der nächste Schritt immer klar ist.</li><li><strong>Tippflächen von 44 bis 48 px</strong>Die Mindestgrössen von iOS und Android, bei jedem Button und Icon eingehalten.</li><li><strong>Rückmeldung bei jedem Tippen</strong>Hover, Gedrückt und Deaktiviert reagieren sofort.</li></ul>
  <div class="ss-panel ss-parts">
    <p class="ss-t">Aus denselben Bausteinen</p>
    <div class="ss-cols">
      <div><p class="ss-s">Schnellaktionen</p><div class="ss-qa"><span><i><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M9 12l2 2 4-4"/></svg></i>Verify Artwork</span><span><i><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M12 8v8M8 12h8"/></svg></i>New Space</span><span><i><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="4" width="13" height="13" rx="2"/><path d="M4 8v11h11"/><path d="M11 11h5m-2-2 2 2-2 2"/></svg></i>Transfer Artwork</span><span><i><svg viewBox="0 0 24 24" aria-hidden="true"><g class="fill"><circle cx="6" cy="6" r="1.6"/><circle cx="12" cy="6" r="1.6"/><circle cx="18" cy="6" r="1.6"/><circle cx="6" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="18" cy="12" r="1.6"/><circle cx="6" cy="18" r="1.6"/><circle cx="12" cy="18" r="1.6"/><circle cx="18" cy="18" r="1.6"/></g></svg></i>More Options</span></div></div>
      <div><p class="ss-s">Spaces</p><div class="ss-sp"><span class="ss-new"><i><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M12 8v8M8 12h8"/></svg></i>New space</span><span class="ss-ph"></span><span class="ss-ph"></span></div></div>
      <div><p class="ss-s">Prüfoptionen</p><div class="ss-vo"><span><i><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h3l2-2h6l2 2h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg></i><b>Scan QR code</b><small>Point your camera at the Smartstamp QR on a certificate, label or price list</small></span><span><i><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="10" r="2.5"/><path d="M8.5 16.5c1-2 6-2 7 0"/></svg></i><b>Enter Smartstamp ID</b><small>Type the Smartstamp ID manually</small></span></div></div>
    </div>
  </div>
</figure>

**Immer gleich dokumentiert.** Jede Komponentenseite beantwortet dieselben Fragen, damit Design und Entwicklung sie ohne Rückfragen nutzen können. Die Seite des Buttons zum Beispiel:

<dl class="spec-fields ss-docs"><div><dt>Zweck</dt><dd>Buttons lösen Aktionen aus oder führen zum nächsten Schritt im Flow.</dd></div><div><dt>Verhalten</dt><dd>Eine Aktion pro Tippen, mit sofortiger Rückmeldung.</dd></div><div><dt>Varianten</dt><dd>Primär, sekundär und tertiär, jede mit einer Rolle in der Hierarchie.</dd></div><div><dt>Zustände und Aktionen</dt><dd>Standard, Hover, Gedrückt und Deaktiviert, dazu die Aktionen in jedem Header.</dd></div><div><dt>Interaktion und Usability</dt><dd>Tippflächen, fixierte Header und ein Zurück-Pfeil, der immer eine Ebene zurückführt.</dd></div><div><dt>Visuelle Hierarchie und Hinweise</dt><dd>Ausrichtung, Icon-Stil und das Verhalten in Modals.</dd></div></dl>

![Dokumentationsseite der Button-Komponente: Verhalten, Varianten, Header-Aktionen, Regeln zu Interaktion und Usability, visuelle Hierarchie und Hinweise zum Verhalten.](/projects/smartstamp/ui-button-docs.webp "Die Seite des Buttons in der Bibliothek, mit allen Abschnitten ausgefüllt.")

## Zusammenarbeit mit der Entwicklung nach dem Launch

Sobald die App im Test war, lieferte ich Verbesserungen als kurze Spezifikationen, die die Entwicklung in der nächsten Version umsetzen konnte, mit derselben Vorlage wie die Flows: das Problem, betroffene Nutzer und Plattformen, Einstiegspunkt, Auslöser und erwartetes Ergebnis.

![Eine Designspezifikation, die die Höhe der Navigationsleiste von 83 auf 56 Pixel reduziert, neben der aktualisierten Startseite von Smartstamp.](/projects/smartstamp/spec-bottom-nav.webp "Beispiel einer Spezifikation: die Navigationsleiste von 83 px auf 56 px verkleinern, im Einklang mit Material Design und den Richtlinien von Apple.")

Ein Beispiel: Die Navigationsleiste war 83 Pixel hoch und drängte die Werkvorschauen auf kleineren Telefonen zusammen. Mit 56 Pixeln gewann jeder Screen rund 27 Pixel für Inhalt zurück, und der Button zum Registrieren rückte näher an den Daumen.

## Was ich gelernt habe

- Wer ein Produkt übernimmt, sollte zuerst ein gemeinsames Bild davon schaffen, was fehlt. Sichtbare Lücken beschleunigen Entscheidungen mehr als ausgefeilte Screens.
- Navigation sollte sich daran orientieren, was Menschen tun wollen, nicht an den Objekten in der Datenbank. Das macht das Produkt auch leichter erweiterbar.
- Ein erster Build in echten Händen, selbst in TestFlight, zeigt am schnellsten, was am Design nicht stimmt. Version 2 entstand aus der Nutzung von Version 1.

## Die App ausprobieren

Smartstamp ArtID ist für iOS und Android verfügbar. Lade die App herunter und registriere oder prüfe selbst ein Kunstwerk.

<p class="store-links" aria-label="Download-Links"><a class="btn btn--primary" href="https://apps.apple.com/us/app/smartstamp-artid/id1670131767" rel="noopener" target="_blank">Im App Store laden</a><a class="btn" href="https://play.google.com/store/apps/details?id=com.smartstamp.app" rel="noopener" target="_blank">Bei Google Play holen</a></p>
