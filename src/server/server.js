// const express = require("express"); //Forma anterior de importar
import express from "express"; //Forma actual de importar

// const path = require("path"); //Forma anterior de importar
import path from "path"; //Forma actual de importar

//Forma actual de exportar
export const startServer = (options) => {
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

//Esto se pone con la forma anterior de importar
// module.exports = {
//   startServer,
// };
