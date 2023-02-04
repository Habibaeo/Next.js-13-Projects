import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Icon,
  HStack,
} from "@chakra-ui/react";
import CheckIcon from "./Icon";

export default function Pricing() {
  return (
    <Box mx="6">
      <Box
        maxW="994px"
        margin="auto"
        mt="-144px"
        borderRadius="12px"
        overflow='hidden'
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      >
        <Flex direction={["column", "column", "row"]}>
          {/* Left Box */}
          <Box bg="#F0EAFB" p="60px" textAlign="center">
            <Text fontWeight="800px" fontSize="24px" color="#171923">
              Premium PRO
            </Text>
            <Heading fontWeight="800px" fontSize="60px" color="#171923">
              $329
            </Heading>
            <Text fontWeight="500px" fontSize="18px" color="#171923" mt="8px">
              billed just once
            </Text>
            <Button colorScheme="purple" size="lg" w="282px" mt="24px">
              Get Started
            </Button>
          </Box>

          {/* Right Box */}
          <Box p="60px" fontSize="18px" bg="white">
            <Text paddingLeft="20px" mt="20px" textAlign="left">
              Access these features when you get this pricing package for your
              business.
            </Text>
            <HStack
              as="li"
              spacing="20px"
              paddingLeft="20px"
              pt="24px"
              alignItems={"start"}
            >
              <CheckIcon />
              <Text>International calling and messaging API</Text>
            </HStack>
            <HStack
              as="li"
              spacing="20px"
              paddingLeft="20px"
              pt="20px"
              alignItems={"start"}
            >
              <CheckIcon />
              <Text>Additional phone numbers</Text>
            </HStack>
            <HStack
              as="li"
              spacing="20px"
              paddingLeft="20px"
              pt="20px"
              alignItems={"start"}
            >
              <CheckIcon />
              <Text>Automated messages via Zapier</Text>
            </HStack>
            <HStack
              as="li"
              spacing="20px"
              paddingLeft="20px"
              pt="20px"
              alignItems={"start"}
            >
              <CheckIcon />
              <Text>24/7 support and consulting</Text>
            </HStack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
