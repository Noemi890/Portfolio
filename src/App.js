import React from "react";
import { useState } from "react";
import "./css/App.css";
import NavBar from "./components/NavBar";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {

  const [theme, setTheme] = useState('dark')

  const themeSelected = createTheme({
    palette: {
      mode: theme,
    },
  });

  const changeThemeOnClick = () => {
    if (theme === 'dark') {
      setTheme('light') 

      document.body.className = 'light'
    
    }

    else {
      setTheme('dark')

      document.body.className = 'dark'
    }
    
  }

  return (
    <ThemeProvider theme={themeSelected}>
      <CssBaseline />
    <div className="app">
      <NavBar theme={theme} changeThemeOnClick={changeThemeOnClick}/>
    </div>
    </ThemeProvider>
  );
}

export default App;
