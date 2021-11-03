import TopBar from "./topbar/TopBar.jsx";
import "./topbar/topbar.css";
import Home from "./components/Home.jsx";
import { Route, Switch , useParams, useHistory} from "react-router-dom";
import Contact from "./components/Contact.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Posts from "./components/Posts.jsx";
import AddBlog from "./components/AddBlog.jsx";
import { useState } from "react";
import EditBlog from "./components/EditBlog.jsx";


//import our data and utility functions:

import {getBlogs, getBlogByID, addBlog,editBlog, deleteBlog} from "./components/postdata.js";
import Post from "./components/Post.jsx";
import Delete from "./components/Delete.jsx";



function App() {

  
  const [blogs, setBlog] = useState(getBlogs());

  let history = useHistory();

  const addNewBlog = (newBlog)=>{
    addBlog(newBlog);
    setBlog(getBlogs());
    history.push('/post');
  };

  const editOldBlog = (id,newBlog)=>{
    editBlog(id, newBlog)
    setBlog(getBlogs());
    history.push('/post');
  };

  const deleteOldBlog = (id)=>{
    console.log(id);
    deleteBlog(id);
    setBlog(getBlogs());
    history.push('/post');
    
  };

  return (
    <div className="App">
    
     <TopBar /> 
     <main>
            <Switch>
              
                <Route path="/home" component={Home}/>
                <Route path="/contact" component={Contact} />
                <Route path="/" component={Login} exact />
                <Route path="/register" component={Register} />
                
                <Route path="/post"> <Posts blogs={blogs} /> </Route>
                
                <Route path="/addblog"> <AddBlog add={addNewBlog} /> </Route>
                
                <Route path="/editblog/:id"> <EditBlog edit={editOldBlog}/> </Route>

                <Route path="/delete/:id"> <Delete del={deleteOldBlog}/> </Route>


               
                
            </Switch>
        </main>
    </div>
  );
}

export default App;
