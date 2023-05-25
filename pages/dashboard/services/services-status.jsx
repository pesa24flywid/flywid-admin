import React, { useState, useEffect } from 'react'
import Layout from '../layout'
import {
  Box,
  Text,
  Switch,
  Table,
  TableContainer,
  Thead,
  Tbody,
  Tr, Th, Td,
  useToast
} from '@chakra-ui/react'
import { ClientAxios } from '@/lib/utils/axios'

const ServicesStatus = () => {
  const Toast = useToast({ position: 'top-right' })
  const [aepsStatus, setAepsStatus] = useState(false)
  const [bbpsStatus, setBbpsStatus] = useState(false)
  const [dmtStatus, setDmtStatus] = useState(false)
  const [rechargeStatus, setRechargeStatus] = useState(false)
  const [payoutStatus, setPayoutStatus] = useState(false)
  const [panStatus, setPanStatus] = useState(false)
  const [licStatus, setLicStatus] = useState(false)
  const [cmsStatus, setCmsStatus] = useState(false)
  const [fastagStatus, setFastagStatus] = useState(false)
  const [axisStatus, setAxisStatus] = useState(false)

  function fetchOrganisationServiceStatus() {
    ClientAxios.get("/api/organisation").then(res => {
      setAepsStatus(res.data.aeps_status)
      setBbpsStatus(res.data.bbps_status)
      setDmtStatus(res.data.dmt_status)
      setRechargeStatus(res.data.recharge_status)
      setPayoutStatus(res.data.payout_status)
      setPanStatus(res.data.pan_status)
      setLicStatus(res.data.lic_status)
      setCmsStatus(res.data.cms_status)
      setFastagStatus(res.data.fastag_status)
      setAxisStatus(res.data.axis_status)
    }).catch(err => {
      console.log(err.message)
    })
  }
  function updateOrganisation(data) {
    ClientAxios.post('/api/organisation', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      fetchOrganisationServiceStatus()
      Toast({
        position: 'top',
        status: 'success',
        title: 'Organisation Data updated'
      })
    }).catch(err => {
      Toast({
        status: 'error',
        title: 'Error while updating'
      })
    })
  }

  useEffect(()=>{
    fetchOrganisationServiceStatus()
  },[])

  return (
    <>
      <Layout pageTitle={'Services Status'}>
        <Text fontWeight={'bold'} fontSize={'lg'}>Manage Organisation Services Status</Text>
        <Box w={'full'} p={8}></Box>
        <Table>
          <TableContainer>
            <Thead>
              <Tr>
                <Th>Service Name</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>AePS Services</Td>
                <Td>
                  <Switch
                    id={'aepsStatus'} isChecked={aepsStatus}
                    onChange={(e) => updateOrganisation({ aeps_status: e.target.checked })} />
                </Td>
              </Tr>
              <Tr>
                <Td>BBPS Services</Td>
                <Td>
                  <Switch
                    id={'bbpsStatus'} isChecked={bbpsStatus}
                    onChange={(e) => updateOrganisation({ bbps_status: e.target.checked })} />
                </Td>
              </Tr>
              <Tr>
                <Td>DMT Services</Td>
                <Td>
                  <Switch
                    id={'dmtStatus'} isChecked={dmtStatus}
                    onChange={(e) => updateOrganisation({ dmt_status: e.target.checked })} />
                </Td>
              </Tr>
              <Tr>
                <Td>Recharge Services</Td>
                <Td>
                  <Switch
                    id={'rechargeStatus'} isChecked={rechargeStatus}
                    onChange={(e) => updateOrganisation({ recharge_status: e.target.checked })} />
                </Td>
              </Tr>
              <Tr>
                <Td>Payout Services</Td>
                <Td>
                  <Switch
                    id={'payoutStatus'} isChecked={payoutStatus}
                    onChange={(e) => updateOrganisation({ payout_status: e.target.checked })} />
                </Td>
              </Tr>
              <Tr>
                <Td>PAN Services</Td>
                <Td>
                  <Switch
                    id={'panStatus'} isChecked={panStatus}
                    onChange={(e) => updateOrganisation({ pan_status: e.target.checked })} />
                </Td>
              </Tr>
              <Tr>
                <Td>LIC Services</Td>
                <Td>
                  <Switch
                    id={'licStatus'} isChecked={licStatus}
                    onChange={(e) => updateOrganisation({ lic_status: e.target.checked })} />
                </Td>
              </Tr>
              <Tr>
                <Td>CMS Services</Td>
                <Td>
                  <Switch
                    id={'cmsStatus'} isChecked={cmsStatus}
                    onChange={(e) => updateOrganisation({ cms_status: e.target.checked })} />
                </Td>
              </Tr>
              <Tr>
                <Td>Axis Bank Services</Td>
                <Td>
                  <Switch
                    id={'axisStatus'} isChecked={axisStatus}
                    onChange={(e) => updateOrganisation({ axis_status: e.target.checked })} />
                </Td>
              </Tr>
              <Tr>
                <Td>Fastag Services</Td>
                <Td>
                  <Switch
                    id={'fastagStatus'} isChecked={fastagStatus}
                    onChange={(e) => updateOrganisation({ fastag_status: e.target.checked })} />
                </Td>
              </Tr>
            </Tbody>
          </TableContainer>
        </Table>
      </Layout>
    </>
  )
}

export default ServicesStatus