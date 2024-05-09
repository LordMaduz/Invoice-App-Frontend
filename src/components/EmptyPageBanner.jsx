import React from 'react'
import { useTranslation } from 'react-i18next'
import { Highlight, Text, useColorModeValue, VStack } from '@chakra-ui/react'


const EmptyPageBanner = () => {
   const { t } = useTranslation()
   const colorLight = useColorModeValue('purpleBlackLight', '#fff')
   const colorDark = useColorModeValue('purpleBlackLight', 'greyLight')

   return (
      <VStack width="400px" spacing={10} textAlign="center" mt={10}>
         <Text textStyle="h2" color={colorLight}>
            {t('description.nothingHere')}
         </Text>
         <Text color={colorDark}>
            <Highlight query={['New Invoice']} styles={{ fontWeight: '700', color: colorDark }}>
               {t('description.creteByClick')}
            </Highlight>
         </Text>
      </VStack>
   )
}

export default EmptyPageBanner
