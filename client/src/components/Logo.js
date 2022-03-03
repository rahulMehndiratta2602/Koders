import React from 'react'
import { useNavigate } from 'react-router'
import logo from '../assets/logo2.png'

function Logo() {
    const navigate = useNavigate()
    return (
        <img src={logo} alt="Logo" className="logo" onClick={() => navigate('/')} />
    )
}

export default Logo
