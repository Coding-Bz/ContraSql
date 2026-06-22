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