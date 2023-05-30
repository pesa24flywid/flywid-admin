import React, { useState, useEffect } from 'react'
import {
    Box,
    Text,
    HStack,
    VStack,
    Button
} from '@chakra-ui/react'
import Layout from '../../layout'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import BackendAxios from '@/lib/utils/axios'

const Index = () => {
    const [rowData, setRowData] = useState([

    ])

    const [columnDefs, setColumnDefs] = useState([
        {
            field: "user_id",
            headerName: "User ID"
        },
        {
            field: "name",
            headerName: "Name"
        },
        {
            field: "ip",
            headerName: "Login IP"
        },
        {
            field: "latlong",
            headerName: "Latlong"
        },
        {
            field: "created_at",
            headerName: "Timestamp"
        },
    ])
    useEffect(() => {
        BackendAxios.get('/api/admin/logins/200').then(res => {
            setRowData(res.data.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <>
            <Layout pageTitle={'Login Reports'}>
                <Box my={16}>
                    <Text pb={2} fontWeight={'semibold'}>Recent Login Activity</Text>
                    <Box
                        className='ag-theme-alpine'
                        w={['full']} h={'2xl'}>
                        <AgGridReact
                            rowData={rowData}
                            columnDefs={columnDefs}
                        >

                        </AgGridReact>
                    </Box>
                </Box>
            </Layout>
        </>
    )
}

export default Index