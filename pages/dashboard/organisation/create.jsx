import React from 'react'
import Layout from '../layout'
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Select,
    Stack,
    Button,
    Text,
    Textarea,
    useToast
} from '@chakra-ui/react'
import { useFormik } from 'formik'

const Create = () => {
    const Toast = useToast({ position: 'top-right' })
    const Formik = useFormik({
        initialValues: {
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
        onSubmit: () => {
            Toast({
                status: 'success',
                description: 'Whitelable added'
            })
        }
    })

    return (
        <>
            <Layout pageTitle={'Register Whitelabel Organisation'}>
                <Box my={6} p={2} bg={'twitter.400'} color={'#FFF'}>
                    <Text>Register New Whitelabel Organisation</Text>
                </Box>
                <Box w={'full'}>
                    <form action="#" id='form'>
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
                                <Input name='coi' onChange={Formik.handleChange} />
                            </FormControl>
                            <FormControl pb={4} w={['full', 'xs']}>
                                <FormLabel>Upload COI</FormLabel>
                                <Input name='coiAttachment' type='file' onChange={e => Formik.setFieldValue("coiAttachment", e.currentTarget.files[0])} />
                            </FormControl>
                        </Stack>

                        <Stack mb={4} direction={['column', 'row']} spacing={8}>
                            <FormControl pb={4} w={['full', 'xs']}>
                                <FormLabel>GST</FormLabel>
                                <Input name='gst' onChange={Formik.handleChange} />
                            </FormControl>
                            <FormControl pb={4} w={['full', 'xs']}>
                                <FormLabel>Upload GST</FormLabel>
                                <Input name='gstAttachment' type='file' onChange={e => Formik.setFieldValue("gstAttachment", e.currentTarget.files[0])} />
                            </FormControl>
                        </Stack>

                        <Stack mb={4} direction={['column', 'row']} spacing={8}>
                            <FormControl pb={4} w={['full', 'xs']}>
                                <FormLabel>MOU</FormLabel>
                                <Input name='mou' onChange={Formik.handleChange} />
                            </FormControl>
                            <FormControl pb={4} w={['full', 'xs']}>
                                <FormLabel>Upload MOU</FormLabel>
                                <Input name='mouAttachment' type='file' onChange={e => Formik.setFieldValue("mouAttachment", e.currentTarget.files[0])} />
                            </FormControl>
                        </Stack>

                        <Stack mb={4} direction={['column', 'row']} spacing={8}>
                            <FormControl pb={4} w={['full', 'xs']}>
                                <FormLabel>AOA</FormLabel>
                                <Input name='aoa' onChange={Formik.handleChange} />
                            </FormControl>
                            <FormControl pb={4} w={['full', 'xs']}>
                                <FormLabel>Upload AOA</FormLabel>
                                <Input name='aoaAttachment' type='file' onChange={e => Formik.setFieldValue("aoaAttachment", e.currentTarget.files[0])} />
                            </FormControl>
                        </Stack>

                        <Stack mb={4} direction={['column', 'row']} spacing={8}>
                            <FormControl pb={4} w={['full', 'xs']}>
                                <FormLabel>Firm PAN</FormLabel>
                                <Input name='firmPan' onChange={Formik.handleChange} />
                            </FormControl>
                            <FormControl pb={4} w={['full', 'xs']}>
                                <FormLabel>Upload PAN</FormLabel>
                                <Input name='firmPanAttachment' type='file' onChange={e => Formik.setFieldValue("firmPanAttachment", e.currentTarget.files[0])} />
                            </FormControl>
                        </Stack>

                        <Stack mb={4} direction={['column', 'row']} spacing={8}>
                            <FormControl pb={4} w={['full', 'xs']}>
                                <FormLabel>Signatory PAN</FormLabel>
                                <Input name='signatoryPan' onChange={Formik.handleChange} />
                            </FormControl>
                            <FormControl pb={4} w={['full', 'xs']}>
                                <FormLabel>Upload Signatory PAN</FormLabel>
                                <Input name='signatoryPanAttachment' type='file' onChange={e => Formik.setFieldValue("signatoryPanAttachment", e.currentTarget.files[0])} />
                            </FormControl>
                        </Stack>

                        <Stack mb={4} direction={['column', 'row']} spacing={8}>
                            <FormControl pb={4} w={['full', 'xs']}>
                                <FormLabel>Signatory Aadhaar</FormLabel>
                                <Input name='signatoryAadhaar' onChange={Formik.handleChange} />
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
                        <Stack p={4} justifyContent={'flex-end'}>
                            <Button colorScheme='twitter'>Save</Button>
                        </Stack>
                    </form>
                </Box>
            </Layout>
        </>
    )
}

export default Create