import React, { useEffect, useState, useLayoutEffect } from 'react'
import {
  HStack,
  VStack,
  Stack,
  Text,
  Box,
  Image,
  Button,
  Show,
  Switch,
  useDisclosure,
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerFooter,
  Accordion,
  AccordionIcon,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  useToast,
} from '@chakra-ui/react'
import Head from 'next/head'
import {
  BsPower,
  BsSpeedometer,
  BsBriefcaseFill,
  BsCoin,
  BsWallet,
} from 'react-icons/bs'
import {
  FaUser,
  FaPercentage,
  FaWrench,
} from 'react-icons/fa'
import {
  IoIosFlash,
  IoMdHelpBuoy,
} from 'react-icons/io'
import {
  AiFillApi
} from 'react-icons/ai'
import {
  HiOutlineMenuAlt1,
  HiUserGroup,
  HiDocumentReport,
} from 'react-icons/hi'
import BackendAxios, { ClientAxios } from "@/lib/utils/axios";
import Cookies from 'js-cookie'
var bcrypt = require('bcryptjs')
import { useRouter } from 'next/router'
import Link from 'next/link'

const menuOptions = [
  {
    type: "accordion",
    name: "profile",
    id: "profile",
    icon: <FaUser />,
    children: [
      {
        title: "view profile",
        link: "/dashboard/profile?pageid=profile",
        status: true
      },
      {
        title: "edit profile",
        link: "/dashboard/profile/edit?pageid=profile",
        status: true
      },
      {
        title: "reset mpin",
        link: "/dashboard/profile/reset-mpin?pageid=profile",
        status: true
      },
      {
        title: "reset password",
        link: "/dashboard/profile/reset-password?pageid=profile",
        status: true
      },
    ]
  },
  {
    type: "link",
    name: "dashboard",
    id: "dashboard",
    link: "/dashboard?pageid=dashboard",
    icon: <BsSpeedometer />
  },
  {
    type: "link",
    id: "package",
    name: "commission package",
    icon: <FaPercentage />,
    link: "/dashboard/commission-package/?pageid=package",
  },
  {
    type: "accordion",
    name: "users",
    id: "users",
    icon: <HiUserGroup />,
    children: [
      {
        title: "create user",
        link: "/dashboard/users/create-user?pageid=users",
        status: true,
      },
      {
        title: "users list",
        link: "/dashboard/users/users-list?pageid=users",
        status: true,
      },
      {
        title: "manage user",
        link: "/dashboard/users/manage-user?pageid=users",
        status: true,
      },
      {
        title: "manage role & parent",
        link: "/dashboard/users/manage-user/edit-role-parent?pageid=users",
        status: true,
      },
      {
        title: "manage admin",
        link: "/dashboard/users/create-admin?pageid=users",
        status: true,
      },
      {
        title: "settlement account",
        link: "/dashboard/users/settlement-accounts?pageid=users",
        status: true,
      },
    ]
  },
  {
    type: "accordion",
    name: "manage services",
    id: "services",
    icon: <BsBriefcaseFill />,
    children: [
      {
        title: "manage global services",
        link: "/dashboard/services/manage-services?pageid=services",
        status: true,
      },
      {
        title: "services status",
        link: "/dashboard/services/services-status?pageid=services",
        status: false,
      },
      {
        title: "manage operator categories",
        link: "/dashboard/services/manage-categories?pageid=services",
        status: true,
      },
      {
        title: "manage operators",
        link: "/dashboard/services/manage-operators?pageid=services",
        status: true,
      },
      {
        title: "manage CMS billers",
        link: "/dashboard/services/manage-cms-billers?pageid=services",
        status: true,
      },
    ]
  },
  {
    type: "accordion",
    name: "account",
    id: "account",
    icon: <BsCoin />,
    children: [
      {
        title: "fund transfer",
        link: "/dashboard/account/fund-transfer?pageid=account",
        status: true,
      },
      {
        title: "fund request",
        link: "/dashboard/account/fund-request?pageid=account",
        status: true,
      },
      {
        title: "add money",
        link: "/dashboard/account/add-money?pageid=account",
        status: true,
      },
      {
        title: "wallet balance",
        link: "/dashboard/account/wallet-balance?pageid=account",
        status: false,
      },
      {
        title: "wallet transactions",
        link: "/dashboard/account/wallet-transactions?pageid=account",
        status: false,
      },
      {
        title: "add bank",
        link: "/dashboard/account/add-bank?pageid=account",
        status: false,
      },
    ]
  },
  {
    type: "accordion",
    name: "controls",
    id: "controls",
    icon: <AiFillApi />,
    children: [
      {
        title: "add new operator",
        link: "/dashboard/controls/add-operator?pageid=controls",
        status: false,
      },
      {
        title: "manage banks",
        link: "/dashboard/controls/manage-banks?pageid=controls",
        status: true,
      },
      {
        title: "preferences",
        link: "/dashboard/controls/preferences?pageid=controls",
        status: true,
      },
      {
        title: "manage notifications",
        link: "/dashboard/controls/notifications?pageid=controls",
        status: false,
      },
    ]
  },
  {
    type: "accordion",
    name: "whitelabel",
    id: "whitelabel",
    icon: <IoIosFlash />,
    children: [
      {
        title: "all organisations",
        link: "/dashboard/organisation?pageid=whitelabel",
        status: true,
      },
      {
        title: "create whitelabel",
        link: "/dashboard/organisation/create?pageid=whitelabel",
        status: true,
      }
    ]
  },
  {
    type: "accordion",
    name: "reports",
    id: "reports",
    icon: <HiDocumentReport />,
    children: [
      {
        title: "aeps",
        link: "/dashboard/reports/aeps?pageid=reports",
        status: true,
      },
      {
        title: "bbps",
        link: "/dashboard/reports/bbps?pageid=reports",
        status: true,
      },
      {
        title: "dmt",
        link: "/dashboard/reports/dmt?pageid=reports",
        status: true,
      },
      {
        title: "recharge",
        link: "/dashboard/reports/recharge?pageid=reports",
        status: true,
      },
      {
        title: "matm",
        link: "/dashboard",
        status: false,
      },
      {
        title: "payout",
        link: "/dashboard/reports/payout?pageid=reports",
        status: true,
      },
      {
        title: "cms",
        link: "/dashboard/reports/cms?pageid=reports",
        status: true,
      },
      {
        title: "pg",
        link: "/dashboard",
        status: false,
      },
      {
        title: "qr code",
        link: "/dashboard",
        status: false,
      },
      {
        title: "virtual account",
        link: "/dashboard",
        status: false,
      },
      {
        title: "fund request",
        link: "/dashboard",
        status: true,
      },
      {
        title: "fund transfer",
        link: "/dashboard",
        status: true,
      },
      {
        title: "wallet transfer",
        link: "/dashboard",
        status: false,
      },
      {
        title: "lic report",
        link: "/dashboard",
        status: false,
      },
      {
        title: "fastag",
        link: "/dashboard",
        status: false,
      },
      {
        title: "axis account open",
        link: "/dashboard",
        status: false,
      },
      {
        title: "transaction ledger",
        link: "/dashboard/reports/transactions?pageid=reports",
        status: true,
      },
      {
        title: "daily sales",
        link: "/dashboard/reports/transactions/daily?pageid=reports",
        status: true,
      },
      {
        title: "live sales",
        link: "/dashboard/reports/transactions/live?pageid=reports",
        status: true,
      },
      {
        title: "user ledger",
        link: "/dashboard/reports/transactions/user-ledger?pageid=reports",
        status: true,
      },
      {
        title: "login report",
        link: "/dashboard/reports/logins?pageid=reports",
        status: true,
      },
    ]
  },
  {
    type: "link",
    name: "support tickets",
    id: "support",
    link: "/dashboard/support-tickets?pageid=support",
    icon: <IoMdHelpBuoy />,
  }
]



