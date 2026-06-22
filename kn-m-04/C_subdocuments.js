load("A_insert.js")

db.country.find(
  {},
  {
    "_id": 0,
    "name": 1,
    "stability.inflation": 1,
    "stability.gdp_per_capita": 1
  }
)

db.country.find(
  {
    "stability.inflation": { "$gt": 5 }
  },
  {
    "_id": 0,
    "name": 1,
    "stability.inflation": 1,
    "stability.unemployment_rate": 1
  }
)

db.strategy.aggregate([
  {
    $lookup: {
      "from": "strategy_effect",
      "localField": "_id",
      "foreignField": "strategy_id",
      "as": "effects"
    }
  },
  {
    $unwind: "$effects"
  },
  {
    $project: {
      "_id": 0,
      "strategyName": "$name",
      "direction": 1,
      "effectType": "$effects.indicator_type",
      "impact": "$effects.impact"
    }
  }
])
