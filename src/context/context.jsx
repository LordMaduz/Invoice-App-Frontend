import { createContext, useContext } from 'react'

export const DataContext = createContext({
   invoices: [],
   isOpen: false,
   type: '',
   invoiceForEdit: null,
   status: '',
   saveInvoice: () => {
      throw new Error('setData() either not implemented or not used within DataProvider')
   },
   openCreateInvoice: () => {
      throw new Error('openCreateInvoice() either not implemented or not used within DataProvider')
   },
   openEditInvoice: () => {
      throw new Error('openEditInvoice() either not implemented or not used within DataProvider')
   },
   onClose: () => {
      throw new Error('onClose() either not implemented or not used within DataProvider')
   },
   onFilterStatus: () => {
      throw new Error('onFilterStatus() either not implemented or not used within DataProvider')
   },
   onMarkAsPaid: () => {
      throw new Error('onMarkAsPaid() either not implemented or not used within DataProvider')
   },
   onDelete: () => {
      throw new Error('onDelete() either not implemented or not used within DataProvider')
   },
   onEdit: () => {
      throw new Error('onEdit() either not implemented or not used within DataProvider')
   },
   saveEditedInvoice: () => {
      throw new Error('saveEditedInvoice() either not implemented or not used within DataProvider')
   },
   onSetStatus: () => {
      throw new Error('onSetStatus() either not implemented or not used within DataProvider')
   },
})

export const useDataContext = () => {
   return useContext(DataContext)
}
