// import React from "react";
import React from "react";
import { Link,useNavigate } from "react-router-dom";
const Nav = () => {
  const auth=localStorage.getItem('user') ; 
  const navigate = useNavigate() ;
  const logout=()=>{

    localStorage.clear() ; 
    navigate('/sign-up') ; 
  }

  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link to="">Products</Link>
        </li>
        <li>
          <Link to="/add">Add Products</Link>
        </li>
        <li>
          <Link to="/update">Update Products</Link>
        </li>
        {/* <li>
          <Link to="/logout">logout</Link>
        </li> */}
        <li>
          <Link to="/profile">profile</Link>
        </li>
        <li>{ auth ?
        <Link onClick={logout} to="/sign-up">logout</Link>: 
        <Link to="/sign-up">SignUp</Link>
        }
          </li>
      </ul>
      <h1>Header</h1>
    </div>
  );
};

export default Nav;
