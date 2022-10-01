import React,{useRef} from 'react'
import axios from 'axios';
import  { useNavigate } from 'react-router-dom'


const Login = ()=>{

    const email = useRef("");
    const password = useRef("");
    const role = useRef("");
    const navigate = useNavigate();

    const handleLogin = ()=>{
        const emailV = email.current.value;
        const passwordV = password.current.value;
        const roleV = role.current.value;
        if(roleV===""){
            alert("please choose admin/user")
            return;
        }
        if(emailV===""){
            alert("please provide email")
            return;
        }
        if(passwordV===""){
            alert("please provide password")
            return;
        }
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(emailV)) {
            const obj = {
                email:emailV,
                password:passwordV
            }
        if(roleV==="ADMIN"){
            axios.post("http://localhost:8080/admin/login",obj)
            
            alert("Admin login success");
            navigate('/ViewAcademy');
        
        }
        else{
            axios.post("http://localhost:8080/user/login",obj)
            .then((resp)=>{
                if(resp.data){
                    if(roleV==="USER"){
                        alert("User login success");
                        navigate('/user/viewinstitutes');
                    }
                    // }else{

                    //     alert("Admin login success");
                    //     navigate('/adminacademy');
                    // }
                    
                }
                else{
                    alert("Invalid Credentials");
                }
            })
        }
        
    }
    }

    return(
        <>
            <div className="mh-100  col-7 mt-5 d-inline-block bg-info">
                
                <div  className="container col-3 mt-5  mb-5">
                    <h3> Login</h3>
                    <select className="form-select" id="user/admin" aria-label="Default select example" ref={role}>
                        <option value="" selected>Admin/User</option>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                    </select><br/>
                    <input type="text" id="email" ref={email} className="form-control" placeholder="Enter Email Address" aria-label="Username" aria-describedby="basic-addon1" /><br/>
                    <input type="password" id="password" ref={password} className="form-control" placeholder="Enter password" aria-label="Username" aria-describedby="basic-addon1" /><br/>
                    <button type="button" id="login_btn" className="btn btn-secondary" onClick={handleLogin}>Login</button><br/>
                    New User/Admin? 
                    <a id="signup_btn" href="/signup">SignUp</a>
                </div>
            </div>

        </>
    )
}

export default Login;