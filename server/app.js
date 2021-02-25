const express = require("express")
    , bodyParser = require("body-parser")
    , cookieParser = require("cookie-parser")
    , app = express()
    , port = process.env.PORT || 5000
    , http = require('http');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());



const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
  });

//   // 라우터
// const mainRouter = require("./routes/main");
// app.use('/test', mainRouter)

server.listen(port, () => {
    console.log(`Server Running at ${port}`)
});