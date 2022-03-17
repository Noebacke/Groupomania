import { useParams } from 'react-router-dom';
import { URL_GET_USER } from '../../config';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import userApi from '../../services/userApi';

const UpdateProfilName = (props) => {

    const [updateProfil, setUpdateProfil] = useState({
        user_name:"",  
    });
    
    const handleChange = (event)=>{
        const currentTarget = event.currentTarget;
        const { value } = currentTarget;
        console.log("value",value);
        setUpdateProfil({
            user_name: value
        })
    }
    const handleSubmit = async (event)=>{
        event.preventDefault()
        try {
            await userApi.update(updateProfil)
            alert('Nom mis à jour')
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
                    onChange={handleChange}
                ></input>
                <br />
                <button onClick={handleSubmit} className="submit-modifications-profil">Effectuer le changement</button>
            </form>
        </div>
    );
};

export default UpdateProfilName;