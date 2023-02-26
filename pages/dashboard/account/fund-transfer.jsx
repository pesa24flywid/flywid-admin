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
import { AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const FundTransfer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const TransferFormik = useFormik({
        initialValues: {
            beneficiaryId: "",
            amount: "",
            beneficiaryWallet: "main",
            scheduledDate: "",
            transactionType: "",
            remarks: "",
            mpin: "",
        }
    })

    const verifyBeneficiary = () => {
        // Logic to verifiy beneficiary details
    }


    const [rowData, setRowData] = useState([
        {}
    ])

    const [columnDefs, setColumnDefs] = useState([
        { field: "Trnxn ID" },
        { field: "beneficiary name" },
        { field: "beneficiary ID" },
        { field: "phone" },
        { field: "amount" },
        { field: "transaction type" },
        { field: "datetime" },
        { field: "remarks" },
    ])

    return (
        <>
            <Layout pageTitle={'Fund Transfer'}>
                <Text fontWeight={'semibold'} fontSize={'lg'}>Fund Transfer</Text>

                {/* Fund Transfer Form */}
                <Box py={6}>
                    <Box
                        rounded={16}
                        overflow={'hidden'}
                    >
                        <Box
                            bg={'twitter.500'}
                            p={3} color={'white'}
                        >
                            <Text>Transfer Funds To Any Registered User</Text>
                        </Box>
                        <Box p={4}>
                            <Stack
                                direction={['column', 'row']}
                                spacing={6} py={6}
                            >
                                <FormControl w={['full', 'xs']}>
                                    <FormLabel>User ID</FormLabel>
                                    <InputGroup>
                                        <Input
                                            name={'beneficiaryId'}
                                            onChange={TransferFormik.handleChange}
                                            placeholder={'Enter Beneficiary User ID'}
                                        />
                                        <InputRightAddon
                                            children={'Verify'}
                                            cursor={'pointer'}
                                            onClick={() => verifyBeneficiary()}
                                        />
                                    </InputGroup>
                                </FormControl>
                            </Stack>
                            <Stack
                                p={4} bg={'blue.50'}
                                border={'1px'}
                                borderColor={'blue.200'}
                                rounded={16}
                                direction={['column', 'row']}
                                spacing={6} justifyContent={'space-between'}
                            >
                                <Box>
                                    <Text fontWeight={'medium'}>Beneficiary Name</Text>
                                    <Text>Sangam Kumar</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight={'medium'}>Firm Name</Text>
                                    <Text>Dezynation</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight={'medium'}>Current Balance</Text>
                                    <Text>₹ 5800</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight={'medium'}>Phone</Text>
                                    <Text>7838074742</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight={'medium'}>Bank Name</Text>
                                    <Text>Bank of Baroda</Text>
                                </Box>
                            </Stack>
                            <Stack
                                direction={['column', 'row']}
                                py={8} justifyContent={'space-between'}
                            >
                                <FormControl w={['full', 'xs']}>
                                    <FormLabel>Enter Amount</FormLabel>
                                    <InputGroup>
                                        <InputLeftAddon
                                            children={'₹'}
                                        />
                                        <Input
                                            name={'amount'}
                                            onChange={TransferFormik.handleChange}
                                            placeholder={'Enter Amount To Transfer'}
                                        />
                                    </InputGroup>
                                </FormControl>
                                <FormControl w={['full', 'xs']}>
                                    <FormLabel>Transaction Type</FormLabel>
                                    <Select
                                        name={'transactionType'}
                                        bg={'white'}
                                        onChange={TransferFormik.handleChange}
                                    >
                                        <option value="transfer">Transfer</option>
                                        <option value="reversal">Reversal</option>
                                    </Select>
                                </FormControl>
                                <FormControl w={['full', 'xs']}>
                                    <FormLabel>Schedule Transaction</FormLabel>
                                    <Input
                                        type={'date'}
                                        name={'scheduledDate'}
                                        onChange={TransferFormik.handleChange}
                                    />
                                </FormControl>
                            </Stack>
                            <FormControl py={6}>
                                <FormLabel>Remarks (optional)</FormLabel>
                                <Input
                                    placeholder='Enter here...'
                                    bg={'white'} name={'remarks'}
                                    onChange={TransferFormik.handleChange}
                                />
                            </FormControl>

                            <HStack justifyContent={'flex-end'}>
                                <Button
                                    type='submit' onClick={onOpen}
                                    colorScheme={'twitter'}>Enter MPIN</Button>
                            </HStack>
                        </Box>
                    </Box>
                </Box>


                <Box py={6}>
                    <Text fontWeight={'medium'} pb={4}>Recent Transactions</Text>
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
                                            onChange={TransferFormik.handleChange}
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
                            <Button colorScheme='blue' mr={3} onClick={TransferFormik.handleSubmit}>Done</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Layout>
        </>
    )
}

export default FundTransfer