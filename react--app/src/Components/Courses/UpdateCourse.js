import axios from 'axios';
import React, { useEffect, useState } from 'react'
import  { useNavigate } from 'react-router-dom'

const UpdateCourse = () => {
const [courseId, setCourseId] = useState(0);
const [courseName, setCourseName] = useState('');
const [courseDescription, setCourseDescription] = useState('');
const [courseDuration, setCourseDuration] = useState('');
// const [mobile, setMobile] = useState('');
// const [email, setEmail] = useState('');
const navigate = useNavigate();

useEffect(() => {
    setCourseId(localStorage.getItem("courseId"));
    setCourseName(localStorage.getItem("courseName"));
    setCourseDescription(localStorage.getItem("courseDescription"));
    setCourseDuration(localStorage.getItem("courseDuration"));
    // setMobile(localStorage.getItem("mobile"));
    // setEmail(localStorage.getItem("email"));

}, []);

    const handleupdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/admin/editCourse/${courseId}`,
        {
            courseName : courseName,
            courseDescription : courseDescription,
            courseDuration : courseDuration,
            
                 
            })
            .then(() => {
                navigate('/viewCourses');
              });
          };

  return (
    <>
    <h2>Update Course</h2>
    <form>
                    <div className="mb-3">
                        <label className="form-label">courseName</label>
                        <input type="text" className="form-control"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}

                        />
                    </div>


                    <div className="mb-3">
                        <label className="form-label">courseDescription</label>
                        <input type="email" className="form-control" 
                        value={courseDescription}
                        onChange={(e) => setCourseDescription(e.target.value)}
                         />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">courseDuration</label>
                        <input type="email" className="form-control" 
                        value={courseDuration}
                        onChange={(e) => setCourseDuration(e.target.value)}
                         />
                    </div>

                  
        <button type="submit" className="btn btn-primary" 
   onClick={handleupdate}>
        Update</button>
    </form>

    </>
  )
}

export default UpdateCourse
