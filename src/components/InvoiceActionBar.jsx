import React from 'react'
import { Flex, useColorModeValue } from '@chakra-ui/react'

const InvoiceActionBar = ({ children }) => {
   const bg = useColorModeValue('bgLight', 'bgDark')
   const shadow = useColorModeValue('#f2f2f2', '#0e0e18')

   return (
      <Flex
         w="50vw"
         h="120px"
         pos="fixed"
         align="center"
         p="0 60px 0 160px"
         justify={'end'}
         bg={bg}
         bottom={0}
         boxShadow={`-15px -20px 20px 5px ${shadow}`}
         rounded="0 30px 0 0"
      >
         {children}
      </Flex>
   )
}

export default InvoiceActionBar
