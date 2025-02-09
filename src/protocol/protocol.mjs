/*
here should be the code for actual protocol
*/
const protocolObj = {
    "/addPoint": addPoint,
    "/getPoint": getPoint
}
function createResponse(code, response) {
    return { code, response };
}
async function addPoint(data, server, service) {
    try {
        await service.addPoint(JSON.parse(data));
        server.emit("response", createResponse(204, ""));
    } catch (error) {
        server.emit("response", createResponse(400, error.message))
    }
}
async function getPoint(data, server, service) {
    try {
        const point = await service.getPoint(data);
        server.emit("response", createResponse(200, JSON.stringify(point)));
    } catch (error) {
        server.emit("response", createResponse(404, error.message))
    }
}
export default protocolObj;