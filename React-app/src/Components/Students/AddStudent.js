import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
    const [studentName, setStudentName] = useState("");
    const [studentDOB, setStudentDOB] = useState("");
    const [address, setAddress] = useState("")
    const [mobile, setMobile] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")

    
    const history = useNavigate();

    //const header = {"Allow-Controll-Allow-Origin": "*"}; 

    const handlesubmit = (e) => { 
        e.preventDefault();
        axios.post("http://localhost:8080/admin/addStudent",
        {
            studentName : studentName,
            studentDOB : studentDOB,
            address : address,
        mobile : mobile,
        age : age,
        email : email,
            
        })
        .then(() => {
        history("/ViewStudents");
    });
    };

    return (

            <>
            
            
        
                <form>
                    <div className="mb-3">
                        <label className="form-label">Student Name</label>
                        <input type="text" className="form-control"
                        onChange={(e) => setStudentName(e.target.value)}

                        />
                    </div>


                    <div className="mb-3">
                        <label className="form-label">Student DOB</label>
                        <input type="email" className="form-control" 
                        onChange={(e) => setStudentDOB(e.target.value)}
                         />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input type="email" className="form-control" 
                        onChange={(e) => setAddress(e.target.value)}
                         />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Mobile</label>
                        <input type="email" className="form-control" 
                        onChange={(e) => setMobile(e.target.value)}
                         />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Age</label>
                        <input type="email" className="form-control" 
                        onChange={(e) => setAge(e.target.value)}
                         />
                    </div>


                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" 
                        onChange={(e) => setEmail(e.target.value)}
                         />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Add Student</button>
                </form>

            </>
        

    )
}

export default AddStudent
