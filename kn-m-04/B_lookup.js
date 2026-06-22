load("A_insert.js")

db.strategy.aggregate([
  {
    $lookup: {
      "from": "policy",
      "localField": "policy_id",
      "foreignField": "_id",
      "as": "policy_info"
    }
  },
  {
    $project: {
      "_id": 0,
      "name": 1,
      "direction": 1,
      "budget": 1,
      "policy_info.name": 1,
      "policy_info.type": 1
    }
  }
])

db.strategy.aggregate([
  {
    $lookup: {
      "from": "policy",
      "localField": "policy_id",
      "foreignField": "_id",
      "as": "policy_info"
    }
  },
  {
    $match: { "direction": "Expansionary" }
  },
  {
    $sort: { "budget": -1 }
  },
  {
    $project: {
      "_id": 0,
      "name": 1,
      "budget": 1,
      "direction": 1,
      "policy_info.name": 1,
      "policy_info.type": 1
    }
  }
])
