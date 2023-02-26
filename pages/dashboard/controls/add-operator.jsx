import React from 'react'
import Layout from '../layout'
import {
    Box,
    Text,
    FormControl,
    FormLabel,
    Input,
    Select,
    Button,
    Stack,
    Switch,
    TableContainer,
    Table,
    TableCaption,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
} from '@chakra-ui/react'
import { useFormik } from 'formik'

const AddOperator = () => {
    const Formik = useFormik({
        initialValues: {
            categoryName: "",
            displayName: "",
            operatorEkoName: "",
            operatorPaysprintName: "",
        }
    })
    return (
        <>
            <Layout pageTitle={'Add Operator'}>
                <Box
                    p={3}
                    bg={'twitter.500'}
                    color={'white'}
                >
                    <Text>Add And Manage Operators</Text>
                </Box>

                <Stack
                    p={4} spacing={6}
                    direction={['column', 'row']}
                >
                    <FormControl w={['full', 'xs']}>
                        <FormLabel>Select Category</FormLabel>
                        <Select
                            name={'categoryName'} bg={'white'}
                            onChange={Formik.handleChange}
                            value={Formik.values.categoryName}
                            textTransform={'uppercase'}
                        >
                            <option value="mobile prepaid">mobile prepaid</option>
                            <option value="mobile postpaid">mobile postpaid</option>
                        </Select>
                    </FormControl>
                    <FormControl w={['full', 'xs']}>
                        <FormLabel>Display Name</FormLabel>
                        <Input
                            name={'displayName'} bg={'white'}
                            onChange={Formik.handleChange}
                            value={Formik.values.displayName}
                        />
                    </FormControl>
                    <FormControl w={['full', 'xs']}>
                        <FormLabel>Eko Name</FormLabel>
                        <Input
                            name={'operatorEkoName'} bg={'white'}
                            onChange={Formik.handleChange}
                            value={Formik.values.operatorEkoName}
                        />
                    </FormControl>
                    <FormControl w={['full', 'xs']}>
                        <FormLabel>Paysprint Name</FormLabel>
                        <Input
                            name={'operatorPaysprintName'} bg={'white'}
                            onChange={Formik.handleChange}
                            value={Formik.values.operatorPaysprintName}
                        />
                    </FormControl>
                </Stack>
                <Stack
                    justifyContent={['flex-end']}
                    p={4} direction={['column', 'row']}
                    spacing={6} my={6}
                >
                    <Button
                        colorScheme={'twitter'}
                    >
                        Save
                    </Button>
                </Stack>



                <TableContainer my={6}>
                    <Table>
                        <TableCaption>Available Categories</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>#</Th>
                                <Th>Operator Category</Th>
                                <Th>Operator Display Name</Th>
                                <Th>Operator Eko Name</Th>
                                <Th>Operator Paysprint Name</Th>
                                <Th>Status</Th>
                                <Th>Insert Datetime</Th>
                                <Th>Update Datetime</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>1</Td>
                                <Td>Mobile Prepaid</Td>
                                <Td>VI</Td>
                                <Td>vodafone idea</Td>
                                <Td>vodafone idea limited</Td>
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

export default AddOperator