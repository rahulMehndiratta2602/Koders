import { Outlet, Link } from 'react-router-dom'
import { Navbar } from '../../components/Navbar'
import { IoBarChartSharp } from 'react-icons/io5'
import { MdQueryStats } from 'react-icons/md'
import { FaWpforms } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'
import '../../css/dashboard.css'
const SharedLayout = () => {
    return (
        <div className="dashboardWrapper">
            <Navbar />
            <div className="sharedLayout">
                <nav>
                    <span><FaWpforms /><Link to='addJob'>Add Job</Link></span>
                    <span><MdQueryStats /> <Link to='allJobs'>All Jobs</Link></span>
                    <span><ImProfile /><Link to='profile'>Profile</Link></span>
                    <span><IoBarChartSharp /> <Link to=''>Stats</Link> </span>

                </nav>
                <div className='outlet'>
                    <Outlet />
                </div>
            </div >
        </div >
    )
}

export default SharedLayout
