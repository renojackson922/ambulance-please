const express = require("express")
const session = require('express-session');
const app = express()
const cors = require('cors');

const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

const port = process.env.PORT || 5000
//const http = require('http');

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end("response");

//   });

const dataApiRouter = require('./routes/dataApi');

app.use('/', dataApiRouter);

app.listen(port, () => {
    console.log(`🌃 Server Running at ${port}`)
});