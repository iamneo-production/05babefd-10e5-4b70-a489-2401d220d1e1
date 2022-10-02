import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



const ViewStudents = () => {


  const [data, setData] = useState([]);


  function getData() {
    axios
      .get("http://localhost:8080/admin/viewStudents")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };

  function handleDelete(studentId) {
    axios.delete(`http://localhost:8080/admin/deleteStudent/${studentId}`
    )
    .then(() => {
      getData();
    })
  }

  const setToLocalStorage = (studentId, studentName , studentDOB, address, mobile, age, email) => {
    localStorage.setItem("studentId", studentId);
    localStorage.setItem("studentName", studentName);
    localStorage.setItem("studentDOB", studentDOB);
    localStorage.setItem("address", address);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
   
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      
      <div className="d-flex justify-content-between m-2">
      
        <Link to="/addStudent">
          <button className="btn btn-secondary">Add Student</button>
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Student Id</th>
            <th scope="col">Student Name</th>
            <th scope="col">studentDOB </th>
            <th scope="col">Address</th>
            <th scope="col">Mobile </th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
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
                    <th scope="row">{eachData.studentId}</th>
                    <td>{eachData.studentName}</td>
                    <td>{eachData.studentDOB}</td>
                    <td>{eachData.address}</td>
                    <td>{eachData.mobile}</td>
                    <td>{eachData.age}</td>
                    <td>{eachData.email}</td>
                    <Link to="/update/student">
                      <button className='btn btn-success' onClick={() => setToLocalStorage(
                        eachData.studentId,
                        eachData.studentName,
                        eachData.studentDOB,
                        eachData.address,
                        eachData.mobile,
                        eachData.age,
                        eachData.email
                      )}>Edit</button>
                    </Link>
                    <td><button className=' btn btn-danger' onClick={() => handleDelete(eachData.studentId)}>Delete</button></td>
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

export default ViewStudents
