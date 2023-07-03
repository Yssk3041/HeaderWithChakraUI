import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme/index';

ReactDOM.createRoot(document.getElementById('root')).render(
   <ChakraProvider theme={theme}>
      <React.StrictMode>
        <App />
  |   </React.StrictMode>
  </ChakraProvider>,
)
