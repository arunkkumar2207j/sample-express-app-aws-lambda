const express = require("express")
const serverless = require("serverless-http")
const app = express();
// const port = 6666;

app.get("/", (req, res) => {
    res.status(200).send("Home Page")
})

app.get("/hello", (req, res) => {
    res.status(200).send("Hello World Page")
})

// app.listen(port, () => {
//     console.log(`Server running at port ${port}`);
// })

module.exports.handler = serverless(app);