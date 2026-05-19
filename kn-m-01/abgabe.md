# A)
[Cloud-init](cloud-init.yml)
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
