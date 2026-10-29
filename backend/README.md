# Apps Script – Testfreigabe Türchen 1

Die vollständige aktuelle Backend-Datei ist `Code.gs`. Im bereits mit der Gewinner-Tabelle verbundenen Apps-Script-Projekt den bisherigen Code durch diese Datei ersetzen und speichern. Anschließend die bestehende Web-App-Bereitstellung auf eine neue Version aktualisieren (keine neue URL anlegen).

Am 29.10.2026 (Europe/Berlin) akzeptiert das Backend echte Testeinträge ausschließlich für Türchen 1. Sie stehen in `Advent Teilnahmen 2026` mit dem Datum `2026-10-29` und einem eigenen TEST-Schlüssel. Sie werden nicht in die Dezember-Tagesansichten aufgenommen und verhindern keine reguläre Teilnahme im Dezember. Am 30.10. ist die Testfreigabe automatisch abgelaufen.

`doGet` liefert nach der Aktualisierung die Version `2026-10-29-test1`; eine ältere Antwort zeigt, dass die neue Version noch nicht bereitgestellt wurde.

Name und gültige E-Mail sind weiterhin nötig. Im Widget werden sie aus dem Staffbase-Profil übernommen, sofern die Plattform sie liefert. Die Redaktionsvorschau sendet weiterhin keine Teilnahmen an Google.
