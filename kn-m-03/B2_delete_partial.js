load("A_insert.js")

// deleteOne: Einen strategy_effect anhand der _id löschen
db.strategy_effect.deleteOne({
  "_id": strategy_effect[0]
})

// deleteMany: Mehrere strategies anhand der _id mit OR-Verknüpfung löschen
db.strategy.deleteMany({
  "$or": [
    { "_id": strategy[1] },
    { "_id": strategy[2] }
  ]
})

// Kontrolle: verbleibende Einträge anzeigen
db.strategy_effect.find()
db.strategy.find()
