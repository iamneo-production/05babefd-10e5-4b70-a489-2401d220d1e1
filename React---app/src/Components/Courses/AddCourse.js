import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AddCourse = () => {
    const [courseName, setCourseName] = useState("");
    const [courseDescription, setCourseDescription] = useState("");
    const [courseDuration, setCourseDuration] = useState("")
    // const [mobile, setMobile] = useState("")
    // const [email, setEmail] = useState("")

    
    const history = useNavigate();

    //const header = {"Allow-Controll-Allow-Origin": "*"}; 

    const handlesubmit = (e) => { 
        e.preventDefault();
        axios.post("http://localhost:8080/admin/addCourse",
        {
            courseName : courseName,
            courseDescription : courseDescription,
            courseDuration : courseDuration,
        // mobile : mobile,
        // email : email,
            
        })
        .then(() => {
        history("/viewCourses");
    });
    };

    return (

            <>
            
            
        
                <form>
                    <div className="mb-3">
                        <label className="form-label">courseName</label>
                        <input type="text" className="form-control"
                        onChange={(e) => setCourseName(e.target.value)}

                        />
                    </div>


                    <div className="mb-3">
                        <label className="form-label">courseDescription</label>
                        <input type="email" className="form-control" 
                        onChange={(e) => setCourseDescription(e.target.value)}
                         />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">courseDuration</label>
                        <input type="email" className="form-control" 
                        onChange={(e) => setCourseDuration(e.target.value)}
                         />
                    </div>

                        <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Add Course</button>
                </form>

            </>
        

    )
}

export default AddCourse
