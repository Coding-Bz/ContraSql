db.country.find(
  {
    "$or": [
      { "continent": "Europe" },
      { "continent": "South America" }
    ]
  },
  {
    "_id": 0,
    "name": 1,
    "iso_code": 1,
    "continent": 1,
    "currency": 1
  }
)

db.country.find(
  {
    "name": { "$regex": "an", "$options": "i" }
  },
  {
    "_id": 1,
    "name": 1,
    "iso_code": 1
  }
)

db.policy.find(
  {
    "$and": [
      { "type": "Economic" },
      { "name": { "$regex": "Labour", "$options": "i" } }
    ]
  },
  {
    "_id": 1,
    "name": 1,
    "type": 1,
    "description": 1
  }
)

db.strategy.find(
  {
    "start_year": { "$gte": new Date("2023-01-01") }
  },
  {
    "_id": 0,
    "name": 1,
    "direction": 1,
    "budget": 1,
    "start_year": 1,
    "end_year": 1
  }
)

db.strategy_effect.find(
  {
    "impact": "Positive"
  },
  {
    "_id": 1,
    "indicator_type": 1,
    "impact": 1,
    "description": 1
  }
)