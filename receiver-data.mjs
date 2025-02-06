import { readableStream } from "./file-readable-stream.mjs";
import { writableStream } from "./file-writable-stream.mjs";

//reading
(async () => {
    for await (const res of readableStream) {
        console.log(res.toString());
    }
})();

//writing
writableStream.write("Hello ");
writableStream.write("World !!!");
writableStream.end();

