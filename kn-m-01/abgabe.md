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
