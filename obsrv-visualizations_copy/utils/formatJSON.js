const _ = require('lodash');
const fs = require('fs');

const data = require('./resources/indianWeather.json');
const { fstat } = require('fs');

const findUnique = (data) => {
    return _.unionBy(data, value => {
        const { state_name, district_name, month } = value;
        return `${state_name}_${district_name}`;
    })
}

const unique = findUnique(data);

fs.writeFileSync("./resources/unique.json", JSON.stringify(unique));