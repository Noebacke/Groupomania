import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Post from '../Posts/Post';
import NavBar from '../../NavBar/NavBar';
import { URL_POSTS } from '../../config';

const GetOnePost = () => {

    const [post, setPost] = useState([])

    useEffect( () => {
        let postId = localStorage.getItem('Post_id')
        axios.get(URL_POSTS + `/${postId}`)
        .then( res => {
            const Post = res.data
            console.log('Onepost', Post)
            setPost(Post)
        })
    }, []);

    return (
      <div>
        <div className="nav-bar">
          <img
            src=""
            className="goupomania-logo"
          ></img>
          <NavBar />
        </div>
        <div className="user">
          <div className="user-name">Posté par {post.user_name}</div>
          <div className="nav-bar-title">
            <div className="title">{post.title}</div>
          </div>
        </div>
        <div className="comment">
              {post.description}
        </div>
      </div>
    );
};

export default GetOnePost;