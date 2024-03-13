import React from 'react'
import LoginTemplate from '../components/auth/LoginTemplate'
import signupImage from "../assets/Images/signup.webp"

export default function Signup() {
  return (
    <LoginTemplate 
    description = "Build skills for today, tomorrow, and beyond."
    coloredDescription = "Education to future-proof your career."
    heading = "Join the millions learning to code with Kyjus for free"
    image={signupImage}
    type = "signup"/>
  )
}
