// db/testing.js (snippet)
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(process.env.DB_CONNECTION, {
  dialect: "mysql",
  logging: false,
});


//ex1
// async function heaviestPokemon() {
//   const [rows] = await sequelize.query(`
//     SELECT *
//     FROM pokemon
//     WHERE weight = (SELECT MAX(weight) FROM pokemon)
//   `);
//   return rows; // could be multiple if there’s a tie
// }

// (async () => {
//   console.log(await heaviestPokemon()); // expect Snorlax in the result
//   await sequelize.close();
// })();

//ex2
async function findByType(typeName) {
  const [rows] = await sequelize.query(
    `SELECT p.name
     FROM pokemon AS p
     JOIN pokemon_type AS t ON t.id = p.type_id
     WHERE t.name = ?
     ORDER BY p.id`,
    { replacements: [typeName] }
  );
  return rows.map((r) => r.name);
}

// quick test:
(async () => {
  console.log(await findByType("grass")); // ["bulbasaur", "ivysaur", "venusaur", "oddish", ...]
  await sequelize.close();
})();