const { logger } = require("./logger.cjs");

const path = require("node:path");
logger.log(path.parse(__filename));