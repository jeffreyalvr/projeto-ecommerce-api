import express from "express";
import produtosRoutes from "./routes/produtos.js";

const PORT = 3334;

const app = express();
app.use(express.json());

app.use("/produtos", produtosRoutes);

app.get("/", (req, res) => {
  res.send("GET Index");
});

app.listen(process.env.PORT || PORT, () =>
  console.log(`Server rodando em http://localhost:${PORT}...`)
);
