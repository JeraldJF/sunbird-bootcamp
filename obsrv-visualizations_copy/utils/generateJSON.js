const fs = require('fs');

const parseJSON = (content) => {
    try {
        return JSON.parse(content);
    } catch (err) {
        const lines = content.split(/\r?\n/);
        let jsonArray = [];
        lines.forEach(function (line) {
            try {
                jsonArray.push(JSON.parse(line));
            } catch (err) {}
        });

        return jsonArray;
    }
}

const data = fs.readFileSync("./resources/indianWeather.txt", { encoding: 'utf-8' });
const parsedData = parseJSON(data);
fs.writeFileSync("./resources/indianWeather.json", JSON.stringify(parsedData));