import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



const ViewInstitutes = () => {


  const [data, setData] = useState([]);


  function getData() {
    axios
      .get("http://localhost:8080/admin/viewInstitutes")
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
            <th scope="col">Institute Id</th>
            <th scope="col">Institute Name</th>
            <th scope="col">Institute Description</th>
            <th scope="col">Institute Address</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Email</th>
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
                    
               

                        <Link to="/user/courses">
                       
                              <button className='btn btn-success'> Enroll</button>
                  
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

export default ViewInstitutes
