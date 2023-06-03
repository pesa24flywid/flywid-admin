import React, { useEffect, useState } from 'react'
import Layout from '../layout'
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    Text,
    useToast,
    Stack,
    HStack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure
} from '@chakra-ui/react'
import BackendAxios, { FormAxios } from '@/lib/utils/axios'
import { useFormik } from 'formik'

const Index = () => {
    const Toast = useToast({ position: 'top-right' })
    const [organisations, setOrganisations] = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [selectedOrganisationId, setSelectedOrganisationId] = useState("")
    useEffect(() => {
        BackendAxios.get('/api/admin/organizations').then(res => {
            setOrganisations(res.data)
        }).catch(err => {
            Toast({
                status: 'error',
                title: 'Error while fetching organisations',
                description: err.response?.data?.message || err.response?.data || err.message
            })
        })
    }, [])

    const Formik = useFormik({
        initialValues: {
            firmId: "",
            firmName: "",
            authorisedNumbers: "",
            code: "",
            firmAddress: "",
            email: "",
            phoneNumber: "",
            coi: "",
            coiAttachment: null,
            gst: "",
            gstAttachment: null,
            mou: "",
            mouAttachment: null,
            aoa: "",
            aoaAttachment: null,
            firmPan: "",
            firmPanAttachment: null,
            signatoryPan: "",
            signatoryPanAttachment: null,
            signatoryAadhaar: "",
            signatoryAadhaarAttachment: null,
            signatoryPhoto: null,
        },
        onSubmit: (values) => {
            FormAxios.post(`/api/admin/create-organization`, values).then(res => {
                Toast({
                    status: 'success',
                    description: 'Whitelable organisation added'
                })
            }).catch(err => {
                Toast({
                    status: 'error',
                    title: 'Error while creating organisation',
                    description: err.response?.data?.message || err.response?.data || err.message
                })
            })
        }
    })

    return (
        <>
            <Layout pageTitle={'All Whitelabel Organisations'}>
                <Box my={6} p={3} bg={'twitter.500'} color={'#FFF'} roundedTop={16}>
                    <Text>Your Whitelabel Organisations</Text>
                </Box>
                <Box p={4}>
                    <Stack direction={['column', 'row']} gap={[8, 16]} justifyContent={'flex-start'}>
                        {
                            organisations.map((organisation, key) => (
                                <Box
                                    w={['full', 'sm']}
                                    boxShadow={'lg'}
                                    rounded={16}
                                    key={key} p={4}
                                    bg={'#FFF'}
                                    onClick={() => {
                                        Formik.setFieldValue("firmId", organisation.id)
                                        onOpen()
                                    }}
                                >
                                    <Text
                                        fontWeight={'semibold'}
                                        textTransform={'capitalize'}
                                        fontSize={'lg'} pb={2}
                                    >{organisation.firm_name} ({organisation.code})
                                    </Text>
                                    <HStack justifyContent={'space-between'}>
                                        <Text fontWeight={'semibold'}>PAN:</Text>
                                        <Text textTransform={'uppercase'}>{organisation.firm_pan}</Text>
                                    </HStack>
                                    <HStack justifyContent={'space-between'}>
                                        <Text fontWeight={'semibold'}>AoA:</Text>
                                        <Text textTransform={'uppercase'}>{organisation.aoa}</Text>
                                    </HStack>
                                    <HStack justifyContent={'space-between'}>
                                        <Text fontWeight={'semibold'}>CoI:</Text>
                                        <Text textTransform={'uppercase'}>{organisation.coi}</Text>
                                    </HStack>
                                    <HStack justifyContent={'space-between'}>
                                        <Text fontWeight={'semibold'}>GST:</Text>
                                        <Text textTransform={'uppercase'}>{organisation.gst}</Text>
                                    </HStack>
                                    <HStack justifyContent={'space-between'}>
                                        <Text fontWeight={'semibold'}>MoU:</Text>
                                        <Text textTransform={'uppercase'}>{organisation.mou}</Text>
                                    </HStack>
                                    <br />
                                    <HStack justifyContent={'space-between'}>
                                        <Text fontWeight={'semibold'}>Signatory PAN:</Text>
                                        <Text textTransform={'uppercase'}>{organisation.signatory_pan}</Text>
                                    </HStack>
                                    <HStack justifyContent={'space-between'}>
                                        <Text fontWeight={'semibold'}>Signatory Aadhaar:</Text>
                                        <Text textTransform={'uppercase'}>{organisation.signatory_aadhaar}</Text>
                                    </HStack>
                                    <br />
                                    <Text>{organisation.email}</Text>
                                    <Text>{organisation.phone_number}</Text>
                                </Box>
                            ))
                        }
                    </Stack>
                </Box>
            </Layout>

            <Modal size={'3xl'} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Organisation</ModalHeader>
                    <ModalBody>
                        <Stack mb={4} direction={['column', 'row']} spacing={8}>
                            <FormControl pb={4} w={['full', 'xs']}>
                                <FormLabel>Company Name</FormLabel>
                                <Input name='firmName' onChange={Formik.handleChange} />
                            </FormControl>
                            <FormControl pb={4} w={['full', 'xs']}>
                                <FormLabel>Comapny Code</FormLabel>
                                <Input name='code' onChange={Formik.handleChange} />
                            </FormControl>
                        </Stack>

                        <Stack mb={4} direction={['column', 'row']} spacing={8}>
                            <FormControl pb={4} w={['full', 'xs']}>
                                <FormLabel>Phone Number</FormLabel>
                                <Input name='phoneNumber' onChange={Formik.handleChange} />
                            </FormControl>
                            <FormControl pb={4} w={['full', 'xs']}>
                                <FormLabel>Email</FormLabel>
                                <Input name='email' onChange={Formik.handleChange} />
                            </FormControl>
                        </Stack>

                        <FormControl pb={4} w={['full', 'lg']}>
                            <FormLabel>Company Address</FormLabel>
                            <Textarea name='firmAddress' onChange={Formik.handleChange} />
                        </FormControl>

                        <Stack mb={4} direction={['column', 'row']} spacing={8}>
                            <FormControl pb={4} w={['full', 'xs']}>
                                <FormLabel>COI</FormLabel>
                                <Input name='coi' onChange={Formik.handleChange} textTransform={'uppercase'} />
                            </FormControl>
                            <FormControl pb={4} w={['full', 'xs']}>
                                <FormLabel>Upload COI</FormLabel>
                                <Input name='coiAttachment' type='file' onChange={e => Formik.setFieldValue("coiAttachment", e.currentTarget.files[0])} />
                            </FormControl>
                        </Stack>

                        <Stack mb={4} direction={['column', 'row']} spacing={8}>
                            <FormControl pb={4} w={['full', 'xs']}>
                                <FormLabel>GST</FormLabel>
                                <Input name='gst' onChange={Formik.handleChange} textTransform={'uppercase'} />
                            </FormControl>
                            <FormControl pb={4} w={['full', 'xs']}>
                                <FormLabel>Upload GST</FormLabel>
                                <Input name='gstAttachment' type='file' onChange={e => Formik.setFieldValue("gstAttachment", e.currentTarget.files[0])} />
                            </FormControl>
                        </Stack>

                        <Stack mb={4} direction={['column', 'row']} spacing={8}>
                            <FormControl pb={4} w={['full', 'xs']}>
                                <FormLabel>MOU</FormLabel>
                                <Input name='mou' onChange={Formik.handleChange} textTransform={'uppercase'} />
                            </FormControl>
                            <FormControl pb={4} w={['full', 'xs']}>
                                <FormLabel>Upload MOU</FormLabel>
                                <Input name='mouAttachment' type='file' onChange={e => Formik.setFieldValue("mouAttachment", e.currentTarget.files[0])} />
                            </FormControl>
                        </Stack>

                        <Stack mb={4} direction={['column', 'row']} spacing={8}>
                            <FormControl pb={4} w={['full', 'xs']}>
                                <FormLabel>AOA</FormLabel>
                                <Input name='aoa' onChange={Formik.handleChange} textTransform={'uppercase'} />
                            </FormControl>
                            <FormControl pb={4} w={['full', 'xs']}>
                                <FormLabel>Upload AOA</FormLabel>
                                <Input name='aoaAttachment' type='file' onChange={e => Formik.setFieldValue("aoaAttachment", e.currentTarget.files[0])} />
                            </FormControl>
                        </Stack>

                        <Stack mb={4} direction={['column', 'row']} spacing={8}>
                            <FormControl pb={4} w={['full', 'xs']}>
                                <FormLabel>Firm PAN</FormLabel>
                                <Input name='firmPan' onChange={Formik.handleChange} textTransform={'uppercase'} />
                            </FormControl>
                            <FormControl pb={4} w={['full', 'xs']}>
                                <FormLabel>Upload PAN</FormLabel>
                                <Input name='firmPanAttachment' type='file' onChange={e => Formik.setFieldValue("firmPanAttachment", e.currentTarget.files[0])} />
                            </FormControl>
                        </Stack>

                        <Stack mb={4} direction={['column', 'row']} spacing={8}>
                            <FormControl pb={4} w={['full', 'xs']}>
                                <FormLabel>Signatory PAN</FormLabel>
                                <Input name='signatoryPan' onChange={Formik.handleChange} textTransform={'uppercase'} />
                            </FormControl>
                            <FormControl pb={4} w={['full', 'xs']}>
                                <FormLabel>Upload Signatory PAN</FormLabel>
                                <Input name='signatoryPanAttachment' type='file' onChange={e => Formik.setFieldValue("signatoryPanAttachment", e.currentTarget.files[0])} />
                            </FormControl>
                        </Stack>

                        <Stack mb={4} direction={['column', 'row']} spacing={8}>
                            <FormControl pb={4} w={['full', 'xs']}>
                                <FormLabel>Signatory Aadhaar</FormLabel>
                                <Input name='signatoryAadhaar' type='phone' onChange={Formik.handleChange} />
                            </FormControl>
                            <FormControl pb={4} w={['full', 'xs']}>
                                <FormLabel>Upload Signatory Aadhaar</FormLabel>
                                <Input name='signatoryAadhaarAttachment' type='file' onChange={e => Formik.setFieldValue("signatoryAadhaarAttachment", e.currentTarget.files[0])} />
                            </FormControl>
                        </Stack>

                        <Stack mb={4} direction={['column', 'row']} spacing={8}>
                            <FormControl pb={4} w={['full', 'xs']}>
                                <FormLabel>Upload Signatory Photo</FormLabel>
                                <Input name='signatoryPhoto' type='file' onChange={e => Formik.setFieldValue("signatoryPhoto", e.currentTarget.files[0])} />
                            </FormControl>
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <HStack p={4} justifyContent={'flex-end'}>
                            <Button colorScheme='twitter' variant={'outline'} w={'auto'} onClick={onClose}>Cancel</Button>
                            <Button colorScheme='twitter' w={'auto'} onClick={Formik.handleSubmit} >Save</Button>
                        </HStack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Index