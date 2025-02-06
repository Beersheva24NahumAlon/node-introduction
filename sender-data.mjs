import { Stream } from "node:stream";

export const stream = new Stream.Readable();
stream.push("Hello ");
stream.push("World");
stream.push(null);

