CREATE KEYSPACE policy_tracker
  WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE policy_tracker;

CREATE TABLE strategies_by_country (
    country_name     text,
    start_year       int,
    strategy_id      uuid,
    strategy_name    text,
    authority        text,
    budget           decimal,
    policy_name      text,
    PRIMARY KEY ((country_name), start_year, strategy_id)
) WITH CLUSTERING ORDER BY (start_year DESC);

CREATE TABLE strategies_by_policy (
    policy_name       text,
    country_name      text,
    strategy_id       uuid,
    strategy_name     text,
    authority         text,
    budget            decimal,
    start_year        int,
    PRIMARY KEY ((policy_name), country_name, strategy_id)
) WITH CLUSTERING ORDER BY (country_name ASC);

CREATE TABLE strategy_effects_and_stability (
    strategy_id         uuid,
    indicator_type      text,
    strategy_name       text,
    impact              text,
    effect_description  text,
    country_name        text,
    gdp_per_capita       decimal,
    inflation            decimal,
    unemployment_rate    decimal,
    PRIMARY KEY ((strategy_id), indicator_type)
);
