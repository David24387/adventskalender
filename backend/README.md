# Zentrale Teilnehmerliste aktivieren

Zieltabelle: https://docs.google.com/spreadsheets/d/1MW9MiSW6HRsV8SrUknZA8LZHjEnnuc9LEh2u2q7dhsg/edit

1. In genau dieser Tabelle **Erweiterungen → Apps Script** öffnen.
2. Den Inhalt aus `Code.gs` in den Script-Editor kopieren und speichern.
3. Oben `setupAdvent` auswählen, einmal ausführen und den Zugriff auf die Tabelle erlauben.
4. **Bereitstellen → Neue Bereitstellung → Web-App** wählen. Ausführen als: **Ich**. Zugriff: **Jeder** (sofern eure Organisation dies zulässt). Die Tabelle selbst nicht öffentlich freigeben.
5. Die resultierende URL mit `https://script.google.com/macros/s/…/exec` kopieren und in der Datei `config.json` unter `participationUrl` eintragen. Alternativ die URL an den Bearbeiter des Kalenders geben.

Das Skript ist bereits auf die oben genannte Tabellen-ID festgelegt. Es legt ein neues Blatt **Advent Teilnahmen 2026** und 24 automatisch gefüllte Tagesansichten an. Bestehende fremde Blätter werden weder gelöscht noch überschrieben. Gleichnamige Tagesblätter werden unverändert gelassen; bei vorhandenen Blättern deren Aufbau manuell prüfen.

Spalten: **Eingetragen am | Datum | Türchen | Name | E-Mail**. Der interne Teilnahmeschlüssel ist ausgeblendet. Die Tagesansichten lesen die Gesamtliste per QUERY, damit die Daten nur einmal geschrieben werden und keine auseinanderlaufenden Kopien entstehen.

## Verhalten

- Nur POST speichert. GET liefert nur den Dienststatus, niemals Teilnehmerdaten.
- Serverseitige Zeitprüfung: nur der jeweilige Tag im Dezember 2026, Europe/Berlin.
- Pro normalisierter E-Mail-Adresse und Tag ein Eintrag. Ein Lock schützt parallele Anfragen und Wiederholungen nach Zeitüberschreitungen.
- Vorschau erzeugt keine Anfrage und wird zusätzlich serverseitig zurückgewiesen.
- Kein Name und keine E-Mail werden im GitHub-Repository oder im Browserspeicher abgelegt.
- Erfolgsanzeige erst nach einer lesbaren positiven Antwort. Bei Netzfehlern kann ohne Doppeleintrag erneut versucht werden.

## Grenzen und Inbetriebnahme

Name und E-Mail sind Kontaktangaben, **keine serverseitig verifizierte Staffbase-Anmeldung**. Die öffentlich erreichbare Web-App nimmt Selbstauskünfte entgegen. Die gleiche E-Mail wird dedupliziert; verschiedene oder fremde Adressen werden damit nicht verhindert. Für streng auf Mitarbeitende begrenzte Gewinnspiele benötigt ihr zusätzlich eine verifizierte Anmeldung oder E-Mail-Bestätigung. Keine API-Schlüssel oder Staffbase-Administratortoken im Widget hinterlegen.

Vor dem Start in `config.json` die tatsächlichen Gewinne pro Tag sowie Links zu euren Teilnahmebedingungen und Datenschutzhinweisen ergänzen. Es wurden keine Gewinne erfunden. Die Google-Tabelle nur für das Organisationsteam freigeben und Aufbewahrung/Löschung intern festlegen.

Die Web-App muss aus dem tatsächlichen Masternet und der mobilen App getestet werden: Netzwerkfreigaben, Apps-Script-Quoten, Redirects und Antworten können von eurer Organisation eingeschränkt sein. Bis eine gültige Web-App-URL gesetzt ist, bleibt die echte Teilnahme sichtbar gesperrt. Testklicks sind im passwortgeschützten Redaktionsbereich möglich, ohne echte Daten zu schreiben.

Nach Script-Änderungen eine neue Version über **Bereitstellungen verwalten** veröffentlichen. Ein Speichern allein aktualisiert die produktive Web-App nicht.


# Apps Script – Testfreigabe Türchen 1

Die vollständige aktuelle Backend-Datei ist `Code.gs`. Im bereits mit der Gewinner-Tabelle verbundenen Apps-Script-Projekt den bisherigen Code durch diese Datei ersetzen und speichern. Anschließend die bestehende Web-App-Bereitstellung auf eine neue Version aktualisieren (keine neue URL anlegen).

Am 29.10.2026 (Europe/Berlin) akzeptiert das Backend echte Testeinträge ausschließlich für Türchen 1. Sie stehen in `Advent Teilnahmen 2026` mit dem Datum `2026-10-29` und einem eigenen TEST-Schlüssel. Sie werden nicht in die Dezember-Tagesansichten aufgenommen und verhindern keine reguläre Teilnahme im Dezember. Am 30.10. ist die Testfreigabe automatisch abgelaufen.

`doGet` liefert nach der Aktualisierung die Version `2026-10-29-test1`; eine ältere Antwort zeigt, dass die neue Version noch nicht bereitgestellt wurde.

Name und gültige E-Mail sind weiterhin nötig. Im Widget werden sie aus dem Staffbase-Profil übernommen, sofern die Plattform sie liefert. Die Redaktionsvorschau sendet weiterhin keine Teilnahmen an Google.
