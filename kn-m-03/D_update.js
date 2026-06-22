load("A_insert.js")

// updateOne: Germany's population und inflation mit _id filtern
db.country.updateOne(
  {
    "_id": country[0]
  },
  {
    "$set": {
      "population": 84000000,
      "stability.inflation": 2
    }
  }
)

// updateMany: Alle Strategies mit Expansionary oder Reformatory direction UND budget < 10M -> Moderate
// Verwendet OR-Verknüpfung, kein _id, trifft mehrere Datensätze
db.strategy.updateMany(
  {
    "$or": [
      { "direction": "Expansionary" },
      { "direction": "Reformatory" }
    ],
    "budget": { "$lt": 10000000 }
  },
  {
    "$set": {
      "direction": "Moderate"
    }
  }
)

// replaceOne: strategy_effect für GDP Growth komplett ersetzen
db.strategy_effect.replaceOne(
  {
    "indicator_type": "GDP Growth"
  },
  {
    "_id": strategy_effect[3],
    "strategy_id": strategy[3],
    "indicator_type": "Employment Quality",
    "impact": "Positive",
    "description": "Improved job quality and higher wages due to labour market reforms."
  }
)

// Kontrolle: Ergebnisse anzeigen
db.country.find({ "name": "Germany" })
db.strategy.find()
db.strategy_effect.find()
