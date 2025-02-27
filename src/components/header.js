import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';  // Lisa see import
import iconBest from '../assets/images/iconBest.png';
import { toggleStatusTab } from '../redux/cartSlice';  // Importi tegevus

const Header = () => {
  const dispatch = useDispatch();  // Hook, et pääseda juurde Reduxi dispatch'ile

  const handleToggle = () => {
    dispatch(toggleStatusTab());  // Käivita tegevus, et muuta statusTab väärtust
  };

  return (
    <header className='flex justify-between items-center mb-5'>
      <Link to="/" className='text-xl font-semibold'>Bestiaria Estonica</Link>
      <div 
        className='w-40 h-8 bg-gray-100 rounded-full flex justify-center items-center relative 
          shadow-md hover:shadow-lg cursor-pointer transition-shadow duration-300'
        onClick={handleToggle}  // Kliki käitleja, et muuta statusTab väärtust
      >
        <img src={iconBest} alt="" className='w-6'/>
        Nimekiri
      </div>
    </header>
  );
};

export default Header;
