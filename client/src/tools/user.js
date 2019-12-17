const storage = window.localStorage
const ns = (key) => `auth-friends.user.${key}`;

/// user token ///
const setToken = (token) => {
  storage.setItem (ns ('token'), token);
};
const getToken = () => {
  storage.getItem (ns ('token'));
};
const deleteToken = () => {
  storage.removeItem (ns ('token'));
};

/// user logged status ///
const setStatus = (status) => {
  storage.setItem (ns ('status'), status ? 'i' : 'o');
}
const getStatus = () => {
  storage.getItem (ns ('status'));
};
const deleteStatus = () => {
  storage.removeItem (ns ('status'));
};

export default {
  token : {
    set : setToken,
    get : getToken,
    delete : deleteToken,
  },
  status : {
    set : setStatus,
    get : getStatus,
    delete : deleteStatus,
  },
};
