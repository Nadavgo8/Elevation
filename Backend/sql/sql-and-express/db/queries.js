// db/testing.js (snippet)
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(process.env.DB_CONNECTION, {
  dialect: "mysql",
  logging: false,
});


//ex2
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

//ex3
// async function findByType(typeName) {
//   const [rows] = await sequelize.query(
//     `SELECT p.name
//      FROM pokemon AS p
//      JOIN pokemon_type AS t ON t.id = p.type_id
//      WHERE t.name = ?
//      ORDER BY p.id`,
//     { replacements: [typeName] }
//   );
//   return rows.map((r) => r.name);
// }

// // quick test:
// (async () => {
//   console.log(await findByType("grass")); // ["bulbasaur", "ivysaur", "venusaur", "oddish", ...]
//   await sequelize.close();
// })();

//ex4

async function findOwners(pokemonName) {
  const [rows] = await sequelize.query(
    `SELECT DISTINCT tr.name AS trainer
     FROM pokemon p
     JOIN pokemon_trainer pt ON pt.pokemon_id = p.id
     JOIN trainer tr        ON tr.id = pt.trainer_id
     WHERE p.name = ?
     ORDER BY tr.name`,
    { replacements: [pokemonName] }
  );
  return rows.map((r) => r.trainer); // [] if none
}

// quick test:
(async () => {
  console.log(await findOwners("gengar")); // ["Gary", "Misty", "Plumeria", "Wallace"] (order by name)
  await sequelize.close();
})();