import React from 'react';

const Comments = (props) => {
    return (
        
        <div className="comments-of-post">
            <div className="user-of-comment-post">
                Par {props.user_name}
            </div>
            <div className="response-of-comment-post">
                {props.description}
            </div>
        </div>
    )
};

export default Comments;