import React, { useEffect, useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'

import Invoice from 'models/Invoice'
import { invoiceService } from 'services/dataService'
import { paymentDueFormat } from 'utils/helpers'
import { CLEAR, CREATE, EDIT, PAID, PENDING } from 'utils/constants'

import { DataContext } from './context'

const DataProvider = ({ children }) => {
   const [data, setData] = useState([])
   const [reserveData, setReserveData] = useState([])
   const [invoiceForEdit, setInvoiceForEdit] = useState({})
   const [type, setType] = useState('')
   const [status, setStatus] = useState('')
   const { isOpen, onOpen, onClose } = useDisclosure()

   const saveDataToGlobal = data => {
      setData(data)
      setReserveData(data)
   }

   const saveDataAfterCreation = data => {
      setData([...reserveData, data])
      setReserveData([...reserveData, data])
   }

   const saveDataAfterEdit = data => {
      console.log(data)
      const updated = reserveData.map(item =>
         item.id === data.id
            ? new Invoice({
               ...data,
            })
            : item
      )
      saveDataToGlobal(updated);
   }

   const saveDataAfterDelete = data => {

      if (data.status === 200) {
         const filtered = reserveData.filter(invoice => invoice.id !== data.data)
         saveDataToGlobal(filtered);
      }
   }

   useEffect(() => {
      invoiceService.fetchInvoices(saveDataToGlobal)
   }, [])

   const openCreateInvoice = () => {
      setType(CREATE)
      onOpen()
   }

   const openEditInvoice = () => {
      setType(EDIT)
      onOpen()
   }

   const saveInvoice = async (invoice, status) => {
      onFilterStatus(CLEAR)

      const newInvoice = new Invoice({
         ...invoice,
         status,
      })

      await invoiceService.saveInvoice(saveDataAfterCreation, newInvoice);
   }

   const saveEditedInvoice = async (invoice) => {
      onFilterStatus(CLEAR)

      const updated =
         new Invoice({
            ...invoice,
            status: PENDING,
            invoiceDate: paymentDueFormat(invoice.invoiceDate),
         })

      await invoiceService.editInvoice(saveDataAfterEdit, updated);
   }

   const onFilterStatus = status => {
      setStatus(status)

      if (status === CLEAR) {
         setData(reserveData)
      } else {
         const filteredData = reserveData.filter(invoice => invoice.status === status)
         setData(filteredData)
      }
   }

   const onEdit = id => {
      const filtered = reserveData.find(invoice => invoice.id === id)
      setInvoiceForEdit(filtered)
   }

   const onMarkAsPaid = async (id) => {
      setStatus(CLEAR)

      const updated = reserveData.filter(invoice =>
         invoice.id === id && invoice.status === PENDING).map(invoice =>
            new Invoice({
               ...invoice,
               status: PAID,
            })
         );

      if (updated.length > 0) {
         await invoiceService.editInvoice(saveDataAfterEdit, updated[0]);
      }
   }

   const onDelete = async (id) => {
      setStatus(CLEAR)

      await invoiceService.deleteInvoice(saveDataAfterDelete, id);
   }

   const providerValues = {
      invoices: data,
      isOpen,
      type,
      invoiceForEdit,
      status,
      saveInvoice,
      openCreateInvoice,
      openEditInvoice,
      onClose,
      onFilterStatus,
      onMarkAsPaid,
      onDelete,
      onEdit,
      saveEditedInvoice,
      onSetStatus: setStatus,
   }

   return <DataContext.Provider value={providerValues}>{children}</DataContext.Provider>
}

export default DataProvider
