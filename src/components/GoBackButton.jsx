import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { HStack, IconButton, Text } from '@chakra-ui/react'
import { FaChevronLeft } from 'react-icons/fa'

const GoBackButton = () => {
   const { t } = useTranslation()

   return (
      <Link to="/">
         <HStack>
            <IconButton bg="transparent" icon={<FaChevronLeft color="#7c5dfa" />} />
            <Text fontSize={22} textStyle="h3">{t('common.goBack')}</Text>
         </HStack>
      </Link>
   )
}

export default GoBackButton
