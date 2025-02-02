const { logger } = require("./logger.cjs");
// console.log(logger);
// logger.log("Hello");

//console.log(process);

const path = require("node:path");
logger.log(path.parse(__filename));