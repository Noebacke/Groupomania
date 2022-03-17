import {useNavigate} from 'react-router-dom'
import React, { useState } from 'react';
import commentsApi from '../../services/commentsApi';
import NavBar from '../../NavBar/NavBar';


const CreateComment = (props) => {
    const navigate = useNavigate();
    const [comment, setComment] = useState({})

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            console.log("comment",comment);
            const data = commentsApi.create(comment);
            alert('commentaire ajouté')
            window.location.reload();
            navigate('/')
        }catch(error){
            console.log("erreur lors de la publication du commentaire",error);
        }
    }

    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        setComment({
            ...comment,
            [name]: value,
            postId: props.postId    
        })
    }

    return (
      <div>
        <form className="form-conteneur">
          <h3>Commentaire</h3>
          Description :
          <input
            name="description"
            className="description"
            required
            onChange={handleChange}
          ></input>
          <br />
          <button onClick={handleSubmit}>Publier le Commentaire</button>
        </form>
      </div>
    );
};

export default CreateComment;