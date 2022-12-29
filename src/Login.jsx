import React, { useState } from 'react'

const Login = (props) => {
    const [user,setUser]=useState({});
    const handleChange=(name,value)=>{
      user[name]=value;

    }
     const handleLogin=()=>{
      if(user.user==='user1' && user.password=='1234567')
      props.setlogin(false)
      else
      alert("Please enter correct credentials")
     }
  return (
    <form className='App'>
      <h4>The demo username and password is user1 and 1234567</h4>
    <label>UserName</label>
    <input type='text' onChange={(e)=>handleChange('user',e.target.value)}/>
    <label>Password</label>
    <input type='text' onChange={(e)=>handleChange('password',e.target.value)}/>
    <button type='button' className='btn' onClick={handleLogin}>Login</button>
    </form>
  )
}

export default Login;