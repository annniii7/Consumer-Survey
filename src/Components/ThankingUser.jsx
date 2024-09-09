import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ThankingUser = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set a timeout to redirect to the homepage after 5 seconds (5000 milliseconds)
    const timer = setTimeout(() => {
      navigate('/'); // Redirect to homepage ("/" can be the route of your homepage)
    }, 5000);

    // Cleanup the timer if the component unmounts before the timeout is complete
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <h1 className='text-8xl'>Thank you for your valuable time!</h1>
    </div>
  );
}

export default ThankingUser;

