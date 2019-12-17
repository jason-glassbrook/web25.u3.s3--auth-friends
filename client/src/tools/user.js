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
const clearToken = () => {
  storage.removeItem (ns ('token'));
};

/// user allowed ///
const setIsAllowed = (isAllowed) => {
  storage.setItem (ns ('isAllowed'), isAllowed ? 'y' : 'n');
}
const getIsAllowed = () => {
  return (
    storage.getItem (ns ('isAllowed')) === 'y' ? true : false
  );
};
const clearIsAllowed = () => {
  storage.removeItem (ns ('isAllowed'));
};

///
export default {
  token : {
    set : setToken,
    get : getToken,
    clear : clearToken,
  },
  isAllowed : {
    set : setIsAllowed,
    get : getIsAllowed,
    clear : clearIsAllowed,
  },
  clear : () => {
    clearToken ();
    clearIsAllowed ();
  },
};
