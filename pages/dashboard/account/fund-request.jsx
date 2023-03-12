import React, { useState } from 'react'
import Layout from '../layout'
import {
    Stack,
    Text,
    VStack,
    HStack,
    Button,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    Input,
    Box,
    FormControl,
    FormLabel,
    PinInput,
    PinInputField,
    Select,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react'
import { useFormik } from 'formik'
import { SiMicrosoftexcel } from 'react-icons/si'
import { FaFileCsv, FaFilePdf, FaPrint } from 'react-icons/fa'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const FundTransfer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const Formik = useFormik({
        initialValues: {
            userName: "",
            firmName: "",
            phone: "",
            transactionId: "",
            fromDate: null,
            toDate: null,
        }
    })

    const verifyBeneficiary = () => {
        // Logic to verifiy beneficiary details
    }


    const [rowData, setRowData] = useState([
        {}
    ])

    const [columnDefs, setColumnDefs] = useState([
        { field: "actions" },
        { field: "request datetime" },
        { field: "Trnxn ID" },
        { field: "amount" },
        { field: "requested bank" },
        { field: "transaction type" },
        { field: "transaction receipt" },
        { field: "user name" },
        { field: "user id" },
        { field: "phone no." },
        { field: "update datetime" },
        { field: "updated by" },
        { field: "remarks" },
    ])

    return (
        <>
            <Layout pageTitle={'Fund Request'}>
                <Text fontWeight={'semibold'} fontSize={'lg'}>Fund Request</Text>

                {/* Fund Request Form */}
                <Box py={6}>
                    <Box
                        rounded={16}
                        overflow={'hidden'}
                    >
                        <Box
                            bg={'twitter.500'}
                            p={3} color={'white'}
                        >
                            <Text>Find Fund Requests</Text>
                        </Box>
                        <Box p={4}>
                            <Stack
                                direction={['column', 'row']}
                                spacing={6} py={6}
                            >
                                <FormControl w={['full', 'xs']}>
                                    <FormLabel>User Name</FormLabel>
                                    <Input
                                        name={'userName'} bg={'white'}
                                        onChange={Formik.handleChange}
                                        placeholder={'Enter User Name'}
                                    />
                                </FormControl>
                                <FormControl w={['full', 'xs']}>
                                    <FormLabel>Registered Phone Number</FormLabel>
                                    <Input
                                        name={'phone'} bg={'white'}
                                        onChange={Formik.handleChange}
                                        type={'tel'}
                                        placeholder={'Enter Phone Number'}
                                    />
                                </FormControl>
                                <FormControl w={['full', 'xs']}>
                                    <FormLabel>Firm Name</FormLabel>
                                    <Input
                                        name={'firmName'} bg={'white'}
                                        onChange={Formik.handleChange}
                                        placeholder={'Enter Firm Name'}
                                    />
                                </FormControl>
                            </Stack>
                            <Stack
                                direction={['column', 'row']}
                                spacing={6} py={6}
                            >
                                <FormControl w={['full', 'xs']}>
                                    <FormLabel>Transaction ID</FormLabel>
                                    <Input
                                        name={'transactionId'} bg={'white'}
                                        onChange={Formik.handleChange}
                                        placeholder={'Enter Here'}
                                    />
                                </FormControl>
                                <FormControl w={['full', 'xs']}>
                                    <FormLabel>From Date</FormLabel>
                                    <Input
                                        name={'fromDate'} bg={'white'}
                                        onChange={Formik.handleChange}
                                        type={'date'}
                                    />
                                </FormControl>
                                <FormControl w={['full', 'xs']}>
                                    <FormLabel>To Date</FormLabel>
                                    <Input
                                        name={'toDate'} bg={'white'}
                                        onChange={Formik.handleChange}
                                        type={'date'}
                                    />
                                </FormControl>
                            </Stack>

                        </Box>
                    </Box>
                </Box>


                <Box py={6}>
                    <Text fontWeight={'medium'} pb={4}>Recent Transactions</Text>
                    <HStack spacing={4} my={4}>
                        <Button size={['xs', 'sm']} colorScheme={'twitter'} leftIcon={<FaFileCsv />}>CSV</Button>
                        <Button size={['xs', 'sm']} colorScheme={'whatsapp'} leftIcon={<SiMicrosoftexcel />}>Excel</Button>
                        <Button size={['xs', 'sm']} colorScheme={'red'} leftIcon={<FaFilePdf />}>PDF</Button>
                        <Button size={['xs', 'sm']} colorScheme={'facebook'} leftIcon={<FaPrint />}>Print</Button>
                    </HStack>
                    <Box className='ag-theme-alpine' w={'full'} h={['sm', 'xs']}>
                        <AgGridReact
                            columnDefs={columnDefs}
                            rowData={rowData}
                        >

                        </AgGridReact>
                    </Box>
                </Box>


                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Confirm Transaction</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <VStack>
                                <FormControl w={['full', 'xs']}>
                                    <FormLabel>Enter Your MPIN</FormLabel>
                                    <HStack spacing={4}>
                                        <PinInput
                                            name={'mpin'} otp
                                            onChange={Formik.handleChange}
                                        >
                                            <PinInputField bg={'aqua'} />
                                            <PinInputField bg={'aqua'} />
                                            <PinInputField bg={'aqua'} />
                                            <PinInputField bg={'aqua'} />
                                        </PinInput>
                                    </HStack>
                                </FormControl>
                            </VStack>
                        </ModalBody>

                        <ModalFooter>
                            <Button variant='ghost' onClick={onClose}>Cancel</Button>
                            <Button colorScheme='blue' mr={3} onClick={Formik.handleSubmit}>Done</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Layout>
        </>
    )
}

export default FundTransfer