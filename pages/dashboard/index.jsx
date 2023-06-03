import React, { useState, useEffect } from 'react'
import Layout from './layout'
import {
  Box,
  Stack,
  HStack,
  Select,
  Text,
  VStack
} from '@chakra-ui/react'
import DataCard, { TransactionCard } from '@/HOC/DataCard'
import {
  SiRazorpay
} from 'react-icons/si'
import {
  FaUserAlt,
  FaUserPlus,
} from 'react-icons/fa'
import {
  BiLogIn, BiRupee,
} from 'react-icons/bi'
import {
  IoMdHelpBuoy,
} from 'react-icons/io'

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

  const [aepsData, setAepsData] = useState({})
  const [bbpsData, setBbpsData] = useState({})
  const [dmtData, setDmtData] = useState({})
  const [panData, setPanData] = useState({})
  const [payoutData, setPayoutData] = useState({})
  const [licData, setLicData] = useState({})
  const [fastagData, setFastagData] = useState({})
  const [cmsData, setCmsData] = useState({})
  const [rechargeData, setRechargeData] = useState({})
  const [fundRequestsData, setFundRequestsData] = useState({})
  const [usersData, setUsersData] = useState({})

  const [retailers, setRetailers] = useState("")
  const [distributors, setDistributors] = useState("")
  const [superDistributors, setSuperDistributors] = useState("")

  useEffect(() => {
    BackendAxios.get('/api/admin/logins').then(res => {
      setRowData(res.data.data)
    }).catch(err => {
      console.log(err)
    })
    getOverview()
  }, [])

  function getOverview(tenure) {
    BackendAxios.get(`/api/admin/overview?tenure=${tenure || "today"}`).then(res => {
      setAepsData(res.data[0].aeps)
      setBbpsData(res.data[1].bbps)
      setDmtData(res.data[2].dmt)
      setPanData(res.data[3].pan)
      setPayoutData(res.data[4].payout)
      setLicData(res.data[5].lic)
      setFastagData(res.data[6].fastag)
      setCmsData(res.data[7].cms)
      setRechargeData(res.data[8].recharge)
      setFundRequestsData(res.data[9].funds)
      setUsersData(res.data[10].users)
    }).then(() => {
      BackendAxios.get(`/api/admin/role-count/retailer`).then(res => {
        setRetailers(res.data)
      }).then(()=>{
        BackendAxios.get(`/api/admin/role-count/distributor`).then(res => {
          setDistributors(res.data)
        }).then(()=>{
          BackendAxios.get(`/api/admin/role-count/super_distributor`).then(res => {
            setSuperDistributors(res.data)
          })
        })
      })
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <>
      <Layout pageTitle={"Dashboard"}>
        <Box p={4}>

          <HStack justifyContent={'space-between'} pt={8} pb={4}>
            <Text>Overview</Text>
            <Select
              name='earningStatsDuration'
              w={'xs'} bg={'white'}
              onChange={e => getOverview(e.target.value)}
            >
              <option value="today">Today</option>
              <option value="month">1 Month</option>
              <option value="year">1 Year</option>
            </Select>
          </HStack>
          <Stack direction={['row']}
            w={'full'} py={2} spacing={[0, 4]}
            justifyContent={'space-between'}
            flexWrap={'wrap'} alignItems={['flex-start']}
          >
            <DataCard
              title={'Logins'}
              data={usersData?.login}
              icon={<BiLogIn color='#FF7B54' size={'32'} />}
              color={'#FF7B54'}
            />
            <DataCard
              title={'Registrations'}
              data={usersData?.registration}
              icon={<FaUserPlus color='#6C00FF' size={'28'} />}
              color={'#6C00FF'}
            />
            <DataCard
              title={'Support Tickets'}
              data={usersData?.tickets}
              icon={<IoMdHelpBuoy color='#FFB100' size={'32'} />}
              color={'#FFB100'}
            />
          </Stack>
          <Stack direction={['row']}
            w={'full'} py={2} spacing={[0, 4]}
            justifyContent={'space-between'}
            flexWrap={'wrap'} alignItems={['flex-start']}
          >
            <DataCard
              title={'Retailers'}
              data={retailers}
              icon={<FaUserAlt color='#FF7B54' size={'32'} />}
              color={'#FF7B54'}
            />
            <DataCard
              title={'Distributors'}
              data={distributors}
              icon={<FaUserAlt color='#6C00FF' size={'28'} />}
              color={'#6C00FF'}
            />
            <DataCard
              title={'Super Distributors'}
              data={superDistributors}
              icon={<FaUserAlt color='#FFB100' size={'32'} />}
              color={'#FFB100'}
            />
          </Stack>
          <Stack direction={['row']}
            w={'full'} py={2} spacing={[0, 4]}
            justifyContent={'space-between'}
            flexWrap={'wrap'} alignItems={['flex-start']}
          >
            <DataCard
              title={'Market Balance'}
              data={0}
              icon={<BiRupee color='#FF7B54' size={'28'} />}
              color={'#FF7B54'}
            />
            <DataCard
              title={'Reserved Balance'}
              data={0}
              icon={<BiRupee color='#FFB100' size={'32'} />}
              color={'#FFB100'}
            />
          </Stack>
          <Stack
            direction={['column', 'row']}
            py={2} spacing={4}
          >

            <TransactionCard
              color={'#6C00FF'}
              title={"AePS"}
              quantity={aepsData?.count}
              amount={aepsData?.credit - aepsData?.debit}
            />

            <TransactionCard
              color={'#3C79F5'}
              title={"BBPS"}
              quantity={bbpsData?.count}
              amount={bbpsData?.debit - bbpsData?.credit}
            />

            <TransactionCard
              color={'#2DCDDF'}
              title={"DMT"}
              quantity={dmtData?.count}
              amount={dmtData?.debit - dmtData?.credit}
            />
          </Stack>

          <Stack
            direction={['column', 'row']}
            py={2} spacing={4}
          >
            <TransactionCard
              color={'#F2DEBA'}
              title={"PAN"}
              quantity={panData?.count}
              amount={panData?.debit - panData?.credit}
            />

            <TransactionCard
              color={'#FF8B13'}
              title={"LIC"}
              quantity={licData?.count}
              amount={licData?.debit - licData?.credit}
            />

            <TransactionCard
              color={'#13005A'}
              title={"CMS"}
              quantity={cmsData?.count}
              amount={cmsData?.debit - cmsData?.credit}
            />

          </Stack>

          <Stack
            direction={['column', 'row']}
            py={2} spacing={4}
          >

            <TransactionCard
              color={'#13005A'}
              title={"Fastag"}
              quantity={fastagData?.count}
              amount={fastagData?.debit - fastagData?.credit}
            />

            <TransactionCard
              color={'#26845A'}
              title={"Payout"}
              quantity={payoutData?.count}
              amount={payoutData?.debit - payoutData?.credit}
            />

            <Box
              p={4} rounded={12}
              // minW={['full', '72']}
              flex={1}
              boxShadow={'md'}
              bg={'white'}
            >
              <Text w={'fit-content'} px={2} bg={'#678983'} color={'white'} rounded={'full'}>Fund Requests</Text>
              <HStack pt={4} justifyContent={'space-between'}>
                <VStack w={'full'} alignItems={'flex-start'} pr={2} borderRight={'1px'} borderRightColor={'#999'}>
                  <Text fontSize={'xs'} color={'#666'}>Approved</Text>
                  <Text fontSize={'xl'} color={'#333'}>{fundRequestsData?.approved}</Text>
                </VStack>
                <VStack w={'full'} alignItems={'flex-start'} pl={2}>
                  <Text fontSize={'xs'} color={'#666'}>Declined</Text>
                  <Text fontSize={'xl'} color={'#333'}>{fundRequestsData?.not_approved}</Text>
                </VStack>
              </HStack>
            </Box>

          </Stack>

          <Stack direction={['column', 'row']} py={6}>
            <Box>
              <Text pb={2} fontWeight={'semibold'}>Recent Login Activity</Text>
              <Box
                className='ag-theme-alpine ag-theme-pesa24-blue'
                w={['full', 'lg']} h={'xs'}
                rounded={16} overflow={'hidden'}
                >
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