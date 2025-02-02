import logger from "./logger.mjs";
import fs from "node:fs";

const data = fs.readFileSync("./index.mjs");
logger.info(data);
fs.writeFileSync("./file.txt", ["some data1", "some data2"].join("\n"));