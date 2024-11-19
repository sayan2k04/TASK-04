const express = require("express");
const mongoose = require("mongoose");
const scrapeProducts = require('./scraper');
const exportToCSV = require('./exportToCSV');

const app = express();
const url =
  "mongodb+srv://ssayanmjhi204:d0gkGVGnXwbixhVQ@cluster0.9pqx7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB using Mongoose
mongoose
  .connect(url)
  .then(() => console.log("Mongoose connected to MongoDB!"))
  .catch((err) => console.error("Mongoose connection error:", err));

app.get("/", (req, res) => {
  res.send("This is Home Route");
});

app.get('/scrape', async (req, res) => {
    await scrapeProducts();
    res.send('Scraping completed!');
});

app.get('/export', async (req, res) => {
    await exportToCSV();
    res.send('Data exported to CSV!');
});

app.listen(3000, () => {
  console.log("Server is running on PORT 3000");
});
