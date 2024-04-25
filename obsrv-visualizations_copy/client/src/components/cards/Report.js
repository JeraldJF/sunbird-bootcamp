import { Grid, Stack, Tooltip, Typography, useTheme } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { useState } from 'react';
import globalConfig from 'data/initialConfig';
import _ from 'lodash';
import { Paper } from '@mui/material';
import { OverflowTypography } from 'components/styled/Typography';
import Loader from 'ui-component/Loader';


const ReportCard = ({ uuid, primary, suffix, secondary, iconPrimary, color, query, description = '', }) => {
    const theme = useTheme();
    const IconPrimary = iconPrimary;
    const primaryIcon = iconPrimary ? <IconPrimary fontSize="large" /> : null;
    const [primaryLabel, setPrimaryLabel] = useState(primary);
    const [colorType, setColorType] = useState("primary");
    const [fullValue, setFullValue] = useState("");
    const [loading, setLoading] = useState(false);
    const fullHeightWidth = { width: '100%', 'height': '100%', 'background': 'white'} ;
    const contentSx = { height: '100%', width: '100%', px: 3, mr:4 };

    return (
        <>
            {loading && <Loader />}
            <Paper elevation={globalConfig.elevation} sx={fullHeightWidth}>
                <Tooltip title={description}>
                    <MainCard sx={fullHeightWidth} contentSX={contentSx}>
                        <Grid container justifyContent="center" alignItems="center" color={_.get(theme, ['palette', colorType, 'main'])}>
                            <Grid item xs={10}>
                                <Stack spacing={1}>
                                <Tooltip title={fullValue}>
                                    <Typography variant="h4">
                                        {primaryLabel} {suffix}
                                    </Typography>
                                </Tooltip>
                                    <Tooltip title={secondary}>
                                        <OverflowTypography sx={{ maxWidth: '90%' }} variant="body2" color="secondary">
                                            {secondary}
                                        </OverflowTypography>
                                    </Tooltip>
                                </Stack>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="h2" style={{ color }}>
                                    {primaryIcon}
                                </Typography>
                            </Grid>
                        </Grid>
                    </MainCard>
                </Tooltip>
            </Paper>
        </>
    );
};

export default ReportCard;
