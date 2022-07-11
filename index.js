import express from "express";

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Welcome to my API!");
});

app.listen(port, () => {
  console.log(`Server runs on http://localhost:${port} `);
});
