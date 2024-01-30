import express from "express";
import prisma from "../db.js";

const produtos = express.Router();

produtos.get("/", async (req, res) => {
  const dados = await prisma.produto.findMany();
  res.send(dados);
});

produtos.post("/", async (req, res) => {
  const { nome, valor, estoque, descricao, fotoUrl } = req.body;
  try {
    await prisma.produto.create({
      data: { nome, valor, estoque, descricao, fotoUrl },
    });
    return res.status(201).send(`Produto "${nome}" adicionado com sucesso!`);
  } catch (error) {
    return res
      .status(500)
      .send(
        "Ocorreu um erro ao adicionar o produto. Verifique os campos enviados ou tente novamente mais tarde."
      );
  }
});

produtos.get("/:id", (req, res) => {
  const { id } = req.params;
  const produto = db.find((item) => item.id === id);

  if (!produto)
    return res.status(404).send(`Produto com id "${id}" não encontrado!`);

  res.status(302).send(produto);
});

produtos.delete("/:id", (req, res) => {
  const { id } = req.params;
  const produto = db.find((item) => item.id === id);

  if (!produto)
    return res.status(404).send(`Produto com id "${id}" não encontrado!`);

  // TODO: remover item

  res.status(200).send(`Produto com id "${id}" removido com sucesso!`);
});

produtos.patch("/:id", (req, res) => {
  const { id } = req.params;
  let produto = db.find((item) => item.id === id);
  const { nome, valor, estoque } = req.body;

  if (!produto)
    return res.status(404).send(`Produto com id "${id}" não encontrado!`);

  // TODO: atualiza item
  produto = { nome, valor, estoque };

  res.status(200).send(`Produto com id "${id}" atualizado com sucesso!`);
});

export default produtos;
