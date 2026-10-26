# Staffbase-Custom-Widget

## Installation

1. Studio → Einstellungen → Custom Widgets.
2. Als Widget Bundle diese URL eintragen:
   https://david24387.github.io/adventskalender/euromaster.adventskalender.js
3. Installieren, anschließend Seiteneditor neu laden.
4. EUROMASTER Adventskalender zur gewünschten Seite hinzufügen.
5. Für den Test vor Dezember im Widget den Vorschaumodus aktivieren.

## Nutzererkennung

Die Factory erhält die Staffbase Widget API und liest über getUserInformation() das aktuelle Profil. Verwendet werden ausschließlich ID, Vorname und Nachname. Im geöffneten Türchen wird die erkannte Person angezeigt. Ohne erkannte ID bleibt die Teilnahme gesperrt. Die Nutzerkennung trennt lokale Demo-Klicks unterschiedlicher Konten.

## Grenzen dieser Version

Keine zentrale Teilnehmerliste, keine verbindliche Gewinnspielteilnahme. Lokale Demo-Klicks können durch Löschen des Browserspeichers zurückgesetzt werden. Datumskontrolle basiert auf der Gerätezeit. Vorschaumodus erlaubt die Auswahl eines beliebigen Türchens. Keine Backend-Authentifizierung implementiert. Für produktiven Einsatz benötigt der Kalender einen geschützten Dienst mit verifizierter Nutzeridentität, Datumsprüfung, eindeutiger Kombination aus Jahr/Türchen/Nutzer-ID und geschütztem Export für die Auslosung. Niemals SDK-Profildaten allein als vertrauenswürdige serverseitige Anmeldung akzeptieren.

## Technische Prüfung

Bundle-Registrierung, Konfiguration, Factory und eingebettete JavaScript-Syntax lokal geprüft. Test in einer echten Staffbase-Sitzung und visuelle Prüfung auf Desktop und in der App stehen aus. Die bisherige eigenständige index.html bleibt als Demo erreichbar.

Grundlage: https://developers.staffbase.com/frameworks/customwidget-development/ und https://developers.staffbase.com/tutorials/display-user-info-in-customwidget/
