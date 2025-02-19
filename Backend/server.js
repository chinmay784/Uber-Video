const http = require("http");
const app = require("./app");
const connectionDB = require("./db/db");
const port = process.env.PORT || 4000

const server = http.createServer(app)

connectionDB();
server.listen(port,()=>{
    console.log("Server started 4000")
});
