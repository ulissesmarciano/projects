import Header from "./components/Header";
import{
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import HomeScreen from "./pages/homescreen";
import Login from "./pages/loginscreen";
import FollowingScreen from "./pages/followingscreen";
import FollowersScreen from "./pages/followwerscreen";


function App() {
    return (<>
        <Header />
        <Router>
            <Routes>
                <Route path="/" element={<HomeScreen/>} />
                <Route path="/following" element={<FollowingScreen/>} />
                <Route path="/followers" element={<FollowersScreen/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </Router>
</>);}
  
  export default App;
  