import React from 'react';
import './user_profile.css'
import { Link, useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const navigate = useNavigate()
  const NavigatePage = () => navigate('view-profile')
    return (
        <div>
          <nav>
            <ul className='users-profile-dashboard-navbar'>
              <li>
                <Link to="/view-profile">User Profile</Link>
              </li>
              <li>
                <Link to="/edit-profile">Edit Profile</Link>
              </li>
              <li>
                <Link to="/change-password">Change Password</Link>
              </li>
            </ul>
        </nav>
        
        </div>
    );
}

export default UserProfile;
