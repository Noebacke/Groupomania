import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Comments from '../Comments/Comments';
import DeleteButton from '../Posts/DeleteButton';
import {useNavigate} from 'react-router-dom'
import { URL_COMMENTS, URL_POSTS } from '../../config';
import UpdatePost from './UpdatePost';
import postApi from '../../services/postApi';


const Post = (props) => {
    const userId = localStorage.getItem("user_Id")
    const userName = localStorage.getItem("user_name")
    const navigate = useNavigate()
    const [showComment, setShowComment] = useState(false);
    const [comments, setComments] = useState([]);// set value fonction to eddit state useState est la valeur de base
    const [autorisation, setAutorisation] = useState(true)

    const getAutorisation = (props) => {
        if(localStorage.getItem("admin") === true){
          return setAutorisation(true)
        }
        if(localStorage.getItem("random_user") === true && userName === props.user_name){
          return setAutorisation(true)
        }
    }
    // il faut utiliser la fonction dans un use Effect
    
    useEffect( () => {
      getAutorisation(props)
    }, []);

    const handleGetComments = () =>{
        axios.get(URL_COMMENTS + `/${props.id}`)
        .then((res) => {
          const allCommentofpost = res.data;
          setComments(allCommentofpost);
        },    
        );
    }

    const handleUpdatePost = () => {
        navigate('/updatepost/' + '?' + props.id ) 
    }

    const handleGetPost = () => {
        navigate("/post/" + '?' + props.id )
    }


    return (
      <div className="post">
        <div className="user">
          <div className="user-name">Posté par {props.user_name}</div>
          <div className="nav-bar-title">
            <div className="title">{props.title}</div>
          </div>
        </div>
        <button onClick={handleGetPost} className="get-post">
          <div className="comment">{props.description}</div>
          <img src={props.imageUrl} alt="img"></img>
        </button>
        <div className="nav-post">
          { autorisation ?
            <button onClick={handleUpdatePost} className="button-update">
              <i class="far fa-edit"></i>
            </button>
            : null
          }
          <div className="comments">
            <button onClick={handleGetComments}>
              <i class="far fa-comment-dots"></i>
            </button>
          </div>

          <DeleteButton
            onDelete={() => {
              axios.delete(URL_POSTS + `/${props.id}`).then((res) => {
                window.location.reload();
                console.log(res);
              });
            }}
          />
        </div>
        {comments.map((comment) => (
          <Comments
            description={comment.description}
            user_name={comment.user_name}
          />
        ))}
      </div>
    );
};

export default Post;