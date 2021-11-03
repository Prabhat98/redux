import { Link } from "react-router-dom";
import "./post.css";
import { useHistory } from "react-router-dom";


export default function Post({img,title,content,id}) {

  let history = useHistory();

  const handleEdit = (event) => {
    event.preventDefault();
    alert('Proceed with Editing the ${event.target.value} Blog?');
    history.push('/editblog',{ id: event.target.value});
        
    }

  /*const handleDelete = (event) => {

  event.preventDefault();
  alert("Delete the Blog? Action cannot be undone.");
  console.log("In Post.jsx: ",event.target.value);
  history.push('/delete',{id: event.target.value});*/
  

  

  return (

    <div className="post">

      <img
        className="postImg"
        src={img}
        alt=""
      />

      <div className="postInfo">

             <div className="postOps">

                <span className="postOp">
                 <Link to={`/editblog/${id}`}> Edit </Link>
                </span>

                <span className="postOp">
                 <Link to={`/delete/${id}`}> Delete </Link>
                  
                </span>
              </div>
        
        <span className="postTitle">
            {title}
        </span>
        <hr />

      </div>

      <p className="postContent">
        {content}
      </p>
    </div>
  );
  }