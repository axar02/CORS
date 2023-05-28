const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const fetch = require("node-fetch");
const cors = require("cors");

app.use(cors());

app.get("/", async (req, res) => {
  const response = await fetch("https://katalog.satudata.go.id/api/3/action/datastore_search?resource_id=9b741503-2e65-41d3-a0cf-51bdd7ee9677");
  res.json(await response.json());
});

app.listen(port);