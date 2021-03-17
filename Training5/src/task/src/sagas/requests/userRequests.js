import axios from 'axios';

export const requestGetUsers = () => {
  return axios.request({
    method: 'get',
    url: '/users',
  });
};

export const requestGetUser = (id) => {
  return axios.request({
    method: 'get',
    url: `/users/${id}`,
  });
};

export const requestAddUser = (firstName, lastName, email) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return axios.post(
    '/users',
    {
      first_name: firstName,
      last_name: lastName,
      email,
    },
    config
  );
};

export const requestEditUser = (id, firstName, lastName, email) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return axios.patch(
    `/users/${id}`,
    {
      first_name: firstName,
      last_name: lastName,
      email: email,
    },
    config
  );
};

export const requestDeleteUser = (id) => {
  return axios.delete(`/users/${id}`);
};
