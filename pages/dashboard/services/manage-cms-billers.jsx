import React from 'react'
import {
    Box,
    Text,
    Stack,
    HStack,
    FormControl,
    FormLabel,
    Input,
    Select,
    Button,
    TableContainer,
    Table,
    Thead,
    Tbody,
    Tr, Th, Td,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    VStack,
    useToast
} from '@chakra-ui/react'
import Layout from '../layout'
import { useFormik } from 'formik'

const ManageCmsBillers = () => {
    const Toast = useToast({ position: 'top-right' })
    const Formik = useFormik({
        initialValues: {
            billerId: "",
            billerName: "",
            status: "1",
        }
    })
    return (
        <>
            <Layout pageTitle={'CMS Billers'}>
                <Text fontSize={'lg'} fontWeight={'bold'}>Manage CMS Billers</Text>
                <Box p={2} my={6} bg={'twitter.500'}>
                    <Text color={'#FFF'}>
                        Add New CMS Biller
                    </Text>
                </Box>
                <Stack
                    p={4} spacing={8}
                    justifyContent={'flex-start'}
                    direction={['column', 'row']}
                >
                    <FormControl>
                        <FormLabel>Biller ID</FormLabel>
                        <Input
                            name='billerId' bg={'#FFF'}
                            w={['full', 'xs']}
                            onChange={Formik.handleChange}
                            placeholder='Biller ID'
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Biller Name</FormLabel>
                        <Input
                            name='billerName' bg={'#FFF'}
                            w={['full', 'xs']}
                            onChange={Formik.handleChange}
                            placeholder='Biller Name'
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Status</FormLabel>
                        <Select name='status' onChange={Formik.handleChange}>
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </Select>
                    </FormControl>
                </Stack>
                <HStack p={4} justifyContent={'flex-end'}>
                    <Button colorScheme='twitter' onClick={Formik.handleSubmit}>Save</Button>
                </HStack>
                <Box p={24}></Box>
                <TableContainer>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Serial No.</Th>
                                <Th>Biller ID</Th>
                                <Th>Biller Name</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td></Td>
                                <Td></Td>
                                <Td></Td>
                                <Td>
                                    <HStack spacing={4}>
                                        <Button size={'xs'} colorScheme='green'>Edit</Button>
                                        <Button size={'xs'} colorScheme='red'>Delete</Button>
                                    </HStack>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Layout>
        </>
    )
}

export default ManageCmsBillers