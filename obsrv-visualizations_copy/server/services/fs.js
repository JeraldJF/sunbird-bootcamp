const fs = require('fs')
const path = require('path');

const scrapModules = (folderPath, basename) => {
    const mapping = new Map();
    fs.readdirSync(folderPath)
        .filter((file) => file !== basename)
        .forEach((file) => {
            const { name, ...others } = require(path.join(folderPath, file))
            mapping.set(name, others);
        });

    return mapping;
};

module.exports = { scrapModules }