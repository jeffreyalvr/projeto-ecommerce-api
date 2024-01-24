import express from "express";

const produtos = express.Router();

produtos.get("/", (req, res) => {
  res.send("GET Produtos");
});

export default produtos;
