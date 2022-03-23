import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import commentsApi from '../../services/commentsApi';
import NavBar from '../../NavBar/NavBar';
import { URL_GET_USER } from '../../config';


const CreateComment = (props) => {
    const navigate = useNavigate();
    const [comment, setComment] = useState({})

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
            postId: props.postId,
            user_name: user.user_name
        })
    }

    return (
      <div>
        <form className="form-conteneur-comment">
          <h3>Commentaire</h3>
          Description :
          <input
            name="description"
            className="description"
            required
            onChange={handleChange}
          ></input>
          <br />
          <button onClick={handleSubmit} aria-label="button-publish-comment" className='button-publish-comment'>Publier le Commentaire</button>
        </form>
      </div>
    );
};

export default CreateComment;