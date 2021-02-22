const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server Running at ${port}`)
});