import React, { useState } from 'react'
import Layout from '../layout'
import {
    Stack,
    HStack,
    Box,
    Text,
    FormControl,
    FormLabel,
    Input,
    Select,
    Textarea,
    Button,
    TableContainer,
    Table,
    Thead,
    Th,
    Tbody,
    Td,
    Tr,
    Switch,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from '@chakra-ui/react'
import SearchBox from '@/HOC/SearchBox'
import { useFormik } from 'formik'


const AddBank = () => {

    const [clickStatus, setClickStatus] = useState("new")
    const [modalStatus, setModalStatus] = useState(false)

    const SearchFormik = useFormik({
        initialValues: {
            labelName: "",
            bankName: "",
            accountNo: "",
            ifsc: "",
            branch: "",
        }
    })

    const Formik = useFormik({
        initialValues: {
            labelName: "",
            bankName: "",
            accountNo: "",
            ifsc: "",
            branch: "",
            status: true,
        }
    })

    function handleModal(clickType) {
        setClickStatus(clickType)
        setModalStatus(true)
    }

    return (
        <>
            <Layout pageTitle={'Add Bank'}>
                <HStack w={'full'} justifyContent={'space-between'}>
                    <Text>Add New Bank Account</Text>
                    <Button
                        colorScheme={'twitter'}
                        leftIcon={'+'} size={'sm'}
                        onClick={() => handleModal("new")}
                    >
                        Add New
                    </Button>
                </HStack>
                <SearchBox
                    searchTitle={'Search from your added Banks'}
                >
                    <Stack
                        direction={['column', 'row']}
                        spacing={6} my={4}
                    >
                        <FormControl>
                            <FormLabel>Label Name</FormLabel>
                            <Input
                                name={'labelName'} bg={'white'}
                                onChange={SearchFormik.handleChange}
                                placeholder={'Enter here'}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Bank Name</FormLabel>
                            <Input
                                name={'bankName'} bg={'white'}
                                onChange={SearchFormik.handleChange}
                                placeholder={'Enter here'}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Account Number</FormLabel>
                            <Input
                                name={'accountNo'} bg={'white'}
                                onChange={SearchFormik.handleChange}
                                placeholder={'Enter here'}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Bank IFSC</FormLabel>
                            <Input
                                name={'ifsc'} bg={'white'}
                                onChange={SearchFormik.handleChange}
                                placeholder={'Enter here'}
                            />
                        </FormControl>
                    </Stack>

                    <HStack justifyContent={'flex-end'}>
                        <Button colorScheme={'twitter'}>Search</Button>
                    </HStack>
                </SearchBox>

                <TableContainer>
                    <Table variant={'striped'}>
                        <Thead>
                            <Tr>
                                <Th>S. No.</Th>
                                <Th>Lable</Th>
                                <Th>Bank Name</Th>
                                <Th>Account Number</Th>
                                <Th>Branch</Th>
                                <Th>Bank IFSC</Th>
                                <Th>Status</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>1</Td>
                                <Td>My Bank Account</Td>
                                <Td>Bank of Baroda</Td>
                                <Td>1234567890</Td>
                                <Td>Model Town</Td>
                                <Td>BRBT4654SC</Td>
                                <Td><Switch id='bank-status' defaultChecked={true}></Switch></Td>
                                <Td>
                                    <HStack spacing={4}>
                                        <Button colorScheme={'facebook'} size={'xs'} onClick={() => handleModal("edit")}>Edit</Button>
                                        <Button colorScheme={'red'} size={'xs'}>Delete</Button>
                                    </HStack>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>

                <Modal
                    isOpen={modalStatus}
                    onClose={() => setModalStatus(false)}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>
                            <Text>{clickStatus == "new" ? "Add New Bank Account" : "Edit Account Details"}</Text>
                            <ModalCloseButton />
                        </ModalHeader>
                        <ModalBody>
                            <Box>
                                <FormControl my={4}>
                                    <FormLabel>Label Name</FormLabel>
                                    <Input
                                        name={'labelName'} bg={'white'}
                                        onChange={Formik.handleChange}
                                        placeholder={'Enter here...'}
                                    />
                                </FormControl>
                                <FormControl my={4}>
                                    <FormLabel>Bank Name</FormLabel>
                                    <Select
                                        name={'bankName'} bg={'white'}
                                        onChange={Formik.handleChange}
                                    >
                                        <option value="state bank of india">State Bank</option>
                                        <option value="bank of baroda">Bank of Baroda</option>
                                    </Select>
                                </FormControl>
                                <FormControl my={4}>
                                    <FormLabel>Account Number</FormLabel>
                                    <Input
                                        name={'accountNo'} bg={'white'}
                                        onChange={Formik.handleChange}
                                        placeholder={'Enter here...'}
                                    />
                                </FormControl>
                                <FormControl my={4}>
                                    <FormLabel>Branch Name</FormLabel>
                                    <Input
                                        name={'branch'} bg={'white'}
                                        onChange={Formik.handleChange}
                                        placeholder={'Enter here...'}
                                    />
                                </FormControl>
                                <FormControl my={4}>
                                    <FormLabel>Bank IFSC</FormLabel>
                                    <Input
                                        name={'ifsc'} bg={'white'}
                                        onChange={Formik.handleChange}
                                        placeholder={'Enter here...'}
                                    />
                                </FormControl>
                                <FormControl my={4}>
                                    <HStack justifyContent={'space-between'}>
                                        <FormLabel>Status</FormLabel>
                                        <Switch name='status' onChange={Formik.handleChange}></Switch>
                                    </HStack>
                                </FormControl>
                            </Box>
                        </ModalBody>
                        <ModalFooter>
                            <HStack justifyContent={'flex-end'} spacing={4}>
                                <Button variant={'ghost'} onClick={()=>setModalStatus(false)}>Cancel</Button>
                                <Button variant={'whatsapp'}>Save</Button>
                            </HStack>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Layout>
        </>
    )
}

export default AddBank