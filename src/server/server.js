const express = require("express");
const path = require("path");

const startServer = (options) => {
  const { PORT, PUBLIC_PATH = "public" } = options;
  const app = express();
  //para poder usar middleware se usa la palabra use
  app.use(express.static(PUBLIC_PATH)); //CONTENIDO ESTATICO QUE SE PONE DISPONIBLE PARA QUE SE USE

  app.get("*", (req, res) => {
    const indexPath = path.join(__dirname + `/../../${PUBLIC_PATH}/index.html`);
    res.sendFile(indexPath);
  });

  app.listen(PORT, (err) => {
    if (err) {
      console.error("Error al iniciar el servidor");
      console.error(err);
      return;
    }
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
  });
};

module.exports = {
  startServer,
};
