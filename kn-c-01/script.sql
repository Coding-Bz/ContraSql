-- 1. Keyspace (Datenbank) erstellen
CREATE KEYSPACE IF NOT EXISTS policy_strategy_db 
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

-- Keyspace aktivieren
USE policy_strategy_db;

-- ==============================================================================
-- TABELLE 1 (Screen 1): Strategien nach Land
-- ==============================================================================
CREATE TABLE IF NOT EXISTS strategies_by_country (
    country_name text,
    start_year date,
    strategy_id int,
    strategy_name text,
    authority text,
    budget double,
    policy_name text,
    PRIMARY KEY ((country_name), start_year, strategy_id)
) WITH CLUSTERING ORDER BY (start_year DESC);

-- ==============================================================================
-- TABELLE 2 (Screen 2): Strategien nach Policy
-- ==============================================================================
CREATE TABLE IF NOT EXISTS strategies_by_policy (
    policy_name text,
    country_name text,
    strategy_id int,
    strategy_name text,
    authority text,
    budget double,
    start_year date,
    PRIMARY KEY ((policy_name), country_name, strategy_id)
);

-- ==============================================================================
-- TABELLE 3 (Screen 3): Effekte & Stabilität nach Strategie (Zusammenführung)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS strategy_effects_and_stability (
    strategy_id int,
    indicator_type text,
    strategy_name text,
    impact text,
    effect_description text,
    country_name text,
    gdp_per_capita int,
    inflation int,
    unemployment_rate int,
    PRIMARY KEY ((strategy_id), indicator_type)
);
