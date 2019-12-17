export default {
  base : {
    url : 'https://localhost:5000/api',
  },
  ends : {
    login : {
      url : () => '/login',
      requests : [ 'GET' ],
    },
    friends : {
      url : () => '/friends',
      requests : [ 'GET', 'POST' ],
    },
    friend : {
      url : (id) => `/friends/${id}`,
      requests : [ 'GET', 'PUT', 'DELETE' ],
    },
  },
};
