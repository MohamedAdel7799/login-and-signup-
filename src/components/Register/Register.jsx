import React from "react";
import "./Register.css";



function Register(){

    return(
        <>
        <div class="login-box">
            <h2>Create Your Account</h2>
            <form>
                <div class="user-box">
                    <input type="text" name="username" required=""></input>
                    <label>Username</label>
                </div>


                <div class="user-box">
                    <input type="text" name="email" required=""></input>
                    <label>Email</label>
                </div>


                <div class="user-box">
                    <input type="password" name="password" required=""></input>
                    <label>Password</label>
                <div className="navigate-to-signin">
                    <h2 style={{fontSize:'15px'}}>
                        Already Have Account ? 
                    </h2>
                    
                </div>
                </div>

                <div className="buttons">
                    <a href="{}">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Signup
                    </a>
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
