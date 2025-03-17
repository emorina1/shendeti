const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "", // Lëre bosh nëse nuk ke fjalëkalim
  database: "shendetiim",
  waitForConnections: true,
  connectionLimit: 10, // Numri maksimal i lidhjeve
  queueLimit: 0,
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error("❌ Error connecting to database:", err.message);
        return;
    }
    console.log("✅ Database connected!");
    connection.release(); // Lëshojmë lidhjen kur nuk është më e nevojshme
});

module.exports = pool;
