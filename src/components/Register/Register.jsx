import React, { useState } from "react";
import "./Register.css";
import axios from "axios";



function Register(){

    const[user,setuser]=useState({
        username:"",
        password:"",
        email:""
    })

    function getuserinfo(e){

        let myuser={...user};
        myuser[e.target.name]=e.target.value;
        setuser(myuser)
    }

    async function usersubmit(e){
        e.preventDefault()
        let request = await axios.post('http://103.48.193.225:9000/customers/register',user);
        localStorage.setItem("usertoken",request.data.token)

    }

    return(
        <>
        <div class="login-box">
            <h2>Create Your Account</h2>
            <form onSubmit={usersubmit}>
                <div class="user-box">
                    <input type="text" name="username" required="" onChange={getuserinfo}></input>
                    <label>Username</label>
                </div>


                <div class="user-box">
                    <input type="text" name="email" required="" onChange={getuserinfo}></input>
                    <label>Email</label>
                </div>


                <div class="user-box">
                    <input type="password" name="password" required="" onChange={getuserinfo}></input>
                    <label>Password</label>
                <div className="navigate-to-signin">
                    <h2 style={{fontSize:'15px'}}>
                        Already Have Account ? 
                    </h2>
                    
                </div>
                </div>

                <div className="buttons">
                <button type="submit">
                <a href="{}" >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Signup
                    </a>
                </button>
                  
                   
                 
                    <a href="{}" style={{fontSize:'13px', }}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Signup with 
                    </a>
                </div>
              
            </form>
        </div>     
        </>
    )
}
export default Register;
