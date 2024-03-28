import './style.scss'
import userpic from '../../assets/images/user.jpg'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='w-100 nav-bar'>
      <div className='container dflex justify-space-between align-center'>

        <div className='profile-title dflex align-center'>
          <div className='profile-block'>
            <img src={userpic} alt="user-profile-pic" />
          </div>
          <div className='profile-name'>
            Mohsin Rasheed
          </div>
        </div>

        <div className='nav-container'>
          <Link className='navlinks' to={'/dashboard'}>Dashboard</Link>
          <Link className='navlinks' to={'/clients'}>Clients</Link>
          <Link className='navlinks' to={'/tasks'}>My Tasks</Link>
        </div>

        <div className='logout-link'>
          <Link className='navlinks' to={''}>Logout</Link>
        </div>

      </div>
    </div>
    );
}

export default NavBar;