import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react'

import { DRAFT, PAID, PENDING } from 'utils/constants'
import StatusTag from 'components/StatusTag'

const InvoiceDetailsActionHeader = ({ invoice, editInvoice, markAsPaid, onOpen }) => {
   const { t } = useTranslation()
   const colorDark = useColorModeValue('purpleBlackLight', 'greyLight')
   const bgLight = useColorModeValue('#fff', 'purpleBlackDark')

   const disabledEdit = invoice.status === PENDING || invoice.status === PAID
   const disabledMarkAsPaid = invoice.status === DRAFT || invoice.status === PAID

   const disabledPaid = Number(invoice.total) === 0

   return (
      <Flex
         my={5}
         px={8}
         py={6}
         w="1200px"
         bg={bgLight}
         rounded={8}
         justify="space-between"
         textStyle="body1"
      >
         <HStack spacing={3}>
            <Text fontSize={20} color={colorDark}>{t('common.status')}</Text>
            <StatusTag status={invoice.status} />
         </HStack>
         <HStack>
            <Button fontSize={22} height={70} variant="button3" onClick={editInvoice} isDisabled={disabledEdit}>
               {t('common.edit')}
            </Button>
            <Button fontSize={22} height={70} variant="button5" onClick={onOpen}>
               {t('common.delete')}
            </Button>
            <Button fontSize={22} height={70} onClick={markAsPaid} isDisabled={disabledMarkAsPaid || disabledPaid}>
               {t('common.markAsPaid')}
            </Button>
         </HStack>
      </Flex>
   )
}

export default InvoiceDetailsActionHeader
