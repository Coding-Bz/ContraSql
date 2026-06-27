# KN-N-01: Installation und Datenmodellierung für Neo4j

## A) Installation / Account erstellen

<img width="2540" height="1480" alt="image" src="https://github.com/user-attachments/assets/6751bb18-3334-4911-8e78-5675f2f0aed6" />

<img width="2558" height="1422" alt="image" src="https://github.com/user-attachments/assets/29d1fded-00a1-4a82-86fb-7f877a4b0013" />

<img width="2090" height="1176" alt="image" src="https://github.com/user-attachments/assets/cc11e63a-49e0-4d8a-a1a3-99eb11af6a1b" />

## B) Logisches Modell für Neo4j (70%)

<img width="966" height="1068" alt="image" src="https://github.com/user-attachments/assets/8765a15a-090a-4fc4-9da0-6e41aaea7a99" />

### Erklärung

+ Die Felder mit den IDs braucht es nicht mehr
+ Statt eine einzelne Noten Tabelle zu haben, speichere ich die Note in der Verbindung
+ Die Attribute measured_year und confidence_level wurden auf die Kante HAS_EFFECT gelegt, weil sie die Beziehung zwischen Strategie und Effekt charakterisieren. Der gleiche Effekt (z.B. "GDP-Wachstum") könnte in verschiedenen Jahren mit unterschiedlicher Konfidenz gemessen werden.
