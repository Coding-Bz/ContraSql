# KN-N-02: Datenabfrage und -Manipulation

## A) Daten hinzufügen (20%)

<img width="2558" height="1502" alt="image" src="https://github.com/user-attachments/assets/57ebced6-c7ad-413c-b460-1cca1acebc14" />

## B) Daten abfragen (20%)

`MATCH (n) OPTIONAL MATCH (n)-[r]->(m) RETURN n, r, m`

<img width="1156" height="1078" alt="image" src="https://github.com/user-attachments/assets/f32c3571-fd34-4513-9a6b-c4ef0988aaf1" />

``
`MATCH (c:Country)-[r:APPLIES]->(s:Strategy)
WHERE c.continent = 'Europe' AND r.confidence_level = 'High'
RETURN c.name, r.measured_year, s.name`

<img width="1158" height="448" alt="image" src="https://github.com/user-attachments/assets/02dc192b-7628-491f-b213-e6fb24ec971e" />

``
`MATCH (s:Strategy)-[:HAS]->(e:Strategy_Effect)
WHERE s.budget > 2000000000
RETURN s.name, s.budget, e.indicator_type, e.impact`
<img width="1164" height="456" alt="image" src="https://github.com/user-attachments/assets/b4a35dbc-dff9-441a-b5a5-6b96f5b70894" />

``
`MATCH (p:Policy {name: 'Green Transition Act'})<-[:IMPLEMENTS]-(s:Strategy)-[:HAS]->(e:Strategy_Effect)
RETURN p.name AS Policy, s.name AS Strategy, e.indicator_type AS Indicator, e.impact AS Impact`
<img width="1146" height="432" alt="image" src="https://github.com/user-attachments/assets/702fa5bf-9c01-448b-b4b2-0313b3db4f3e" />

``
`MATCH (p:Policy)<-[:IMPLEMENTS]-(s:Strategy)
RETURN p.type AS PolicyType, count(s) AS NumberOfStrategies, avg(s.budget) AS AverageBudget`
<img width="1152" height="580" alt="image" src="https://github.com/user-attachments/assets/24271b3c-a0ef-4983-b18d-f30445d979af" />
