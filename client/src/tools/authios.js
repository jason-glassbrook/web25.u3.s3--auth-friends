import axios from 'axios';

import server from 'routes/server';

const authios = () => {
  const token = localStorage.getItem ('token');
  return axios.create ({
    baseURL: server.base.url,
    headers: {
      Authorization: token
    }
  });
};

export default authios;
