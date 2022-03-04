import React from 'react';

const Comments = (props) => {

    const handleSubmit = () => {
        
    }

    return (
        <div>
            <div className="comments-of-post">
                <div className="user-of-comment-post">
                    Par {props.user_name}
                </div>
                <div className="response-of-comment-post">
                    {props.description}
                </div>
            </div>
            <button className='button-create-post' onClick={handleSubmit}>
                <i class="fas fa-plus-circle"></i>
            </button>
        </div>
    )
};

export default Comments;