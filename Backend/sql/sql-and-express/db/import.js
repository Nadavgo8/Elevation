// db/import.js
const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_CONNECTION, {
  dialect: "mysql",
  logging: false,
});

async function ensureType(name, t) {
  await sequelize.query("INSERT IGNORE INTO pokemon_type (name) VALUES (?)", {
    replacements: [name],
    transaction: t,
  });
  const [[row]] = await sequelize.query(
    "SELECT id FROM pokemon_type WHERE name=?",
    { replacements: [name], transaction: t }
  );
  return row.id;
}
async function ensureTown(name, t) {
  await sequelize.query("INSERT IGNORE INTO town (name) VALUES (?)", {
    replacements: [name],
    transaction: t,
  });
  const [[row]] = await sequelize.query("SELECT id FROM town WHERE name=?", {
    replacements: [name],
    transaction: t,
  });
  return row.id;
}
async function ensureTrainer(name, townId, t) {
  await sequelize.query(
    "INSERT IGNORE INTO trainer (name, town_id) VALUES (?,?)",
    { replacements: [name, townId], transaction: t }
  );
  const [[row]] = await sequelize.query(
    "SELECT id FROM trainer WHERE name=? AND town_id=?",
    { replacements: [name, townId], transaction: t }
  );
  return row.id;
}

(async () => {
  const raw = fs.readFileSync(path.join(__dirname, "pokemon.json"), "utf8");
  const data = JSON.parse(raw);

  const t = await sequelize.transaction();
  try {
    for (const p of data) {
      const typeId = await ensureType(p.type, t);

      // pokemon (keep JSON id)
      await sequelize.query(
        `INSERT INTO pokemon (id, name, height, weight, type_id)
         VALUES (?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE name=VALUES(name), height=VALUES(height), weight=VALUES(weight), type_id=VALUES(type_id)`,
        {
          replacements: [
            p.id,
            p.name,
            p.height ?? null,
            p.weight ?? null,
            typeId,
          ],
          transaction: t,
        }
      );

      for (const owner of p.ownedBy || []) {
        const townId = await ensureTown(owner.town, t);
        const trainerId = await ensureTrainer(owner.name, townId, t);
        await sequelize.query(
          "INSERT IGNORE INTO pokemon_trainer (pokemon_id, trainer_id) VALUES (?, ?)",
          { replacements: [p.id, trainerId], transaction: t }
        );
      }
    }
    await t.commit();
    console.log("Import complete ✅");
  } catch (e) {
    await t.rollback();
    console.error("Import failed ❌", e);
  } finally {
    await sequelize.close();
  }
})();
