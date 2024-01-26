import express from "express";
import db from "../db.json" assert { type: "json" };
import { v4 as uuidv4 } from "uuid";

const produtos = express.Router();

produtos.get("/", (req, res) => {
  res.send(db);
});

produtos.post("/", (req, res) => {
  const produto = req.body;
  db.push({ ...produto, id: uuidv4() });
  res.send(`Produto "${produto.produto}" adicionado com sucesso!`);
});

export default produtos;
