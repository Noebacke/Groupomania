import React from 'react';


const DeleteButton = (props) => {
    return (
        <button onClick={()=>{
            props.onDelete()
        }} className='delete-button' ariaDelete="button-delete">    
            <i class="fas fa-trash-alt"></i>
            Supprimer
        </button>
    );
};

export default DeleteButton;