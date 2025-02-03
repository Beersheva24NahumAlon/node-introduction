import logger from "./logger.mjs";
//import fs from "node:fs";
import {readFile, writeFile} from "node:fs/promises";

// const data = fs.readFile("./file.txt", "utf-16le",(err, data) => {
//     if (err) {
//         logger.error(err);
//     } else {
//         logger.info(data);
//     }
// });

// fs.writeFile("./file.txt", ["some data1", "some data2"].join("\n"), "utf-16le", () => logger.info("file saved successfully"));

(async () => {
    const data = await readFile("./file.txt", "utf-16le");
    logger.info(data)
    writeFile("./file.txt", ["some data1", "some data2"].join("\n"), "utf-16le");
})();