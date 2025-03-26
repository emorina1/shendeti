const sequelize = require("./backend/config"); // Sigurohu që rruga është e saktë
const User = require("./backend/Models/User/User");

async function testModel() {
  try {
    // Verifiko lidhjen me bazën e të dhënave
    await sequelize.authenticate();
    console.log("✅ Lidhja me bazën e të dhënave u realizua me sukses!");

    // Krijo tabelën nëse nuk ekziston ose përditësoje
    await User.sync({ alter: true });
    console.log("✅ Tabela 'Users' është sinkronizuar!");

    // Krijo një përdorues testues, duke shtuar fushën 'name'
    const user = await User.create({
      name: "Elsa Morina",   // Shto vlerën për 'name' këtu
      username: "elsamorina",
      email: "elsa@example.com",
      password: "sekret123",  // Sigurohuni që 'password' është një fushë e vlefshme
    });

    console.log("✅ Përdoruesi u krijua:", user.toJSON());

    // Merr të gjithë përdoruesit dhe shfaqni në log
    const users = await User.findAll();
    console.log("📝 Të gjithë përdoruesit:", users.map((u) => u.toJSON()));

  } catch (error) {
    console.error("❌ Gabim:", error);
  } finally {
    await sequelize.close(); // Mbyll lidhjen me databazën pas testit
  }
}

testModel();
