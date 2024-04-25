
const tableCustomStyles = {
    rows: {
        stripedStyle: {
            backgroundColor: '#f5f5f5'
        }
    },
    headCells: {
        style: {
            background: 'rgb(33,150,243)',
            border: '1px solid white',
            color: 'white',
            justifyContent: 'center',
            fontSize: 14,
            "& div": {
                "textWrap": 'wrap'
            },
            paddingTop: 8,
            paddingBottom: 8,
            width: '11.25rem'
        },
    },
    cells: {
        style: {
            border: '1px solid white',
            justifyContent: 'center',
            fontSize: 14,
            textWrap: 'balance',
        },
    },
};

export { tableCustomStyles };
