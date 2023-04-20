import React, { useState, useEffect } from 'react'
import Layout from './layout'
import {
    Box,
    Text,
    Switch,
    Input,
    Button,
    Flex,
    Image,
    HStack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useToast
} from '@chakra-ui/react'
import BackendAxios from '@/lib/utils/axios'

const ManageServices = () => {
    const [services, setServices] = useState([])
    const Toast = useToast({ position: 'top-right' })
    const [selectedService, setSelectedService] = useState({
        showModal: false,
        service_name: "",
        image_url: "",
        id: "",
        is_active: false,
        can_subscribe: false,
        down_message: "",
    })
    function fetchServices(){
        BackendAxios.get("/api/admin/services").then(res => {
            setServices(res.data)
        })
    }
    useEffect(() => {
        fetchServices()
    }, [])

    function updateServiceStatus() {
        BackendAxios.post("/api/admin/service-status", selectedService).then(res => {
            Toast({
                status: 'success',
                description: 'Service status updated'
            })
            fetchServices()
            setSelectedService({showModal: false})
        }).catch(err => {
            Toast({
                status: 'error',
                description: err.response.data.message || err.response.data || err.message
            })
        })
    }

    return (
        <>
            <Layout pageTitle={'Manage Services'}>

                <Box mt={12} mb={6}>
                    <Text pb={4}>Services Status</Text>
                    <Flex alignItems={'center'} direction={'row'} justifyContent={'flex-start'} gap={6}>
                        {services.map((service, key) => (
                            <Box
                                key={key} pos={'relative'}
                                p={4} w={'56'}
                                height={'72'}
                                rounded={8}
                                boxShadow={'lg'}
                                display={'flex'}
                                flexDir={'column'}
                                alignItems={'center'}
                                justifyContent={'space-between'}
                                onClick={() => setSelectedService({
                                    showModal: true,
                                    id: service.id,
                                    service_name: service.service_name,
                                    image_url: service.image_url,
                                    is_active: service.is_active,
                                    can_subscribe: service.can_subscribe,
                                    down_message: service.down_message
                                })}
                                paddingTop={12}
                            >
                                {
                                    service.is_active == 0 && <Text fontSize={10} pos={'absolute'} top={4} right={4} p={1} bg={'orange.500'} color={'white'}>INACTIVE</Text>
                                }
                                {
                                    service.can_subscribe == 0 && <Text fontSize={10} pos={'absolute'} top={4} right={4} p={1} bg={'red.500'} color={'white'}>DISABLED</Text>
                                }
                                <Image src={service.image_url} w={'80%'} mb={4} />
                                <Box>
                                    <Text textTransform={'capitalize'}>{service.service_name}</Text>
                                    <HStack justifyContent={'flex-start'} gap={2}>
                                        <Text fontSize={14} textAlign={'left'} fontWeight={'bold'}>Is Active</Text>
                                        <Text fontSize={14} textAlign={'left'}>{service.is_active === 1 ? "Yes" : "No"}</Text>
                                    </HStack>
                                    <HStack justifyContent={'flex-start'} gap={2}>
                                        <Text fontSize={14} textAlign={'left'} fontWeight={'bold'}>Can Subscribe</Text>
                                        <Text fontSize={14} textAlign={'left'}>{service.can_subscribe === 1 ? "Yes" : "No"}</Text>
                                    </HStack>
                                </Box>
                            </Box>
                        ))
                        }
                    </Flex>
                </Box>
            </Layout>

            <Modal isOpen={selectedService.showModal} onClose={() => setSelectedService({ showModal: false })}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        Edit Service Status
                    </ModalHeader>
                    <ModalBody>
                        <Text>Service Name</Text>
                        <Input value={selectedService.service_name} onChange={e => setSelectedService({ ...selectedService, service_name: e.target.value })} />
                        <br />
                        <HStack gap={4} mt={4}>
                            <Text>Is Active</Text>
                            <Switch defaultChecked={selectedService.is_active} onChange={e => setSelectedService({ ...selectedService, is_active: e.target.checked })}></Switch>
                        </HStack>
                        <br />
                        <HStack gap={4}>
                            <Text>Can User Subscribe</Text>
                            <Switch defaultChecked={selectedService.can_subscribe} onChange={e => setSelectedService({ ...selectedService, can_subscribe: e.target.checked })}></Switch>
                        </HStack>
                        <br />
                        <Text>Down Message</Text>
                        <Input value={selectedService.down_message} onChange={e => setSelectedService({ ...selectedService, down_message: e.target.value })} />
                    </ModalBody>
                    <ModalFooter>
                        <HStack justifyContent={'flex-end'}>
                            <Button colorScheme='twitter' onClick={updateServiceStatus}>Save</Button>
                        </HStack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ManageServices