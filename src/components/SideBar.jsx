import React from 'react'
import { Flex, Divider, Avatar, Image } from '@chakra-ui/react'

import { R } from 'res/R'
import { ColorModeSwitcher } from 'components/ColorModeSwitcher'
import LanguageSwitcher from './LanguageSwitcher'

const SideBar = () => {
   return (
      <Flex
         pos="fixed"
         zIndex={2001}
         h="100vh"
         bg="purpleBlackDark"
         boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
         rounded="0 30px 30px 0"
         w={{ base: '60px', lg: '100px' }}
         flexDir="column"
         justifyContent="space-between"
      >
         <Flex
            h={{ base: '75px', lg: '100px' }}
            flexDir="column"
            alignItems="center"
            justify="center"
            bg="purpleLight"
            rounded="0 30px 30px 0"
         >
            <Image src={R.images.topLogo} w={{ base: 5, lg: 10 }} />
         </Flex>
         <Flex flexDir="column" alignItems="center">
            <LanguageSwitcher />
            <ColorModeSwitcher my={5} />
            <Divider color="greyBlue" />
            <Flex h="100px" flexDir="column" alignItems="center" justify="center">
               <Avatar size="sm" src={R.images.avatar} />
            </Flex>
         </Flex>
      </Flex>
   )
}

export default SideBar
