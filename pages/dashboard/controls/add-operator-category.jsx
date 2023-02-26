import React from 'react'
import Layout from '../layout'
import {
    Box,
    Stack,
    Input,
    FormControl,
    FormLabel,
    Button,
    Text,
    HStack,
    Switch,
    TableContainer,
    TableCaption,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
} from '@chakra-ui/react'
import { useFormik } from 'formik'

const AddOperatorType = () => {
    const Formik = useFormik({
        initialValues: {
            displayName: "",
            ekoName: "",
            paysprintName: "",
        }
    })



    return (
        <>
            <Layout pageTitle={'Add Operator Category'}>
                <Box
                    p={3}
                    bg={'twitter.500'}
                    color={'white'}
                >
                    <Text>Add And Manage Operator Categories</Text>
                </Box>
                <Stack
                    p={4} spacing={6}
                    direction={['column', 'row']}

                >
                    <FormControl w={['full', 'sm']}>
                        <FormLabel>Display Name</FormLabel>
                        <Input
                            name={'displayName'} bg={'white'}
                            onChange={Formik.handleChange}
                            value={Formik.values.displayName}
                        />
                    </FormControl>
                    <FormControl w={['full', 'sm']}>
                        <FormLabel>Eko Name</FormLabel>
                        <Input
                            name={'ekoName'} bg={'white'}
                            onChange={Formik.handleChange}
                            value={Formik.values.categoryName}
                        />
                    </FormControl>
                    <FormControl w={['full', 'sm']}>
                        <FormLabel>Paysprint Name</FormLabel>
                        <Input
                            name={'paysprintName'} bg={'white'}
                            onChange={Formik.handleChange}
                            value={Formik.values.categoryName}
                        />
                    </FormControl>
                </Stack>
                <HStack justifyContent={'flex-end'}>
                    <Button colorScheme={'twitter'}>Save</Button>
                </HStack>


                <TableContainer my={6}>
                    <Table>
                    <TableCaption>Available Categories</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>#</Th>
                                <Th>Category Display Name</Th>
                                <Th>Category Eko Name</Th>
                                <Th>Category Paysprint Name</Th>
                                <Th>Status</Th>
                                <Th>Insert Datetime</Th>
                                <Th>Update Datetime</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>1</Td>
                                <Td>Mobile Prepaid</Td>
                                <Td>prepaid mobile</Td>
                                <Td>mobile recharge prepaid</Td>
                                <Td><Switch></Switch></Td>
                                <Td>Insert Datetime</Td>
                                <Td>Update Datetime</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Layout>
        </>
    )
}

export default AddOperatorType