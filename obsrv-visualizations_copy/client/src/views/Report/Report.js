import { Grid, Stack, Button, Typography } from "@mui/material"
import MainCard from "ui-component/cards/MainCard";
import { useState, useEffect } from "react";
import _ from 'lodash';
import { useParams } from "react-router"
import { BarChartOutlined, BugFilled, InfoCircleOutlined } from "@ant-design/icons"
import ReportCard from "components/cards/Report";
import AlertMessage from "components/cards/AlertMessage";
import result from "./result.json"
import LineChart from "views/chartTypes/Line";
import PieChart from "views/chartTypes/Pie";
import dayjs from "dayjs";


const IndiaMap = props => {

    const [report, setReport] = useState(null);
    const [data, setData] = useState(null)
    const { reportId = "" } = useParams();

    const getReport = async () => {
        try {
            // const result = await fetchReport(reportId);
            // const report = _.get(result, '[0]');
            const report = result
            if (report) {
                const dataSources = _.get(report, 'reportconfig.dataSource', []);
                const data = await Promise.all(_.map(dataSources, ds => {
                    const response = axios.post("/query/druid/v2?pretty=true", _.get(ds, "query"))
                        .then(data => {
                            return {
                                id: ds.id,
                                data: _.get(data, ["data", "0", "result"])
                            }
                        })
                    return response
                }))
                setData(data);
                setReport(report);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const fetchCharts = () => {
        const { reportconfig = {} } = report || {};
        const { charts = [] } = reportconfig;
        return _.map(charts, chart => {

            const { labelsExpr, datasets = [], chartType = "bigNumber", bigNumbers } = chart;
            const datasourceName = _.get(chart, 'dataSource.ids[0]');
            const inputData = _.find(data, ['id', datasourceName]);

            if (['line', 'bar'].includes(chartType)) {
                const series = _.map(datasets, dataset => {
                    const { label, dataExpr } = dataset;
                    return {
                        name: label,
                        data: _.map(_.get(inputData, ['data']), d => ({
                            x: _.get(d, labelsExpr, ''),
                            y: _.get(d, dataExpr, 0)
                        }))
                    }
                })

                return {
                    type: chartType,
                    chart: () => {
                        const options = {
                            type: chartType,
                            options: {
                                xaxis: {
                                    type: 'category'
                                }
                            },
                            series
                        }
                        return <LineChart {...options} />
                    },

                }
            }

            if (chartType === 'pie') {
                return {
                    type: chartType,
                    chart: () => {
                        const options = {
                            type: chartType,
                            options: {},
                            series: [10, 20],
                            labels: _.map(_.get(inputData, 'data'), labelsExpr)
                        }
                        return <PieChart {...options} />
                    },
                }
            }

            if (chartType === "bigNumber") {
                return {
                    type: chartType,
                    chart: () => {
                        const sum = _.sumBy(_.get(inputData, 'data'), 'total_count')
                        return <Grid sx={{ mr: 4 }}><ReportCard primary={sum} secondary="Total Number of Airlines" iconPrimary={BarChartOutlined} /></Grid>
                    }
                }
            }
        })
    }

    useEffect(() => {
        getReport()
    }, [])

    const renderSections = (data) => {
        return _.flatten(_.map(data, (value, index) => {
            const { size, charts = [] } = value;
            const { xs, sm, lg, md } = size;
            const chartsData = (
                <Grid container spacing={2} key={Math.random()} marginBottom={1} justifyContent="center" alignItems="center">
                    {
                        _.map(charts, (chartMetadata, index) => {
                            const { title, chart, ...rest } = chartMetadata;
                            return <Grid item xs={xs} sm={sm} md={md} lg={lg} key={`${Math.random()}`} alignItems="stretch">
                                {chart()}
                            </Grid>
                        })
                    }
                </Grid>
            );
            return chartsData;
        }))
    }

    const renderDescription = () => {
        const currentTimestamp = dayjs().format("hh:mm A D MMM YYYY")
        return <Grid container spacing={1}>
            <Grid item xs={12} textAlign={"end"} mx={1}>
                <Typography variant="caption">Last updated on {currentTimestamp}</Typography>
            </Grid>
            <Grid item xs={12}>
                <AlertMessage color='info' messsage={_.get(report, 'description')} icon={InfoCircleOutlined} />
            </Grid>
        </Grid>
    }

    const renderReport = () => {
        if (!report) return <Grid sx={{ mt: 4, mr:2 }}><AlertMessage color='error' messsage={"No Report Found"} icon={BugFilled} /></Grid>
        const charts = fetchCharts();

        const sectionData = {
            small: {
                size: {
                    xs: 6,
                    sm: 6,
                    md: 6,
                    lg: 6
                },
                charts: [
                    {
                        type: "bigNumber",
                        chart: () => {
                            const sum = 100
                            return <Grid sx={{ mr: 4 }}><ReportCard primary={sum} secondary="Total Number of Airlines Arrived" iconPrimary={BarChartOutlined} /></Grid>
                        }
                    },
                    {
                        type: "bigNumber",
                        chart: () => {
                            const sum = 800
                            return <Grid sx={{ mr: 4 }}><ReportCard primary={sum} secondary="Total Number of Airlines Departed" iconPrimary={BarChartOutlined} /></Grid>
                        }
                    }
                ]
            },
            medium: {
                size: {
                    xs: 12,
                    sm: 12,
                    md: 12,
                    lg: 12
                },
                charts: [
                    ...charts
                ]
            }
        };

        return <MainCard sx={{ margin: "0.8rem", mr: 5, bgcolor: "#eef2f6" }} title={_.capitalize(_.get(report, 'title'))} secondary={<Button variant="contained">Summary</Button>}>
            <Stack spacing={2}>
                {renderDescription()}
                <hr />
                {renderSections(sectionData)}
            </Stack>
        </MainCard >
    }

    return <>
        {renderReport()}
    </>
}

export default IndiaMap;

