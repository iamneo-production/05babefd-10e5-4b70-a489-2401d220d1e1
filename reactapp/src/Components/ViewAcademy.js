import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



const ViewAcademy = () => {


  const [data, setData] = useState([]);


  function getData() {
    axios
      .get("http://localhost:8080/admin/viewInstitutes")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };

  function handleDelete(instituteId) {
    axios.delete(`http://localhost:8080/admin/deleteInstitute/${instituteId}`
    )
    .then(() => {
      getData();
    })
  }

  const setToLocalStorage = (instituteId, instituteName , instituteDescription, instituteAddress, mobile, email) => {
    localStorage.setItem("instituteId", instituteId);
    localStorage.setItem("instituteName", instituteName);
    localStorage.setItem("instituteDescription", instituteDescription);
    localStorage.setItem("instituteAddress", instituteAddress);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("email", email);
   
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      
      <div className="d-flex justify-content-between m-2">
      
        <Link to="/addacademy">
          <button className="btn btn-secondary">Add Academy</button>
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Institute Id</th>
            <th scope="col">Institute Name</th>
            <th scope="col">Institute Description</th>
            <th scope="col">Institute Address</th>
            <th scope="col">Mobile Number</th>
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
                    <th scope="row">{eachData.instituteId}</th>
                    <td>{eachData.instituteName}</td>
                    <td>{eachData.instituteDescription}</td>
                    <td>{eachData.instituteAddress}</td>
                    <td>{eachData.mobile}</td>
                    <td>{eachData.email}</td>
                    <Link to="/update/academy">
                      <button className='btn btn-success' onClick={() => setToLocalStorage(
                        eachData.instituteId,
                        eachData.instituteName,
                        eachData.instituteDescription,
                        eachData.instituteAddress,
                        eachData.mobile,
                        eachData.email
                      )}>Edit</button>
                    </Link>
                    <td><button className=' btn btn-danger' onClick={() => handleDelete(eachData.instituteId)}>Delete</button></td>
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

export default ViewAcademy
