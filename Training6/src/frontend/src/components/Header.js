import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../ducks/modules/auth';

const Header = ({ user = false, home = false, myInfo = false }) => {
  const [panelShow, setPanelShow] = useState(false);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className='bg-gray-800'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'></div>
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex space-x-4'>
                <Link
                  to='/app/users'
                  className={`${
                    user
                      ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  }`}
                >
                  User
                </Link>
                <Link
                  to='/app'
                  className={`${
                    home
                      ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  }`}
                >
                  Home
                </Link>
                <Link
                  to='/app/my-info'
                  className={`${
                    myInfo
                      ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  }`}
                >
                  My Info
                </Link>
              </div>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <div className='ml-3 relative'>
              <div>
                <button
                  type='button'
                  className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                  onClick={() => setPanelShow(!panelShow)}
                >
                  <img
                    className='h-8 w-8 rounded-full'
                    src='https://www.svgrepo.com/show/17468/avatar.svg'
                    alt=''
                  />
                </button>
              </div>

              {panelShow && (
                <div className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                  <Link
                    to='/app/my-info'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                  >
                    Your Profile
                  </Link>
                  {/* <Link to='#'> */}
                  <button
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                    onClick={handleLogout}
                  >
                    Log out
                  </button>
                  {/* </Link> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
