import Header from "./components/Header";
import{
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import HomeScreen from "./pages/homescreen";


function App() {
    return (<>
        <Router>
            <Routes>
                <Route path="/" element={HomeScreen}/>
            </Routes>
        </Router>
</>);}
  
  export default App;
  