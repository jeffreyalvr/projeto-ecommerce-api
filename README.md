# Projeto-Ecommerce-API

## O que é?

API em Express.js e Node JS para CRUD de produtos em um projeto de ecommerce simples.

## Ferramentas utilizadas

1. Node JS;
2. Express;
3. Neon DB;
4. Render (deploy).

## Como testar?

Há duas formas, sendo a execução local e a execução on-line via Vercel.

**A) Aplicação no Vercel:**
Obs: Já conta com a execução do projeto full-stack.
Apenas acesse a seguinte URL: **A ser adicionado futuramente...**

**B) Execução local:**

1. Baixe o projeto pelo GitHub ou realize um clone do mesmo (Necessário possuir o `Node` e `npm` instalados em sua máquina de forma global).
2. Navegue até a pasta raiz do projeto e abra-a utilizando um terminal ou prompt de comando de sua escolha.

Agora utilize os seguintes comandos para suas operações:

3. Instalação dos pacotes utilizados pela aplicação:

`npm install`

4. É necessária a criação de um banco de dados postgres e a devida configuração da URL no arquivo `db.js`.
   Com o banco criado e setado, o usuário precisará realizar um `npx prisma migrate deploy` para adicionar o Model `Produto` no banco.

5. Iniciação do servidor:

`npm run start`

6. Por fim, acesse a aplicação global por meio da seguinte URL:

`localhost:3334`

As seguintes rotas são possíveis:

| Rota          | Tipo HTTP | Resultado esperado         | Params utilizados | Itens de Body utilizados                 |
| ------------- | --------- | -------------------------- | ----------------- | ---------------------------------------- |
| /produtos     | GET       | Retorna todos os produtos  | -                 | -                                        |
| /produtos     | POST      | Cria um novo produto       | -                 | nome, valor, estoque, fotoUrl, descricao |
| /produtos/:id | GET       | Retorna um produto por id  | id                | -                                        |
| /produtos/:id | DELETE    | Deleta um produto por id   | id                | -                                        |
| /produtos/:id | PATCH     | Atualiza um produto por id | id                | nome, valor, estoque, fotoUrl, descricao |
