import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const ThankingUser = () => {
  const navigate = useNavigate();

  useEffect(() => {
  
    const timer = setTimeout(() => {
      navigate('/'); 
    }, 5000);

    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <h1 className='text-8xl'>Thank you for your valuable time!</h1>
    </div>
  );
}

export default ThankingUser;

