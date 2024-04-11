const express = require("express");
const getAllBanks = require("./controllers/getBank");
const getSpecificBank = require("./controllers/getSpecificBank");

const app = express();

app.use(express.json());

const PORT = 3001;

app.listen(3001, () => {
  console.log(`Rodando na porta ${PORT}`);
});

app.get("/", async (req, res) => {
  const query = await getAllBanks();
  return res.status(201).json(query);
});

app.get("/:id", async (req, res) => {
  const query = await getSpecificBank(req.params.id);
  return res.status(201).json(query);
});
