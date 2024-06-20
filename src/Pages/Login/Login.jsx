import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login,signup } from '../../Firebase'
import spinner from'../../assets/netflix_spinner.gif'
const Login = () => {
  const [signState,setSignState]=useState("Sign In");
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const [loading,setLoading]=useState(false);


  const user_auth=async(event)=>{
    event.preventDefault();
    setLoading(true);
    if(signState==="Sign In"){
      await login(email,password);
    }else{
      await signup(name,email,password);
    }
    setLoading(false);
  }
  return (
    loading? <div className='loginspinner'>
      <img src={spinner} alt="" />
    </div>:
    <div className='login'>
      <img src={logo} alt=""  className='loginlogo'/>
      <div className="login-form">
        <h1>{signState}</h1>
        <form action="">
          {signState==="Sign Up"? <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Your Name' />:<></>}
         
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email"  placeholder='Email' />
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Password' />
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="formhelp">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help</p>
          </div>
        </form>
        <div className="formswitch">
          {signState==="Sign In"?
          <p>New To Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>:
          <p>Already Have Account?<span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>}
          
         
        </div>
      </div>
    </div>
  )
}

export default Login
