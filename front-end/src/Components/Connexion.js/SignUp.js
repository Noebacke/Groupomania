import {useNavigate} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import userApi from '../../services/userApi';
import { URL_SIGNUP } from '../../config';



const SignUp = () => {

  const [newUser, setNewUser] = useState({
    email: "",
    user_name: "",
    password: "",
    
  });
  const [verifyPassword, setverifyPassword] = useState({
    password2:""
  })
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();


  const handleChangeEmail = (event) => {
    const currentTarget = event.currentTarget;
    const { value } = currentTarget;
    console.log("value email", value);
    setNewUser({
      ...newUser,
      email: value,
    });
  };

  const handleChangeUserName = (event) => {
    const currentTarget = event.currentTarget;
    const { value } = currentTarget;
    console.log("value user name", value);
    setNewUser({
      ...newUser,
      user_name: value,
    });
  };

  const handleChangePassword = (event) => {
      const currentTarget = event.currentTarget;
      const {value} = currentTarget;
      console.log("password1", value);
      setNewUser({
        ...newUser,
        password: value,
      });
  };

  const handleChangePassword2 = (event) => {
      const currentTarget = event.currentTarget;
      const {value} = currentTarget;
      console.log("password2", value);
      setverifyPassword({
        ...verifyPassword,
        password2: value,
      });
  };

  const handleSubmit = async (event) => {

    event.preventDefault();
    console.log(newUser);
    if(verifyPassword.password2 != newUser.password){
      alert("Les mots de passe saisis ne sont pas similaires");
    }else{
      try {
        await userApi.create(newUser);
        alert('utilisateur crée')
        navigate("/getallpost", { replace: true });
        
      } catch (error) {
        console.log( "L'utilisateur n'a pas pu être crée");
      }
    }
    
  };
  const handleSubmitBack = async ()=>{
    navigate('/')
  }
  return (
    <div>
      <button className='back' onClick={handleSubmitBack}>Retour au menu</button>
      <form className="form-conteneur">
        <div>
          <h2>Créez votre compte</h2>
        </div>
        <label className="label-create-profil">
          Email :
          <br />
          <input required onChange={handleChangeEmail} />
        </label>
        <label className="label-create-profil">
          Votre nom d'utilisateur :
          <br />
          <input required onChange={handleChangeUserName} />
        </label>
        <label className="label-create-profil">
          Votre mot de passe :
          <br />
          <input type="password" required onChange={handleChangePassword} />
        </label>
        <label className="label-create-profil">
          Confirmez votre mot de passe :
          <br />
          <input type="password" required onChange={handleChangePassword2} />
        </label>
        <button className="button-connexion" onClick={handleSubmit} ariaCreteProfil='button-create-profil'>
          Créer mon compte
        </button>
      </form>
    </div>
  );
};

export default SignUp;