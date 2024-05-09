import React, { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { ColorModeScript } from '@chakra-ui/react'
import DataProvider from 'context/provider'
import App from './App'
import './labels/config'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
   <StrictMode>
      <ColorModeScript />
      <DataProvider>
         <App />
      </DataProvider>
   </StrictMode>
)
