import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DeleteButton from '../Posts/DeleteButton';
import {useNavigate} from 'react-router-dom'
import { URL_POSTS } from '../../config';
import GetAllComments from '../Comments/GetAllComments';


const Post = (props) => {
    
    const navigate = useNavigate()
    const [showComment, setShowComment] = useState(false);
    const [autorisation, setAutorisation] = useState(false);
    const admin = localStorage.getItem('admin')
    const name = localStorage.getItem('name')
    const userName = props.user_name
    console.log("props.username",userName, admin);
  
    const getAutorisation = () => {
        if(admin == "true"){
          return setAutorisation(true)
        } 
        if(name == userName){
          return setAutorisation(true)
        }
        return setAutorisation(false)
    }
    
    
    useEffect( () => {
      getAutorisation()
    }, []);

    const handleUpdatePost = () => {
        navigate('/updatepost/' + '?' + props.id ) 
    }

    const handleGetPost = () => {
        navigate("/post/" + '?' + props.id )
    }


    return (
      <div>
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
            <div className="show-comments">
              <button onClick={()=>setShowComment(!showComment)}>
                <i class="far fa-comment-dots"></i>
              </button>
            </div>
            
            { autorisation ?
              <DeleteButton
                onDelete={() => {
                  axios.delete(URL_POSTS + `/${props.id}`).then((res) => {
                    window.location.reload();
                    console.log(res);
                  });
                }}
              />
              : null
            }
          </div>
          
        </div>
       
        {showComment && <GetAllComments 
          comments={props.comments}
          postId={props.id}
          />}
      </div>
    );
};

export default Post;