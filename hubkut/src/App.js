import Header from "./components/Header";
import{
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import HomeScreen from "./pages/homescreen";
import Login from "./pages/loginscreen";


function App() {
    return (<>
        <Router>
            <Routes>
                <Login path="/login" element={Login} />
                <Route path="/" element={HomeScreen}/>
            </Routes>
        </Router>
</>);}
  
  export default App;
  