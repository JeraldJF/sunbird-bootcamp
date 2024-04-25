import { useState } from 'react';
import _ from 'lodash'

import ReactApexChart from 'react-apexcharts';

const ApexChart = (props) => {
    return <>
        <ReactApexChart {...props} />
    </>;
};

export default ApexChart;
