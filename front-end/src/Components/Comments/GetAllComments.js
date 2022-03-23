import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { URL_COMMENTS, URL_GET_USER } from '../../config';
import Comments from '../Comments/Comments';
import {useNavigate} from 'react-router-dom'
import CreateComment from './CreateComment';

const GetAllComments = (props) => {
    
    const comment = props.comments
    const [newComment, setNewComment] = useState(false)
    const [user, setUser] = useState([])

    // in the futur fetch comments from here
    useEffect( () => {
      axios.get(URL_GET_USER)
          .then( res => {
              const profil = res.data
              console.log(profil);
              setUser(profil)
              
          })
          .catch( "Une erreur est survenue lors du chargement de la page")
        }, []);

    console.log("allComments",user);
    return (
        <div className='all-comments'>
          <button className='button-create-comment' onClick={()=> setNewComment(!newComment)}>
              <div className='div-create'>
                <i class="fas fa-plus-circle"></i>
                Ajouter un commentaire
              </div>
          </button>
          {newComment && <CreateComment
            postId={props.postId}
          />}
            {comment.map((comment) => (
          <Comments
            key={comment.id}
            description={comment.description}
            id={comment.id}
            user_name= {comment.user_name}
          />
        ))}
        </div>
    );
};

export default GetAllComments;