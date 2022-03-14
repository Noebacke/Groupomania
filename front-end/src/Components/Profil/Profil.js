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
            
        })
        .catch( "Une erreur est survenue lors du chargement de la page")
    }, []);

    const handleSubmit = async ()=> {
        await userApi.deleteUser(user)
        .then( 
            "Le compte à correctement été supprimé",
            localStorage.clear(),
            navigate('/')
        )
    }

    return (
        <div className='profil-conteneur'>
            <div className='my-profil'>
                <h1>Mon profil</h1>
            </div>
            <div className='part-of-profil'>
                <h3>Nom :</h3>
                <div className='data-profil'>
                    {user.user_name}
                    <div>
                        {userName && <UpdateProfilName/>}
                        {/* {user.map( (user) => {<UpdateProfilName
                            description={user.description}
                            user_name ={user.user_name}
                            id= {user.id} 
                        />})} */}
                    </div>
                    <button className='update-profil'onClick={()=> setUserName(!userName)}>
                        <i class="far fa-edit"></i>
                    </button>
                </div>
            </div>
            <div className='part-of-profil'>
                <h3>Password :</h3> 
                <div className='data-profil'>
                    *******
                    {password && <UpdateProfilPassword/>}
                    <button className='update-profil'onClick={()=> setPassword(!password)}>
                        <i class="far fa-edit"></i>
                    </button>
                </div>
            </div>
            <div className='part-of-profil'>
                <h3>Email :</h3> 
                <div className='data-profil'>
                    {user.email}
                    {email && <UpdateProfilEmail/>}
                    <button className='update-profil'onClick={()=> setEmail(!email)}>
                        <i class="far fa-edit"></i>
                    </button>
                </div>
            </div>
            <div className='delete-profil'>
                <button className='button-delete-profil' onClick={handleSubmit}>
                        Supprimer le compte
                </button>
            </div>
        </div>
    );
};

export default Profile;