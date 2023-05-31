import React from 'react'
import Layout from '../layout'
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Select,
    Button,
    Text
} from '@chakra-ui/react'

const Index = () => {
    return (
        <>
            <Layout pageTitle={'All Whitelabel Organisations'}>
                <Box my={6} p={2} bg={'twitter.400'} color={'#FFF'}>
                    <Text>Your Whitelabel Organisations</Text>
                </Box>
                <Text>No Organisations To Show</Text>
            </Layout>
        </>
    )
}

export default Index