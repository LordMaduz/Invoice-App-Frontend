import React from 'react'
import { VStack } from '@chakra-ui/react'

import EmptyPageBanner from 'components/EmptyPageBanner'
import InvoiceCard from 'components/InvoiceCard'

const InvoiceList = ({ invoices }) => {
   return (
      <VStack spacing={4} mb={14}>
         {invoices.length > 0 ? (
            invoices.map((invoice, i) => (
               <InvoiceCard invoice={invoice} key={`${invoice.id}_${i}`} />
            ))
         ) : (
            <EmptyPageBanner />
         )}
      </VStack>
   )
}

export default InvoiceList
