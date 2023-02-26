import React, {useState} from 'react'
import Layout from '../layout'
import {
    Box,
    Text,
} from '@chakra-ui/react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const WalletBalance = () => {

    const [rowData, setRowData] = useState([
        {'user type': "Your Balance", 'balance': "₹ 5000"},
        {'user type': "Admins", 'balance': "₹ 456820"},
        {'user type': "Super Distributors", 'balance': "₹ 456820"},
        {'user type': "Distributors", 'balance': "₹ 456820"},
        {'user type': "Retailers", 'balance': "₹ 456820"},
    ])

    const [columnDefs, setColumnDefs] = useState([
        { field: "user type" },
        { field: "balance", width: "786" },
    ])
    return (
        <>
            <Layout pageTitle={'Wallet Balance'}>

                <Box py={6}>
                    <Text fontWeight={'medium'} pb={4}>Wallet Balance Overview</Text>
                    <Box className='ag-theme-alpine' w={'full'} h={['sm', 'xs']}>
                        <AgGridReact
                            columnDefs={columnDefs}
                            rowData={rowData}
                        >

                        </AgGridReact>
                    </Box>
                </Box>
            </Layout>
        </>
    )
}

export default WalletBalance