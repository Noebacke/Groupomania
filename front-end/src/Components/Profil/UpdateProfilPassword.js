import { useParams } from 'react-router-dom';
import { URL_GET_USER } from '../../config';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import userApi from '../../services/userApi';

const UpdateProfilPassword = () => {

    const [updateProfil, setUpdateProfil] = useState({
        password:"",
        
    });
    const [user, setUser] = useState([])
    useEffect( () => {
        axios.get(URL_GET_USER)
        .then( res => {
            const profil = res.data
            console.log(profil);
            setUser(profil)
            
        })
        .catch( "Une erreur est survenue lors du chargement de la page")
    }, []);
    const handleChange = (event)=>{
        const currentTarget = event.currentTarget;
        const { value } = currentTarget;
        console.log("value",value);
        setUpdateProfil({
            password:value
        })
    }
    const handleSubmit = async (event)=>{
        event.preventDefault()
        try {
            await userApi.update(updateProfil)
            alert('Password mis à jour')
            window.location.reload(); 
        }catch(error){
            console.log(error, "Le Changement de nom n'a pas abouti");
        }
    }
    return (
        <div>
            <form className="form-update">
                <h3>Modification</h3>
                <input
                    name="input-update-profil"
                    className="input-update-profil"
                    required
                    type="password"
                    onChange={handleChange}
                ></input>
                <br />
                <button onClick={handleSubmit} className="submit-modifications-profil">Effectuer le changement</button>
            </form>
        </div>
    );
};

export default UpdateProfilPassword;