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
  res.status(201).send(`Produto "${produto.nome}" adicionado com sucesso!`);
});

produtos.get("/:id", (req, res) => {
  const { id } = req.params;
  const produto = db.find((item) => item.id === id);

  if (!produto)
    return res.status(404).send(`Produto com id "${id}" não encontrado!`);

  res.status(302).send(produto);
});

export default produtos;
