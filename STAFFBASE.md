# Staffbase-Custom-Widget v2

Bestehende Bundle-URL:
https://david24387.github.io/adventskalender/euromaster.adventskalender.js

Das Bundle liefert jetzt 24 unterschiedliche Weihnachtsinhalte plus eine Tagesverlosung. `euromaster.adventskalender.v2.js` ist identisch. Änderungen werden gegebenenfalls erst nach Aktualisierung des Widgets bzw. des Staffbase-Caches sichtbar.

## Identität

`widgetApi.getUserInformation()` liefert Vorname und Nachname; `primaryEmail` wird übernommen, wenn es euer Staffbase-System mitliefert. Laut Staffbase-Dokumentation muss der Zugriff auf `primaryEmail` gegebenenfalls durch den Customer Success Manager freigeschaltet werden. Fehlt die E-Mail, fragt das Formular danach. Vorhandene Profildaten sind schreibgeschützt. Auf der eigenständigen GitHub-Seite werden beide Angaben abgefragt.

Die Übergabe ins eingebettete Dokument nutzt einen zufälligen Kanal und prüft die Absender-Window-Referenz. Dies schützt die Nachrichtenverarbeitung, ersetzt aber keine serverseitige Authentifizierung. Die Google-Anbindung erfasst Kontaktangaben und verifiziert keine Staffbase-Mitgliedschaft.

## Zentrale Tabelle

Einrichtung: [backend/README.md](backend/README.md). Die URL wird zentral aus `config.json` geladen. Die Tabelle selbst ist kein öffentlicher Teil des Widgets. Erst nach positiver Backend-Antwort bestätigt die Oberfläche die Anmeldung. Doppelklicks werden blockiert, Wiederholungen serverseitig pro E-Mail und Tag dedupliziert. Vorschau und echte Teilnahme sind getrennt.

Quelle: https://developers.staffbase.com/tutorials/display-user-info-in-customwidget/
