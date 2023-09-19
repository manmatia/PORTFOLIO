import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css'

AOS.init({
  duration: 2000, 
  easing: 'ease-in-out',
  once: false,
});

const theme=  createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#060F20',
      light: '#333369',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <CssBaseline/>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
