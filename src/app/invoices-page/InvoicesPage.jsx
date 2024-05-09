import React from 'react'
import { Box, Center } from '@chakra-ui/react'

import { useDataContext } from 'context/context'

import InvoiceListActionHeader from './InvoiceListActionHeader'
import InvoiceList from './InvoiceList'

const InvoicesPage = () => {
   const { invoices } = useDataContext()

   return (
      <Center ml="100px">
         <Box overflowX="auto">
            <InvoiceListActionHeader invoices={invoices} />
            <InvoiceList invoices={invoices} />
         </Box>
      </Center>
   )
}

export default InvoicesPage
