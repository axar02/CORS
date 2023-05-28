const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const fetch = require("node-fetch");
const cors = require("cors");

app.use(cors());

app.get("/", async (req, res) => {
  const response = await fetch("https://satudata.kulonprogokab.go.id/opendata/index.php/resources/detil/data-jumlah-balita-stunting-di-kabupaten-kulon-progo/df7ff80f-a25f-4631-92f2-8f8bd554ba40?to=api");
  res.json(await response.json());
});

app.listen(port);