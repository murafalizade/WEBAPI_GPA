const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const LoginRouter = require("./loginRouter");
const ResultRouter = require("./resultRouter");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://gpa-calculatorapp.herokuapp.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
})

app.use("/api/login", LoginRouter);
app.use("/api/users", ResultRouter);

app.listen(port);