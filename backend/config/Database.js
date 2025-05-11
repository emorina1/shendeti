// config/Database.js
import { Sequelize } from "sequelize";
import mongoose from "mongoose";

const db = new Sequelize('auth_db', 'root', '', {
  host: "localhost",
  dialect: "mysql",
});

mongoose.connect("mongodb+srv://eelsamorina:Elsa123@cluster0.wrvciep.mongodb.net/shendetiim?authSource=admin")
  .then(() => console.log("✅ MongoDB lidhja u krye me sukses"))
  .catch(err => console.error("❌ Gabim në MongoDB:", err));

export { db, mongoose };
