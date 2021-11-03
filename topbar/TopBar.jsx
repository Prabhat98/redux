import './topbar.css';
import {Link } from 'react-router-dom';

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-linkedin"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            </div>


            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"> <Link to="/home">      <h2>HOME</h2>      </Link> </li>
                    <li className="topListItem"> <Link to="/contact">   <h2>CONTACT</h2>   </Link> </li>
                    <li className="topListItem"> <Link to="/post/">      <h2>POST</h2>      </Link> </li>
                    <li className="topListItem"> <Link to="/">          <h2>LOGIN</h2>     </Link> </li>
                </ul>  
            </div>

            <div className="topRight"></div>
            
        </div>
    );
}
