require("dotenv").config();
module.exports = {
  development: {
    use_env_variable: "DB_CONNECTION",
    dialect: "mysql",
    logging: false,
  },
  test: { use_env_variable: "DB_CONNECTION", dialect: "mysql", logging: false },
  production: {
    use_env_variable: "DB_CONNECTION",
    dialect: "mysql",
    logging: false,
  },
};
