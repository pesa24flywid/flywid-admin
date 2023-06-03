import React, { useEffect, useState } from 'react'
import Layout from '../layout'
import {
    Box,
    Text,
    Flex,
    VStack,
    useToast,
    HStack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Button,
    FormControl,
    FormLabel,
    Switch
} from '@chakra-ui/react'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import axios from 'axios'
import { useFormik } from 'formik'


const ManageBanks = () => {
    const [portalBanks, setPortalBanks] = useState([])

    const [portalBankModal, setPortalBankModal] = useState({
        status: false,
        id: "",
        personal_identifier: "",
        bank_name: "",
        account: "",
        ifsc: "",
        intent: "save",
    })

    const [isPortalBtnLoading, setIsPortalBtnLoading] = useState(false)

    const Toast = useToast({
        position: 'top-right'
    })

    function refreshBanksList() {
        axios.post('/api/cms/banks/fetch-portal-banks').then((res) => {
            setPortalBanks(res.data)
        }).catch((err) => {
            Toast({
                status: 'error',
                description: "Can't Fetch Banks"
            })
        })
    }
    useEffect(() => {
        refreshBanksList()
    }, [isPortalBtnLoading])

    function portalBankHandler(bankId, intent) {
        if (intent == "save") {
            setPortalBankModal({
                status: true,
                intent: intent,
            })

            PortalFormik.setFieldValue('id', bankId)
            PortalFormik.setFieldValue('intent', intent)
            PortalFormik.setFieldValue('personal_identifier', "")
            PortalFormik.setFieldValue('bank_name', "")
            PortalFormik.setFieldValue('account', "")
            PortalFormik.setFieldValue('ifsc', "")
        }
        if (intent == "update") {
            let matchingBank = portalBanks.find((bank) => {
                return bank._id == bankId
            })
            setPortalBankModal({
                intent: intent,
                id: matchingBank._id,
                personal_identifier: matchingBank.personal_identifier,
                bank_name: matchingBank.bank_name,
                account: matchingBank.account,
                ifsc: matchingBank.ifsc,
                status: true,
            })
            PortalFormik.setFieldValue('id', bankId)
            PortalFormik.setFieldValue('intent', intent)
            PortalFormik.setFieldValue('personal_identifier', matchingBank.personal_identifier)
            PortalFormik.setFieldValue('bank_name', matchingBank.bank_name)
            PortalFormik.setFieldValue('account', matchingBank.account)
            PortalFormik.setFieldValue('ifsc', matchingBank.ifsc)
        }
    }

    function deletePortalBank(recordId) {
        setIsPortalBtnLoading(true)
        axios.post('/api/cms/banks/add-portal-bank', {
            id: recordId,
            personal_identifier: "",
            bank_name: "",
            account: "",
            ifsc: "",
            intent: "delete",
        }).then((res) => {
            Toast({
                status: 'success',
                description: 'Record was deleted successfully.'
            })
            setIsPortalBtnLoading(false)
            setPortalBankModal({
                status: false
            })
        }).catch((err) => {
            Toast({
                status: 'error',
                description: 'We could not delete this record.'
            })
            console.log(err)
            setIsPortalBtnLoading(false)
        })
    }

    function updateBank(values) {
        setIsPortalBtnLoading(true)
        axios.post('/api/cms/banks/add-portal-bank', values, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            Toast({
                status: 'success',
                description: 'Bank list was updated!'
            })
            setIsPortalBtnLoading(false)
            setPortalBankModal({
                status: false
            })
        }).catch((err) => {
            Toast({
                status: 'error',
                description: 'Bank list could not be updated'
            })
            console.log(err)
            setIsPortalBtnLoading(false)
        })
    }

    const PortalFormik = useFormik({
        initialValues: {
            id: portalBankModal.id,
            personal_identifier: portalBankModal.personal_identifier,
            bank_name: portalBankModal.bank_name,
            account: portalBankModal.account,
            ifsc: portalBankModal.ifsc,
            intent: portalBankModal.intent,
        },
        onSubmit: (values) => {
            updateBank(values)
        }
    })


    return (
        <>
            <Layout pageTitle={'Manage Banks'}>
                <Box p={2}
                    bg={'twitter.500'}
                    color={'white'}
                    roundedTop={12}
                >
                    <Text>Your Bank Accounts</Text>
                </Box>
                <Flex
                    direction={'row'}
                    gap={4} p={4}
                    flexWrap={'wrap'}
                >
                    <Box
                        p={4} rounded={8}
                        bg={'aqua'} w={'56'}
                        border={'1px dashed #666'}
                        color={'#666'} my={2}
                        cursor={'pointer'}
                        onClick={() => portalBankHandler(null, "save")}
                    >
                        <VStack spacing={'4'}>
                            <BsFillPlusCircleFill fontSize={'28'} />
                            <Text>Add New Bank</Text>
                        </VStack>
                    </Box>

                    {
                        portalBanks.map((bank, key) => {
                            return (
                                <>
                                    <Box
                                        p={4} rounded={8}
                                        bg={'white'} w={'56'}
                                        boxShadow={'lg'}
                                        cursor={'pointer'}
                                    >
                                        <Box
                                            key={key} gap={1}
                                            display={'flex'} my={2}
                                            flexDirection={'column'}
                                            alignItems={'flex-start'}
                                            justifyContent={'flex-start'}
                                            onClick={() => portalBankHandler(bank._id, "update")}
                                        >
                                            <HStack spacing={2} fontSize={'xs'}>
                                                <Text fontWeight={'semibold'} color={'twitter.700'}>{bank.personal_identifier}</Text>
                                            </HStack>
                                            <HStack spacing={2} fontSize={'xs'}>
                                                <Text fontWeight={'semibold'}>Name:</Text>
                                                <Text>{bank.bank_name}</Text>
                                            </HStack>
                                            <HStack spacing={2} fontSize={'xs'}>
                                                <Text fontWeight={'semibold'}>Account:</Text>
                                                <Text>{bank.account}</Text>
                                            </HStack>
                                            <HStack spacing={2} fontSize={'xs'}>
                                                <Text fontWeight={'semibold'}>Bank IFSC:</Text>
                                                <Text>{bank.ifsc}</Text>
                                            </HStack>
                                        </Box>
                                        <HStack justifyContent={'flex-end'}>
                                            <Switch
                                                size={'sm'}
                                                isChecked={bank.status}
                                                onChange={(e) => {
                                                    updateBank({
                                                        id: bank._id,
                                                        status: e.target.checked,
                                                        intent: "update"
                                                    })
                                                }}></Switch>
                                        </HStack>
                                    </Box>
                                </>
                            )
                        })
                    }
                </Flex>
            </Layout>

            <Modal
                isOpen={portalBankModal.status}
                onClose={() => setPortalBankModal({
                    ...portalBankModal,
                    status: false,
                })}
                size={'md'}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textTransform={'capitalize'}>
                        {portalBankModal.intent} your bank details
                    </ModalHeader>
                    <ModalBody>
                        <VStack spacing={6}>
                            <FormControl>
                                <FormLabel>Identifier (for your reference)</FormLabel>
                                <Input
                                    name='personal_identifier'
                                    value={PortalFormik.values.personal_identifier}
                                    onChange={PortalFormik.handleChange}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Bank Name</FormLabel>
                                <Input
                                    name='bank_name'
                                    value={PortalFormik.values.bank_name}
                                    onChange={PortalFormik.handleChange}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Account Number</FormLabel>
                                <Input
                                    name='account'
                                    value={PortalFormik.values.account}
                                    onChange={PortalFormik.handleChange}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Bank IFSC</FormLabel>
                                <Input
                                    name='ifsc'
                                    value={PortalFormik.values.ifsc}
                                    onChange={PortalFormik.handleChange}
                                />
                            </FormControl>
                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <HStack justifyContent={'flex-end'}>
                            <Button
                                onClick={() => setPortalBankModal({
                                    status: false,
                                })}
                            >
                                Close
                            </Button>
                            {
                                portalBankModal.intent == "update" &&
                                <Button
                                    colorScheme={'red'}
                                    onClick={() => deletePortalBank(portalBankModal.id)}
                                    isLoading={isPortalBtnLoading}
                                >Delete</Button>
                            }
                            <Button
                                colorScheme={'twitter'}
                                textTransform={'capitalize'}
                                onClick={PortalFormik.handleSubmit}
                                isLoading={isPortalBtnLoading}
                            >
                                {portalBankModal.intent}
                            </Button>
                        </HStack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ManageBanks