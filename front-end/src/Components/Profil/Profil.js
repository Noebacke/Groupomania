import { useParams } from 'react-router-dom';
import { URL_GET_USER } from '../../config';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import UpdateProfilName from '../Profil/UpdateProfilName';
import UpdateProfilPassword from './UpdateProfilPassword';
import UpdateProfilEmail from './UpdateProfilEmail';
import userApi from '../../services/userApi';

const Profile = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState([])
    const [email, setEmail] = useState(false)
    const [userName, setUserName] = useState(false)
    const [password, setPassword] = useState(false)
    
    useEffect( () => {
        axios.get(URL_GET_USER)
        .then( res => {
            const profil = res.data
            console.log(profil);
            setUser(profil)
            console.log("props.adminnn",profil.admin);
        })
        .catch( "Une erreur est survenue lors du chargement de la page")
    }, []);

    const handleSubmit = async ()=> {
        await userApi.deleteUser(user)
        .then( 
            alert("Le compte à correctement été supprimé"),
            localStorage.clear(),
            navigate('/')
        )
    }

    const handleSubmitBack = async ()=>{
        navigate('/')
    }

    return (
        <div>
            <button className='back' onClick={handleSubmitBack}>Retour au menu</button>
            <div className='profil-conteneur'>
                <div className='my-profil'>
                    <h1>Mon profil</h1>
                </div>
                <div className='part-of-profil'>
                    <h2>Nom :</h2>
                    <div className='data-profil'>
                        {user.user_name}
                        <div>
                            {userName && <UpdateProfilName
                                description={user.description}
                                user_name ={user.user_name}
                                id= {user.id} 
                            />}
                        </div>
                        <button className='update-profil'onClick={()=> setUserName(!userName)}ariaUpdateProfil="button-update-profil">
                            <i class="far fa-edit"></i>
                            Modifier
                        </button>
                    </div>
                </div>
                <div className='part-of-profil'>
                    <h2>Password :</h2> 
                    <div className='data-profil'>
                        *******
                        {password && <UpdateProfilPassword/>}
                        <button className='update-profil'onClick={()=> setPassword(!password)}ariaUpdateProfil="button-update-profil">
                        <i class="far fa-edit"></i>
                            Modifier
                        </button>
                    </div>
                </div>
                <div className='part-of-profil'>
                    <h2>Email :</h2> 
                    <div className='data-profil'>
                        {user.email}
                        {email && <UpdateProfilEmail/>}
                        <button className='update-profil'onClick={()=> setEmail(!email)} ariaUpdateProfil="button-update-profil">
                            <i class="far fa-edit"></i>
                            Modifier
                        </button>
                    </div>
                </div>
                <div className='delete-profil'>
                    <button className='button-delete-profil' onClick={handleSubmit}>
                            Supprimer le compte
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;