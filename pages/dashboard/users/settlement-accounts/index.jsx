import React, { useState, useEffect } from 'react'
import {
    TableContainer,
    Table,
    Thead,
    Tr, Th, Td,
    Tbody,
    Text,
    Button,
    Box,
} from '@chakra-ui/react'
import Layout from '../../layout'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const SettlementAccounts = () => {
    const [columnDefs, setColumnDefs] = useState([

        {
            field: "userId",
            headerName: "User ID"
        },
        {
            field: "userName",
            headerName: "User Name"
        },
        {
            field: "accountNumber",
            headerName: "Account Number"
        },
        {
            field: "bankName",
            headerName: "Bank Name"
        },
        {
            field: "ifsc",
            headerName: "ifsc"
        },
        {
            passbook: null,
            headerName: "Passbook"
        },
        {
            field: "status",
            headerName: "Status"
        },
    ])
    const [rowData, setRowData] = useState([])

    const SwitchCellRender = (params) => {
        return (
            <Switch
                defaultChecked={params.value === 1}
                onChange={() => {
                    params.node.setDataValue("status", params.value == 1 ? 0 : 1)
                }}
            ></Switch>
        )
    }

    useEffect(() => {

    }, [])

    return (
        <>
            <Layout pageTitle={'Settlement Accounts'}>
                <Text>Users' Settlement Accounts</Text>

                <Box
                    h={'lg'} my={16}
                    className='ag-theme-alpine'
                >
                    <AgGridReact
                        rowData={rowData}
                        columnDefs={columnDefs}
                        defaultColDef={{
                            filter: true,
                            floatingFilter: true,
                            resizable: true,
                            sortable: true,
                        }}
                        components={{
                            'switchCellRender': SwitchCellRender,
                        }}
                    />
                </Box>
            </Layout>
        </>
    )
}

export default SettlementAccounts