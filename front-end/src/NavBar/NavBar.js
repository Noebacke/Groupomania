import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { URL_GET_USER } from '../config';

const NavBar = () => {
  
  const [user, setUser] = useState([])
  const navigate = useNavigate()

  useEffect( () => {
    axios.get(URL_GET_USER)
    .then( res => {
        const profil = res.data
        console.log(profil);
        setUser(profil)
        
    })
    .catch( "Une erreur est survenue lors du chargement de la page")
  }, []);
  const handleClickDisconnect = () => {
    localStorage.clear()
    navigate('/')
  }
  const handleGetUser = () => {
      navigate('/profil/' + '?' + user.id)
  }
    return (
      <nav>
        <div className="nav-bar">
          <img src="./img/Groupomania.png" className="goupomania-logo"></img>
          <div className="button-of-nav">
            <button className="my-profil" onClick={handleGetUser}>
              <i class="fas fa-user-circle"></i>
              Mon profil
            </button>
            <button
              to="/"
              className="disconnect-link"
              onClick={handleClickDisconnect}
            >
              <i class="fas fa-sign-out-alt"></i>
              Se déconnecter
            </button>
          </div>
        </div>
      </nav>
    );
};

// faire en sorte que le token sois clean 

export default NavBar;