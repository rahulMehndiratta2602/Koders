import { useState } from 'react'
import Alert from '../../components/Alert'
import FormRow from '../../components/FormRow'
import { useAppContext } from '../../context/appContext'

const Profile = () => {
    const { user, showAlert, displayAlert, updateUser, isLoading } =
        useAppContext()

    const [name, setName] = useState(user?.name)
    const [email, setEmail] = useState(user?.email)
    const [lastName, setLastName] = useState(user?.lastName)
    const [location, setLocation] = useState(user?.location)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !email || !lastName || !location) {
            displayAlert()
            return
        }
        updateUser({ name, email, lastName, location })
    }

    return (
        <form className='formHorizontal' onSubmit={handleSubmit}>
            <h3>PROFILE</h3>
            {showAlert && <Alert />}
            <div className='formCenter'>
                <FormRow
                    type='text'
                    name='name'
                    value={name}
                    handleChange={(e) => setName(e.target.value)}
                />
                <FormRow
                    type='text'
                    labelText='last name'
                    name='lastName'
                    value={lastName}
                    handleChange={(e) => setLastName(e.target.value)}
                />
                <FormRow
                    type='email'
                    name='email'
                    value={email}
                    handleChange={(e) => setEmail(e.target.value)}
                />
                <FormRow
                    type='text'
                    name='location'
                    value={location}
                    handleChange={(e) => setLocation(e.target.value)}
                />
                <button className='submitBtn' type='submit' disabled={isLoading}>
                    {isLoading ? 'Please Wait...' : 'save changes'}
                </button>
            </div>
        </form>)
}

export default Profile
