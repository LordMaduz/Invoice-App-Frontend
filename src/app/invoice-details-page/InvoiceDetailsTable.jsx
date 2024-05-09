import React from 'react'
import { useTranslation } from 'react-i18next'
import {
   Box,
   Flex,
   Grid,
   GridItem,
   Highlight,
   Text,
   useColorModeValue,
   VStack,
} from '@chakra-ui/react'

const InvoiceDetailsTable = ({ invoice }) => {
   const colorLight = useColorModeValue('purpleBlackLight', '#fff')
   const colorDark = useColorModeValue('purpleBlackLight', 'greyLight')
   const bgLight = useColorModeValue('#fff', 'purpleBlackDark')
   const bgDark = useColorModeValue('greyLight', 'greyBlack')
   const { t } = useTranslation()

   const disabledPaid = Number(invoice.total) === 0

   return (
      <Box p={8} rounded={8} bg={bgLight} w="1200px" textStyle="body1">
         <Flex justify="space-between" color={colorDark}>
            <VStack align="start" spacing={6}>
               <Text textStyle="h1" color={colorLight}>
                  <Highlight query={['#']} styles={{ color: 'greyDark' }}>
                     {`# ${invoice.id}`}
                  </Highlight>
               </Text>
               <Text fontSize={22} textStyle="h4">{invoice.invoiceNumber}</Text>
            </VStack>
         </Flex>
         <Grid templateColumns="repeat(13, 1fr)" color={colorDark} my={8}>
            <GridItem colSpan={4}>
               <Flex flexDir="column" justify="space-between" h="100%">
                  <Box>
                     <Text fontSize={25} textStyle="h4">{t('paymentDate')}</Text>
                     <Text fontSize={22} textStyle="h3" color={colorLight} mt={4}>
                        {invoice.invoiceDate}
                     </Text>
                  </Box>
               </Flex>
            </GridItem>
            <GridItem colSpan={4}>
               <VStack align="left">
                  <Text fontSize={25} textStyle="h4">{t('billTo')}</Text>
                  <Text fontSize={22} textStyle="h3" color={colorLight} py={2}>
                     {invoice.customer.name}
                  </Text>
                  <Text fontSize={22} textStyle="h4">{invoice.customer.company}</Text>
                  <Text fontSize={22} textStyle="h4">{invoice.customer.country}</Text>
               </VStack>
            </GridItem>
            <GridItem colSpan={5}>
               <Text fontSize={25} textStyle="h4" color={colorLight}>{t('sentTo')}</Text>
               <Text fontSize={25} textStyle="h3" color={colorLight} mt={4}>
                  {invoice.email}
               </Text>
            </GridItem>
         </Grid>
         <Flex
            bg={bgDark}
            color={colorDark}
            border={disabledPaid ? '1px solid' : ''}
            borderColor="redDark"
            p={8}
            rounded="0 0 8px 8px"
            justify="space-between"
            align="center"
         >
            <Text fontSize={25} textStyle="h4">{t('amountDue')}</Text>
            <Text textStyle="h1" color={colorLight}>
               £ {invoice.amount}
            </Text>
         </Flex>
      </Box>
   )
}

export default InvoiceDetailsTable
