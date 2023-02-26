import React, { useState, useEffect } from 'react'
import Layout from './layout'
import {
  Box,
  Stack,
  HStack,
  Select,
  Text,
} from '@chakra-ui/react'
import DataCard, { TransactionCard } from '@/HOC/DataCard'
import {
  SiRazorpay
} from 'react-icons/si'
import {
  FaUserPlus,
} from 'react-icons/fa'
import {
  BiLogIn,
} from 'react-icons/bi'
import {
  IoMdHelpBuoy,
} from 'react-icons/io'

import { AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Index = () => {


  const [rowData, setRowData] = useState([
    { name: "Sangam Kumar", role: "Distributor", datetime: "22 Feb 2023 17:41" }
  ])

  const [columnDefs, setColumnDefs] = useState([
    { field: "name" },
    { field: "role" },
    { field: "datetime" },
  ])


  return (
    <>
      <Layout pageTitle={"Dashboard"}>
        <Box p={4}>
          <Stack direction={['row']}
            w={'full'} py={2} spacing={[0, 4]}
            justifyContent={'space-between'}
            flexWrap={'wrap'} alignItems={['flex-start']}
          >
            <DataCard
              title={'Logins'}
              data={126}
              icon={<BiLogIn color='white' size={'32'} />}
              color={'#FF7B54'}
            />
            <DataCard
              title={'Registrations'}
              data={36}
              icon={<FaUserPlus color='white' size={'28'} />}
              color={'#6C00FF'}
            />
            <DataCard
              title={'Support Tickets'}
              data={5}
              icon={<IoMdHelpBuoy color='white' size={'32'} />}
              color={'#FFB100'}
            />
            <DataCard
              title={'Payout Requests'}
              data={29}
              icon={<SiRazorpay color='white' size={'32'} />}
              color={'#88A47C'}
            />
          </Stack>

          <HStack justifyContent={'space-between'} pt={8} pb={4}>
            <Text>Transaction Statistics</Text>
            <Select name='earningStatsDuration' w={'xs'} bg={'white'}>
              <option value="today">Today</option>
              <option value="month">1 Month</option>
              <option value="year">1 Year</option>
            </Select>
          </HStack>
          <Stack
            direction={['column', 'row']}
            py={2} spacing={4}
          >

            <TransactionCard
              color={'#6C00FF'}
              title={"AePS"}
              quantity={"8"}
              amount={"8600"}
            />

            <TransactionCard
              color={'#3C79F5'}
              title={"BBPS"}
              quantity={"8"}
              amount={"8600"}
            />

            <TransactionCard
              color={'#2DCDDF'}
              title={"DMT"}
              quantity={"8"}
              amount={"8600"}
            />
          </Stack>

          <Stack
            direction={['column', 'row']}
            py={2} spacing={4}
          >
            <TransactionCard
              color={'#F2DEBA'}
              title={"PAN"}
              quantity={"8"}
              amount={"8600"}
            />

            <TransactionCard
              color={'#FF8B13'}
              title={"LIC"}
              quantity={"8"}
              amount={"8600"}
            />

            <TransactionCard
              color={'#13005A'}
              title={"CMS"}
              quantity={"8"}
              amount={"8600"}
            />

          </Stack>

          <Stack
            direction={['column', 'row']}
            py={2} spacing={4}
          >
            <TransactionCard
              color={'#ABC270'}
              title={"Recharges"}
              quantity={"8"}
              amount={"8600"}
            />

            <TransactionCard
              color={'#678983'}
              title={"Fund Requests"}
              quantity={"8"}
              amount={"8600"}
            />

          </Stack>


          <Stack direction={['column', 'row']} py={6}>
            <Box>
              <Text pb={2} fontWeight={'semibold'}>Recent Login Activity</Text>
              <Box
                className='ag-theme-alpine'
                w={['full', 'lg']} h={'xs'}>
                <AgGridReact
                  rowData={rowData}
                  columnDefs={columnDefs}
                >

                </AgGridReact>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Layout>
    </>
  )
}

export default Index