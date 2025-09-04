// db/testing.js (snippet)
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(process.env.DB_CONNECTION, {
  dialect: "mysql",
  logging: false,
});

async function heaviestPokemon() {
  const [rows] = await sequelize.query(`
    SELECT *
    FROM pokemon
    WHERE weight = (SELECT MAX(weight) FROM pokemon)
  `);
  return rows; // could be multiple if there’s a tie
}

(async () => {
  console.log(await heaviestPokemon()); // expect Snorlax in the result
  await sequelize.close();
})();
