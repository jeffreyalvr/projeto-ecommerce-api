import express from "express";
import produtosRoutes from "./routes/produtos.js";

const PORT = 3333;

const app = express();
app.use(express.json());

app.use("/produtos", produtosRoutes);

app.get("/", (req, res) => {
  res.send("GET Index");
});

app.listen(PORT, () =>
  console.log(`Server rodando em http://localhost:${PORT}...`)
);
