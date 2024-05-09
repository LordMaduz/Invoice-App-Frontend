import React from 'react'
import { useTranslation } from 'react-i18next'
import { Grid, GridItem, Text } from '@chakra-ui/react'

const FieldItemLabels = () => {
   const { t } = useTranslation()

   return (
      <Grid templateColumns="repeat(12, 1fr)" gap={2} w="100%">
         <GridItem colSpan={4}>
            <Text textStyle="body1">{t('itemName')}</Text>
         </GridItem>
         <GridItem colSpan={1}>
            <Text textStyle="body1">{t('qty')}</Text>
         </GridItem>
         <GridItem colSpan={3}>
            <Text textStyle="body1">{t('price')}</Text>
         </GridItem>
         <GridItem colSpan={3}>
            <Text textStyle="body1">{t('total')}</Text>
         </GridItem>
      </Grid>
   )
}

export default FieldItemLabels
