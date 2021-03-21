import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NotFoundScreen = ({ history }) => {
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token) {
      history.push('/login');
    }
  }, [token, history]);

  return (
    <div className='flex relative justify-center items-center h-screen'>
      <div className='absolute p-3 m-3 left-0 top-0'>
        <Link to='/app'>
          <button className='p-1 text-gray-500 hover:bg-gray-200 focus:outline-none rounded-md'>
            <i className='fas fa-chevron-left'></i> Back to Home
          </button>
        </Link>
      </div>
      <div>
        <div className='p-2 m-2 text-9xl text-red-400'>404 Not Found</div>
      </div>
    </div>
  );
};

export default NotFoundScreen;
