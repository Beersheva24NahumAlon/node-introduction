import { stream } from "./sender-data.mjs";
(async () => {
    for await (const res of stream) {
        console.log(res.toString());
    }
})();
