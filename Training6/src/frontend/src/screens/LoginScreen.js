import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../ducks/modules/auth';

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const { loading, token, message, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      history.push('/app');
    }
  }, [history, token]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return error ? (
    error.message
  ) : loading ? (
    '...Loading'
  ) : (
    <section className='flex justify-center items-center w-full min-h-screen'>
      <div className='container w-3/5 mx-auto px-4 h-full'>
        <div className='px-4 lg:px-10 py-10 pt-0'>
          <form>
            <div className='w-full mb-3 mt-5'>
              <label className='block uppercase text-gray-700 text-xs font-bold mb-2'>
                Email
              </label>
              <input
                type='email'
                className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='w-full mb-3'>
              <label className='block uppercase text-gray-700 text-xs font-bold mb-2'>
                Password
              </label>
              <input
                type='password'
                className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='text-center text-red-500'>
              {message ? message : ''}
            </div>

            <div className='text-center mt-6'>
              <button
                className='bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full'
                type='button'
                onClick={submitHandler}
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
