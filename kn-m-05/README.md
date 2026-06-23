# KN-M-05: Administration von MongoDB

## A) Rechte und Rollen (40%)

#### Ändern Sie den Verbindungstext und versuchen Sie als authSource eine andere Datenbank als admin anzugeben (aber eine existierende). Zeigen Sie so, dass der Zugriff nicht mehr funktioniert.
#### Screenshot des Fehlers bei einer Verbindung mit der falschen Authentifizierungsquelle
<img width="1894" height="1244" alt="image" src="https://github.com/user-attachments/assets/3afbb9b0-d7f9-4f24-968e-c4815d3db876" />

#### Erstellen Sie zwei neue Benutzer mit folgenden Bedingungen für Ihre Themendatenbank:
#### Verwenden Sie für beide Benutzer built-in Rollen, aber keine, die any im Namen hat (z.B. readWriteAnyDatabase, readAnyDatabase)
#### Benutzer 1 darf Daten nur lesen. Authentifizierungsdatenbank ist Ihre Themendatenbank.
#### Benutzer 2 darf Daten lesen und schreiben. Authentifizierungsdatenbank ist admin.

<img width="884" height="726" alt="image" src="https://github.com/user-attachments/assets/7d2e8490-9f7d-4205-97b5-93596d8c5417" />



Screenshots, die zeigen, dass die Rechte für Benutzer 1 funktionieren, im Speziellen:
Screenshot für das Einloggen (Verbindungstext sichtbar)
Screenshot für das Lesen von Daten ohne Fehler
Screenshot für das Schreiben von Daten mit Fehler.

<img width="2084" height="1192" alt="image" src="https://github.com/user-attachments/assets/4ae8c77e-d898-45f8-bd8c-a7c08f89f3f0" />

<img width="2000" height="1148" alt="image" src="https://github.com/user-attachments/assets/85f2c780-748c-4c66-990d-d454856426b3" />

Screenshots, die zeigen, dass die Rechte für Benutzer 2 funktionieren, im Speziellen:
Screenshot für das Einloggen (Verbindungstext sichtbar)
Screenshot für das Lesen von Daten ohne Fehler
Screenshot für das Schreiben von Daten ohne Fehler.


<img width="2500" height="1344" alt="image" src="https://github.com/user-attachments/assets/9f1f05bd-9f5a-484f-9333-2b75682c1cb4" />

<img width="1968" height="1314" alt="image" src="https://github.com/user-attachments/assets/014cb172-7600-49f1-8ba2-bee68c23207f" />

<img width="2172" height="1238" alt="image" src="https://github.com/user-attachments/assets/537ae178-a358-47eb-bdde-cd51e91c0152" />

<img width="1508" height="206" alt="image" src="https://github.com/user-attachments/assets/04bb3b33-5626-4e0f-826e-2609153ef02f" />

## B) Backup und Restore (40%)

### Backup Variante 1

<img width="2508" height="1002" alt="image" src="https://github.com/user-attachments/assets/6c03db2c-ea0d-415a-8c74-39c2c42feb91" />

<img width="558" height="358" alt="image" src="https://github.com/user-attachments/assets/1ef60846-4b0a-4f8a-9f81-af3a74ada76d" />

<img width="528" height="430" alt="image" src="https://github.com/user-attachments/assets/05808414-9e35-4d35-824e-5ec6231bf3f1" />

<img width="1862" height="1322" alt="image" src="https://github.com/user-attachments/assets/a4cb4b8c-4d98-4541-947f-2527b262a1cb" />

<img width="2548" height="1048" alt="image" src="https://github.com/user-attachments/assets/3d1fe421-ddf2-4ab3-87df-9cee299f0543" />
