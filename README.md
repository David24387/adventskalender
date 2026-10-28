# EUROMASTER Adventskalender 2026

24 Türchen mit je einem ausgearbeiteten Weihnachtsinhalt und zusätzlicher Tagesverlosung. Enthalten sind Rezepte, Bastelanleitungen und kleine Adventsideen. Jeder Inhalt enthält Material/Zutaten, Schritte und Tipps.

Kalender: https://david24387.github.io/adventskalender/

## Teilnahme

Im Masternet übernimmt das Widget Vorname, Nachname und – soweit von Staffbase freigeschaltet – `primaryEmail`. Fehlende Angaben können ergänzt werden. Beim Klick auf **Jetzt teilnehmen** sendet es Name und E-Mail an die konfigurierte Apps-Script-Web-App. Dort wird eine zentrale Gesamtliste mit Tagesansichten in der vom Nutzer vorgegebenen Google-Tabelle geführt.

**Die echte Teilnahme ist noch nicht aktiviert:** `config.json` enthält noch keine Web-App-URL. Der fertige Backend-Code und die Einrichtung stehen in [backend/README.md](backend/README.md). Der Tabellenlink allein ist kein Schreib-Endpunkt. Es wurden noch keine Blätter in Google angelegt und keine Teilnehmerdaten übertragen.

`config.json` steuert die Web-App-URL, Gewinne je Tag (`prizes`: z. B. Schlüssel `1` bis `24`), `termsUrl` und `privacyUrl`. Bis Gewinne hinterlegt sind, benennt die Oberfläche keinen erfundenen Preis.

## Datum und Vorschau

Ein Türchen öffnet nur am jeweiligen Datum im Dezember 2026, Europe/Berlin. Die API prüft den Tag unabhängig anhand ihrer Serverzeit. Bei Tageswechsel schließt ein offener Dialog. Der vorhandene Redaktionsbereich öffnet alle Inhalte zum Testen; Vorschauklicks werden niemals in die echte Tabelle geschrieben. Das Vorschaupasswort bleibt unverändert. Die Vorschau ist ein Oberflächenschutz, keine Teilnehmerverwaltung.

Beide Widget-Dateien enthalten dieselbe Oberfläche wie `index.html`. Die bestehende Bundle-URL bleibt erhalten. Keine Namen oder E-Mail-Adressen werden lokal gespeichert oder in GitHub abgelegt.

## Prüfung

Lokal geprüft: JavaScript-Syntax, alle 24 Inhalte, Tagesfreigabe und Berliner Mitternacht, Vorschau ohne Netzwerkzugriff, Fehlerszenarien und Teilnahmebestätigung mit simuliertem DOM/API-Dienst, Widget-Registrierung sowie Backend-Datumsprüfung, Duplikatschutz und Schutz vor Tabellenformeln. Ein Browser-/Layouttest war mangels verfügbarem Browser nicht möglich. Echte Google-Bereitstellung und Masternet-Sitzung müssen nach der Verbindung separat geprüft werden.
