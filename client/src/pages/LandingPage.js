import React, { useState } from 'react'
import jobHuntLight from '../assets/jobHunt.jpg'
import jobHuntDark from '../assets/jobHunt2.jpg'
import '../css/landingPage.css'
import useDarkMode from '../hooks/useDarkMode'

import { useNavigate } from 'react-router'
import { useAppContext } from '../context/appContext'
import { Navbar } from '../components/Navbar'

function LandingPage() {
    // const [mode, changeMode] = useDarkMode()
    const { darkMode } = useAppContext()
    const navigate = useNavigate()
    return (
        <div >
            <Navbar />
            <main className='landingWrapper'>
                <article>
                    <h1 className='landingHeading'>Welcome to Kareers @ Koders</h1>
                    <p className='landingPara'>An institition that caters to all your software needs with their touch of Koding. Koders isn't your normal software development firm. Koders provide a platform where people can engage themselves in various tech-related activities, be it keeping themselves updated with the latest technology trends, learning a new topic, or maybe teaching one. This is a family of driven enthusiasts where people from various fields come along to contribute their part and help build up the family. We aren't making just customer relations here, we're building a family of technological cognizance.</p>
                    <button onClick={() => { navigate('/register') }}>
                        Login/Register
                    </button>
                </article>
                <img src={`${!darkMode ? jobHuntLight : jobHuntDark}`} alt='Job Hunt' />
            </main>
        </div>
    )
}

export default LandingPage
