import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { URL_COMMENTS } from '../../config';
import Comments from '../Comments/Comments';
import {useNavigate} from 'react-router-dom'
import CreateComment from './CreateComment';

const GetAllComments = (props) => {
    
    const comment = props.comments
    const [newComment, setNewComment] = useState(false)

    // in the futur fetch comments from here

    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/createcomments')
    }

    return (
        <div className='all-comments'>
          <button className='button-create-comment' onClick={()=> setNewComment(!newComment)}>
                <i class="fas fa-plus-circle"></i>
          </button>
          {newComment && <CreateComment
            postId={props.postId}
          />}
            {comment.map((comment) => (
          <Comments
            key={comment.id}
            description={comment.description}
            user_name={comment.user_name}
            id={comment.id}
          />
        ))}
        </div>
    );
};

export default GetAllComments;