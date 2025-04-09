const { Sequelize } = require("sequelize");
const mongoose = require("mongoose");

const sequelize = new Sequelize("shendetiim", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false, // Hiq logjet nëse nuk dëshiron të shfaqen
});

sequelize
  .authenticate()
  .then(() => console.log("✅ Lidhja me bazën e të dhënave u realizua me sukses!"))
  .catch((err) => console.error("❌ Gabim në lidhje:", err));



  // MongoDB Connection
  const mongoURI = "mongodb+srv://eelsamorina:ElsaMorina10%2F06%2F2004@cluster0.wrvciep.mongodb.net/shendetiim";

  mongoose.connect(process.env.MONGO_URI)

    .then(() => console.log("✅ [MongoDB] Lidhja u krye me sukses!"))
    .catch((err) => console.error("❌ [MongoDB] Gabim në lidhje:", err));

module.exports = {sequelize, mongoose };
