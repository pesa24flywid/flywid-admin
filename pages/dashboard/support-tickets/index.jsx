import React, { useState, useEffect, useMemo } from 'react'
import {
    Box,
    Stack,
    Text,
    Button,
    useToast,
} from '@chakra-ui/react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Layout from '../layout';
import BackendAxios from '@/lib/utils/axios';

const SupportTickets = () => {
    const Toast = useToast({ position: 'top-right' })
    const [rowData, setRowData] = useState([])
    const [columnDefs, setColumnDefs] = useState([
        {
            field: "id",
            headerName: "Ticket ID"
        },
        {
            field: "name",
            headerName: "User",
            cellRenderer: 'userCellRenderer'
        },
        {
            field: "body",
            headerName: "Message",
        },
        {
            field: "document",
            headerName: "Attachments",
        },
        {
            field: "transaction_id",
            headerName: "Linked Transaction ID",
        },
        {
            field: "status",
            headerName: "Status",
            editable: true,
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: {
                values: ['raised', 'read', 'responded', 'resolved', 'refund processed'],
            },
            singleClickEdit: true,
        },
        {
            field: "created_at",
            headerName: "Created At",
        },
        {
            field: "updated_at",
            headerName: "Updated At",
        },
    ])

    const defaultColDef = useMemo(() => {
        return {
            resizable: true,
            filter: true,
            floatingFilter: true,
        };
    }, []);

    useEffect(() => {
        BackendAxios.get(`/api/admin/tickets`).then(res => {
            setRowData(res.data)
        }).catch(err => {
            Toast({
                status: 'error',
                description: err.response.data.messagae || err.response.data || err.message
            })
        })
    }, [])

    const userCellRenderer = (params) => {
        return (
            <Box>
                <Text>({params.data.user_id}) {params.value} - {params.data.phone_number}</Text>
            </Box>
        )
    }

    return (
        <>
            <Layout pageTitle={'Support Tickets'}>
                <Box w={'full'} h={12}></Box>
                <Box h={'sm'} w={'full'} className='ag-theme-alpine'>
                    <AgGridReact
                        rowData={rowData}
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDef}
                        components={{
                            'userCellRenderer': userCellRenderer
                        }}
                    >

                    </AgGridReact>
                </Box>
            </Layout>
        </>
    )
}

export default SupportTickets