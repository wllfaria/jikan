CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL UNIQUE,
    active BOOLEAN NOT NULL DEFAULT TRUE
);