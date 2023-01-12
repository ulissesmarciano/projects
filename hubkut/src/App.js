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
import PerfilScreen from "./pages/perfilscreen";


function App() {
    return (<>
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/home/:user" element={<HomeScreen/>}/>
                <Route path="/perfil/:user" element={<PerfilScreen/>}/>
                <Route path="/following/:user" element={<FollowingScreen/>} />
                <Route path="/followers/:user" element={<FollowersScreen/>} />
                <Route path="/starreds/:user" element={<StarredScreen/>} />
                <Route path="/repositories/:user" element={<RepositorieScreen/>} />
            </Routes>
        </Router>
</>);}
  
  export default App;
  