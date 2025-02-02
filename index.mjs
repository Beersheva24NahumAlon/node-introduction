import { fileURLToPath } from "node:url";
import { logger } from "./logger.mjs";
import path from "node:path";

logger.log(path.parse(fileURLToPath(import.meta.url)));
logger.log(path.parse(process.argv[1]));
