const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const port = 3001;
//MIDDLEWARES
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
//RUTAS
app.use(require("./routes/rutas.js"));
//ARRANCA SV
app.listen(port, () => {
  console.log(`Servidor corriendo en ${port}`);
});
