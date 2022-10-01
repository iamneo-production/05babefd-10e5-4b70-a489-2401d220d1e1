import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



const ViewCourses = () => {


  const [data, setData] = useState([]);


  function getData() {
    axios
      .get("http://localhost:8080/admin/viewCourses")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };

  function handleDelete(courseId) {
    axios.delete(`http://localhost:8080/admin/deleteCourse/${courseId}`
    )
    .then(() => {
      getData();
    })
  }

  const setToLocalStorage = (courseId, courseName , courseDescription, courseDuration) => {
    localStorage.setItem("courseId", courseId);
    localStorage.setItem("courseName", courseName);
    localStorage.setItem("courseDescription", courseDescription);
    localStorage.setItem("courseDuration", courseDuration);
    // localStorage.setItem("mobile", mobile);
    // localStorage.setItem("email", email);
   
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      
      <div className="d-flex justify-content-between m-2">
      
        <Link to="/addCourse">
          <button className="btn btn-secondary">Add Course</button>
        </Link>
      </div>
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
                    <Link to="/update/course">
                      <button className='btn btn-success' onClick={() => setToLocalStorage(
                        eachData.courseId,
                        eachData.courseName,
                        eachData.courseDescription,
                        eachData.courseDuration
                      )}>Edit</button>
                    </Link>
                    <td><button className=' btn btn-danger' onClick={() => handleDelete(eachData.courseId)}>Delete</button></td>
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

export default ViewCourses
