# KN-M-03: Datenmanipulation und Abfragen I

## A) Daten hinzufügen (25%)

```js

var country = [ObjectId(), ObjectId(), ObjectId()]
var policy = [ObjectId(), ObjectId()]
var strategy = [ObjectId(), ObjectId(), ObjectId(), ObjectId()]
var strategy_effect = [ObjectId(), ObjectId(), ObjectId(), ObjectId()]

db.country.insertMany([
  {
    "_id": country[0],
    "name": "Germany",
    "iso_code": "DE",
    "continent": "Europe",
    "population": 83000000,
    "currency": "EUR",
    "stability": {
      "inflation": 3,
      "unemployment_rate": 5,
      "gdp_per_capita": 48000
    }
  },
  {
    "_id": country[1],
    "name": "France",
    "iso_code": "FR",
    "continent": "Europe",
    "population": 68000000,
    "currency": "EUR",
    "stability": {
      "inflation": 4,
      "unemployment_rate": 7,
      "gdp_per_capita": 43000
    }
  },
  {
    "_id": country[2],
    "name": "Brazil",
    "iso_code": "BR",
    "continent": "South America",
    "population": 215000000,
    "currency": "BRL",
    "stability": {
      "inflation": 8,
      "unemployment_rate": 12,
      "gdp_per_capita": 9500
    }
  }
])

db.policy.insertOne({
  "_id": policy[0],
  "name": "Green Energy Transition",
  "type": "Environmental",
  "description": "Policy to accelerate the shift to renewable energy sources."
})

db.policy.insertMany([
  {
    "_id": policy[1],
    "name": "Labour Market Reform",
    "type": "Economic",
    "description": "Policy to reduce unemployment through market deregulation."
  }
])

db.strategy.insertMany([
  {
    "_id": strategy[0],
    "policy_id": policy[0],
    "country_id": country[0],
    "name": "Solar Expansion DE",
    "authority": "Federal Ministry for Economic Affairs",
    "description": "Massive investment in solar panel infrastructure across Germany.",
    "budget": 12500000.00,
    "direction": "Expansionary",
    "start_year": new Date("2022-01-01"),
    "end_year": new Date("2027-01-01")
  },
  {
    "_id": strategy[1],
    "policy_id": policy[0],
    "country_id": country[1],
    "name": "Wind Energy FR",
    "authority": "Ministère de la Transition Écologique",
    "description": "Development of offshore wind farms along the French coastline.",
    "budget": 9800000.00,
    "direction": "Expansionary",
    "start_year": new Date("2023-03-01"),
    "end_year": new Date("2028-03-01")
  },
  {
    "_id": strategy[2],
    "policy_id": policy[1],
    "country_id": country[2],
    "name": "Job Creation BR",
    "authority": "Ministério do Trabalho",
    "description": "Program to create jobs in rural regions of Brazil.",
    "budget": 4500000.00,
    "direction": "Expansionary",
    "start_year": new Date("2021-06-01"),
    "end_year": new Date("2025-06-01")
  },
  {
    "_id": strategy[3],
    "policy_id": policy[1],
    "country_id": country[0],
    "name": "Workforce Flexibility DE",
    "authority": "Federal Employment Agency",
    "description": "Introducing flexible working contracts to reduce structural unemployment.",
    "budget": 3200000.00,
    "direction": "Reformatory",
    "start_year": new Date("2023-03-01"),
    "end_year": new Date("2026-03-01")
  }
])

db.strategy_effect.insertMany([
  {
    "_id": strategy_effect[0],
    "strategy_id": strategy[0],
    "indicator_type": "CO2 Emissions",
    "impact": "Positive",
    "description": "Reduction of CO2 emissions by an estimated 15% over 5 years."
  },
  {
    "_id": strategy_effect[1],
    "strategy_id": strategy[1],
    "indicator_type": "Energy Independence",
    "impact": "Positive",
    "description": "Increased domestic energy production reducing reliance on imports."
  },
  {
    "_id": strategy_effect[2],
    "strategy_id": strategy[2],
    "indicator_type": "Unemployment Rate",
    "impact": "Positive",
    "description": "Expected decrease in rural unemployment by 4 percentage points."
  },
  {
    "_id": strategy_effect[3],
    "strategy_id": strategy[3],
    "indicator_type": "GDP Growth",
    "impact": "Neutral",
    "description": "Modest GDP growth expected due to increased labour market flexibility."
  }
])

```
<img width="912" height="484" alt="image" src="https://github.com/user-attachments/assets/97c0717b-4b0b-49e5-b778-9e7caa1a3bcf" />

## B) Daten löschen (25%)

<img width="546" height="320" alt="image" src="https://github.com/user-attachments/assets/4b077aa4-2ce7-4c7f-b8cf-e2bffdf4ad87" />

<img width="696" height="792" alt="image" src="https://github.com/user-attachments/assets/f4396220-3736-40c3-bd55-77ea201dd73f" />

<img width="1216" height="1270" alt="image" src="https://github.com/user-attachments/assets/335d48fa-0451-4525-8975-f3b0bf929045" />


## C) Daten abfragen (25%)

```js
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
```
<img width="1358" height="652" alt="image" src="https://github.com/user-attachments/assets/04f80601-7c04-4f87-acc8-50666d9c8e16" />

## D) Daten verändern (25%)

```js
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

```
<img width="1422" height="1006" alt="image" src="https://github.com/user-attachments/assets/e391a405-b291-4de2-8cbd-8adacd61257d" />


