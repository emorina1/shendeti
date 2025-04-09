const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { sequelize, mongoose }= require("./config/config");
const User = require("./Models/User/User");
const Multer =require ("multer");
const router = express.Router();

const app = express();
app.use(cors());
app.use(express.json());


const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};
app.use(cors(corsOptions));
router.get('/verifylogin', (req, res) => {
  // Pasi të jetë autentikuar përdoruesi, mund të merrni informacionin nga sesi ose JWT
  const userEmail = req.user.email; // Supozojmë që email-i është ruajtur në sesi ose JWT

  if (userEmail === 'elsamorina@gmail.com') {
    res.json({
      valid: true,
      email: userEmail,
      role: 'admin' // Dërgohet roli 'admin' për përdoruesin me këtë email
    });
  } else {
    res.json({
      valid: true,
      email: userEmail,
      role: 'user' // Përdoruesit e tjerë kanë rol 'user'
    });
  }
});

// Lidhja me databazën
sequelize.sync({ alter: true }) // ose { force: true } por kujdes se fshin të dhënat!
  .then(() => console.log("✅ Database synced"))
  .catch((err) => console.error("❌ Sync error:", err));


// Signup (Regjistrimi)
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Kontrollo nëse ekziston email-i
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) return res.status(400).json({ message: "Email already exists" });

    // Enkripto passwordin
    const hashedPassword = await bcrypt.hash(password, 10);

    // Krijo përdoruesin
    const newUser = await User.create({ name, email, password: hashedPassword });
    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    console.log("🔍 Request Body:", req.body); // Shto këtë për debugging
    
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Missing email or password" });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }


app.use(cors(corsOptions));

    const token = jwt.sign(
      { uId: user.id, username: user.name },
      process.env.SECRET,
      { expiresIn: "1h" }
    );

    res.json({ message: "Success", token });
  } catch (error) {
    console.error("❌ Error in /login:", error); // Shto këtë për debugging
    res.status(500).json({ message: "Server error" });
  }
});


// Start Server
app.listen(8081, () => {
  console.log("🚀 Server is running on http://localhost:8081");
});
