import {useNavigate} from 'react-router-dom'
import React, { useState } from 'react';
import commentsApi from '../../services/commentsApi';


const CreateComment = () => {

    const [comment, setComment] = useState({})

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try{
            const data = commentsApi.create();
            
        }catch(error){
            console.log("erreur lors de la publication du commentaire",error);
        }
    }

    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        setComment({
            ...comment,
            [name]: value,
        })
    }

    return (
        <div>
            <form className="form-conteneur">
                <h3>Création du post</h3>
                <br />
                Titre :
                <input
                    name='title'
                    className="title"
                    required
                    size={20}
                    onChange={handleChange}
                >
                </input>
                <br />
                Description :
                <input
                    name='description'
                    className="description"
                    required
                    onChange={handleChange}
                >
                </input>
                <br />
                <button onClick={handleSubmit}>Publier le post</button>
            </form>
      </div>
    );
};

export default CreateComment;