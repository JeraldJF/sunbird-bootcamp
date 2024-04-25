import { Grid } from '@mui/material';
import Chart from '../../ui-component/Chart';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

const BarChart = (props) => {

  return (
    <>
      <MainCard sx={{ mr: 4, mt:1 }}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Chart {...props} />
          </Grid>
        </Grid>
      </MainCard>
    </>
  );
};

export default BarChart;
