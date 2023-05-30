import React, { useState, useEffect } from 'react'
import Layout from '../../layout'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {
  Box,
  Button,
  Text,
  HStack,
  VisuallyHidden,
  useToast
} from '@chakra-ui/react'
import BackendAxios from '@/lib/utils/axios';
import Pdf from 'react-to-pdf'
import jsPDF from 'jspdf';
import 'jspdf-autotable'
import { BsChevronDoubleLeft, BsChevronDoubleRight, BsChevronLeft, BsChevronRight, BsEye } from 'react-icons/bs';


const ExportPDF = () => {
  const doc = new jsPDF('landscape')

  doc.autoTable({ html: '#printable-table' })
  doc.output('dataurlnewwindow');
}

const Index = () => {
  const Toast = useToast({position: 'top-right'})
  const [rowData, setRowData] = useState([])
  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "Status",
      field: "status",
      editable: true,
      cellEditor: 'agGridSelectEditor',
      singleClickEdit: true,
      cellEditorParams: {
        values: ['processing', 'processed', 'reversed']
      }
    },
    {
      headerName: "Payout ID",
      field: "payout_id",
    },
    {
      headerName: "Amount",
      field: "amount",
    },
    {
      headerName: "Beneficiary",
      field: "beneficiary_name",
    },
    {
      headerName: "Account",
      field: "account_number",
    },
    {
      headerName: "Reference ID",
      field: "reference_id",
    },
    {
      headerName: "Created By User",
      field: "user_id",
    },
    {
      headerName: "Timestamp",
      field: "created_at",
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

  

  function fetchPayouts(pageLink) {
    BackendAxios.post(pageLink || '/api/admin/razorpay/fetch-payout?page=1').then((res) => {
      setPagination({
        current_page: res.data.current_page,
        total_pages: parseInt(res.data.last_page),
        first_page_url: res.data.first_page_url,
        last_page_url: res.data.last_page_url,
        next_page_url: res.data.next_page_url,
        prev_page_url: res.data.prev_page_url,
      })
      setRowData(res.data.data)
      setPrintableRow(res.data.data)
    }).catch((err) => {
      console.log(err)
      Toast({
        status: 'error',
        description: err.response.data.message || err.response.data || err.message
      })
    })
  }

  useEffect(() => {
    fetchPayouts()
  }, [])


  const pdfRef = React.createRef()
  const [receipt, setReceipt] = useState({
    show: false,
    status: "success",
    data: {}
  })
  const receiptCellRenderer = (params) => {
    function showReceipt() {
      if (!params.data.metadata) {
        Toast({
          description: 'No Receipt Available'
        })
        return
      }
      setReceipt({
        status: JSON.parse(params.data.metadata).status,
        show: true,
        data: JSON.parse(params.data.metadata)
      })
    }
    return (
      <HStack height={'full'} w={'full'} gap={4}>
        <Button rounded={'full'} colorScheme='twitter' size={'xs'} onClick={() => showReceipt()}><BsEye /></Button>
      </HStack>
    )
  }

  const userCellRenderer = (params) => {
    return (
        <Text>
            ({params.data.trigered_by}) {params.data.trigered_by_name} - {params.data.trigered_by_phone}
        </Text>
    )
}
  return (
    <>
      <Layout pageTitle={'Payout Reports'}>

        <HStack my={8} justifyContent={'space-between'}>
          <Text fontSize={'lg'} fontWeight={'semibold'}>Payout Report</Text>
          <Button colorScheme={'red'} onClick={ExportPDF} size={'sm'}>Export PDF</Button>
        </HStack>


        <HStack spacing={2} py={4} bg={'white'} justifyContent={'center'}>
          <Button
            colorScheme={'twitter'}
            fontSize={12} size={'xs'}
            variant={'outline'}
            onClick={() => fetchPayouts(pagination.first_page_url)}
          ><BsChevronDoubleLeft />
          </Button>
          <Button
            colorScheme={'twitter'}
            fontSize={12} size={'xs'}
            variant={'outline'}
            onClick={() => fetchPayouts(pagination.prev_page_url)}
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
            onClick={() => fetchPayouts(pagination.next_page_url)}
          ><BsChevronRight />
          </Button>
          <Button
            colorScheme={'twitter'}
            fontSize={12} size={'xs'}
            variant={'outline'}
            onClick={() => fetchPayouts(pagination.last_page_url)}
          ><BsChevronDoubleRight />
          </Button>
        </HStack>
        <Box className={'ag-theme-alpine'} h={'sm'}>
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={{
              filter: true,
              floatingFilter: true,
              resizable: true,
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
            onClick={() => fetchPayouts(pagination.first_page_url)}
          ><BsChevronDoubleLeft />
          </Button>
          <Button
            colorScheme={'twitter'}
            fontSize={12} size={'xs'}
            variant={'outline'}
            onClick={() => fetchPayouts(pagination.prev_page_url)}
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
            onClick={() => fetchPayouts(pagination.next_page_url)}
          ><BsChevronRight />
          </Button>
          <Button
            colorScheme={'twitter'}
            fontSize={12} size={'xs'}
            variant={'outline'}
            onClick={() => fetchPayouts(pagination.last_page_url)}
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
                                    if (
                                        column.field != "metadata" &&
                                        column.field != "name" &&
                                        column.field != "receipt"
                                    ) {
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
                                        <td>{data.transaction_id}</td>
                                        <td>({data.trigered_by}) {data.name}</td>
                                        <td>{data.debit_amount}</td>
                                        <td>{data.credit_amount}</td>
                                        <td>{data.opening_balance}</td>
                                        <td>{data.closing_balance}</td>
                                        <td>{data.service_type}</td>
                                        <td>{JSON.parse(data.metadata).status ? "SUCCESS" : "FAILED"}</td>
                                        <td>{data.created_at}</td>
                                        <td>{data.updated_at}</td>
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

export default Index