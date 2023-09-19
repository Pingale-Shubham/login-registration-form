import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

export default function RegistrationPage() {
    const history= useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
        eName:""
    })
    const Registration = () => {
       const {email,password,eName}=user;
       if(email && password && eName){
        axios.post('http://localhost:4000/registration', user).then((res) => {
            if (res.data.msg) {
                alert(res.data.msg);
                history('/')
            } else {
                alert(res.data.error);
            }
        })
       }else{
        alert("fields are required")
       }
    }
    const handdleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    return (
        
            <div className='container-fluid loginbackground'>
        <div className="row justify-content-center">
            <div className="col-md-4 p-5 loginForm">
                <div className="row">
                   <h5 className='text-center' style={{color:"rgb(7, 36, 62)"}}>Register Here</h5>
                </div>
        
                    
                <div className="mb-3 text-white">
                    <label htmlhtmlFor="employeeName" className="form-label">Employee Name</label>
                    <input type="text" className="form-control inputLogin" id="employeeName" aria-describedby="emailHelp" name="eName" onChange={handdleChange}/>            
                </div>

                <div className="mb-3 text-white">
                    <label htmlhtmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control inputLogin" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={handdleChange}/>            
                </div>

                <div className="mb-3 text-white">
                    <label htmlhtmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control inputLogin" id="exampleInputPassword1 myInput" name='password' onChange={handdleChange} />              
                </div>
                {/* <div className="mb-3 text-white">                  
                    <input type="checkbox" onClick={togglePassword}/> Show Password
                </div> */}


                <div className="row justify-content-center">
                <button type="submit" onClick={Registration} className="btn btn-primary w-50" style={{background:"rgb(7, 36, 62)"}}>Register</button>
                </div>
         
                <div className="row">
                    <NavLink to='/'><u className='text-white mt-4'><h5 className='text-center'>Login</h5></u></NavLink>
                </div>
            </div>
        </div>
        
    </div>
    )
}
