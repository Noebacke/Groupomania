import Post from '../Posts/Post';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { URL_POSTS } from '../../config';
import NavBar from '../../NavBar/NavBar';
import { useNavigate } from 'react-router-dom'



const GetAllPost = () => {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])

    
    useEffect( () => {
        axios.get(URL_POSTS)
        .then( res => {
            const allPosts = res.data
            setPosts(allPosts)

        })
    }, []);

    const handleSubmit = () => {
        navigate('/createpost')
    }


    return (
        
        <div>  
            <NavBar/>   
            <br/>
            <button className='button-create-post' onClick={handleSubmit}>
                <i class="fas fa-plus-circle"></i>
            </button>
            <div className='posts'>
                { posts.map( post => <Post 
                    description={post.description}
                    user_name ={post.user_name}
                    createdAt= {post.createdAt}
                    imageUrl= {post.imageUrl}
                    title={post.title} 
                    id= {post.id} 
                    comments= {post.Comments}
                    admin= {post.admin}
                />)}
            </div>
        </div>
        
    )
};

export default GetAllPost;