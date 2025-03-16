const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const axios = require("axios");
require("dotenv").config();

const app = express();

// Aktivizo CORS për origjinën e specifikuar
app.use(
  cors({
    origin: ["http://localhost:3000"], // Lejon vetëm këtë origjinë
    methods: ["POST", "GET", "PUT", "DELETE"], // Lejon këto metoda
    credentials: true, // Lejon cookies
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(cookieParser());
app.use(bodyParser.json());

// Rruga kryesore që konfirmon funksionimin e serverit
app.get("/", (req, res) => {
  res.send("Shendeti Im API është duke funksionuar!");
});

// Verifikimi i tokenit përmes cookies
app.get("/", (req, res) => {
  const token = req.cookies.authToken;

  if (!token) {
    return res.status(204).json({ message: "Token not provided" });
  }

  const userAgent = req.headers["user-agent"];

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.json({ valid: false });
    } else {
      return res.json({
        valid: true,
        uId: decoded.uId,
        username: decoded.username,
        role: decoded.role,
        userAgent,
      });
    }
  });
});

// Rruga për logout, ku fshihet cookie dhe regjistrohet koha e fundit e login-it
app.get("/logout", (req, res) => {
  try {
    const token = req.cookies.authToken;
    const secretKey = process.env.SECRET;
    const decodedToken = jwt.verify(token, secretKey);

    const userID = decodedToken.userId;
    const lastLogin = new Date();

    db.query(
      "UPDATE users SET lastLogin = ? WHERE userId = ?",
      [lastLogin, userID],
      (updateErr, updateResult) => {
        if (updateErr) {
          console.error("Error updating last login timestamp:", updateErr);
          return res.json({ Message: "Error during login", Login: false });
        }
      }
    );

    console.log("Logged out");
    res.clearCookie("connect.sid");
    res.clearCookie("authToken").send("Logged out successfully");
  } catch (error) {
    res.status(401).send("Not logged in").end();
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
  // Përdorimi i refreshToken për të gjeneruar një access token të ri mund të bëhet këtu
  // Kodin mund ta shtoni në të ardhmen sipas nevojave
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveri është duke dëgjuar në portën ${PORT}`);
});
