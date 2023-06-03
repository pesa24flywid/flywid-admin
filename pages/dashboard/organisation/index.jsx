import React, { useEffect, useState } from 'react'
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
                <Box my={6} p={3} bg={'twitter.500'} color={'#FFF'} roundedTop={16}>
                    <Text>Your Whitelabel Organisations</Text>
                </Box>
                <Box p={4}>
                    <Text>No Organisations To Show</Text>
                </Box>
            </Layout>
        </>
    )
}

export default Index