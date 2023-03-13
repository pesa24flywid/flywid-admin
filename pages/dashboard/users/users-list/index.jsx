import React, { useState, useEffect, useRef } from 'react'
import {
    Box,
    Text,
    HStack,
    VStack,
    Stack,
    Button,
    Input,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Switch,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Checkbox,
    CheckboxGroup,
    VisuallyHidden,
    useToast,
} from '@chakra-ui/react'
import { SiMicrosoftexcel } from 'react-icons/si'
import { FaFileCsv, FaFilePdf, FaPrint } from 'react-icons/fa'
import { BsChevronDown } from 'react-icons/bs'
import Layout from '../../layout';
import jsPDF from 'jspdf';
import "jspdf-autotable"
import axios from '@/lib/utils/axios'
import CheckboxTree from 'react-checkbox-tree'
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import Script from 'next/script'

const ExportPDF = (currentRowData) => {
    const doc = new jsPDF('landscape')
    const columnDefs = [
        '#',
        'Basic Details',
        'KYC Details',
        'Balance Details',
        'Complete Address',
        'Parent Details',
        'Actions',
    ]

    doc.autoTable({ html: '#exportableTable' })
    doc.setCharSpace(4)
    //This is a key for printing
    doc.output('dataurlnewwindow');
}


const Index = () => {
    const Toast = useToast({
        position: 'top-right'
    })
    const { isOpen, onClose, onOpen } = useDisclosure()
    const [permissionsDrawer, setPermissionsDrawer] = useState(false)

    const [aepsPermissions, setAepsPermissions] = useState([])
    const [aepsExpansion, setAepsExpansion] = useState([])
    const aepsList = [{
        value: "allaeps",
        label: "All AePS Services",
        children: [
            { value: 'aepsbasic', label: 'Basic Transactions' },
            { value: 'aepspayout', label: 'AePS Payouts' },
            { value: 'aepsreport', label: 'AePS Reports' },
        ]
    }]

    const [bbpsPermissions, setBbpsPermissions] = useState([])
    const [bbpsExpansion, setBbpsExpansion] = useState([])
    const bbpsList = [{
        value: "allbbps",
        label: "All BBPS Services",
        children: [
            { value: 'bbpstransactions', label: 'BBPS Transactions' },
            { value: 'bbpsreport', label: 'BBPS Reports' },
        ]
    }]

    const [rechargePermissions, setRechargePermissions] = useState([])
    const [rechargeExpansion, setRechargeExpansion] = useState([])
    const rechargeList = [{
        value: "allrecharge",
        label: "All Recharge Services",
        children: [
            { value: 'rechargetransactions', label: 'Recharge Transactions' },
            { value: 'rechargereport', label: 'Recharge Reports' },
        ]
    }]

    const [dmtPermissions, setDmtPermissions] = useState([])
    const [dmtExpansion, setDmtExpansion] = useState([])
    const dmtList = [{
        value: "alldmt",
        label: "All DMT Services",
        children: [
            { value: 'dmttransactions', label: 'DMT Transactions' },
            { value: 'dmtreport', label: 'DMT Reports' },
        ]
    }]

    const availableTabs = ['super distributors', 'distributors', 'retailers']
    const [selectedTab, setSelectedTab] = useState("super_distributor")
    const [fetchedUsers, setFetchedUsers] = useState([])

    const [selectedUser, setSelectedUser] = useState("")

    // Fetching users
    function fetchUsersList() {
        setFetchedUsers([])
        axios.get(`/api/admin/users-list/${selectedTab}`).then((res) => {
            console.log(res.data)
            setFetchedUsers(res.data)
        }).catch((err) => {
            console.log(err)
            Toast({
                status: 'error',
                description: err.message
            })
        })
    }

    useEffect(() => {
        fetchUsersList()
    }, [selectedTab])


    function changeUserStatus(userId, updateTo) {
        axios.get(`/api/admin/user/status/${userId}/${updateTo}`).then(() => {
            fetchUsersList
        }).catch((err) => {
            console.log(err)
            Toast({
                status: 'error',
                description: err.message
            })
        })
    }

    function openPermissionsDrawer(userId) {
        setSelectedUser(userId)
        setPermissionsDrawer(true)
    }

    return (
        <>
            <Script
                src='https://kit.fontawesome.com/2aa643340e.js'
                crossOrigin='anonymous'
            />
            <Layout pageTitle={'Users List'}>
                <Tabs
                    variant='soft-rounded'
                    colorScheme='green'
                    isFitted
                >
                    <TabList>
                        <Tab
                            fontSize={['xs', 'lg']}
                            _selected={{ bg: 'twitter.500', color: 'white' }}
                            onClick={() => setSelectedTab("super_distributor")}
                        >
                            Super Distributor
                        </Tab>
                        <Tab
                            fontSize={['xs', 'lg']}
                            _selected={{ bg: 'twitter.500', color: 'white' }}
                            onClick={() => setSelectedTab("distributor")}
                        >
                            Distributor
                        </Tab>
                        <Tab
                            fontSize={['xs', 'lg']}
                            _selected={{ bg: 'twitter.500', color: 'white' }}
                            onClick={() => setSelectedTab("retailer")}
                        >
                            Retailer
                        </Tab>
                    </TabList>
                    <TabPanels pt={8}>
                        {
                            availableTabs.map((tab, key) => {
                                return (
                                    <TabPanel key={key}>

                                        <Stack
                                            direction={['column', 'row']}
                                            justifyContent={'space-between'}
                                            alignItems={'center'}
                                        >
                                            <HStack spacing={4}>
                                                <Button
                                                    size={['xs', 'sm']}
                                                    colorScheme={'twitter'}
                                                    leftIcon={<FaFileCsv />}
                                                >
                                                    CSV
                                                </Button>
                                                <Button
                                                    size={['xs', 'sm']}
                                                    colorScheme={'whatsapp'}
                                                    leftIcon={<SiMicrosoftexcel />}
                                                >
                                                    Excel
                                                </Button>
                                                <Button
                                                    size={['xs', 'sm']}
                                                    colorScheme={'red'}
                                                    leftIcon={<FaFilePdf />}
                                                    onClick={() => ExportPDF()}
                                                >
                                                    PDF
                                                </Button>
                                                <Button
                                                    size={['xs', 'sm']}
                                                    colorScheme={'facebook'}
                                                    leftIcon={<FaPrint />}
                                                    onClick={() => ExportPDF()}
                                                >
                                                    Print
                                                </Button>
                                            </HStack>
                                            <Input
                                                bg={'white'}
                                                w={['full', 'xs']}
                                                placeholder={'Search Here'}
                                            />
                                        </Stack>

                                        {/* Table */}
                                        <TableContainer my={6}>
                                            <Table variant='striped' colorScheme='teal'>
                                                <Thead>
                                                    <Tr>
                                                        <Th>Basic Details</Th>
                                                        <Th>KYC Details</Th>
                                                        <Th>Balance Details</Th>
                                                        <Th>Complete Address</Th>
                                                        <Th>Parent Details</Th>
                                                        <Th>Actions</Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody fontSize={'xs'}>
                                                    {
                                                        fetchedUsers && fetchedUsers.map((user, key) => {
                                                            return (
                                                                <Tr>
                                                                    <Td>
                                                                        <Box>
                                                                            <Text textTransform={'capitalize'}>{user.packages[0].name} Plan</Text><br />
                                                                            <Text>{user.first_name} {user.last_name} </Text>
                                                                            <Text>{user.email}</Text>
                                                                            <Text>
                                                                                <a href={`tel:${user.phone_number}`}>{user.phone_number}</a>,
                                                                                <a href={`tel:${user.alternate_phone}`}>{user.alternate_phone}</a>
                                                                            </Text>
                                                                            <Text>{user.gender} &nbsp;&nbsp;{user.dob}</Text><br />
                                                                            <Text>{user.company_name} {user.firm_type}</Text>
                                                                        </Box>
                                                                    </Td>
                                                                    <Td>
                                                                        <Box>
                                                                            <Text><b>Status: </b>&nbsp;&nbsp; Verified </Text>
                                                                            <Text><b>Aadhaar No.: </b>&nbsp;&nbsp; {user.aadhaar} </Text>
                                                                            <Text><b>PAN: </b>&nbsp;&nbsp; {user.pan_number} </Text>
                                                                            <Text><b>GST No.: </b>&nbsp;&nbsp; {user.gst_number} </Text><br />
                                                                            <Text><b>Organisation Code.: </b>&nbsp;&nbsp; {user.organisation_code} </Text>
                                                                        </Box>
                                                                    </Td>
                                                                    <Td>
                                                                        <Box>
                                                                            <Text><b>Current Balance: </b>&nbsp;&nbsp; ₹ {user.wallet} </Text>
                                                                            <Text><b>Capping Balance: </b>&nbsp;&nbsp; ₹ {user.minimum_balance} </Text><br />
                                                                            <Text><b>Distributors' Balance: </b>&nbsp;&nbsp;₹ 495500</Text>
                                                                            <Text><b>Retailers' Balance: </b>&nbsp;&nbsp;₹ 495500</Text>
                                                                        </Box>
                                                                    </Td>
                                                                    <Td>
                                                                        <Box>
                                                                            <Text>{user.line},</Text>
                                                                            <Text>{user.city}, {user.state},</Text>
                                                                            <Text>Pincode - {user.pincode}</Text>
                                                                        </Box>
                                                                    </Td>
                                                                    <Td>
                                                                        <Box>
                                                                            <Text>(567) - Admin One</Text>
                                                                            <Text>+91 7838074742</Text>
                                                                        </Box>
                                                                    </Td>
                                                                    <Td>
                                                                        <VStack gap={4}>
                                                                            <Switch
                                                                                size={'sm'}
                                                                                onChange={() => changeUserStatus(user.id, user.is_active == 1 ? 0 : 1)}
                                                                                defaultChecked={user.is_active == 1 ? true : false}
                                                                            >Active</Switch>
                                                                            <Popover>
                                                                                <PopoverTrigger>
                                                                                    <Button
                                                                                        rightIcon={<BsChevronDown />}
                                                                                        size={'sm'} colorScheme={'twitter'}
                                                                                    >
                                                                                        Actions
                                                                                    </Button>
                                                                                </PopoverTrigger>
                                                                                <PopoverContent>
                                                                                    <PopoverBody>
                                                                                        <Box>
                                                                                            <VStack alignItems={'flex-start'} spacing={0}>
                                                                                                <Text w={'full'} pb={1} borderBottom={'1px solid #999'}>Actions</Text>
                                                                                                <Text p={2} w={'full'} fontSize={'sm'} cursor={'pointer'} _hover={{ bg: 'blue.50' }}>Fund Transfer/Reversal</Text>
                                                                                                <Text p={2} w={'full'} fontSize={'sm'} cursor={'pointer'} _hover={{ bg: 'blue.50' }}>Scheme</Text>
                                                                                            </VStack>
                                                                                            <Box h={8} w={'full'}></Box>
                                                                                            <VStack alignItems={'flex-start'} spacing={0}>
                                                                                                <Text w={'full'} pb={1} borderBottom={'1px solid #999'}>Settings</Text>
                                                                                                <Text
                                                                                                    p={2} w={'full'} fontSize={'sm'}
                                                                                                    cursor={'pointer'} _hover={{ bg: 'blue.50' }}
                                                                                                    onClick={() => {
                                                                                                        setSelectedUser(user.id)
                                                                                                        setPermissionsDrawer(true)
                                                                                                    }}
                                                                                                >
                                                                                                    Permissions
                                                                                                </Text>
                                                                                                <Text p={2} w={'full'} fontSize={'sm'} cursor={'pointer'} _hover={{ bg: 'blue.50' }}>View Profile</Text>
                                                                                                <Text p={2} w={'full'} fontSize={'sm'} cursor={'pointer'} _hover={{ bg: 'blue.50' }}>KYC Management</Text>
                                                                                            </VStack>
                                                                                        </Box>
                                                                                    </PopoverBody>
                                                                                </PopoverContent>
                                                                            </Popover>

                                                                            <Popover>
                                                                                <PopoverTrigger>
                                                                                    <Button
                                                                                        rightIcon={<BsChevronDown />}
                                                                                        size={'sm'} colorScheme={'whatsapp'}
                                                                                    >
                                                                                        Reports
                                                                                    </Button>
                                                                                </PopoverTrigger>
                                                                                <PopoverContent>
                                                                                    <PopoverBody>
                                                                                        <Box>
                                                                                            <VStack alignItems={'flex-start'} spacing={0}>
                                                                                                <Text p={2} w={'full'} fontSize={'sm'} cursor={'pointer'} _hover={{ bg: 'blue.50' }}>AePS Report</Text>
                                                                                                <Text p={2} w={'full'} fontSize={'sm'} cursor={'pointer'} _hover={{ bg: 'blue.50' }}>BbPS Report</Text>
                                                                                                <Text p={2} w={'full'} fontSize={'sm'} cursor={'pointer'} _hover={{ bg: 'blue.50' }}>DMT Report</Text>
                                                                                                <Text p={2} w={'full'} fontSize={'sm'} cursor={'pointer'} _hover={{ bg: 'blue.50' }}>Recharge Report</Text>
                                                                                                <Text p={2} w={'full'} fontSize={'sm'} cursor={'pointer'} _hover={{ bg: 'blue.50' }}>User Ledger</Text>
                                                                                            </VStack>
                                                                                        </Box>
                                                                                    </PopoverBody>
                                                                                </PopoverContent>
                                                                            </Popover>
                                                                        </VStack>
                                                                    </Td>
                                                                </Tr>
                                                            )
                                                        })
                                                    }
                                                </Tbody>
                                            </Table>
                                        </TableContainer>

                                        {/* Printable Table */}
                                        <VisuallyHidden>
                                            <Table variant='striped' colorScheme='teal' id='exportableTable'>
                                                <Thead>
                                                    <Tr>
                                                        <Th>Basic Details</Th>
                                                        <Th>KYC Details</Th>
                                                        <Th>Balance Details</Th>
                                                        <Th>Complete Address</Th>
                                                        <Th>Parent Details</Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody fontSize={'xs'}>
                                                    {
                                                        fetchedUsers && fetchedUsers.map((user, key) => {
                                                            return (
                                                                <Tr>
                                                                    <Td>
                                                                        <Box>
                                                                            <Text textTransform={'capitalize'}>{user.packages[0].name} Plan</Text><br /><br />
                                                                            <Text>{user.first_name} {user.last_name} </Text><br />
                                                                            <Text>{user.email}</Text><br />
                                                                            <Text><br />
                                                                                <a href={`tel:${user.phone_number}`}>{user.phone_number}</a>,
                                                                                <a href={`tel:${user.alternate_phone}`}>{user.alternate_phone}</a>
                                                                            </Text>
                                                                            <Text>{user.gender} &nbsp;&nbsp;{user.dob}</Text><br /><br />
                                                                            <Text>{user.company_name} {user.firm_type}</Text><br />
                                                                        </Box>
                                                                    </Td>
                                                                    <Td>
                                                                        <Box>
                                                                            <Text><b>Status: </b>&nbsp;&nbsp; Verified </Text><br />
                                                                            <Text><b>Aadhaar No.: </b>&nbsp;&nbsp; {user.aadhaar} </Text><br />
                                                                            <Text><b>PAN: </b>&nbsp;&nbsp; {user.pan_number} </Text><br />
                                                                            <Text><b>GST No.: </b>&nbsp;&nbsp; {user.gst_number} </Text><br /><br />
                                                                            <Text><b>Organisation Code.: </b>&nbsp;&nbsp; {user.organisation_code} </Text><br />
                                                                        </Box>
                                                                    </Td>
                                                                    <Td>
                                                                        <Box>
                                                                            <Text><b>Current Balance: </b>&nbsp;&nbsp; Rs. {user.wallet} </Text><br />
                                                                            <Text><b>Capping Balance: </b>&nbsp;&nbsp; Rs. {user.minimum_balance} </Text><br /><br />
                                                                            <Text><b>Distributors' Balance: </b>&nbsp;&nbsp;Rs. 495500</Text><br />
                                                                            <Text><b>Retailers' Balance: </b>&nbsp;&nbsp;Rs. 495500</Text><br />
                                                                        </Box>
                                                                    </Td>
                                                                    <Td>
                                                                        <Box>
                                                                            <Text>{user.line},</Text><br />
                                                                            <Text>{user.city}, {user.state},</Text><br />
                                                                            <Text>Pincode - {user.pincode}</Text><br />
                                                                        </Box>
                                                                    </Td>
                                                                    <Td>
                                                                        <Box>
                                                                            <Text>(567) - Admin One</Text><br />
                                                                            <Text>+91 7838074742</Text><br />
                                                                        </Box>
                                                                    </Td>
                                                                </Tr>
                                                            )
                                                        })
                                                    }
                                                </Tbody>
                                            </Table>
                                        </VisuallyHidden>

                                    </TabPanel>
                                )
                            })
                        }

                    </TabPanels>
                </Tabs>


                {/* Permissions Drawer */}
                <Drawer
                    isOpen={permissionsDrawer}
                    placement='right'
                    onClose={() => setPermissionsDrawer(false)}
                    size={'lg'}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Manage Permissions For User</DrawerHeader>

                        <DrawerBody>
                            <form id='userPermission'>
                                <input type="hidden" name='userId' value={selectedUser} />
                                {/* <TableContainer>
                                    <Table variant={'simple'}>
                                        <Thead>
                                            <Tr>
                                                <Th>Section Name</Th>
                                                <Th>Permissions</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            <Tr>
                                                <Td borderRight={'1px solid #999'}>
                                                    <Checkbox
                                                        isChecked={allAepsChecked}
                                                        isIndeterminate={isAepsIndeterminate}
                                                        onChange={(e) => setCheckedAepsItems([e.target.checked, e.target.checked])}
                                                    >
                                                        AePS Section
                                                    </Checkbox>
                                                </Td>
                                                <Td>
                                                    <HStack spacing={6}>
                                                        <Checkbox
                                                            isChecked={checkedAepsItems[0]}
                                                            onChange={(e) => setCheckedAepsItems([e.target.checked, checkedAepsItems[1]])}
                                                        >
                                                            AePS Basics
                                                        </Checkbox>
                                                        <Checkbox
                                                            isChecked={checkedAepsItems[0]}
                                                            onChange={(e) => setCheckedAepsItems([e.target.checked, checkedAepsItems[1]])}
                                                        >
                                                            AePS Payout
                                                        </Checkbox>
                                                        <Checkbox
                                                            isChecked={checkedAepsItems[0]}
                                                            onChange={(e) => setCheckedAepsItems([e.target.checked, checkedAepsItems[1]])}
                                                        >
                                                            AePS Report
                                                        </Checkbox>
                                                    </HStack>
                                                </Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </TableContainer> */}
                                <VStack spacing={6} w={'full'} alignItems={'flex-start'}>
                                    <CheckboxTree
                                        nodes={aepsList}
                                        checked={aepsPermissions}
                                        onCheck={(checked) => setAepsPermissions(checked)}
                                        expanded={aepsExpansion}
                                        onExpand={(expanded) => setAepsExpansion(expanded)}
                                    />

                                    <CheckboxTree
                                        nodes={bbpsList}
                                        checked={bbpsPermissions}
                                        onCheck={(checked) => setBbpsPermissions(checked)}
                                        expanded={bbpsExpansion}
                                        onExpand={(expanded) => setBbpsExpansion(expanded)}
                                    />

                                    <CheckboxTree
                                        nodes={rechargeList}
                                        checked={rechargePermissions}
                                        onCheck={(checked) => setRechargePermissions(checked)}
                                        expanded={rechargeExpansion}
                                        onExpand={(expanded) => setRechargeExpansion(expanded)}
                                    />

                                    <CheckboxTree
                                        nodes={dmtList}
                                        checked={dmtPermissions}
                                        onCheck={(checked) => setDmtPermissions(checked)}
                                        expanded={dmtExpansion}
                                        onExpand={(expanded) => setDmtExpansion(expanded)}
                                    />
                                </VStack>
                            </form>
                        </DrawerBody>

                        <DrawerFooter>
                            <Button variant='outline' mr={3} 
                            onClick={() => setPermissionsDrawer(false)}>
                                Cancel
                            </Button>
                            <Button colorScheme='blue'>Save</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>

            </Layout >
        </>
    )
}

export default Index