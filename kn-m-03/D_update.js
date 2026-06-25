load("A_insert.js")

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

db.country.find({ "name": "Germany" })
db.strategy.find()
db.strategy_effect.find()