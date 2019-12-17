/// helpers ///
const storage = window.localStorage
const ns = (key) => `auth-friends.user.${key}`;

/// user token ///
const setToken = (token) => {
  storage.setItem (ns ('token'), token);
};
const getToken = () => {
  return (
    storage.getItem (ns ('token'))
  );
};
const deleteToken = () => {
  storage.removeItem (ns ('token'));
};

/// user allowed ///
const setAllowed = (status) => {
  storage.setItem (ns ('status'), status ? 'y' : 'n');
}
const getAllowed = () => {
  return (
    storage.getItem (ns ('status')) === 'y' ? true : false
  );
};
const deleteAllowed = () => {
  storage.removeItem (ns ('status'));
};

///
export default {
  token : {
    set : setToken,
    get : getToken,
    delete : deleteToken,
  },
  allowed : {
    set : setAllowed,
    get : getAllowed,
    delete : deleteAllowed,
  },
};
