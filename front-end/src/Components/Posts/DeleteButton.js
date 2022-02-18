import React from 'react';


const DeleteButton = (props) => {
    return (
        <button onClick={()=>{
            props.onDelete()
        }} className='delete-button'>    
            <i class="fas fa-trash-alt"></i>
        </button>
    );
};

export default DeleteButton;