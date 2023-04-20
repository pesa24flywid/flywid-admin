import React, { useEffect, useState } from 'react'
import Layout from '../layout'
import {
    Text,
    Box,
    Switch,
    Button,
    HStack,
    TableContainer,
    Table,
    Thead,
    Tr, Td,
    Tbody,
    Stack,
    useToast
} from '@chakra-ui/react'
import BackendAxios, { ClientAxios } from '@/lib/utils/axios'

const Preferences = () => {
    const [globalInfo, setGlobalInfo] = useState({})
    const [defaultRole, setDefaultRole] = useState("")
    const [services, setServices] = useState([])
    const Toast = useToast({
        position: 'top-right'
    })

    function fetchGlobalInfo() {
        ClientAxios.get('/api/global').then((res) => {
            setGlobalInfo(res.data)
            setDefaultRole(res.data.default_role)
            console.log(globalInfo)
        }).catch((err) => {
            Toast({
                status: 'error',
                title: 'Error while fetching global info',
                description: err.message
            })
        })
    }

    useEffect(() => {
        fetchGlobalInfo()
    }, [])


    function updateGlobalInfo(data) {
        ClientAxios.post("/api/global", data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            fetchGlobalInfo()
            Toast({
                status: 'success',
                title: 'Data Updated'
            })
        }).catch(err => {
            console.log(err.message)
            Toast({
                status: 'success',
                title: 'Error while updating'
            })
        })
    }


    return (
        <>
            <Layout pageTitle={"Preferences"}>
                <Text fontSize={'lg'} fontWeight={'semibold'}>
                    Manage Preferences For Your Portal
                </Text>
                <Box mt={12} mb={6}>
                    <Text pb={4}>Registration Roles</Text>
                    <TableContainer w={'md'}>
                        <Table variant={'striped'}>
                            <Thead>
                                <Tr>
                                    <Td>Role</Td>
                                    <Td>Allow Signup</Td>
                                    <Td>Default</Td>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>Retailer</Td>
                                    <Td>
                                        <Switch id='retailerEnabled'
                                            isChecked={globalInfo.retailer}
                                            onChange={(e) => updateGlobalInfo({ retailer: e.target.checked })}
                                        >
                                        </Switch></Td>
                                    <Td>
                                        <Switch
                                            isChecked={defaultRole === "retailer"}
                                            onChange={(e) => updateGlobalInfo({ default_role: 'retailer' })}
                                        ></Switch>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>Distributor</Td>
                                    <Td>
                                        <Switch
                                            isChecked={globalInfo.distributor}
                                            onChange={(e) => updateGlobalInfo({ distributor: e.target.checked })}
                                        ></Switch>
                                    </Td>
                                    <Td>
                                        <Switch
                                            isChecked={defaultRole === "distributor"}
                                            onChange={(e) => updateGlobalInfo({ default_role: 'distributor' })}
                                        ></Switch>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>Super Distributor</Td>
                                    <Td>
                                        <Switch
                                            isChecked={globalInfo.super_distributor}
                                            onChange={(e) => updateGlobalInfo({ super_distributor: e.target.checked })}
                                        ></Switch>
                                    </Td>
                                    <Td>
                                        <Switch
                                            isChecked={defaultRole === "super_distributor"}
                                            onChange={(e) => updateGlobalInfo({ default_role: 'super_distributor' })}
                                        ></Switch>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
                <Stack
                    direction={['column', 'row']}
                    justifyContent={'space-between'}
                    py={6} gap={10}
                >
                    <Box>
                        <Text>Preferred AePS Provider</Text>
                        <HStack p={2} rounded={8}>
                            <Button
                                border={'1px solid #888'} w={36}
                                colorScheme={
                                    globalInfo.aeps_provider == "eko" ?
                                        "twitter" : "gray"
                                }
                                onClick={() => updateGlobalInfo({ aeps_provider: "eko" })}
                            >Eko</Button>
                            <Button
                                border={'1px solid #888'} w={36}
                                colorScheme={globalInfo.aeps_provider == "paysprint" ?
                                    "twitter" : "gray"
                                }
                                onClick={() => updateGlobalInfo({ aeps_provider: "paysprint" })}
                            >Paysprint</Button>
                        </HStack>
                    </Box>
                    <Box>
                        <Text>Preferred BBPS Provider</Text>
                        <HStack p={2} rounded={8}>
                            <Button
                                border={'1px solid #888'} w={36}
                                colorScheme={
                                    globalInfo.bbps_provider == "eko" ?
                                        "twitter" : "gray"
                                }
                                onClick={() => updateGlobalInfo({ bbps_provider: "eko" })}
                            >Eko</Button>
                            <Button
                                border={'1px solid #888'} w={36}
                                colorScheme={globalInfo.bbps_provider == "paysprint" ?
                                    "twitter" : "gray"
                                }
                                onClick={() => updateGlobalInfo({ bbps_provider: "paysprint" })}
                            >Paysprint</Button>
                        </HStack>
                    </Box>
                    <Box>
                        <Text>Preferred DMT Provider</Text>
                        <HStack p={2} rounded={8}>
                            <Button
                                border={'1px solid #888'} w={36}
                                colorScheme={
                                    globalInfo.dmt_provider == "eko" ?
                                        "twitter" : "gray"
                                }
                                onClick={() => updateGlobalInfo({ dmt_provider: "eko" })}
                            >Eko</Button>
                            <Button
                                border={'1px solid #888'} w={36}
                                colorScheme={globalInfo.dmt_provider == "paysprint" ?
                                    "twitter" : "gray"
                                }
                                onClick={() => updateGlobalInfo({ dmt_provider: "paysprint" })}
                            >Paysprint</Button>
                        </HStack>
                    </Box>
                </Stack>
            </Layout>
        </>
    )
}

export default Preferences