import React from 'react'
import {
    Box,
    Text
} from '@chakra-ui/react'

const SearchBox = (props) => {
    return (
        <>
            <Box w={'full'} my={6}>
                <Box p={3} bg={'twitter.500'} color={'white'}>
                    <Text>{props.searchTitle}</Text>
                </Box>
                <Box p={4}>
                    {props.children}
                </Box>
            </Box>
        </>
    )
}

export default SearchBox