import express from "express";
import { MongoClient } from "mongodb";

const mongodbUri = "mongodb://localhost:27017";
const client = new MongoClient(mongodbUri);
// await client.connect();
// const db = client.db("northwind");
// const employees = await db.collection("employees").find().toArray();
// console.log(8, employees.length);

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Welcome to my API!");
});

app.get("/employees", (req, res) => {
  getData(async (db) => {
    const employees = await db.collection("employees").find().toArray();
    res.json(employees);
  });
});

app.listen(port, () => {
  console.log(`Server runs on http://localhost:${port} `);
});

async function getData(done) {
  await client.connect();
  const db = client.db("northwind");
  done(db);
}
