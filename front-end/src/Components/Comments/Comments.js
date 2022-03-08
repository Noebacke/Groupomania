import React from 'react';
import axios from 'axios';
import { URL_COMMENTS } from '../../config';
import DeleteButton from '../Posts/DeleteButton';

const Comments = (props) => {

    return (
        <div className='comments'>
            <div className="comments-of-post">
                <div className="user-of-comment-post">
                    Par {props.user_name}
                </div>
                <div className="response-of-comment-post">
                    {props.description}
                </div>
            </div>
            <DeleteButton
                onDelete={() => {
                    axios.delete(URL_COMMENTS + `/${props.id}`).then((res) => {
                    window.location.reload();
                    console.log(res);
                    });
                }}
            />
        </div>
    )
};

export default Comments;