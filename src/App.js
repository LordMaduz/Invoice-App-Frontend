import '@fontsource/spartan'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ChakraProvider, Box } from '@chakra-ui/react'

import InvoiceDetailsPage from 'app/invoice-details-page/InvoiceDetailsPage'
import InvoicesPage from 'app/invoices-page/InvoicesPage'
import InvoiceForm from 'app/InvoiceForm'

import { myTheme } from './theme'

function App() {
   return (
      <Router>
         <ChakraProvider theme={myTheme}>
            <Box>
               <InvoiceForm />
               <Routes>
                  <Route path="/" element={<InvoicesPage />} />
                  <Route path="/invoice/:id" element={<InvoiceDetailsPage />} />
               </Routes>
            </Box>
         </ChakraProvider>
      </Router>
   )
}

export default App
