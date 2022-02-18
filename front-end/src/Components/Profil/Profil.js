import { useParams } from 'react-router-dom';
import { URL_GET_USER } from '../../config';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Profile = () => {

    const [user, setUser] = useState([])
    
    useEffect( () => {
        axios.get(URL_GET_USER)
        .then( res => {
            const profil = res.data
            setUser(profil)
        })
    }, []);

    return (
        <div className='profil-conteneur'>
            <h1>Profil de </h1>
        </div>
    );
};

export default Profile;