import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Highlight, Text, useToast, VStack } from '@chakra-ui/react'
import { useForm, Controller } from 'react-hook-form'

import { useDataContext } from 'context/context'
import { successToastProps } from 'shared/toastConfig'
import Input from 'components/Input'
import InvoiceActionBar from 'components/InvoiceActionBar'

const EditInvoice = () => {
   const { onClose, invoiceForEdit, saveEditedInvoice } = useDataContext()
   const { t } = useTranslation()
   const [triggerSave, setTriggerSave] = useState(false)
   const toast = useToast()

   const {
      control,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm()



   useEffect(() => {
      reset({ ...invoiceForEdit })
   }, [invoiceForEdit, reset])

   const onSubmit = handleSubmit(values => {
      setTriggerSave(triggerSave => !triggerSave)
      saveEditedInvoice(values)
      onClose()
      toast({
         title: t('toast.invoiceCompleted'),
         ...successToastProps,
      })

   })

   const onCancel = () => {
      reset({ ...invoiceForEdit })
      onClose()
   }

   const rules = { required: true }

   return (
      <form onSubmit={onSubmit}>
         <VStack spacing={5} align="start" p="50px 40px 200px 160px">
            <Text fontSize={40} textStyle="h1">
               <Highlight query={['#']} styles={{ color: 'greyDark' }}>
                  {`Edit #${invoiceForEdit.id}`}
               </Highlight>
            </Text>
            <Text fontSize={30} textStyle="h3" color="purpleLight" pt={5}>
               {t('billTo')}
            </Text>
            <Text fontSize={20} textStyle="h4" pt={5}>
               {"Customer's Name"}
            </Text>
            <Controller
               name="customer.name"
               control={control}
               rules={rules}

               render={({ field }) => (
                  <Input size='lg' errors={errors?.customer?.name} {...field} />
               )}
            />
            <Text fontSize={20} textStyle="h4" pt={5}>
               {"Customer's Company"}
            </Text>
            <Controller
               name="customer.company"
               control={control}
               rules={rules}
               render={({ field }) => (
                  <Input size='lg' errors={errors?.customer?.company} {...field} />
               )}
            />
            <Text fontSize={20} textStyle="h4" pt={5}>
               {"Customer's Country"}
            </Text>
            <Controller
               name="customer.country"
               control={control}
               rules={rules}
               render={({ field }) => (
                  <Input size='lg' errors={errors?.customer?.country} {...field} />
               )}
            />
            <Text fontSize={20} textStyle="h4" pt={5}>
               {"Invoice Date"}
            </Text>
            <Controller
               name="invoiceDate"
               control={control}
               rules={rules}
               render={({ field }) => (
                  <Input
                     size='md'
                     type="date"
                     errors={errors?.invoiceDate}
                     {...field}
                  />
               )}
            />
            <Text fontSize={20} textStyle="h4" pt={5}>
               {"Email"}
            </Text>
            <Controller
               name="email"
               control={control}
               rules={rules}
               render={({ field }) => (
                  <Input
                     size='lg'
                     type="email"
                     errors={errors?.email}
                     {...field}
                  />
               )}
            />
            <Text fontSize={20} textStyle="h4" pt={5}>
               {"Amount"}
            </Text>
            <Controller
               name="amount"
               control={control}
               rules={rules}
               render={({ field }) => (
                  <Input
                     size='lg'
                     errors={errors?.amount}
                     {...field}
                  />
               )}
            />
         </VStack>

         <InvoiceActionBar>
            <Button fontSize={25} variant="button4" mr={3} type="reset" onClick={onCancel}>
               {t('common.cancel')}
            </Button>
            <Button
               fontSize={25}
               variant="primary"
               type="submit"
               onClick={() => setTriggerSave(trigger => !trigger)}
            >
               {t('common.saveChanges')}
            </Button>
         </InvoiceActionBar>
      </form>
   )
}

export default EditInvoice