const Layout = (props) => {
  const Router = useRouter()
  const Toast = useToast({ position: 'top-right' })
  const { pageid } = Router.query
  const [activePage, setActivePage] = useState("dashboard")
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [wallet, setWallet] = useState("0")
  const [aepsStatus, setAepsStatus] = useState(true)
  const [bbpsStatus, setBbpsStatus] = useState(true)
  const [dmtStatus, setDmtStatus] = useState(true)
  const [rechargeStatus, setRechargeStatus] = useState(true)
  const [userName, setUserName] = useState("NA")
  const [userType, setUserType] = useState("NA")

  const [profilePic, setProfilePic] = useState("")

  function fetchServiceStatus() {
    ClientAxios.get("/api/global").then(res => {
      setAepsStatus(res.data.aeps_status)
      setBbpsStatus(res.data.bbps_status)
      setDmtStatus(res.data.dmt_status)
      setRechargeStatus(res.data.recharge_status)
    }).catch(err => {
      console.log(err.message)
    })
  }

  function fetchOrganisationServiceStatus() {
    ClientAxios.get("/api/global").then(res => {
      setAepsStatus(res.data.aeps_status)
      setBbpsStatus(res.data.bbps_status)
      setDmtStatus(res.data.dmt_status)
      setRechargeStatus(res.data.recharge_status)
    }).catch(err => {
      console.log(err.message)
    })
  }

  // useEffect(() => {
  //   if (Router.isReady && pageid) {
  //     if (document.getElementById(pageid)) {
  //       document.getElementById(pageid).style.backgroundColor = "#3C79F5"
  //       document.getElementById(pageid).style.color = "#FFF"
  //     }
  //   }
  // }, [Router.isReady])

  // Feeding all user details to the sidepanel
  useEffect(() => {
    setUserName(localStorage.getItem("userName"))
    setUserType(localStorage.getItem("userType"))
    setProfilePic(localStorage.getItem("profilePic"))
    fetchServiceStatus()
  }, [])


  useEffect(() => {
    let authentic = bcrypt.compareSync(`${localStorage.getItem("userId") + process.env.NEXT_PUBLIC_SALT + localStorage.getItem("userName")}`, Cookies.get("verified"))
    if (authentic != true) {
      BackendAxios.post("/logout").then(() => {
        Cookies.remove("verified")
      })
      setTimeout(() => Router.push("/"), 2000)
    }
  }, [])

  useEffect(() => {
    // Check wallet balance
    BackendAxios.post('/api/user/wallet').then((res) => {
      setWallet(res.data[0].wallet)
    }).catch((err) => {
      setWallet('0')
    })
  }, [])


  async function logout() {
    await BackendAxios.post("/logout").then(() => {
      Cookies.remove("verified")
    })
    setTimeout(() => Router.push("/"), 2000)
  }

  function updateGlobal(data) {
    ClientAxios.post('/api/global', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      fetchServiceStatus()
      Toast({
        position: 'top',
        status: 'success',
        title: 'Data updated globally'
      })
    }).catch(err => {
      Toast({
        status: 'error',
        title: 'Error while updating'
      })
    })
  }

  function updateOrganisation(data) {
    ClientAxios.post('/api/organisation', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      fetchOrganisationServiceStatus()
      Toast({
        position: 'top',
        status: 'success',
        title: 'Organisation Data updated'
      })
    }).catch(err => {
      Toast({
        status: 'error',
        title: 'Error while updating'
      })
    })
  }

  console.log(Router.asPath)

  return (
    <>
      <Head><title>{`Pesa24 Admin | ${props.pageTitle || "No Title"}`}</title></Head>
      <HStack spacing={0} alignItems={'flex-start'}>

        {/* Sidebar */}
        <Show above='md'>
          <VStack
            flex={2}
            bgImage={'/sidebarbg.svg'}
            bgSize={'cover'}
            bgRepeat={'no-repeat'}
            h={'100vh'}
            overflowY={'scroll'}
            paddingX={2}
            color={'#FFF'}
          >
            <VStack py={8}>
              <Image
                src={profilePic || 'https://xsgames.co/randomusers/assets/avatars/male/8.jpg'}
                boxSize={24} rounded={'full'} border={'2px'}
              />
              <Text fontSize={'xl'} color={'#FFF'} textTransform={'capitalize'}>{userName}</Text>
              <Text fontSize={'sm'} color={'#FAFAFA'} textTransform={'capitalize'}>Pesa24 - {userType}</Text>
            </VStack>
            <VStack spacing={2} w={'full'}>
              {
                menuOptions.map((item, key) => {
                  if (item.type == "link")
                    return (
                      <Link
                        href={item.link} key={key}
                        style={{
                          width: '100%',
                          borderRadius: '12px',
                        }}
                        id={item.id}
                      >
                        <HStack
                          px={4} py={2} spacing={3}
                          w={'full'} _hover={{ bg: 'rgba(0,0,0,.6)' }}
                          bg={Router.asPath.includes(`pageid=${item.id}`) ? 'twitter.600' : 'none'}
                          rounded={8} overflow={'hidden'}
                        >
                          {item.icon}
                          <Text fontWeight={600} textTransform={'capitalize'}>{item.name}</Text>
                        </HStack>
                      </Link>
                    )

                  if (item.type == "accordion")
                    return (
                      <Accordion w={'full'} mb={2} allowToggle>

                        <AccordionItem border={'none'}>
                          <AccordionButton id={item.id} bg={Router.asPath.includes(`pageid=${item.id}`) ? 'twitter.600' : 'none'} rounded={8}>
                            <HStack spacing={3} textAlign='left' w={'full'} alignItems={'center'}>
                              {item.icon}
                              <Text textTransform={'capitalize'} fontSize={'md'} fontWeight={'semibold'}>{item.name}</Text>
                            </HStack>
                            <AccordionIcon />
                          </AccordionButton>
                          <AccordionPanel pb={4}>
                            {
                              item.children.map((child, key) => {
                                if (child.status) {
                                  return (
                                    <Link href={child.link} style={{ width: "100%" }}>
                                      <Text
                                        fontSize={'md'}
                                        textTransform={'capitalize'}
                                        p={2}
                                      >
                                        {child.title}
                                      </Text>
                                    </Link>
                                  )
                                }
                              })
                            }
                          </AccordionPanel>
                        </AccordionItem>

                      </Accordion>
                    )

                })
              }
            </VStack>
            <Box w={'full'} p={4} pt={8}>
              <Button
                w={'full'} iconSpacing={4}
                leftIcon={<BsPower />}
                bg={'tomato'} boxShadow={'md'}
                justifyContent={'flex-start'}
                rounded={24} colorScheme={'red'}
                onClick={() => logout()}
              >
                Log Out
              </Button>
            </Box>
          </VStack>
        </Show>

        <Box flex={9} h={'100vh'} overflowY={'scroll'}>
          <Stack
            p={3} bg={'blue.50'} spacing={4}
            boxShadow={'md'} direction={['column', 'row']}
            justifyContent={['center', 'space-between']}>
            <HStack justifyContent={'space-between'}>
              <Show below='md'>
                <Button variant={'unstyled'} onClick={onOpen}>
                  <HiOutlineMenuAlt1 fontSize={20} />
                </Button>
              </Show>
              {/* <Image src='/logo_long.png' w={16} /> */}
              <Text fontSize={'lg'} fontWeight={'bold'}>Pesa24</Text>
            </HStack>
            <HStack spacing={6} justifyContent={['space-between']}>
              <Stack direction={['column', 'row']} spacing={2}>
                <Text fontSize={'xs'}>AePS</Text>
                <Switch
                  id={'aepsStatus'} isChecked={aepsStatus}
                  onChange={(e) => updateGlobal({ aeps_status: e.target.checked })} />
              </Stack>
              <Stack direction={['column', 'row']} spacing={2}>
                <Text fontSize={'xs'}>DMT</Text>
                <Switch
                  id={'dmtStatus'} isChecked={dmtStatus}
                  onChange={(e) => updateGlobal({ dmt_status: e.target.checked })} />
              </Stack>
              <Stack direction={['column', 'row']} spacing={2}>
                <Text fontSize={'xs'}>BBPS</Text>
                <Switch
                  id={'bbpsStatus'} isChecked={bbpsStatus}
                  onChange={(e) => updateGlobal({ bbps_status: e.target.checked })} />
              </Stack>
              <Stack direction={['column', 'row']} spacing={2}>
                <Text fontSize={'xs'}>Recharge</Text>
                <Switch
                  id={'rechargeStatus'} isChecked={rechargeStatus}
                  onChange={(e) => updateGlobal({ recharge_status: e.target.checked })} />
              </Stack>
              <Show above='md'>
                <HStack
                  p={2} bg={'#FFF'}
                  rounded={'full'}
                  boxShadow={'lg'}
                  spacing={2} minW={128}
                >
                  <Box p={2} bg={'blue.500'} rounded={'full'} display={'grid'} placeContent={'center'}>
                    <BsWallet color='#FFF' />
                  </Box>
                  <Box>
                    <Text fontSize={'10'} color={'#888'}>Wallet</Text>
                    <Text fontSize={14}>₹ {wallet}</Text>
                  </Box>
                </HStack>
              </Show>
            </HStack>

          </Stack>
          <Box
            p={4} minH={'full'}
            bg={'azure'} w={'full'}
          >
            {props.children}
          </Box>
        </Box>
      </HStack>


      {/* Mobile Menu Drawer */}
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement={'left'}
        size={'xs'}
      >
        <DrawerContent
          bgImage={'/sidebarbg.svg'}
          bgSize={'cover'}
          bgRepeat={'no-repeat'}
          color={'#FFF'}
        >
          <DrawerHeader>
            <HStack spacing={4}>
              <Image src={profilePic || 'https://xsgames.co/randomusers/assets/avatars/male/8.jpg'} boxSize={12} rounded={'full'} />
              <Box>
                <Text fontSize={'lg'}>{Cookies.get("userName")}</Text>
                <Text fontSize={'xs'}>{process.env.NEXT_PUBLIC_ORGANISATION}</Text>
              </Box>
            </HStack>
            <DrawerCloseButton color={'#FFF'} />
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={2} w={'full'}>
              {
                menuOptions.map((item, key) => {
                  if (item.type == "link")
                    return (
                      <Link
                        href={item.link} key={key}
                        style={{
                          width: '100%',
                          borderRadius: '12px',
                        }}
                        id={item.id}
                      >
                        <HStack
                          px={4} py={2} spacing={3}
                          w={'full'} _hover={{ bg: 'rgba(0,0,0,.6)' }}
                          bg={Router.asPath.includes(`pageid=${item.id}`) ? 'twitter.600' : 'none'}
                          rounded={8} overflow={'hidden'}
                        >
                          {item.icon}
                          <Text fontWeight={600} textTransform={'capitalize'}>{item.name}</Text>
                        </HStack>
                      </Link>
                    )

                  if (item.type == "accordion")
                    return (
                      <Accordion w={'full'} mb={2} allowToggle>

                        <AccordionItem border={'none'}>
                          <AccordionButton id={item.id} bg={Router.asPath.includes(`pageid=${item.id}`) ? 'twitter.600' : 'none'} rounded={8}>
                            <HStack spacing={3} textAlign='left' w={'full'} alignItems={'center'}>
                              {item.icon}
                              <Text textTransform={'capitalize'} fontSize={'md'} fontWeight={'semibold'}>{item.name}</Text>
                            </HStack>
                            <AccordionIcon />
                          </AccordionButton>
                          <AccordionPanel pb={4}>
                            {
                              item.children.map((child, key) => {
                                if (child.status) {
                                  return (
                                    <Link href={child.link} style={{ width: "100%" }}>
                                      <Text
                                        fontSize={'md'}
                                        textTransform={'capitalize'}
                                        p={2}
                                      >
                                        {child.title}
                                      </Text>
                                    </Link>
                                  )
                                }
                              })
                            }
                          </AccordionPanel>
                        </AccordionItem>

                      </Accordion>
                    )

                })
              }
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <Box w={'full'} p={4} pt={8}>
              <Button
                w={'full'} iconSpacing={4}
                leftIcon={<BsPower />}
                bg={'tomato'} boxShadow={'md'}
                justifyContent={'flex-start'}
                rounded={24} colorScheme={'red'}
                onClick={() => logout()}
              >
                Log Out
              </Button>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Layout