import { useAppContext } from "../context/appContext"
import { BsSun, BsMoonFill, BsFillCaretDownFill } from 'react-icons/bs'
import Logo from "./Logo"
import { useLocation } from "react-router-dom"
import { FaUserCircle } from 'react-icons/fa'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { useState } from "react"
export const Navbar = () => {
    const { darkMode, changeMode, user } = useAppContext()
    const [showLogout, setShowLogout] = useState(false)
    const location = useLocation()
    // console.log(location)
    return (
        <div>
            <nav className='landingNav'>
                <Logo />
                {
                    user && <span className='dashboardText'>Dashboard</span>
                }
                <div className="navIconsWrapper">
                    <span>
                        {
                            darkMode
                                ? <BsSun className='darkLightIcon' onClick={changeMode} />
                                : <BsMoonFill className='darkLightIcon' onClick={changeMode} />

                        }
                    </span>
                    {
                        user &&
                        <div className="navProfile" onClick={() => setShowLogout(!showLogout)}>
                            <FaUserCircle className='profileIcon' />
                            <span>{user.name}</span>
                            <BsFillCaretDownFill className='downIcon' />
                            {showLogout && <div className="logOut">
                                <RiLogoutBoxRLine />
                                Logout
                            </div>}
                        </div>
                    }
                </div>

            </nav>
        </div>
    )
}
