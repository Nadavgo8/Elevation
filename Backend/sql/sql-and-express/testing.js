const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "mysql://root:Nadavgo8@127.0.0.1:3307/sql_intro"
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

  sequelize.query("SELECT * FROM company").then(function ([results, metadata]) {
    console.log(results);
  });
sequelize.query("SELECT * FROM company").then(function ([results, metadata]) {
  results.forEach((c) => console.log(c.name));
});
sequelize
  .query("INSERT INTO company VALUES(null, 'Google', 'Tech', 10000)")
  .then(function ([result]) {
    console.log(result);
  }); 
