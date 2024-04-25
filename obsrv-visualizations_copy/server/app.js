require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes');
const { mountProxies } = require('./proxies');
const app = express();

app.use(logger('dev'));
mountProxies(app);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  const errMsg = err?.message || "Something went wrong";
  res.json({ errMsg })
});

module.exports = app;
