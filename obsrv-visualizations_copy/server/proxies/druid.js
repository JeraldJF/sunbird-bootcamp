const { createProxyMiddleware } = require('http-proxy-middleware');
const config = require('../config');
const { onError, onProxyReq, onProxyRes } = require('../services/proxy');

module.exports = {
    path: '/query',
    name: 'query',
    handler() {
        return createProxyMiddleware({
            target: config.OBSRV_DRUID_HOST,
            changeOrigin: true,
            ws: true,
            pathRewrite: function (path, req) { return path.replace('/query', '') },
        })
    }
}