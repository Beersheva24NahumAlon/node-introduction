import logger from "./logger.mjs";
import LevelCounter from "./LevelCounter.mjs";
import WordSearcher from "./WordSearcher.mjs";

const levelCounter = new LevelCounter(logger);
const wordSearcher = new WordSearcher(logger, ["Hello", "123"], "debug");

logger.log("info", "hello456");
logger.log("info", "");
logger.log("debug", "123");
logger.log("debug", "hello");
logger.log("debug", "Hello123");
logger.log("debug", "123hello");

levelCounter.printLevels();
wordSearcher.printMessages();