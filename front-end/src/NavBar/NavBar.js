import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { URL_GET_USER } from '../config';

const NavBar = () => {
  const [userGet, setUser] = useState([])
  const navigate = useNavigate()
  const handleClickDisconnect = () => {
    localStorage.clear()
    navigate('/')
  }
  const handleGetUser = (user) => {
    // axios.get(URL_GET_USER, user)
    //     .then( res => {
    //         const getUser = res.data
    //         console.log("getUser",getUser);
    //         setUser(getUser)
    //         navigate('/profil/' + '?' + userGet.id)
    //     })
    //     .catch("erreur lors du chargement d la page profil")
      navigate('/profil/' + '?' + user.id)
    
  }
    return (
      <nav>
        <div className="button-of-nav">
          <button className="my-profil" onClick={handleGetUser}>
            <i class="fas fa-user-circle"></i>
            Mon profil
          </button>
          <button to="/" className="disconnect-link" onClick={handleClickDisconnect}>
            <i class="fas fa-sign-out-alt"></i>
            Se déconnecter
          </button>
        </div>
      </nav>
    );
};

// faire en sorte que le token sois clean 

export default NavBar;