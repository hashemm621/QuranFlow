require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  credentials: true
}));

app.get("/", (req, res) => {
  res.send("Welcome to the QuranFlow API!");
});


// list of surahs
app.get('/api/surahs', async (req, res) => {
    try {
        const response = await fetch('https://api.alquran.cloud/v1/surah');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch surahs" });
    }
});

// Translation of surah 
app.get('/api/surah/:id', async (req, res) => {
    const { id } = req.params;
    try {
        
        const response = await fetch(`https://api.alquran.cloud/v1/surah/${id}/editions/quran-uthmani,en.asad`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch surah details" });
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});