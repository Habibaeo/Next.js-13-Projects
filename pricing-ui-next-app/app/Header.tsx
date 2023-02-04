import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return(
    <Box as="section" textAlign={["left","left","center"]} 
    color=" #F7FAFC" bg="#6B46C1" pt="90px" pb="198px" px='32px'>
      <Heading fontWeight="extrabold" fontSize={["3xl","3xl","5xl"]} >
        Simple pricing for your business
      </Heading>
      <Text fontWeight="medium" fontSize={["lg","lg","2xl"]} pt ='4'>
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
    
  );
}
 