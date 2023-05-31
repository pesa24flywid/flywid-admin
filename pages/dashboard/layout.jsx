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
    link: "/dashboard?pageid=dashboard",
    icon: <BsSpeedometer />
  },
  {
    type: "accordion",
    name: "users",
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
        link: "/dashboard/users/manage-user/edit-role-parent?pageId=users",
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
        status: true,
      },
      {
        title: "manage operator categories",
        link: "/dashboard/services/manage-categories?pageId=controls",
        status: true,
      },
      {
        title: "manage operators",
        link: "/dashboard/services/manage-operators?pageId=controls",
        status: true,
      },
      {
        title: "manage CMS billers",
        link: "/dashboard/services/manage-cms-billers?pageId=controls",
        status: true,
      },
    ]
  },
  {
    type: "accordion",
    name: "account",
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
    type: "link",
    id: "package",
    name: "commission package",
    icon: <FaPercentage />,
    link: "/dashboard/commission-package/?pageid=package",
  },
  {
    type: "accordion",
    name: "controls",
    icon: <AiFillApi />,
    children: [
      {
        title: "add new operator",
        link: "/dashboard/controls/add-operator?pageId=controls",
        status: false,
      },
      {
        title: "manage banks",
        link: "/dashboard/controls/manage-banks?pageId=controls",
        status: true,
      },
      {
        title: "preferences",
        link: "/dashboard/controls/preferences?pageId=controls",
        status: true,
      },
      {
        title: "manage notifications",
        link: "/dashboard/controls/notifications?pageId=controls",
        status: false,
      },
    ]
  },
  {
    type: "accordion",
    name: "whitelabel",
    icon: <IoIosFlash />,
    children: [
      {
        title: "all organisations",
        link: "/dashboard/organisation?pageId=whitelabel",
        status: true,
      },
      {
        title: "create whitelabel",
        link: "/dashboard/organisation/create?pageId=whitelabel",
        status: true,
      }
    ]
  },
  {
    type: "accordion",
    name: "reports",
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
    link: "/dashboard/support-tickets?pageid=support",
    icon: <IoMdHelpBuoy />,
  }
]



const Layout = (props) => {
  const Router = useRouter()
  const Toast = useToast({ position: 'top-right' })
  const { pageid } = Router.query
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

  useEffect(() => {
    const activePage = typeof window !== 'undefined' ? document.getElementById(pageid) : document.getElementById("dashboard")
    if (activePage) {
      activePage.style.background = "#3C79F5"
      activePage.style.color = "#FFF"
    }
  }, [])

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

  return (
    <>
      <Head><title>{`Pesa24 Admin | ${props.pageTitle || "No Title"}`}</title></Head>
      <HStack spacing={0} alignItems={'flex-start'}>

        {/* Sidebar */}
        <Show above='md'>
          <VStack
            flex={2}
            bg={'white'}
            h={'100vh'}
            overflowY={'scroll'}
          >
            <VStack py={8}>
              <Image src={profilePic || 'https://xsgames.co/randomusers/assets/avatars/male/8.jpg'} boxSize={24} rounded={'full'} />
              <Text fontSize={'xl'} color={'#444'} textTransform={'capitalize'}>{userName}</Text>
              <Text fontSize={'sm'} color={'#666'} textTransform={'capitalize'}>Pesa24 - {userType}</Text>
            </VStack>
            <VStack spacing={2} w={'full'}>
              {
                menuOptions.map((item, key) => {
                  if (item.type == "link")
                    return (
                      <Link
                        href={item.link} key={key}
                        style={{ width: '100%' }}
                        id={item.name}
                      >
                        <HStack
                          px={4} py={2} spacing={3}
                          w={'full'} _hover={{ bg: 'aqua' }}
                        >
                          {item.icon}
                          <Text fontWeight={600} textTransform={'capitalize'}>{item.name}</Text>
                        </HStack>
                      </Link>
                    )

                  if (item.type == "accordion")
                    return (
                      <Accordion w={'full'} mb={2} allowToggle>

                        <AccordionItem>
                          <AccordionButton>
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
            <HStack spacing={6}>
              <HStack spacing={2}>
                <Text fontSize={'xs'}>AePS</Text>
                <Switch
                  id={'aepsStatus'} isChecked={aepsStatus}
                  onChange={(e) => updateGlobal({ aeps_status: e.target.checked })} />
              </HStack>
              <HStack spacing={2}>
                <Text fontSize={'xs'}>DMT</Text>
                <Switch
                  id={'dmtStatus'} isChecked={dmtStatus}
                  onChange={(e) => updateGlobal({ dmt_status: e.target.checked })} />
              </HStack>
              <HStack spacing={2}>
                <Text fontSize={'xs'}>BBPS</Text>
                <Switch
                  id={'bbpsStatus'} isChecked={bbpsStatus}
                  onChange={(e) => updateGlobal({ bbps_status: e.target.checked })} />
              </HStack>
              <HStack spacing={2}>
                <Text fontSize={'xs'}>Recharge</Text>
                <Switch
                  id={'rechargeStatus'} isChecked={rechargeStatus}
                  onChange={(e) => updateGlobal({ recharge_status: e.target.checked })} />
              </HStack>
              <HStack
                p={2} bg={'#FFF'}
                rounded={'full'}
                boxShadow={'lg'}
                spacing={2} minW={128}
              >
                <Box p={2} bg={'yellow.400'} rounded={'full'} display={'grid'} placeContent={'center'}>
                  <BsWallet />
                </Box>
                <Box>
                  <Text fontSize={'10'} color={'#888'}>Wallet</Text>
                  <Text fontSize={14}>₹ {wallet}</Text>
                </Box>
              </HStack>
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
        size={'full'}
      >
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <HStack spacing={4}>
              <Image src='https://xsgames.co/randomusers/assets/avatars/male/8.jpg' boxSize={12} rounded={'full'} />
              <Box>
                <Text fontSize={'lg'}>{Cookies.get("userName")}</Text>
                <Text fontSize={'xs'}>Pesa24</Text>
              </Box>
            </HStack>
          </DrawerHeader>
          <DrawerBody>

          </DrawerBody>
          <DrawerFooter>

          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Layout