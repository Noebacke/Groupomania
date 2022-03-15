import {useNavigate} from 'react-router-dom'
import React, { useState } from 'react';
import postApi from '../../services/postApi';
import NavBar from '../../NavBar/NavBar';


const CreatePost = () => {
    const [newPost, setNewPost] = useState({
      title: "",
      description: "",
    });
    const [posts, setPosts] = useState([]);
    const [file, setFile] = useState();
    const [postPicture, setPostPicture] = useState(null);
    const navigate = useNavigate();
    
    const handlePicture = (event) => {
      setPostPicture(URL.createObjectURL(event.target.files[0]));
      console.log("file",postPicture);
      setFile(event.target.files[0]);
      
    };

    const handleChangeTitle = (event) => {
      const currentTarget = event.currentTarget;
      const { value } = currentTarget;
      console.log("value title", value);
      setNewPost({
        ...newPost,
        title: value,
      });
    };

    const handleChangeDescription = (event) => {
      const currentTarget = event.currentTarget;
      const { value } = currentTarget;
      console.log("value description", value);
      setNewPost({
        ...newPost,
        description: value,
      });
    };
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append("post", JSON.stringify(newPost));
      if (file) {formData.append("file", file)};
      try {
        await postApi.create(formData);
        navigate("/getallpost");
      } catch (error) {
        console.log(error, "Le post n'a pas pu être crée");
      }
    };
    return (
      <div>
        <div>  
            <NavBar />
        </div>
        <form className="form-conteneur">
          <h3>Création du post</h3>
          <br />
          Titre :
          <input
            className="title"
            required
            size={20}
            onChange={handleChangeTitle}
          ></input>
          <br />
          Description :
          <input
            className="description"
            required
            onChange={handleChangeDescription}
          ></input>
          <br />
          Images :
          <br />
          <br />
          <input
            className="img-of-newpost"
            name="images"
            type="file"
            accept=".jpg, .jpeg, .png"
            alt="img-of-post"
            onChange={(event) => handlePicture(event)}
          ></input>
          <br />
          <br />
          <img src={postPicture} alt="" />
          <br />
          <br />
          <button onClick={handleSubmit}>Publier le post</button>
        </form>
      </div>
    );
};

export default CreatePost;