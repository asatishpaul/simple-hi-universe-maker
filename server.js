const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const app = express();
const PORT = process.env.PORT || 3000;

// PostgreSQL connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(bodyParser.json());
app.use(express.static("public"));

// API: Submit form
app.post("/api/submit", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await pool.query(
      "INSERT INTO submissions (name, email, message) VALUES ($1, $2, $3)",
      [name, email, message]
    );
    res.status(200).send({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving data");
  }
});

// API: View all submissions (admin/owner)
app.get("/api/submissions", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM submissions ORDER BY id DESC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching submissions");
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
