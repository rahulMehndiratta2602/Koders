import { useState, useEffect } from 'react'
import { BsMoonFill, BsSun } from 'react-icons/bs'

import Logo2 from '../components/Logo2'

import '../css/register.css'
import FormRow from '../components/FormRow'
import Alert from '../components/Alert'
import { useAppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
}

const Register = () => {
    // const [mode, changeMode] = useDarkMode()
    const [values, setValues] = useState(initialState)
    const { user, isLoading, showAlert, displayAlert, setUpUser } = useAppContext()
    const navigate = useNavigate()
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, email, password, isMember } = values
        if (!email || !password || (!isMember && !name)) {
            displayAlert()
            return
        }
        const currentUser = { name, email, password }
        if (isMember) {
            setUpUser({
                currentUser,
                endPoint: 'login',
                alertText: 'Login Successful! Redirecting...',
            })
        } else {
            setUpUser({
                currentUser,
                endPoint: 'register',
                alertText: 'User Created! Redirecting...',
            })
        }
    }

    const toggleIsMember = () => {
        setValues({ ...values, isMember: !values.isMember })
    }

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate('/')
            }, 3000)
        }
    }, [user, navigate])
    return (
        <>
            <Navbar />

            <main className="registerWrapper">
                <form action="" className="form" onSubmit={handleSubmit}>
                    <Logo2 />
                    {
                        showAlert && <Alert />
                    }
                    <h3>{values.isMember ? 'Login' : 'Register'}</h3>
                    {!values.isMember && <FormRow type="text" name="name" value={values.name} handleChange={handleChange} />}
                    <FormRow type="text" name="email" value={values.email} handleChange={handleChange} />
                    <FormRow type="text" name="password" value={values.password} handleChange={handleChange} />
                    <button type="submit" className="submitBtn">Submit</button>
                    <p>
                        {
                            values.isMember ? "Not a member yet? " : "Already a member? "}
                        < button type="button" onClick={toggleIsMember} className='member-btn' disabled={isLoading}>
                            {values.isMember ? 'Register' : 'Login'}
                        </button>
                    </p>
                </form>
            </main>
        </>
    )
}

export default Register