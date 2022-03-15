import React from 'react';
import user from '../image/user.png';
import '../css/DoctorCard.css';

const DoctorCard = ({ name, speciality}) => {
  return (
    <div className='doctor-card'>
      <img src={user} alt='user' className='user-image' />
      <div className='doctor-card-info'>
        <h3 className='doctor-card-infoName'>{name}</h3>
        <p className='doctor-card-infoSpeciality'>{speciality}</p>
      </div>

    </div>
  );
};

export default DoctorCard;
