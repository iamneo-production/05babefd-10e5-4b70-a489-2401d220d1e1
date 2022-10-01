import React from "react";
import {  NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/css/bootstrap.min.css"


const Header = () => {

    // const handlecourses = (e) => { 
    //     e.preventDefault();
    //     axios.post("https://localhost:8080/admin/viewCourses",
    //     {
            
    //     })
    //     // .then(() => {
    //     Navigate("/read");
    // // });
    // };

return(

    <div className="content-container">
      <p className="header__title">Abacus Academy App</p>
      <div >
        
        <NavLink
          to="/ViewAcademy"
          className="header__nav"
          // activeClassName="is-active"
          //onClick={handleacademy}
        >
        Academy
        </NavLink>
        <NavLink
          to="/viewCourses"
          className="header__nav"
          // activeClassName="is-active"
        //   onClick={handlecourses}
        >
          Courses
        </NavLink>
        <NavLink
          to="/ViewStudents"
          className="header__nav"
          // activeClassName="is-active"
        >
          Students
        </NavLink>
      </div>
    </div>
  
);
}

export default Header;
