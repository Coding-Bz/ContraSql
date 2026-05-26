# A)

<img width="2594" height="1576" alt="image" src="https://github.com/user-attachments/assets/b37cca6c-f29e-443a-881f-ac6af0562182" />
## Schauen Sie sich Ihren Connection String an. Erklären Sie was die Option authSource=admin macht
Admin ist der Name der DB in der die User Credentials gespeichert sind:
```json
        {
          user: "admin",
          pwd: "admin",
          roles: [
            { role: "userAdminAnyDatabase", db: "admin" },
            { role: "readWriteAnyDatabase", db: "admin" }
          ]
        }

```
# B)

## Screenshot (oder JSON) Ihres einzufügenden Dokuments (bevor Sie es einfügen)
<img width="1146" height="962" alt="image" src="https://github.com/user-attachments/assets/f4d9d4cc-2a47-491d-b898-2ddb21064c27" />

## Screenshot Ihrer Compass-Applikation mit der Datenbank, Collection und Dokument sichtbar, nachdem Sie den Datentyp geändert haben.
<img width="2550" height="1418" alt="image" src="https://github.com/user-attachments/assets/660215ac-0948-48d4-a7e1-a9e71e568216" />

## Export-Datei und Erklärung zu dem Datentyp mit möglichen Implikationen auf andere Datentypen. Wieso ist dieser komplizierte Weg notwendig, um ein Datum zu definieren?
JSON kennt von sich aus keinen Datum-Datentyp – alles ist entweder String, Zahl, Boolean etc. MongoDB verwendet deshalb ein spezielles Format. Auserdem ist dies notwendig um filtern zu können nach Datum mit String wäre dies nicht möglich.

# C) Erste Schritte Shell (10%)

<img width="1204" height="1324" alt="image" src="https://github.com/user-attachments/assets/9e9a53e9-0890-4fb9-bffa-a41bfd23cc5c" />

<img width="1788" height="1104" alt="image" src="https://github.com/user-attachments/assets/df285544-d9d3-410f-8da4-8e13afde5f3b" />

## Erklärung Commands
```bash
# Diese Befehle zeigen alle Datenbanken
show dbs;
show databases;
# Wechselt auf die Ausgewählte Datenbanken
use Ihre-Datenbank;
# Zeigt alle Collections in der Datenbank
show collections;
# tables ist einfach ein Alias für Collections
show tables;
```
# D) Rechte und Rollen (30%)

<img width="2376" height="304" alt="image" src="https://github.com/user-attachments/assets/f9e8fd7c-4f87-47ae-be71-a2c98eebe0b4" />

<img width="2518" height="1276" alt="image" src="https://github.com/user-attachments/assets/bf32c1da-8594-4ab9-bf58-8efb8276a240" />

<img width="2088" height="252" alt="image" src="https://github.com/user-attachments/assets/4013b4d5-c74c-42b2-bdb3-b86ce3e7302c" />

<img width="1044" height="196" alt="image" src="https://github.com/user-attachments/assets/f47cf42e-1786-479e-9b00-a44600b12222" />

<img width="2060" height="1190" alt="image" src="https://github.com/user-attachments/assets/d4bea83a-dfb6-4713-93c0-9960d6521a12" />
<img width="638" height="224" alt="image" src="https://github.com/user-attachments/assets/5de4f41c-54a0-43ea-935d-d304b81f6195" />
<img width="1610" height="1306" alt="image" src="https://github.com/user-attachments/assets/7c488668-a742-42c0-be49-7ec5af2b3cf5" />

<img width="2176" height="122" alt="image" src="https://github.com/user-attachments/assets/bf3b8a25-1679-408d-9bb1-5120783eca35" />

<img width="2560" height="1600" alt="image" src="https://github.com/user-attachments/assets/bce1ac32-ff79-4446-a23e-410c9960987f" />

<img width="2560" height="1466" alt="image" src="https://github.com/user-attachments/assets/4c06dde1-5e17-4f3a-a4c4-ee433b24e95e" />
