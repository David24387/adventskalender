# EUROMASTER Adventskalender 2026

24 Türchen mit je einem ausgearbeiteten Weihnachtsinhalt und zusätzlicher Tagesverlosung. Enthalten sind Rezepte, Bastelanleitungen und kleine Adventsideen. Jeder Inhalt enthält Material/Zutaten, Schritte und Tipps.

Kalender: https://david24387.github.io/adventskalender/

## Teilnahme

Im Masternet übernimmt das Widget Vorname, Nachname und – soweit von Staffbase freigeschaltet – `primaryEmail`. Fehlende Angaben können ergänzt werden. Beim Klick auf **Jetzt teilnehmen** sendet es Name und E-Mail an die konfigurierte Apps-Script-Web-App. Dort wird eine zentrale Gesamtliste mit Tagesansichten in der vom Nutzer vorgegebenen Google-Tabelle geführt.

Die bereitgestellte Google-Web-App ist in `config.json` hinterlegt. Der Kalender sendet echte Teilnahmen am jeweiligen Dezembertag an diesen Dienst. Die tatsächliche Speicherung in Google und die Erreichbarkeit aus Masternet müssen noch im Zielsystem bestätigt werden. Der Redaktionsbereich bleibt eine Vorschau ohne Schreibzugriff. Backend-Code und Einrichtung: [backend/README.md](backend/README.md).

`config.json` steuert die Web-App-URL, Gewinne je Tag (`prizes`: z. B. Schlüssel `1` bis `24`), `termsUrl` und `privacyUrl`. Bis Gewinne hinterlegt sind, benennt die Oberfläche keinen erfundenen Preis.

## Datum und Vorschau

Ein Türchen öffnet nur am jeweiligen Datum im Dezember 2026, Europe/Berlin. Die API prüft den Tag unabhängig anhand ihrer Serverzeit. Bei Tageswechsel schließt ein offener Dialog. Der vorhandene Redaktionsbereich öffnet alle Inhalte zum Testen; Vorschauklicks werden niemals in die echte Tabelle geschrieben. Das Vorschaupasswort bleibt unverändert. Die Vorschau ist ein Oberflächenschutz, keine Teilnehmerverwaltung.

Beide Widget-Dateien enthalten dieselbe Oberfläche wie `index.html`. Die bestehende Bundle-URL bleibt erhalten. Keine Namen oder E-Mail-Adressen werden lokal gespeichert oder in GitHub abgelegt.

## Prüfung

Lokal geprüft: JavaScript-Syntax, alle 24 Inhalte, Tagesfreigabe und Berliner Mitternacht, Vorschau ohne Netzwerkzugriff, Fehlerszenarien und Teilnahmebestätigung mit simuliertem DOM/API-Dienst, Widget-Registrierung sowie Backend-Datumsprüfung, Duplikatschutz und Schutz vor Tabellenformeln. Ein Browser-/Layouttest war mangels verfügbarem Browser nicht möglich. Echte Google-Bereitstellung und Masternet-Sitzung müssen nach der Verbindung separat geprüft werden.

## Rezeptbilder, Bastelschritte und Musik
Alle zwölf Rezepte haben ein passendes KI-generiertes Foto (Serviervorschlag). Alle acht Bastelanleitungen enthalten vier eigene SVG-Zeichnungen mit Schritttext, die auf Mobilgeräten untereinander angezeigt werden. Die Bilddateien liegen unter `assets/`; `content.json` enthält dieselben redaktionellen Inhalte wie die eingebetteten Oberflächen.

An den Tagen 3, 6, 12, 17, 20 und 24 spielt beim Öffnen eine kurze instrumentale Spieluhr-Melodie. Verwendet werden selbst synthetisierte Arrangements von „Jingle Bells“, „O Tannenbaum“ und „Stille Nacht“, keine externen Tonaufnahmen oder Streaming-Dienste. Die Türchen-Eigenschaft `song` wählt `jingle`, `tree` oder `silent`; ohne diese Eigenschaft bleibt das Türchen still. Die Wiedergabe startet innerhalb des Türchen-Klicks, lässt sich pausieren und erneut starten und stoppt beim Schließen, Verlassen der Vorschau sowie Wechseln des Tabs. Wenn der Browser den automatischen Start blockiert, bleibt ein Abspielknopf sichtbar. Im Staffbase-Iframe ist `allow="autoplay"` gesetzt; übergeordnete Browser-/Staffbase-Regeln gelten weiterhin.

Für redaktionelle Änderungen müssen `index.html`, `content.json` und die eingebetteten Templates in beiden Widget-Dateien synchron gehalten werden. Die Teilnahme-Anbindung und das Vorschaupasswort bleiben erhalten.
