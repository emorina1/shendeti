// backend/controllers/UserController.js
const User = require('../Models/User/User');

// Funksioni për të krijuar një përdorues të ri
async function createUser(req, res) {
  try {
    const { name, username, email, password } = req.body;

    // Kontrolloni nëse fushat janë të plota
    if (!name || !username || !email || !password) {
      return res.status(400).json({ message: "Të gjitha fushat janë të detyrueshme" });
    }

    // Krijo përdoruesin në bazë të të dhënave të dërguara
    const user = await User.create({
      name,
      username,
      email,
      password,  // Në praktikë, duhet të hashe passwordin, kjo është vetëm një shembull
    });

    res.status(201).json({ message: "Përdoruesi u krijua me sukses", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Gabim në krijimin e përdoruesit", error });
  }
}

// Funksioni për të marrë të gjithë përdoruesit
async function getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Gabim në marrjen e përdoruesve", error });
  }
}

module.exports = { createUser, getAllUsers };
