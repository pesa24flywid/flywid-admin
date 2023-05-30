import React, { useState, useEffect } from 'react'
import {
    HStack,
    Box,
    Stack,
    VStack,
    Text,
    FormControl,
    FormLabel,
    Input,
    PinInput,
    PinInputField,
    Button,
    useToast
} from '@chakra-ui/react'
import { useFormik } from "formik";
import Layout from '../layout';
import BackendAxios from '@/lib/utils/axios';

const ResetMpin = () => {
    const Toast = useToast({
        position: 'top-right'
    })
    const [lastRemarks, setLastRemarks] = useState("")
    const MpinFormik = useFormik({
        initialValues: {
            old_mpin: "",
            new_mpin: "",
            new_mpin_confirmation: "",
            credential_remarks: ""
        }
    })

    function getRemarks() {
        BackendAxios.get('/api/admin/credential-remarks').then(res => {
            setLastRemarks(res.data)
        }).catch(err => {
            Toast({
                status: 'error',
                title: 'Error Occured',
                description: err.message
            })
        })
    }
    useEffect(() => {
        getRemarks()
    }, [])

    function handleMpinReset() {
        BackendAxios.post('/api/user/new-mpin', JSON.stringify({
            old_mpin: MpinFormik.values.old_mpin,
            new_mpin: MpinFormik.values.new_mpin,
            new_mpin_confirmation: MpinFormik.values.new_mpin_confirmation,
            credential_remarks: MpinFormik.values.credential_remarks
        })).then((res) => {
            getRemarks()
            Toast({
                status: 'success',
                title: 'Success',
                description: 'Your MPIN was changed succesfully.'
            })
        }).catch((err) => {
            Toast({
                status: 'error',
                title: 'Error Occured',
                description: err.message
            })
        })
    }

    return (
        <>
            <Layout pageTitle={'Reset MPIN'}>
                <VStack w={'full'} justifyContent={'center'}>
                    <Box
                        bg={'white'}
                        boxShadow={'md'}
                        p={6} w={['full', 'sm']}
                        rounded={16}
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Text fontSize={'lg'} mb={12}>Reset Your MPIN</Text>
                        <VStack spacing={6}>
                            <FormControl>
                                <FormLabel textAlign={'center'} fontSize={12}>Enter Old MPIN</FormLabel>
                                <HStack spacing={6} justifyContent={'center'}>
                                    <PinInput size={'sm'} otp onChange={(value) => MpinFormik.setFieldValue('old_mpin', value)}>
                                        <PinInputField bg={'aqua'} />
                                        <PinInputField bg={'aqua'} />
                                        <PinInputField bg={'aqua'} />
                                        <PinInputField bg={'aqua'} />
                                    </PinInput>
                                </HStack>
                            </FormControl>
                            <FormControl >
                                <FormLabel textAlign={'center'} fontSize={12}>Enter New MPIN</FormLabel>
                                <HStack spacing={6} justifyContent={'center'}>
                                    <PinInput size={'sm'} otp mask onChange={(value) => MpinFormik.setFieldValue('new_mpin', value)}>
                                        <PinInputField bg={'aqua'} />
                                        <PinInputField bg={'aqua'} />
                                        <PinInputField bg={'aqua'} />
                                        <PinInputField bg={'aqua'} />
                                    </PinInput>
                                </HStack>
                            </FormControl>
                            <FormControl >
                                <FormLabel textAlign={'center'} fontSize={12}>Verify New MPIN</FormLabel>
                                <HStack spacing={6} justifyContent={'center'}>
                                    <PinInput size={'sm'} otp onChange={(value) => MpinFormik.setFieldValue('new_mpin_confirmation', value)}>
                                        <PinInputField bg={'aqua'} />
                                        <PinInputField bg={'aqua'} />
                                        <PinInputField bg={'aqua'} />
                                        <PinInputField bg={'aqua'} />
                                    </PinInput>
                                </HStack>
                            </FormControl>
                            <FormControl >
                                <FormLabel textAlign={'center'} fontSize={12}>Remarks</FormLabel>
                                <HStack spacing={6} justifyContent={'center'}>
                                    <Input
                                        name='credential_remarks'
                                        onChange={MpinFormik.handleChange}
                                        bg={'aqua'}
                                    />
                                </HStack>
                            </FormControl>
                            <Button colorScheme={'twitter'} onClick={handleMpinReset}>Done</Button>
                        </VStack>
                    </Box>
                    <Box p={4} bg={'orange.400'} mt={16} w={['full', 'sm']}>
                        <Text
                            fontWeight={'semibold'}
                            color={'#FFF'}
                        >Last Remarks</Text>
                        <Text color={'#FFF'}>{lastRemarks}</Text>
                    </Box>
                </VStack>
            </Layout>
        </>
    )
}

export default ResetMpin