load("A_insert.js")

db.policy.aggregate([
  { $match: { "type": "Economic" } },
  { $match: { "name": { "$regex": "Labour", "$options": "i" } } }
])

db.strategy.aggregate([
  {
    $match: {
      "start_year": { "$gte": new Date("2022-01-01") }
    }
  },
  {
    $project: {
      "_id": 0,
      "name": 1,
      "direction": 1,
      "budget": 1,
      "start_year": 1
    }
  },
  {
    $sort: { "budget": -1 }
  }
])

db.strategy.aggregate([
  {
    $group: {
      "_id": null,
      "totalBudget": { "$sum": "$budget" },
      "anzahlStrategies": { "$sum": 1 }
    }
  }
])

db.strategy.aggregate([
  {
    $group: {
      "_id": "$direction",
      "totalBudget": { "$sum": "$budget" },
      "count": { "$sum": 1 }
    }
  },
  {
    $sort: { "totalBudget": -1 }
  }
])
