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


## Musik und geöffnete Türchen
Musik gibt es ausschließlich im geöffneten Türchendialog, mit Abspielen/Pause und Quellenangabe. Jeden Tag wird die fest zugeordnete Aufnahme aus 24 unterschiedlichen Weihnachtsliedern gewählt. Alle Aufnahmen liegen lokal unter `assets/music/`; Rechte- und Herkunftsangaben stehen dort in `README.md`. Die Spieluhr-Synthese und der Player oberhalb des Kalenders wurden entfernt. Die Wiedergabe startet im Türchen-Klick, sofern der Browser das zulässt, und stoppt beim Schließen oder Ausblenden des Tabs.

Geöffnete Türchen zeigen nach einer 650-ms-Klappanimation ein goldenes Fenster mit passendem Inhaltsmotiv und Tageszahl. Der Zustand wird ohne Namen oder E-Mail in `localStorage` unter `euromaster-advent-opened-2026` gespeichert, ist geräte-/browserbezogen und wird nicht zwischen Geräten synchronisiert. Die Redaktionsvorschau verwendet einen separaten Zustand nur im Arbeitsspeicher. Die Datumsfreigabe bleibt bestehen; bereits vergangene Türchen werden dadurch nicht erneut freigeschaltet. Reduzierte Bewegung wird berücksichtigt.

Bei erkannten Staffbase-Profilen gibt es keine manuelle Namens-/E-Mail-Eingabe. Das Widget verwendet `primaryEmail`, alternativ `publicEmailAddress`. Fehlen beide, benötigt die automatische Teilnahme weiterhin die E-Mail-Freigabe durch Staffbase.

## Eindeutige tägliche Musik
Alle 24 Tage verwenden unterschiedliche Liedtitel und unterschiedliche Aufnahmen, ohne zyklischen Fallback. Die feste Zuordnung liegt in `music-catalog.json` und den `song`-Werten in `content.json`. Es sind vollständige Chor-, Band- und Instrumentalaufnahmen; keine Spieluhr-Synthese. Herkunft und Lizenz sind im Türchen und in `assets/music/README.md` angegeben.

Musikauswahl: 24 Weihnachtslieder von 9 Interpreten/Ensembles, einschließlich Gitarren- und elektronischer Arrangements. Kein Interpret an zwei aufeinanderfolgenden Tagen. Keine allgemeinen Winter- oder Silvesterstücke.
