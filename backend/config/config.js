const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("shendetiim", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false, // Hiq logjet nëse nuk dëshiron të shfaqen
});

sequelize
  .authenticate()
  .then(() => console.log("✅ Lidhja me bazën e të dhënave u realizua me sukses!"))
  .catch((err) => console.error("❌ Gabim në lidhje:", err));

module.exports = sequelize;
