import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';

import { Container } from './styles';
import { GlobalStyles } from './styles/global';
import LoginScreen from './pages/loginscreen';
import Header from './components/Header';

function App() {
  const [theme, setTheme] = useState('dark')
   

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider  theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <Header
          variant={theme === 'dark' ? 'primary' : !'primary'} 
          closeIconVariant={theme === 'dark' ? 'primary' : !'primary'}
          headerVariant={theme === 'dark' ? 'primary' : ! 'primary'} 
          onChange={themeToggler}
          />
        <LoginScreen/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
