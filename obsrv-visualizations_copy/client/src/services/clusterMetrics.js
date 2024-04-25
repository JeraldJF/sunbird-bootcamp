import { v4 } from 'uuid';

export const fetchChartData = (config, metadata = {}) => {
    if (config.context) { config = config.context({ ...config, metadata }) }
    let { parse = (response => response), error } = config;
    const uuid = v4();
    const chartUUID = config.id || metadata.uuid;
    return axios.post(`/api/report/v1/metrics/${uuid}`,
        { query: config },
        { params: { ...chartUUID && { id: chartUUID } } })
        .then(response => response.data)
        .then(response => parse(response))
        .catch(err => {
            if (error) return error();
            throw err;
        })
}