const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const axios = require("axios");
require("dotenv").config();
const defineRoutes = require('./controllers/AllControllers');

const app = express();
const sequelize = require("./config/database");
const User = require("./Models/User/User");

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(cookieParser());
app.use(bodyParser.json());

// Testimi i lidhjes me bazën e të dhënave
sequelize
  .sync({ force: false }) // Sigurohu që force: false për të mos humbur të dhënat
  .then(() => console.log("Modelet u sinkronizuan me sukses!"))
  .catch((err) => console.error("Gabim në sinkronizim:", err));

// Rruga kryesore që konfirmon funksionimin e serverit
app.get("/", (req, res) => {
  res.send("Shendeti Im API është duke funksionuar!");
});

// Verifikimi i tokenit përmes cookies
app.get("/verifyToken", (req, res) => {
  const token = req.cookies.authToken;

  if (!token) {
    return res.status(204).json({ message: "Token not provided" });
  }

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.json({ valid: false });
    } else {
      return res.json({
        valid: true,
        uId: decoded.uId,
        username: decoded.username,
        role: decoded.role,
        userAgent: req.headers["user-agent"],
      });
    }
  });
});

// Rruga për logout
app.get("/logout", async (req, res) => {
  try {
    const token = req.cookies.authToken;
    if (!token) return res.status(401).send("Not logged in");

    const decoded = jwt.verify(token, process.env.SECRET);
    const userID = decoded.uId;
    const lastLogin = new Date();

    await User.update({ lastLogin }, { where: { id: userID } });

    res.clearCookie("authToken", { httpOnly: true, secure: true });
    return res.send("Logged out successfully");
  } catch (error) {
    return res.status(401).send("Not logged in");
  }
});

// Rruga për të marrë IP-në publike
app.get("/getPublicIP", async (req, res) => {
  try {
    const response = await axios.get("https://api.ipify.org?format=json");
    res.json({ ip: response.data.ip });
  } catch (error) {
    console.error("Failed to fetch public IP address:", error);
    res.status(500).json({ error: "Failed to fetch public IP address" });
  }
});

// Rruga për të përditësuar tokenin e rinovuar
app.post("/refresh_token", async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.status(403).json({ message: "No refresh token provided" });

  jwt.verify(refreshToken, process.env.REFRESH_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid refresh token" });

    const newAccessToken = jwt.sign(
      { uId: decoded.uId, username: decoded.username, role: decoded.role },
      process.env.SECRET,
      { expiresIn: "1h" }
    );

    res.json({ accessToken: newAccessToken });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveri është duke dëgjuar në portën ${PORT}`);
});
