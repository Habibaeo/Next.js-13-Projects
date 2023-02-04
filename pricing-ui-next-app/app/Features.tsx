import { Box,Flex, HStack ,Text} from '@chakra-ui/react'
import React from 'react'
import { MoneyBackIcon } from './Icon'
import { HasleFreeIcon } from './Icon'
import { PayOnceIcon } from './Icon'

export default function Features() {
  return (
    
    <Box maxW="1024px"
    margin="auto" fontSize="18px" pt='50px' 
    textAlign='left'  pl="20px" pb='32px' w='906px' p='48px' >
      <Flex direction={['column','column','row']}>
        <HStack mb='20px' >
        <MoneyBackIcon/>
        <Text fontWeight='700' textAlign={'left'}> 30 days money back Guarantee</Text>
        </HStack>
        <HStack mb='20px'>
        <HasleFreeIcon/>
        <Text fontWeight='700' textAlign={'left'}> No setup fees 100% hassle-free</Text>
        </HStack>
        <HStack mb='20px'>
        <PayOnceIcon/>
        <Text fontWeight='700' textAlign={'left'}>No monthly subscription Pay once and for all</Text>
        </HStack>
    
    </Flex>
    </Box>
    
  )
}
