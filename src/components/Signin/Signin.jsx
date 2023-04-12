import React from "react";
import "./Signin.css";

  
function Signin(){

    return(
        <>  
         <div class="login-box">
            <h2>Welcome Back!</h2>
            <form>
               
                <div class="user-box">
                    <input type="text" name="email" required=""></input>
                    <label>Email</label>
                </div>


                <div class="user-box">
                    <input type="password" name="password" required=""></input>
                    <label>Password</label>
                <div className="navigate-to-signin">
                    <h2 style={{fontSize:'15px'}}>
                        Don't Have Account? 
                    </h2>
                    
                </div>
                </div>

                <div className="buttons">
                    <a href="{}">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Login
                    </a>
                 
                </div>
              
            </form>
        </div>     
       
        </>
    )
}
export default Signin;

