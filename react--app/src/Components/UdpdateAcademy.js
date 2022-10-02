import axios from 'axios';
import React, { useEffect, useState } from 'react'
import  { useNavigate } from 'react-router-dom'

const UdpdateAcademy = () => {
const [instituteId, setInstituteId] = useState(0);
const [instituteName, setInstituteName] = useState('');
const [instituteDescription, setInstituteDescription] = useState('');
const [instituteAddress, setInstituteAddress] = useState('');
const [mobile, setMobile] = useState('');
const [email, setEmail] = useState('');
const navigate = useNavigate();

useEffect(() => {
    setInstituteId(localStorage.getItem("instituteId"));
    setInstituteName(localStorage.getItem("instituteName"));
    setInstituteDescription(localStorage.getItem("instituteDescription"));
    setInstituteAddress(localStorage.getItem("instituteAddress"));
    setMobile(localStorage.getItem("mobile"));
    setEmail(localStorage.getItem("email"));

}, []);

    const handleupdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/admin/editInstitute/${instituteId}`,
        {
            instituteName : instituteName,
            instituteDescription : instituteDescription,
            instituteAddress : instituteAddress,
            mobile : mobile,
            email : email,
                 
            })
            .then(() => {
                navigate('/ViewAcademy');
              });
          };

  return (
    <>
    <h2>Update Academy</h2>
    <form>
                    <div className="mb-3">
                        <label className="form-label">instituteName</label>
                        <input type="text" className="form-control"
                        value={instituteName}
                        onChange={(e) => setInstituteName(e.target.value)}

                        />
                    </div>


                    <div className="mb-3">
                        <label className="form-label">instituteDescription</label>
                        <input type="email" className="form-control" 
                        value={instituteDescription}
                        onChange={(e) => setInstituteDescription(e.target.value)}
                         />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">instituteAddress</label>
                        <input type="email" className="form-control" 
                        value={instituteAddress}
                        onChange={(e) => setInstituteAddress(e.target.value)}
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

export default UdpdateAcademy
