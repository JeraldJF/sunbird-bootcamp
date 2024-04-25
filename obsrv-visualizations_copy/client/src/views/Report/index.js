import { Box, Grid, Stack } from "@mui/material"
import MainCard from "ui-component/cards/MainCard"
import { gridSpacing } from 'store/constant';
import { useState } from "react";
import { fetchReport } from "services";
import Table from 'styles/Table'
import { useNavigate } from "react-router"
import { EyeOutlined, PlayCircleOutlined } from "@ant-design/icons"
import { IconButton, Tooltip } from "@mui/material"
import { tableCustomStyles } from "data/globalOptions";
import { useEffect } from "react";

const HowMuch = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const fetchSeriesData = async () => {
        try {
            const response = await fetchReport({})
            setData(response);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchSeriesData()
    }, [])

    const columns = [
        {
            name: 'Title',
            selector: row => row.title
        },
        {
            name: 'Description',
            selector: row => row.description
        },
        {
            name: 'Created On',
            selector: row => row.createdon
        },
        {
            name: 'Status',
            selector: row => row.status
        },
        {
            name: 'Actions',
            selector: row => {
                return <Stack direction="row" justifyContent="flex-start" alignItems="center">
                    <Tooltip title="Publish Report" onClick={(e) => { }}>
                        <IconButton
                            color="primary"
                            size="large"
                            disabled={true}>
                            <PlayCircleOutlined />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="View Report" onClick={(e) => { navigate(`/reports/${row?.reportid}`) }}>
                        <IconButton
                            color="primary"
                            size="large"
                        >
                            <EyeOutlined />
                        </IconButton>
                    </Tooltip>
                </Stack>
            }
        }
    ];

    return <>
        <Box>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <MainCard sx={{ margin: "0.8rem", mr: 5, bgcolor: "#eef2f6" }}>
                        <Table
                            loading={loading}
                            key={Math.random()}
                            columns={columns}
                            data={data}
                            conf={{
                                striped: true,
                                customStyles: tableCustomStyles
                            }}
                        />
                    </MainCard>
                </Grid>
            </Grid>
        </Box>
    </>
}

export default HowMuch
