import React from "react";
import "./Forgetpass.css";


function Forgetpass(){

    return(
        <>
  <div class="login-box">
            <h2>Forget Password ! </h2>
            <form>
               
                <div class="user-box">
                    <input type="text" name="email" required=""></input>
                    <label>Email</label>
                </div>

                <div className="buttons">
                    <a href="{}">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                   Send virify
                    </a>
                 
                </div>
              
            </form>
        </div>     
       
        </>
    )
}
export default Forgetpass;
