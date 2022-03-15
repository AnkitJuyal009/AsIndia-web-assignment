import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useUserAuth } from '../context/UserAuthContext';
import { Doctors } from '../data/doctors';
import DoctorCard from './DoctorCard';
import '../css/Home.css';

const Home = () => {
  const { logOut, user } = useUserAuth();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleOnClick = () => {
    setQuery('');
  };

  return (
    <div>
      <div className='welcome-user'>
        Welcome <br />
        {user && user.email}
      </div>
      <input
        type='button'
        value='Logout'
        onClick={handleLogout}
        className='logout-btn'
      />
      <div className='input'>
        <input
          placeholder='Search Doctor name'
          onChange={(e) => setQuery(e.target.value)}
          className='input-search'
        />
        <button onClick={handleOnClick} className='reset-btn'>
          Reset
        </button>
      </div>
      {Doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(query)
      ).map((doctor, id) => (
        <DoctorCard
          name={doctor.name}
          speciality={doctor.speciality}
          key={doctor.id}
        />
      ))}
    </div>
  );
};

export default Home;
