import React, { useState } from "react";
import Layout from "../layout";
import {
  FormControl,
  FormLabel,
  Text,
  InputGroup,
  Input,
  InputRightAddon,
  Box,
  Stack, Button
} from "@chakra-ui/react";
import BackendAxios from "@/lib/utils/axios";
import Cookies from "js-cookie";
import { HStack } from "@chakra-ui/react";
import Link from "next/link";

const RetailerPanel = () => {
  const [userId, setUserId] = useState("");
  const [fetchedUser, setFetchedUser] = useState({
    id: "",
    user_name: "",
    firm_name: "",
    wallet: "",
    phone: "",
  });

  function verifyBeneficiary() {
    BackendAxios.post(`/api/admin/user/info/${userId}`)
      .then((res) => {
        setFetchedUser({
          ...fetchedUser,
          id: res.data?.data?.id,
          user_name:
            res.data?.data?.first_name + " " + res.data?.data?.last_name,
          firm_name: res.data?.data?.firm_name,
          phone: res.data?.data?.phone_number,
          wallet: res.data?.data?.wallet,
        });
        Cookies.set("viewUserId", res.data?.data?.id);
      })
      .catch((err) => {
        Toast({
          status: "error",
          description:
            err.response.data.message || err.response.data || "User not found!",
        });
        setFetchedUser({
          user_name: "",
          firm_name: "",
          wallet: "",
          phone: "",
        });
      });
  }
  return (
    <>
      <Layout pageTitle={"Retailer Panel"}>
        <Text>Type User ID to enter into their panel</Text>
        <br />
        <FormControl w={["full", "xs"]}>
          <FormLabel>User ID</FormLabel>
          <InputGroup>
            <Input
              name={"beneficiaryId"}
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder={"Enter User ID"}
            />
            <InputRightAddon
              children={"Verify"}
              cursor={"pointer"}
              onClick={() => verifyBeneficiary()}
            />
          </InputGroup>
        </FormControl>
        <br />
        <br />
        {fetchedUser.user_name ? (
          <>
            <Stack
              p={4}
              bg={"blue.50"}
              border={"1px"}
              borderColor={"blue.200"}
              rounded={16}
              direction={["column", "row"]}
              spacing={6}
              justifyContent={"space-between"}
              textTransform={"capitalize"}
            >
              <Box>
                <Text fontWeight={"medium"}>Beneficiary Name</Text>
                <Text>{fetchedUser.user_name}</Text>
              </Box>
              <Box>
                <Text fontWeight={"medium"}>Firm Name</Text>
                <Text>{fetchedUser.firm_name}</Text>
              </Box>
              <Box>
                <Text fontWeight={"medium"}>Current Balance</Text>
                <Text>₹ {fetchedUser.wallet}</Text>
              </Box>
              <Box>
                <Text fontWeight={"medium"}>Phone</Text>
                <Text>{fetchedUser.phone}</Text>
              </Box>
            </Stack>
            <HStack justifyContent={'flex-end'} mt={8}>
                <Link href={'/dashboard/retailer-panel/dashboard'} target="_blank">
                <Button colorScheme="twitter">View Panel</Button>
                </Link>
            </HStack>
          </>
        ) : null}
      </Layout>
    </>
  );
};

export default RetailerPanel;
