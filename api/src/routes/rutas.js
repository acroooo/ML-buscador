const { Router } = require("express");
const router = Router();
const axios = require("axios");
const url = `https://api.mercadolibre.com`;

router.get("/api/search", async (req, res) => {
  await axios
    .get(
      `${url}/sites/MLA/search?q=${req.query.q}&limit=15&offset=${req.query.offset}&sort=${req.query.sort}`
    )
    .then((response) => {
      res.status(200).json(JSON.parse(JSON.stringify(response.data)));
    })

    .catch((err) => {
      console.log(err.message);
    });
});

router.get("/api/search/cond", async (req, res) => {
  await axios
    .get(
      `${url}/sites/MLA/search?q=${req.query.q}&limit=15&offset=${req.query.offset}&sort=${req.query.sort}&ITEM_CONDITION=${req.query.ITEM_CONDITION}`
    )
    .then((response) => {
      res.status(200).json(JSON.parse(JSON.stringify(response.data)));
    })

    .catch((err) => {
      console.log(err.message);
    });
});

module.exports = router;
