export default {
  base : () => 'http://localhost:5000/api',
  ends : {
    login : {
      GET : () => '/login',
    },
    friends : {
      GET  : () => '/friends',
      POST : () => '/friends',
    },
    friend : {
      GET    : (id) => `/friends/${id}`,
      PUT    : (id) => `/friends/${id}`,
      DELETE : (id) => `/friends/${id}`,
    },
  },
};
