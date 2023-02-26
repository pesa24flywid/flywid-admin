import React, { useState } from 'react'
import Layout from '../layout'
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
    Tr,
    Th,
    Tbody,
    Td,
} from '@chakra-ui/react'
import { useFormik } from 'formik'
import { BsTrash, BsPenFill } from 'react-icons/bs'

const AddCmsBiller = () => {
    const [searchQuery, setSearchQuery] = useState("")

    const Formik = useFormik({
        initialValues: {
            billerName: "",
            clientId: ""
        }
    })

    return (
        <>
            <Layout pageTitle={'Add CMS Biller'}>
                <Box
                    p={3}
                    bg={'twitter.500'}
                    color={'white'}
                >
                    <Text>Add And Manage Billers For CMS</Text>
                </Box>

                <Stack
                    direction={['column', 'row']}
                    spacing={6} p={4}
                >
                    <FormControl w={['full', 'xs']}>
                        <FormLabel>Biller Name</FormLabel>
                        <Input
                            bg={'white'} name={'billerName'}
                            onChange={Formik.handleChange}
                            placeholder={'Enter Biller Name'}
                        />
                    </FormControl>
                    <FormControl w={['full', 'xs']}>
                        <FormLabel>Client ID</FormLabel>
                        <Input
                            bg={'white'} name={'clientId'}
                            onChange={Formik.handleChange}
                            type={'number'}
                            placeholder={'Paysprint Client ID'}
                        />
                    </FormControl>
                    <HStack w={'auto'} justifyContent={'flex-end'} alignItems={'flex-end'}>
                        <Button colorScheme={'twitter'}>Save</Button>
                    </HStack>
                </Stack>

                <HStack mt={'28'} mb={8} w={['full', 'lg']}>
                    <Input
                        bg={'white'} value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={'Type here to search'}
                    />
                    <Button colorScheme={'whatsapp'}>Search</Button>
                </HStack>
                <TableContainer>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>#</Th>
                                <Th>Biller Name</Th>
                                <Th>Biller ID</Th>
                                <Th>Inserted On</Th>
                                <Th>Updated On</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>1</Td>
                                <Td>OLA CAB</Td>
                                <Td>949</Td>
                                <Td>Inserted On</Td>
                                <Td>Updated On</Td>
                                <Td>
                                    <HStack>
                                        <Button size={'sm'} rounded={'full'} colorScheme={'red'}>
                                            <BsTrash />
                                        </Button>
                                        <Button size={'sm'} rounded={'full'} colorScheme={'facebook'}>
                                            <BsPenFill />
                                        </Button>
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

export default AddCmsBiller