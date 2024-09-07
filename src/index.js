import { envs } from "./config/env.js"; //Forma actual de importar
// const { envs } = require("./config/env"); Forma anterior de importar

import { startServer } from "./server/server.js"; //Forma actual de importar
// const { startServer } = require("./server/server"); Forma anterior de importar

const main = () => {
  startServer({
    PORT: envs.PORT,
    PUBLIC_PATH: envs.PUBLIC_PATH,
  });
};
//Funcion agnostica autoconvocada
//agnostica porque no tiene nombre
//autoconvocada porque se llama a si misma
(async () => {
  main();
})();
