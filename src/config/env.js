// require("dotenv").config(); //Forma anterior de importar
import env from "dotenv"; //Forma actual de importar
env.config(); //Forma actual de importar

// const { get } = require("env-var"); //Forma anterior de importar
import envvar from "env-var"; //Forma actual de importar

//Forma actual de exportar
export const envs = {
  PORT: envvar.get("PORT").required().asPortNumber(),
  PUBLIC_PATH: envvar.get("PUBLIC_PATH").default("public").asString(),
};

//Esto se pone con la forma anterior de importar
// module.exports = {
//   envs,
// };
