import React, { useState, useEffect } from 'react'
import Layout from '../../layout'
import {
  Box,
  useToast,
  Stack,
  Text,
  VStack,
  HStack,
  Button,
  InputGroup,
  InputRightAddon,
  Input,
  FormControl,
  FormLabel,
  Flex,
  CheckboxGroup,
  Checkbox,
} from '@chakra-ui/react'
import BackendAxios from '@/lib/utils/axios'
import { useFormik } from 'formik'
import { BiCheck } from 'react-icons/bi'

const CreateAdmin = () => {
  const Toast = useToast({
    position: 'top-right'
  })
  const [allAdmins, setAllAdmins] = useState([])
  const [permissions, setPermissions] = useState(null)
  const [fetchedUser, setFetchedUser] = useState({
    user_id: "",
    user_name: "",
    firm_name: "",
    wallet: "",
    phone: "",
    role: "",
    permissions: []
  })
  const [predefinedPermissions, setPredefinedPermissions] = useState([
    {
      id: 'create-user',
      value: 'create-user',
    },
    {
      id: 'view-user',
      value: 'view-user',
    },
    {
      id: 'update-user',
      value: 'update-user',
    },
    {
      id: 'manage-admin',
      value: 'manage-admin',
    },
    {
      id: 'edit-fund-request',
      value: 'edit-fund-request',
    },
    {
      id: 'view-fund-request',
      value: 'view-fund-request',
    },
    {
      id: 'create-fund-transfer',
      value: 'create-fund-transfer',
    },
    {
      id: 'view-fund-transfer',
      value: 'view-fund-transfer',
    },
    {
      id: 'edit-fund-transfer',
      value: 'edit-fund-transfer',
    },
    {
      id: 'delete-fund-request',
      value: 'delete-fund-request',
    },
    {
      id: 'view-payout-report',
      value: 'view-payout-report',
    },
    {
      id: 'view-transaction-ledger',
      value: 'view-transaction-ledger',
    },
    {
      id: 'view-daily-sales',
      value: 'view-daily-sales',
    },
    {
      id: 'view-user-ledger',
      value: 'view-user-ledger',
    },
    {
      id: 'view-login-report',
      value: 'view-login-report',
    },
    {
      id: 'view-support-tickets',
      value: 'view-support-tickets',
    },
    {
      id: 'edit-support-tickets',
      value: 'edit-support-tickets',
    },
  ])


  const verifyBeneficiary = (userId) => {
    // Logic to verifiy beneficiary details
    BackendAxios.post(`/api/admin/user/info/${userId || fetchedUser.user_id}`).then((res) => {
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

  useEffect(() => {
    BackendAxios.get('/api/admin/all-permissions').then(res => {
      setPredefinedPermissions()
      setPredefinedPermissions(res.data.map((permission) => {
        return {
          id: permission.id,
          value: permission.name
        }
      }))
    }).catch(err => {
      console.log(err)
      Toast({
        description: err.response.data.message || err.response.data || err.message
      })
    })
  }, [])

  function saveUserPermissions() {
    BackendAxios.post('/api/admin/assign-permission', {
      userId: fetchedUser.user_id,
      permission: permissions
    }).then(res => {
      Toast({
        status: 'success',
        description: 'User details updated successfully!'
      })
    }).catch(err => {
      Toast({
        description: err.response.data.message || err.response.data || err.message
      })
    })
  }

  function changeRole(role, userId) {
    BackendAxios.post('/api/admin/new-admin', {
      userId: userId || fetchedUser.user_id,
      role: role,
    }).then(res => {
      getAllAdmins()
      Toast({
        status: 'success',
        description: `User is now ${role}!`
      })
    }).catch(err => {
      Toast({
        description: err.response.data.message || err.response.data || err.message
      })
    })
  }

  function getAllAdmins() {
    BackendAxios.get(`/api/admin/users-list/admin?page=1`).then(res => {
      setAllAdmins(res.data.data)
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    getAllAdmins()
  }, [])



  return (
    <>
      <Layout pageTitle={'Create Admin'}>
        <Stack
          direction={['column', 'row']}
          gap={8} justifyContent={'space-between'}
        >
          <Box p={4} 
            flex={['unset', 2]}
            >
            <Text fontSize={'lg'} fontWeight={'semibold'} my={4}>Manage Admin Members</Text>
            <Stack
              direction={['column', 'row']}
              spacing={6} py={6}
            >
              <FormControl w={['full', 'xs']}>
                <FormLabel>User ID</FormLabel>
                <InputGroup>
                  <Input
                    name={'userId'}
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
                  border={'1px'} w={'max-content'}
                  borderColor={'blue.200'}
                  rounded={16} my={4}
                  direction={['column', 'row']}
                  spacing={16} justifyContent={'space-between'}
                  textTransform={'capitalize'}
                >
                  <Box>
                    <Text fontWeight={'medium'}>Beneficiary Name</Text>
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

            {
              fetchedUser.role == "admin" ? (
                <Box my={4}>
                  <Button colorScheme={'whatsapp'} mb={6} onClick={() => changeRole('retailer')}>Make Retailer</Button>

                  <Text pb={4} pt={8} fontSize={'lg'}>Manage Permissions</Text>
                  <Flex direction={'row'} gap={10} flexWrap={'wrap'}>
                    <CheckboxGroup onChange={values => setPermissions(values)} defaultValue={fetchedUser.permissions}>
                      {
                        predefinedPermissions.map((permission, key) => {
                          return (
                            <Checkbox
                              value={permission.value}
                              textTransform={'capitalize'}
                              key={key} px={4} bg={'aqua'}
                              py={3} rounded={8}
                            >
                              {permission.value.replace(/-/g, " ")}
                            </Checkbox>
                          )
                        })
                      }
                    </CheckboxGroup>
                    <Button colorScheme={'twitter'} leftIcon={<BiCheck fontSize={20} />} onClick={saveUserPermissions}>Save Permissions</Button>
                  </Flex>
                </Box>

              ) : fetchedUser.role == "retailer" ? <Button colorScheme={'twitter'} onClick={() => changeRole('admin')}>Make Admin</Button> : null
            }
          </Box>

          <VStack
            w={['full', 'xs']}
            padding={4}
            flex={['unset', 1]}
            alignItems={'flex-start'}
            justifyContent={'flex-start'}
            boxShadow={'lg'}
            h={['auto', '90vh']}
            overflowY={'scroll'}
          >
            <Text fontSize={'lg'} fontWeight={'semibold'} my={4}>Existing Admin Employees</Text>

            <VStack
              gap={8} pt={8}
              alignItems={'flex-start'}
              justifyContent={'flex-start'}
            >
              {allAdmins.map((admin, key) => (
                <Box
                  p={4} rounded={8}
                  boxShadow={'md'}
                  key={key}
                >
                  <Text fontSize={'md'} fontWeight={'semibold'}>{admin.name} ({admin.id})</Text>
                  <Text fontSize={'md'}>{admin.phone_number}</Text>
                  <Text fontSize={'xs'}>{admin.email}</Text>
                  <HStack
                    w={'full'} pt={4}
                    justifyContent={'space-between'}
                  >
                    <Button
                      size={'sm'}
                      onClick={() => {
                        setFetchedUser({ user_id: admin.id })
                        verifyBeneficiary(admin.id)
                      }}
                    >Permissions</Button>
                    <Button
                      colorScheme='red'
                      size={'sm'}
                      onClick={() => {
                        setFetchedUser({ user_id: admin.id })
                        changeRole('retailer', admin.id)
                      }}
                    >Make Retailer</Button>
                  </HStack>
                </Box>
              ))
              }

            </VStack>
          </VStack>
        </Stack>
      </Layout>
    </>
  )
}

export default CreateAdmin