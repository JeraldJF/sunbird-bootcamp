const axios = require('axios');
const config = require('../config/index');

const API_HOST = config.OBSRV_API_HOST;
const API_KEY = config.OBSRV_API_KEY;
const datasource = config.DATASOURCE;
const sqlQuery = config.SQL_QUERY

const executeSql = () => {

    const body = {
        "context": {
            "dataSource": datasource
        },
        "querySql": {
            "query": sqlQuery
        }
    }

    return axios.default.post(`${API_HOST}/obsrv/v1/sql-query`, body, { headers: { "x-api-key": API_KEY } }).then(response => response.data);
}

module.exports = {
    executeSql
}