import http from "node:http";

const server = http.createServer();
const port = process.env.PORT ?? 3500
server.listen(port);
console.log(`listening on the port ${port} on ${server.address()}`);
server.on("request", async(req, res) => {
    console.log(req.method, req.url);
    res.setHeader("Content-Type", "application/json")
    res.write(JSON.stringify({x:5}));
    res.end();
});