USE pokemon_db

CREATE TABLE IF NOT EXISTS pokemon_type (
  id        INT AUTO_INCREMENT PRIMARY KEY,
  name      VARCHAR(50) NOT NULL UNIQUE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS town (
  id        INT AUTO_INCREMENT PRIMARY KEY,
  name      VARCHAR(100) NOT NULL UNIQUE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS trainer (
  id        INT AUTO_INCREMENT PRIMARY KEY,
  name      VARCHAR(100) NOT NULL,
  town_id   INT NOT NULL,
  CONSTRAINT uq_trainer_name_per_town UNIQUE (name, town_id),
  CONSTRAINT fk_trainer_town FOREIGN KEY (town_id) REFERENCES town(id)
    ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;

-- PRIMARY KEY must be the Pokémon's own id from the JSON
CREATE TABLE IF NOT EXISTS pokemon (
  id        INT PRIMARY KEY,
  name      VARCHAR(100) NOT NULL,
  height    INT,
  weight    INT,
  type_id   INT NOT NULL,
  CONSTRAINT fk_pokemon_type FOREIGN KEY (type_id) REFERENCES pokemon_type(id)
    ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;

-- Join table
CREATE TABLE IF NOT EXISTS pokemon_trainer (
  id          INT AUTO_INCREMENT PRIMARY KEY,     -- unique id as required
  pokemon_id  INT NOT NULL,
  trainer_id  INT NOT NULL,
  CONSTRAINT uq_poke_trainer UNIQUE (pokemon_id, trainer_id),
  CONSTRAINT fk_pt_pokemon FOREIGN KEY (pokemon_id) REFERENCES pokemon(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT fk_pt_trainer FOREIGN KEY (trainer_id) REFERENCES trainer(id)
    ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB;
