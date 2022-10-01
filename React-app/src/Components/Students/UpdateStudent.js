import axios from 'axios';
import React, { useEffect, useState } from 'react'
import  { useNavigate } from 'react-router-dom'

const UpdateStudent = () => {
const [studentId, setStudentId] = useState(0);
const [studentName, setStudentName] = useState('');
const [studentDOB, setStudentDOB] = useState('');
const [address, setAddress] = useState('');
const [mobile, setMobile] = useState('');
const [age, setAge] = useState('');
const [email, setEmail] = useState('');
const navigate = useNavigate();

useEffect(() => {
    setStudentId(localStorage.getItem("studentId"));
    setStudentName(localStorage.getItem("studentName"));
    setStudentDOB(localStorage.getItem("studentDOB"));
    setAddress(localStorage.getItem("address"));
    setMobile(localStorage.getItem("mobile"));
    setAge(localStorage.getItem("age"));
    setEmail(localStorage.getItem("email"));

}, []);

    const handleupdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/admin/editStudent/${studentId}`,
        {
            studentName : studentName,
            studentDOB : studentDOB,
            address : address,
            mobile : mobile,
            age : age,
            email : email,
                 
            })
            .then(() => {
                navigate('/ViewStudents');
              });
          };

  return (
    <>
    <h2>Update Student</h2>
    <form>
                    <div className="mb-3">
                        <label className="form-label">Student Name</label>
                        <input type="text" className="form-control"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}

                        />
                    </div>


                    <div className="mb-3">
                        <label className="form-label">Student DOB</label>
                        <input type="email" className="form-control" 
                        value={studentDOB}
                        onChange={(e) => setStudentDOB(e.target.value)}
                         />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input type="email" className="form-control" 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                         />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Mobile</label>
                        <input type="email" className="form-control" 
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                         />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Age</label>
                        <input type="email" className="form-control" 
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                         />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                         />
                    </div>
        <button type="submit" className="btn btn-primary" 
   onClick={handleupdate}>
        Update</button>
    </form>

    </>
  )
}

export default UpdateStudent
