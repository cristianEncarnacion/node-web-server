const { envs } = require("./config/env");
const { startServer } = require("./server/server");

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
