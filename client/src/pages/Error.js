import React from 'react'
import img from '../assets/404.jpg'
import { Link } from 'react-router-dom'
import '../css/error.css'
import Logo from '../components/Logo'
import { BsMoonFill, BsSun } from 'react-icons/bs'
import { Navbar } from '../components/Navbar'
const Error = () => {

    return (<>
        <Navbar />
        <div className='errorWrapper'>
            <img src={img} alt='not found' />
            <h3>Ohh! page not found</h3>
            <p>We can't seem to find the page you're looking for</p>
            <Link to='/'>back home</Link>
        </div></>
    )
}

export default Error
