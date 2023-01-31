import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { darkTheme, lightTheme } from './styles/theme';
import { Container } from './styles';
import { GlobalStyles } from './styles/global';

import Header from './components/Header';

import GreetingScreen from './pages/greetingscreen';
import LogonScreen from './pages/logonscreen';

function App() {
  const [theme, setTheme] = useState('dark')

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  

  return (
    <ThemeProvider  theme={theme === 'light' ? lightTheme : darkTheme}>
      <Header
        variant={theme === 'dark' ? 'primary' : !'primary'} 
        closeIconVariant={theme === 'dark' ? 'primary' : !'primary'}
        headerVariant={theme === 'dark' ? 'primary' : ! 'primary'} 
        onChange={themeToggler}
      />
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path='/' element={<GreetingScreen 
            greetingScreenVariant={theme === 'dark' ? 'primary' : !'primary'}
            scrollbarVariant={theme === 'dark' ? 'primary' : !'primary'}
            projectItemVariant={theme === 'dark' ? 'primary' : !'primary'}
            backgroundVariant={theme === 'dark' ? 'primary' : !'primary'}
            />}
          />
          <Route path='/logon' element={<LogonScreen/>}/>
        </Routes>
      </Router>
      <Container>
      </Container>
    </ThemeProvider>
  );
}

export default App;
