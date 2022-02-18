import React, { useState } from 'react';
import authApi from '../../services/authApi';
import {Link,  Outlet,  useNavigate,} from 'react-router-dom'
import axios from "axios";


const LogIn = () => {
    
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        email:"",
        password:""
    })

    const handleChangeEmail = (event) => {
        const {value} = event.currentTarget
        setCredentials({
            ...credentials,
            email:value
        })
    }

    const handleChangePassword = (event) => {
        const {value} = event.currentTarget
        setCredentials({
            ...credentials,
            password:value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const result = await authApi.authenticate(credentials);
            console.log("token",result);
            if (result.token){
                
                navigate('/getallpost')
            }
        }
        catch(error){
            console.log(error, "Mot de passe incorrect ou compte non enregistré !");
        }
        
    }

    return (
        <div>
            <form className='form-conteneur'>
                <div>
                    <h1 className='title-connexion'>
                        Bienvenue sur Groupomania
                    </h1>
                </div>
                <p>
                    <p>
                        Email :
                        <br/>
                        <input name='email'onChange={handleChangeEmail}/>
                    </p>
                    <p>
                        Votre mot de passe :
                        <br />
                        <input type="password" onChange={handleChangePassword}/>
                    </p>
                </p>
                <button className='button-connexion' onClick={handleSubmit}>Me connecter</button>
                <br/>
                <Link to="/signup"className='a-connexion'>
                    Vous n'avez pas encore de compte ? Créez en un ici
                </Link>
            </form> 
        </div>
    );
};

export default LogIn;