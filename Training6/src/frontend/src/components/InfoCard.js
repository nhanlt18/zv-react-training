import React from 'react';

const InfoCard = ({ info }) => {
  return (
    <div className='flex flex-col justify-center items-center h-auto w-auto font-medium'>
      <div className='container mx-auto text-4xl text-white bg-gray-400 text-center rounded-md my-3'>
        <p>{info.fullName}</p>
      </div>
      <img
        className='h-36 w-36 rounded-full self-center justify-self-center'
        src='https://www.svgrepo.com/show/17468/avatar.svg'
        alt=''
      />
      <div className='text-lg py-3'>
        <p className='py-1'>Email: {info.email}</p>
        <p className='py-1'>password: {info.password}</p>
        <p className='py-1'>Role: {info.role}</p>
      </div>
    </div>
  );
};

export default InfoCard;
