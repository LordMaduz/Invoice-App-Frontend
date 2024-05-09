import React from 'react'
import { useTranslation } from 'react-i18next'
import {
   Button,
   Modal as CModal,
   ModalBody,
   ModalContent,
   ModalFooter,
   ModalOverlay,
   Text,
   useColorModeValue,
} from '@chakra-ui/react'

const Modal = ({ id, isOpen, onDelete, onClose }) => {
   const { t } = useTranslation()
   const colorLight = useColorModeValue('purpleBlackLight', '#fff')
   const colorDark = useColorModeValue('purpleBlackLight', 'greyLight')
   const bg = useColorModeValue('#fff', 'purpleBlackDark')

   return (
      <CModal
         closeOnOverlayClick={true}
         isOpen={isOpen}
         onClose={onClose}
         isCentered
         motionPreset="slideInBottom"
         size="xl"
      >
         <ModalOverlay />
         <ModalContent bg={bg} rounded={8} p={8}>
            <ModalBody pb={6}>
               <Text textStyle="h1" color={colorLight} mb={5}>
                  {t('common.confirmDelete')}
               </Text>
               <Text fontSize={22} textStyle="body" color={colorDark}>
                  {t('description.deleteInvoice', { id })}
               </Text>
            </ModalBody>

            <ModalFooter>
               <Button fontSize={20} variant="button3" onClick={onClose} mr={3}>
                  {t('common.cancel')}
               </Button>
               <Button fontSize={20} variant="button5" onClick={onDelete}>
                  {t('common.delete')}
               </Button>
            </ModalFooter>
         </ModalContent>
      </CModal>
   )
}

export default Modal
