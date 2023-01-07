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
import StarredScreen from "./pages/starredscreen";
import RepositorieScreen from "./pages/repositoriesscreen";


function App() {
    return (<>
        <Router>
            <Routes>
                <Route path="/" element={<>
                    <Login/>
                </>}/>
                <Route path="/home" element={<>
                    <Header/>
                    <HomeScreen/>
                </>}/>
                <Route path="/following" element={<>
                    <Header/>
                    <FollowingScreen/>
                </>} />
                <Route path="/followers" element={<>
                    <Header/>
                    <FollowersScreen/>
                </>} />
                <Route path="/starreds" element={<>
                    <Header/>
                    <StarredScreen/>
                </>} />
                <Route path="repositories" element={<>
                    <Header/>
                    <RepositorieScreen/>
                </>} />
            </Routes>
        </Router>
</>);}
  
  export default App;
  