import axios from 'axios';

import { server } from 'routes';
import user from 'tools/user';

const authios = () => {
  return axios.create ({
    baseURL : server.base.url,
    headers : {
      Authorization : user.token.get (),
    },
  });
};

export default authios;
