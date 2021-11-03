import Post from "./Post";
import {Link } from 'react-router-dom';
import { useHistory, useParams} from "react-router-dom";
import { useState } from "react";
import "./posts.css";

export default function Posts({blogs}) {

  const blog_list = blogs.map((blog) => <Post key={blog.id} img= {blog.image} title= {blog.title} content= {blog.content} id= {blog.id} /> );



  return (
    <div className="main">
      
        <button className="newPostButton"><Link to="/addblog">New Post</Link></button>
      
        <div className="posts">
          {blog_list}
        </div>

    </div>
  );
}