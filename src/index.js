import { ColorModeScript,ChakraProvider,extendTheme,base } from '@chakra-ui/react';
import { SaasProvider,ModalsProvider,baseTheme } from '@saas-ui/react'
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({ config },baseTheme)

root.render(
  <StrictMode>
    <ColorModeScript initialColorMode='dark'/>
    <ChakraProvider theme={theme}>
     
      <ModalsProvider>
           <App />
       </ModalsProvider>
    
   </ChakraProvider>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
