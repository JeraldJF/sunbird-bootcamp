const onError = ({ entity }) => (err, req, res) => {
    res.status(500).send('Something went wrong. Please try again later.');
}

const onProxyReq = (proxyReq, req, res) => {
    console.log(req.body);
}

const onProxyRes = (proxyReq, req, res) => {
    console.log(req.body);
}

module.exports = {
    onError,
    onProxyRes,
    onProxyReq
}