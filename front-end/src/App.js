import './style/index.scss';
import { Routes, Route} from 'react-router-dom';
import Profil from './Components/Profil/Profil';
import LogIn from './Components/Connexion.js/LogIn';
import SignUp from './Components/Connexion.js/SignUp';
import GetAllPost from './Components/Posts/GetAllPost';
import CreatePost from './Components/Posts/CreatePost';
import UpdatePost from './Components/Posts/UpdatePost';
import GetOnePost from './Components/Posts/GetOnePost';
import ProtectedRoute from './services/ProtectedRoute';
import ProtectedRouteFrom from './services/ProtectedRouteForm';
import CreateComment from './Components/Comments/CreateComment';


const App = () => {


  return (
    <div className="App">
      <Routes>
        <Route element={<ProtectedRouteFrom/>}>
          <Route path="/" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/profil/*" element={<Profil />} />
          <Route path="/getallpost" element={<GetAllPost />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/updatepost/*" element={<UpdatePost />} />
          <Route path="/getonepost/*" element={<GetOnePost />} />
          <Route path='/createcomments' element={<CreateComment/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
 