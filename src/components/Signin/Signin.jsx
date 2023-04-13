import React from "react";
import "./Signin.css";


  
function Signin(){

  
    return (

      <>
      <div className="login-box">
      <h2>Welcom Back!</h2>
      <form>
        <div className="user-box">
          <input type="text" name="" />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="password" name=""/>
          <label>Password</label>
          
        </div>
     
        <div className="login">
        <button>  Login </button>
        </div>
        <div className="signup">
          <p>Don't Have Account? <a href="{}"> Signup </a></p>
        </div>
        <div className="forgetpass">
          <p><a href="{}"> Forget Password?  </a></p>
        </div>
  
      </form>
      </div>
     
   
      </>
    )
}
export default Signin;

