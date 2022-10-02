import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


    

const AddAcademy = () => {
    const [instituteName, setInstituteName] = useState("");
    const [instituteDescription, setInstituteDescription] = useState("");
    const [instituteAddress, setInstituteAddress] = useState("")
    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState("")

    
    const history = useNavigate();

    //const header = {"Allow-Controll-Allow-Origin": "*"}; 

    const handlesubmit = (e) => { 
        e.preventDefault();
        axios.post("http://localhost:8080/admin/addInstitute",
        {
        instituteName : instituteName,
        instituteDescription : instituteDescription,
        instituteAddress : instituteAddress,
        mobile : mobile,
        email : email,
            
        })
        .then(() => {
        history("/ViewAcademy");
    });
    };

    return (

            <>
        
                <form>
                
                    <div className="mb-3">
                        <label className="form-label">instituteName</label>
                        <input type="text" className="form-control"
                        onChange={(e) => setInstituteName(e.target.value)}

                        />
                    </div>


                    <div className="mb-3">
                        <label className="form-label">instituteDescription</label>
                        <input type="email" className="form-control" 
                        onChange={(e) => setInstituteDescription(e.target.value)}
                         />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">instituteAddress</label>
                        <input type="email" className="form-control" 
                        onChange={(e) => setInstituteAddress(e.target.value)}
                         />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Mobile</label>
                        <input type="email" className="form-control" 
                        onChange={(e) => setMobile(e.target.value)}
                         />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" 
                        onChange={(e) => setEmail(e.target.value)}
                         />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Add Academy</button>
                </form>

            </>
        

    )
}

export default AddAcademy;
