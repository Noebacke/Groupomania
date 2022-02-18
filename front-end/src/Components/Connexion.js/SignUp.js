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
    password1: "",
    password2:""
  })
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(newUser);
    Axios.post(URL_SIGNUP, newUser).then((res) => {
      const user = res.data;
      setUsers(user);
    });
  }, []);

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

  const handleChangePassword1 = (event) => {
      const currentTarget = event.currentTarget;
      const {value} = currentTarget;
      setverifyPassword({
        ...verifyPassword,
        password1: value,
      });
  };

  const handleChangePassword2 = (event) => {
      const currentTarget = event.currentTarget;
      const {value} = currentTarget;
      setverifyPassword({
        ...verifyPassword,
        password2: value,
      });
  };

  const handleSubmit = async (event) => {

    event.preventDefault();
    console.log(newUser);
    if(verifyPassword.password1===verifyPassword.password2){
      setNewUser({
        ...newUser,
        password: verifyPassword.password1,
      })
    }else{
      console.error("Les mots de passe saisis ne sont pas similaires");
    }
    try {
      await userApi.create(newUser);
      navigate("/getallpost", { replace: true });
    } catch (error) {
      console.log( "L'utilisateur n'a pas pu être crée");
    }
  };

  return (
    <div>
      <form className="form-conteneur">
        <div>
          <h2>Créez votre compte</h2>
        </div>
        <p>
          Email :
          <br />
          <input required onChange={handleChangeEmail} />
        </p>
        <p>
          Votre nom d'utilisateur :
          <br />
          <input required onChange={handleChangeUserName} />
        </p>
        <p>
          Votre mot de passe :
          <br />
          <input type="password" required onChange={handleChangePassword1} />
        </p>
        <p>
          Confirmez votre mot de passe :
          <br />
          <input type="password" required onChange={handleChangePassword2} />
        </p>
        <button className="button-connexion" onClick={handleSubmit}>
          Créer mon compte
        </button>
      </form>
    </div>
  );
};

export default SignUp;