import "./addblog.css";
  
import React, { useRef } from 'react'
import {Link } from 'react-router-dom';
import { useHistory} from "react-router-dom";
import {useState } from "react";

export default function AddBlog({add}) {
    
    const img1 = "https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
    const img2 = "https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
    
    const [blog, setBlog] = useState({});
    let history = useHistory();


    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setBlog(values => ({...values, [name]: value}))
                                      }


    const handleSubmit = (event) => {
                  
            add(blog);
            alert("Proceed wth the New Blog?");
            event.preventDefault();
        }
      
    
    return (
        <div className="addblog">
      <span className="addBlogTitle">Add New Blog</span>

      <form onSubmit={handleSubmit} className="addBlogForm">

        <label>Blog Title</label>
        <input name="title" value={blog.title || ""} onChange={handleChange} className="addBlogInput" type="text" placeholder="Blog Title" />
        
        <label>Blog Content</label>
        <input name="content" value={blog.content || ""} onChange={handleChange} className="addBlogInput" type="text" placeholder="Blog Content" />
        
        <label>Blog Image</label>
        <select name="image" value={blog.image || ""} onChange={handleChange} className="addBlogInput">
            <option value="">*Select*</option>
            <option value={img1}> Leaves  </option>
            <option value={img2}> Herbs </option>
          </select>
        <button className="addBlogButton">Add Blog!</button>
      </form>
        
    </div>
    );
}


        
          
          
        
        
        
