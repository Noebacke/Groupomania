import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate()
  const handleClickDisconnect = () => {
    localStorage.clear()
    navigate('/')
  }
  const handleClickProfil = () => {
    const user_id = localStorage.getItem('user_Id')
    navigate('/profil/'+ user_id)
  }
    return (
      <nav>
        <div className="button-of-nav">
          <button className="my-profil" onClick={handleClickProfil}>
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