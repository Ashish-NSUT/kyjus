import React from 'react'
import LoginTemplate from '../components/auth/LoginTemplate'
import loginImage from "../assets/Images/login.webp"

export default function Login() {

  return (
    <LoginTemplate 
    description = "Build skills for today, tomorrow, and beyond."
    coloredDescription = "Education to future-proof your career."
    heading = "Welcome Back"
    image={loginImage}
    type = "login"/>
  )
}
