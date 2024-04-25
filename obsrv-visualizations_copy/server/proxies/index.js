const path = require('path');
const { scrapModules } = require("../services/fs");

const proxies = scrapModules(__dirname, path.basename(__filename))

const mountProxies = (app) => {
    proxies.forEach(proxy => {
        app.use(proxy.path, proxy.handler());
    })
}

module.exports = {
    mountProxies
}