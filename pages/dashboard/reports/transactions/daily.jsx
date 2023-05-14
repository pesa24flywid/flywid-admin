import React, { useState, useEffect } from 'react'
import Layout from '../../layout'
import {
    Box,
    Button,
    Text,
    HStack,
    VisuallyHidden,
} from '@chakra-ui/react'
import BackendAxios from '@/lib/utils/axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { BsChevronDoubleLeft, BsChevronDoubleRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const ExportPDF = () => {
    const doc = new jsPDF('landscape')

    doc.autoTable({ html: '#printable-table' })
    doc.output('dataurlnewwindow');
}

const Ledger = () => {
    const today = new Date()
    const [rowData, setRowData] = useState([])
    const [columnDefs, setColumnDefs] = useState([
        {
            headerName: "User ID",
            field: "transaction_by",
            cellRenderer: 'userCellRenderer'
        },
        {
            headerName: "Transaction ID",
            field: "transaction_id",
        },
        {
            headerName: 'Credit Amount',
            field: 'credit_amount'
        },
        {
            headerName: 'Debit Amount',
            field: 'debit_amount'
        },
        {
            headerName: 'Transaction For',
            field: 'service_type'
        },
        {
            headerName: 'Opening Balance',
            field: 'opening_balance'
        },
        {
            headerName: 'Closing Balance',
            field: 'closing_balance'
        },
        {
            headerName: 'Description',
            field: 'metadata'
        },
        {
            headerName: 'Timestamp',
            field: 'created_at'
        },
    ])
    const [printableRow, setPrintableRow] = useState(rowData)
    const [pagination, setPagination] = useState({
        current_page: "1",
        total_pages: "1",
        first_page_url: "",
        last_page_url: "",
        next_page_url: "",
        prev_page_url: "",
    })

    function fetchLedger(pageLink) {
        BackendAxios.get(pageLink || `/api/admin/transactions-period?page=1`).then((res) => {
            setPagination({
                current_page: res.data.current_page,
                total_pages: parseInt(res.data.last_page),
                first_page_url: res.data.first_page_url,
                last_page_url: res.data.last_page_url,
                next_page_url: res.data.next_page_url,
                prev_page_url: res.data.prev_page_url,
            })
            setRowData(res.data)
            setPrintableRow(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchLedger()
    }, [])

    const userCellRenderer = (params) => {
        return (
            <Text>
                ({params.data.trigered_by}) {params.data.trigered_by_name} - {params.data.trigered_by_phone}
            </Text>
        )
    }


    return (
        <>
            <Layout pageTitle={'Transactions Ledger'}>
                <HStack my={4} justifyContent={'space-between'}>
                    <Text fontSize={'lg'} fontWeight={'semibold'}>Transactions Ledger</Text>
                    <Button onClick={ExportPDF} colorScheme={'red'} size={'sm'}>Export PDF</Button>
                </HStack>


                <HStack spacing={2} py={4} bg={'white'} justifyContent={'center'}>
                    <Button
                        colorScheme={'twitter'}
                        fontSize={12} size={'xs'}
                        variant={'outline'}
                        onClick={() => fetchLedger(pagination.first_page_url)}
                    ><BsChevronDoubleLeft />
                    </Button>
                    <Button
                        colorScheme={'twitter'}
                        fontSize={12} size={'xs'}
                        variant={'outline'}
                        onClick={() => fetchLedger(pagination.prev_page_url)}
                    ><BsChevronLeft />
                    </Button>
                    <Button
                        colorScheme={'twitter'}
                        fontSize={12} size={'xs'}
                        variant={'solid'}
                    >{pagination.current_page}</Button>
                    <Button
                        colorScheme={'twitter'}
                        fontSize={12} size={'xs'}
                        variant={'outline'}
                        onClick={() => fetchLedger(pagination.next_page_url)}
                    ><BsChevronRight />
                    </Button>
                    <Button
                        colorScheme={'twitter'}
                        fontSize={12} size={'xs'}
                        variant={'outline'}
                        onClick={() => fetchLedger(pagination.last_page_url)}
                    ><BsChevronDoubleRight />
                    </Button>
                </HStack>
                <Box className={'ag-theme-alpine'} h={'2xl'}>
                    <AgGridReact
                        columnDefs={columnDefs}
                        rowData={rowData}
                        defaultColDef={{
                            filter: true,
                            floatingFilter: true,
                            resizable: true,
                        }}
                        components={{
                            'userCellRenderer': userCellRenderer
                        }}
                        onFilterChanged={
                            (params) => {
                                setPrintableRow(params.api.getRenderedNodes().map((item) => {
                                    return (
                                        item.data
                                    )
                                }))
                            }
                        }
                    >

                    </AgGridReact>
                </Box>
                <HStack spacing={2} py={4} bg={'white'} justifyContent={'center'}>
                    <Button
                        colorScheme={'twitter'}
                        fontSize={12} size={'xs'}
                        variant={'outline'}
                        onClick={() => fetchLedger(pagination.first_page_url)}
                    ><BsChevronDoubleLeft />
                    </Button>
                    <Button
                        colorScheme={'twitter'}
                        fontSize={12} size={'xs'}
                        variant={'outline'}
                        onClick={() => fetchLedger(pagination.prev_page_url)}
                    ><BsChevronLeft />
                    </Button>
                    <Button
                        colorScheme={'twitter'}
                        fontSize={12} size={'xs'}
                        variant={'solid'}
                    >{pagination.current_page}</Button>
                    <Button
                        colorScheme={'twitter'}
                        fontSize={12} size={'xs'}
                        variant={'outline'}
                        onClick={() => fetchLedger(pagination.next_page_url)}
                    ><BsChevronRight />
                    </Button>
                    <Button
                        colorScheme={'twitter'}
                        fontSize={12} size={'xs'}
                        variant={'outline'}
                        onClick={() => fetchLedger(pagination.last_page_url)}
                    ><BsChevronDoubleRight />
                    </Button>
                </HStack>

                <VisuallyHidden>
                    <table id='printable-table'>
                        <thead>
                            <tr>
                                <th>#</th>
                                {
                                    columnDefs.filter((column) => {
                                        if (column.headerName != "Description") {
                                            return (
                                                column
                                            )
                                        }
                                    }).map((column, key) => {
                                        return (
                                            <th key={key}>{column.headerName}</th>
                                        )
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                printableRow.map((data, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{key + 1}</td>
                                            <td>({data.trigered_by}) {data.trigered_by_name}</td>
                                            <td>{data.transaction_id}</td>
                                            <td>{data.credit_amount}</td>
                                            <td>{data.debit_amount}</td>
                                            <td>{data.service_type}</td>
                                            <td>{data.opening_balance}</td>
                                            <td>{data.closing_balance}</td>
                                            <td>{data.created_at}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </VisuallyHidden>

            </Layout>
        </>
    )
}

export default Ledger