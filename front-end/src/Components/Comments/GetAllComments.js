import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { URL_COMMENTS } from '../../config';
import Comments from '../Comments/Comments';
import {useNavigate} from 'react-router-dom'

const GetAllComments = () => {
    const [comments, setComments] = useState([]);

    useEffect( () => {
        axios.get(URL_COMMENTS)
            .then((res) => {
            const allCommentsOfPost = res.data;
            setComments(allCommentsOfPost);
            },    
            );
    }, []);

    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/createcomments')
    }

    return (
        <div className='all-comments'>
          <button className='button-create-comment' onClick={handleSubmit}>
                <i class="fas fa-plus-circle"></i>
          </button>
            {comments.map((comment) => (
          <Comments
            description={comment.description}
            user_name={comment.user_name}
            id={comment.id}
          />
        ))}
        </div>
    );
};

export default GetAllComments;