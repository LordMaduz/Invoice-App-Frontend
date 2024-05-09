import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
   Text,
   Highlight,
   useColorModeValue,
   IconButton,
   Grid,
   GridItem,
   Tooltip,
} from '@chakra-ui/react'
import { FaChevronRight } from 'react-icons/fa'

import StatusTag from './StatusTag'

const InvoiceCard = ({ invoice }) => {
   let navigate = useNavigate()
   const { id, amount, customer, invoiceDate, status } = invoice

   const color = useColorModeValue('purpleBlackLight', '#fff')
   const bg = useColorModeValue('#fff', 'purpleBlackLight')

   return (
      <Grid
         templateColumns="repeat(12, 1fr)"
         bg={bg}
         h="120px"
         w="1400px"
         px={8}
         py={5}
         alignItems="center"
         rounded={20}
         textStyle="body"
      >
         <GridItem colSpan={2}>
            <Text color={color} textStyle="h2" fontSize={25}>
               <Highlight query={['#']} styles={{ color: 'greyDark' }}>
                  {`# ${invoice.invoiceNumber}`}
               </Highlight>
            </Text>
         </GridItem>
         <GridItem colSpan={2} >
            <Text fontSize={20}>{invoiceDate}</Text>
         </GridItem>
         <GridItem colSpan={3}>
            <Text fontSize={20}>{customer.name}</Text>
         </GridItem>
         <GridItem colSpan={2}>
            <Text textStyle="h2" fontSize={23} color={color}>
               £ {amount}
            </Text>
         </GridItem>
         <GridItem colSpan={2}>
            <StatusTag status={status} />
         </GridItem>
         <GridItem colSpan={1} textAlign="end">
            <Tooltip label="View invoice details">
               <IconButton
                  bg="transparent"
                  icon={<FaChevronRight color="#7c5dfa" />}
                  onClick={() => navigate(`/invoice/${id}`)}
               />
            </Tooltip>
         </GridItem>
      </Grid>
   )
}

export default InvoiceCard
