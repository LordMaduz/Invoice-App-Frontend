import AppError from 'models/AppError'
import Invoice from 'models/Invoice'
import axios from "axios";

class InvoiceService {
   url = {
      invoices: 'data.json',
   }

   async fetchInvoices(callback) {
      try {
         const response = await axios(`http://localhost:8080/invoices`, {
            method: 'GET'
         })

         const data = response.data
         const mapped = data.map(invoice => new Invoice(invoice))

         callback(mapped)
      } catch (error) {
         console.log(error);
      }
   }

   async saveInvoice(callback, invoice) {
      try {
         const response = await axios(`http://localhost:8080/invoices`, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
               'Access-Control-Allow-Origin': '*',
               'Content-Type': 'application/json',
            },
            withCredentials: false,
            credentials: 'same-origin',
            data: invoice,
            json: true,
         })

         const data = response.data
         const mapped = new Invoice(data);
         callback(mapped)
      } catch (error) {
         console.log(error);
      }
   }

   async editInvoice(callback, invoice) {
      try {
         const response = await axios(`http://localhost:8080/invoices/${invoice.id}`, {
            method: 'PUT',
            mode: 'no-cors',
            headers: {
               'Access-Control-Allow-Origin': '*',
               'Content-Type': 'application/json',
            },
            withCredentials: false,
            credentials: 'same-origin',
            data: invoice,
            json: true,
         })

         const data = response.data
         const mapped = new Invoice(data);
         callback(mapped)
      } catch (error) {
         console.log(error);
      }
   }

   async deleteInvoice(callback, id) {
      try {
         const response = await axios(`http://localhost:8080/invoices/${id}`, {
            method: 'DELETE',
            mode: 'no-cors',
            headers: {
               'Access-Control-Allow-Origin': '*',
               'Content-Type': 'application/json',
            },
            withCredentials: false,
            credentials: 'same-origin',
         })

         callback(response)
      } catch (error) {
         console.log(error);
      }
   }

}

export const invoiceService = new InvoiceService()
