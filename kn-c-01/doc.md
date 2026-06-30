# KN-C-01: Installation und Datenmodellierung für Cassandra

## A) Installation / Account erstellen (10%)

<img width="2368" height="934" alt="image" src="https://github.com/user-attachments/assets/8b1e1b71-e5e6-4773-9359-522833c26d6a" />

<img width="1952" height="84" alt="image" src="https://github.com/user-attachments/assets/06400d62-d97f-499c-a688-0632b1a1cc95" />

<img width="2032" height="422" alt="image" src="https://github.com/user-attachments/assets/cec49e02-0a2b-48ea-9295-fb90643fb218" />

## B) Logisches Modell für Cassandra (40%)

<img width="1054" height="924" alt="image" src="https://github.com/user-attachments/assets/af52a603-076a-4bc7-9c18-574e1818ead0" />


1. Screen-Szenarien und Datenanforderungen
Screen 1: Länder-Dashboard (Strategien nach Land)

Anwendungsfall: Ein Nutzer wählt ein bestimmtes Land aus und erhält eine chronologische Übersicht aller dort implementierten politischen Strategien.

Partition Key: country_name (Verteilt die Daten basierend auf dem Land gleichmässig auf die Cluster-Knoten).

Clustering Key: start_year (Sortiert die Strategien innerhalb eines Landes automatisch absteigend nach Aktualität) und strategy_id (stellt die Eindeutigkeit des Datensatzes sicher).

Screen 2: Policy-Übersicht (Länderübersicht einer Policy)

Anwendungsfall: Ein Analyst möchte gezielt eine übergeordnete Policy (z. B. "CO2-Reduktion") aufrufen und sehen, welche Länder welche konkreten Strategien dazu umsetzen.

Partition Key: policy_name (Sorgt dafür, dass alle länderspezifischen Strategien einer gemeinsamen Policy in derselben Partition liegen).

Clustering Key: country_name und strategy_id (Sortiert die Ergebnisse alphabetisch nach Land).

Screen 3: Analyse-Ansicht (Effekte und Stabilität einer Strategie)

Anwendungsfall: Für eine spezifische Strategie werden die gemessenen Indikator-Effekte direkt zusammen mit den makroökonomischen Stabilitätsdaten des jeweiligen Landes (BIP, Inflation, Arbeitslosigkeit) auf einem einzigen Screen aggregiert.

Partition Key: strategy_id (Direktzugriff auf eine konkrete Strategie).

Clustering Key: indicator_type (Sortiert die verschiedenen Effekttypen).


# C) Physisches Modell für Cassandra (50%)


<img width="2560" height="1414" alt="image" src="https://github.com/user-attachments/assets/a1617b05-efe0-4eb4-a24e-a532b6a6171f" />

<img width="2560" height="1400" alt="image" src="https://github.com/user-attachments/assets/ee5a92a1-bc88-4097-8ac0-56f684d2786f" />

<img width="2560" height="1250" alt="image" src="https://github.com/user-attachments/assets/952f9899-43c3-41af-b2c5-57f4fa654dc4" />

