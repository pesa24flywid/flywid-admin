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
import { ClientAxios } from '@/lib/utils/axios'

const Preferences = () => {
    const [globalInfo, setGlobalInfo] = useState({})
    const [defaultRole, setDefaultRole] = useState("")
    const Toast = useToast({
        position: 'top-right'
    })
    useEffect(() => {
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
    }, [])

    function updateGlobalPreference(dataToUpdate) {
        ClientAxios.post('/api/global', dataToUpdate, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res.data)
            Toast({
                status: 'success',
                title: "Global Preferences Updated",
                description: "Changes have been saved"
            })
        }).catch((err) => {
            Toast({
                status: 'error',
                title: 'Error while fetching global info',
                description: err.message
            })
        })
    }

    function changeDefaultRole(roleName) {
        setDefaultRole(roleName)
        updateGlobalPreference({ default_role: roleName })
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
                                            isChecked={globalInfo.retailer === 1 ? true : false}
                                        >
                                        </Switch></Td>
                                    <Td>
                                        <Switch
                                            isChecked={defaultRole === "retailer"}
                                            onChange={() => changeDefaultRole("retailer")}
                                        ></Switch>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>Distributor</Td>
                                    <Td>
                                        <Switch
                                            isChecked={globalInfo.distributor === 1 ? true : false}
                                        ></Switch>
                                    </Td>
                                    <Td>
                                        <Switch
                                            isChecked={defaultRole === "distributor"}
                                            onChange={() => changeDefaultRole("distributor")}
                                        ></Switch>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>Super Distributor</Td>
                                    <Td>
                                        <Switch
                                            isChecked={globalInfo.super_distributor === 1 ? true : false}
                                        ></Switch>
                                    </Td>
                                    <Td>
                                        <Switch
                                            isChecked={defaultRole === "super_distributor"}
                                            onChange={() => changeDefaultRole("super_distributor")}
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
                            <Button border={'1px solid #888'} w={36}
                                colorScheme={
                                    globalInfo.aeps_provider == "eko" ?
                                        "twitter" : "gray"
                                }>Eko</Button>
                            <Button border={'1px solid #888'} w={36}
                                colorScheme={globalInfo.aeps_provider == "paysprint" ?
                                    "twitter" : "gray"
                                }
                            >Paysprint</Button>
                        </HStack>
                    </Box>
                    <Box>
                        <Text>Preferred BBPS Provider</Text>
                        <HStack p={2} rounded={8}>
                            <Button border={'1px solid #888'} w={36}
                                colorScheme={
                                    globalInfo.bbps_provider == "eko" ?
                                        "twitter" : "gray"
                                }>Eko</Button>
                            <Button border={'1px solid #888'} w={36}
                                colorScheme={globalInfo.bbps_provider == "paysprint" ?
                                    "twitter" : "gray"
                                }
                            >Paysprint</Button>
                        </HStack>
                    </Box>
                    <Box>
                        <Text>Preferred DMT Provider</Text>
                        <HStack p={2} rounded={8}>
                            <Button border={'1px solid #888'} w={36}
                                colorScheme={
                                    globalInfo.dmt_provider == "eko" ?
                                        "twitter" : "gray"
                                }>Eko</Button>
                            <Button border={'1px solid #888'} w={36}
                                colorScheme={globalInfo.dmt_provider == "paysprint" ?
                                    "twitter" : "gray"
                                }
                            >Paysprint</Button>
                        </HStack>
                    </Box>
                </Stack>
                <Box
                    my={6}
                >
                    <Text>Manage Global Notifications</Text>
                    {
                        globalInfo.notifications != null ?
                            globalInfo.notifications.map((notification, key) => {
                                return (
                                    <Box
                                        p={4} bg={'white'}
                                        rounded={12}
                                        boxShadow={'lg'}
                                        my={4} key={key}
                                    >
                                        <Text fontSize={'lg'} fontWeight={'semibold'}>
                                            {notification.title}
                                        </Text>
                                        <Text>{notification.content}</Text>
                                    </Box>
                                )
                            }) : (
                                <Box
                                    p={4} bg={'white'}
                                    rounded={12}
                                    boxShadow={'lg'}
                                    my={4}
                                >
                                    <Text fontSize={'lg'} fontWeight={'semibold'}>
                                        No notifications to show.
                                    </Text>
                                    <Text>Try adding one</Text>
                                </Box>
                            )
                    }
                </Box>
            </Layout>
        </>
    )
}

export default Preferences