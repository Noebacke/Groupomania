import {useNavigate} from 'react-router-dom'
import React, { useState } from 'react';
import commentsApi from '../../services/commentsApi';
import NavBar from '../../NavBar/NavBar';


const CreateComment = () => {
    const navigate = useNavigate();
    const [comment, setComment] = useState({})

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try{
            const data = commentsApi.create(comment);
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
        })
    }

    return (
      <div>
        <div>
          <div className="nav-bar">
            <img src="./img/logo.png" className="goupomania-logo"></img>
            <NavBar />
          </div>
        </div>
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