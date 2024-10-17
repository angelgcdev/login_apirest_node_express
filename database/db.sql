\ l;
CREATE DATABASE nodepg;
\ c;
--;
CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
--;
INSERT INTO users(name, email, password)
VALUES ('John Doe', 'john@gmail.com', 123),
  ('Jane Doe', 'jane@gmail.com', 456);
--;
SELECT *
FROM users;