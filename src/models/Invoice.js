class Invoice {
   constructor({
      id,
      invoiceNumber,
      customer,
      email,
      invoiceDate,
      amount,
      status,
   }) {
      this.id = id
      this.invoiceNumber = invoiceNumber
      this.email = email
      this.invoiceDate = invoiceDate
      this.amount = amount
      this.status = status
      this.customer = {
         name: customer.name,
         company: customer.company,
         country: customer.country,
      }
   }
}

export default Invoice
