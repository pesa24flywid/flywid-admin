import React, { useEffect, useState } from 'react'
import {
    useFormik
} from 'formik'
import {
    Box,
    Stack,
    HStack,
    VStack,
    Input,
    Select,
    FormControl,
    FormLabel,
    Text,
    InputGroup,
    InputRightAddon,
    Button,
    useToast,
} from '@chakra-ui/react'
import BackendAxios, { FormAxios } from '@/lib/utils/axios'
import { useRouter } from 'next/router'
import Layout from '../../layout'

const Index = () => {
    const Router = useRouter()
    const { user_id } = Router.query
    const Toast = useToast({
        position: 'top-right'
    })
    const [fetchedUser, setFetchedUser] = useState({
        user_id: "",
        user_name: "",
        firm_name: "",
        wallet: "",
        phone: "",
        role: ""
    })
    const [availableParents, setAvailableParents] = useState([])
    const Formik = useFormik({
        initialValues: {
            userId: "",
            firstName: "",
            lastName: "",
            role: "",
            hasParent: "1",
            parent: "",
        },
        onSubmit: (values) => {
            let userForm = document.getElementById('editUserForm')
            FormAxios.postForm('/api/admin/change-role-parent', userForm).then((res) => {
                Toast({
                    status: 'success',
                    title: 'User Updated',
                })
                console.log(res.data)
            }).catch((err) => {
                Toast({
                    status: 'error',
                    description: err.response.data.message || err.response.data || err.message
                })
                console.log(err)
            })
        }
    })


    const verifyBeneficiary = (queryUserId) => {
        // Logic to verifiy beneficiary details
        BackendAxios.post(`/api/admin/user/info/${queryUserId || fetchedUser.user_id}`).then((res) => {
            setFetchedUser({
                ...fetchedUser,
                user_name: "",
                firm_name: "",
                wallet: "",
                phone: "",
                role: "",
                permissions: []
            })

            setFetchedUser({
                ...fetchedUser,
                user_name: res.data.data.first_name + " " + res.data.data.last_name,
                firm_name: res.data.data.firm_name,
                phone: res.data.data.phone_number,
                wallet: res.data.data.wallet,
                role: res.data.data.roles[0].name,
                permissions: res.data.data.permissions.map(permission => { return permission.name })
            })
            searchrole(fetchedUser.user_id)
        }).catch((err) => {
            Toast({
                status: 'error',
                description: err.message
            })
            setFetchedUser({
                ...fetchedUser,
                user_name: "",
                firm_name: "",
                wallet: "",
                phone: "",
                role: "",
                permissions: []
            })
        })

    }

    function searchrole(queryUserId) {
        BackendAxios.get(`/api/admin/change-role-parent?userId=${queryUserId || Formik.values.userId}`).then((res) => {
            Formik.setFieldValue("userId", res.data.id)
            Formik.setFieldValue("role", res.data.role[0])
        }).catch((err) => {
            Toast({
                status: 'error',
                description: err.response.data.message || err.response.data || err.message
            })
            console.log(err)
        })
    }

    useEffect(() => {
        if (Router.isReady && user_id) {
            Formik.setFieldValue("userId", user_id)
            setFetchedUser({ user_id: user_id })
            verifyBeneficiary(user_id)
        }
    }, [Router.isReady])


    useEffect(() => {
        // Fetching all users
        let parentRole
        if (Formik.values.role == "super_distributor") {
            return
        }
        if (Formik.values.role == "retailer") {
            parentRole = "distributor"
        }
        if (Formik.values.role == "distributor") {
            parentRole = "super_distributor"
        }
        BackendAxios.get(`/api/admin/all-users-list/${parentRole}`).then(res => {
            setAvailableParents(res.data)
        }).catch(err => {
            Toast({
                status: 'error',
                description: err.response.data.message || err.response.data || err.message
            })
        })
    }, [Formik.values.role])

    function removeParent() {
        BackendAxios.post(`/api/admin/remove-parent`, {
            user_id: fetchedUser.user_id
        }).then(res => {
            Toast({
                status: 'success',
                description: 'Parent removed successfully!'
            })
            verifyBeneficiary(fetchedUser.user_id)
        }).catch(err => {
            Toast({
                status: 'error',
                description: err.response.data.message || err.response.data || err.message
            })
        })
    }

    return (
        <>
            <form onSubmit={Formik.handleSubmit} id={'editUserForm'}>
                <Layout pageTitle={'Edit User'}>
                    {/* <input type="hidden" name={'userId'} value={Formik.values.userId} /> */}
                    <Stack
                        direction={['column', 'row']}
                        spacing={6} py={6}
                    >
                        <FormControl w={['full', 'xs']}>
                            <FormLabel>User ID</FormLabel>
                            <InputGroup>
                                <Input
                                    name={'userId'} value={fetchedUser.user_id}
                                    onChange={(e) => setFetchedUser({ ...fetchedUser, user_id: e.target.value })}
                                    placeholder={'Enter User ID'}
                                />
                                <InputRightAddon
                                    children={'Verify'}
                                    cursor={'pointer'}
                                    onClick={() => verifyBeneficiary()}
                                />
                            </InputGroup>
                        </FormControl>
                    </Stack>
                    {
                        fetchedUser.user_name ?
                            (<Stack
                                p={4} bg={'blue.50'}
                                border={'1px'}
                                borderColor={'blue.200'}
                                rounded={16} my={4}
                                direction={['column', 'row']}
                                spacing={6} justifyContent={'space-between'}
                                textTransform={'capitalize'}
                            >
                                <Box>
                                    <Text fontWeight={'medium'}>User Name</Text>
                                    <Text>{fetchedUser.user_name}</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight={'medium'}>Firm Name</Text>
                                    <Text>{fetchedUser.firm_name}</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight={'medium'}>Current Balance</Text>
                                    <Text>₹ {fetchedUser.wallet}</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight={'medium'}>Phone</Text>
                                    <Text>{fetchedUser.phone}</Text>
                                </Box>
                            </Stack>

                            ) : null
                    }

                    {fetchedUser.user_name ?
                        <>
                            <Stack
                                direction={['column', 'row']}
                                spacing={4}
                            >
                                <Box pb={4} w={['full', '3xl']} flex={['unset', 7]}>
                                    <Stack
                                        direction={['column', 'row']}
                                        spacing={4} py={4}
                                    >
                                        <FormControl w={['full', 'xs']}>
                                            <FormLabel>Select Role</FormLabel>
                                            <Select name='role' onChange={Formik.handleChange}>
                                                <option value="retailer">Retailer</option>
                                                <option value="distributor">Distributor</option>
                                                <option value="super_distributor">Super Distributor</option>
                                            </Select>
                                        </FormControl>

                                        {
                                            Formik.values.role == "retailer" || Formik.values.role == "distributor" ?
                                                <FormControl w={['full', 'xs']} bg={'white'}>
                                                    <FormLabel>Parent {Formik.values.role == "retailer" ? "Distributor" : "Super Distributor"}</FormLabel>
                                                    <Select
                                                        placeholder='Select Parent'
                                                        name={'parent'}
                                                        onChange={Formik.handleChange}
                                                    >
                                                        {
                                                            availableParents.map((item, key) => {
                                                                return <option value={item.id} key={key}>{item.name}</option>
                                                            })
                                                        }
                                                    </Select>
                                                </FormControl> : null
                                        }
                                    </Stack>
                                </Box>
                                <Button colorScheme='facebook' onClick={removeParent}>Remove Parent</Button>
                            </Stack>

                            <HStack
                                spacing={4}
                                p={4} bg={'aqua'}
                                justifyContent={'flex-end'}
                            >
                                <Button type={'submit'} colorScheme={'twitter'}>Update Details</Button>
                            </HStack>
                        </> : null
                    }
                </Layout>
            </form>
        </>
    )
}

export default Index