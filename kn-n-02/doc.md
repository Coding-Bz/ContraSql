# KN-N-02: Datenabfrage und -Manipulation

## A) Daten hinzufügen (20%)

<img width="60%" height="60%" alt="image" src="https://github.com/user-attachments/assets/57ebced6-c7ad-413c-b460-1cca1acebc14" />

## B) Daten abfragen (20%)

### Lesen aller Daten: Match(n) sucht nach absolut jedem Knoten unabhängig von seinem Label, und das OPTIONAL sorgt dafür, dass auch Knoten ohne Kanten zu anderen Knoten angeziegt werden.

`MATCH (n) OPTIONAL MATCH (n)-[r]->(m) RETURN n, r, m`
``
<img width="30%" height="30%" alt="image" src="https://github.com/user-attachments/assets/f32c3571-fd34-4513-9a6b-c4ef0988aaf1" />

``
### Prosa: Wir wollen alle europäischen Länder finden, deren angewendete Wirtschaftsstrategien eine sehr verlässliche Datenbasis (confidence_level: 'High') aufweisen. Wir wollen das Land, die Beziehung und die Strategie sehen.
`MATCH (c:Country)-[r:APPLIES]->(s:Strategy)
WHERE c.continent = 'Europe' AND r.confidence_level = 'High'
RETURN c.name, r.measured_year, s.name`

<img width="30%" height="30%" alt="image" src="https://github.com/user-attachments/assets/02dc192b-7628-491f-b213-e6fb24ec971e" />

### Prosa: Finde alle Strategien, die ein Budget von über 2 Milliarden (2000000000) haben, und zeige uns, welche (falls vorhanden) negativen oder positiven Auswirkungen (Strategy_Effect) diese erzielt haben.

`MATCH (s:Strategy)-[:HAS]->(e:Strategy_Effect)
WHERE s.budget > 2000000000
RETURN s.name, s.budget, e.indicator_type, e.impact`
<img width="30%" height="30%" alt="image" src="https://github.com/user-attachments/assets/b4a35dbc-dff9-441a-b5a5-6b96f5b70894" />

``
### Prosa: Ein Analyst möchte wissen, welche konkreten Auswirkungen die übergeordnete Richtlinie 'Green Transition Act' über ihre verschiedenen Unter-Strategien hinweg weltweit erzeugt hat.
``

`MATCH (p:Policy {name: 'Green Transition Act'})<-[:IMPLEMENTS]-(s:Strategy)-[:HAS]->(e:Strategy_Effect)
RETURN p.name AS Policy, s.name AS Strategy, e.indicator_type AS Indicator, e.impact AS Impact`
``

<img width="35%" height="35%" alt="image" src="https://github.com/user-attachments/assets/702fa5bf-9c01-448b-b4b2-0313b3db4f3e" />

``
### Prosa: Wir möchten berechnen, wie viel Budget im Durchschnitt für Strategien ausgegeben wird, aufgeteilt nach dem übergeordneten Richtlinientyp (z.B. 'Environmental' vs 'Technology').
``

`MATCH (p:Policy)<-[:IMPLEMENTS]-(s:Strategy)
RETURN p.type AS PolicyType, count(s) AS NumberOfStrategies, avg(s.budget) AS AverageBudget`
``
<img width="30%" height="30%" alt="image" src="https://github.com/user-attachments/assets/24271b3c-a0ef-4983-b18d-f30445d979af" />


## C) Daten löschen (20% - DETACH-Option)

### Vorher (Ich habes es bewusst im hirachie-format angezeigt, da man sonst kaum etwas lesen kann)

`MATCH (c:Country {name: 'Japan'})
DELETE c`
<img width="60%" height="60%" alt="image" src="https://github.com/user-attachments/assets/26146379-00b8-43ef-aead-d6744e011e5d" />

### Nachher ohne Detach
`MATCH (c:Country {name: 'Japan'})
DELETE c`
<img width="60%" height="60%" alt="image" src="https://github.com/user-attachments/assets/d5917bcc-1a0d-4fa9-919f-77ebe5b1fb29" />

### Nachher mit Detach
`MATCH (c:Country {name: 'Japan'})
DETACH DELETE c`

<img width="60%" height="60%" alt="image" src="https://github.com/user-attachments/assets/2a23ca51-2b9b-4510-ae8c-f14ee2ef4af3" />

