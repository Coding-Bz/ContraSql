// Datenbank wechseln
use("global_policy_db");

// Collections erstellen
db.createCollection("country");
db.createCollection("policy");
db.createCollection("strategy");
db.createCollection("strategy_effect");
db.createCollection("stability");
