const express = require('express');
const router = express.Router();
const axios = require('axios');
const { executeSql } = require('../services/dataset');


router.get('/sql', async (req, res, next) => {
  try {
    const response = await executeSql();
    return res.json(response)
  } catch (error) {
    const { status = 500, statusText = "Something went wrong" } = error?.response || {}
    res.status(status).json({
      errMsg: statusText
    })
  }
});


module.exports = router;
