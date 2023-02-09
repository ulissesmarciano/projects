import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import HomeScreen from './pages/home-screen'
import LogonScreen from './pages/logon-screen';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeScreen/>} />
        <Route path='/logon' element={<LogonScreen/>} />
      </Routes>
    </Router>
  );
}

export default App;
