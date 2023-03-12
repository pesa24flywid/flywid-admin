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
} from '@chakra-ui/react'
import { SiMicrosoftexcel } from 'react-icons/si'
import { FaFileCsv, FaFilePdf, FaPrint } from 'react-icons/fa'
import { BsChevronDown } from 'react-icons/bs'
import Layout from '../../layout';
import jsPDF from 'jspdf';
import "jspdf-autotable"

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
    const { isOpen, onClose, onOpen } = useDisclosure()
    const [checkedItems, setCheckedItems] = React.useState([false, false])

    const allChecked = checkedItems.every(Boolean)
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked

    return (
        <>
            <Layout pageTitle={'Users List'}>
                <Tabs
                    variant='soft-rounded'
                    colorScheme='green'
                    isFitted
                >
                    <TabList>
                        <Tab fontSize={['xs', 'lg']} _selected={{ bg: 'twitter.500', color: 'white' }}>Super Distributor</Tab>
                        <Tab fontSize={['xs', 'lg']} _selected={{ bg: 'twitter.500', color: 'white' }}>Distributor</Tab>
                        <Tab fontSize={['xs', 'lg']} _selected={{ bg: 'twitter.500', color: 'white' }}>Retailer</Tab>
                    </TabList>
                    <TabPanels pt={8}>

                        {/* Super Distributors Here */}
                        <TabPanel>

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
                            {/* <Box ref={wrapperRef}></Box> */}

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
                                        <Tr>
                                            <Td>
                                                <Box>
                                                    <Text>Retailer &nbsp;&nbsp; (Retailer Basic) </Text><br />
                                                    <Text>Sangam Kumar </Text>
                                                    <Text>dezynationindia@gmail.com </Text>
                                                    <Text><a href={'tel:+917838074742'}>+917838074742</a>, <a href={'tel:+919971412064'}>+919971412064</a> </Text>
                                                    <Text>Male &nbsp;&nbsp;07 April 2002</Text><br />
                                                    <Text>Dezynation Proprietorship</Text>
                                                </Box>
                                            </Td>
                                            <Td>
                                                <Box>
                                                    <Text><b>Status: </b>&nbsp;&nbsp; Verified </Text>
                                                    <Text><b>Aadhaar No.: </b>&nbsp;&nbsp; 67XXXXXX3832 </Text>
                                                    <Text><b>PAN: </b>&nbsp;&nbsp; JNxxxxx3D </Text>
                                                    <Text><b>GST No.: </b>&nbsp;&nbsp; NA </Text><br />
                                                    <Text><b>Referral Code.: </b>&nbsp;&nbsp; REPB50 </Text>
                                                </Box>
                                            </Td>
                                            <Td>
                                                <Box>
                                                    <Text><b>Current Balance: </b>&nbsp;&nbsp; ₹ 4689 </Text>
                                                    <Text><b>Capping Balance: </b>&nbsp;&nbsp; ₹ 500 </Text><br />
                                                    <Text><b>Distributors' Balance: </b>&nbsp;&nbsp;₹ 495500</Text>
                                                    <Text><b>Retailers' Balance: </b>&nbsp;&nbsp;₹ 495500</Text>
                                                </Box>
                                            </Td>
                                            <Td>
                                                <Box>
                                                    <Text>B390, Mangal Bazar Road, Block B, Jahangir Puri,</Text>
                                                    <Text>New Delhi, Delhi,</Text>
                                                    <Text>Pincode - 110033</Text>
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
                                                    <Switch size={'sm'} defaultChecked>Active</Switch>
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
                                                                        <Text p={2} w={'full'} fontSize={'sm'} cursor={'pointer'} _hover={{ bg: 'blue.50' }} onClick={onOpen}>Permissions</Text>
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
                                    </Tbody>
                                    <Tfoot>
                                        <Tr>
                                            <Th>To convert</Th>
                                            <Th>into</Th>
                                            <Th>multiply by</Th>
                                        </Tr>
                                    </Tfoot>
                                </Table>
                            </TableContainer>

                            {/* Printable Table */}
                            <VisuallyHidden>
                                <table id={'exportableTable'}>
                                    <thead>
                                        <tr>
                                            <th p={2}>Basic Details</th>
                                            <th p={2}>KYC Details</th>
                                            <th p={2}>Balance Details</th>
                                            <th p={2}>Complete Address</th>
                                            <th p={2}>Parent Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td p={2}>
                                                <Box>
                                                    <Text>Retailer &nbsp;&nbsp; (Retailer Basic) </Text><br /><br />
                                                    <Text>Sangam Kumar </Text><br />
                                                    <Text>dezynationindia@gmail.com </Text><br />
                                                    <Text><a href={'tel:+917838074742'}>+917838074742</a>, <a href={'tel:+919971412064'}>+919971412064</a> </Text><br />
                                                    <Text>Male &nbsp;&nbsp;07 April 2002</Text><br /><br />
                                                    <Text>Dezynation Proprietorship</Text><br />
                                                </Box>
                                            </td>
                                            <td p={2}>
                                                <Box>
                                                    <Text><b>Status: </b>&nbsp;&nbsp; Verified </Text><br />
                                                    <Text><b>Aadhaar No.: </b>&nbsp;&nbsp; 67XXXXXX3832 </Text><br />
                                                    <Text><b>PAN: </b>&nbsp;&nbsp; JNxxxxx3D </Text><br />
                                                    <Text><b>GST No.: </b>&nbsp;&nbsp; NA </Text><br /><br />
                                                    <Text><b>Referral Code.: </b>&nbsp;&nbsp; REPB50 </Text><br />
                                                </Box>
                                            </td>
                                            <td>
                                                <p><b>Current Balance: </b>&nbsp;&nbsp; Rs. 4689 </p><br />
                                                <p><b>Capping Balance: </b>&nbsp;&nbsp; Rs. 500 </p><br /><br />
                                                <p><b>Distributors' Balance: </b>&nbsp;&nbsp;Rs. 495500</p><br /><br />
                                                <p><b>Retailers' Balance: </b>&nbsp;&nbsp;Rs. 495500</p><br />
                                            </td>
                                            <td p={2}>
                                                <Box>
                                                    <Text>B390, Mangal Bazar Road, Block B, Jahangir Puri,</Text><br />
                                                    <Text>New Delhi, Delhi,</Text><br />
                                                    <Text>Pincode - 110033</Text><br />
                                                </Box>
                                            </td>
                                            <td p={2}>
                                                <Box>
                                                    <Text>(567) - Admin One</Text><br />
                                                    <Text>+91 7838074742</Text><br />
                                                </Box>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </VisuallyHidden>

                        </TabPanel>




                        {/* Distributors Here */}
                        <TabPanel>

                        </TabPanel>




                        {/* Retailers Here */}
                        <TabPanel>

                        </TabPanel>

                    </TabPanels>
                </Tabs>


                {/* Permissions Drawer */}
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    size={'lg'}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Manage Permissions For User</DrawerHeader>

                        <DrawerBody>
                            <TableContainer>
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
                                                    isChecked={allChecked}
                                                    isIndeterminate={isIndeterminate}
                                                    onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
                                                >
                                                    AePS Section
                                                </Checkbox>
                                            </Td>
                                            <Td>
                                                <HStack spacing={6}>
                                                    <Checkbox
                                                        isChecked={checkedItems[0]}
                                                        onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
                                                    >
                                                        AePS Payout
                                                    </Checkbox>
                                                    <Checkbox
                                                        isChecked={checkedItems[1]}
                                                        onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
                                                    >
                                                        AePS Withrawal
                                                    </Checkbox>
                                                    <Checkbox
                                                        isChecked={checkedItems[1]}
                                                        onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
                                                    >
                                                        AePS Report
                                                    </Checkbox>
                                                </HStack>
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td borderRight={'1px solid #999'}>
                                                <Checkbox
                                                    isChecked={allChecked}
                                                    isIndeterminate={isIndeterminate}
                                                    onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
                                                >
                                                    AePS Section
                                                </Checkbox>
                                            </Td>
                                            <Td>
                                                <HStack spacing={6}>
                                                    <Checkbox
                                                        isChecked={checkedItems[0]}
                                                        onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
                                                    >
                                                        AePS Payout
                                                    </Checkbox>
                                                    <Checkbox
                                                        isChecked={checkedItems[1]}
                                                        onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
                                                    >
                                                        AePS Withrawal
                                                    </Checkbox>
                                                    <Checkbox
                                                        isChecked={checkedItems[1]}
                                                        onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
                                                    >
                                                        AePS Report
                                                    </Checkbox>
                                                </HStack>
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td borderRight={'1px solid #999'}>
                                                <Checkbox
                                                    isChecked={allChecked}
                                                    isIndeterminate={isIndeterminate}
                                                    onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
                                                >
                                                    AePS Section
                                                </Checkbox>
                                            </Td>
                                            <Td>
                                                <HStack spacing={6}>
                                                    <Checkbox
                                                        isChecked={checkedItems[0]}
                                                        onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
                                                    >
                                                        AePS Payout
                                                    </Checkbox>
                                                    <Checkbox
                                                        isChecked={checkedItems[1]}
                                                        onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
                                                    >
                                                        AePS Withrawal
                                                    </Checkbox>
                                                    <Checkbox
                                                        isChecked={checkedItems[1]}
                                                        onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
                                                    >
                                                        AePS Report
                                                    </Checkbox>
                                                </HStack>
                                            </Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </DrawerBody>

                        <DrawerFooter>
                            <Button variant='outline' mr={3} onClick={onClose}>
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