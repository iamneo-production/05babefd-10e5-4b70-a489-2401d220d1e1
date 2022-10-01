import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



const UserCourses = () => {


  const [data, setData] = useState([]);


  function getData() {
    axios
      .get("http://localhost:8080/admin/viewCourses")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };

  

 
   
  

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      
      
      <table className="table">
        <thead>
          <tr>
            <th scope="col">course Id</th>
            <th scope="col">course Name</th>
            <th scope="col">course Description</th>
            <th scope="col">course Duration</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {
          data.map((eachData) => {
            return (
              <>
                <tbody>
                  <tr>
                    <th scope="row">{eachData.courseId}</th>
                    <td>{eachData.courseName}</td>
                    <td>{eachData.courseDescription}</td>
                    <td>{eachData.courseDuration}</td>
                    <Link to="/user/students">
                      <button className='btn btn-success' >Enroll</button>
                    </Link>
                    
                  </tr>

                </tbody>
              </>
            )
          })
        }
      </table>
    </>
  )
}

export default UserCourses
