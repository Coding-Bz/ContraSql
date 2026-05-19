# A)
[Cloud-init](cloud-init.yml)
<img width="2670" height="1600" alt="image" src="https://github.com/user-attachments/assets/f4a71644-c22a-44e1-a2aa-945c7fbcc9df" />
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
