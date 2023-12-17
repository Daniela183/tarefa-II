import React from 'react';
import { createTheme } from '@mui/material/styles';

import './App.css';



function App() {
    const theme = createTheme({
        palette: {
          primary: {
            main: '#FF5733',
            // light: will be calculated from palette.primary.main,
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
          }}}
)};

export default App;


