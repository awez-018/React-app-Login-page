import React, { useState } from "react";
import "./loginform.css";
const LoginForm=()=>{
    const[popupStyle, ShowPopup ]= useState("hide")
    const popup=()=>{
        ShowPopup("login-popup")
        setTimeout(()=>ShowPopup("hide"),3000)
    }
    return(
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <div className="login-btn" onClick={popup}>Login</div>
            <p className="text">or login using</p>
            <div className="alt-login">
                <div className="facebook"></div>
                    <div className="google"></div>
                 </div>
                 <div className={popupStyle}>
                    <h3>Login Failed</h3>
                    <p>Username or password incorrect</p>
                    </div>
                    </div>
    )
}
export default LoginForm;
