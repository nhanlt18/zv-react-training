import React, { useState } from 'react';

const InfoCard = ({ info }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='flex flex-col justify-center items-center h-auto w-auto font-medium'>
      <div className='container p-3 m-3 text-4xl text-white bg-gray-400 text-center rounded-md'>
        <p>{info.fullName}</p>
      </div>
      <img
        className='h-36 w-36 rounded-full self-center justify-self-center'
        src='https://www.svgrepo.com/show/17468/avatar.svg'
        alt=''
      />
      <div className='text-lg py-3 text-gray-500'>
        <p className='py-1'>Email: {info.email}</p>
        <div>
          <p className='py-1'>
            password:{' '}
            {`${
              showPassword ? info.password : '*'.repeat(info.password.length)
            }`}
            <span onClick={handleShowPassword} className='px-2 cursor-pointer'>
              <i
                className={`${
                  showPassword ? 'far fa-eye-slash' : 'far fa-eye'
                } text-sm`}
              ></i>
            </span>
          </p>
        </div>
        <p className='py-1'>Role: {info.role}</p>
      </div>
    </div>
  );
};

export default InfoCard;
