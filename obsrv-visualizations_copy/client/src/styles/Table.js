import * as React from 'react';
import DataTable from 'react-data-table-component';
import _ from 'lodash';
import { useState } from 'react';
import SkeletonComp from './Skeleton';

export default function BasicTable(props) {

    const { loading = false, columns = [], data = [], conf = {}, query, stateMetadata = {} } = props;
    const [tableData, setTableData] = useState(data);


    const renderTable = () => {
        return <DataTable
            columns={columns}
            data={tableData}
            {...conf}
        />
    }

    return (
        <>
        {loading && <SkeletonComp />}
        {!loading && renderTable()}
        </>
    );

}
