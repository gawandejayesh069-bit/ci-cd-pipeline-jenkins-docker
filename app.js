const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("🔥 New Version Deployed Successfully!");
    } else {
        res.write("Hello DevOps");
    }
    res.end();
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});