import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/login.png';


const Login = ({SetLogedin}) => {
  return (
    <div>
      <Template 
        title="Welcome Back"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={loginImg}
        SetLogedin={SetLogedin} 
        formtype="login"
      />
    </div>
  )
}

export default Login
