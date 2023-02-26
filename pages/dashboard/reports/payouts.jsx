import React, { useState, useEffect, useMemo } from 'react'
import {
  Text,
  Box,
  Button,
} from '@chakra-ui/react'
import Layout from '../layout'
import { AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Index = () => {

  const defaultColDef = {filter: true, sortable: true}

  const [columnDefs, setColumnDefs] = useState([
    { field: "id" },
    { field: "name" },
    { field: "amount" },
    { field: "datetime" },
    { field: "beneficiary" },
    { field: "status" },
  ])

  const [rowData, setRowData] = useState([
    { id: 1, name: "Sangam Kumar", amount: "5000", datetime: "20 Feb 2023 19:08", beneficiary: "Rishi Kumar", status: "Failed" },
    { id: 1, name: "Akshay Kumar", amount: "5000", datetime: "20 Feb 2023 19:08", beneficiary: "Rishi Kumar", status: "Failed" },
    { id: 1, name: "Sambhav Kumar", amount: "5000", datetime: "20 Feb 2023 19:08", beneficiary: "Rishi Kumar", status: "Failed" },
    { id: 1, name: "Sailesh Kumar", amount: "5000", datetime: "20 Feb 2023 19:08", beneficiary: "Rishi Kumar", status: "Failed" },
  ])

  return (
    <>
      <Layout pageTitle={'Payout'}>
        <Text fontSize={'lg'} fontWeight={'medium'}>Payout Requests</Text>
        <Box 
        className='ag-theme-alpine'
        mt={4} h={'sm'} w={'auto'}
        >
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            animateRows={true}
            defaultColDef={defaultColDef}
          ></AgGridReact>
        </Box>
      </Layout>
    </>
  )
}

export default Index