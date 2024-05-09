import React from 'react'
import { Box, Modal, ModalOverlay, useColorModeValue } from '@chakra-ui/react'

import { useDataContext } from 'context/context'
import { CREATE } from 'utils/constants'

import CreateInvoice from './CreateInvoice'
import EditInvoice from './EditInvoice'

const InvoiceForm = () => {
   const { isOpen, type, onClose } = useDataContext()

   const bg = useColorModeValue('bgLight', 'bgDark')

   const isCreate = type === CREATE

   return (
      <Box display={isOpen ? 'flex' : 'none'}>
         <Box pos="fixed" h="100vh" w="50vw" bg={bg} overflow="scroll" zIndex={2000}>
            {isCreate ? <CreateInvoice /> : <EditInvoice />}
         </Box>
         <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay w="100vw" />
         </Modal>
      </Box>
   )
}

export default InvoiceForm
