import React from 'react';
import profileImage from '../assets/profile.jpg';


// import profileImage from './profile.jpg';
import backimg from '../assets/Back.jpeg';


const Profile = ({ user }) => {
  return (
    <div className="profile">
    <div className='profile-back'>    
      <img src={backimg}/>
    </div>
      <div className='profile-img'>
      <div ><img src={profileImage} alt="Profile Pic" className='imgdiv'/></div>
      <div className='about'>
      <div className='about-top'><h1>Anuj Gosaliya</h1></div>
      <div className='about-bottom'>
      <div><p>6482</p>
      </div>
      </div>
   
      </div>
      </div>
      
    </div>
  );
};

export default Profile;