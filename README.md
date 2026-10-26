# EUROMASTER Adventskalender 2026

Statischer, mobil angepasster Prototyp mit 24 Türchen.

## Anzeigen

GitHub → Settings → Pages → Deploy from a branch → main → / (root) → Save.
Nach erfolgreicher Pages-Veröffentlichung: https://david24387.github.io/adventskalender/

Vorschau mit frei wählbarem Dezembertag: https://david24387.github.io/adventskalender/?preview=1
Die Vorschau ist ausdrücklich als Demo markiert und speichert getrennt vom normalen Kalender.

## Verhalten

- Ein Türchen öffnet ausschließlich am zugehörigen Tag im Dezember 2026, 00:00–23:59 Uhr, Europe/Berlin.
- Vorher und nachher ist das Türchen gesperrt. Bei Tageswechsel schließt auch ein offener Dialog.
- Teilnehmen merkt einen Demo-Klick pro Türchen im lokalen Browser vor. Es gibt keine zentrale Teilnehmerliste und keine echte Gewinnspielanmeldung.
- Keine Namen oder Kontaktdaten werden erfasst.

## Vor einem echten Gewinnspiel

Eine zentrale Teilnahme-API, Identitätsprüfung und eine serverseitige Datumsvalidierung ergänzen. Die aktuelle Datumsprüfung verwendet die Gerätezeit und ist als Oberfläche gedacht; sie ist manipulierbar. Die Vorschau gibt keine Berechtigung für echte Teilnahmen.

## Prüfung

JavaScript-Syntax, Berliner Mitternachtsgrenzen, taggenaue Freigabe und Jahresbeschränkung geprüft. Ein automatisierter Browser-/Layouttest konnte mangels installiertem Browser nicht ausgeführt werden.
