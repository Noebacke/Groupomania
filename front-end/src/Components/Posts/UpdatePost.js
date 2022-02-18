import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import NavBar from '../../NavBar/NavBar';
import { URL_POSTS } from '../../config';
import postApi from '../../services/postApi';
import Axios from 'axios';

const UpdatePost = () => {
    const [updatePost, setUpdatePost] = useState({
        title:"",
        description:"",
        imageUrl:""
    });
    const [posts, setPosts] = useState([]);
    const [file, setFile] = useState();
    const [postPicture, setPostPicture] = useState(null);
    const navigate = useNavigate();


    const handleChangeTitle = (event) => {
        const currentTarget = event.currentTarget
        const {value} = currentTarget
        console.log("value title", value);
        setUpdatePost({
            ...updatePost,
            title:value
            
        })
    };

    const handleChangeDescription = (event) => {
        const currentTarget = event.currentTarget
        const {value} = currentTarget
        console.log("value description", value);
        setUpdatePost({
            ...updatePost,
            description:value
            
        })
    };
    const handlePicture = ()=>{

    }
    const handleSubmit = async (event)=>{
        event.preventDefault()
        const formData = new FormData ();
        formData.append("post",JSON.stringify(updatePost));
        if (file) formData.append("file", file);
        try {
            await postApi.update(updatePost)
            navigate('/getallpost', { replace: true })
        }catch(error){
            console.log(error, "Le post n'a pas pu être crée");
        }
    }

    return (
        <div>
            <div>
                <div className='nav-bar'>  
                    <img src="" className="goupomania-logo"></img>
                    <NavBar/>   
                </div>
            </div>
            <div>
                <form className='form-conteneur'>
                <h3>Modification du post</h3>
                <br/>
                Titre 
                <input className='title' required onChange={handleChangeTitle}></input>
                <br/>
                Description  
                <input className='description' required onChange={handleChangeDescription}></input>
                <br/>
                Images  
                <br/>
                <br/>
                <input 
                    className='img-of-newpost' 
                    name ="file"type="file" 
                    accept = ".jpg, .jpeg, .png"
                    alt="img-of-post" 
                    onChange={(event)=> handlePicture(event)}>
                </input>
                <br/>
                <br/>
                <br/>
                <br/>
                <button className ="update-post"onClick={handleSubmit}>
                    Modifier le post
                </button>
                </form>
            </div>
        </div>
        
    );
};

export default UpdatePost;