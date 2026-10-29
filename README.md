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


## Musik und geöffnete Türchen
Musik gibt es ausschließlich im geöffneten Türchendialog, mit Abspielen/Pause und Quellenangabe. Jeden Tag wird die fest zugeordnete Aufnahme aus 24 unterschiedlichen Weihnachtsliedern gewählt. Alle Aufnahmen liegen lokal unter `assets/music/`; Rechte- und Herkunftsangaben stehen dort in `README.md`. Die Spieluhr-Synthese und der Player oberhalb des Kalenders wurden entfernt. Die Wiedergabe startet im Türchen-Klick, sofern der Browser das zulässt, und stoppt beim Schließen oder Ausblenden des Tabs.

Geöffnete Türchen zeigen nach einer 650-ms-Klappanimation ein goldenes Fenster mit passendem Inhaltsmotiv und Tageszahl. Der Zustand wird ohne Namen oder E-Mail in `localStorage` unter `euromaster-advent-opened-2026` gespeichert, ist geräte-/browserbezogen und wird nicht zwischen Geräten synchronisiert. Die Redaktionsvorschau verwendet einen separaten Zustand nur im Arbeitsspeicher. Die Datumsfreigabe bleibt bestehen; bereits vergangene Türchen werden dadurch nicht erneut freigeschaltet. Reduzierte Bewegung wird berücksichtigt.

Bei erkannten Staffbase-Profilen gibt es keine manuelle Namens-/E-Mail-Eingabe. Das Widget verwendet `primaryEmail`, alternativ `publicEmailAddress`. Fehlen beide, benötigt die automatische Teilnahme weiterhin die E-Mail-Freigabe durch Staffbase.

## Eindeutige tägliche Musik
Alle 24 Tage verwenden unterschiedliche Liedtitel und unterschiedliche Aufnahmen, ohne zyklischen Fallback. Die feste Zuordnung liegt in `music-catalog.json` und den `song`-Werten in `content.json`. Es sind vollständige Chor-, Band- und Instrumentalaufnahmen; keine Spieluhr-Synthese. Herkunft und Lizenz sind im Türchen und in `assets/music/README.md` angegeben.

Musikauswahl: 24 Weihnachtslieder von 9 Interpreten/Ensembles, einschließlich Gitarren- und elektronischer Arrangements. Kein Interpret an zwei aufeinanderfolgenden Tagen. Keine allgemeinen Winter- oder Silvesterstücke.
